var tt = Object.defineProperty;
var $ = t => {
  throw TypeError(t)
};
var et = (t, e, n) => e in t ? tt(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var m = (t, e, n) => et(t, typeof e != "symbol" ? e + "" : e, n),
  j = (t, e, n) => e.has(t) || $("Cannot " + n);
var y = (t, e, n) => (j(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  b = (t, e, n) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  T = (t, e, n, r) => (j(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import {
  by as nt,
  T as rt,
  B as O,
  U as ot,
  aI as it,
  bL as st,
  i as D,
  e as ct,
  g as ut,
  h as G,
  u as H,
  bm as V,
  aF as at,
  y as ft
} from "./DUZ_qUVk.js";
import {
  i as N
} from "./M4i-R8Gk.js";
import {
  c as lt
} from "./DtUyTUmd.js";

function dt() {
  return Symbol(nt)
}

function le(t, e, n) {
  rt(() => {
    var r = O(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1,
        i = {};
      ot(() => {
        var s = n();
        it(s), o && st(i, s) && (i = s, r.update(s))
      }), o = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
let W;

function de(t) {
  return W = t, I({
    type: "previewPixels",
    data: t
  })
}

function pe() {
  return W = void 0, I({
    type: "clearPixelPreview"
  })
}

function me(t) {
  return I({
    type: "paintPixels",
    data: t
  })
}

function we() {
  return I({
    type: "refreshPixelArt"
  })
}
async function ye() {
  W || await I({
    type: "clearPixelPreview"
  })
}
const pt = 1e4;
let mt = 0;

function I(t) {
  const e = mt++,
    n = {
      ...t,
      id: e
    };
  return new Promise((r, o) => {
    const i = navigator.serviceWorker;
    if (!i) {
      o(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      return
    }
    let s = !1;
    const a = u => {
        var c;
        ((c = u.data) == null ? void 0 : c.id) === e && d()
      },
      f = () => {
        clearTimeout(h), i.removeEventListener("message", a)
      },
      d = () => {
        s || (s = !0, f(), r())
      },
      l = u => {
        s || (s = !0, f(), o(u))
      },
      h = setTimeout(() => l(new Error("Timed out waiting for service worker response")), pt);
    i.addEventListener("message", a);
    const E = u => {
        try {
          u.postMessage(n)
        } catch (c) {
          l(c instanceof Error ? c : new Error(String(c)))
        }
      },
      w = i.controller;
    w ? E(w) : i.ready.then(u => {
      if (s) return;
      const c = u.active;
      c ? E(c) : l(new Error("Service worker registration not active"))
    }, u => l(u instanceof Error ? u : new Error(String(u))))
  })
}

function he({
  pixel: t,
  season: e,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${t[0]},${t[1]});s=${e}`
}

function wt(t) {
  return typeof t == "function"
}

function P(t) {
  return t !== null && typeof t == "object"
}
const yt = ["string", "number", "bigint", "boolean"];

function L(t) {
  return t == null || yt.includes(typeof t) ? !0 : Array.isArray(t) ? t.every(e => L(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1
}
const k = Symbol("box"),
  X = Symbol("is-writable");

function q(t, e) {
  const n = H(t);
  return e ? {
    [k]: !0,
    [X]: !0,
    get current() {
      return D(n)
    },
    set current(r) {
      e(r)
    }
  } : {
    [k]: !0,
    get current() {
      return t()
    }
  }
}

function Y(t) {
  return P(t) && k in t
}

function Ee(t) {
  return Y(t) ? t : wt(t) ? q(t) : ht(t)
}

function ht(t) {
  let e = ct(ut(t));
  return {
    [k]: !0,
    [X]: !0,
    get current() {
      return D(e)
    },
    set current(n) {
      G(e, n, !0)
    }
  }
}

function Et(...t) {
  return function(e) {
    var n;
    for (const r of t)
      if (r) {
        if (e.defaultPrevented) return;
        typeof r == "function" ? r.call(this, e) : (n = r.current) == null || n.call(this, e)
      }
  }
}
var C = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  gt = /\n/g,
  bt = /^\s*/,
  vt = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  St = /^:\s*/,
  Tt = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  At = /^[;\s]*/,
  _t = /^\s+|\s+$/g,
  xt = `
`,
  F = "/",
  U = "*",
  g = "",
  It = "comment",
  Pt = "declaration";

function Rt(t, e) {
  if (typeof t != "string") throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1,
    r = 1;

  function o(u) {
    var c = u.match(gt);
    c && (n += c.length);
    var p = u.lastIndexOf(xt);
    r = ~p ? u.length - p : r + u.length
  }

  function i() {
    var u = {
      line: n,
      column: r
    };
    return function(c) {
      return c.position = new s(u), d(), c
    }
  }

  function s(u) {
    this.start = u, this.end = {
      line: n,
      column: r
    }, this.source = e.source
  }
  s.prototype.content = t;

  function a(u) {
    var c = new Error(e.source + ":" + n + ":" + r + ": " + u);
    if (c.reason = u, c.filename = e.source, c.line = n, c.column = r, c.source = t, !e.silent) throw c
  }

  function f(u) {
    var c = u.exec(t);
    if (c) {
      var p = c[0];
      return o(p), t = t.slice(p.length), c
    }
  }

  function d() {
    f(bt)
  }

  function l(u) {
    var c;
    for (u = u || []; c = h();) c !== !1 && u.push(c);
    return u
  }

  function h() {
    var u = i();
    if (!(F != t.charAt(0) || U != t.charAt(1))) {
      for (var c = 2; g != t.charAt(c) && (U != t.charAt(c) || F != t.charAt(c + 1));) ++c;
      if (c += 2, g === t.charAt(c - 1)) return a("End of comment missing");
      var p = t.slice(2, c - 2);
      return r += 2, o(p), t = t.slice(c), r += 2, u({
        type: It,
        comment: p
      })
    }
  }

  function E() {
    var u = i(),
      c = f(vt);
    if (c) {
      if (h(), !f(St)) return a("property missing ':'");
      var p = f(Tt),
        Q = u({
          type: Pt,
          property: B(c[0].replace(C, g)),
          value: p ? B(p[0].replace(C, g)) : g
        });
      return f(At), Q
    }
  }

  function w() {
    var u = [];
    l(u);
    for (var c; c = E();) c !== !1 && (u.push(c), l(u));
    return u
  }
  return d(), w()
}

function B(t) {
  return t ? t.replace(_t, g) : g
}

function Ot(t, e) {
  let n = null;
  if (!t || typeof t != "string") return n;
  const r = Rt(t),
    o = typeof e == "function";
  return r.forEach(i => {
    if (i.type !== "declaration") return;
    const {
      property: s,
      value: a
    } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a)
  }), n
}
const kt = /\d/,
  Nt = ["-", "_", "/", "."];

function Lt(t = "") {
  if (!kt.test(t)) return t !== t.toLowerCase()
}

function Mt(t) {
  const e = [];
  let n = "",
    r, o;
  for (const i of t) {
    const s = Nt.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue
    }
    const a = Lt(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        e.push(n), n = i, r = a;
        continue
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const f = n.at(-1);
        e.push(n.slice(0, Math.max(0, n.length - 1))), n = f + i, r = a;
        continue
      }
    }
    n += i, r = a, o = s
  }
  return e.push(n), e
}

function z(t) {
  return t ? Mt(t).map(e => Wt(e)).join("") : ""
}

function Dt(t) {
  return $t(z(t || ""))
}

function Wt(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : ""
}

function $t(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : ""
}

function R(t) {
  if (!t) return {};
  const e = {};

  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[z(r)] = o;
      return
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return
    }
    e[Dt(r)] = o
  }
  return Ot(t, n), e
}

function jt(...t) {
  return (...e) => {
    for (const n of t) typeof n == "function" && n(...e)
  }
}

function Vt(t, e) {
  const n = RegExp(t, "g");
  return r => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r
  }
}
const Ct = Vt(/[A-Z]/, t => `-${t.toLowerCase()}`);

function Ft(t) {
  if (!t || typeof t != "object" || Array.isArray(t)) throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map(e => `${Ct(e)}: ${t[e]};`).join(`
`)
}

function Ut(t = {}) {
  return Ft(t).replace(`
`, " ")
}
const Bt = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Gt = new Set(Bt);

function Ht(t) {
  return Gt.has(t)
}

function ge(...t) {
  const e = {
    ...t[0]
  };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o],
          s = r[o],
          a = typeof i == "function",
          f = typeof s == "function";
        if (a && Ht(o)) {
          const d = i,
            l = s;
          e[o] = Et(d, l)
        } else if (a && f) e[o] = jt(i, s);
        else if (o === "class") {
          const d = L(i),
            l = L(s);
          d && l ? e[o] = N(i, s) : d ? e[o] = N(i) : l && (e[o] = N(s))
        } else if (o === "style") {
          const d = typeof i == "object",
            l = typeof s == "object",
            h = typeof i == "string",
            E = typeof s == "string";
          if (d && l) e[o] = {
            ...i,
            ...s
          };
          else if (d && E) {
            const w = R(s);
            e[o] = {
              ...i,
              ...w
            }
          } else if (h && l) {
            const w = R(i);
            e[o] = {
              ...w,
              ...s
            }
          } else if (h && E) {
            const w = R(i),
              u = R(s);
            e[o] = {
              ...w,
              ...u
            }
          } else d ? e[o] = i : l ? e[o] = s : h ? e[o] = i : E && (e[o] = s)
        } else e[o] = s !== void 0 ? s : i
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o],
          s = r[o];
        e[o] = s !== void 0 ? s : i
      }
    }
  }
  return typeof e.style == "object" && (e.style = Ut(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e
}
const Xt = typeof window < "u" ? window : void 0;

function qt(t) {
  let e = t.activeElement;
  for (; e != null && e.shadowRoot;) {
    const n = e.shadowRoot.activeElement;
    if (n === e) break;
    e = n
  }
  return e
}
var v, A;
class Yt {
  constructor(e = {}) {
    b(this, v);
    b(this, A);
    const {
      window: n = Xt,
      document: r = n == null ? void 0 : n.document
    } = e;
    n !== void 0 && (T(this, v, r), T(this, A, lt(o => {
      const i = V(n, "focusin", o),
        s = V(n, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var e;
    return (e = y(this, A)) == null || e.call(this), y(this, v) ? qt(y(this, v)) : null
  }
}
v = new WeakMap, A = new WeakMap;
new Yt;

function zt(t, e) {
  switch (t) {
    case "post":
      ft(e);
      break;
    case "pre":
      at(e);
      break
  }
}

function K(t, e, n, r = {}) {
  const {
    lazy: o = !1
  } = r;
  let i = !o,
    s = Array.isArray(t) ? [] : void 0;
  zt(e, () => {
    const a = Array.isArray(t) ? t.map(d => d()) : t();
    if (!i) {
      i = !0, s = a;
      return
    }
    const f = O(() => n(a, s));
    return s = a, f
  })
}

function Kt(t, e, n) {
  K(t, "post", e, n)
}

function Zt(t, e, n) {
  K(t, "pre", e, n)
}
Kt.pre = Zt;
const Jt = 1,
  Qt = 9,
  te = 11;

function M(t) {
  return P(t) && t.nodeType === Jt && typeof t.nodeName == "string"
}

function Z(t) {
  return P(t) && t.nodeType === Qt
}

function ee(t) {
  var e;
  return P(t) && ((e = t.constructor) == null ? void 0 : e.name) === "VisualViewport"
}

function ne(t) {
  return P(t) && t.nodeType !== void 0
}

function J(t) {
  return ne(t) && t.nodeType === te && "host" in t
}

function be(t, e) {
  var r;
  if (!t || !e || !M(t) || !M(e)) return !1;
  const n = (r = e.getRootNode) == null ? void 0 : r.call(e);
  if (t === e || t.contains(e)) return !0;
  if (n && J(n)) {
    let o = e;
    for (; o;) {
      if (t === o) return !0;
      o = o.parentNode || o.host
    }
  }
  return !1
}

function re(t) {
  return Z(t) ? t : ee(t) ? t.document : (t == null ? void 0 : t.ownerDocument) ?? document
}

function oe(t) {
  var e;
  return J(t) ? oe(t.host) : Z(t) ? t.defaultView ?? window : M(t) ? ((e = t.ownerDocument) == null ? void 0 : e.defaultView) ?? window : window
}

function ie(t) {
  let e = t.activeElement;
  for (; e != null && e.shadowRoot;) {
    const n = e.shadowRoot.activeElement;
    if (n === e) break;
    e = n
  }
  return e
}
var _;
class ve {
  constructor(e) {
    m(this, "element");
    b(this, _, H(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    m(this, "getDocument", () => re(this.root));
    m(this, "getWindow", () => this.getDocument().defaultView ?? window);
    m(this, "getActiveElement", () => ie(this.root));
    m(this, "isActiveElement", e => e === this.getActiveElement());
    m(this, "querySelector", e => this.root ? this.root.querySelector(e) : null);
    m(this, "querySelectorAll", e => this.root ? this.root.querySelectorAll(e) : []);
    m(this, "setTimeout", (e, n) => this.getWindow().setTimeout(e, n));
    m(this, "clearTimeout", e => this.getWindow().clearTimeout(e));
    typeof e == "function" ? this.element = q(e) : this.element = e
  }
  get root() {
    return D(y(this, _))
  }
  set root(e) {
    G(y(this, _), e)
  }
  getElementById(e) {
    return this.root.getElementById(e)
  }
}
_ = new WeakMap;

function Se(t, e) {
  return {
    [dt()]: n => Y(t) ? (t.current = n, O(() => e == null ? void 0 : e(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e == null || e(null))
    }) : (t(n), O(() => e == null ? void 0 : e(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e == null || e(null))
    })
  }
}

function Te(t) {
  return t ? "true" : "false"
}

function Ae(t) {
  return t ? "" : void 0
}

function _e(t) {
  return t ? !0 : void 0
}

function xe(t) {
  return t ? "open" : "closed"
}

function Ie(t) {
  return t === "starting" ? {
    "data-starting-style": ""
  } : t === "ending" ? {
    "data-ending-style": ""
  } : {}
}
var S, x;
class se {
  constructor(e) {
    b(this, S);
    b(this, x);
    m(this, "attrs");
    T(this, S, e.getVariant ? e.getVariant() : null), T(this, x, y(this, S) ? `data-${y(this,S)}-` : `data-${e.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map(n => [n, this.getAttr(n)]))
  }
  getAttr(e, n) {
    return n ? `data-${n}-${e}` : `${y(this,x)}${e}`
  }
  selector(e, n) {
    return `[${this.getAttr(e,n)}]`
  }
}
S = new WeakMap, x = new WeakMap;

function Pe(t) {
  const e = new se(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  }
}

function Re() {}

function Oe(t, e) {
  return `bits-${t}`
}

function ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function Ne(t, {
  interval: e,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now();
  const o = () => typeof document > "u" || document.visibilityState === "visible";
  async function i() {
    const d = r;
    try {
      r = Date.now(), await t()
    } catch (l) {
      console.error(l), r = d
    }
  }
  const s = setInterval(() => {
    o() && i()
  }, e);
  n && i();
  async function a() {
    Date.now() - r >= e && await i()
  }
  const f = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => a(), {
    signal: f.signal
  }), document.addEventListener("resume", () => a(), {
    signal: f.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => a(), {
    signal: f.signal
  }), window.addEventListener("focus", () => a(), {
    signal: f.signal
  }), window.addEventListener("online", () => a(), {
    signal: f.signal
  }), window.addEventListener("wplace:online", () => a(), {
    signal: f.signal
  })), () => {
    clearInterval(s), f.abort()
  }
}
export {
  Ie as A, me as B, he as C, ve as D, de as E, we as F, le as a, Se as b, _e as c, Pe as d, Oe as e, q as f, oe as g, ke as h, Ne as i, ye as j, pe as k, Ut as l, ge as m, Re as n, Xt as o, re as p, jt as q, Et as r, ht as s, be as t, Ee as u, R as v, Kt as w, Te as x, Ae as y, xe as z
};