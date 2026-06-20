var Ae = Object.defineProperty;
var Pe = (n, e, t) => e in n ? Ae(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var m = (n, e, t) => Pe(n, typeof e != "symbol" ? e + "" : e, t);
import {
  g as fe
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  p as Ce,
  d as C,
  r as z,
  s as O,
  t as ae,
  a as oe,
  b as Ie,
  c as ke
} from "./CxLQz1V2.js";
import {
  s as Q
} from "./CMG3kxXu.js";
import {
  i as Le
} from "./DeNk1SQn.js";
import {
  h as Me
} from "./BJfPymLI.js";
import {
  p as Ee
} from "./C_QAuGIk.js";
const Be = () => "Latest",
  Oe = () => "Mais recente",
  je = () => "最新",
  qe = () => "Neueste",
  Fe = () => "Último",
  De = () => "Derniers",
  Ne = () => "Ultimi",
  We = () => "最新",
  He = () => "Najnowsze",
  Ze = () => "Последние",
  Qe = () => "Останні",
  Ge = () => "Mới nhất",
  Ue = (n = {}, e = {}) => {
    const t = e.locale ?? fe();
    return t === "en" ? Be() : t === "pt" ? Oe() : t === "ch" ? je() : t === "de" ? qe() : t === "es" ? Fe() : t === "fr" ? De() : t === "it" ? Ne() : t === "jp" ? We() : t === "pl" ? He() : t === "ru" ? Ze() : t === "uk" ? Qe() : Ge()
  },
  Ye = () => "Patch notes",
  Xe = () => "Notas de atualização",
  Ve = () => "更新日志",
  Ke = () => "Versionshinweise",
  Je = () => "Notas de actualización",
  et = () => "Notes de mise à jour",
  tt = () => "Note di aggiornamento",
  nt = () => "リリースノート",
  rt = () => "Informacje o aktualizacji",
  st = () => "Примечания к обновлению",
  it = () => "Нотатки про оновлення",
  lt = () => "Ghi chú cập nhật",
  _n = (n = {}, e = {}) => {
    const t = e.locale ?? fe();
    return t === "en" ? Ye() : t === "pt" ? Xe() : t === "ch" ? Ve() : t === "de" ? Ke() : t === "es" ? Je() : t === "fr" ? et() : t === "it" ? tt() : t === "jp" ? nt() : t === "pl" ? rt() : t === "ru" ? st() : t === "uk" ? it() : lt()
  };

function X() {
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
var $ = X();

function me(n) {
  $ = n
}
var S = {
  exec: () => null
};

function f(n, e = "") {
  let t = typeof n == "string" ? n : n.source,
    s = {
      replace: (r, l) => {
        let a = typeof l == "string" ? l : l.source;
        return a = a.replace(w.caret, "$1"), t = t.replace(r, a), s
      },
      getRegex: () => new RegExp(t, e)
    };
  return s
}
var at = (() => {
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
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: n => new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}#`),
    htmlBeginRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`, "i"),
    blockquoteBeginRegex: n => new RegExp(`^ {0,${Math.min(3,n-1)}}>`)
  },
  ot = /^(?:[ \t]*(?:\n|$))+/,
  ct = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  pt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  ht = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  V = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  be = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  xe = f(be).replace(/bull/g, V).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(),
  ut = f(be).replace(/bull/g, V).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
  K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  dt = /^[^\n]+/,
  J = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  gt = f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", J).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
  ft = f(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, V).getRegex(),
  W = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  ee = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  kt = f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ee).replace("tag", W).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
  we = f(K).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(),
  mt = f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", we).getRegex(),
  te = {
    blockquote: mt,
    code: ct,
    def: gt,
    fences: pt,
    heading: ht,
    hr: E,
    html: kt,
    lheading: xe,
    list: ft,
    newline: ot,
    paragraph: we,
    table: S,
    text: dt
  },
  ce = f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(),
  bt = {
    ...te,
    lheading: ut,
    table: ce,
    paragraph: f(K).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ce).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex()
  },
  xt = {
    ...te,
    html: f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ee).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: S,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: f(K).replace("hr", E).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", xe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  },
  wt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  yt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  ye = /^( {2,}|\\)\n(?!\s*$)/,
  _t = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  A = /[\p{P}\p{S}]/u,
  H = /[\s\p{P}\p{S}]/u,
  ne = /[^\s\p{P}\p{S}]/u,
  vt = f(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, H).getRegex(),
  _e = /(?!~)[\p{P}\p{S}]/u,
  St = /(?!~)[\s\p{P}\p{S}]/u,
  Rt = /(?:[^\s\p{P}\p{S}]|~)/u,
  $t = f(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", at ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(),
  ve = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  Tt = f(ve, "u").replace(/punct/g, A).getRegex(),
  zt = f(ve, "u").replace(/punct/g, _e).getRegex(),
  Se = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  At = f(Se, "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, H).replace(/punct/g, A).getRegex(),
  Pt = f(Se, "gu").replace(/notPunctSpace/g, Rt).replace(/punctSpace/g, St).replace(/punct/g, _e).getRegex(),
  Ct = f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, H).replace(/punct/g, A).getRegex(),
  It = f(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, A).getRegex(),
  Lt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
  Mt = f(Lt, "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, H).replace(/punct/g, A).getRegex(),
  Et = f(/\\(punct)/, "gu").replace(/punct/g, A).getRegex(),
  Bt = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
  Ot = f(ee).replace("(?:-->|$)", "-->").getRegex(),
  jt = f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
  F = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
  qt = f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", F).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
  Re = f(/^!?\[(label)\]\[(ref)\]/).replace("label", F).replace("ref", J).getRegex(),
  $e = f(/^!?\[(ref)\](?:\[\])?/).replace("ref", J).getRegex(),
  Ft = f("reflink|nolink(?!\\()", "g").replace("reflink", Re).replace("nolink", $e).getRegex(),
  pe = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  re = {
    _backpedal: S,
    anyPunctuation: Et,
    autolink: Bt,
    blockSkip: $t,
    br: ye,
    code: yt,
    del: S,
    delLDelim: S,
    delRDelim: S,
    emStrongLDelim: Tt,
    emStrongRDelimAst: At,
    emStrongRDelimUnd: Ct,
    escape: wt,
    link: qt,
    nolink: $e,
    punctuation: vt,
    reflink: Re,
    reflinkSearch: Ft,
    tag: jt,
    text: _t,
    url: S
  },
  Dt = {
    ...re,
    link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", F).getRegex(),
    reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", F).getRegex()
  },
  G = {
    ...re,
    emStrongRDelimAst: Pt,
    emStrongLDelim: zt,
    delLDelim: It,
    delRDelim: Mt,
    url: f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", pe).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: f(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", pe).getRegex()
  },
  Nt = {
    ...G,
    br: f(ye).replace("{2,}", "*").getRegex(),
    text: f(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  },
  j = {
    normal: te,
    gfm: bt,
    pedantic: xt
  },
  I = {
    normal: re,
    gfm: G,
    breaks: Nt,
    pedantic: Dt
  },
  Wt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
  he = n => Wt[n];

function v(n, e) {
  if (e) {
    if (w.escapeTest.test(n)) return n.replace(w.escapeReplace, he)
  } else if (w.escapeTestNoEncode.test(n)) return n.replace(w.escapeReplaceNoEncode, he);
  return n
}

function ue(n) {
  try {
    n = encodeURI(n).replace(w.percentDecode, "%")
  } catch {
    return null
  }
  return n
}

function de(n, e) {
  var l;
  let t = n.replace(w.findPipe, (a, i, p) => {
      let o = !1,
        h = i;
      for (; --h >= 0 && p[h] === "\\";) o = !o;
      return o ? "|" : " |"
    }),
    s = t.split(w.splitPipe),
    r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((l = s.at(-1)) != null && l.trim()) && s.pop(), e)
    if (s.length > e) s.splice(e);
    else
      for (; s.length < e;) s.push("");
  for (; r < s.length; r++) s[r] = s[r].trim().replace(w.slashPipe, "|");
  return s
}

function L(n, e, t) {
  let s = n.length;
  if (s === 0) return "";
  let r = 0;
  for (; r < s && n.charAt(s - r - 1) === e;) r++;
  return n.slice(0, s - r)
}

function Ht(n, e) {
  if (n.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let s = 0; s < n.length; s++)
    if (n[s] === "\\") s++;
    else if (n[s] === e[0]) t++;
  else if (n[s] === e[1] && (t--, t < 0)) return s;
  return t > 0 ? -2 : -1
}

function Zt(n, e = 0) {
  let t = e,
    s = "";
  for (let r of n)
    if (r === "	") {
      let l = 4 - t % 4;
      s += " ".repeat(l), t += l
    } else s += r, t++;
  return s
}

function ge(n, e, t, s, r) {
  let l = e.href,
    a = e.title || null,
    i = n[1].replace(r.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let p = {
    type: n[0].charAt(0) === "!" ? "image" : "link",
    raw: t,
    href: l,
    title: a,
    text: i,
    tokens: s.inlineTokens(i)
  };
  return s.state.inLink = !1, p
}

function Qt(n, e, t) {
  let s = n.match(t.other.indentCodeCompensation);
  if (s === null) return e;
  let r = s[1];
  return e.split(`
`).map(l => {
    let a = l.match(t.other.beginningSpace);
    if (a === null) return l;
    let [i] = a;
    return i.length >= r.length ? l.slice(r.length) : l
  }).join(`
`)
}
var D = class {
    constructor(n) {
      m(this, "options");
      m(this, "rules");
      m(this, "lexer");
      this.options = n || $
    }
    space(n) {
      let e = this.rules.block.newline.exec(n);
      if (e && e[0].length > 0) return {
        type: "space",
        raw: e[0]
      }
    }
    code(n) {
      let e = this.rules.block.code.exec(n);
      if (e) {
        let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: e[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? t : L(t, `
`)
        }
      }
    }
    fences(n) {
      let e = this.rules.block.fences.exec(n);
      if (e) {
        let t = e[0],
          s = Qt(t, e[3] || "", this.rules);
        return {
          type: "code",
          raw: t,
          lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
          text: s
        }
      }
    }
    heading(n) {
      let e = this.rules.block.heading.exec(n);
      if (e) {
        let t = e[2].trim();
        if (this.rules.other.endingHash.test(t)) {
          let s = L(t, "#");
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
    hr(n) {
      let e = this.rules.block.hr.exec(n);
      if (e) return {
        type: "hr",
        raw: L(e[0], `
`)
      }
    }
    blockquote(n) {
      let e = this.rules.block.blockquote.exec(n);
      if (e) {
        let t = L(e[0], `
`).split(`
`),
          s = "",
          r = "",
          l = [];
        for (; t.length > 0;) {
          let a = !1,
            i = [],
            p;
          for (p = 0; p < t.length; p++)
            if (this.rules.other.blockquoteStart.test(t[p])) i.push(t[p]), a = !0;
            else if (!a) i.push(t[p]);
          else break;
          t = t.slice(p);
          let o = i.join(`
`),
            h = o.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          s = s ? `${s}
${o}` : o, r = r ? `${r}
${h}` : h;
          let d = this.lexer.state.top;
          if (this.lexer.state.top = !0, this.lexer.blockTokens(h, l, !0), this.lexer.state.top = d, t.length === 0) break;
          let u = l.at(-1);
          if ((u == null ? void 0 : u.type) === "code") break;
          if ((u == null ? void 0 : u.type) === "blockquote") {
            let c = u,
              b = c.raw + `
` + t.join(`
`),
              g = this.blockquote(b);
            l[l.length - 1] = g, s = s.substring(0, s.length - c.raw.length) + g.raw, r = r.substring(0, r.length - c.text.length) + g.text;
            break
          } else if ((u == null ? void 0 : u.type) === "list") {
            let c = u,
              b = c.raw + `
` + t.join(`
`),
              g = this.list(b);
            l[l.length - 1] = g, s = s.substring(0, s.length - u.raw.length) + g.raw, r = r.substring(0, r.length - c.raw.length) + g.raw, t = b.substring(l.at(-1).raw.length).split(`
`);
            continue
          }
        }
        return {
          type: "blockquote",
          raw: s,
          tokens: l,
          text: r
        }
      }
    }
    list(n) {
      var t, s;
      let e = this.rules.block.list.exec(n);
      if (e) {
        let r = e[1].trim(),
          l = r.length > 1,
          a = {
            type: "list",
            raw: "",
            ordered: l,
            start: l ? +r.slice(0, -1) : "",
            loose: !1,
            items: []
          };
        r = l ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = l ? r : "[*+-]");
        let i = this.rules.other.listItemRegex(r),
          p = !1;
        for (; n;) {
          let h = !1,
            d = "",
            u = "";
          if (!(e = i.exec(n)) || this.rules.block.hr.test(n)) break;
          d = e[0], n = n.substring(d.length);
          let c = Zt(e[2].split(`
`, 1)[0], e[1].length),
            b = n.split(`
`, 1)[0],
            g = !c.trim(),
            x = 0;
          if (this.options.pedantic ? (x = 2, u = c.trimStart()) : g ? x = e[1].length + 1 : (x = c.search(this.rules.other.nonSpaceChar), x = x > 4 ? 1 : x, u = c.slice(x), x += e[1].length), g && this.rules.other.blankLine.test(b) && (d += b + `
`, n = n.substring(b.length + 1), h = !0), !h) {
            let T = this.rules.other.nextBulletRegex(x),
              B = this.rules.other.hrRegex(x),
              ie = this.rules.other.fencesBeginRegex(x),
              le = this.rules.other.headingBeginRegex(x),
              Te = this.rules.other.htmlBeginRegex(x),
              ze = this.rules.other.blockquoteBeginRegex(x);
            for (; n;) {
              let Z = n.split(`
`, 1)[0],
                P;
              if (b = Z, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), P = b) : P = b.replace(this.rules.other.tabCharGlobal, "    "), ie.test(b) || le.test(b) || Te.test(b) || ze.test(b) || T.test(b) || B.test(b)) break;
              if (P.search(this.rules.other.nonSpaceChar) >= x || !b.trim()) u += `
` + P.slice(x);
              else {
                if (g || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ie.test(c) || le.test(c) || B.test(c)) break;
                u += `
` + b
              }
              g = !b.trim(), d += Z + `
`, n = n.substring(Z.length + 1), c = P.slice(x)
            }
          }
          a.loose || (p ? a.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (p = !0)), a.items.push({
            type: "list_item",
            raw: d,
            task: !!this.options.gfm && this.rules.other.listIsTask.test(u),
            loose: !1,
            text: u,
            tokens: []
          }), a.raw += d
        }
        let o = a.items.at(-1);
        if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
        else return;
        a.raw = a.raw.trimEnd();
        for (let h of a.items) {
          if (this.lexer.state.top = !1, h.tokens = this.lexer.blockTokens(h.text, []), h.task) {
            if (h.text = h.text.replace(this.rules.other.listReplaceTask, ""), ((t = h.tokens[0]) == null ? void 0 : t.type) === "text" || ((s = h.tokens[0]) == null ? void 0 : s.type) === "paragraph") {
              h.tokens[0].raw = h.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), h.tokens[0].text = h.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
              for (let u = this.lexer.inlineQueue.length - 1; u >= 0; u--)
                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)) {
                  this.lexer.inlineQueue[u].src = this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask, "");
                  break
                }
            }
            let d = this.rules.other.listTaskCheckbox.exec(h.raw);
            if (d) {
              let u = {
                type: "checkbox",
                raw: d[0] + " ",
                checked: d[0] !== "[ ]"
              };
              h.checked = u.checked, a.loose ? h.tokens[0] && ["paragraph", "text"].includes(h.tokens[0].type) && "tokens" in h.tokens[0] && h.tokens[0].tokens ? (h.tokens[0].raw = u.raw + h.tokens[0].raw, h.tokens[0].text = u.raw + h.tokens[0].text, h.tokens[0].tokens.unshift(u)) : h.tokens.unshift({
                type: "paragraph",
                raw: u.raw,
                text: u.raw,
                tokens: [u]
              }) : h.tokens.unshift(u)
            }
          }
          if (!a.loose) {
            let d = h.tokens.filter(c => c.type === "space"),
              u = d.length > 0 && d.some(c => this.rules.other.anyLine.test(c.raw));
            a.loose = u
          }
        }
        if (a.loose)
          for (let h of a.items) {
            h.loose = !0;
            for (let d of h.tokens) d.type === "text" && (d.type = "paragraph")
          }
        return a
      }
    }
    html(n) {
      let e = this.rules.block.html.exec(n);
      if (e) return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      }
    }
    def(n) {
      let e = this.rules.block.def.exec(n);
      if (e) {
        let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
          s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
          r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
        return {
          type: "def",
          tag: t,
          raw: e[0],
          href: s,
          title: r
        }
      }
    }
    table(n) {
      var a;
      let e = this.rules.block.table.exec(n);
      if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
      let t = de(e[1]),
        s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
        r = (a = e[3]) != null && a.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        for (let i of r) l.rows.push(de(i, l.header.length).map((p, o) => ({
          text: p,
          tokens: this.lexer.inline(p),
          header: !1,
          align: l.align[o]
        })));
        return l
      }
    }
    lheading(n) {
      let e = this.rules.block.lheading.exec(n);
      if (e) {
        let t = e[1].trim();
        return {
          type: "heading",
          raw: e[0],
          depth: e[2].charAt(0) === "=" ? 1 : 2,
          text: t,
          tokens: this.lexer.inline(t)
        }
      }
    }
    paragraph(n) {
      let e = this.rules.block.paragraph.exec(n);
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
    text(n) {
      let e = this.rules.block.text.exec(n);
      if (e) return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      }
    }
    escape(n) {
      let e = this.rules.inline.escape.exec(n);
      if (e) return {
        type: "escape",
        raw: e[0],
        text: e[1]
      }
    }
    tag(n) {
      let e = this.rules.inline.tag.exec(n);
      if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      }
    }
    link(n) {
      let e = this.rules.inline.link.exec(n);
      if (e) {
        let t = e[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
          if (!this.rules.other.endAngleBracket.test(t)) return;
          let l = L(t.slice(0, -1), "\\");
          if ((t.length - l.length) % 2 === 0) return
        } else {
          let l = Ht(e[2], "()");
          if (l === -2) return;
          if (l > -1) {
            let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + l;
            e[2] = e[2].substring(0, l), e[0] = e[0].substring(0, a).trim(), e[3] = ""
          }
        }
        let s = e[2],
          r = "";
        if (this.options.pedantic) {
          let l = this.rules.other.pedanticHrefTitle.exec(s);
          l && (s = l[1], r = l[3])
        } else r = e[3] ? e[3].slice(1, -1) : "";
        return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? s = s.slice(1) : s = s.slice(1, -1)), ge(e, {
          href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
          title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
        }, e[0], this.lexer, this.rules)
      }
    }
    reflink(n, e) {
      let t;
      if ((t = this.rules.inline.reflink.exec(n)) || (t = this.rules.inline.nolink.exec(n))) {
        let s = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
          r = e[s.toLowerCase()];
        if (!r) {
          let l = t[0].charAt(0);
          return {
            type: "text",
            raw: l,
            text: l
          }
        }
        return ge(t, r, t[0], this.lexer, this.rules)
      }
    }
    emStrong(n, e, t = "") {
      let s = this.rules.inline.emStrongLDelim.exec(n);
      if (!(!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[3]) || !t || this.rules.inline.punctuation.exec(t))) {
        let r = [...s[0]].length - 1,
          l, a, i = r,
          p = 0,
          o = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (o.lastIndex = 0, e = e.slice(-1 * n.length + r);
          (s = o.exec(e)) !== null;) {
          if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l) continue;
          if (a = [...l].length, s[3] || s[4]) {
            i += a;
            continue
          } else if ((s[5] || s[6]) && r % 3 && !((r + a) % 3)) {
            p += a;
            continue
          }
          if (i -= a, i > 0) continue;
          a = Math.min(a, a + i + p);
          let h = [...s[0]][0].length,
            d = n.slice(0, r + s.index + h + a);
          if (Math.min(r, a) % 2) {
            let c = d.slice(1, -1);
            return {
              type: "em",
              raw: d,
              text: c,
              tokens: this.lexer.inlineTokens(c)
            }
          }
          let u = d.slice(2, -2);
          return {
            type: "strong",
            raw: d,
            text: u,
            tokens: this.lexer.inlineTokens(u)
          }
        }
      }
    }
    codespan(n) {
      let e = this.rules.inline.code.exec(n);
      if (e) {
        let t = e[2].replace(this.rules.other.newLineCharGlobal, " "),
          s = this.rules.other.nonSpaceChar.test(t),
          r = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
        return s && r && (t = t.substring(1, t.length - 1)), {
          type: "codespan",
          raw: e[0],
          text: t
        }
      }
    }
    br(n) {
      let e = this.rules.inline.br.exec(n);
      if (e) return {
        type: "br",
        raw: e[0]
      }
    }
    del(n, e, t = "") {
      let s = this.rules.inline.delLDelim.exec(n);
      if (s && (!s[1] || !t || this.rules.inline.punctuation.exec(t))) {
        let r = [...s[0]].length - 1,
          l, a, i = r,
          p = this.rules.inline.delRDelim;
        for (p.lastIndex = 0, e = e.slice(-1 * n.length + r);
          (s = p.exec(e)) !== null;) {
          if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l || (a = [...l].length, a !== r)) continue;
          if (s[3] || s[4]) {
            i += a;
            continue
          }
          if (i -= a, i > 0) continue;
          a = Math.min(a, a + i);
          let o = [...s[0]][0].length,
            h = n.slice(0, r + s.index + o + a),
            d = h.slice(r, -r);
          return {
            type: "del",
            raw: h,
            text: d,
            tokens: this.lexer.inlineTokens(d)
          }
        }
      }
    }
    autolink(n) {
      let e = this.rules.inline.autolink.exec(n);
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
    url(n) {
      var t;
      let e;
      if (e = this.rules.inline.url.exec(n)) {
        let s, r;
        if (e[2] === "@") s = e[0], r = "mailto:" + s;
        else {
          let l;
          do l = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? ""; while (l !== e[0]);
          s = e[0], e[1] === "www." ? r = "http://" + e[0] : r = e[0]
        }
        return {
          type: "link",
          raw: e[0],
          text: s,
          href: r,
          tokens: [{
            type: "text",
            raw: s,
            text: s
          }]
        }
      }
    }
    inlineText(n) {
      let e = this.rules.inline.text.exec(n);
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
  y = class U {
    constructor(e) {
      m(this, "tokens");
      m(this, "options");
      m(this, "state");
      m(this, "inlineQueue");
      m(this, "tokenizer");
      this.tokens = [], this.tokens.links = Object.create(null), this.options = e || $, this.options.tokenizer = this.options.tokenizer || new D, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      let t = {
        other: w,
        block: j.normal,
        inline: I.normal
      };
      this.options.pedantic ? (t.block = j.pedantic, t.inline = I.pedantic) : this.options.gfm && (t.block = j.gfm, this.options.breaks ? t.inline = I.breaks : t.inline = I.gfm), this.tokenizer.rules = t
    }
    static get rules() {
      return {
        block: j,
        inline: I
      }
    }
    static lex(e, t) {
      return new U(t).lex(e)
    }
    static lexInline(e, t) {
      return new U(t).inlineTokens(e)
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
      var r, l, a;
      for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;) {
        let i;
        if ((l = (r = this.options.extensions) == null ? void 0 : r.block) != null && l.some(o => (i = o.call({
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
        let p = e;
        if ((a = this.options.extensions) != null && a.startBlock) {
          let o = 1 / 0,
            h = e.slice(1),
            d;
          this.options.extensions.startBlock.forEach(u => {
            d = u.call({
              lexer: this
            }, h), typeof d == "number" && d >= 0 && (o = Math.min(o, d))
          }), o < 1 / 0 && o >= 0 && (p = e.substring(0, o + 1))
        }
        if (this.state.top && (i = this.tokenizer.paragraph(p))) {
          let o = t.at(-1);
          s && (o == null ? void 0 : o.type) === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i), s = p.length !== e.length, e = e.substring(i.raw.length);
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
      var p, o, h, d, u;
      this.tokenizer.lexer = this;
      let s = e,
        r = null;
      if (this.tokens.links) {
        let c = Object.keys(this.tokens.links);
        if (c.length > 0)
          for (;
            (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) !== null;) c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
      }
      for (;
        (r = this.tokenizer.rules.inline.anyPunctuation.exec(s)) !== null;) s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let l;
      for (;
        (r = this.tokenizer.rules.inline.blockSkip.exec(s)) !== null;) l = r[2] ? r[2].length : 0, s = s.slice(0, r.index + l) + "[" + "a".repeat(r[0].length - l - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      s = ((o = (p = this.options.hooks) == null ? void 0 : p.emStrongMask) == null ? void 0 : o.call({
        lexer: this
      }, s)) ?? s;
      let a = !1,
        i = "";
      for (; e;) {
        a || (i = ""), a = !1;
        let c;
        if ((d = (h = this.options.extensions) == null ? void 0 : h.inline) != null && d.some(g => (c = g.call({
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
          let g = t.at(-1);
          c.type === "text" && (g == null ? void 0 : g.type) === "text" ? (g.raw += c.raw, g.text += c.text) : t.push(c);
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
        let b = e;
        if ((u = this.options.extensions) != null && u.startInline) {
          let g = 1 / 0,
            x = e.slice(1),
            T;
          this.options.extensions.startInline.forEach(B => {
            T = B.call({
              lexer: this
            }, x), typeof T == "number" && T >= 0 && (g = Math.min(g, T))
          }), g < 1 / 0 && g >= 0 && (b = e.substring(0, g + 1))
        }
        if (c = this.tokenizer.inlineText(b)) {
          e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), a = !0;
          let g = t.at(-1);
          (g == null ? void 0 : g.type) === "text" ? (g.raw += c.raw, g.text += c.text) : t.push(c);
          continue
        }
        if (e) {
          let g = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break
          } else throw new Error(g)
        }
      }
      return t
    }
  },
  N = class {
    constructor(n) {
      m(this, "options");
      m(this, "parser");
      this.options = n || $
    }
    space(n) {
      return ""
    }
    code({
      text: n,
      lang: e,
      escaped: t
    }) {
      var l;
      let s = (l = (e || "").match(w.notSpaceStart)) == null ? void 0 : l[0],
        r = n.replace(w.endingNewline, "") + `
`;
      return s ? '<pre><code class="language-' + v(s) + '">' + (t ? r : v(r, !0)) + `</code></pre>
` : "<pre><code>" + (t ? r : v(r, !0)) + `</code></pre>
`
    }
    blockquote({
      tokens: n
    }) {
      return `<blockquote>
${this.parser.parse(n)}</blockquote>
`
    }
    html({
      text: n
    }) {
      return n
    }
    def(n) {
      return ""
    }
    heading({
      tokens: n,
      depth: e
    }) {
      return `<h${e}>${this.parser.parseInline(n)}</h${e}>
`
    }
    hr(n) {
      return `<hr>
`
    }
    list(n) {
      let e = n.ordered,
        t = n.start,
        s = "";
      for (let a = 0; a < n.items.length; a++) {
        let i = n.items[a];
        s += this.listitem(i)
      }
      let r = e ? "ol" : "ul",
        l = e && t !== 1 ? ' start="' + t + '"' : "";
      return "<" + r + l + `>
` + s + "</" + r + `>
`
    }
    listitem(n) {
      return `<li>${this.parser.parse(n.tokens)}</li>
`
    }
    checkbox({
      checked: n
    }) {
      return "<input " + (n ? 'checked="" ' : "") + 'disabled="" type="checkbox"> '
    }
    paragraph({
      tokens: n
    }) {
      return `<p>${this.parser.parseInline(n)}</p>
`
    }
    table(n) {
      let e = "",
        t = "";
      for (let r = 0; r < n.header.length; r++) t += this.tablecell(n.header[r]);
      e += this.tablerow({
        text: t
      });
      let s = "";
      for (let r = 0; r < n.rows.length; r++) {
        let l = n.rows[r];
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
      text: n
    }) {
      return `<tr>
${n}</tr>
`
    }
    tablecell(n) {
      let e = this.parser.parseInline(n.tokens),
        t = n.header ? "th" : "td";
      return (n.align ? `<${t} align="${n.align}">` : `<${t}>`) + e + `</${t}>
`
    }
    strong({
      tokens: n
    }) {
      return `<strong>${this.parser.parseInline(n)}</strong>`
    }
    em({
      tokens: n
    }) {
      return `<em>${this.parser.parseInline(n)}</em>`
    }
    codespan({
      text: n
    }) {
      return `<code>${v(n,!0)}</code>`
    }
    br(n) {
      return "<br>"
    }
    del({
      tokens: n
    }) {
      return `<del>${this.parser.parseInline(n)}</del>`
    }
    link({
      href: n,
      title: e,
      tokens: t
    }) {
      let s = this.parser.parseInline(t),
        r = ue(n);
      if (r === null) return s;
      n = r;
      let l = '<a href="' + n + '"';
      return e && (l += ' title="' + v(e) + '"'), l += ">" + s + "</a>", l
    }
    image({
      href: n,
      title: e,
      text: t,
      tokens: s
    }) {
      s && (t = this.parser.parseInline(s, this.parser.textRenderer));
      let r = ue(n);
      if (r === null) return v(t);
      n = r;
      let l = `<img src="${n}" alt="${v(t)}"`;
      return e && (l += ` title="${v(e)}"`), l += ">", l
    }
    text(n) {
      return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : "escaped" in n && n.escaped ? n.text : v(n.text)
    }
  },
  se = class {
    strong({
      text: n
    }) {
      return n
    }
    em({
      text: n
    }) {
      return n
    }
    codespan({
      text: n
    }) {
      return n
    }
    del({
      text: n
    }) {
      return n
    }
    html({
      text: n
    }) {
      return n
    }
    text({
      text: n
    }) {
      return n
    }
    link({
      text: n
    }) {
      return "" + n
    }
    image({
      text: n
    }) {
      return "" + n
    }
    br() {
      return ""
    }
    checkbox({
      raw: n
    }) {
      return n
    }
  },
  _ = class Y {
    constructor(e) {
      m(this, "options");
      m(this, "renderer");
      m(this, "textRenderer");
      this.options = e || $, this.options.renderer = this.options.renderer || new N, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new se
    }
    static parse(e, t) {
      return new Y(t).parse(e)
    }
    static parseInline(e, t) {
      return new Y(t).parseInline(e)
    }
    parse(e) {
      var s, r;
      this.renderer.parser = this;
      let t = "";
      for (let l = 0; l < e.length; l++) {
        let a = e[l];
        if ((r = (s = this.options.extensions) == null ? void 0 : s.renderers) != null && r[a.type]) {
          let p = a,
            o = this.options.extensions.renderers[p.type].call({
              parser: this
            }, p);
          if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(p.type)) {
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
            let p = 'Token with "' + i.type + '" type was not found.';
            if (this.options.silent) return console.error(p), "";
            throw new Error(p)
          }
        }
      }
      return t
    }
    parseInline(e, t = this.renderer) {
      var r, l;
      this.renderer.parser = this;
      let s = "";
      for (let a = 0; a < e.length; a++) {
        let i = e[a];
        if ((l = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && l[i.type]) {
          let o = this.options.extensions.renderers[i.type].call({
            parser: this
          }, i);
          if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
            s += o || "";
            continue
          }
        }
        let p = i;
        switch (p.type) {
          case "escape": {
            s += t.text(p);
            break
          }
          case "html": {
            s += t.html(p);
            break
          }
          case "link": {
            s += t.link(p);
            break
          }
          case "image": {
            s += t.image(p);
            break
          }
          case "checkbox": {
            s += t.checkbox(p);
            break
          }
          case "strong": {
            s += t.strong(p);
            break
          }
          case "em": {
            s += t.em(p);
            break
          }
          case "codespan": {
            s += t.codespan(p);
            break
          }
          case "br": {
            s += t.br(p);
            break
          }
          case "del": {
            s += t.del(p);
            break
          }
          case "text": {
            s += t.text(p);
            break
          }
          default: {
            let o = 'Token with "' + p.type + '" type was not found.';
            if (this.options.silent) return console.error(o), "";
            throw new Error(o)
          }
        }
      }
      return s
    }
  },
  q, M = (q = class {
    constructor(n) {
      m(this, "options");
      m(this, "block");
      this.options = n || $
    }
    preprocess(n) {
      return n
    }
    postprocess(n) {
      return n
    }
    processAllTokens(n) {
      return n
    }
    emStrongMask(n) {
      return n
    }
    provideLexer(n = this.block) {
      return n ? y.lex : y.lexInline
    }
    provideParser(n = this.block) {
      return n ? _.parse : _.parseInline
    }
  }, m(q, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), m(q, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])), q),
  Gt = class {
    constructor(...n) {
      m(this, "defaults", X());
      m(this, "options", this.setOptions);
      m(this, "parse", this.parseMarkdown(!0));
      m(this, "parseInline", this.parseMarkdown(!1));
      m(this, "Parser", _);
      m(this, "Renderer", N);
      m(this, "TextRenderer", se);
      m(this, "Lexer", y);
      m(this, "Tokenizer", D);
      m(this, "Hooks", M);
      this.use(...n)
    }
    walkTokens(n, e) {
      var s, r;
      let t = [];
      for (let l of n) switch (t = t.concat(e.call(this, l)), l.type) {
        case "table": {
          let a = l;
          for (let i of a.header) t = t.concat(this.walkTokens(i.tokens, e));
          for (let i of a.rows)
            for (let p of i) t = t.concat(this.walkTokens(p.tokens, e));
          break
        }
        case "list": {
          let a = l;
          t = t.concat(this.walkTokens(a.items, e));
          break
        }
        default: {
          let a = l;
          (r = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && r[a.type] ? this.defaults.extensions.childTokens[a.type].forEach(i => {
            let p = a[i].flat(1 / 0);
            t = t.concat(this.walkTokens(p, e))
          }) : a.tokens && (t = t.concat(this.walkTokens(a.tokens, e)))
        }
      }
      return t
    }
    use(...n) {
      let e = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      return n.forEach(t => {
        let s = {
          ...t
        };
        if (s.async = this.defaults.async || s.async || !1, t.extensions && (t.extensions.forEach(r => {
            if (!r.name) throw new Error("extension name required");
            if ("renderer" in r) {
              let l = e.renderers[r.name];
              l ? e.renderers[r.name] = function(...a) {
                let i = r.renderer.apply(this, a);
                return i === !1 && (i = l.apply(this, a)), i
              } : e.renderers[r.name] = r.renderer
            }
            if ("tokenizer" in r) {
              if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
              let l = e[r.level];
              l ? l.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]))
            }
            "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens)
          }), s.extensions = e), t.renderer) {
          let r = this.defaults.renderer || new N(this.defaults);
          for (let l in t.renderer) {
            if (!(l in r)) throw new Error(`renderer '${l}' does not exist`);
            if (["options", "parser"].includes(l)) continue;
            let a = l,
              i = t.renderer[a],
              p = r[a];
            r[a] = (...o) => {
              let h = i.apply(r, o);
              return h === !1 && (h = p.apply(r, o)), h || ""
            }
          }
          s.renderer = r
        }
        if (t.tokenizer) {
          let r = this.defaults.tokenizer || new D(this.defaults);
          for (let l in t.tokenizer) {
            if (!(l in r)) throw new Error(`tokenizer '${l}' does not exist`);
            if (["options", "rules", "lexer"].includes(l)) continue;
            let a = l,
              i = t.tokenizer[a],
              p = r[a];
            r[a] = (...o) => {
              let h = i.apply(r, o);
              return h === !1 && (h = p.apply(r, o)), h
            }
          }
          s.tokenizer = r
        }
        if (t.hooks) {
          let r = this.defaults.hooks || new M;
          for (let l in t.hooks) {
            if (!(l in r)) throw new Error(`hook '${l}' does not exist`);
            if (["options", "block"].includes(l)) continue;
            let a = l,
              i = t.hooks[a],
              p = r[a];
            M.passThroughHooks.has(l) ? r[a] = o => {
              if (this.defaults.async && M.passThroughHooksRespectAsync.has(l)) return (async () => {
                let d = await i.call(r, o);
                return p.call(r, d)
              })();
              let h = i.call(r, o);
              return p.call(r, h)
            } : r[a] = (...o) => {
              if (this.defaults.async) return (async () => {
                let d = await i.apply(r, o);
                return d === !1 && (d = await p.apply(r, o)), d
              })();
              let h = i.apply(r, o);
              return h === !1 && (h = p.apply(r, o)), h
            }
          }
          s.hooks = r
        }
        if (t.walkTokens) {
          let r = this.defaults.walkTokens,
            l = t.walkTokens;
          s.walkTokens = function(a) {
            let i = [];
            return i.push(l.call(this, a)), r && (i = i.concat(r.call(this, a))), i
          }
        }
        this.defaults = {
          ...this.defaults,
          ...s
        }
      }), this
    }
    setOptions(n) {
      return this.defaults = {
        ...this.defaults,
        ...n
      }, this
    }
    lexer(n, e) {
      return y.lex(n, e ?? this.defaults)
    }
    parser(n, e) {
      return _.parse(n, e ?? this.defaults)
    }
    parseMarkdown(n) {
      return (e, t) => {
        let s = {
            ...t
          },
          r = {
            ...this.defaults,
            ...s
          },
          l = this.onError(!!r.silent, !!r.async);
        if (this.defaults.async === !0 && s.async === !1) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof e > "u" || e === null) return l(new Error("marked(): input parameter is undefined or null"));
        if (typeof e != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
        if (r.hooks && (r.hooks.options = r, r.hooks.block = n), r.async) return (async () => {
          let a = r.hooks ? await r.hooks.preprocess(e) : e,
            i = await (r.hooks ? await r.hooks.provideLexer(n) : n ? y.lex : y.lexInline)(a, r),
            p = r.hooks ? await r.hooks.processAllTokens(i) : i;
          r.walkTokens && await Promise.all(this.walkTokens(p, r.walkTokens));
          let o = await (r.hooks ? await r.hooks.provideParser(n) : n ? _.parse : _.parseInline)(p, r);
          return r.hooks ? await r.hooks.postprocess(o) : o
        })().catch(l);
        try {
          r.hooks && (e = r.hooks.preprocess(e));
          let a = (r.hooks ? r.hooks.provideLexer(n) : n ? y.lex : y.lexInline)(e, r);
          r.hooks && (a = r.hooks.processAllTokens(a)), r.walkTokens && this.walkTokens(a, r.walkTokens);
          let i = (r.hooks ? r.hooks.provideParser(n) : n ? _.parse : _.parseInline)(a, r);
          return r.hooks && (i = r.hooks.postprocess(i)), i
        } catch (a) {
          return l(a)
        }
      }
    }
    onError(n, e) {
      return t => {
        if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
          let s = "<p>An error occurred:</p><pre>" + v(t.message + "", !0) + "</pre>";
          return e ? Promise.resolve(s) : s
        }
        if (e) return Promise.reject(t);
        throw t
      }
    }
  },
  R = new Gt;

function k(n, e) {
  return R.parse(n, e)
}
k.options = k.setOptions = function(n) {
  return R.setOptions(n), k.defaults = R.defaults, me(k.defaults), k
};
k.getDefaults = X;
k.defaults = $;
k.use = function(...n) {
  return R.use(...n), k.defaults = R.defaults, me(k.defaults), k
};
k.walkTokens = function(n, e) {
  return R.walkTokens(n, e)
};
k.parseInline = R.parseInline;
k.Parser = _;
k.parser = _.parse;
k.Renderer = N;
k.TextRenderer = se;
k.Lexer = y;
k.lexer = y.lex;
k.Tokenizer = D;
k.Hooks = M;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
var vn = k;
_.parse;
y.lex;
const Ut = "Welcome to WPlace, a platform to share and explore pixel art creations!",
  Yt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ut
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Xt = `We have just launched a new update focused on **personalization**!
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

The **More Like You Update** is **LIVE NOW** - go check it out and share what designs you come up with! 🎉\``,
  Vt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Xt
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Kt = `This update brings several improvements and fixes for a smoother experience:

- Small bugs fixed on the frontend for both mobile and desktop
- Fixed minor issues when equipping cosmetics
- Cosmetics released within the last 7 days now display a "New" badge
- 5 new frames are now available in the shop
- New shop view to see all available frames
- Improved consistency of texts for translations

We continue to listen to community feedback to make WPlace even better!
`,
  Jt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Kt
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  en = `This patch focuses on interface stability across devices and a better moderation workflow:

- Fixed the side menu layout where buttons could overflow outside the menu bounds
- Fixed the pixel information layout that was displaying incorrectly on some devices
- Delivered multiple fixes and improvements to the staff moderation screen
`,
  tn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: en
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  nn = `Import any image and position it over the map as a painting guide! Access overlays from the **new button in the main sidebar**.

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
  rn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: nn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  sn = `With v1.3.0, we’re reducing the moderation intervention and giving more freedom to the players to better match Wplace’s core idea: a living canvas shaped by the community.

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
  ln = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  an = `#### Anti-Cheat

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
  on = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: an
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  cn = `### 🆕 Key Changes

- **Anti-cheat system improvements**: Stronger detection and punishment of bots and multi-accounts to keep the canvas fair.
- **Cloud Backup for Overlays**: Sync your overlays to Google Drive so they're available across devices and safe from accidental loss. Status indicators show sync state at a glance.
- **More payment methods available**: Additional checkout options to make purchasing Droplets easier.
- **Various small bugfixes and improvements**: Overlay sync fixes (flip, palette mode, re-encode, reorder), better behavior on browsers without WebGL, and assorted UI polish.
`,
  pn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  hn = Object.assign({
    "./markdown/1.0.0 - Welcome to WPlace!.md": Yt,
    "./markdown/1.1.0 - ✨ More Like You Update.md": Vt,
    "./markdown/1.1.1 - 🛠️ Quality & Cosmetics Improvements.md": Jt,
    "./markdown/1.1.2 - 🧰 UI Fixes & Moderation Improvements.md": tn,
    "./markdown/1.2.0 - 🖼️ Pixel Overlays & Achievement Frames.md": rn,
    "./markdown/1.3.0 - 🛠️ Moderation Adjustments, Hotspots and Improved Anti-Cheat System.md": ln,
    "./markdown/1.3.1 - 🛠️  Hotfixes and Opt-out from Hotspots copy.md": on,
    "./markdown/1.3.2 - 🤖 Anti-cheat improvements and Google Drive overlay sync.md": pn
  }),
  Sn = Object.entries(hn).map(([n, e]) => {
    var l, a;
    const t = (l = n.split("/").at(-1)) == null ? void 0 : l.replace(".md", ""),
      s = (a = t == null ? void 0 : t.split("-")[0]) == null ? void 0 : a.trim(),
      r = (t == null ? void 0 : t.split("-").slice(1).join("-").trim()) ?? s;
    return {
      version: s,
      title: r,
      markdown: e.default
    }
  }).sort((n, e) => n.version.localeCompare(e.version, void 0, {
    numeric: !0
  }));
var un = ke('<span class="text-primary inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide"><span class="relative flex size-1.5"><span class="bg-primary/60 absolute inline-flex size-full animate-ping rounded-full"></span> <span class="bg-primary relative inline-flex size-1.5 rounded-full"></span></span> </span>'),
  dn = ke('<article><div class="flex items-center gap-3"><span class="text-primary text-lg font-bold tracking-wide"> </span> <!></div> <h2 class="mt-1 text-[0.9375rem] leading-snug font-bold tracking-tight"> </h2> <div class="patch-content mt-4 svelte-1pfqn89"></div></article>');

function Rn(n, e) {
  Ce(e, !0);
  let t = Ee(e, "latest", 3, !1);
  var s = dn(),
    r = C(s),
    l = C(r),
    a = C(l);
  z(l);
  var i = O(l, 2);
  {
    var p = u => {
      var c = un(),
        b = O(C(c));
      z(c), ae(g => Q(b, ` ${g??""}`), [() => Ue()]), oe(u, c)
    };
    Le(i, u => {
      t() && u(p)
    })
  }
  z(r);
  var o = O(r, 2),
    h = C(o, !0);
  z(o);
  var d = O(o, 2);
  Me(d, () => e.patchNote.html, !0), z(d), z(s), ae(() => {
    Q(a, `v${e.patchNote.version??""}`), Q(h, e.patchNote.title)
  }), oe(n, s), Ie()
}
export {
  Gt as D, Rn as P, vn as W, Sn as a, _n as p, N as y
};