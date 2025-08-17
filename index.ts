import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync } from 'fs';
import * as path from 'path';

// Ensure the output directory exists
const outputDir = path.join(__dirname, 'output');
mkdirSync(outputDir, { recursive: true });
mkdirSync(path.join(outputDir, 'entry'), { recursive: true });
mkdirSync(path.join(outputDir, 'chunks'), { recursive: true });
mkdirSync(path.join(outputDir, 'nodes'), { recursive: true });

fetch('https://wplace.live')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.text();
  })
  .then(html => {
    const $ = cheerio.load(html);
    const scripts = $('link[rel="modulepreload"]');
    const scriptUrls = scripts.map((i, el) => {
      const pathname = $(el).attr('href');
      if (!pathname) return '';
      const url = pathname.replace('.', '');
      return new URL(url, 'https://wplace.live').href;
    }).get();
    for (const scriptUrl of scriptUrls) {
      fetch(scriptUrl)
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.text();
        })
        .then(scriptContent => {
          const fileName = scriptUrl.replace('https://wplace.live/_app/immutable/', '') || 'script.js';
          const filePath = path.join(outputDir, fileName);
          writeFileSync(filePath, scriptContent);
          console.log(`Saved script to ${filePath}`);
        })
        .catch(error => {
          console.error(`Error fetching script ${scriptUrl}:`, error);
        });
    }
  })
  .catch(error => {
    console.error('Error fetching the website:', error);
  });