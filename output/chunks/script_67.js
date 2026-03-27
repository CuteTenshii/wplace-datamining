var _e = Object.defineProperty;
var Pe = (r, e, t) => e in r ? _e(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var b = (r, e, t) => Pe(r, typeof e != "symbol" ? e + "" : e, t);
import "./R8IGls_V.js";
import {
  p as Ie,
  d as $,
  r as T,
  s as Q,
  t as le,
  a as ae,
  b as Ce,
  c as de
} from "./CGB_NLTm.js";
import {
  s as O
} from "./B_fbzeFJ.js";
import {
  i as Le
} from "./sHQuLi6V.js";
import {
  h as Ee
} from "./CfNWUbOa.js";
import {
  s as Be
} from "./D6q9sUuL.js";
import {
  p as qe
} from "./C3Q7q3VU.js";
import "./BjaF463B.js";
import {
  l as De
} from "./CE6ncqbO.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ed2835ed53e86562ae86aab3834736b02129c64f"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "e6d63d65-0f51-4e18-95af-22636b10acaa", r._sentryDebugIdIdentifier = "sentry-dbid-e6d63d65-0f51-4e18-95af-22636b10acaa")
  } catch {}
})();
const Nt = [{
  version: "1.0.0",
  title: "Welcome to WPlace!",
  markdown: "Welcome to WPlace, a platform to share and explore pixel art creations!"
}, {
  version: "1.1.0",
  title: "✨ More Like You Update",
  markdown: `We have just launched a new update focused on **personalization**!
You can now customize your profile with **profile frames**, **custom fonts**, and **name styles**, to really show off who you are to anyone who clicks on your pixels!

### 🖼️ Profile Frames
Frame your profile in style!
- Custom borders around your profile picture - just like our Event Frames
- Launching with **over 10 frames**
- You can own **multiple** frames and change them whenever you want

### 🔤 Custom Fonts
Choose the perfect font for your name!
- Launching with **5 new fonts**
- Fonts are only applied to your name, not your ID (\`#123456\`)

### 🎨 Name Styles
Stand out with color _and_ animation!
- Colorful effects
- Subtle animations in select styles

### 🏅 Badges
Badges are rare items that players earn through merit. No badge can be purchased, transferred, or obtained by any means other than:
- Participating in events
- Completing challenging missions in the game
- In some cases, being part of Wplace's history

Badges are essentially honors for players to display on their profile. We're launching with **4 visible badges**!

### 🎃 Updated Event Frames
We have also updated the existing **Christmas** and **Halloween** event frames:
- Properly scaled to your avatar
- More polished with detailed designs
- Better fit for Wplace's style

### 🌙 Dark Mode
You can rest your eyes! We're releasing the existing version of our dark mode to all users.
- Additional themes will be added in the future
- To apply dark mode, click your profile and find the button next to the notifications icon

### 🛒 Obtaining the new styles
The new **profile frames**, **custom fonts** and **name styles** can all be found in **the shop**, purchasable with **Droplets**!
To apply your profile frames, custom fonts and name styles, **click your profile**, followed by the **pencil icon**.

### 🚀 Future updates
This is just the beginning of a new chapter for Wplace! You can expect more frequent updates to the website, as we have many features already in the works, and even more planned! We thank you for your suggestions and patience, as we continue working to keep up with a response that's far exceeded our expectations!

The **More Like You Update** is **LIVE NOW** - go check it out and share what designs you come up with! 🎉`
}, {
  version: "1.1.1",
  title: "🛠️ Quality & Cosmetics Improvements",
  markdown: `This update brings several improvements and fixes for a smoother experience:

- Small bugs fixed on the frontend for both mobile and desktop
- Fixed minor issues when equipping cosmetics
- Cosmetics released within the last 7 days now display a "New" badge
- 5 new frames are now available in the shop
- New shop view to see all available frames
- Improved consistency of texts for translations

We continue to listen to community feedback to make WPlace even better!`
}, {
  version: "1.1.2",
  title: "🧰 UI Fixes & Moderation Improvements",
  markdown: `This patch focuses on interface stability across devices and a better moderation workflow:

- Fixed the side menu layout where buttons could overflow outside the menu bounds
- Fixed the pixel information layout that was displaying incorrectly on some devices
- Delivered multiple fixes and improvements to the staff moderation screen`
}, {
  version: "1.2.0",
  title: "🖼️ Pixel Overlays & Achievement Frames",
  markdown: `
Import any image and position it over the map as a painting guide! Access overlays from the **new button in the main sidebar**.

- **Import & export** overlays to share or reuse them
- **Resize, rename, reorder, center, flip**, and restore aspect ratio
- **Three overlay modes**: Full Pixel, Center Dots, or Half Diagonal
- **Filter by selected color** to focus on one color at a time

### 🏅 Achievement Frames

New exclusive Avatar Frames that can only be unlocked through gameplay! Reach any of these milestones to earn yours:

- 100,000 Pixels Painted
- 500,000 Pixels Painted
- 1,000,000 Pixels Painted

**Note:** Existing players who already meet these milestones will need to paint at least one pixel to retroactively unlock their frames.

### 🛒 Store Frames

New Avatar Frames are now available for purchase in the Store:

- Lucky Horse
- Monster Trainer Cap
- Cool Hoodie
- Diamond Helmet
- Elf Cap
- Flower Hair
- Scout Hat
- Crimson Dragon
- Red Astronaut
- Empty Hero
- Flying Berry
- Loom Choir
- Party Bunny

### 🛠️ Fixes & Improvements

- Middle-click a pixel to select its color
- Fonts and name styles can now be equipped directly from the Store
- Improved the selected pixel HUD layout, now also showing equipped Profile Badges
- Fixed avatar sizes not displaying correctly with Avatar Frames equipped
- Fixed color picker sampling on high-DPI and fullscreen setups
- Fixed a stray canvas click when confirming a profile picture`
}];
var Fe = de('<span class="badge badge-primary"> </span>'),
  Ne = de('<article class="card border-base-content/10 bg-base-100 border shadow-sm"><div class="card-body gap-4"><div class="flex items-center gap-3"><span class="badge badge-ghost"> </span> <!></div> <h2 class="text-xl font-semibold"> </h2> <div class="prose max-w-none"><!></div></div></article>');

function Mt(r, e) {
  Ie(e, !0);
  let t = qe(e, "latest", 3, !1);
  var s = Ne(),
    n = $(s),
    l = $(n),
    a = $(l),
    i = $(a);
  T(a);
  var h = Q(a, 2);
  {
    var o = k => {
      var d = Fe(),
        m = $(d, !0);
      T(d), le(v => O(m, v), [() => De()]), ae(k, d)
    };
    Le(h, k => {
      t() && k(o)
    })
  }
  T(l);
  var p = Q(l, 2),
    g = $(p, !0);
  T(p);
  var u = Q(p, 2),
    c = $(u);
  Ee(c, () => e.patchNote.html), T(u), T(n), T(s), le(() => {
    O(i, `v${e.patchNote.version??""}`), Be(p, "id", e.patchNote.version), O(g, e.patchNote.title)
  }), ae(r, s), Ce()
}

function Y() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  }
}
var _ = Y();

function fe(r) {
  _ = r
}
var z = {
  exec: () => null
};

function f(r, e = "") {
  let t = typeof r == "string" ? r : r.source,
    s = {
      replace: (n, l) => {
        let a = typeof l == "string" ? l : l.source;
        return a = a.replace(w.caret, "$1"), t = t.replace(n, a), s
      },
      getRegex: () => new RegExp(t, e)
    };
  return s
}
var Me = (() => {
    try {
      return !!new RegExp("(?<=1)(?<!1)")
    } catch {
      return !1
    }
  })(),
  w = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: r => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}#`),
    htmlBeginRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`, "i"),
    blockquoteBeginRegex: r => new RegExp(`^ {0,${Math.min(3,r-1)}}>`)
  },
  Ze = /^(?:[ \t]*(?:\n|$))+/,
  He = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  We = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  Qe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  X = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  ke = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  xe = f(ke).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(),
  Oe = f(ke).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
  V = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  je = /^[^\n]+/,
  J = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  Ge = f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", J).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
  Ue = f(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, X).getRegex(),
  Z = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  K = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  Ye = f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", K).replace("tag", Z).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
  be = f(V).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex(),
  Xe = f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", be).getRegex(),
  ee = {
    blockquote: Xe,
    code: He,
    def: Ge,
    fences: We,
    heading: Qe,
    hr: E,
    html: Ye,
    lheading: xe,
    list: Ue,
    newline: Ze,
    paragraph: be,
    table: z,
    text: je
  },
  oe = f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex(),
  Ve = {
    ...ee,
    lheading: Oe,
    table: oe,
    paragraph: f(V).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", oe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex()
  },
  Je = {
    ...ee,
    html: f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", K).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: z,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: f(V).replace("hr", E).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", xe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  },
  Ke = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  et = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  me = /^( {2,}|\\)\n(?!\s*$)/,
  tt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  H = /[\p{P}\p{S}]/u,
  te = /[\s\p{P}\p{S}]/u,
  we = /[^\s\p{P}\p{S}]/u,
  rt = f(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, te).getRegex(),
  ye = /(?!~)[\p{P}\p{S}]/u,
  nt = /(?!~)[\s\p{P}\p{S}]/u,
  st = /(?:[^\s\p{P}\p{S}]|~)/u,
  Se = /(?![*_])[\p{P}\p{S}]/u,
  it = /(?![*_])[\s\p{P}\p{S}]/u,
  lt = /(?:[^\s\p{P}\p{S}]|[*_])/u,
  at = f(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Me ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(),
  Re = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  ot = f(Re, "u").replace(/punct/g, H).getRegex(),
  ct = f(Re, "u").replace(/punct/g, ye).getRegex(),
  ve = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  ht = f(ve, "gu").replace(/notPunctSpace/g, we).replace(/punctSpace/g, te).replace(/punct/g, H).getRegex(),
  pt = f(ve, "gu").replace(/notPunctSpace/g, st).replace(/punctSpace/g, nt).replace(/punct/g, ye).getRegex(),
  ut = f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, we).replace(/punctSpace/g, te).replace(/punct/g, H).getRegex(),
  gt = f(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Se).getRegex(),
  dt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
  ft = f(dt, "gu").replace(/notPunctSpace/g, lt).replace(/punctSpace/g, it).replace(/punct/g, Se).getRegex(),
  kt = f(/\\(punct)/, "gu").replace(/punct/g, H).getRegex(),
  xt = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
  bt = f(K).replace("(?:-->|$)", "-->").getRegex(),
  mt = f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", bt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
  F = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
  wt = f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", F).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
  $e = f(/^!?\[(label)\]\[(ref)\]/).replace("label", F).replace("ref", J).getRegex(),
  Te = f(/^!?\[(ref)\](?:\[\])?/).replace("ref", J).getRegex(),
  yt = f("reflink|nolink(?!\\()", "g").replace("reflink", $e).replace("nolink", Te).getRegex(),
  ce = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  re = {
    _backpedal: z,
    anyPunctuation: kt,
    autolink: xt,
    blockSkip: at,
    br: me,
    code: et,
    del: z,
    delLDelim: z,
    delRDelim: z,
    emStrongLDelim: ot,
    emStrongRDelimAst: ht,
    emStrongRDelimUnd: ut,
    escape: Ke,
    link: wt,
    nolink: Te,
    punctuation: rt,
    reflink: $e,
    reflinkSearch: yt,
    tag: mt,
    text: tt,
    url: z
  },
  St = {
    ...re,
    link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", F).getRegex(),
    reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", F).getRegex()
  },
  j = {
    ...re,
    emStrongRDelimAst: pt,
    emStrongLDelim: ct,
    delLDelim: gt,
    delRDelim: ft,
    url: f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ce).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: f(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ce).getRegex()
  },
  Rt = {
    ...j,
    br: f(me).replace("{2,}", "*").getRegex(),
    text: f(j.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  },
  q = {
    normal: ee,
    gfm: Ve,
    pedantic: Je
  },
  I = {
    normal: re,
    gfm: j,
    breaks: Rt,
    pedantic: St
  },
  vt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
  he = r => vt[r];

function R(r, e) {
  if (e) {
    if (w.escapeTest.test(r)) return r.replace(w.escapeReplace, he)
  } else if (w.escapeTestNoEncode.test(r)) return r.replace(w.escapeReplaceNoEncode, he);
  return r
}

function pe(r) {
  try {
    r = encodeURI(r).replace(w.percentDecode, "%")
  } catch {
    return null
  }
  return r
}

function ue(r, e) {
  var l;
  let t = r.replace(w.findPipe, (a, i, h) => {
      let o = !1,
        p = i;
      for (; --p >= 0 && h[p] === "\\";) o = !o;
      return o ? "|" : " |"
    }),
    s = t.split(w.splitPipe),
    n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((l = s.at(-1)) != null && l.trim()) && s.pop(), e)
    if (s.length > e) s.splice(e);
    else
      for (; s.length < e;) s.push("");
  for (; n < s.length; n++) s[n] = s[n].trim().replace(w.slashPipe, "|");
  return s
}

function C(r, e, t) {
  let s = r.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s && r.charAt(s - n - 1) === e;) n++;
  return r.slice(0, s - n)
}

function $t(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < r.length; s++)
    if (r[s] === "\\") s++;
    else if (r[s] === e[0]) t++;
  else if (r[s] === e[1] && (t--, t < 0)) return s;
  return t > 0 ? -2 : -1
}

function Tt(r, e = 0) {
  let t = e,
    s = "";
  for (let n of r)
    if (n === "	") {
      let l = 4 - t % 4;
      s += " ".repeat(l), t += l
    } else s += n, t++;
  return s
}

function ge(r, e, t, s, n) {
  let l = e.href,
    a = e.title || null,
    i = r[1].replace(n.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let h = {
    type: r[0].charAt(0) === "!" ? "image" : "link",
    raw: t,
    href: l,
    title: a,
    text: i,
    tokens: s.inlineTokens(i)
  };
  return s.state.inLink = !1, h
}

function zt(r, e, t) {
  let s = r.match(t.other.indentCodeCompensation);
  if (s === null) return e;
  let n = s[1];
  return e.split(`
`).map(l => {
    let a = l.match(t.other.beginningSpace);
    if (a === null) return l;
    let [i] = a;
    return i.length >= n.length ? l.slice(n.length) : l
  }).join(`
`)
}
var N = class {
    constructor(r) {
      b(this, "options");
      b(this, "rules");
      b(this, "lexer");
      this.options = r || _
    }
    space(r) {
      let e = this.rules.block.newline.exec(r);
      if (e && e[0].length > 0) return {
        type: "space",
        raw: e[0]
      }
    }
    code(r) {
      let e = this.rules.block.code.exec(r);
      if (e) {
        let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: e[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? t : C(t, `
`)
        }
      }
    }
    fences(r) {
      let e = this.rules.block.fences.exec(r);
      if (e) {
        let t = e[0],
          s = zt(t, e[3] || "", this.rules);
        return {
          type: "code",
          raw: t,
          lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
          text: s
        }
      }
    }
    heading(r) {
      let e = this.rules.block.heading.exec(r);
      if (e) {
        let t = e[2].trim();
        if (this.rules.other.endingHash.test(t)) {
          let s = C(t, "#");
          (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (t = s.trim())
        }
        return {
          type: "heading",
          raw: e[0],
          depth: e[1].length,
          text: t,
          tokens: this.lexer.inline(t)
        }
      }
    }
    hr(r) {
      let e = this.rules.block.hr.exec(r);
      if (e) return {
        type: "hr",
        raw: C(e[0], `
`)
      }
    }
    blockquote(r) {
      let e = this.rules.block.blockquote.exec(r);
      if (e) {
        let t = C(e[0], `
`).split(`
`),
          s = "",
          n = "",
          l = [];
        for (; t.length > 0;) {
          let a = !1,
            i = [],
            h;
          for (h = 0; h < t.length; h++)
            if (this.rules.other.blockquoteStart.test(t[h])) i.push(t[h]), a = !0;
            else if (!a) i.push(t[h]);
          else break;
          t = t.slice(h);
          let o = i.join(`
`),
            p = o.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          s = s ? `${s}
${o}` : o, n = n ? `${n}
${p}` : p;
          let g = this.lexer.state.top;
          if (this.lexer.state.top = !0, this.lexer.blockTokens(p, l, !0), this.lexer.state.top = g, t.length === 0) break;
          let u = l.at(-1);
          if ((u == null ? void 0 : u.type) === "code") break;
          if ((u == null ? void 0 : u.type) === "blockquote") {
            let c = u,
              k = c.raw + `
` + t.join(`
`),
              d = this.blockquote(k);
            l[l.length - 1] = d, s = s.substring(0, s.length - c.raw.length) + d.raw, n = n.substring(0, n.length - c.text.length) + d.text;
            break
          } else if ((u == null ? void 0 : u.type) === "list") {
            let c = u,
              k = c.raw + `
` + t.join(`
`),
              d = this.list(k);
            l[l.length - 1] = d, s = s.substring(0, s.length - u.raw.length) + d.raw, n = n.substring(0, n.length - c.raw.length) + d.raw, t = k.substring(l.at(-1).raw.length).split(`
`);
            continue
          }
        }
        return {
          type: "blockquote",
          raw: s,
          tokens: l,
          text: n
        }
      }
    }
    list(r) {
      var t, s;
      let e = this.rules.block.list.exec(r);
      if (e) {
        let n = e[1].trim(),
          l = n.length > 1,
          a = {
            type: "list",
            raw: "",
            ordered: l,
            start: l ? +n.slice(0, -1) : "",
            loose: !1,
            items: []
          };
        n = l ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = l ? n : "[*+-]");
        let i = this.rules.other.listItemRegex(n),
          h = !1;
        for (; r;) {
          let p = !1,
            g = "",
            u = "";
          if (!(e = i.exec(r)) || this.rules.block.hr.test(r)) break;
          g = e[0], r = r.substring(g.length);
          let c = Tt(e[2].split(`
`, 1)[0], e[1].length),
            k = r.split(`
`, 1)[0],
            d = !c.trim(),
            m = 0;
          if (this.options.pedantic ? (m = 2, u = c.trimStart()) : d ? m = e[1].length + 1 : (m = c.search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = c.slice(m), m += e[1].length), d && this.rules.other.blankLine.test(k) && (g += k + `
`, r = r.substring(k.length + 1), p = !0), !p) {
            let v = this.rules.other.nextBulletRegex(m),
              B = this.rules.other.hrRegex(m),
              se = this.rules.other.fencesBeginRegex(m),
              ie = this.rules.other.headingBeginRegex(m),
              ze = this.rules.other.htmlBeginRegex(m),
              Ae = this.rules.other.blockquoteBeginRegex(m);
            for (; r;) {
              let W = r.split(`
`, 1)[0],
                P;
              if (k = W, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), P = k) : P = k.replace(this.rules.other.tabCharGlobal, "    "), se.test(k) || ie.test(k) || ze.test(k) || Ae.test(k) || v.test(k) || B.test(k)) break;
              if (P.search(this.rules.other.nonSpaceChar) >= m || !k.trim()) u += `
` + P.slice(m);
              else {
                if (d || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || se.test(c) || ie.test(c) || B.test(c)) break;
                u += `
` + k
              }
              d = !k.trim(), g += W + `
`, r = r.substring(W.length + 1), c = P.slice(m)
            }
          }
          a.loose || (h ? a.loose = !0 : this.rules.other.doubleBlankLine.test(g) && (h = !0)), a.items.push({
            type: "list_item",
            raw: g,
            task: !!this.options.gfm && this.rules.other.listIsTask.test(u),
            loose: !1,
            text: u,
            tokens: []
          }), a.raw += g
        }
        let o = a.items.at(-1);
        if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
        else return;
        a.raw = a.raw.trimEnd();
        for (let p of a.items) {
          if (this.lexer.state.top = !1, p.tokens = this.lexer.blockTokens(p.text, []), p.task) {
            if (p.text = p.text.replace(this.rules.other.listReplaceTask, ""), ((t = p.tokens[0]) == null ? void 0 : t.type) === "text" || ((s = p.tokens[0]) == null ? void 0 : s.type) === "paragraph") {
              p.tokens[0].raw = p.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), p.tokens[0].text = p.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
              for (let u = this.lexer.inlineQueue.length - 1; u >= 0; u--)
                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)) {
                  this.lexer.inlineQueue[u].src = this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask, "");
                  break
                }
            }
            let g = this.rules.other.listTaskCheckbox.exec(p.raw);
            if (g) {
              let u = {
                type: "checkbox",
                raw: g[0] + " ",
                checked: g[0] !== "[ ]"
              };
              p.checked = u.checked, a.loose ? p.tokens[0] && ["paragraph", "text"].includes(p.tokens[0].type) && "tokens" in p.tokens[0] && p.tokens[0].tokens ? (p.tokens[0].raw = u.raw + p.tokens[0].raw, p.tokens[0].text = u.raw + p.tokens[0].text, p.tokens[0].tokens.unshift(u)) : p.tokens.unshift({
                type: "paragraph",
                raw: u.raw,
                text: u.raw,
                tokens: [u]
              }) : p.tokens.unshift(u)
            }
          }
          if (!a.loose) {
            let g = p.tokens.filter(c => c.type === "space"),
              u = g.length > 0 && g.some(c => this.rules.other.anyLine.test(c.raw));
            a.loose = u
          }
        }
        if (a.loose)
          for (let p of a.items) {
            p.loose = !0;
            for (let g of p.tokens) g.type === "text" && (g.type = "paragraph")
          }
        return a
      }
    }
    html(r) {
      let e = this.rules.block.html.exec(r);
      if (e) return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      }
    }
    def(r) {
      let e = this.rules.block.def.exec(r);
      if (e) {
        let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
          s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
          n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
        return {
          type: "def",
          tag: t,
          raw: e[0],
          href: s,
          title: n
        }
      }
    }
    table(r) {
      var a;
      let e = this.rules.block.table.exec(r);
      if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
      let t = ue(e[1]),
        s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
        n = (a = e[3]) != null && a.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
        l = {
          type: "table",
          raw: e[0],
          header: [],
          align: [],
          rows: []
        };
      if (t.length === s.length) {
        for (let i of s) this.rules.other.tableAlignRight.test(i) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? l.align.push("left") : l.align.push(null);
        for (let i = 0; i < t.length; i++) l.header.push({
          text: t[i],
          tokens: this.lexer.inline(t[i]),
          header: !0,
          align: l.align[i]
        });
        for (let i of n) l.rows.push(ue(i, l.header.length).map((h, o) => ({
          text: h,
          tokens: this.lexer.inline(h),
          header: !1,
          align: l.align[o]
        })));
        return l
      }
    }
    lheading(r) {
      let e = this.rules.block.lheading.exec(r);
      if (e) return {
        type: "heading",
        raw: e[0],
        depth: e[2].charAt(0) === "=" ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1])
      }
    }
    paragraph(r) {
      let e = this.rules.block.paragraph.exec(r);
      if (e) {
        let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
        return {
          type: "paragraph",
          raw: e[0],
          text: t,
          tokens: this.lexer.inline(t)
        }
      }
    }
    text(r) {
      let e = this.rules.block.text.exec(r);
      if (e) return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      }
    }
    escape(r) {
      let e = this.rules.inline.escape.exec(r);
      if (e) return {
        type: "escape",
        raw: e[0],
        text: e[1]
      }
    }
    tag(r) {
      let e = this.rules.inline.tag.exec(r);
      if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      }
    }
    link(r) {
      let e = this.rules.inline.link.exec(r);
      if (e) {
        let t = e[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
          if (!this.rules.other.endAngleBracket.test(t)) return;
          let l = C(t.slice(0, -1), "\\");
          if ((t.length - l.length) % 2 === 0) return
        } else {
          let l = $t(e[2], "()");
          if (l === -2) return;
          if (l > -1) {
            let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + l;
            e[2] = e[2].substring(0, l), e[0] = e[0].substring(0, a).trim(), e[3] = ""
          }
        }
        let s = e[2],
          n = "";
        if (this.options.pedantic) {
          let l = this.rules.other.pedanticHrefTitle.exec(s);
          l && (s = l[1], n = l[3])
        } else n = e[3] ? e[3].slice(1, -1) : "";
        return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? s = s.slice(1) : s = s.slice(1, -1)), ge(e, {
          href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
          title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
        }, e[0], this.lexer, this.rules)
      }
    }
    reflink(r, e) {
      let t;
      if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
        let s = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
          n = e[s.toLowerCase()];
        if (!n) {
          let l = t[0].charAt(0);
          return {
            type: "text",
            raw: l,
            text: l
          }
        }
        return ge(t, n, t[0], this.lexer, this.rules)
      }
    }
    emStrong(r, e, t = "") {
      let s = this.rules.inline.emStrongLDelim.exec(r);
      if (!(!s || s[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !t || this.rules.inline.punctuation.exec(t))) {
        let n = [...s[0]].length - 1,
          l, a, i = n,
          h = 0,
          o = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (o.lastIndex = 0, e = e.slice(-1 * r.length + n);
          (s = o.exec(e)) != null;) {
          if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l) continue;
          if (a = [...l].length, s[3] || s[4]) {
            i += a;
            continue
          } else if ((s[5] || s[6]) && n % 3 && !((n + a) % 3)) {
            h += a;
            continue
          }
          if (i -= a, i > 0) continue;
          a = Math.min(a, a + i + h);
          let p = [...s[0]][0].length,
            g = r.slice(0, n + s.index + p + a);
          if (Math.min(n, a) % 2) {
            let c = g.slice(1, -1);
            return {
              type: "em",
              raw: g,
              text: c,
              tokens: this.lexer.inlineTokens(c)
            }
          }
          let u = g.slice(2, -2);
          return {
            type: "strong",
            raw: g,
            text: u,
            tokens: this.lexer.inlineTokens(u)
          }
        }
      }
    }
    codespan(r) {
      let e = this.rules.inline.code.exec(r);
      if (e) {
        let t = e[2].replace(this.rules.other.newLineCharGlobal, " "),
          s = this.rules.other.nonSpaceChar.test(t),
          n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
        return s && n && (t = t.substring(1, t.length - 1)), {
          type: "codespan",
          raw: e[0],
          text: t
        }
      }
    }
    br(r) {
      let e = this.rules.inline.br.exec(r);
      if (e) return {
        type: "br",
        raw: e[0]
      }
    }
    del(r, e, t = "") {
      let s = this.rules.inline.delLDelim.exec(r);
      if (s && (!s[1] || !t || this.rules.inline.punctuation.exec(t))) {
        let n = [...s[0]].length - 1,
          l, a, i = n,
          h = this.rules.inline.delRDelim;
        for (h.lastIndex = 0, e = e.slice(-1 * r.length + n);
          (s = h.exec(e)) != null;) {
          if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l || (a = [...l].length, a !== n)) continue;
          if (s[3] || s[4]) {
            i += a;
            continue
          }
          if (i -= a, i > 0) continue;
          a = Math.min(a, a + i);
          let o = [...s[0]][0].length,
            p = r.slice(0, n + s.index + o + a),
            g = p.slice(n, -n);
          return {
            type: "del",
            raw: p,
            text: g,
            tokens: this.lexer.inlineTokens(g)
          }
        }
      }
    }
    autolink(r) {
      let e = this.rules.inline.autolink.exec(r);
      if (e) {
        let t, s;
        return e[2] === "@" ? (t = e[1], s = "mailto:" + t) : (t = e[1], s = t), {
          type: "link",
          raw: e[0],
          text: t,
          href: s,
          tokens: [{
            type: "text",
            raw: t,
            text: t
          }]
        }
      }
    }
    url(r) {
      var t;
      let e;
      if (e = this.rules.inline.url.exec(r)) {
        let s, n;
        if (e[2] === "@") s = e[0], n = "mailto:" + s;
        else {
          let l;
          do l = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? ""; while (l !== e[0]);
          s = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0]
        }
        return {
          type: "link",
          raw: e[0],
          text: s,
          href: n,
          tokens: [{
            type: "text",
            raw: s,
            text: s
          }]
        }
      }
    }
    inlineText(r) {
      let e = this.rules.inline.text.exec(r);
      if (e) {
        let t = this.lexer.state.inRawBlock;
        return {
          type: "text",
          raw: e[0],
          text: e[0],
          escaped: t
        }
      }
    }
  },
  y = class G {
    constructor(e) {
      b(this, "tokens");
      b(this, "options");
      b(this, "state");
      b(this, "inlineQueue");
      b(this, "tokenizer");
      this.tokens = [], this.tokens.links = Object.create(null), this.options = e || _, this.options.tokenizer = this.options.tokenizer || new N, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      let t = {
        other: w,
        block: q.normal,
        inline: I.normal
      };
      this.options.pedantic ? (t.block = q.pedantic, t.inline = I.pedantic) : this.options.gfm && (t.block = q.gfm, this.options.breaks ? t.inline = I.breaks : t.inline = I.gfm), this.tokenizer.rules = t
    }
    static get rules() {
      return {
        block: q,
        inline: I
      }
    }
    static lex(e, t) {
      return new G(t).lex(e)
    }
    static lexInline(e, t) {
      return new G(t).inlineTokens(e)
    }
    lex(e) {
      e = e.replace(w.carriageReturn, `
`), this.blockTokens(e, this.tokens);
      for (let t = 0; t < this.inlineQueue.length; t++) {
        let s = this.inlineQueue[t];
        this.inlineTokens(s.src, s.tokens)
      }
      return this.inlineQueue = [], this.tokens
    }
    blockTokens(e, t = [], s = !1) {
      var n, l, a;
      for (this.options.pedantic && (e = e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;) {
        let i;
        if ((l = (n = this.options.extensions) == null ? void 0 : n.block) != null && l.some(o => (i = o.call({
            lexer: this
          }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length);
          let o = t.at(-1);
          i.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(i);
          continue
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length);
          let o = t.at(-1);
          (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.at(-1).src = o.text) : t.push(i);
          continue
        }
        if (i = this.tokenizer.fences(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.heading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.hr(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.blockquote(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.list(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.html(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.def(e)) {
          e = e.substring(i.raw.length);
          let o = t.at(-1);
          (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          }, t.push(i));
          continue
        }
        if (i = this.tokenizer.table(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        if (i = this.tokenizer.lheading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue
        }
        let h = e;
        if ((a = this.options.extensions) != null && a.startBlock) {
          let o = 1 / 0,
            p = e.slice(1),
            g;
          this.options.extensions.startBlock.forEach(u => {
            g = u.call({
              lexer: this
            }, p), typeof g == "number" && g >= 0 && (o = Math.min(o, g))
          }), o < 1 / 0 && o >= 0 && (h = e.substring(0, o + 1))
        }
        if (this.state.top && (i = this.tokenizer.paragraph(h))) {
          let o = t.at(-1);
          s && (o == null ? void 0 : o.type) === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i), s = h.length !== e.length, e = e.substring(i.raw.length);
          continue
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length);
          let o = t.at(-1);
          (o == null ? void 0 : o.type) === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i);
          continue
        }
        if (e) {
          let o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break
          } else throw new Error(o)
        }
      }
      return this.state.top = !0, t
    }
    inline(e, t = []) {
      return this.inlineQueue.push({
        src: e,
        tokens: t
      }), t
    }
    inlineTokens(e, t = []) {
      var h, o, p, g, u;
      let s = e,
        n = null;
      if (this.tokens.links) {
        let c = Object.keys(this.tokens.links);
        if (c.length > 0)
          for (;
            (n = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null;) c.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
      }
      for (;
        (n = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null;) s = s.slice(0, n.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let l;
      for (;
        (n = this.tokenizer.rules.inline.blockSkip.exec(s)) != null;) l = n[2] ? n[2].length : 0, s = s.slice(0, n.index + l) + "[" + "a".repeat(n[0].length - l - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      s = ((o = (h = this.options.hooks) == null ? void 0 : h.emStrongMask) == null ? void 0 : o.call({
        lexer: this
      }, s)) ?? s;
      let a = !1,
        i = "";
      for (; e;) {
        a || (i = ""), a = !1;
        let c;
        if ((g = (p = this.options.extensions) == null ? void 0 : p.inline) != null && g.some(d => (c = d.call({
            lexer: this
          }, e, t)) ? (e = e.substring(c.raw.length), t.push(c), !0) : !1)) continue;
        if (c = this.tokenizer.escape(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.tag(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.link(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(c.raw.length);
          let d = t.at(-1);
          c.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
          continue
        }
        if (c = this.tokenizer.emStrong(e, s, i)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.codespan(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.br(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.del(e, s, i)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (c = this.tokenizer.autolink(e)) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        if (!this.state.inLink && (c = this.tokenizer.url(e))) {
          e = e.substring(c.raw.length), t.push(c);
          continue
        }
        let k = e;
        if ((u = this.options.extensions) != null && u.startInline) {
          let d = 1 / 0,
            m = e.slice(1),
            v;
          this.options.extensions.startInline.forEach(B => {
            v = B.call({
              lexer: this
            }, m), typeof v == "number" && v >= 0 && (d = Math.min(d, v))
          }), d < 1 / 0 && d >= 0 && (k = e.substring(0, d + 1))
        }
        if (c = this.tokenizer.inlineText(k)) {
          e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), a = !0;
          let d = t.at(-1);
          (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
          continue
        }
        if (e) {
          let d = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break
          } else throw new Error(d)
        }
      }
      return t
    }
  },
  M = class {
    constructor(r) {
      b(this, "options");
      b(this, "parser");
      this.options = r || _
    }
    space(r) {
      return ""
    }
    code({
      text: r,
      lang: e,
      escaped: t
    }) {
      var l;
      let s = (l = (e || "").match(w.notSpaceStart)) == null ? void 0 : l[0],
        n = r.replace(w.endingNewline, "") + `
`;
      return s ? '<pre><code class="language-' + R(s) + '">' + (t ? n : R(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : R(n, !0)) + `</code></pre>
`
    }
    blockquote({
      tokens: r
    }) {
      return `<blockquote>
${this.parser.parse(r)}</blockquote>
`
    }
    html({
      text: r
    }) {
      return r
    }
    def(r) {
      return ""
    }
    heading({
      tokens: r,
      depth: e
    }) {
      return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`
    }
    hr(r) {
      return `<hr>
`
    }
    list(r) {
      let e = r.ordered,
        t = r.start,
        s = "";
      for (let a = 0; a < r.items.length; a++) {
        let i = r.items[a];
        s += this.listitem(i)
      }
      let n = e ? "ol" : "ul",
        l = e && t !== 1 ? ' start="' + t + '"' : "";
      return "<" + n + l + `>
` + s + "</" + n + `>
`
    }
    listitem(r) {
      return `<li>${this.parser.parse(r.tokens)}</li>
`
    }
    checkbox({
      checked: r
    }) {
      return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"> '
    }
    paragraph({
      tokens: r
    }) {
      return `<p>${this.parser.parseInline(r)}</p>
`
    }
    table(r) {
      let e = "",
        t = "";
      for (let n = 0; n < r.header.length; n++) t += this.tablecell(r.header[n]);
      e += this.tablerow({
        text: t
      });
      let s = "";
      for (let n = 0; n < r.rows.length; n++) {
        let l = r.rows[n];
        t = "";
        for (let a = 0; a < l.length; a++) t += this.tablecell(l[a]);
        s += this.tablerow({
          text: t
        })
      }
      return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
`
    }
    tablerow({
      text: r
    }) {
      return `<tr>
${r}</tr>
`
    }
    tablecell(r) {
      let e = this.parser.parseInline(r.tokens),
        t = r.header ? "th" : "td";
      return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`
    }
    strong({
      tokens: r
    }) {
      return `<strong>${this.parser.parseInline(r)}</strong>`
    }
    em({
      tokens: r
    }) {
      return `<em>${this.parser.parseInline(r)}</em>`
    }
    codespan({
      text: r
    }) {
      return `<code>${R(r,!0)}</code>`
    }
    br(r) {
      return "<br>"
    }
    del({
      tokens: r
    }) {
      return `<del>${this.parser.parseInline(r)}</del>`
    }
    link({
      href: r,
      title: e,
      tokens: t
    }) {
      let s = this.parser.parseInline(t),
        n = pe(r);
      if (n === null) return s;
      r = n;
      let l = '<a href="' + r + '"';
      return e && (l += ' title="' + R(e) + '"'), l += ">" + s + "</a>", l
    }
    image({
      href: r,
      title: e,
      text: t,
      tokens: s
    }) {
      s && (t = this.parser.parseInline(s, this.parser.textRenderer));
      let n = pe(r);
      if (n === null) return R(t);
      r = n;
      let l = `<img src="${r}" alt="${R(t)}"`;
      return e && (l += ` title="${R(e)}"`), l += ">", l
    }
    text(r) {
      return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : R(r.text)
    }
  },
  ne = class {
    strong({
      text: r
    }) {
      return r
    }
    em({
      text: r
    }) {
      return r
    }
    codespan({
      text: r
    }) {
      return r
    }
    del({
      text: r
    }) {
      return r
    }
    html({
      text: r
    }) {
      return r
    }
    text({
      text: r
    }) {
      return r
    }
    link({
      text: r
    }) {
      return "" + r
    }
    image({
      text: r
    }) {
      return "" + r
    }
    br() {
      return ""
    }
    checkbox({
      raw: r
    }) {
      return r
    }
  },
  S = class U {
    constructor(e) {
      b(this, "options");
      b(this, "renderer");
      b(this, "textRenderer");
      this.options = e || _, this.options.renderer = this.options.renderer || new M, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ne
    }
    static parse(e, t) {
      return new U(t).parse(e)
    }
    static parseInline(e, t) {
      return new U(t).parseInline(e)
    }
    parse(e) {
      var s, n;
      let t = "";
      for (let l = 0; l < e.length; l++) {
        let a = e[l];
        if ((n = (s = this.options.extensions) == null ? void 0 : s.renderers) != null && n[a.type]) {
          let h = a,
            o = this.options.extensions.renderers[h.type].call({
              parser: this
            }, h);
          if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(h.type)) {
            t += o || "";
            continue
          }
        }
        let i = a;
        switch (i.type) {
          case "space": {
            t += this.renderer.space(i);
            break
          }
          case "hr": {
            t += this.renderer.hr(i);
            break
          }
          case "heading": {
            t += this.renderer.heading(i);
            break
          }
          case "code": {
            t += this.renderer.code(i);
            break
          }
          case "table": {
            t += this.renderer.table(i);
            break
          }
          case "blockquote": {
            t += this.renderer.blockquote(i);
            break
          }
          case "list": {
            t += this.renderer.list(i);
            break
          }
          case "checkbox": {
            t += this.renderer.checkbox(i);
            break
          }
          case "html": {
            t += this.renderer.html(i);
            break
          }
          case "def": {
            t += this.renderer.def(i);
            break
          }
          case "paragraph": {
            t += this.renderer.paragraph(i);
            break
          }
          case "text": {
            t += this.renderer.text(i);
            break
          }
          default: {
            let h = 'Token with "' + i.type + '" type was not found.';
            if (this.options.silent) return console.error(h), "";
            throw new Error(h)
          }
        }
      }
      return t
    }
    parseInline(e, t = this.renderer) {
      var n, l;
      let s = "";
      for (let a = 0; a < e.length; a++) {
        let i = e[a];
        if ((l = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && l[i.type]) {
          let o = this.options.extensions.renderers[i.type].call({
            parser: this
          }, i);
          if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
            s += o || "";
            continue
          }
        }
        let h = i;
        switch (h.type) {
          case "escape": {
            s += t.text(h);
            break
          }
          case "html": {
            s += t.html(h);
            break
          }
          case "link": {
            s += t.link(h);
            break
          }
          case "image": {
            s += t.image(h);
            break
          }
          case "checkbox": {
            s += t.checkbox(h);
            break
          }
          case "strong": {
            s += t.strong(h);
            break
          }
          case "em": {
            s += t.em(h);
            break
          }
          case "codespan": {
            s += t.codespan(h);
            break
          }
          case "br": {
            s += t.br(h);
            break
          }
          case "del": {
            s += t.del(h);
            break
          }
          case "text": {
            s += t.text(h);
            break
          }
          default: {
            let o = 'Token with "' + h.type + '" type was not found.';
            if (this.options.silent) return console.error(o), "";
            throw new Error(o)
          }
        }
      }
      return s
    }
  },
  D, L = (D = class {
    constructor(r) {
      b(this, "options");
      b(this, "block");
      this.options = r || _
    }
    preprocess(r) {
      return r
    }
    postprocess(r) {
      return r
    }
    processAllTokens(r) {
      return r
    }
    emStrongMask(r) {
      return r
    }
    provideLexer() {
      return this.block ? y.lex : y.lexInline
    }
    provideParser() {
      return this.block ? S.parse : S.parseInline
    }
  }, b(D, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), b(D, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])), D),
  At = class {
    constructor(...r) {
      b(this, "defaults", Y());
      b(this, "options", this.setOptions);
      b(this, "parse", this.parseMarkdown(!0));
      b(this, "parseInline", this.parseMarkdown(!1));
      b(this, "Parser", S);
      b(this, "Renderer", M);
      b(this, "TextRenderer", ne);
      b(this, "Lexer", y);
      b(this, "Tokenizer", N);
      b(this, "Hooks", L);
      this.use(...r)
    }
    walkTokens(r, e) {
      var s, n;
      let t = [];
      for (let l of r) switch (t = t.concat(e.call(this, l)), l.type) {
        case "table": {
          let a = l;
          for (let i of a.header) t = t.concat(this.walkTokens(i.tokens, e));
          for (let i of a.rows)
            for (let h of i) t = t.concat(this.walkTokens(h.tokens, e));
          break
        }
        case "list": {
          let a = l;
          t = t.concat(this.walkTokens(a.items, e));
          break
        }
        default: {
          let a = l;
          (n = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && n[a.type] ? this.defaults.extensions.childTokens[a.type].forEach(i => {
            let h = a[i].flat(1 / 0);
            t = t.concat(this.walkTokens(h, e))
          }) : a.tokens && (t = t.concat(this.walkTokens(a.tokens, e)))
        }
      }
      return t
    }
    use(...r) {
      let e = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      return r.forEach(t => {
        let s = {
          ...t
        };
        if (s.async = this.defaults.async || s.async || !1, t.extensions && (t.extensions.forEach(n => {
            if (!n.name) throw new Error("extension name required");
            if ("renderer" in n) {
              let l = e.renderers[n.name];
              l ? e.renderers[n.name] = function(...a) {
                let i = n.renderer.apply(this, a);
                return i === !1 && (i = l.apply(this, a)), i
              } : e.renderers[n.name] = n.renderer
            }
            if ("tokenizer" in n) {
              if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
              let l = e[n.level];
              l ? l.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]))
            }
            "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens)
          }), s.extensions = e), t.renderer) {
          let n = this.defaults.renderer || new M(this.defaults);
          for (let l in t.renderer) {
            if (!(l in n)) throw new Error(`renderer '${l}' does not exist`);
            if (["options", "parser"].includes(l)) continue;
            let a = l,
              i = t.renderer[a],
              h = n[a];
            n[a] = (...o) => {
              let p = i.apply(n, o);
              return p === !1 && (p = h.apply(n, o)), p || ""
            }
          }
          s.renderer = n
        }
        if (t.tokenizer) {
          let n = this.defaults.tokenizer || new N(this.defaults);
          for (let l in t.tokenizer) {
            if (!(l in n)) throw new Error(`tokenizer '${l}' does not exist`);
            if (["options", "rules", "lexer"].includes(l)) continue;
            let a = l,
              i = t.tokenizer[a],
              h = n[a];
            n[a] = (...o) => {
              let p = i.apply(n, o);
              return p === !1 && (p = h.apply(n, o)), p
            }
          }
          s.tokenizer = n
        }
        if (t.hooks) {
          let n = this.defaults.hooks || new L;
          for (let l in t.hooks) {
            if (!(l in n)) throw new Error(`hook '${l}' does not exist`);
            if (["options", "block"].includes(l)) continue;
            let a = l,
              i = t.hooks[a],
              h = n[a];
            L.passThroughHooks.has(l) ? n[a] = o => {
              if (this.defaults.async && L.passThroughHooksRespectAsync.has(l)) return (async () => {
                let g = await i.call(n, o);
                return h.call(n, g)
              })();
              let p = i.call(n, o);
              return h.call(n, p)
            } : n[a] = (...o) => {
              if (this.defaults.async) return (async () => {
                let g = await i.apply(n, o);
                return g === !1 && (g = await h.apply(n, o)), g
              })();
              let p = i.apply(n, o);
              return p === !1 && (p = h.apply(n, o)), p
            }
          }
          s.hooks = n
        }
        if (t.walkTokens) {
          let n = this.defaults.walkTokens,
            l = t.walkTokens;
          s.walkTokens = function(a) {
            let i = [];
            return i.push(l.call(this, a)), n && (i = i.concat(n.call(this, a))), i
          }
        }
        this.defaults = {
          ...this.defaults,
          ...s
        }
      }), this
    }
    setOptions(r) {
      return this.defaults = {
        ...this.defaults,
        ...r
      }, this
    }
    lexer(r, e) {
      return y.lex(r, e ?? this.defaults)
    }
    parser(r, e) {
      return S.parse(r, e ?? this.defaults)
    }
    parseMarkdown(r) {
      return (e, t) => {
        let s = {
            ...t
          },
          n = {
            ...this.defaults,
            ...s
          },
          l = this.onError(!!n.silent, !!n.async);
        if (this.defaults.async === !0 && s.async === !1) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof e > "u" || e === null) return l(new Error("marked(): input parameter is undefined or null"));
        if (typeof e != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
        if (n.hooks && (n.hooks.options = n, n.hooks.block = r), n.async) return (async () => {
          let a = n.hooks ? await n.hooks.preprocess(e) : e,
            i = await (n.hooks ? await n.hooks.provideLexer() : r ? y.lex : y.lexInline)(a, n),
            h = n.hooks ? await n.hooks.processAllTokens(i) : i;
          n.walkTokens && await Promise.all(this.walkTokens(h, n.walkTokens));
          let o = await (n.hooks ? await n.hooks.provideParser() : r ? S.parse : S.parseInline)(h, n);
          return n.hooks ? await n.hooks.postprocess(o) : o
        })().catch(l);
        try {
          n.hooks && (e = n.hooks.preprocess(e));
          let a = (n.hooks ? n.hooks.provideLexer() : r ? y.lex : y.lexInline)(e, n);
          n.hooks && (a = n.hooks.processAllTokens(a)), n.walkTokens && this.walkTokens(a, n.walkTokens);
          let i = (n.hooks ? n.hooks.provideParser() : r ? S.parse : S.parseInline)(a, n);
          return n.hooks && (i = n.hooks.postprocess(i)), i
        } catch (a) {
          return l(a)
        }
      }
    }
    onError(r, e) {
      return t => {
        if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
          let s = "<p>An error occurred:</p><pre>" + R(t.message + "", !0) + "</pre>";
          return e ? Promise.resolve(s) : s
        }
        if (e) return Promise.reject(t);
        throw t
      }
    }
  },
  A = new At;

function x(r, e) {
  return A.parse(r, e)
}
x.options = x.setOptions = function(r) {
  return A.setOptions(r), x.defaults = A.defaults, fe(x.defaults), x
};
x.getDefaults = Y;
x.defaults = _;
x.use = function(...r) {
  return A.use(...r), x.defaults = A.defaults, fe(x.defaults), x
};
x.walkTokens = function(r, e) {
  return A.walkTokens(r, e)
};
x.parseInline = A.parseInline;
x.Parser = S;
x.parser = S.parse;
x.Renderer = M;
x.TextRenderer = ne;
x.Lexer = y;
x.lexer = y.lex;
x.Tokenizer = N;
x.Hooks = L;
x.parse = x;
x.options;
x.setOptions;
x.use;
x.walkTokens;
x.parseInline;
var Zt = x;
S.parse;
y.lex;
export {
  Mt as P, Zt as V, Nt as p
};