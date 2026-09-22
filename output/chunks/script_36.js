import {
  J as e,
  Z as t,
  o as n,
  v as r
} from "./DhUcoEdH.js";
import "./B8UK1oE5.js";
var i = `# {{wplace_icon}} Treasure Hunt {{wplace_icon}}

A blank \`3000x3000\` canvas opens on the map for eight days, with \`50,000\` treasures and \`500\` event frames buried in it — a new wave of them every day. Paint the pixel one is under and the prize is yours.

## Event Details:

- Click on the button below to visit the canvas
- Draw anything (the rules are more lax on the canvas)
- Griefing is allowed on the event canvas
- **Event starts:** <t:1790046000:F>
- **Event ends:** <t:1790726340:F>

## Rewards

- **50,000 treasures** paying **500**, **1,000**, **5,000** or **10,000 droplets** — **75,000,000 droplets** across the whole hunt
- **500 frames** buried the same way, holding the **exclusive event frame** instead of droplets, and those join the hunt on **September 25**
- A **participation badge** on your profile once the event closes

Happy hunting, artists!
`,
  a = `# {{wplace_icon}} Treasure Hunt {{wplace_icon}}

Um canvas em branco de \`3000x3000\` abre no mapa por oito dias, com \`50.000\` tesouros e \`500\` molduras do evento enterrados nele — uma leva nova todo dia. Pinte o pixel onde um está e o prêmio é seu.

## Detalhes do Evento:

- Clique no botão abaixo para visitar o canvas
- Desenhe qualquer coisa (as regras estão mais leves no canvas)
- Griefing é permitido no canvas do evento
- **O evento começa em:** <t:1790046000:F>
- **O evento termina em:** <t:1790726340:F>

## Recompensas

- **50.000 tesouros** pagando **500**, **1.000**, **5.000** ou **10.000 droplets** — **75.000.000 de droplets** em toda a caça
- **500 molduras** enterradas do mesmo jeito, com a **moldura exclusiva do evento** em vez de gotas, e essas entram na caça em **25 de setembro**
- Um **badge de participação** no seu perfil quando o evento fechar

Boa caçada, artistas!
`,
  o = `september-1`,
  s = `Treasure Hunt`,
  c = {
    minTile: {
      x: 795,
      y: 1698
    },
    maxTile: {
      x: 797,
      y: 1700
    }
  },
  l = 1790046e6,
  u = 179072634e4,
  d = {
    lat: -75.65043099746549,
    lng: -39.990234375,
    zoom: 10.12
  },
  f = {
    id: o,
    titleEn: s,
    titlePt: s,
    textEn: i,
    textPt: a
  },
  p = new Set([`$$slots`, `$$events`, `$$legacy`]),
  m = t(`<svg><path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM278-526 80-724v-160h160l198 198-160 160Z"></path></svg>`);

function h(t, i) {
  let a = n(i, p);
  var o = m();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...a
  })), e(t, o)
}
var g = [f];
export {
  o as a, s as c, u as i, h as n, d as o, c as r, l as s, g as t
};