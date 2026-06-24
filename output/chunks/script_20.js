var X = Object.defineProperty;
var O = e => {
  throw TypeError(e)
};
var D = (e, t, n) => t in e ? X(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var $ = (e, t, n) => D(e, typeof t != "symbol" ? t + "" : t, n),
  j = (e, t, n) => t.has(e) || O("Cannot " + n);
var h = (e, t, n) => (j(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  E = (e, t, n) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  S = (e, t, n, r) => (j(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import {
  bw as Y,
  m as K,
  B as k,
  S as z,
  at as q,
  bJ as J,
  i as C,
  e as Z,
  g as Q,
  h as ee,
  u as te,
  bI as M,
  aE as ne,
  y as re
} from "./CxLQz1V2.js";
import {
  h as _
} from "./0rgL9IxG.js";
import {
  c as oe
} from "./CMG3kxXu.js";

function ie() {
  return Symbol(Y)
}

function Ke(e, t, n) {
  K(() => {
    var r = k(() => t(e, n == null ? void 0 : n()) || {});
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
let L;

function ze(e) {
  return L = e, P({
    type: "previewPixels",
    data: e
  })
}

function qe() {
  return L = void 0, P({
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
  L || await P({
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
      const s = f => {
        var l;
        ((l = f.data) == null ? void 0 : l.id) === t && (r(void 0), i.removeEventListener("message", s))
      };
      i.addEventListener("message", s);
      const c = navigator.serviceWorker.controller;
      c ? c.postMessage(n) : navigator.serviceWorker.ready.then(f => {
        const l = f.active;
        l ? l == null || l.postMessage(n) : o(new Error("Service worker registration not active"))
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
const ae = ["string", "number", "bigint", "boolean"];

function R(e) {
  return e == null || ae.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(t => R(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1
}
const x = Symbol("box"),
  F = Symbol("is-writable");

function tt(e, t) {
  const n = te(e);
  return t ? {
    [x]: !0,
    [F]: !0,
    get current() {
      return C(n)
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

function ce(e) {
  return se(e) && x in e
}

function nt(e) {
  let t = Z(Q(e));
  return {
    [x]: !0,
    [F]: !0,
    get current() {
      return C(t)
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
  de = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  pe = /^:\s*/,
  me = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  he = /^[;\s]*/,
  be = /^\s+|\s+$/g,
  we = `
`,
  N = "/",
  V = "*",
  b = "",
  ye = "comment",
  ve = "declaration";

function ge(e, t) {
  if (typeof e != "string") throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function o(u) {
    var a = u.match(fe);
    a && (n += a.length);
    var p = u.lastIndexOf(we);
    r = ~p ? u.length - p : r + u.length
  }

  function i() {
    var u = {
      line: n,
      column: r
    };
    return function(a) {
      return a.position = new s(u), l(), a
    }
  }

  function s(u) {
    this.start = u, this.end = {
      line: n,
      column: r
    }, this.source = t.source
  }
  s.prototype.content = e;

  function c(u) {
    var a = new Error(t.source + ":" + n + ":" + r + ": " + u);
    if (a.reason = u, a.filename = t.source, a.line = n, a.column = r, a.source = e, !t.silent) throw a
  }

  function f(u) {
    var a = u.exec(e);
    if (a) {
      var p = a[0];
      return o(p), e = e.slice(p.length), a
    }
  }

  function l() {
    f(le)
  }

  function d(u) {
    var a;
    for (u = u || []; a = w();) a !== !1 && u.push(a);
    return u
  }

  function w() {
    var u = i();
    if (!(N != e.charAt(0) || V != e.charAt(1))) {
      for (var a = 2; b != e.charAt(a) && (V != e.charAt(a) || N != e.charAt(a + 1));) ++a;
      if (a += 2, b === e.charAt(a - 1)) return c("End of comment missing");
      var p = e.slice(2, a - 2);
      return r += 2, o(p), e = e.slice(a), r += 2, u({
        type: ye,
        comment: p
      })
    }
  }

  function g() {
    var u = i(),
      a = f(de);
    if (a) {
      if (w(), !f(pe)) return c("property missing ':'");
      var p = f(me),
        H = u({
          type: ve,
          property: B(a[0].replace(W, b)),
          value: p ? B(p[0].replace(W, b)) : b
        });
      return f(he), H
    }
  }

  function m() {
    var u = [];
    d(u);
    for (var a; a = g();) a !== !1 && (u.push(a), d(u));
    return u
  }
  return l(), m()
}

function B(e) {
  return e ? e.replace(be, b) : b
}

function Ee(e, t) {
  let n = null;
  if (!e || typeof e != "string") return n;
  const r = ge(e),
    o = typeof t == "function";
  return r.forEach(i => {
    if (i.type !== "declaration") return;
    const {
      property: s,
      value: c
    } = i;
    o ? t(s, c, i) : c && (n = n || {}, n[s] = c)
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
    const c = Te(i);
    if (o === !1) {
      if (r === !1 && c === !0) {
        t.push(n), n = i, r = c;
        continue
      }
      if (r === !0 && c === !1 && n.length > 1) {
        const f = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = f + i, r = c;
        continue
      }
    }
    n += i, r = c, o = s
  }
  return t.push(n), t
}

function G(e) {
  return e ? Pe(e).map(t => ke(t)).join("") : ""
}

function Ie(e) {
  return xe(G(e || ""))
}

function ke(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ""
}

function xe(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ""
}

function I(e) {
  if (!e) return {};
  const t = {};

  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[G(r)] = o;
      return
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return
    }
    t[Ie(r)] = o
  }
  return Ee(e, n), t
}

function _e(...e) {
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
const Le = Re(/[A-Z]/, e => `-${e.toLowerCase()}`);

function Oe(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${Le(t)}: ${e[t]};`).join(`
`)
}

function $e(e = {}) {
  return Oe(e).replace(`
`, " ")
}
const je = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Me = new Set(je);

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
          c = typeof i == "function",
          f = typeof s == "function";
        if (c && We(o)) {
          const l = i,
            d = s;
          t[o] = ue(l, d)
        } else if (c && f) t[o] = _e(i, s);
        else if (o === "class") {
          const l = R(i),
            d = R(s);
          l && d ? t[o] = _(i, s) : l ? t[o] = _(i) : d && (t[o] = _(s))
        } else if (o === "style") {
          const l = typeof i == "object",
            d = typeof s == "object",
            w = typeof i == "string",
            g = typeof s == "string";
          if (l && d) t[o] = {
            ...i,
            ...s
          };
          else if (l && g) {
            const m = I(s);
            t[o] = {
              ...i,
              ...m
            }
          } else if (w && d) {
            const m = I(i);
            t[o] = {
              ...m,
              ...s
            }
          } else if (w && g) {
            const m = I(i),
              u = I(s);
            t[o] = {
              ...m,
              ...u
            }
          } else l ? t[o] = i : d ? t[o] = s : w ? t[o] = i : g && (t[o] = s)
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
var y, A;
class Be {
  constructor(t = {}) {
    E(this, y);
    E(this, A);
    const {
      window: n = Ne,
      document: r = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (S(this, y, r), S(this, A, oe(o => {
      const i = M(n, "focusin", o),
        s = M(n, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = h(this, A)) == null || t.call(this), h(this, y) ? Ve(h(this, y)) : null
  }
}
y = new WeakMap, A = new WeakMap;
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

function U(e, t, n, r = {}) {
  const {
    lazy: o = !1
  } = r;
  let i = !o,
    s = Array.isArray(e) ? [] : void 0;
  Ce(t, () => {
    const c = Array.isArray(e) ? e.map(l => l()) : e();
    if (!i) {
      i = !0, s = c;
      return
    }
    const f = k(() => n(c, s));
    return s = c, f
  })
}

function Fe(e, t, n) {
  U(e, "post", t, n)
}

function Ge(e, t, n) {
  U(e, "pre", t, n)
}
Fe.pre = Ge;

function ot(e, t) {
  return {
    [ie()]: n => ce(e) ? (e.current = n, k(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), k(() => t == null ? void 0 : t(n)), () => {
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

function at(e) {
  return e ? !0 : void 0
}
var v, T;
class Ue {
  constructor(t) {
    E(this, v);
    E(this, T);
    $(this, "attrs");
    S(this, v, t.getVariant ? t.getVariant() : null), S(this, T, h(this, v) ? `data-${h(this,v)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map(n => [n, this.getAttr(n)]))
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${h(this,T)}${t}`
  }
  selector(t, n) {
    return `[${this.getAttr(t,n)}]`
  }
}
v = new WeakMap, T = new WeakMap;

function ct(e) {
  const t = new Ue(e);
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

function dt(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now();
  const o = () => typeof document > "u" || document.visibilityState === "visible";
  async function i() {
    const l = r;
    try {
      r = Date.now(), await e()
    } catch (d) {
      console.error(d), r = l
    }
  }
  const s = setInterval(() => {
    o() && i()
  }, t);
  n && i();
  async function c() {
    Date.now() - r >= t && await i()
  }
  const f = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => c(), {
    signal: f.signal
  }), document.addEventListener("resume", () => c(), {
    signal: f.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => c(), {
    signal: f.signal
  }), window.addEventListener("focus", () => c(), {
    signal: f.signal
  }), window.addEventListener("online", () => c(), {
    signal: f.signal
  }), window.addEventListener("wplace:online", () => c(), {
    signal: f.signal
  })), () => {
    clearInterval(s), f.abort()
  }
}
export {
  Ke as a, tt as b, ot as c, at as d, ct as e, ft as f, lt as g, dt as h, se as i, Qe as j, qe as k, $e as l, rt as m, ut as n, it as o, st as p, Je as q, et as r, nt as s, ze as t, Ze as u, Fe as w
};