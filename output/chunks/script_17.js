import {
  A as e,
  Bt as t,
  Dt as n,
  Ft as r,
  It as i,
  Kt as a,
  Pt as o,
  Rt as s,
  Xt as c,
  bt as l,
  ct as u,
  ft as d,
  in as f,
  it as p,
  jt as ee,
  kt as m,
  ot as te,
  qt as ne,
  yt as re
} from "./D6uuD926.js";
import "./B4y8X1vy.js";
var h = void 0;

function ie(e) {
  return h = e, g({
    type: `previewPixels`,
    data: e
  })
}

function ae() {
  return h = void 0, g({
    type: `clearPixelPreview`
  })
}

function oe(e) {
  return g({
    type: `paintPixels`,
    data: e
  })
}

function se() {
  return g({
    type: `refreshPixelArt`
  })
}
async function ce() {
  h || await g({
    type: `clearPixelPreview`
  })
}
var le = 1e4,
  ue = 0;

function g(e) {
  let t = ue++,
    n = {
      ...e,
      id: t
    };
  return new Promise((e, r) => {
    let i = navigator.serviceWorker;
    if (!i) {
      r(Error(`Service Workers are not supported/enabled in your browser. Some features might not work properly.`));
      return
    }
    let a = !1,
      o = e => {
        var n;
        ((n = e.data) == null ? void 0 : n.id) === t && c()
      },
      s = () => {
        clearTimeout(u), i.removeEventListener(`message`, o)
      },
      c = () => {
        a || (a = !0, s(), e())
      },
      l = e => {
        a || (a = !0, s(), r(e))
      },
      u = setTimeout(() => l(Error(`Timed out waiting for service worker response`)), le);
    i.addEventListener(`message`, o);
    let d = e => {
        try {
          e.postMessage(n)
        } catch (e) {
          l(e instanceof Error ? e : Error(String(e)))
        }
      },
      f = i.controller;
    f ? d(f) : i.ready.then(e => {
      if (a) return;
      let t = e.active;
      t ? d(t) : l(Error(`Service worker registration not active`))
    }, e => l(e instanceof Error ? e : Error(String(e))))
  })
}

function de({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}

function fe(e) {
  return typeof e == `function`
}

function _(e) {
  return typeof e == `object` && !!e
}
var pe = [`string`, `number`, `bigint`, `boolean`];

function v(e) {
  return e == null || pe.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(e => v(e)) : typeof e == `object` && Object.getPrototypeOf(e) === Object.prototype
}
var y = Symbol(`box`),
  b = Symbol(`is-writable`);

function x(e, t) {
  let n = o(e);
  return t ? {
    [y]: !0,
    [b]: !0,
    get current() {
      return u(n)
    },
    set current(e) {
      t(e)
    }
  } : {
    [y]: !0,
    get current() {
      return e()
    }
  }
}

function S(e) {
  return _(e) && y in e
}

function me(e) {
  return S(e) ? e : fe(e) ? x(e) : C(e)
}

function C(e) {
  let t = ee(n(e));
  return {
    [y]: !0,
    [b]: !0,
    get current() {
      return u(t)
    },
    set current(e) {
      m(t, e, !0)
    }
  }
}

function w(...e) {
  return function(t) {
    for (let r of e)
      if (r) {
        if (t.defaultPrevented) return;
        if (typeof r == `function`) r.call(this, t);
        else {
          var n;
          (n = r.current) == null || n.call(this, t)
        }
      }
  }
}
var T = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  he = /\n/g,
  ge = /^\s*/,
  _e = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  ve = /^:\s*/,
  ye = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  be = /^[;\s]*/,
  xe = /^\s+|\s+$/g,
  Se = `
`,
  E = `/`,
  Ce = `*`,
  D = ``,
  we = `comment`,
  Te = `declaration`;

function Ee(e, t) {
  if (typeof e != `string`) throw TypeError(`First argument must be a string`);
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function i(e) {
    var t = e.match(he);
    t && (n += t.length);
    var i = e.lastIndexOf(Se);
    r = ~i ? e.length - i : r + e.length
  }

  function a() {
    var e = {
      line: n,
      column: r
    };
    return function(t) {
      return t.position = new o(e), l(), t
    }
  }

  function o(e) {
    this.start = e, this.end = {
      line: n,
      column: r
    }, this.source = t.source
  }
  o.prototype.content = e;

  function s(i) {
    var a = Error(t.source + `:` + n + `:` + r + `: ` + i);
    if (a.reason = i, a.filename = t.source, a.line = n, a.column = r, a.source = e, !t.silent) throw a
  }

  function c(t) {
    var n = t.exec(e);
    if (n) {
      var r = n[0];
      return i(r), e = e.slice(r.length), n
    }
  }

  function l() {
    c(ge)
  }

  function u(e) {
    var t;
    for (e = e || []; t = d();) t !== !1 && e.push(t);
    return e
  }

  function d() {
    var t = a();
    if (E == e.charAt(0) && Ce == e.charAt(1)) {
      for (var n = 2; D != e.charAt(n) && (Ce != e.charAt(n) || E != e.charAt(n + 1));) ++n;
      if (n += 2, D === e.charAt(n - 1)) return s(`End of comment missing`);
      var o = e.slice(2, n - 2);
      return r += 2, i(o), e = e.slice(n), r += 2, t({
        type: we,
        comment: o
      })
    }
  }

  function f() {
    var e = a(),
      t = c(_e);
    if (t) {
      if (d(), !c(ve)) return s(`property missing ':'`);
      var n = c(ye),
        r = e({
          type: Te,
          property: O(t[0].replace(T, D)),
          value: n ? O(n[0].replace(T, D)) : D
        });
      return c(be), r
    }
  }

  function p() {
    var e = [];
    u(e);
    for (var t; t = f();) t !== !1 && (e.push(t), u(e));
    return e
  }
  return l(), p()
}

function O(e) {
  return e ? e.replace(xe, D) : D
}

function De(e, t) {
  let n = null;
  if (!e || typeof e != `string`) return n;
  let r = Ee(e),
    i = typeof t == `function`;
  return r.forEach(e => {
    if (e.type !== `declaration`) return;
    let {
      property: r,
      value: a
    } = e;
    i ? t(r, a, e) : a && (n = n || {}, n[r] = a)
  }), n
}
var Oe = /\d/,
  ke = [`-`, `_`, `/`, `.`];

function Ae(e = ``) {
  if (!Oe.test(e)) return e !== e.toLowerCase()
}

function je(e) {
  let t = [],
    n = ``,
    r, i;
  for (let a of e) {
    let e = ke.includes(a);
    if (e === !0) {
      t.push(n), n = ``, r = void 0;
      continue
    }
    let o = Ae(a);
    if (i === !1) {
      if (r === !1 && o === !0) {
        t.push(n), n = a, r = o;
        continue
      }
      if (r === !0 && o === !1 && n.length > 1) {
        let e = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = e + a, r = o;
        continue
      }
    }
    n += a, r = o, i = e
  }
  return t.push(n), t
}

function k(e) {
  return e ? je(e).map(e => Ne(e)).join(``) : ``
}

function Me(e) {
  return Pe(k(e || ``))
}

function Ne(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ``
}

function Pe(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ``
}

function A(e) {
  if (!e) return {};
  let t = {};

  function n(e, n) {
    if (e.startsWith(`-moz-`) || e.startsWith(`-webkit-`) || e.startsWith(`-ms-`) || e.startsWith(`-o-`)) {
      t[k(e)] = n;
      return
    }
    if (e.startsWith(`--`)) {
      t[e] = n;
      return
    }
    t[Me(e)] = n
  }
  return De(e, n), t
}

function j(...e) {
  return (...t) => {
    for (let n of e) typeof n == `function` && n(...t)
  }
}

function Fe(e, t) {
  let n = RegExp(e, `g`);
  return e => {
    if (typeof e != `string`) throw TypeError(`expected an argument of type string, but got ${typeof e}`);
    return e.match(n) ? e.replace(n, t) : e
  }
}
var Ie = Fe(/[A-Z]/, e => `-${e.toLowerCase()}`);

function Le(e) {
  if (!e || typeof e != `object` || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${Ie(t)}: ${e[t]};`).join(`
`)
}

function M(e = {}) {
  return Le(e).replace(`
`, ` `)
}
var Re = new Set(`onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel`.split(`.`));

function ze(e) {
  return Re.has(e)
}

function Be(...t) {
  let n = {
    ...t[0]
  };
  for (let r = 1; r < t.length; r++) {
    let i = t[r];
    if (i) {
      for (let t of Object.keys(i)) {
        let r = n[t],
          a = i[t],
          o = typeof r == `function`,
          s = typeof a == `function`;
        if (o && typeof s && ze(t)) n[t] = w(r, a);
        else if (o && s) n[t] = j(r, a);
        else if (t === `class`) {
          let i = v(r),
            o = v(a);
          i && o ? n[t] = e(r, a) : i ? n[t] = e(r) : o && (n[t] = e(a))
        } else if (t === `style`) {
          let e = typeof r == `object`,
            i = typeof a == `object`,
            o = typeof r == `string`,
            s = typeof a == `string`;
          if (e && i) n[t] = {
            ...r,
            ...a
          };
          else if (e && s) {
            let e = A(a);
            n[t] = {
              ...r,
              ...e
            }
          } else if (o && i) n[t] = {
            ...A(r),
            ...a
          };
          else if (o && s) {
            let e = A(r),
              i = A(a);
            n[t] = {
              ...e,
              ...i
            }
          } else e ? n[t] = r : i ? n[t] = a : o ? n[t] = r : s && (n[t] = a)
        } else n[t] = a === void 0 ? r : a
      }
      for (let e of Object.getOwnPropertySymbols(i)) {
        let t = n[e],
          r = i[e];
        n[e] = r === void 0 ? t : r
      }
    }
  }
  return typeof n.style == `object` && (n.style = M(n.style).replaceAll(`
`, ` `)), n.hidden === !1 && (n.hidden = void 0, delete n.hidden), n.disabled === !1 && (n.disabled = void 0, delete n.disabled), n
}
var N = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function Ve(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var P = new WeakMap,
  F = new WeakMap;
new class {
  constructor(e = {}) {
    s(this, P, void 0), s(this, F, void 0);
    let {
      window: n = N,
      document: r = n == null ? void 0 : n.document
    } = e;
    n !== void 0 && (i(P, this, r), i(F, this, t(e => {
      let t = p(n, `focusin`, e),
        r = p(n, `focusout`, e);
      return () => {
        t(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = r(F, this)) == null || e.call(this), r(P, this) ? Ve(r(P, this)) : null
  }
};

function He(e) {
  return typeof e == `function`
}
var I = new WeakMap,
  L = new WeakMap,
  Ue = class {
    constructor(e) {
      s(this, I, void 0), s(this, L, void 0), i(I, this, e), i(L, this, Symbol(e))
    }
    get key() {
      return r(L, this)
    }
    exists() {
      return ne(r(L, this))
    }
    get() {
      let e = a(r(L, this));
      if (e === void 0) throw Error(`Context "${r(I,this)}" not found`);
      return e
    }
    getOr(e) {
      let t = a(r(L, this));
      return t === void 0 ? e : t
    }
    set(e) {
      return c(r(L, this), e)
    }
  };

function We(e, t) {
  switch (e) {
    case `post`:
      re(t);
      break;
    case `pre`:
      l(t)
  }
}

function R(e, t, n, r = {}) {
  let {
    lazy: i = !1
  } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
  We(t, () => {
    let t = Array.isArray(e) ? e.map(e => e()) : e();
    if (!a) {
      a = !0, o = t;
      return
    }
    let r = d(() => n(t, o));
    return o = t, r
  })
}

function z(e, t, n) {
  R(e, `post`, t, n)
}

function Ge(e, t, n) {
  R(e, `pre`, t, n)
}
z.pre = Ge;

function B(e) {
  return He(e) ? e() : e
}
var V = new WeakMap,
  H = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Ke = class {
    constructor(e, n = {
      box: `border-box`
    }) {
      s(this, V, {
        width: 0,
        height: 0
      }), s(this, H, !1), s(this, U, void 0), s(this, W, void 0), s(this, G, void 0), s(this, K, o(() => {
        var e;
        return (e = u(r(J, this))) == null || e(), this.getSize().width
      })), s(this, q, o(() => {
        var e;
        return (e = u(r(J, this))) == null || e(), this.getSize().height
      })), s(this, J, o(() => {
        let e = B(r(W, this));
        if (e) return t(t => {
          if (!r(G, this)) return;
          let n = new(r(G, this)).ResizeObserver(e => {
            i(H, this, !0);
            for (let t of e) {
              let e = r(U, this).box === `content-box` ? t.contentBoxSize : t.borderBoxSize,
                n = Array.isArray(e) ? e : [e];
              r(V, this).width = n.reduce((e, t) => Math.max(e, t.inlineSize), 0), r(V, this).height = n.reduce((e, t) => Math.max(e, t.blockSize), 0)
            }
            t()
          });
          return n.observe(e), () => {
            i(H, this, !1), n.disconnect()
          }
        })
      })), i(G, this, n.window ?? N), i(U, this, n), i(W, this, e), i(V, this, {
        width: 0,
        height: 0
      })
    }
    calculateSize() {
      let e = B(r(W, this));
      if (!e || !r(G, this)) return;
      let t = e.offsetWidth,
        n = e.offsetHeight;
      if (r(U, this).box === `border-box`) return {
        width: t,
        height: n
      };
      let i = r(G, this).getComputedStyle(e),
        a = parseFloat(i.paddingLeft) + parseFloat(i.paddingRight),
        o = parseFloat(i.paddingTop) + parseFloat(i.paddingBottom),
        s = parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth),
        c = parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth);
      return {
        width: t - a - s,
        height: n - o - c
      }
    }
    getSize() {
      return r(H, this) ? r(V, this) : this.calculateSize() ?? r(V, this)
    }
    get current() {
      var e;
      return (e = u(r(J, this))) == null || e(), this.getSize()
    }
    get width() {
      return u(r(K, this))
    }
    get height() {
      return u(r(q, this))
    }
  },
  Y = new WeakMap,
  qe = new WeakMap,
  Je = class {
    constructor(e, t) {
      s(this, Y, () => void 0), s(this, qe, o(() => r(Y, this).call(this)));
      let n;
      t !== void 0 && (n = t), i(Y, this, () => {
        try {
          return n
        } finally {
          n = e()
        }
      })
    }
    get current() {
      return u(r(qe, this))
    }
  },
  Ye = 1,
  Xe = 9,
  Ze = 11;

function X(e) {
  return _(e) && e.nodeType === Ye && typeof e.nodeName == `string`
}

function Qe(e) {
  return _(e) && e.nodeType === Xe
}

function $e(e) {
  var t;
  return _(e) && ((t = e.constructor) == null ? void 0 : t.name) === `VisualViewport`
}

function et(e) {
  return _(e) && e.nodeType !== void 0
}

function tt(e) {
  return et(e) && e.nodeType === Ze && `host` in e
}

function nt(e, t) {
  var n;
  if (!e || !t || !X(e) || !X(t)) return !1;
  let r = (n = t.getRootNode) == null ? void 0 : n.call(t);
  if (e === t || e.contains(t)) return !0;
  if (r && tt(r)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host
    }
  }
  return !1
}

function rt(e) {
  return Qe(e) ? e : $e(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document
}

function it(e) {
  var t;
  return tt(e) ? it(e.host) : Qe(e) ? e.defaultView ?? window : X(e) ? ((t = e.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function at(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var Z = new WeakMap,
  ot = class {
    get root() {
      return u(r(Z, this))
    }
    set root(e) {
      m(r(Z, this), e)
    }
    constructor(e) {
      f(this, `element`, void 0), s(this, Z, o(() => this.element.current ? this.element.current.getRootNode() ?? document : document)), f(this, `getDocument`, () => rt(this.root)), f(this, `getWindow`, () => this.getDocument().defaultView ?? window), f(this, `getActiveElement`, () => at(this.root)), f(this, `isActiveElement`, e => e === this.getActiveElement()), f(this, `querySelector`, e => this.root ? this.root.querySelector(e) : null), f(this, `querySelectorAll`, e => this.root ? this.root.querySelectorAll(e) : []), f(this, `setTimeout`, (e, t) => this.getWindow().setTimeout(e, t)), f(this, `clearTimeout`, e => this.getWindow().clearTimeout(e)), this.element = typeof e == `function` ? x(e) : e
    }
    getElementById(e) {
      return this.root.getElementById(e)
    }
  };

function st(e, t) {
  return {
    [te()]: n => S(e) ? (e.current = n, d(() => t == null ? void 0 : t(n)), () => {
      `isConnected` in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), d(() => t == null ? void 0 : t(n)), () => {
      `isConnected` in n && n.isConnected || (e(null), t == null || t(null))
    })
  }
}

function ct(e) {
  return e ? `true` : `false`
}

function lt(e) {
  return e ? `` : void 0
}

function ut(e) {
  return e ? !0 : void 0
}

function dt(e) {
  return e ? `open` : `closed`
}

function ft(e) {
  return e === `starting` ? {
    "data-starting-style": ``
  } : e === `ending` ? {
    "data-ending-style": ``
  } : {}
}
var Q = new WeakMap,
  $ = new WeakMap,
  pt = class {
    constructor(e) {
      s(this, Q, void 0), s(this, $, void 0), f(this, `attrs`, void 0), i(Q, this, e.getVariant ? e.getVariant() : null), i($, this, r(Q, this) ? `data-${r(Q,this)}-` : `data-${e.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map(e => [e, this.getAttr(e)]))
    }
    getAttr(e, t) {
      return t ? `data-${t}-${e}` : `${r($,this)}${e}`
    }
    selector(e, t) {
      return `[${this.getAttr(e,t)}]`
    }
  };

function mt(e) {
  let t = new pt(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  }
}

function ht() {}

function gt(e, t) {
  return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`
}

function _t(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now(),
    i = () => typeof document > `u` || document.visibilityState === `visible`;
  async function a() {
    let t = r;
    try {
      r = Date.now(), await e()
    } catch (e) {
      console.error(e), r = t
    }
  }
  let o = setInterval(() => {
    i() && a()
  }, t);
  n && a();
  async function s() {
    Date.now() - r >= t && await a()
  }
  let c = new AbortController;
  return typeof document < `u` && (document.addEventListener(`visibilitychange`, () => s(), {
    signal: c.signal
  }), document.addEventListener(`resume`, () => s(), {
    signal: c.signal
  })), typeof window < `u` && (window.addEventListener(`pageshow`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`focus`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`online`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`wplace:online`, () => s(), {
    signal: c.signal
  })), () => {
    clearInterval(o), c.abort()
  }
}
export {
  ie as A, w as C, ae as D, C as E, ce as M, de as O, A as S, x as T, z as _, ct as a, M as b, dt as c, ot as d, nt as f, Ke as g, Je as h, lt as i, se as j, oe as k, ft as l, it as m, gt as n, ut as o, rt as p, ht as r, mt as s, _t as t, st as u, Ue as v, me as w, j as x, Be as y
};