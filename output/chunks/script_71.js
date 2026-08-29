import {
  Et as e,
  G as t,
  Jt as n,
  V as r,
  Y as i,
  Yt as a,
  Z as o,
  a as s,
  in as c,
  ln as l,
  nn as u,
  q as d,
  vt as f,
  wt as p
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as m
} from "./CBvy2Co4.js";
var h;

function g() {
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
var _ = g();

function v(e) {
  _ = e
}
var y = {
  exec: () => null
};

function b(e, t = ``) {
  let n = typeof e == `string` ? e : e.source,
    r = {
      replace: (e, t) => {
        let i = typeof t == `string` ? t : t.source;
        return i = i.replace(S.caret, `$1`), n = n.replace(e, i), r
      },
      getRegex: () => new RegExp(n, t)
    };
  return r
}
var x = (() => {
    try {
      return !!RegExp(`(?<=1)(?<!1)`)
    } catch {
      return !1
    }
  })(),
  S = {
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
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: e => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}#`),
    htmlBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`, `i`),
    blockquoteBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}>`)
  },
  C = /^(?:[ \t]*(?:\n|$))+/,
  ee = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  w = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  ne = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  T = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  ie = b(re).replace(/bull/g, T).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, ``).getRegex(),
  ae = b(re).replace(/bull/g, T).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
  E = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  oe = /^[^\n]+/,
  D = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  se = b(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`, D).replace(`title`, /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
  ce = b(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, T).getRegex(),
  O = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,
  k = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  le = b(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`, `i`).replace(`comment`, k).replace(`tag`, O).replace(`attribute`, / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
  A = b(E).replace(`hr`, w).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, O).getRegex(),
  j = {
    blockquote: b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`, A).getRegex(),
    code: ee,
    def: se,
    fences: te,
    heading: ne,
    hr: w,
    html: le,
    lheading: ie,
    list: ce,
    newline: C,
    paragraph: A,
    table: y,
    text: oe
  },
  ue = b(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`, w).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`, ` {0,3}>`).replace(`code`, `(?: {4}| {0,3}	)[^\\n]`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, O).getRegex(),
  de = {
    ...j,
    lheading: ae,
    table: ue,
    paragraph: b(E).replace(`hr`, w).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`table`, ue).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, O).getRegex()
  },
  fe = {
    ...j,
    html: b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`, k).replace(/tag/g, `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: y,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: b(E).replace(`hr`, w).replace(`heading`, ` *#{1,6} *[^
]`).replace(`lheading`, ie).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`|fences`, ``).replace(`|list`, ``).replace(`|html`, ``).replace(`|tag`, ``).getRegex()
  },
  pe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  me = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  M = /^( {2,}|\\)\n(?!\s*$)/,
  he = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  N = /[\p{P}\p{S}]/u,
  P = /[\s\p{P}\p{S}]/u,
  F = /[^\s\p{P}\p{S}]/u,
  ge = b(/^((?![*_])punctSpace)/, `u`).replace(/punctSpace/g, P).getRegex(),
  I = /(?!~)[\p{P}\p{S}]/u,
  _e = /(?!~)[\s\p{P}\p{S}]/u,
  ve = /(?:[^\s\p{P}\p{S}]|~)/u,
  ye = b(/link|precode-code|html/, `g`).replace(`link`, /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`, x ? "(?<!`)()" : "(^^|[^`])").replace(`code`, /(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`, /<(?! )[^<>]*?>/).getRegex(),
  L = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  be = b(L, `u`).replace(/punct/g, N).getRegex(),
  xe = b(L, `u`).replace(/punct/g, I).getRegex(),
  R = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,
  Se = b(R, `gu`).replace(/notPunctSpace/g, F).replace(/punctSpace/g, P).replace(/punct/g, N).getRegex(),
  Ce = b(R, `gu`).replace(/notPunctSpace/g, ve).replace(/punctSpace/g, _e).replace(/punct/g, I).getRegex(),
  we = b(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`, `gu`).replace(/notPunctSpace/g, F).replace(/punctSpace/g, P).replace(/punct/g, N).getRegex(),
  Te = b(/^~~?(?:((?!~)punct)|[^\s~])/, `u`).replace(/punct/g, N).getRegex(),
  Ee = b(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`, `gu`).replace(/notPunctSpace/g, F).replace(/punctSpace/g, P).replace(/punct/g, N).getRegex(),
  De = b(/\\(punct)/, `gu`).replace(/punct/g, N).getRegex(),
  Oe = b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`, /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
  ke = b(k).replace(`(?:-->|$)`, `-->`).getRegex(),
  Ae = b(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`, ke).replace(`attribute`, /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
  z = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
  je = b(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`, z).replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`, /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
  Me = b(/^!?\[(label)\]\[(ref)\]/).replace(`label`, z).replace(`ref`, D).getRegex(),
  Ne = b(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, D).getRegex(),
  Pe = b(`reflink|nolink(?!\\()`, `g`).replace(`reflink`, Me).replace(`nolink`, Ne).getRegex(),
  Fe = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  B = {
    _backpedal: y,
    anyPunctuation: De,
    autolink: Oe,
    blockSkip: ye,
    br: M,
    code: me,
    del: y,
    delLDelim: y,
    delRDelim: y,
    emStrongLDelim: be,
    emStrongRDelimAst: Se,
    emStrongRDelimUnd: we,
    escape: pe,
    link: je,
    nolink: Ne,
    punctuation: ge,
    reflink: Me,
    reflinkSearch: Pe,
    tag: Ae,
    text: he,
    url: y
  },
  Ie = {
    ...B,
    link: b(/^!?\[(label)\]\((.*?)\)/).replace(`label`, z).getRegex(),
    reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`, z).getRegex()
  },
  V = {
    ...B,
    emStrongRDelimAst: Ce,
    emStrongLDelim: xe,
    delLDelim: Te,
    delRDelim: Ee,
    url: b(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`, Fe).replace(`email`, /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: b(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`, Fe).getRegex()
  },
  Le = {
    ...V,
    br: b(M).replace(`{2,}`, `*`).getRegex(),
    text: b(V.text).replace(`\\b_`, `\\b_| {2,}\\n`).replace(/\{2,\}/g, `*`).getRegex()
  },
  H = {
    normal: j,
    gfm: de,
    pedantic: fe
  },
  U = {
    normal: B,
    gfm: V,
    breaks: Le,
    pedantic: Ie
  },
  Re = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`
  },
  ze = e => Re[e];

function W(e, t) {
  if (t) {
    if (S.escapeTest.test(e)) return e.replace(S.escapeReplace, ze)
  } else if (S.escapeTestNoEncode.test(e)) return e.replace(S.escapeReplaceNoEncode, ze);
  return e
}

function Be(e) {
  try {
    e = encodeURI(e).replace(S.percentDecode, `%`)
  } catch {
    return null
  }
  return e
}

function Ve(e, t) {
  var n;
  let r = e.replace(S.findPipe, (e, t, n) => {
      let r = !1,
        i = t;
      for (; --i >= 0 && n[i] === `\\`;) r = !r;
      return r ? `|` : ` |`
    }).split(S.splitPipe),
    i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((n = r.at(-1)) != null && n.trim()) && r.pop(), t) {
    if (r.length > t) r.splice(t);
    else
      for (; r.length < t;) r.push(``)
  }
  for (; i < r.length; i++) r[i] = r[i].trim().replace(S.slashPipe, `|`);
  return r
}

function G(e, t, n) {
  let r = e.length;
  if (r === 0) return ``;
  let i = 0;
  for (; i < r;) {
    let a = e.charAt(r - i - 1);
    if (a === t && !n) i++;
    else if (a !== t && n) i++;
    else break
  }
  return e.slice(0, r - i)
}

function He(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === `\\`) r++;
    else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1
}

function Ue(e, t = 0) {
  let n = t,
    r = ``;
  for (let t of e)
    if (t === `	`) {
      let e = 4 - n % 4;
      r += ` `.repeat(e), n += e
    } else r += t, n++;
  return r
}

function We(e, t, n, r, i) {
  let a = t.href,
    o = t.title || null,
    s = e[1].replace(i.other.outputLinkReplace, `$1`);
  r.state.inLink = !0;
  let c = {
    type: e[0].charAt(0) === `!` ? `image` : `link`,
    raw: n,
    href: a,
    title: o,
    text: s,
    tokens: r.inlineTokens(s)
  };
  return r.state.inLink = !1, c
}

function Ge(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let i = r[1];
  return t.split(`
`).map(e => {
    let t = e.match(n.other.beginningSpace);
    if (t === null) return e;
    let [r] = t;
    return r.length >= i.length ? e.slice(i.length) : e
  }).join(`
`)
}
var K = class {
    constructor(e) {
      c(this, `options`, void 0), c(this, `rules`, void 0), c(this, `lexer`, void 0), this.options = e || _
    }
    space(e) {
      let t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0) return {
        type: `space`,
        raw: t[0]
      }
    }
    code(e) {
      let t = this.rules.block.code.exec(e);
      if (t) {
        let e = t[0].replace(this.rules.other.codeRemoveIndent, ``);
        return {
          type: `code`,
          raw: t[0],
          codeBlockStyle: `indented`,
          text: this.options.pedantic ? e : G(e, `
`)
        }
      }
    }
    fences(e) {
      let t = this.rules.block.fences.exec(e);
      if (t) {
        let e = t[0],
          n = Ge(e, t[3] || ``, this.rules);
        return {
          type: `code`,
          raw: e,
          lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, `$1`) : t[2],
          text: n
        }
      }
    }
    heading(e) {
      let t = this.rules.block.heading.exec(e);
      if (t) {
        let e = t[2].trim();
        if (this.rules.other.endingHash.test(e)) {
          let t = G(e, `#`);
          (this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim())
        }
        return {
          type: `heading`,
          raw: t[0],
          depth: t[1].length,
          text: e,
          tokens: this.lexer.inline(e)
        }
      }
    }
    hr(e) {
      let t = this.rules.block.hr.exec(e);
      if (t) return {
        type: `hr`,
        raw: G(t[0], `
`)
      }
    }
    blockquote(e) {
      let t = this.rules.block.blockquote.exec(e);
      if (t) {
        let e = G(t[0], `
`).split(`
`),
          n = ``,
          r = ``,
          i = [];
        for (; e.length > 0;) {
          let t = !1,
            a = [],
            o;
          for (o = 0; o < e.length; o++)
            if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
            else if (!t) a.push(e[o]);
          else break;
          e = e.slice(o);
          let s = a.join(`
`),
            c = s.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, ``);
          n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
          let l = this.lexer.state.top;
          if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
          let u = i.at(-1);
          if ((u == null ? void 0 : u.type) === `code`) break;
          if ((u == null ? void 0 : u.type) === `blockquote`) {
            let t = u,
              a = t.raw + `
` + e.join(`
`),
              o = this.blockquote(a);
            i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
            break
          }
          if ((u == null ? void 0 : u.type) === `list`) {
            let t = u,
              a = t.raw + `
` + e.join(`
`),
              o = this.list(a);
            i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split(`
`);
            continue
          }
        }
        return {
          type: `blockquote`,
          raw: n,
          tokens: i,
          text: r
        }
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let i = t[1].trim(),
          a = i.length > 1,
          o = {
            type: `list`,
            raw: ``,
            ordered: a,
            start: a ? +i.slice(0, -1) : ``,
            loose: !1,
            items: []
          };
        i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : `[*+-]`);
        let s = this.rules.other.listItemRegex(i),
          c = !1;
        for (; e;) {
          let n = !1,
            r = ``,
            i = ``;
          if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
          r = t[0], e = e.substring(r.length);
          let a = Ue(t[2].split(`
`, 1)[0], t[1].length),
            l = e.split(`
`, 1)[0],
            u = !a.trim(),
            d = 0;
          if (this.options.pedantic ? (d = 2, i = a.trimStart()) : u ? d = t[1].length + 1 : (d = a.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, i = a.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + `
`, e = e.substring(l.length + 1), n = !0), !n) {
            let t = this.rules.other.nextBulletRegex(d),
              n = this.rules.other.hrRegex(d),
              o = this.rules.other.fencesBeginRegex(d),
              s = this.rules.other.headingBeginRegex(d),
              c = this.rules.other.htmlBeginRegex(d),
              f = this.rules.other.blockquoteBeginRegex(d);
            for (; e;) {
              let p = e.split(`
`, 1)[0],
                m;
              if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, `  `), m = l) : m = l.replace(this.rules.other.tabCharGlobal, `    `), o.test(l) || s.test(l) || c.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
              if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) i += `
` + m.slice(d);
              else {
                if (u || a.replace(this.rules.other.tabCharGlobal, `    `).search(this.rules.other.nonSpaceChar) >= 4 || o.test(a) || s.test(a) || n.test(a)) break;
                i += `
` + l
              }
              u = !l.trim(), r += p + `
`, e = e.substring(p.length + 1), a = m.slice(d)
            }
          }
          o.loose || (c ? o.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (c = !0)), o.items.push({
            type: `list_item`,
            raw: r,
            task: !!this.options.gfm && this.rules.other.listIsTask.test(i),
            loose: !1,
            text: i,
            tokens: []
          }), o.raw += r
        }
        let l = o.items.at(-1);
        if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
        else return;
        o.raw = o.raw.trimEnd();
        for (let e of o.items) {
          if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
            var n, r;
            if (e.text = e.text.replace(this.rules.other.listReplaceTask, ``), ((n = e.tokens[0]) == null ? void 0 : n.type) === `text` || ((r = e.tokens[0]) == null ? void 0 : r.type) === `paragraph`) {
              e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ``), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, ``);
              for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
                  this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, ``);
                  break
                }
            }
            let t = this.rules.other.listTaskCheckbox.exec(e.raw);
            if (t) {
              let n = {
                type: `checkbox`,
                raw: t[0] + ` `,
                checked: t[0] !== `[ ]`
              };
              e.checked = n.checked, o.loose ? e.tokens[0] && [`paragraph`, `text`].includes(e.tokens[0].type) && `tokens` in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
                type: `paragraph`,
                raw: n.raw,
                text: n.raw,
                tokens: [n]
              }) : e.tokens.unshift(n)
            }
          }
          if (!o.loose) {
            let t = e.tokens.filter(e => e.type === `space`);
            o.loose = t.length > 0 && t.some(e => this.rules.other.anyLine.test(e.raw))
          }
        }
        if (o.loose)
          for (let e of o.items) {
            e.loose = !0;
            for (let t of e.tokens) t.type === `text` && (t.type = `paragraph`)
          }
        return o
      }
    }
    html(e) {
      let t = this.rules.block.html.exec(e);
      if (t) return {
        type: `html`,
        block: !0,
        raw: t[0],
        pre: t[1] === `pre` || t[1] === `script` || t[1] === `style`,
        text: t[0]
      }
    }
    def(e) {
      let t = this.rules.block.def.exec(e);
      if (t) {
        let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ` `),
          n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, `$1`).replace(this.rules.inline.anyPunctuation, `$1`) : ``,
          r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, `$1`) : t[3];
        return {
          type: `def`,
          tag: e,
          raw: t[0],
          href: n,
          title: r
        }
      }
    }
    table(e) {
      var t;
      let n = this.rules.block.table.exec(e);
      if (!n || !this.rules.other.tableDelimiter.test(n[2])) return;
      let r = Ve(n[1]),
        i = n[2].replace(this.rules.other.tableAlignChars, ``).split(`|`),
        a = (t = n[3]) != null && t.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`) : [],
        o = {
          type: `table`,
          raw: n[0],
          header: [],
          align: [],
          rows: []
        };
      if (r.length === i.length) {
        for (let e of i) this.rules.other.tableAlignRight.test(e) ? o.align.push(`right`) : this.rules.other.tableAlignCenter.test(e) ? o.align.push(`center`) : this.rules.other.tableAlignLeft.test(e) ? o.align.push(`left`) : o.align.push(null);
        for (let e = 0; e < r.length; e++) o.header.push({
          text: r[e],
          tokens: this.lexer.inline(r[e]),
          header: !0,
          align: o.align[e]
        });
        for (let e of a) o.rows.push(Ve(e, o.header.length).map((e, t) => ({
          text: e,
          tokens: this.lexer.inline(e),
          header: !1,
          align: o.align[t]
        })));
        return o
      }
    }
    lheading(e) {
      let t = this.rules.block.lheading.exec(e);
      if (t) {
        let e = t[1].trim();
        return {
          type: `heading`,
          raw: t[0],
          depth: t[2].charAt(0) === `=` ? 1 : 2,
          text: e,
          tokens: this.lexer.inline(e)
        }
      }
    }
    paragraph(e) {
      let t = this.rules.block.paragraph.exec(e);
      if (t) {
        let e = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
        return {
          type: `paragraph`,
          raw: t[0],
          text: e,
          tokens: this.lexer.inline(e)
        }
      }
    }
    text(e) {
      let t = this.rules.block.text.exec(e);
      if (t) return {
        type: `text`,
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      }
    }
    escape(e) {
      let t = this.rules.inline.escape.exec(e);
      if (t) return {
        type: `escape`,
        raw: t[0],
        text: t[1]
      }
    }
    tag(e) {
      let t = this.rules.inline.tag.exec(e);
      if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: `html`,
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      }
    }
    link(e) {
      let t = this.rules.inline.link.exec(e);
      if (t) {
        let e = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
          if (!this.rules.other.endAngleBracket.test(e)) return;
          let t = G(e.slice(0, -1), `\\`);
          if ((e.length - t.length) % 2 == 0) return
        } else {
          let e = He(t[2], `()`);
          if (e === -2) return;
          if (e > -1) {
            let n = (t[0].indexOf(`!`) === 0 ? 5 : 4) + t[1].length + e;
            t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ``
          }
        }
        let n = t[2],
          r = ``;
        if (this.options.pedantic) {
          let e = this.rules.other.pedanticHrefTitle.exec(n);
          e && (n = e[1], r = e[3])
        } else r = t[3] ? t[3].slice(1, -1) : ``;
        return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), We(t, {
          href: n && n.replace(this.rules.inline.anyPunctuation, `$1`),
          title: r && r.replace(this.rules.inline.anyPunctuation, `$1`)
        }, t[0], this.lexer, this.rules)
      }
    }
    reflink(e, t) {
      let n;
      if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
        let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, ` `).toLowerCase()];
        if (!e) {
          let e = n[0].charAt(0);
          return {
            type: `text`,
            raw: e,
            text: e
          }
        }
        return We(n, e, n[0], this.lexer, this.rules)
      }
    }
    emStrong(e, t, n = ``) {
      let r = this.rules.inline.emStrongLDelim.exec(e);
      if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
        let n = [...r[0]].length - 1,
          i, a, o = n,
          s = 0,
          c = r[0][0] === `*` ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (c.lastIndex = 0, t = t.slice(-1 * e.length + n);
          (r = c.exec(t)) !== null;) {
          if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
          if (a = [...i].length, r[3] || r[4]) {
            o += a;
            continue
          }
          if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
            s += a;
            continue
          }
          if (o -= a, o > 0) continue;
          a = Math.min(a, a + o + s);
          let t = [...r[0]][0].length,
            c = e.slice(0, n + r.index + t + a);
          if (Math.min(n, a) % 2) {
            let e = c.slice(1, -1);
            return {
              type: `em`,
              raw: c,
              text: e,
              tokens: this.lexer.inlineTokens(e)
            }
          }
          let l = c.slice(2, -2);
          return {
            type: `strong`,
            raw: c,
            text: l,
            tokens: this.lexer.inlineTokens(l)
          }
        }
      }
    }
    codespan(e) {
      let t = this.rules.inline.code.exec(e);
      if (t) {
        let e = t[2].replace(this.rules.other.newLineCharGlobal, ` `),
          n = this.rules.other.nonSpaceChar.test(e),
          r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
        return n && r && (e = e.substring(1, e.length - 1)), {
          type: `codespan`,
          raw: t[0],
          text: e
        }
      }
    }
    br(e) {
      let t = this.rules.inline.br.exec(e);
      if (t) return {
        type: `br`,
        raw: t[0]
      }
    }
    del(e, t, n = ``) {
      let r = this.rules.inline.delLDelim.exec(e);
      if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
        let n = [...r[0]].length - 1,
          i, a, o = n,
          s = this.rules.inline.delRDelim;
        for (s.lastIndex = 0, t = t.slice(-1 * e.length + n);
          (r = s.exec(t)) !== null;) {
          if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
          if (r[3] || r[4]) {
            o += a;
            continue
          }
          if (o -= a, o > 0) continue;
          a = Math.min(a, a + o);
          let t = [...r[0]][0].length,
            s = e.slice(0, n + r.index + t + a),
            c = s.slice(n, -n);
          return {
            type: `del`,
            raw: s,
            text: c,
            tokens: this.lexer.inlineTokens(c)
          }
        }
      }
    }
    autolink(e) {
      let t = this.rules.inline.autolink.exec(e);
      if (t) {
        let e, n;
        return t[2] === `@` ? (e = t[1], n = `mailto:` + e) : (e = t[1], n = e), {
          type: `link`,
          raw: t[0],
          text: e,
          href: n,
          tokens: [{
            type: `text`,
            raw: e,
            text: e
          }]
        }
      }
    }
    url(e) {
      let t;
      if (t = this.rules.inline.url.exec(e)) {
        let e, r;
        if (t[2] === `@`) e = t[0], r = `mailto:` + e;
        else {
          var n;
          let i;
          do i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? ``; while (i !== t[0]);
          e = t[0], r = t[1] === `www.` ? `http://` + t[0] : t[0]
        }
        return {
          type: `link`,
          raw: t[0],
          text: e,
          href: r,
          tokens: [{
            type: `text`,
            raw: e,
            text: e
          }]
        }
      }
    }
    inlineText(e) {
      let t = this.rules.inline.text.exec(e);
      if (t) {
        let e = this.lexer.state.inRawBlock;
        return {
          type: `text`,
          raw: t[0],
          text: t[0],
          escaped: e
        }
      }
    }
  },
  q = class e {
    constructor(e) {
      c(this, `tokens`, void 0), c(this, `options`, void 0), c(this, `state`, void 0), c(this, `inlineQueue`, void 0), c(this, `tokenizer`, void 0), this.tokens = [], this.tokens.links = Object.create(null), this.options = e || _, this.options.tokenizer = this.options.tokenizer || new K, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      let t = {
        other: S,
        block: H.normal,
        inline: U.normal
      };
      this.options.pedantic ? (t.block = H.pedantic, t.inline = U.pedantic) : this.options.gfm && (t.block = H.gfm, t.inline = this.options.breaks ? U.breaks : U.gfm), this.tokenizer.rules = t
    }
    static get rules() {
      return {
        block: H,
        inline: U
      }
    }
    static lex(t, n) {
      return new e(n).lex(t)
    }
    static lexInline(t, n) {
      return new e(n).inlineTokens(t)
    }
    lex(e) {
      e = e.replace(S.carriageReturn, `
`), this.blockTokens(e, this.tokens);
      for (let e = 0; e < this.inlineQueue.length; e++) {
        let t = this.inlineQueue[e];
        this.inlineTokens(t.src, t.tokens)
      }
      return this.inlineQueue = [], this.tokens
    }
    blockTokens(e, t = [], n = !1) {
      for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(S.tabCharGlobal, `    `).replace(S.spaceLine, ``)); e;) {
        var r, i;
        let a;
        if ((r = this.options.extensions) != null && (r = r.block) != null && r.some(n => (a = n.call({
            lexer: this
          }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
        if (a = this.tokenizer.space(e)) {
          e = e.substring(a.raw.length);
          let n = t.at(-1);
          a.raw.length === 1 && n !== void 0 ? n.raw += `
` : t.push(a);
          continue
        }
        if (a = this.tokenizer.code(e)) {
          e = e.substring(a.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `paragraph` || (n == null ? void 0 : n.type) === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + a.raw, n.text += `
` + a.text, this.inlineQueue.at(-1).src = n.text) : t.push(a);
          continue
        }
        if (a = this.tokenizer.fences(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.heading(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.hr(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.blockquote(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.list(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.html(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.def(e)) {
          e = e.substring(a.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `paragraph` || (n == null ? void 0 : n.type) === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + a.raw, n.text += `
` + a.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
            href: a.href,
            title: a.title
          }, t.push(a));
          continue
        }
        if (a = this.tokenizer.table(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        if (a = this.tokenizer.lheading(e)) {
          e = e.substring(a.raw.length), t.push(a);
          continue
        }
        let o = e;
        if ((i = this.options.extensions) != null && i.startBlock) {
          let t = 1 / 0,
            n = e.slice(1),
            r;
          this.options.extensions.startBlock.forEach(e => {
            r = e.call({
              lexer: this
            }, n), typeof r == `number` && r >= 0 && (t = Math.min(t, r))
          }), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
        }
        if (this.state.top && (a = this.tokenizer.paragraph(o))) {
          let r = t.at(-1);
          n && (r == null ? void 0 : r.type) === `paragraph` ? (r.raw += (r.raw.endsWith(`
`) ? `` : `
`) + a.raw, r.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(a), n = o.length !== e.length, e = e.substring(a.raw.length);
          continue
        }
        if (a = this.tokenizer.text(e)) {
          e = e.substring(a.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `text` ? (n.raw += (n.raw.endsWith(`
`) ? `` : `
`) + a.raw, n.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(a);
          continue
        }
        if (e) {
          let t = `Infinite loop on byte: ` + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(t);
            break
          }
          throw Error(t)
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
      var n;
      this.tokenizer.lexer = this;
      let r = e,
        i = null;
      if (this.tokens.links) {
        let e = Object.keys(this.tokens.links);
        if (e.length > 0)
          for (;
            (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) !== null;) e.includes(i[0].slice(i[0].lastIndexOf(`[`) + 1, -1)) && (r = r.slice(0, i.index) + `[` + `a`.repeat(i[0].length - 2) + `]` + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
      }
      for (;
        (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) !== null;) r = r.slice(0, i.index) + `++` + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let a;
      for (;
        (i = this.tokenizer.rules.inline.blockSkip.exec(r)) !== null;) a = i[2] ? i[2].length : 0, r = r.slice(0, i.index + a) + `[` + `a`.repeat(i[0].length - a - 2) + `]` + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      r = ((n = this.options.hooks) == null || (n = n.emStrongMask) == null ? void 0 : n.call({
        lexer: this
      }, r)) ?? r;
      let o = !1,
        s = ``;
      for (; e;) {
        var c, l;
        o || (s = ``), o = !1;
        let n;
        if ((c = this.options.extensions) != null && (c = c.inline) != null && c.some(r => (n = r.call({
            lexer: this
          }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1)) continue;
        if (n = this.tokenizer.escape(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.tag(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.link(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(n.raw.length);
          let r = t.at(-1);
          n.type === `text` && (r == null ? void 0 : r.type) === `text` ? (r.raw += n.raw, r.text += n.text) : t.push(n);
          continue
        }
        if (n = this.tokenizer.emStrong(e, r, s)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.codespan(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.br(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.del(e, r, s)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (n = this.tokenizer.autolink(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e))) {
          e = e.substring(n.raw.length), t.push(n);
          continue
        }
        let i = e;
        if ((l = this.options.extensions) != null && l.startInline) {
          let t = 1 / 0,
            n = e.slice(1),
            r;
          this.options.extensions.startInline.forEach(e => {
            r = e.call({
              lexer: this
            }, n), typeof r == `number` && r >= 0 && (t = Math.min(t, r))
          }), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1))
        }
        if (n = this.tokenizer.inlineText(i)) {
          e = e.substring(n.raw.length), n.raw.slice(-1) !== `_` && (s = n.raw.slice(-1)), o = !0;
          let r = t.at(-1);
          (r == null ? void 0 : r.type) === `text` ? (r.raw += n.raw, r.text += n.text) : t.push(n);
          continue
        }
        if (e) {
          let t = `Infinite loop on byte: ` + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(t);
            break
          }
          throw Error(t)
        }
      }
      return t
    }
  },
  J = class {
    constructor(e) {
      c(this, `options`, void 0), c(this, `parser`, void 0), this.options = e || _
    }
    space(e) {
      return ``
    }
    code({
      text: e,
      lang: t,
      escaped: n
    }) {
      var r;
      let i = (r = (t || ``).match(S.notSpaceStart)) == null ? void 0 : r[0],
        a = e.replace(S.endingNewline, ``) + `
`;
      return i ? `<pre><code class="language-` + W(i) + `">` + (n ? a : W(a, !0)) + `</code></pre>
` : `<pre><code>` + (n ? a : W(a, !0)) + `</code></pre>
`
    }
    blockquote({
      tokens: e
    }) {
      return `<blockquote>
${this.parser.parse(e)}</blockquote>
`
    }
    html({
      text: e
    }) {
      return e
    }
    def(e) {
      return ``
    }
    heading({
      tokens: e,
      depth: t
    }) {
      return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`
    }
    hr(e) {
      return `<hr>
`
    }
    list(e) {
      let t = e.ordered,
        n = e.start,
        r = ``;
      for (let t = 0; t < e.items.length; t++) {
        let n = e.items[t];
        r += this.listitem(n)
      }
      let i = t ? `ol` : `ul`,
        a = t && n !== 1 ? ` start="` + n + `"` : ``;
      return `<` + i + a + `>
` + r + `</` + i + `>
`
    }
    listitem(e) {
      return `<li>${this.parser.parse(e.tokens)}</li>
`
    }
    checkbox({
      checked: e
    }) {
      return `<input ` + (e ? `checked="" ` : ``) + `disabled="" type="checkbox"> `
    }
    paragraph({
      tokens: e
    }) {
      return `<p>${this.parser.parseInline(e)}</p>
`
    }
    table(e) {
      let t = ``,
        n = ``;
      for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
      t += this.tablerow({
        text: n
      });
      let r = ``;
      for (let t = 0; t < e.rows.length; t++) {
        let i = e.rows[t];
        n = ``;
        for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
        r += this.tablerow({
          text: n
        })
      }
      return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`
    }
    tablerow({
      text: e
    }) {
      return `<tr>
${e}</tr>
`
    }
    tablecell(e) {
      let t = this.parser.parseInline(e.tokens),
        n = e.header ? `th` : `td`;
      return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`
    }
    strong({
      tokens: e
    }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`
    }
    em({
      tokens: e
    }) {
      return `<em>${this.parser.parseInline(e)}</em>`
    }
    codespan({
      text: e
    }) {
      return `<code>${W(e,!0)}</code>`
    }
    br(e) {
      return `<br>`
    }
    del({
      tokens: e
    }) {
      return `<del>${this.parser.parseInline(e)}</del>`
    }
    link({
      href: e,
      title: t,
      tokens: n
    }) {
      let r = this.parser.parseInline(n),
        i = Be(e);
      if (i === null) return r;
      e = i;
      let a = `<a href="` + e + `"`;
      return t && (a += ` title="` + W(t) + `"`), a += `>` + r + `</a>`, a
    }
    image({
      href: e,
      title: t,
      text: n,
      tokens: r
    }) {
      r && (n = this.parser.parseInline(r, this.parser.textRenderer));
      let i = Be(e);
      if (i === null) return W(n);
      e = i;
      let a = `<img src="${e}" alt="${W(n)}"`;
      return t && (a += ` title="${W(t)}"`), a += `>`, a
    }
    text(e) {
      return `tokens` in e && e.tokens ? this.parser.parseInline(e.tokens) : `escaped` in e && e.escaped ? e.text : W(e.text)
    }
  },
  Y = class {
    strong({
      text: e
    }) {
      return e
    }
    em({
      text: e
    }) {
      return e
    }
    codespan({
      text: e
    }) {
      return e
    }
    del({
      text: e
    }) {
      return e
    }
    html({
      text: e
    }) {
      return e
    }
    text({
      text: e
    }) {
      return e
    }
    link({
      text: e
    }) {
      return `` + e
    }
    image({
      text: e
    }) {
      return `` + e
    }
    br() {
      return ``
    }
    checkbox({
      raw: e
    }) {
      return e
    }
  },
  X = class e {
    constructor(e) {
      c(this, `options`, void 0), c(this, `renderer`, void 0), c(this, `textRenderer`, void 0), this.options = e || _, this.options.renderer = this.options.renderer || new J, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Y
    }
    static parse(t, n) {
      return new e(n).parse(t)
    }
    static parseInline(t, n) {
      return new e(n).parseInline(t)
    }
    parse(e) {
      this.renderer.parser = this;
      let t = ``;
      for (let r = 0; r < e.length; r++) {
        var n;
        let i = e[r];
        if ((n = this.options.extensions) != null && (n = n.renderers) != null && n[i.type]) {
          let e = i,
            n = this.options.extensions.renderers[e.type].call({
              parser: this
            }, e);
          if (n !== !1 || ![`space`, `hr`, `heading`, `code`, `table`, `blockquote`, `list`, `html`, `def`, `paragraph`, `text`].includes(e.type)) {
            t += n || ``;
            continue
          }
        }
        let a = i;
        switch (a.type) {
          case `space`:
            t += this.renderer.space(a);
            break;
          case `hr`:
            t += this.renderer.hr(a);
            break;
          case `heading`:
            t += this.renderer.heading(a);
            break;
          case `code`:
            t += this.renderer.code(a);
            break;
          case `table`:
            t += this.renderer.table(a);
            break;
          case `blockquote`:
            t += this.renderer.blockquote(a);
            break;
          case `list`:
            t += this.renderer.list(a);
            break;
          case `checkbox`:
            t += this.renderer.checkbox(a);
            break;
          case `html`:
            t += this.renderer.html(a);
            break;
          case `def`:
            t += this.renderer.def(a);
            break;
          case `paragraph`:
            t += this.renderer.paragraph(a);
            break;
          case `text`:
            t += this.renderer.text(a);
            break;
          default: {
            let e = `Token with "` + a.type + `" type was not found.`;
            if (this.options.silent) return console.error(e), ``;
            throw Error(e)
          }
        }
      }
      return t
    }
    parseInline(e, t = this.renderer) {
      this.renderer.parser = this;
      let n = ``;
      for (let i = 0; i < e.length; i++) {
        var r;
        let a = e[i];
        if ((r = this.options.extensions) != null && (r = r.renderers) != null && r[a.type]) {
          let e = this.options.extensions.renderers[a.type].call({
            parser: this
          }, a);
          if (e !== !1 || ![`escape`, `html`, `link`, `image`, `strong`, `em`, `codespan`, `br`, `del`, `text`].includes(a.type)) {
            n += e || ``;
            continue
          }
        }
        let o = a;
        switch (o.type) {
          case `escape`:
            n += t.text(o);
            break;
          case `html`:
            n += t.html(o);
            break;
          case `link`:
            n += t.link(o);
            break;
          case `image`:
            n += t.image(o);
            break;
          case `checkbox`:
            n += t.checkbox(o);
            break;
          case `strong`:
            n += t.strong(o);
            break;
          case `em`:
            n += t.em(o);
            break;
          case `codespan`:
            n += t.codespan(o);
            break;
          case `br`:
            n += t.br(o);
            break;
          case `del`:
            n += t.del(o);
            break;
          case `text`:
            n += t.text(o);
            break;
          default: {
            let e = `Token with "` + o.type + `" type was not found.`;
            if (this.options.silent) return console.error(e), ``;
            throw Error(e)
          }
        }
      }
      return n
    }
  },
  Z = (h = class {
    constructor(e) {
      c(this, `options`, void 0), c(this, `block`, void 0), this.options = e || _
    }
    preprocess(e) {
      return e
    }
    postprocess(e) {
      return e
    }
    processAllTokens(e) {
      return e
    }
    emStrongMask(e) {
      return e
    }
    provideLexer(e = this.block) {
      return e ? q.lex : q.lexInline
    }
    provideParser(e = this.block) {
      return e ? X.parse : X.parseInline
    }
  }, c(h, `passThroughHooks`, new Set([`preprocess`, `postprocess`, `processAllTokens`, `emStrongMask`])), c(h, `passThroughHooksRespectAsync`, new Set([`preprocess`, `postprocess`, `processAllTokens`])), h),
  Ke = class {
    constructor(...e) {
      c(this, `defaults`, g()), c(this, `options`, this.setOptions), c(this, `parse`, this.parseMarkdown(!0)), c(this, `parseInline`, this.parseMarkdown(!1)), c(this, `Parser`, X), c(this, `Renderer`, J), c(this, `TextRenderer`, Y), c(this, `Lexer`, q), c(this, `Tokenizer`, K), c(this, `Hooks`, Z), this.use(...e)
    }
    walkTokens(e, t) {
      let n = [];
      for (let i of e) switch (n = n.concat(t.call(this, i)), i.type) {
        case `table`: {
          let e = i;
          for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
          for (let r of e.rows)
            for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
          break
        }
        case `list`: {
          let e = i;
          n = n.concat(this.walkTokens(e.items, t));
          break
        }
        default: {
          var r;
          let e = i;
          (r = this.defaults.extensions) != null && (r = r.childTokens) != null && r[e.type] ? this.defaults.extensions.childTokens[e.type].forEach(r => {
            let i = e[r].flat(1 / 0);
            n = n.concat(this.walkTokens(i, t))
          }) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)))
        }
      }
      return n
    }
    use(...e) {
      let t = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      return e.forEach(e => {
        let n = {
          ...e
        };
        if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(e => {
            if (!e.name) throw Error(`extension name required`);
            if (`renderer` in e) {
              let n = t.renderers[e.name];
              n ? t.renderers[e.name] = function(...t) {
                let r = e.renderer.apply(this, t);
                return r === !1 && (r = n.apply(this, t)), r
              } : t.renderers[e.name] = e.renderer
            }
            if (`tokenizer` in e) {
              if (!e.level || e.level !== `block` && e.level !== `inline`) throw Error(`extension level must be 'block' or 'inline'`);
              let n = t[e.level];
              n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === `block` ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === `inline` && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
            }
            `childTokens` in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
          }), n.extensions = t), e.renderer) {
          let t = this.defaults.renderer || new J(this.defaults);
          for (let n in e.renderer) {
            if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
            if ([`options`, `parser`].includes(n)) continue;
            let r = n,
              i = e.renderer[r],
              a = t[r];
            t[r] = (...e) => {
              let n = i.apply(t, e);
              return n === !1 && (n = a.apply(t, e)), n || ``
            }
          }
          n.renderer = t
        }
        if (e.tokenizer) {
          let t = this.defaults.tokenizer || new K(this.defaults);
          for (let n in e.tokenizer) {
            if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
            if ([`options`, `rules`, `lexer`].includes(n)) continue;
            let r = n,
              i = e.tokenizer[r],
              a = t[r];
            t[r] = (...e) => {
              let n = i.apply(t, e);
              return n === !1 && (n = a.apply(t, e)), n
            }
          }
          n.tokenizer = t
        }
        if (e.hooks) {
          let t = this.defaults.hooks || new Z;
          for (let n in e.hooks) {
            if (!(n in t)) throw Error(`hook '${n}' does not exist`);
            if ([`options`, `block`].includes(n)) continue;
            let r = n,
              i = e.hooks[r],
              a = t[r];
            t[r] = Z.passThroughHooks.has(n) ? e => {
              if (this.defaults.async && Z.passThroughHooksRespectAsync.has(n)) return (async () => {
                let n = await i.call(t, e);
                return a.call(t, n)
              })();
              let r = i.call(t, e);
              return a.call(t, r)
            } : (...e) => {
              if (this.defaults.async) return (async () => {
                let n = await i.apply(t, e);
                return n === !1 && (n = await a.apply(t, e)), n
              })();
              let n = i.apply(t, e);
              return n === !1 && (n = a.apply(t, e)), n
            }
          }
          n.hooks = t
        }
        if (e.walkTokens) {
          let t = this.defaults.walkTokens,
            r = e.walkTokens;
          n.walkTokens = function(e) {
            let n = [];
            return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n
          }
        }
        this.defaults = {
          ...this.defaults,
          ...n
        }
      }), this
    }
    setOptions(e) {
      return this.defaults = {
        ...this.defaults,
        ...e
      }, this
    }
    lexer(e, t) {
      return q.lex(e, t ?? this.defaults)
    }
    parser(e, t) {
      return X.parse(e, t ?? this.defaults)
    }
    parseMarkdown(e) {
      return (t, n) => {
        let r = {
            ...n
          },
          i = {
            ...this.defaults,
            ...r
          },
          a = this.onError(!!i.silent, !!i.async);
        if (this.defaults.async === !0 && r.async === !1) return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));
        if (typeof t > `u` || t === null) return a(Error(`marked(): input parameter is undefined or null`));
        if (typeof t != `string`) return a(Error(`marked(): input parameter is of type ` + Object.prototype.toString.call(t) + `, string expected`));
        if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
          let n = i.hooks ? await i.hooks.preprocess(t) : t,
            r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? q.lex : q.lexInline)(n, i),
            a = i.hooks ? await i.hooks.processAllTokens(r) : r;
          i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
          let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? X.parse : X.parseInline)(a, i);
          return i.hooks ? await i.hooks.postprocess(o) : o
        })().catch(a);
        try {
          i.hooks && (t = i.hooks.preprocess(t));
          let n = (i.hooks ? i.hooks.provideLexer(e) : e ? q.lex : q.lexInline)(t, i);
          i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
          let r = (i.hooks ? i.hooks.provideParser(e) : e ? X.parse : X.parseInline)(n, i);
          return i.hooks && (r = i.hooks.postprocess(r)), r
        } catch (e) {
          return a(e)
        }
      }
    }
    onError(e, t) {
      return n => {
        if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
          let e = `<p>An error occurred:</p><pre>` + W(n.message + ``, !0) + `</pre>`;
          return t ? Promise.resolve(e) : e
        }
        if (t) return Promise.reject(n);
        throw n
      }
    }
  },
  Q = new Ke;

function $(e, t) {
  return Q.parse(e, t)
}
$.options = $.setOptions = function(e) {
  return Q.setOptions(e), $.defaults = Q.defaults, v($.defaults), $
}, $.getDefaults = g, $.defaults = _, $.use = function(...e) {
  return Q.use(...e), $.defaults = Q.defaults, v($.defaults), $
}, $.walkTokens = function(e, t) {
  return Q.walkTokens(e, t)
}, $.parseInline = Q.parseInline, $.Parser = X, $.parser = X.parse, $.Renderer = J, $.TextRenderer = Y, $.Lexer = q, $.lexer = q.lex, $.Tokenizer = K, $.Hooks = Z, $.parse = $, $.options, $.setOptions, $.use, $.walkTokens, $.parseInline;
var qe = $;
X.parse, q.lex;
var Je = l({
    default: () => Ye
  }),
  Ye = `Welcome to WPlace, a platform to share and explore pixel art creations!
`,
  Xe = l({
    default: () => Ze
  }),
  Ze = `We have just launched a new update focused on **personalization**!
You can now customize your profile with **profile frames**, **custom fonts**, and **name styles**, to really show off who you are to anyone who clicks on your pixels!

### 🖼️ Profile Frames

Frame your profile in style!

- Custom borders around your profile picture - just like our Event Frames
- Launching with **over 10 frames**
- You can own **multiple** frames and change them whenever you want

### 🔤 Custom Fonts

Choose the perfect font for your name!

- Launching with **5 new fonts**
- Fonts are only applied to your name, not your ID (\\\`#123456\\\`)

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

The **More Like You Update** is **LIVE NOW** - go check it out and share what designs you come up with! 🎉\`
`,
  Qe = l({
    default: () => $e
  }),
  $e = `This update brings several improvements and fixes for a smoother experience:

- Small bugs fixed on the frontend for both mobile and desktop
- Fixed minor issues when equipping cosmetics
- Cosmetics released within the last 7 days now display a "New" badge
- 5 new frames are now available in the shop
- New shop view to see all available frames
- Improved consistency of texts for translations

We continue to listen to community feedback to make WPlace even better!
`,
  et = l({
    default: () => tt
  }),
  tt = `This patch focuses on interface stability across devices and a better moderation workflow:

- Fixed the side menu layout where buttons could overflow outside the menu bounds
- Fixed the pixel information layout that was displaying incorrectly on some devices
- Delivered multiple fixes and improvements to the staff moderation screen
`,
  nt = l({
    default: () => rt
  }),
  rt = `Import any image and position it over the map as a painting guide! Access overlays from the **new button in the main sidebar**.

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
- Fixed a stray canvas click when confirming a profile picture
`,
  it = l({
    default: () => at
  }),
  at = `With v1.3.0, we’re reducing the moderation intervention and giving more freedom to the players to better match Wplace’s core idea: a living canvas shaped by the community.

Our previous rules left too much room for interpretation, which led to inconsistent moderation and caused players to be more hesitant to paint on the map. We’re now moving to a more hands-off approach, where the community has more control over the map, and we only step in when truly necessary.

### 🆕 Key Changes

- **New Clear Rules, More Freedom:** Clearer, more flexible rules supported by visual examples so everyone knows exactly what’s allowed or not.
- **New Moderation Policy:** We will only intervene in clear and obvious cases of rule violations.
- **Griefing Redefined:** Cleaning inappropriate or ambiguous content, spammy filler, or repetitive patterns is no longer griefing.
- **Enhanced Griefing Enforcement:** Obvious griefing cases will be handle with more care, with penalties and rollbacks when needed.
- **Improved Anti-Cheat**: New system to detect and prevent bots and multi-account to keep the game fair.
- **Hotspots:** Map markers highlight the most active and contested regions.
- **Improved Cosmetics UI:** More intuitive interface for browsing and equipping cosmetics.
- **New Avatar Frame:** Black cat - Frame Contest Winning Frame - made by Yana

### 📜 New Rules

#### 🚫 Prohibited

1. **Inappropriate Content**: Explicit, hateful, or illegal content is not tolerated. [More details](https://wplace.live/terms/community-guidelines#topic-1)
2. **Griefing**: Destroying others' work with no creative intent. [More details](https://wplace.live/terms/community-guidelines#topic-2)
3. **Multi-accounts & bots**: One account per person. No automation or exploits.

#### ✅ Fair play

1. **Territorial disputes**: Competing for space is part of the game. [More details](https://wplace.live/terms/community-guidelines#topic-2-3)
2. **Map cleanup:** Erasing spam, inappropriate or suggestive content with transparent pixels. [More details](https://wplace.live/terms/community-guidelines#topic-2-3-2)

The moderation should only step in when a rule is clearly broken.
Everything else is up to the community.

See you on the map.
`,
  ot = l({
    default: () => st
  }),
  st = `#### Anti-Cheat

- Fixed bugs that were incorrectly triggering SMS verification for legitimate users.
- Reverted SMS verifications that were wrongly issued due to these bugs.

#### Hotspots

- You can now opt out of having your drawings appear in map hotspots. You can find the option in the \`Profile Configurations tab\`.
- Fixed zoom behavior when clicking on hotspot clusters.
- Reduced default zoom level when clicking on hotspots.

#### Overlay

- Added a \`Convert to legacy colors\` option to match overlay colors to the palette from before the update. Use this if your current overlay looks off after the color changes.

#### UI & Other Fixes

- Fixed minor bugs in the Edit Profile dialog
- Various other small bug fixes
`,
  ct = l({
    default: () => lt
  }),
  lt = `### 🆕 Key Changes

- **Anti-cheat system improvements**: Stronger detection and punishment of bots and multi-accounts to keep the canvas fair.
- **Cloud Backup for Overlays**: Sync your overlays to Google Drive so they're available across devices and safe from accidental loss. Status indicators show sync state at a glance.
- **More payment methods available**: Additional checkout options to make purchasing Droplets easier.
- **Various small bugfixes and improvements**: Overlay sync fixes (flip, palette mode, re-encode, reorder), better behavior on browsers without WebGL, and assorted UI polish.
`,
  ut = l({
    default: () => dt
  }),
  dt = `### 🆕 Key Changes

- **World Cup Event Match Predictions and Cosmetics**: You can now earn an event currency called **Cup Coins** by painting daily in any stadium area or by getting the correct prediction. Spend your Cup Coins in the new **Cup Store** on exclusive time-limited rewards, such as country badges, frames, and other cosmetics, or exchange Droplets for coins if you want a head start.
- **Anti-cheat system improvements**: More aggressive anticheat detections and punishment of bots and multi-accounts to keep the canvas fair.
- **Improvements to the suspension system**: Suspensions are now more granular.
`,
  ft = l({
    default: () => pt
  }),
  pt = `### 🆕 Key Changes

Alliances have been completely rebuilt into a full community system with public profiles, shared progression, customization, collaborative canvases, headquarters, awards and new management tools.

- **Discover alliances**: Explore the new Alliance Gallery, search for alliances and sort them by activity, members, painted pixels or creation date. Each alliance now has a detailed public profile with its picture, banner, description, members, awards, headquarters and Discord server. Alliance cards can also be previewed directly from pixels on the main canvas.
- **Manage your community**: Alliance leaders can choose between Open, Request to Join and Invite Only membership policies. Create limited or expiring invite links, review join requests, promote members, assign admins, transfer leadership and remove or ban members. Alliances no longer have a member limit.
- **Earn and spend Alliance Coins**: Alliances earn Coins when their members place valid pixels on the main canvas. Members can also donate Droplets to the alliance fund. A complete ledger shows how Coins were earned and spent, while only the leader can make purchases.
- **Alliance Store**: Alliance Coins can be spent from one central store on renaming, description upgrades, premium palette colors, custom pictures and banners, additional drafts, headquarters access and headquarters upgrades.
- **Build a unique identity**: Create a custom profile picture and banner pixel by pixel, publish a longer formatted description with Markdown tools and shortcuts, and add an optional Discord invite to the alliance profile.
- **Collaborative picture and banner studio**: Leaders can create unlimited drafts, invite specific alliance members to help paint them and save multiple finished versions. Finished versions can be previewed, equipped or replaced at any time.
- **Full pixel editor**: Alliance pictures, banners and headquarters use a dedicated editor with painting, erasing, color picking, undo, redo, panning, zooming, canvas fitting and an optional pixel grid. Shared drafts automatically receive changes made by other editors.
- **Alliance Headquarters**: Claim a location on the world map and build on a separate shared alliance canvas. Headquarters can be expanded, displayed publicly or limited to members, and opened directly from the map or alliance profile. Public visitors can waanvas, while members can paint using a separate headquarters charge pool that does not affect main-canvas charges.
- **Headquarters upgrades**: Leaders can increase the headquarters canvas size, raise every member's maximum HQ charges and reduce the charge regeneration cooldown.
- **Upgradable awards**: Alliance achievements progress through Common, Uncommon, Rare, Epic, Legendary and Mythic tiers. Awards track milestones such as members, painted pixels, activity and alliance age. Leaders can feature up to three earned awards on the public profile.
- **Activity feed and notifications**: Important alliance events now appear in a detailed activity feed, including membership changes, purchases, awards, profile updates and headquarters activity. Personal events such as join-request decisions, role changes, leadership transfers, removals and headquarters timeouts are delivered through direct notifications.
- **Alliance reporting and moderation**: Players can report alliance names, descriptions, Discord invites, equipped artwork and headquarters content. Reports preserve the exact content that was reported and use the existing moderation system.
`,
  mt = l({
    default: () => ht
  }),
  ht = `### Additions

- **NEW FRAMES:** A fresh collection of user frames is now available in the store!
- **Active alliance leadership**: If a leader has not painted for more than 60 days, leadership now passes to the oldest active admin, then the oldest active member. Alliances without an active successor keep their current leader.
- **Faster member directories**: Alliance member lists can now be searched by name or ID, filtered by role, and sorted. Staff can also filter members by account status and sort by painted pixels.

### Improvements

- **Reliable headquarters previews**: Headquarters preview images now recover automatically from temporary loading delays instead of remaining broken.
- **Stable headquarters canvas**: Moving, zooming, and refreshing the headquarters canvas no longer produces false connection errors when an outdated tile request is cancelled, and holding Space to paint or pan no longer scrolls the dialog.
- **Readable alliance leaderboard on phones**: The alliance leaderboard now fits the screen on mobile, so the pixel counts and the last pixel button are no longer cut off.
`,
  gt = l({
    default: () => _t
  }),
  _t = `### Fixes

- Fixed additional cases where large personal overlays could appear flipped, duplicated, or scrambled on mobile devices.
- Fixed an issue where open overlays could disappear on desktop or mobile when canvas pixels refreshed and remain hidden until the user painted or reloaded the page.
`,
  vt = l({
    default: () => yt
  }),
  yt = `### Fixes

- Fixed an issue where the country selector could appear behind the phone verification dialog.
`,
  bt = l({
    default: () => xt
  }),
  xt = `### Fixes

- Fixed an issue where alliance overlay lists could remain stuck loading when multiple overlays were available.
- Alliance staff can now open and edit shared overlay permissions without waiting for the full overlay image to load.
`,
  St = l({
    default: () => Ct
  }),
  Ct = `### Improvements

- **Reliable public headquarters previews**: Public headquarters previews now properly load during heavy alliance activity instead of remaining unavailable while background work catches up.
- **Better alliance browsing**: Filter the gallery by open, request-based, or invite-only membership, while recently active alliances continue loading reliably as their order changes.
- **Timely alliance succession**: Eligible active successors now take over promptly after a leader passes 60 days without painting, even when many alliances need leadership updates at once.
- **Flexible alliance roles**: Alliances now include a Mod role without changing existing Admins, and leaders can tailor permissions for Admins, Mods, and Members.
- **Clear purchase history**: The Alliance Coin ledger now names the store item bought in every purchase entry.
- **Complete headquarters timeout history**: Revoked headquarters timeouts now show why painting access was restored.
`,
  wt = l({
    default: () => Tt
  }),
  Tt = `### Improvements

- **Stable alliance canvas refreshes**:
  - Picture and banner canvases now keep their pan and zoom positions while collaborator changes load.
  - Headquarters canvases fetch settled positions during movement and avoid repeating temporary connection warnings.
- **Full-screen alliance canvases**:
  - Picture, banner, and headquarters artwork can now fill the entire screen for better visibility.
  - Painting now uses the familiar main-canvas flow with an open-and-confirm Paint button and mouse-wheel-click color sampling.
  - Headquarters charges and recharge time are shown on Paint, pixel clicks open the same detailed painter card used by the main canvas, and timeout management lives in a header menu.
- **Controlled member lists**:
  - Alliance member and ban lists now load one additional page per **Load more** click instead of continuing automatically while you scroll.
- **Easier draft collaborators**:
  - Managing who can paint an alliance draft now shows the full member list with a search box and a checkbox per member.
  - Ticking a member grants access instantly, unticking removes it, and current collaborators stay visible with the date they were added.
`,
  Et = l({
    default: () => Dt
  }),
  Dt = `### Additions

- **Shared alliance overlays**:
  - Alliances can now centrally manage overlays that are available across picture, banner, headquarters, and main-canvas overlay galleries.
  - The central overlay editor includes a live preview with horizontal and vertical flipping plus precise, aspect-locked resizing.
  - Every overlay available to a member appears on every alliance canvas and in the main-canvas overlay gallery.
  - Overlay managers can share each overlay with all members, one or more alliance roles, or collaborators on one or more drafts.
  - Alliances start with 0 shared spaces and expand them through a single upgradable Store purchase: each upgrade adds 3 spaces, up to a maximum of 15.

### Improvements

- The member list's action menu is now clearer: each action has an icon, kick and ban are separated from role changes and ask for confirmation first, banning shows a confirmation message, and the menu only appears for members you can actually manage.

### Fixes

- Account actions now have stronger protection against unauthorized requests from other websites.
- The alliance Activity feed and alliance notifications now show new events promptly, even during very busy periods.
`,
  Ot = l({
    default: () => kt
  }),
  kt = `### Improvements

- The art opacity button on the map now opens a display menu: set the art opacity to 0%, 50%, or 100%, and show or hide alliance headquarters pins and hotspot markers.
- Clicking the alliance name on a selected pixel now opens that alliance's details.
- Alliance leaderboards now show each alliance's picture next to its name, and alliance names show a quick summary on hover and open the alliance's details when clicked.
- Alliance member lists can now be sorted by join date, from newest to oldest or oldest to newest.
- Alliances can now unlock resizable square and circle brushes, paint bucket fill, and filled polygon drawing for picture and banner editors.
- Painting on alliance canvases now uses the same sound feedback as the main canvas.
- Alliance awards now display visual effects that grow richer with every tier upgrade, from a soft colored glow on lower tiers to sparkles and a shifting aura on the highest ones.
- Alliance screens now respond with subtle animations for better responsiveness.
- All alliance animations follow your device's reduced motion preference.
- Alliance canvases now include a mobile painting lock, allowing users to paint continuously by dragging without moving the canvas.

### Fixes

- Fixed an issue where the join policy filter in the alliance gallery was cut off in some languages.
`,
  At = l({
    default: () => jt
  }),
  jt = `### Fixes

- Fixed an issue where alliance headquarters pins could appear at the wrong zoom after loading the map and moving the pointer could repeatedly cause map errors.
`,
  Mt = l({
    default: () => Nt
  }),
  Nt = `### New features

- Alliance headquarters now include a leaderboard of canvas contributions for today, this week, this month, and all time.
- Alliance staff with overlay management permission can now use its edit dialog to place it independently on drafts, headquarters, and the main canvas.

### Improvements

- The alliance asset studio has a refreshed layout: drafts and saved versions appear as image cards on a transparency checkerboard, each draft's manage actions are grouped into a compact menu, a new draft can be bought directly from the drafts grid at its shown Coin price, and the equipped version can be unequipped right from its card.
- Finishing an asset draft and removing a saved version now ask for confirmation first.
- Styled letters with accents in alliance descriptions now display correctly on mobile devices.
- Alliance overlays now use shared positions chosen by staff. Positioning opens the selected canvas directly, where staff can set its size and color options independently.
- Alliance overlays use the same painting-guide flow on every canvas, including pixel guide modes and selected-color filtering.
- Alliance overlays refresh after staff moves them, notify viewers about the new position, and reuse images securely after rechecking access. **Existing overlays stay hidden until staff selects and positions their locations.**

### Fixes

- Captcha verification dialogs now stay in front of other dialogs.
- Alliance overlays now open at the correct opacity.
- Alliance headquarters leaderboard bars now accurately show members with no painted pixels.
- Alliance and map overlay pixel modes now switch reliably, including on large templates.
- Alliance overlay positioning now returns staff to the overlay editor, and main-canvas placements can be resized without reopening unexpectedly.
- Main-canvas alliance overlays now render reliably when reopened after being closed.
- Alliance canvases now continue showing collaborators' pixel changes while paint mode is open without discarding unconfirmed local paint.
- Pixels placed while painting alliance canvases now show crosshairs that stay aligned while panning or zooming, until the paint session is confirmed or canceled.
- Alliance headquarters canvases now keep loaded areas visible while zooming and refresh them when needed.
- Starting paint mode now keeps the current map zoom whenever individual pixels are already visible.
- Pinch zooming on headquarters canvases now stays centered beneath your fingers on touchscreens.
`,
  Pt = l({
    default: () => Ft
  }),
  Ft = `### Fixes

- Fixed an issue where saved overlays could remain stuck loading and make the overlay menu unresponsive.
- Fixed an issue that prevented overlays with role-restricted audiences from being saved.
- Alliance overlays now preserve full-resolution source images so their quantized colors stay consistent with matching personal overlays.
`,
  It = l({
    default: () => Lt
  }),
  Lt = `### Improvements

- Alliance Coin balances, prices, and notifications now use a dedicated coin icon, and Droplets have a refreshed icon.

### Fixes

- Fixed an issue where personal overlays could appear duplicated, rotated, or show incorrect pixels on some mobile devices.
- Fixed an issue where reopened alliance picture or banner drafts could fail to finish.
`,
  Rt = l({
    default: () => zt
  }),
  zt = `### New features

- **Premium cosmetics:** Users can now purchase Prism - our new premium currency, spend it on premium cosmetics.

### Additions

- Frames, fonts and name styles now show how rare they are, in the store and in your own collection. Their card and rarity label take on the rarity's color and effects.

### Improvements

- Unpainted pixels in alliance profile pictures are now transparent, allowing the surrounding profile or map to show through.
- Droplet and Prism cosmetic prices are now fixed by rarity, making them more predictable.
- Alliance award cards, including the featured awards on an alliance profile, now use the same rarity look as the rest of the game, with the effects building up from Common to Mythic.
- New picture and banner drafts can now be started from any available saved version directly in the asset studio.
- Equipped profile frames now appear on the main page profile button and in level avatar previews.

### Fixes

- The mobile painting lock now keeps alliance canvases still while painting with a stylus.
- Fixed an issue where deleting an account could time out while removing its associated data.
`,
  Bt = l({
    default: () => Vt
  }),
  Vt = `### Improvements

- Prism packages now include twice as much Prism at the same prices. Customers with previous non-refunded Prism purchases receive the additional Prism automatically.
`,
  Ht = l({
    default: () => Ut
  }),
  Ut = `### Fixes

- Fixed charge purchases showing incorrect upgrade amounts or appearing unchanged when account refreshes are interrupted.
- Charge purchase quantities are now limited to whole amounts the user can afford.
`,
  Wt = l({
    default: () => Gt
  }),
  Gt = `### Improvements

- Android releases are now more consistent across different installation and update methods.
- Android updates are now more reliable  and go through stronger release checks.
- Custom name fonts now load only when they are actually needed, reducing unnecessary connections and page loading work.
- Captcha and payment systems now handle temporary failures more reliably instead of getting stuck.

### Fixes

- Improved Alliance invite and join-request pages so they return more consistent results and no longer show invalid pagination.
- Fixed Android app links sometimes receiving the same URL parameter twice when opening the app.
- Fixed the back and close buttons not working correctly during FastSpring checkout.
- Google Play purchases are now more reliable and recover better from temporary problems.
- Stripe checkout now shows a successful purchase only after the purchased Droplets or Prism have actually been added to the account.
- Improved account security for OAuth sign-ins by no longer relying on unverified email addresses when matching existing accounts.
- Phone numbers used for verification are no longer stored in the browser.
- Purchases and profile picture uploads now correctly show an error when the server is temporarily unavailable instead of appearing successful.
- Pixel information and painting now recover more reliably during server restarts.
- The mobile app install button now disappears after the browser's installation prompt has already been used.
- Mobile sign-in codes can now only be used once and are no longer exposed in request URLs.
- Failed painting attempts now show an error instead of making it look like the pixel was successfully placed.
`,
  Kt = l({
    default: () => qt
  }),
  qt = `### Fixes

- Stripe card checkout is available again and can be retried after temporary loading problems.
`,
  Jt = Object.entries(Object.assign({
    "./markdown/1.0.0 - Welcome to WPlace!.md": Je,
    "./markdown/1.1.0 - ✨ More Like You Update.md": Xe,
    "./markdown/1.1.1 - 🛠️ Quality & Cosmetics Improvements.md": Qe,
    "./markdown/1.1.2 - 🧰 UI Fixes & Moderation Improvements.md": et,
    "./markdown/1.2.0 - 🖼️ Pixel Overlays & Achievement Frames.md": nt,
    "./markdown/1.3.0 - 🛠️ Moderation Adjustments, Hotspots and Improved Anti-Cheat System.md": it,
    "./markdown/1.3.1 - 🛠️  Hotfixes and Opt-out from Hotspots copy.md": ot,
    "./markdown/1.3.2 - 🤖 Anti-cheat improvements and Google Drive overlay sync.md": ct,
    "./markdown/1.3.3 - ⚽ World Cup Predictions and Cosmetics & Anti-cheat Improvements.md": ut,
    "./markdown/1.4.0 - 🛡️ The New Alliance System.md": ft,
    "./markdown/1.4.1 - 🛡️ Alliance System Fixes.md": mt,
    "./markdown/1.4.10 - 🛠️ Mobile Overlay Rendering.md": gt,
    "./markdown/1.4.11 - 🛠️ Phone Verification Fixes.md": vt,
    "./markdown/1.4.12 - 🛠️ Alliance Overlay Reliability.md": bt,
    "./markdown/1.4.2 - 🛠️ Headquarters Preview Reliability.md": St,
    "./markdown/1.4.3 - 🛠️ Alliance Usability Fixes.md": wt,
    "./markdown/1.4.4 - 🧭 Alliance Canvas Overlays.md": Et,
    "./markdown/1.4.5 - 🎨 Alliance Canvas Tools and Map Display.md": Ot,
    "./markdown/1.4.6 - 🛠️ Map Interaction Reliability.md": At,
    "./markdown/1.4.7 - 🖼️ Alliance Overlays and Asset Studio.md": Mt,
    "./markdown/1.4.8 - 🛠️ Overlay Reliability.md": Pt,
    "./markdown/1.4.9 - 🛍️ Mobile Overlay Fixes.md": It,
    "./markdown/1.5.0 - 💎 Premium Cosmetics.md": Rt,
    "./markdown/1.5.1 - 💎 More Prism Per Purchase.md": Bt,
    "./markdown/1.5.2 - 🛠️ Store Purchase Reliability.md": Ht,
    "./markdown/1.5.3 - 🛠️ Account and Payment Reliability.md": Wt,
    "./markdown/1.5.4 - 💳 Checkout Payment Options.md": Kt
  })).map(([e, t]) => {
    var n, r;
    let i = (n = e.split(`/`).at(-1)) == null ? void 0 : n.replace(`.md`, ``),
      a = i == null || (r = i.split(`-`)[0]) == null ? void 0 : r.trim();
    return {
      version: a,
      title: (i == null ? void 0 : i.split(`-`).slice(1).join(`-`).trim()) ?? a,
      markdown: t.default
    }
  }).sort((e, t) => e.version.localeCompare(t.version, void 0, {
    numeric: !0
  })),
  Yt = o(`<span class="text-primary inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide"><span class="relative flex size-1.5"><span class="bg-primary/60 absolute inline-flex size-full animate-ping rounded-full"></span> <span class="bg-primary relative inline-flex size-1.5 rounded-full"></span></span> </span>`),
  Xt = o(`<article><div class="flex items-center gap-3"><span class="text-primary text-lg font-bold tracking-wide"> </span> <!></div> <h2 class="mt-1 text-[0.9375rem] leading-snug font-bold tracking-tight"> </h2> <div class="patch-content mt-4 svelte-1pfqn89"></div></article>`);

function Zt(o, c) {
  a(c, !0);
  let l = s(c, `latest`, 3, !1);
  var h = Xt(),
    g = p(h),
    _ = p(g),
    v = p(_);
  u(_);
  var y = e(_, 2),
    b = t => {
      var n = Yt(),
        r = e(p(n));
      u(n), f(e => d(r, ` ${e??``}`), [() => m.latest()]), i(t, n)
    };
  t(y, e => {
    l() && e(b)
  }), u(g);
  var x = e(g, 2),
    S = p(x, !0);
  u(x);
  var C = e(x, 2);
  r(C, () => c.patchNote.html, !0), u(C), u(h), f(() => {
    d(v, `v${c.patchNote.version??``}`), d(S, c.patchNote.title)
  }), i(o, h), n()
}
export {
  J as a, qe as i, Jt as n, Ke as r, Zt as t
};