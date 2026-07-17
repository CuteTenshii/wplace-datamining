var X = Object.defineProperty;
var L = e => {
  throw TypeError(e)
};
var D = (e, t, n) => t in e ? X(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var j = (e, t, n) => D(e, typeof t != "symbol" ? t + "" : t, n),
  M = (e, t, n) => t.has(e) || L("Cannot " + n);
var h = (e, t, n) => (M(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  g = (e, t, n) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  S = (e, t, n, r) => (M(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import {
  bw as Y,
  S as K,
  B as _,
  T as z,
  aH as q,
  bI as J,
  i as U,
  e as Z,
  g as Q,
  h as ee,
  u as te,
  bJ as $,
  aE as ne,
  y as re
} from "./BKnGt6Ki.js";
import {
  h as k
} from "./Czze0tKx.js";
import {
  c as oe
} from "./DbGfTWgr.js";

function ie() {
  return Symbol(Y)
}

function qe(e, t, n) {
  K(() => {
    var r = _(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1,
        i = {};
      z(() => {
        var s = n();
        q(s), o && J(i, s) && (i = s, r.update(s))
      }), o = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
let O;

function Je(e) {
  return O = e, P({
    type: "previewPixels",
    data: e
  })
}

function Ze() {
  return O = void 0, P({
    type: "clearPixelPreview"
  })
}

function Qe(e) {
  return P({
    type: "paintPixels",
    data: e
  })
}

function et() {
  return P({
    type: "refreshPixelArt"
  })
}
async function tt() {
  O || await P({
    type: "clearPixelPreview"
  })
}
const se = 1e4;
let ce = 0;

function P(e) {
  const t = ce++,
    n = {
      ...e,
      id: t
    };
  return new Promise((r, o) => {
    const i = navigator.serviceWorker;
    if (!i) {
      o(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      return
    }
    let s = !1;
    const u = a => {
        var c;
        ((c = a.data) == null ? void 0 : c.id) === t && d()
      },
      f = () => {
        clearTimeout(w), i.removeEventListener("message", u)
      },
      d = () => {
        s || (s = !0, f(), r())
      },
      l = a => {
        s || (s = !0, f(), o(a))
      },
      w = setTimeout(() => l(new Error("Timed out waiting for service worker response")), se);
    i.addEventListener("message", u);
    const b = a => {
        try {
          a.postMessage(n)
        } catch (c) {
          l(c instanceof Error ? c : new Error(String(c)))
        }
      },
      m = i.controller;
    m ? b(m) : i.ready.then(a => {
      if (s) return;
      const c = a.active;
      c ? b(c) : l(new Error("Service worker registration not active"))
    }, a => l(a instanceof Error ? a : new Error(String(a))))
  })
}

function nt({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}

function ae(e) {
  return e !== null && typeof e == "object"
}
const ue = ["string", "number", "bigint", "boolean"];

function R(e) {
  return e == null || ue.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(t => R(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1
}
const x = Symbol("box"),
  B = Symbol("is-writable");

function rt(e, t) {
  const n = te(e);
  return t ? {
    [x]: !0,
    [B]: !0,
    get current() {
      return U(n)
    },
    set current(r) {
      t(r)
    }
  } : {
    [x]: !0,
    get current() {
      return e()
    }
  }
}

function fe(e) {
  return ae(e) && x in e
}

function ot(e) {
  let t = Z(Q(e));
  return {
    [x]: !0,
    [B]: !0,
    get current() {
      return U(t)
    },
    set current(n) {
      ee(t, n, !0)
    }
  }
}

function le(...e) {
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
  de = /\n/g,
  pe = /^\s*/,
  me = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  we = /^:\s*/,
  be = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  he = /^[;\s]*/,
  ye = /^\s+|\s+$/g,
  ve = `
`,
  N = "/",
  V = "*",
  y = "",
  Ee = "comment",
  ge = "declaration";

function Se(e, t) {
  if (typeof e != "string") throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function o(a) {
    var c = a.match(de);
    c && (n += c.length);
    var p = a.lastIndexOf(ve);
    r = ~p ? a.length - p : r + a.length
  }

  function i() {
    var a = {
      line: n,
      column: r
    };
    return function(c) {
      return c.position = new s(a), d(), c
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

  function f(a) {
    var c = a.exec(e);
    if (c) {
      var p = c[0];
      return o(p), e = e.slice(p.length), c
    }
  }

  function d() {
    f(pe)
  }

  function l(a) {
    var c;
    for (a = a || []; c = w();) c !== !1 && a.push(c);
    return a
  }

  function w() {
    var a = i();
    if (!(N != e.charAt(0) || V != e.charAt(1))) {
      for (var c = 2; y != e.charAt(c) && (V != e.charAt(c) || N != e.charAt(c + 1));) ++c;
      if (c += 2, y === e.charAt(c - 1)) return u("End of comment missing");
      var p = e.slice(2, c - 2);
      return r += 2, o(p), e = e.slice(c), r += 2, a({
        type: Ee,
        comment: p
      })
    }
  }

  function b() {
    var a = i(),
      c = f(me);
    if (c) {
      if (w(), !f(we)) return u("property missing ':'");
      var p = f(be),
        H = a({
          type: ge,
          property: G(c[0].replace(W, y)),
          value: p ? G(p[0].replace(W, y)) : y
        });
      return f(he), H
    }
  }

  function m() {
    var a = [];
    l(a);
    for (var c; c = b();) c !== !1 && (a.push(c), l(a));
    return a
  }
  return d(), m()
}

function G(e) {
  return e ? e.replace(ye, y) : y
}

function Ae(e, t) {
  let n = null;
  if (!e || typeof e != "string") return n;
  const r = Se(e),
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
const Te = /\d/,
  Pe = ["-", "_", "/", "."];

function Ie(e = "") {
  if (!Te.test(e)) return e !== e.toLowerCase()
}

function _e(e) {
  const t = [];
  let n = "",
    r, o;
  for (const i of e) {
    const s = Pe.includes(i);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue
    }
    const u = Ie(i);
    if (o === !1) {
      if (r === !1 && u === !0) {
        t.push(n), n = i, r = u;
        continue
      }
      if (r === !0 && u === !1 && n.length > 1) {
        const f = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = f + i, r = u;
        continue
      }
    }
    n += i, r = u, o = s
  }
  return t.push(n), t
}

function C(e) {
  return e ? _e(e).map(t => ke(t)).join("") : ""
}

function xe(e) {
  return Re(C(e || ""))
}

function ke(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ""
}

function Re(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ""
}

function I(e) {
  if (!e) return {};
  const t = {};

  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[C(r)] = o;
      return
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return
    }
    t[xe(r)] = o
  }
  return Ae(e, n), t
}

function Oe(...e) {
  return (...t) => {
    for (const n of e) typeof n == "function" && n(...t)
  }
}

function Le(e, t) {
  const n = RegExp(e, "g");
  return r => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r
  }
}
const je = Le(/[A-Z]/, e => `-${e.toLowerCase()}`);

function Me(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${je(t)}: ${e[t]};`).join(`
`)
}

function $e(e = {}) {
  return Me(e).replace(`
`, " ")
}
const We = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Ne = new Set(We);

function Ve(e) {
  return Ne.has(e)
}

function it(...e) {
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
          f = typeof s == "function";
        if (u && Ve(o)) {
          const d = i,
            l = s;
          t[o] = le(d, l)
        } else if (u && f) t[o] = Oe(i, s);
        else if (o === "class") {
          const d = R(i),
            l = R(s);
          d && l ? t[o] = k(i, s) : d ? t[o] = k(i) : l && (t[o] = k(s))
        } else if (o === "style") {
          const d = typeof i == "object",
            l = typeof s == "object",
            w = typeof i == "string",
            b = typeof s == "string";
          if (d && l) t[o] = {
            ...i,
            ...s
          };
          else if (d && b) {
            const m = I(s);
            t[o] = {
              ...i,
              ...m
            }
          } else if (w && l) {
            const m = I(i);
            t[o] = {
              ...m,
              ...s
            }
          } else if (w && b) {
            const m = I(i),
              a = I(s);
            t[o] = {
              ...m,
              ...a
            }
          } else d ? t[o] = i : l ? t[o] = s : w ? t[o] = i : b && (t[o] = s)
        } else t[o] = s !== void 0 ? s : i
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = t[o],
          s = r[o];
        t[o] = s !== void 0 ? s : i
      }
    }
  }
  return typeof t.style == "object" && (t.style = $e(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t
}
const Ge = typeof window < "u" ? window : void 0;

function Ue(e) {
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
      window: n = Ge,
      document: r = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (S(this, v, r), S(this, A, oe(o => {
      const i = $(n, "focusin", o),
        s = $(n, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = h(this, A)) == null || t.call(this), h(this, v) ? Ue(h(this, v)) : null
  }
}
v = new WeakMap, A = new WeakMap;
new Be;

function Ce(e, t) {
  switch (e) {
    case "post":
      re(t);
      break;
    case "pre":
      ne(t);
      break
  }
}

function F(e, t, n, r = {}) {
  const {
    lazy: o = !1
  } = r;
  let i = !o,
    s = Array.isArray(e) ? [] : void 0;
  Ce(t, () => {
    const u = Array.isArray(e) ? e.map(d => d()) : e();
    if (!i) {
      i = !0, s = u;
      return
    }
    const f = _(() => n(u, s));
    return s = u, f
  })
}

function Fe(e, t, n) {
  F(e, "post", t, n)
}

function He(e, t, n) {
  F(e, "pre", t, n)
}
Fe.pre = He;

function st(e, t) {
  return {
    [ie()]: n => fe(e) ? (e.current = n, _(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), _(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e(null), t == null || t(null))
    })
  }
}

function ct(e) {
  return e ? "true" : "false"
}

function at(e) {
  return e ? "" : void 0
}

function ut(e) {
  return e ? !0 : void 0
}
var E, T;
class Xe {
  constructor(t) {
    g(this, E);
    g(this, T);
    j(this, "attrs");
    S(this, E, t.getVariant ? t.getVariant() : null), S(this, T, h(this, E) ? `data-${h(this,E)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map(n => [n, this.getAttr(n)]))
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${h(this,T)}${t}`
  }
  selector(t, n) {
    return `[${this.getAttr(t,n)}]`
  }
}
E = new WeakMap, T = new WeakMap;

function ft(e) {
  const t = new Xe(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  }
}

function lt() {}

function dt(e, t) {
  return `bits-${e}`
}

function pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function mt(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now();
  const o = () => typeof document > "u" || document.visibilityState === "visible";
  async function i() {
    const d = r;
    try {
      r = Date.now(), await e()
    } catch (l) {
      console.error(l), r = d
    }
  }
  const s = setInterval(() => {
    o() && i()
  }, t);
  n && i();
  async function u() {
    Date.now() - r >= t && await i()
  }
  const f = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => u(), {
    signal: f.signal
  }), document.addEventListener("resume", () => u(), {
    signal: f.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => u(), {
    signal: f.signal
  }), window.addEventListener("focus", () => u(), {
    signal: f.signal
  }), window.addEventListener("online", () => u(), {
    signal: f.signal
  }), window.addEventListener("wplace:online", () => u(), {
    signal: f.signal
  })), () => {
    clearInterval(s), f.abort()
  }
}
export {
  qe as a, rt as b, st as c, ut as d, ft as e, dt as f, pt as g, mt as h, ae as i, tt as j, Ze as k, $e as l, it as m, lt as n, ct as o, at as p, Qe as q, nt as r, ot as s, Je as t, et as u, Fe as w
};