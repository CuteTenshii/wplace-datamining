import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import * as path from 'path';
import beautify from 'js-beautify';

const outputDir = path.join(__dirname, 'output');

// Remove existing output directory if it exists
rmSync(outputDir, { recursive: true, force: true });

// Ensure the output directory exists
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
    for (let i = 0; i < scriptUrls.length; i++) {
      const scriptUrl = scriptUrls[i];
      if (!scriptUrl) continue;
      fetch(scriptUrl)
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.text();
        })
        .then(scriptContent => {
          let fileName = scriptUrl.replace('https://wplace.live/_app/immutable/', '') || 'script.js';
          if (fileName.includes('entry/')) fileName = fileName.replace(/([a-z]+)\.[a-zA-Z0-9-_]+\.js$/, '$1.js');
          else if (fileName.includes('chunks/')) fileName = fileName.replace(/([a-zA-Z0-9-_]+)\.js$/, `script_${i}.js`);
          else if (fileName.includes('nodes/')) fileName = fileName.replace(/([0-9]+)\.[a-zA-Z0-9-_]+\.js$/, '$1.js');
          const filePath = path.join(outputDir, fileName);

          // Beautify the script content
          const beautifiedContent = beautify.js(scriptContent, {
            indent_size: 2,
            space_in_empty_paren: true,
          });
          // Write the beautified content to the file
          writeFileSync(filePath, beautifiedContent);

          console.log(`Saved ${scriptUrl.replace('https://wplace.live/_app/immutable/', '')} script to ${filePath}`);
        })
        .catch(error => {
          console.error(`Error fetching script ${scriptUrl}:`, error);
        });
    }
  })
  .catch(error => {
    console.error('Error fetching the website:', error);
  });