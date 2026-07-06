var K = Object.defineProperty;
var N = e => {
  throw TypeError(e)
};
var J = (e, t, n) => t in e ? K(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var W = (e, t, n) => J(e, typeof t != "symbol" ? t + "" : t, n),
  B = (e, t, n) => t.has(e) || N("Cannot " + n);
var b = (e, t, n) => (B(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  A = (e, t, n) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  T = (e, t, n, r) => (B(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import {
  bw as Z,
  m as Q,
  D as _,
  U as ee,
  aI as te,
  bI as ne,
  i as G,
  e as re,
  g as oe,
  h as ie,
  u as se,
  bJ as V,
  aF as ae,
  A as ce
} from "./Dkgr_Dbt.js";
import {
  j as O
} from "./CfjQLVhL.js";
import {
  c as ue
} from "./DbffVGnc.js";

function le() {
  return Symbol(Z)
}

function tt(e, t, n) {
  Q(() => {
    var r = _(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1,
        o = {};
      ee(() => {
        var s = n();
        te(s), i && ne(o, s) && (o = s, r.update(s))
      }), i = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
const fe = "wplace-templates",
  de = 1,
  y = "images",
  L = new Set;

function nt(e) {
  return L.add(e), () => L.delete(e)
}

function H(e) {
  for (const t of L) try {
    t(e)
  } catch (n) {
    console.error("Template blob change listener failed.", n)
  }
}
let w = null;

function M() {
  return w || (w = new Promise((e, t) => {
    const n = indexedDB.open(fe, de);
    n.onupgradeneeded = () => {
      n.result.createObjectStore(y)
    }, n.onsuccess = () => {
      const r = n.result;
      r.onclose = () => {
        w = null
      }, r.onversionchange = () => {
        r.close(), w = null
      }, e(r)
    }, n.onerror = () => {
      w = null, t(n.error)
    }
  }), w)
}
async function rt(e, t, n = "local") {
  const r = await M();
  await new Promise((i, o) => {
    const s = r.transaction(y, "readwrite");
    s.objectStore(y).put(t, e), s.oncomplete = () => i(), s.onerror = () => o(s.error)
  }), H({
    kind: "save",
    id: e,
    origin: n
  })
}
async function ot(e) {
  const t = await M();
  return new Promise((n, r) => {
    const o = t.transaction(y, "readonly").objectStore(y).get(e);
    o.onsuccess = () => n(o.result ?? void 0), o.onerror = () => r(o.error)
  })
}
async function it() {
  var e;
  if (!((e = navigator.storage) != null && e.persist)) return !1;
  try {
    return await navigator.storage.persisted() || await navigator.storage.persist()
  } catch {
    return !1
  }
}
async function st(e, t = "local") {
  const n = await M();
  await new Promise((r, i) => {
    const o = n.transaction(y, "readwrite");
    o.objectStore(y).delete(e), o.oncomplete = () => r(), o.onerror = () => i(o.error)
  }), H({
    kind: "delete",
    id: e,
    origin: t
  })
}
let $;

function at(e) {
  return $ = e, I({
    type: "previewPixels",
    data: e
  })
}

function ct() {
  return $ = void 0, I({
    type: "clearPixelPreview"
  })
}

function ut(e) {
  return I({
    type: "paintPixels",
    data: e
  })
}

function lt() {
  return I({
    type: "refreshPixelArt"
  })
}
async function ft() {
  $ || await I({
    type: "clearPixelPreview"
  })
}

function I(e) {
  const t = Math.random(),
    n = {
      ...e,
      id: t
    };
  return new Promise((r, i) => {
    try {
      const o = navigator.serviceWorker;
      o || i(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      const s = l => {
        var f;
        ((f = l.data) == null ? void 0 : f.id) === t && (r(void 0), o.removeEventListener("message", s))
      };
      o.addEventListener("message", s);
      const c = navigator.serviceWorker.controller;
      c ? c.postMessage(n) : navigator.serviceWorker.ready.then(l => {
        const f = l.active;
        f ? f == null || f.postMessage(n) : i(new Error("Service worker registration not active"))
      })
    } catch (o) {
      i(o)
    }
  })
}

function dt({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}

function pe(e) {
  return e !== null && typeof e == "object"
}
const me = ["string", "number", "bigint", "boolean"];

function j(e) {
  return e == null || me.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(t => j(t)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1
}
const R = Symbol("box"),
  X = Symbol("is-writable");

function pt(e, t) {
  const n = se(e);
  return t ? {
    [R]: !0,
    [X]: !0,
    get current() {
      return G(n)
    },
    set current(r) {
      t(r)
    }
  } : {
    [R]: !0,
    get current() {
      return e()
    }
  }
}

function be(e) {
  return pe(e) && R in e
}

function mt(e) {
  let t = re(oe(e));
  return {
    [R]: !0,
    [X]: !0,
    get current() {
      return G(t)
    },
    set current(n) {
      ie(t, n, !0)
    }
  }
}

function we(...e) {
  return function(t) {
    var n;
    for (const r of e)
      if (r) {
        if (t.defaultPrevented) return;
        typeof r == "function" ? r.call(this, t) : (n = r.current) == null || n.call(this, t)
      }
  }
}
var C = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  he = /\n/g,
  ye = /^\s*/,
  ve = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  ge = /^:\s*/,
  Ee = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Se = /^[;\s]*/,
  Ae = /^\s+|\s+$/g,
  Te = `
`,
  D = "/",
  F = "*",
  h = "",
  Pe = "comment",
  xe = "declaration";

function Ie(e, t) {
  if (typeof e != "string") throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function i(u) {
    var a = u.match(he);
    a && (n += a.length);
    var p = u.lastIndexOf(Te);
    r = ~p ? u.length - p : r + u.length
  }

  function o() {
    var u = {
      line: n,
      column: r
    };
    return function(a) {
      return a.position = new s(u), f(), a
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

  function l(u) {
    var a = u.exec(e);
    if (a) {
      var p = a[0];
      return i(p), e = e.slice(p.length), a
    }
  }

  function f() {
    l(ye)
  }

  function d(u) {
    var a;
    for (u = u || []; a = v();) a !== !1 && u.push(a);
    return u
  }

  function v() {
    var u = o();
    if (!(D != e.charAt(0) || F != e.charAt(1))) {
      for (var a = 2; h != e.charAt(a) && (F != e.charAt(a) || D != e.charAt(a + 1));) ++a;
      if (a += 2, h === e.charAt(a - 1)) return c("End of comment missing");
      var p = e.slice(2, a - 2);
      return r += 2, i(p), e = e.slice(a), r += 2, u({
        type: Pe,
        comment: p
      })
    }
  }

  function S() {
    var u = o(),
      a = l(ve);
    if (a) {
      if (v(), !l(ge)) return c("property missing ':'");
      var p = l(Ee),
        z = u({
          type: xe,
          property: U(a[0].replace(C, h)),
          value: p ? U(p[0].replace(C, h)) : h
        });
      return l(Se), z
    }
  }

  function m() {
    var u = [];
    d(u);
    for (var a; a = S();) a !== !1 && (u.push(a), d(u));
    return u
  }
  return f(), m()
}

function U(e) {
  return e ? e.replace(Ae, h) : h
}

function ke(e, t) {
  let n = null;
  if (!e || typeof e != "string") return n;
  const r = Ie(e),
    i = typeof t == "function";
  return r.forEach(o => {
    if (o.type !== "declaration") return;
    const {
      property: s,
      value: c
    } = o;
    i ? t(s, c, o) : c && (n = n || {}, n[s] = c)
  }), n
}
const _e = /\d/,
  Re = ["-", "_", "/", "."];

function Oe(e = "") {
  if (!_e.test(e)) return e !== e.toLowerCase()
}

function Le(e) {
  const t = [];
  let n = "",
    r, i;
  for (const o of e) {
    const s = Re.includes(o);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue
    }
    const c = Oe(o);
    if (i === !1) {
      if (r === !1 && c === !0) {
        t.push(n), n = o, r = c;
        continue
      }
      if (r === !0 && c === !1 && n.length > 1) {
        const l = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = l + o, r = c;
        continue
      }
    }
    n += o, r = c, i = s
  }
  return t.push(n), t
}

function Y(e) {
  return e ? Le(e).map(t => Me(t)).join("") : ""
}

function je(e) {
  return $e(Y(e || ""))
}

function Me(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ""
}

function $e(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ""
}

function k(e) {
  if (!e) return {};
  const t = {};

  function n(r, i) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[Y(r)] = i;
      return
    }
    if (r.startsWith("--")) {
      t[r] = i;
      return
    }
    t[je(r)] = i
  }
  return ke(e, n), t
}

function Ne(...e) {
  return (...t) => {
    for (const n of e) typeof n == "function" && n(...t)
  }
}

function We(e, t) {
  const n = RegExp(e, "g");
  return r => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r
  }
}
const Be = We(/[A-Z]/, e => `-${e.toLowerCase()}`);

function Ve(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${Be(t)}: ${e[t]};`).join(`
`)
}

function Ce(e = {}) {
  return Ve(e).replace(`
`, " ")
}
const De = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Fe = new Set(De);

function Ue(e) {
  return Fe.has(e)
}

function bt(...e) {
  const t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    if (r) {
      for (const i of Object.keys(r)) {
        const o = t[i],
          s = r[i],
          c = typeof o == "function",
          l = typeof s == "function";
        if (c && Ue(i)) {
          const f = o,
            d = s;
          t[i] = we(f, d)
        } else if (c && l) t[i] = Ne(o, s);
        else if (i === "class") {
          const f = j(o),
            d = j(s);
          f && d ? t[i] = O(o, s) : f ? t[i] = O(o) : d && (t[i] = O(s))
        } else if (i === "style") {
          const f = typeof o == "object",
            d = typeof s == "object",
            v = typeof o == "string",
            S = typeof s == "string";
          if (f && d) t[i] = {
            ...o,
            ...s
          };
          else if (f && S) {
            const m = k(s);
            t[i] = {
              ...o,
              ...m
            }
          } else if (v && d) {
            const m = k(o);
            t[i] = {
              ...m,
              ...s
            }
          } else if (v && S) {
            const m = k(o),
              u = k(s);
            t[i] = {
              ...m,
              ...u
            }
          } else f ? t[i] = o : d ? t[i] = s : v ? t[i] = o : S && (t[i] = s)
        } else t[i] = s !== void 0 ? s : o
      }
      for (const i of Object.getOwnPropertySymbols(r)) {
        const o = t[i],
          s = r[i];
        t[i] = s !== void 0 ? s : o
      }
    }
  }
  return typeof t.style == "object" && (t.style = Ce(t.style).replaceAll(`
`, " ")), t.hidden === !1 && (t.hidden = void 0, delete t.hidden), t.disabled === !1 && (t.disabled = void 0, delete t.disabled), t
}
const Ge = typeof window < "u" ? window : void 0;

function He(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n
  }
  return t
}
var g, P;
class Xe {
  constructor(t = {}) {
    A(this, g);
    A(this, P);
    const {
      window: n = Ge,
      document: r = n == null ? void 0 : n.document
    } = t;
    n !== void 0 && (T(this, g, r), T(this, P, ue(i => {
      const o = V(n, "focusin", i),
        s = V(n, "focusout", i);
      return () => {
        o(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = b(this, P)) == null || t.call(this), b(this, g) ? He(b(this, g)) : null
  }
}
g = new WeakMap, P = new WeakMap;
new Xe;

function Ye(e, t) {
  switch (e) {
    case "post":
      ce(t);
      break;
    case "pre":
      ae(t);
      break
  }
}

function q(e, t, n, r = {}) {
  const {
    lazy: i = !1
  } = r;
  let o = !i,
    s = Array.isArray(e) ? [] : void 0;
  Ye(t, () => {
    const c = Array.isArray(e) ? e.map(f => f()) : e();
    if (!o) {
      o = !0, s = c;
      return
    }
    const l = _(() => n(c, s));
    return s = c, l
  })
}

function qe(e, t, n) {
  q(e, "post", t, n)
}

function ze(e, t, n) {
  q(e, "pre", t, n)
}
qe.pre = ze;

function wt(e, t) {
  return {
    [le()]: n => be(e) ? (e.current = n, _(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), _(() => t == null ? void 0 : t(n)), () => {
      "isConnected" in n && n.isConnected || (e(null), t == null || t(null))
    })
  }
}

function ht(e) {
  return e ? "true" : "false"
}

function yt(e) {
  return e ? "" : void 0
}

function vt(e) {
  return e ? !0 : void 0
}
var E, x;
class Ke {
  constructor(t) {
    A(this, E);
    A(this, x);
    W(this, "attrs");
    T(this, E, t.getVariant ? t.getVariant() : null), T(this, x, b(this, E) ? `data-${b(this,E)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map(n => [n, this.getAttr(n)]))
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${b(this,x)}${t}`
  }
  selector(t, n) {
    return `[${this.getAttr(t,n)}]`
  }
}
E = new WeakMap, x = new WeakMap;

function gt(e) {
  const t = new Ke(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  }
}

function Et() {}

function St(e, t) {
  return `bits-${e}`
}

function At(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Tt(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now();
  const i = () => typeof document > "u" || document.visibilityState === "visible";
  async function o() {
    const f = r;
    try {
      r = Date.now(), await e()
    } catch (d) {
      console.error(d), r = f
    }
  }
  const s = setInterval(() => {
    i() && o()
  }, t);
  n && o();
  async function c() {
    Date.now() - r >= t && await o()
  }
  const l = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => c(), {
    signal: l.signal
  }), document.addEventListener("resume", () => c(), {
    signal: l.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => c(), {
    signal: l.signal
  }), window.addEventListener("focus", () => c(), {
    signal: l.signal
  }), window.addEventListener("online", () => c(), {
    signal: l.signal
  }), window.addEventListener("wplace:online", () => c(), {
    signal: l.signal
  })), () => {
    clearInterval(s), l.abort()
  }
}
export {
  lt as A, tt as a, pt as b, wt as c, vt as d, gt as e, St as f, At as g, Tt as h, pe as i, ft as j, ct as k, Ce as l, bt as m, Et as n, ht as o, yt as p, nt as q, it as r, mt as s, ot as t, rt as u, st as v, qe as w, ut as x, dt as y, at as z
};