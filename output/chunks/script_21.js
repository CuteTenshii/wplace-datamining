var X = Object.defineProperty;
var $ = e => {
  throw TypeError(e)
};
var Y = (e, t, n) => t in e ? X(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var j = (e, t, n) => Y(e, typeof t != "symbol" ? t + "" : t, n),
  L = (e, t, n) => t.has(e) || $("Cannot " + n);
var h = (e, t, n) => (L(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  g = (e, t, n) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  S = (e, t, n, r) => (L(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import {
  bw as K,
  m as z,
  B as x,
  S as D,
  at as q,
  bI as J,
  i as F,
  e as Z,
  g as Q,
  h as ee,
  u as te,
  bJ as M,
  aE as ne,
  y as re
} from "./DmPVOt2G.js";
import {
  h as I
} from "./tuZNrlvy.js";
import {
  c as oe
} from "./DhqkUb9U.js";

function ie() {
  return Symbol(K)
}

function ze(e, t, n) {
  z(() => {
    var r = x(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1,
        i = {};
      D(() => {
        var s = n();
        q(s), o && J(i, s) && (i = s, r.update(s))
      }), o = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
let O;

function De(e) {
  return O = e, P({
    type: "previewPixels",
    data: e
  })
}

function qe() {
  return O = void 0, P({
    type: "clearPixelPreview"
  })
}

function Je(e) {
  return P({
    type: "paintPixels",
    data: e
  })
}

function Ze() {
  return P({
    type: "refreshPixelArt"
  })
}
async function Qe() {
  O || await P({
    type: "clearPixelPreview"
  })
}

function P(e) {
  const t = Math.random(),
    n = {
      ...e,
      id: t
    };
  return new Promise((r, o) => {
    try {
      const i = navigator.serviceWorker;
      i || o(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      const s = l => {
        var f;
        ((f = l.data) == null ? void 0 : f.id) === t && (r(void 0), i.removeEventListener("message", s))
      };
      i.addEventListener("message", s);
      const u = navigator.serviceWorker.controller;
      u ? u.postMessage(n) : navigator.serviceWorker.ready.then(l => {
        const f = l.active;
        f ? f == null || f.postMessage(n) : o(new Error("Service worker registration not active"))
      })
    } catch (i) {
      o(i)
    }
  })
}

function et({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}

function se(e) {
  return e !== null && typeof e == "object"
}
const ce = ["string", "number", "bigint", "boolean"];

function R(e) {
  return e == null || ce.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(t => R(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1
}
const _ = Symbol("box"),
  G = Symbol("is-writable");

function tt(e, t) {
  const n = te(e);
  return t ? {
    [_]: !0,
    [G]: !0,
    get current() {
      return F(n)
    },
    set current(r) {
      t(r)
    }
  } : {
    [_]: !0,
    get current() {
      return e()
    }
  }
}

function ae(e) {
  return se(e) && _ in e
}

function nt(e) {
  let t = Z(Q(e));
  return {
    [_]: !0,
    [G]: !0,
    get current() {
      return F(t)
    },
    set current(n) {
      ee(t, n, !0)
    }
  }
}

function ue(...e) {
  return function(t) {
    var n;
    for (const r of e)
      if (r) {
        if (t.defaultPrevented) return;
        typeof r == "function" ? r.call(this, t) : (n = r.current) == null || n.call(this, t)
      }
  }
}
var W = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  fe = /\n/g,
  le = /^\s*/,
  pe = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  de = /^:\s*/,
  me = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  he = /^[;\s]*/,
  be = /^\s+|\s+$/g,
  ye = `
`,
  N = "/",
  V = "*",
  b = "",
  ve = "comment",
  we = "declaration";

function Ee(e, t) {
  if (typeof e != "string") throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function o(a) {
    var c = a.match(fe);
    c && (n += c.length);
    var d = a.lastIndexOf(ye);
    r = ~d ? a.length - d : r + a.length
  }

  function i() {
    var a = {
      line: n,
      column: r
    };
    return function(c) {
      return c.position = new s(a), f(), c
    }
  }

  function s(a) {
    this.start = a, this.end = {
      line: n,
      column: r
    }, this.source = t.source
  }
  s.prototype.content = e;

  function u(a) {
    var c = new Error(t.source + ":" + n + ":" + r + ": " + a);
    if (c.reason = a, c.filename = t.source, c.line = n, c.column = r, c.source = e, !t.silent) throw c
  }

  function l(a) {
    var c = a.exec(e);
    if (c) {
      var d = c[0];
      return o(d), e = e.slice(d.length), c
    }
  }

  function f() {
    l(le)
  }

  function p(a) {
    var c;
    for (a = a || []; c = y();) c !== !1 && a.push(c);
    return a
  }

  function y() {
    var a = i();
    if (!(N != e.charAt(0) || V != e.charAt(1))) {
      for (var c = 2; b != e.charAt(c) && (V != e.charAt(c) || N != e.charAt(c + 1));) ++c;
      if (c += 2, b === e.charAt(c - 1)) return u("End of comment missing");
      var d = e.slice(2, c - 2);
      return r += 2, o(d), e = e.slice(c), r += 2, a({
        type: ve,
        comment: d
      })
    }
  }

  function E() {
    var a = i(),
      c = l(pe);
    if (c) {
      if (y(), !l(de)) return u("property missing ':'");
      var d = l(me),
        H = a({
          type: we,
          property: B(c[0].replace(W, b)),
          value: d ? B(d[0].replace(W, b)) : b
        });
      return l(he), H
    }
  }

  function m() {
    var a = [];
    p(a);
    for (var c; c = E();) c !== !1 && (a.push(c), p(a));
    return a
  }
  return f(), m()
}

function B(e) {
  return e ? e.replace(be, b) : b
}

function ge(e, t) {
  let n = null;
  if (!e || typeof e != "string") return n;
  const r = Ee(e),
    o = typeof t == "function";
  return r.forEach(i => {
    if (i.type !== "declaration") return;
    const {
      property: s,
      value: u
    } = i;
    o ? t(s, u, i) : u && (n = n || {}, n[s] = u)
  }), n
}
const Se = /\d/,
  Ae = ["-", "_", "/", "."];

function Te(e = "") {
  if (!Se.test(e)) return e !== e.toLowerCase()
}

function Pe(e) {
  const t = [];
  let n = "",
    r, o;
  for (const i of e) {
    const s = Ae.includes(i);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue
    }
    const u = Te(i);
    if (o === !1) {
      if (r === !1 && u === !0) {
        t.push(n), n = i, r = u;
        continue
      }
      if (r === !0 && u === !1 && n.length > 1) {
        const l = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = l + i, r = u;
        continue
      }
    }
    n += i, r = u, o = s
  }
  return t.push(n), t
}

function U(e) {
  return e ? Pe(e).map(t => xe(t)).join("") : ""
}

function ke(e) {
  return _e(U(e || ""))
}

function xe(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ""
}

function _e(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ""
}

function k(e) {
  if (!e) return {};
  const t = {};

  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[U(r)] = o;
      return
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return
    }
    t[ke(r)] = o
  }
  return ge(e, n), t
}

function Ie(...e) {
  return (...t) => {
    for (const n of e) typeof n == "function" && n(...t)
  }
}

function Re(e, t) {
  const n = RegExp(e, "g");
  return r => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r
  }
}
const Oe = Re(/[A-Z]/, e => `-${e.toLowerCase()}`);

function $e(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${Oe(t)}: ${e[t]};`).join(`
`)
}

function je(e = {}) {
  return $e(e).replace(`
`, " ")
}
const Le = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Me = new Set(Le);

function We(e) {
  return Me.has(e)
}

function rt(...e) {
  const t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = t[o],
          s = r[o],
          u = typeof i == "function",
          l = typeof s == "function";
        if (u && We(o)) {
          const f = i,
            p = s;
          t[o] = ue(f, p)
        } else if (u && l) t[o] = Ie(i, s);
        else if (o === "class") {
          const f = R(i),
            p = R(s);
          f && p ? t[o] = I(i, s) : f ? t[o] = I(i) : p && (t[o] = I(s))
        } else if (o === "style") {
          const f = typeof i == "object",
            p = typeof s == "object",
            y = typeof i == "string",
            E = typeof s == "string";
          if (f && p) t[o] = {
            ...i,
            ...s
          };
          else if (f && E) {
            const m = k(s);
            t[o] = {
              ...i,
              ...m
            }
          } else if (y && p) {
            const m = k(i);
            t[o] = {
              ...m,
              ...s
            }
          } else if (y && E) {
            const m = k(i),
              a = k(s);
            t[o] = {
              ...m,
              ...a
            }
          } else f ? t[o] = i : p ? t[o] = s : y ? t[o] = i : E && (t[o] = s)
        } else t[o] = s !== void 0 ? s : i
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = t[o],
          s = r[o];
        t[o] = s !== void 0 ? s : i
      }
    }
  }
  return typeof t.style == "object" && (t.style = je(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t
}
const Ne = typeof window < "u" ? window : void 0;

function Ve(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var v, A;
class Be {
  constructor(t = {}) {
    g(this, v);
    g(this, A);
    const {
      window: n = Ne,
      document: r = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (S(this, v, r), S(this, A, oe(o => {
      const i = M(n, "focusin", o),
        s = M(n, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = h(this, A)) == null || t.call(this), h(this, v) ? Ve(h(this, v)) : null
  }
}
v = new WeakMap, A = new WeakMap;
new Be;

function Fe(e, t) {
  switch (e) {
    case "post":
      re(t);
      break;
    case "pre":
      ne(t);
      break
  }
}

function C(e, t, n, r = {}) {
  const {
    lazy: o = !1
  } = r;
  let i = !o,
    s = Array.isArray(e) ? [] : void 0;
  Fe(t, () => {
    const u = Array.isArray(e) ? e.map(f => f()) : e();
    if (!i) {
      i = !0, s = u;
      return
    }
    const l = x(() => n(u, s));
    return s = u, l
  })
}

function Ge(e, t, n) {
  C(e, "post", t, n)
}

function Ue(e, t, n) {
  C(e, "pre", t, n)
}
Ge.pre = Ue;

function ot(e, t) {
  return {
    [ie()]: n => ae(e) ? (e.current = n, x(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), x(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e(null), t == null || t(null))
    })
  }
}

function it(e) {
  return e ? "true" : "false"
}

function st(e) {
  return e ? "" : void 0
}

function ct(e) {
  return e ? !0 : void 0
}
var w, T;
class Ce {
  constructor(t) {
    g(this, w);
    g(this, T);
    j(this, "attrs");
    S(this, w, t.getVariant ? t.getVariant() : null), S(this, T, h(this, w) ? `data-${h(this,w)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map(n => [n, this.getAttr(n)]))
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${h(this,T)}${t}`
  }
  selector(t, n) {
    return `[${this.getAttr(t,n)}]`
  }
}
w = new WeakMap, T = new WeakMap;

function at(e) {
  const t = new Ce(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  }
}

function ut() {}

function ft(e, t) {
  return `bits-${e}`
}

function lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
export {
  ze as a, tt as b, ot as c, ct as d, at as e, ft as f, lt as g, Qe as h, se as i, qe as j, je as k, it as l, rt as m, ut as n, st as o, Je as p, et as q, De as r, nt as s, Ze as t, Ge as w
};