var Pe = Object.defineProperty;
var $e = (n, e, t) => e in n ? Pe(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var b = (n, e, t) => $e(n, typeof e != "symbol" ? e + "" : e, t);
import {
  g as me
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  p as Ce,
  d as C,
  r as z,
  s as j,
  t as oe,
  a as le,
  b as qe,
  c as fe
} from "./DUZ_qUVk.js";
import {
  s as Q
} from "./DtUyTUmd.js";
import {
  i as Me
} from "./BLc2SwOK.js";
import {
  h as Ie
} from "./Dk_Sh0M8.js";
import {
  p as Oe
} from "./DXFW01RN.js";
const Fe = () => "Latest",
  je = () => "Mais recente",
  Ee = () => "最新",
  Le = () => "Neueste",
  Be = () => "Último",
  De = () => "Derniers",
  He = () => "Ultimi",
  Ne = () => "最新",
  We = () => "Najnowsze",
  Ze = () => "Последние",
  Qe = () => "Останні",
  Ue = () => "Mới nhất",
  Ge = (n = {}, e = {}) => {
    const t = e.locale ?? me();
    return t === "en" ? Fe() : t === "pt" ? je() : t === "ch" ? Ee() : t === "de" ? Le() : t === "es" ? Be() : t === "fr" ? De() : t === "it" ? He() : t === "jp" ? Ne() : t === "pl" ? We() : t === "ru" ? Ze() : t === "uk" ? Qe() : Ue()
  },
  Ye = () => "Patch notes",
  Ve = () => "Notas de atualização",
  Xe = () => "更新日志",
  Ke = () => "Versionshinweise",
  Je = () => "Notas de actualización",
  et = () => "Notes de mise à jour",
  tt = () => "Note di aggiornamento",
  nt = () => "リリースノート",
  rt = () => "Informacje o aktualizacji",
  at = () => "Примечания к обновлению",
  st = () => "Нотатки про оновлення",
  it = () => "Ghi chú cập nhật",
  Gn = (n = {}, e = {}) => {
    const t = e.locale ?? me();
    return t === "en" ? Ye() : t === "pt" ? Ve() : t === "ch" ? Xe() : t === "de" ? Ke() : t === "es" ? Je() : t === "fr" ? et() : t === "it" ? tt() : t === "jp" ? nt() : t === "pl" ? rt() : t === "ru" ? at() : t === "uk" ? st() : it()
  };

function V() {
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
var R = V();

function be(n) {
  R = n
}
var S = {
  exec: () => null
};

function m(n, e = "") {
  let t = typeof n == "string" ? n : n.source,
    a = {
      replace: (r, i) => {
        let o = typeof i == "string" ? i : i.source;
        return o = o.replace(w.caret, "$1"), t = t.replace(r, o), a
      },
      getRegex: () => new RegExp(t, e)
    };
  return a
}
var ot = (() => {
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
  lt = /^(?:[ \t]*(?:\n|$))+/,
  ct = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  pt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  O = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  ht = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  X = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  ke = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _e = m(ke).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(),
  ut = m(ke).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
  K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  dt = /^[^\n]+/,
  J = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  gt = m(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", J).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
  mt = m(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, X).getRegex(),
  N = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  ee = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  ft = m("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ee).replace("tag", N).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
  we = m(K).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex(),
  bt = m(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", we).getRegex(),
  te = {
    blockquote: bt,
    code: ct,
    def: gt,
    fences: pt,
    heading: ht,
    hr: O,
    html: ft,
    lheading: _e,
    list: mt,
    newline: lt,
    paragraph: we,
    table: S,
    text: dt
  },
  ce = m("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex(),
  kt = {
    ...te,
    lheading: ut,
    table: ce,
    paragraph: m(K).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ce).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex()
  },
  _t = {
    ...te,
    html: m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ee).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: S,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: m(K).replace("hr", O).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _e).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  },
  wt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  yt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  ye = /^( {2,}|\\)\n(?!\s*$)/,
  xt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  P = /[\p{P}\p{S}]/u,
  W = /[\s\p{P}\p{S}]/u,
  ne = /[^\s\p{P}\p{S}]/u,
  vt = m(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex(),
  xe = /(?!~)[\p{P}\p{S}]/u,
  St = /(?!~)[\s\p{P}\p{S}]/u,
  At = /(?:[^\s\p{P}\p{S}]|~)/u,
  Rt = m(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ot ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(),
  ve = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  Tt = m(ve, "u").replace(/punct/g, P).getRegex(),
  zt = m(ve, "u").replace(/punct/g, xe).getRegex(),
  Se = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  Pt = m(Se, "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, W).replace(/punct/g, P).getRegex(),
  $t = m(Se, "gu").replace(/notPunctSpace/g, At).replace(/punctSpace/g, St).replace(/punct/g, xe).getRegex(),
  Ct = m("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, W).replace(/punct/g, P).getRegex(),
  qt = m(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, P).getRegex(),
  Mt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
  It = m(Mt, "gu").replace(/notPunctSpace/g, ne).replace(/punctSpace/g, W).replace(/punct/g, P).getRegex(),
  Ot = m(/\\(punct)/, "gu").replace(/punct/g, P).getRegex(),
  Ft = m(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
  jt = m(ee).replace("(?:-->|$)", "-->").getRegex(),
  Et = m("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", jt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
  B = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
  Lt = m(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", B).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
  Ae = m(/^!?\[(label)\]\[(ref)\]/).replace("label", B).replace("ref", J).getRegex(),
  Re = m(/^!?\[(ref)\](?:\[\])?/).replace("ref", J).getRegex(),
  Bt = m("reflink|nolink(?!\\()", "g").replace("reflink", Ae).replace("nolink", Re).getRegex(),
  pe = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  re = {
    _backpedal: S,
    anyPunctuation: Ot,
    autolink: Ft,
    blockSkip: Rt,
    br: ye,
    code: yt,
    del: S,
    delLDelim: S,
    delRDelim: S,
    emStrongLDelim: Tt,
    emStrongRDelimAst: Pt,
    emStrongRDelimUnd: Ct,
    escape: wt,
    link: Lt,
    nolink: Re,
    punctuation: vt,
    reflink: Ae,
    reflinkSearch: Bt,
    tag: Et,
    text: xt,
    url: S
  },
  Dt = {
    ...re,
    link: m(/^!?\[(label)\]\((.*?)\)/).replace("label", B).getRegex(),
    reflink: m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", B).getRegex()
  },
  U = {
    ...re,
    emStrongRDelimAst: $t,
    emStrongLDelim: zt,
    delLDelim: qt,
    delRDelim: It,
    url: m(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", pe).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: m(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", pe).getRegex()
  },
  Ht = {
    ...U,
    br: m(ye).replace("{2,}", "*").getRegex(),
    text: m(U.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  },
  E = {
    normal: te,
    gfm: kt,
    pedantic: _t
  },
  q = {
    normal: re,
    gfm: U,
    breaks: Ht,
    pedantic: Dt
  },
  Nt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
  he = n => Nt[n];

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
  var i;
  let t = n.replace(w.findPipe, (o, s, p) => {
      let l = !1,
        h = s;
      for (; --h >= 0 && p[h] === "\\";) l = !l;
      return l ? "|" : " |"
    }),
    a = t.split(w.splitPipe),
    r = 0;
  if (a[0].trim() || a.shift(), a.length > 0 && !((i = a.at(-1)) != null && i.trim()) && a.pop(), e)
    if (a.length > e) a.splice(e);
    else
      for (; a.length < e;) a.push("");
  for (; r < a.length; r++) a[r] = a[r].trim().replace(w.slashPipe, "|");
  return a
}

function M(n, e, t) {
  let a = n.length;
  if (a === 0) return "";
  let r = 0;
  for (; r < a && n.charAt(a - r - 1) === e;) r++;
  return n.slice(0, a - r)
}

function Wt(n, e) {
  if (n.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let a = 0; a < n.length; a++)
    if (n[a] === "\\") a++;
    else if (n[a] === e[0]) t++;
  else if (n[a] === e[1] && (t--, t < 0)) return a;
  return t > 0 ? -2 : -1
}

function Zt(n, e = 0) {
  let t = e,
    a = "";
  for (let r of n)
    if (r === "	") {
      let i = 4 - t % 4;
      a += " ".repeat(i), t += i
    } else a += r, t++;
  return a
}

function ge(n, e, t, a, r) {
  let i = e.href,
    o = e.title || null,
    s = n[1].replace(r.other.outputLinkReplace, "$1");
  a.state.inLink = !0;
  let p = {
    type: n[0].charAt(0) === "!" ? "image" : "link",
    raw: t,
    href: i,
    title: o,
    text: s,
    tokens: a.inlineTokens(s)
  };
  return a.state.inLink = !1, p
}

function Qt(n, e, t) {
  let a = n.match(t.other.indentCodeCompensation);
  if (a === null) return e;
  let r = a[1];
  return e.split(`
`).map(i => {
    let o = i.match(t.other.beginningSpace);
    if (o === null) return i;
    let [s] = o;
    return s.length >= r.length ? i.slice(r.length) : i
  }).join(`
`)
}
var D = class {
    constructor(n) {
      b(this, "options");
      b(this, "rules");
      b(this, "lexer");
      this.options = n || R
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
          text: this.options.pedantic ? t : M(t, `
`)
        }
      }
    }
    fences(n) {
      let e = this.rules.block.fences.exec(n);
      if (e) {
        let t = e[0],
          a = Qt(t, e[3] || "", this.rules);
        return {
          type: "code",
          raw: t,
          lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
          text: a
        }
      }
    }
    heading(n) {
      let e = this.rules.block.heading.exec(n);
      if (e) {
        let t = e[2].trim();
        if (this.rules.other.endingHash.test(t)) {
          let a = M(t, "#");
          (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (t = a.trim())
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
        raw: M(e[0], `
`)
      }
    }
    blockquote(n) {
      let e = this.rules.block.blockquote.exec(n);
      if (e) {
        let t = M(e[0], `
`).split(`
`),
          a = "",
          r = "",
          i = [];
        for (; t.length > 0;) {
          let o = !1,
            s = [],
            p;
          for (p = 0; p < t.length; p++)
            if (this.rules.other.blockquoteStart.test(t[p])) s.push(t[p]), o = !0;
            else if (!o) s.push(t[p]);
          else break;
          t = t.slice(p);
          let l = s.join(`
`),
            h = l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          a = a ? `${a}
${l}` : l, r = r ? `${r}
${h}` : h;
          let d = this.lexer.state.top;
          if (this.lexer.state.top = !0, this.lexer.blockTokens(h, i, !0), this.lexer.state.top = d, t.length === 0) break;
          let u = i.at(-1);
          if ((u == null ? void 0 : u.type) === "code") break;
          if ((u == null ? void 0 : u.type) === "blockquote") {
            let c = u,
              k = c.raw + `
` + t.join(`
`),
              g = this.blockquote(k);
            i[i.length - 1] = g, a = a.substring(0, a.length - c.raw.length) + g.raw, r = r.substring(0, r.length - c.text.length) + g.text;
            break
          } else if ((u == null ? void 0 : u.type) === "list") {
            let c = u,
              k = c.raw + `
` + t.join(`
`),
              g = this.list(k);
            i[i.length - 1] = g, a = a.substring(0, a.length - u.raw.length) + g.raw, r = r.substring(0, r.length - c.raw.length) + g.raw, t = k.substring(i.at(-1).raw.length).split(`
`);
            continue
          }
        }
        return {
          type: "blockquote",
          raw: a,
          tokens: i,
          text: r
        }
      }
    }
    list(n) {
      var t, a;
      let e = this.rules.block.list.exec(n);
      if (e) {
        let r = e[1].trim(),
          i = r.length > 1,
          o = {
            type: "list",
            raw: "",
            ordered: i,
            start: i ? +r.slice(0, -1) : "",
            loose: !1,
            items: []
          };
        r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
        let s = this.rules.other.listItemRegex(r),
          p = !1;
        for (; n;) {
          let h = !1,
            d = "",
            u = "";
          if (!(e = s.exec(n)) || this.rules.block.hr.test(n)) break;
          d = e[0], n = n.substring(d.length);
          let c = Zt(e[2].split(`
`, 1)[0], e[1].length),
            k = n.split(`
`, 1)[0],
            g = !c.trim(),
            _ = 0;
          if (this.options.pedantic ? (_ = 2, u = c.trimStart()) : g ? _ = e[1].length + 1 : (_ = c.search(this.rules.other.nonSpaceChar), _ = _ > 4 ? 1 : _, u = c.slice(_), _ += e[1].length), g && this.rules.other.blankLine.test(k) && (d += k + `
`, n = n.substring(k.length + 1), h = !0), !h) {
            let T = this.rules.other.nextBulletRegex(_),
              F = this.rules.other.hrRegex(_),
              se = this.rules.other.fencesBeginRegex(_),
              ie = this.rules.other.headingBeginRegex(_),
              Te = this.rules.other.htmlBeginRegex(_),
              ze = this.rules.other.blockquoteBeginRegex(_);
            for (; n;) {
              let Z = n.split(`
`, 1)[0],
                $;
              if (k = Z, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), $ = k) : $ = k.replace(this.rules.other.tabCharGlobal, "    "), se.test(k) || ie.test(k) || Te.test(k) || ze.test(k) || T.test(k) || F.test(k)) break;
              if ($.search(this.rules.other.nonSpaceChar) >= _ || !k.trim()) u += `
` + $.slice(_);
              else {
                if (g || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || se.test(c) || ie.test(c) || F.test(c)) break;
                u += `
` + k
              }
              g = !k.trim(), d += Z + `
`, n = n.substring(Z.length + 1), c = $.slice(_)
            }
          }
          o.loose || (p ? o.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (p = !0)), o.items.push({
            type: "list_item",
            raw: d,
            task: !!this.options.gfm && this.rules.other.listIsTask.test(u),
            loose: !1,
            text: u,
            tokens: []
          }), o.raw += d
        }
        let l = o.items.at(-1);
        if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
        else return;
        o.raw = o.raw.trimEnd();
        for (let h of o.items) {
          if (this.lexer.state.top = !1, h.tokens = this.lexer.blockTokens(h.text, []), h.task) {
            if (h.text = h.text.replace(this.rules.other.listReplaceTask, ""), ((t = h.tokens[0]) == null ? void 0 : t.type) === "text" || ((a = h.tokens[0]) == null ? void 0 : a.type) === "paragraph") {
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
              h.checked = u.checked, o.loose ? h.tokens[0] && ["paragraph", "text"].includes(h.tokens[0].type) && "tokens" in h.tokens[0] && h.tokens[0].tokens ? (h.tokens[0].raw = u.raw + h.tokens[0].raw, h.tokens[0].text = u.raw + h.tokens[0].text, h.tokens[0].tokens.unshift(u)) : h.tokens.unshift({
                type: "paragraph",
                raw: u.raw,
                text: u.raw,
                tokens: [u]
              }) : h.tokens.unshift(u)
            }
          }
          if (!o.loose) {
            let d = h.tokens.filter(c => c.type === "space"),
              u = d.length > 0 && d.some(c => this.rules.other.anyLine.test(c.raw));
            o.loose = u
          }
        }
        if (o.loose)
          for (let h of o.items) {
            h.loose = !0;
            for (let d of h.tokens) d.type === "text" && (d.type = "paragraph")
          }
        return o
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
          a = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
          r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
        return {
          type: "def",
          tag: t,
          raw: e[0],
          href: a,
          title: r
        }
      }
    }
    table(n) {
      var o;
      let e = this.rules.block.table.exec(n);
      if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
      let t = de(e[1]),
        a = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
        r = (o = e[3]) != null && o.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
        i = {
          type: "table",
          raw: e[0],
          header: [],
          align: [],
          rows: []
        };
      if (t.length === a.length) {
        for (let s of a) this.rules.other.tableAlignRight.test(s) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? i.align.push("left") : i.align.push(null);
        for (let s = 0; s < t.length; s++) i.header.push({
          text: t[s],
          tokens: this.lexer.inline(t[s]),
          header: !0,
          align: i.align[s]
        });
        for (let s of r) i.rows.push(de(s, i.header.length).map((p, l) => ({
          text: p,
          tokens: this.lexer.inline(p),
          header: !1,
          align: i.align[l]
        })));
        return i
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
          let i = M(t.slice(0, -1), "\\");
          if ((t.length - i.length) % 2 === 0) return
        } else {
          let i = Wt(e[2], "()");
          if (i === -2) return;
          if (i > -1) {
            let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
            e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, o).trim(), e[3] = ""
          }
        }
        let a = e[2],
          r = "";
        if (this.options.pedantic) {
          let i = this.rules.other.pedanticHrefTitle.exec(a);
          i && (a = i[1], r = i[3])
        } else r = e[3] ? e[3].slice(1, -1) : "";
        return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? a = a.slice(1) : a = a.slice(1, -1)), ge(e, {
          href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
          title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
        }, e[0], this.lexer, this.rules)
      }
    }
    reflink(n, e) {
      let t;
      if ((t = this.rules.inline.reflink.exec(n)) || (t = this.rules.inline.nolink.exec(n))) {
        let a = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
          r = e[a.toLowerCase()];
        if (!r) {
          let i = t[0].charAt(0);
          return {
            type: "text",
            raw: i,
            text: i
          }
        }
        return ge(t, r, t[0], this.lexer, this.rules)
      }
    }
    emStrong(n, e, t = "") {
      let a = this.rules.inline.emStrongLDelim.exec(n);
      if (!(!a || !a[1] && !a[2] && !a[3] && !a[4] || a[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(a[1] || a[3]) || !t || this.rules.inline.punctuation.exec(t))) {
        let r = [...a[0]].length - 1,
          i, o, s = r,
          p = 0,
          l = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (l.lastIndex = 0, e = e.slice(-1 * n.length + r);
          (a = l.exec(e)) !== null;) {
          if (i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !i) continue;
          if (o = [...i].length, a[3] || a[4]) {
            s += o;
            continue
          } else if ((a[5] || a[6]) && r % 3 && !((r + o) % 3)) {
            p += o;
            continue
          }
          if (s -= o, s > 0) continue;
          o = Math.min(o, o + s + p);
          let h = [...a[0]][0].length,
            d = n.slice(0, r + a.index + h + o);
          if (Math.min(r, o) % 2) {
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
          a = this.rules.other.nonSpaceChar.test(t),
          r = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
        return a && r && (t = t.substring(1, t.length - 1)), {
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
      let a = this.rules.inline.delLDelim.exec(n);
      if (a && (!a[1] || !t || this.rules.inline.punctuation.exec(t))) {
        let r = [...a[0]].length - 1,
          i, o, s = r,
          p = this.rules.inline.delRDelim;
        for (p.lastIndex = 0, e = e.slice(-1 * n.length + r);
          (a = p.exec(e)) !== null;) {
          if (i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !i || (o = [...i].length, o !== r)) continue;
          if (a[3] || a[4]) {
            s += o;
            continue
          }
          if (s -= o, s > 0) continue;
          o = Math.min(o, o + s);
          let l = [...a[0]][0].length,
            h = n.slice(0, r + a.index + l + o),
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
        let t, a;
        return e[2] === "@" ? (t = e[1], a = "mailto:" + t) : (t = e[1], a = t), {
          type: "link",
          raw: e[0],
          text: t,
          href: a,
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
        let a, r;
        if (e[2] === "@") a = e[0], r = "mailto:" + a;
        else {
          let i;
          do i = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? ""; while (i !== e[0]);
          a = e[0], e[1] === "www." ? r = "http://" + e[0] : r = e[0]
        }
        return {
          type: "link",
          raw: e[0],
          text: a,
          href: r,
          tokens: [{
            type: "text",
            raw: a,
            text: a
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
  y = class G {
    constructor(e) {
      b(this, "tokens");
      b(this, "options");
      b(this, "state");
      b(this, "inlineQueue");
      b(this, "tokenizer");
      this.tokens = [], this.tokens.links = Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new D, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: !1,
        inRawBlock: !1,
        top: !0
      };
      let t = {
        other: w,
        block: E.normal,
        inline: q.normal
      };
      this.options.pedantic ? (t.block = E.pedantic, t.inline = q.pedantic) : this.options.gfm && (t.block = E.gfm, this.options.breaks ? t.inline = q.breaks : t.inline = q.gfm), this.tokenizer.rules = t
    }
    static get rules() {
      return {
        block: E,
        inline: q
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
        let a = this.inlineQueue[t];
        this.inlineTokens(a.src, a.tokens)
      }
      return this.inlineQueue = [], this.tokens
    }
    blockTokens(e, t = [], a = !1) {
      var r, i, o;
      for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;) {
        let s;
        if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some(l => (s = l.call({
            lexer: this
          }, e, t)) ? (e = e.substring(s.raw.length), t.push(s), !0) : !1)) continue;
        if (s = this.tokenizer.space(e)) {
          e = e.substring(s.raw.length);
          let l = t.at(-1);
          s.raw.length === 1 && l !== void 0 ? l.raw += `
` : t.push(s);
          continue
        }
        if (s = this.tokenizer.code(e)) {
          e = e.substring(s.raw.length);
          let l = t.at(-1);
          (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.at(-1).src = l.text) : t.push(s);
          continue
        }
        if (s = this.tokenizer.fences(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.heading(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.hr(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.blockquote(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.list(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.html(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.def(e)) {
          e = e.substring(s.raw.length);
          let l = t.at(-1);
          (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
            href: s.href,
            title: s.title
          }, t.push(s));
          continue
        }
        if (s = this.tokenizer.table(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        if (s = this.tokenizer.lheading(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue
        }
        let p = e;
        if ((o = this.options.extensions) != null && o.startBlock) {
          let l = 1 / 0,
            h = e.slice(1),
            d;
          this.options.extensions.startBlock.forEach(u => {
            d = u.call({
              lexer: this
            }, h), typeof d == "number" && d >= 0 && (l = Math.min(l, d))
          }), l < 1 / 0 && l >= 0 && (p = e.substring(0, l + 1))
        }
        if (this.state.top && (s = this.tokenizer.paragraph(p))) {
          let l = t.at(-1);
          a && (l == null ? void 0 : l.type) === "paragraph" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(s), a = p.length !== e.length, e = e.substring(s.raw.length);
          continue
        }
        if (s = this.tokenizer.text(e)) {
          e = e.substring(s.raw.length);
          let l = t.at(-1);
          (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(s);
          continue
        }
        if (e) {
          let l = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break
          } else throw new Error(l)
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
      var p, l, h, d, u;
      this.tokenizer.lexer = this;
      let a = e,
        r = null;
      if (this.tokens.links) {
        let c = Object.keys(this.tokens.links);
        if (c.length > 0)
          for (;
            (r = this.tokenizer.rules.inline.reflinkSearch.exec(a)) !== null;) c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
      }
      for (;
        (r = this.tokenizer.rules.inline.anyPunctuation.exec(a)) !== null;) a = a.slice(0, r.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let i;
      for (;
        (r = this.tokenizer.rules.inline.blockSkip.exec(a)) !== null;) i = r[2] ? r[2].length : 0, a = a.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      a = ((l = (p = this.options.hooks) == null ? void 0 : p.emStrongMask) == null ? void 0 : l.call({
        lexer: this
      }, a)) ?? a;
      let o = !1,
        s = "";
      for (; e;) {
        o || (s = ""), o = !1;
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
        if (c = this.tokenizer.emStrong(e, a, s)) {
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
        if (c = this.tokenizer.del(e, a, s)) {
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
          let g = 1 / 0,
            _ = e.slice(1),
            T;
          this.options.extensions.startInline.forEach(F => {
            T = F.call({
              lexer: this
            }, _), typeof T == "number" && T >= 0 && (g = Math.min(g, T))
          }), g < 1 / 0 && g >= 0 && (k = e.substring(0, g + 1))
        }
        if (c = this.tokenizer.inlineText(k)) {
          e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (s = c.raw.slice(-1)), o = !0;
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
  H = class {
    constructor(n) {
      b(this, "options");
      b(this, "parser");
      this.options = n || R
    }
    space(n) {
      return ""
    }
    code({
      text: n,
      lang: e,
      escaped: t
    }) {
      var i;
      let a = (i = (e || "").match(w.notSpaceStart)) == null ? void 0 : i[0],
        r = n.replace(w.endingNewline, "") + `
`;
      return a ? '<pre><code class="language-' + v(a) + '">' + (t ? r : v(r, !0)) + `</code></pre>
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
        a = "";
      for (let o = 0; o < n.items.length; o++) {
        let s = n.items[o];
        a += this.listitem(s)
      }
      let r = e ? "ol" : "ul",
        i = e && t !== 1 ? ' start="' + t + '"' : "";
      return "<" + r + i + `>
` + a + "</" + r + `>
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
      let a = "";
      for (let r = 0; r < n.rows.length; r++) {
        let i = n.rows[r];
        t = "";
        for (let o = 0; o < i.length; o++) t += this.tablecell(i[o]);
        a += this.tablerow({
          text: t
        })
      }
      return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + a + `</table>
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
      let a = this.parser.parseInline(t),
        r = ue(n);
      if (r === null) return a;
      n = r;
      let i = '<a href="' + n + '"';
      return e && (i += ' title="' + v(e) + '"'), i += ">" + a + "</a>", i
    }
    image({
      href: n,
      title: e,
      text: t,
      tokens: a
    }) {
      a && (t = this.parser.parseInline(a, this.parser.textRenderer));
      let r = ue(n);
      if (r === null) return v(t);
      n = r;
      let i = `<img src="${n}" alt="${v(t)}"`;
      return e && (i += ` title="${v(e)}"`), i += ">", i
    }
    text(n) {
      return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : "escaped" in n && n.escaped ? n.text : v(n.text)
    }
  },
  ae = class {
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
  x = class Y {
    constructor(e) {
      b(this, "options");
      b(this, "renderer");
      b(this, "textRenderer");
      this.options = e || R, this.options.renderer = this.options.renderer || new H, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ae
    }
    static parse(e, t) {
      return new Y(t).parse(e)
    }
    static parseInline(e, t) {
      return new Y(t).parseInline(e)
    }
    parse(e) {
      var a, r;
      this.renderer.parser = this;
      let t = "";
      for (let i = 0; i < e.length; i++) {
        let o = e[i];
        if ((r = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && r[o.type]) {
          let p = o,
            l = this.options.extensions.renderers[p.type].call({
              parser: this
            }, p);
          if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(p.type)) {
            t += l || "";
            continue
          }
        }
        let s = o;
        switch (s.type) {
          case "space": {
            t += this.renderer.space(s);
            break
          }
          case "hr": {
            t += this.renderer.hr(s);
            break
          }
          case "heading": {
            t += this.renderer.heading(s);
            break
          }
          case "code": {
            t += this.renderer.code(s);
            break
          }
          case "table": {
            t += this.renderer.table(s);
            break
          }
          case "blockquote": {
            t += this.renderer.blockquote(s);
            break
          }
          case "list": {
            t += this.renderer.list(s);
            break
          }
          case "checkbox": {
            t += this.renderer.checkbox(s);
            break
          }
          case "html": {
            t += this.renderer.html(s);
            break
          }
          case "def": {
            t += this.renderer.def(s);
            break
          }
          case "paragraph": {
            t += this.renderer.paragraph(s);
            break
          }
          case "text": {
            t += this.renderer.text(s);
            break
          }
          default: {
            let p = 'Token with "' + s.type + '" type was not found.';
            if (this.options.silent) return console.error(p), "";
            throw new Error(p)
          }
        }
      }
      return t
    }
    parseInline(e, t = this.renderer) {
      var r, i;
      this.renderer.parser = this;
      let a = "";
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[s.type]) {
          let l = this.options.extensions.renderers[s.type].call({
            parser: this
          }, s);
          if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
            a += l || "";
            continue
          }
        }
        let p = s;
        switch (p.type) {
          case "escape": {
            a += t.text(p);
            break
          }
          case "html": {
            a += t.html(p);
            break
          }
          case "link": {
            a += t.link(p);
            break
          }
          case "image": {
            a += t.image(p);
            break
          }
          case "checkbox": {
            a += t.checkbox(p);
            break
          }
          case "strong": {
            a += t.strong(p);
            break
          }
          case "em": {
            a += t.em(p);
            break
          }
          case "codespan": {
            a += t.codespan(p);
            break
          }
          case "br": {
            a += t.br(p);
            break
          }
          case "del": {
            a += t.del(p);
            break
          }
          case "text": {
            a += t.text(p);
            break
          }
          default: {
            let l = 'Token with "' + p.type + '" type was not found.';
            if (this.options.silent) return console.error(l), "";
            throw new Error(l)
          }
        }
      }
      return a
    }
  },
  L, I = (L = class {
    constructor(n) {
      b(this, "options");
      b(this, "block");
      this.options = n || R
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
      return n ? x.parse : x.parseInline
    }
  }, b(L, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), b(L, "passThroughHooksRespectAsync", new Set(["preprocess", "postprocess", "processAllTokens"])), L),
  Ut = class {
    constructor(...n) {
      b(this, "defaults", V());
      b(this, "options", this.setOptions);
      b(this, "parse", this.parseMarkdown(!0));
      b(this, "parseInline", this.parseMarkdown(!1));
      b(this, "Parser", x);
      b(this, "Renderer", H);
      b(this, "TextRenderer", ae);
      b(this, "Lexer", y);
      b(this, "Tokenizer", D);
      b(this, "Hooks", I);
      this.use(...n)
    }
    walkTokens(n, e) {
      var a, r;
      let t = [];
      for (let i of n) switch (t = t.concat(e.call(this, i)), i.type) {
        case "table": {
          let o = i;
          for (let s of o.header) t = t.concat(this.walkTokens(s.tokens, e));
          for (let s of o.rows)
            for (let p of s) t = t.concat(this.walkTokens(p.tokens, e));
          break
        }
        case "list": {
          let o = i;
          t = t.concat(this.walkTokens(o.items, e));
          break
        }
        default: {
          let o = i;
          (r = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && r[o.type] ? this.defaults.extensions.childTokens[o.type].forEach(s => {
            let p = o[s].flat(1 / 0);
            t = t.concat(this.walkTokens(p, e))
          }) : o.tokens && (t = t.concat(this.walkTokens(o.tokens, e)))
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
        let a = {
          ...t
        };
        if (a.async = this.defaults.async || a.async || !1, t.extensions && (t.extensions.forEach(r => {
            if (!r.name) throw new Error("extension name required");
            if ("renderer" in r) {
              let i = e.renderers[r.name];
              i ? e.renderers[r.name] = function(...o) {
                let s = r.renderer.apply(this, o);
                return s === !1 && (s = i.apply(this, o)), s
              } : e.renderers[r.name] = r.renderer
            }
            if ("tokenizer" in r) {
              if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
              let i = e[r.level];
              i ? i.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]))
            }
            "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens)
          }), a.extensions = e), t.renderer) {
          let r = this.defaults.renderer || new H(this.defaults);
          for (let i in t.renderer) {
            if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
            if (["options", "parser"].includes(i)) continue;
            let o = i,
              s = t.renderer[o],
              p = r[o];
            r[o] = (...l) => {
              let h = s.apply(r, l);
              return h === !1 && (h = p.apply(r, l)), h || ""
            }
          }
          a.renderer = r
        }
        if (t.tokenizer) {
          let r = this.defaults.tokenizer || new D(this.defaults);
          for (let i in t.tokenizer) {
            if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
            if (["options", "rules", "lexer"].includes(i)) continue;
            let o = i,
              s = t.tokenizer[o],
              p = r[o];
            r[o] = (...l) => {
              let h = s.apply(r, l);
              return h === !1 && (h = p.apply(r, l)), h
            }
          }
          a.tokenizer = r
        }
        if (t.hooks) {
          let r = this.defaults.hooks || new I;
          for (let i in t.hooks) {
            if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
            if (["options", "block"].includes(i)) continue;
            let o = i,
              s = t.hooks[o],
              p = r[o];
            I.passThroughHooks.has(i) ? r[o] = l => {
              if (this.defaults.async && I.passThroughHooksRespectAsync.has(i)) return (async () => {
                let d = await s.call(r, l);
                return p.call(r, d)
              })();
              let h = s.call(r, l);
              return p.call(r, h)
            } : r[o] = (...l) => {
              if (this.defaults.async) return (async () => {
                let d = await s.apply(r, l);
                return d === !1 && (d = await p.apply(r, l)), d
              })();
              let h = s.apply(r, l);
              return h === !1 && (h = p.apply(r, l)), h
            }
          }
          a.hooks = r
        }
        if (t.walkTokens) {
          let r = this.defaults.walkTokens,
            i = t.walkTokens;
          a.walkTokens = function(o) {
            let s = [];
            return s.push(i.call(this, o)), r && (s = s.concat(r.call(this, o))), s
          }
        }
        this.defaults = {
          ...this.defaults,
          ...a
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
      return x.parse(n, e ?? this.defaults)
    }
    parseMarkdown(n) {
      return (e, t) => {
        let a = {
            ...t
          },
          r = {
            ...this.defaults,
            ...a
          },
          i = this.onError(!!r.silent, !!r.async);
        if (this.defaults.async === !0 && a.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
        if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
        if (r.hooks && (r.hooks.options = r, r.hooks.block = n), r.async) return (async () => {
          let o = r.hooks ? await r.hooks.preprocess(e) : e,
            s = await (r.hooks ? await r.hooks.provideLexer(n) : n ? y.lex : y.lexInline)(o, r),
            p = r.hooks ? await r.hooks.processAllTokens(s) : s;
          r.walkTokens && await Promise.all(this.walkTokens(p, r.walkTokens));
          let l = await (r.hooks ? await r.hooks.provideParser(n) : n ? x.parse : x.parseInline)(p, r);
          return r.hooks ? await r.hooks.postprocess(l) : l
        })().catch(i);
        try {
          r.hooks && (e = r.hooks.preprocess(e));
          let o = (r.hooks ? r.hooks.provideLexer(n) : n ? y.lex : y.lexInline)(e, r);
          r.hooks && (o = r.hooks.processAllTokens(o)), r.walkTokens && this.walkTokens(o, r.walkTokens);
          let s = (r.hooks ? r.hooks.provideParser(n) : n ? x.parse : x.parseInline)(o, r);
          return r.hooks && (s = r.hooks.postprocess(s)), s
        } catch (o) {
          return i(o)
        }
      }
    }
    onError(n, e) {
      return t => {
        if (t.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
          let a = "<p>An error occurred:</p><pre>" + v(t.message + "", !0) + "</pre>";
          return e ? Promise.resolve(a) : a
        }
        if (e) return Promise.reject(t);
        throw t
      }
    }
  },
  A = new Ut;

function f(n, e) {
  return A.parse(n, e)
}
f.options = f.setOptions = function(n) {
  return A.setOptions(n), f.defaults = A.defaults, be(f.defaults), f
};
f.getDefaults = V;
f.defaults = R;
f.use = function(...n) {
  return A.use(...n), f.defaults = A.defaults, be(f.defaults), f
};
f.walkTokens = function(n, e) {
  return A.walkTokens(n, e)
};
f.parseInline = A.parseInline;
f.Parser = x;
f.parser = x.parse;
f.Renderer = H;
f.TextRenderer = ae;
f.Lexer = y;
f.lexer = y.lex;
f.Tokenizer = D;
f.Hooks = I;
f.parse = f;
f.options;
f.setOptions;
f.use;
f.walkTokens;
f.parseInline;
var Yn = f;
x.parse;
y.lex;
const Gt = `Welcome to WPlace, a platform to share and explore pixel art creations!
`,
  Yt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gt
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Vt = `We have just launched a new update focused on **personalization**!
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
  Xt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Vt
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
  an = `With v1.3.0, we’re reducing the moderation intervention and giving more freedom to the players to better match Wplace’s core idea: a living canvas shaped by the community.

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
  sn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: an
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  on = `#### Anti-Cheat

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
  ln = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: on
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
  hn = `### 🆕 Key Changes

- **World Cup Event Match Predictions and Cosmetics**: You can now earn an event currency called **Cup Coins** by painting daily in any stadium area or by getting the correct prediction. Spend your Cup Coins in the new **Cup Store** on exclusive time-limited rewards, such as country badges, frames, and other cosmetics, or exchange Droplets for coins if you want a head start.
- **Anti-cheat system improvements**: More aggressive anticheat detections and punishment of bots and multi-accounts to keep the canvas fair.
- **Improvements to the suspension system**: Suspensions are now more granular.
`,
  un = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  dn = `### 🆕 Key Changes

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
  gn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  mn = `### Additions

- **NEW FRAMES:** A fresh collection of user frames is now available in the store!
- **Active alliance leadership**: If a leader has not painted for more than 60 days, leadership now passes to the oldest active admin, then the oldest active member. Alliances without an active successor keep their current leader.
- **Faster member directories**: Alliance member lists can now be searched by name or ID, filtered by role, and sorted. Staff can also filter members by account status and sort by painted pixels.

### Improvements

- **Reliable headquarters previews**: Headquarters preview images now recover automatically from temporary loading delays instead of remaining broken.
- **Stable headquarters canvas**: Moving, zooming, and refreshing the headquarters canvas no longer produces false connection errors when an outdated tile request is cancelled, and holding Space to paint or pan no longer scrolls the dialog.
- **Readable alliance leaderboard on phones**: The alliance leaderboard now fits the screen on mobile, so the pixel counts and the last pixel button are no longer cut off.
`,
  fn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  bn = `### Fixes

- Fixed additional cases where large personal overlays could appear flipped, duplicated, or scrambled on mobile devices.
- Fixed an issue where open overlays could disappear on desktop or mobile when canvas pixels refreshed and remain hidden until the user painted or reloaded the page.
`,
  kn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  _n = `### Fixes

- Fixed an issue where the country selector could appear behind the phone verification dialog.
`,
  wn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _n
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  yn = `### Improvements

- **Reliable public headquarters previews**: Public headquarters previews now properly load during heavy alliance activity instead of remaining unavailable while background work catches up.
- **Better alliance browsing**: Filter the gallery by open, request-based, or invite-only membership, while recently active alliances continue loading reliably as their order changes.
- **Timely alliance succession**: Eligible active successors now take over promptly after a leader passes 60 days without painting, even when many alliances need leadership updates at once.
- **Flexible alliance roles**: Alliances now include a Mod role without changing existing Admins, and leaders can tailor permissions for Admins, Mods, and Members.
- **Clear purchase history**: The Alliance Coin ledger now names the store item bought in every purchase entry.
- **Complete headquarters timeout history**: Revoked headquarters timeouts now show why painting access was restored.
`,
  xn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  vn = `### Improvements

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
  Sn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  An = `### Additions

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
  Rn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: An
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Tn = `### Improvements

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
  zn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Pn = `### Fixes

- Fixed an issue where alliance headquarters pins could appear at the wrong zoom after loading the map and moving the pointer could repeatedly cause map errors.
`,
  $n = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Cn = `### New features

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
  qn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Mn = `### Fixes

- Fixed an issue where saved overlays could remain stuck loading and make the overlay menu unresponsive.
- Fixed an issue that prevented overlays with role-restricted audiences from being saved.
- Alliance overlays now preserve full-resolution source images so their quantized colors stay consistent with matching personal overlays.
`,
  In = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  On = `### Improvements

- Alliance Coin balances, prices, and notifications now use a dedicated coin icon, and Droplets have a refreshed icon.

### Fixes

- Fixed an issue where personal overlays could appear duplicated, rotated, or show incorrect pixels on some mobile devices.
- Fixed an issue where reopened alliance picture or banner drafts could fail to finish.
`,
  Fn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: On
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  jn = Object.assign({
    "./markdown/1.0.0 - Welcome to WPlace!.md": Yt,
    "./markdown/1.1.0 - ✨ More Like You Update.md": Xt,
    "./markdown/1.1.1 - 🛠️ Quality & Cosmetics Improvements.md": Jt,
    "./markdown/1.1.2 - 🧰 UI Fixes & Moderation Improvements.md": tn,
    "./markdown/1.2.0 - 🖼️ Pixel Overlays & Achievement Frames.md": rn,
    "./markdown/1.3.0 - 🛠️ Moderation Adjustments, Hotspots and Improved Anti-Cheat System.md": sn,
    "./markdown/1.3.1 - 🛠️  Hotfixes and Opt-out from Hotspots copy.md": ln,
    "./markdown/1.3.2 - 🤖 Anti-cheat improvements and Google Drive overlay sync.md": pn,
    "./markdown/1.3.3 - ⚽ World Cup Predictions and Cosmetics & Anti-cheat Improvements.md": un,
    "./markdown/1.4.0 - 🛡️ The New Alliance System.md": gn,
    "./markdown/1.4.1 - 🛡️ Alliance System Fixes.md": fn,
    "./markdown/1.4.10 - 🛠️ Mobile Overlay Rendering.md": kn,
    "./markdown/1.4.11 - 🛠️ Phone Verification Fixes.md": wn,
    "./markdown/1.4.2 - 🛠️ Headquarters Preview Reliability.md": xn,
    "./markdown/1.4.3 - 🛠️ Alliance Usability Fixes.md": Sn,
    "./markdown/1.4.4 - 🧭 Alliance Canvas Overlays.md": Rn,
    "./markdown/1.4.5 - 🎨 Alliance Canvas Tools and Map Display.md": zn,
    "./markdown/1.4.6 - 🛠️ Map Interaction Reliability.md": $n,
    "./markdown/1.4.7 - 🖼️ Alliance Overlays and Asset Studio.md": qn,
    "./markdown/1.4.8 - 🛠️ Overlay Reliability.md": In,
    "./markdown/1.4.9 - 🛍️ Mobile Overlay Fixes.md": Fn
  }),
  Vn = Object.entries(jn).map(([n, e]) => {
    var i, o;
    const t = (i = n.split("/").at(-1)) == null ? void 0 : i.replace(".md", ""),
      a = (o = t == null ? void 0 : t.split("-")[0]) == null ? void 0 : o.trim(),
      r = (t == null ? void 0 : t.split("-").slice(1).join("-").trim()) ?? a;
    return {
      version: a,
      title: r,
      markdown: e.default
    }
  }).sort((n, e) => n.version.localeCompare(e.version, void 0, {
    numeric: !0
  }));
var En = fe('<span class="text-primary inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide"><span class="relative flex size-1.5"><span class="bg-primary/60 absolute inline-flex size-full animate-ping rounded-full"></span> <span class="bg-primary relative inline-flex size-1.5 rounded-full"></span></span> </span>'),
  Ln = fe('<article><div class="flex items-center gap-3"><span class="text-primary text-lg font-bold tracking-wide"> </span> <!></div> <h2 class="mt-1 text-[0.9375rem] leading-snug font-bold tracking-tight"> </h2> <div class="patch-content mt-4 svelte-1pfqn89"></div></article>');

function Xn(n, e) {
  Ce(e, !0);
  let t = Oe(e, "latest", 3, !1);
  var a = Ln(),
    r = C(a),
    i = C(r),
    o = C(i);
  z(i);
  var s = j(i, 2);
  {
    var p = u => {
      var c = En(),
        k = j(C(c));
      z(c), oe(g => Q(k, ` ${g??""}`), [() => Ge()]), le(u, c)
    };
    Me(s, u => {
      t() && u(p)
    })
  }
  z(r);
  var l = j(r, 2),
    h = C(l, !0);
  z(l);
  var d = j(l, 2);
  Ie(d, () => e.patchNote.html, !0), z(d), z(a), oe(() => {
    Q(o, `v${e.patchNote.version??""}`), Q(h, e.patchNote.title)
  }), le(n, a), qe()
}
export {
  Ut as D, Xn as P, Yn as W, Vn as a, Gn as p, H as y
};