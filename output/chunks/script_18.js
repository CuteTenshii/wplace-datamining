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
  kt as te,
  ot as ne,
  qt as re,
  yt as ie
} from "./D6uuD926.js";
import "./B4y8X1vy.js";

function ae(e) {
  return typeof e == `function`
}

function m(e) {
  return typeof e == `object` && !!e
}
var oe = [`string`, `number`, `bigint`, `boolean`];

function h(e) {
  return e == null || oe.includes(typeof e) ? !0 : Array.isArray(e) ? e.every(e => h(e)) : typeof e == `object` && Object.getPrototypeOf(e) === Object.prototype
}
var g = Symbol(`box`),
  _ = Symbol(`is-writable`);

function v(e, t) {
  let n = o(e);
  return t ? {
    [g]: !0,
    [_]: !0,
    get current() {
      return u(n)
    },
    set current(e) {
      t(e)
    }
  } : {
    [g]: !0,
    get current() {
      return e()
    }
  }
}

function y(e) {
  return m(e) && g in e
}

function se(e) {
  return y(e) ? e : ae(e) ? v(e) : b(e)
}

function b(e) {
  let t = ee(n(e));
  return {
    [g]: !0,
    [_]: !0,
    get current() {
      return u(t)
    },
    set current(e) {
      te(t, e, !0)
    }
  }
}

function x(...e) {
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
var S = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  ce = /\n/g,
  le = /^\s*/,
  ue = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  de = /^:\s*/,
  fe = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  pe = /^[;\s]*/,
  me = /^\s+|\s+$/g,
  he = `
`,
  C = `/`,
  w = `*`,
  T = ``,
  ge = `comment`,
  _e = `declaration`;

function ve(e, t) {
  if (typeof e != `string`) throw TypeError(`First argument must be a string`);
  if (!e) return [];
  t = t || {};
  var n = 1,
    r = 1;

  function i(e) {
    var t = e.match(ce);
    t && (n += t.length);
    var i = e.lastIndexOf(he);
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
    c(le)
  }

  function u(e) {
    var t;
    for (e = e || []; t = d();) t !== !1 && e.push(t);
    return e
  }

  function d() {
    var t = a();
    if (C == e.charAt(0) && w == e.charAt(1)) {
      for (var n = 2; T != e.charAt(n) && (w != e.charAt(n) || C != e.charAt(n + 1));) ++n;
      if (n += 2, T === e.charAt(n - 1)) return s(`End of comment missing`);
      var o = e.slice(2, n - 2);
      return r += 2, i(o), e = e.slice(n), r += 2, t({
        type: ge,
        comment: o
      })
    }
  }

  function f() {
    var e = a(),
      t = c(ue);
    if (t) {
      if (d(), !c(de)) return s(`property missing ':'`);
      var n = c(fe),
        r = e({
          type: _e,
          property: E(t[0].replace(S, T)),
          value: n ? E(n[0].replace(S, T)) : T
        });
      return c(pe), r
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

function E(e) {
  return e ? e.replace(me, T) : T
}

function ye(e, t) {
  let n = null;
  if (!e || typeof e != `string`) return n;
  let r = ve(e),
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
var be = /\d/,
  xe = [`-`, `_`, `/`, `.`];

function Se(e = ``) {
  if (!be.test(e)) return e !== e.toLowerCase()
}

function Ce(e) {
  let t = [],
    n = ``,
    r, i;
  for (let a of e) {
    let e = xe.includes(a);
    if (e === !0) {
      t.push(n), n = ``, r = void 0;
      continue
    }
    let o = Se(a);
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

function D(e) {
  return e ? Ce(e).map(e => O(e)).join(``) : ``
}

function we(e) {
  return k(D(e || ``))
}

function O(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : ``
}

function k(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : ``
}

function A(e) {
  if (!e) return {};
  let t = {};

  function n(e, n) {
    if (e.startsWith(`-moz-`) || e.startsWith(`-webkit-`) || e.startsWith(`-ms-`) || e.startsWith(`-o-`)) {
      t[D(e)] = n;
      return
    }
    if (e.startsWith(`--`)) {
      t[e] = n;
      return
    }
    t[we(e)] = n
  }
  return ye(e, n), t
}

function j(...e) {
  return (...t) => {
    for (let n of e) typeof n == `function` && n(...t)
  }
}

function Te(e, t) {
  let n = RegExp(e, `g`);
  return e => {
    if (typeof e != `string`) throw TypeError(`expected an argument of type string, but got ${typeof e}`);
    return e.match(n) ? e.replace(n, t) : e
  }
}
var Ee = Te(/[A-Z]/, e => `-${e.toLowerCase()}`);

function De(e) {
  if (!e || typeof e != `object` || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map(t => `${Ee(t)}: ${e[t]};`).join(`
`)
}

function M(e = {}) {
  return De(e).replace(`
`, ` `)
}
var Oe = new Set(`onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel`.split(`.`));

function ke(e) {
  return Oe.has(e)
}

function Ae(...t) {
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
        if (o && typeof s && ke(t)) n[t] = x(r, a);
        else if (o && s) n[t] = j(r, a);
        else if (t === `class`) {
          let i = h(r),
            o = h(a);
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

function je(e) {
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
    return (e = r(F, this)) == null || e.call(this), r(P, this) ? je(r(P, this)) : null
  }
};

function Me(e) {
  return typeof e == `function`
}
var I = new WeakMap,
  L = new WeakMap,
  Ne = class {
    constructor(e) {
      s(this, I, void 0), s(this, L, void 0), i(I, this, e), i(L, this, Symbol(e))
    }
    get key() {
      return r(L, this)
    }
    exists() {
      return re(r(L, this))
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

function Pe(e, t) {
  switch (e) {
    case `post`:
      ie(t);
      break;
    case `pre`:
      l(t)
  }
}

function R(e, t, n, r = {}) {
  let {
    lazy: i = !1
  } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
  Pe(t, () => {
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

function Fe(e, t, n) {
  R(e, `pre`, t, n)
}
z.pre = Fe;

function B(e) {
  return Me(e) ? e() : e
}
var V = new WeakMap,
  H = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Ie = class {
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
  X = new WeakMap,
  Le = class {
    constructor(e, t) {
      s(this, Y, () => void 0), s(this, X, o(() => r(Y, this).call(this)));
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
      return u(r(X, this))
    }
  };

function Re(e, t) {
  return {
    [ne()]: n => y(e) ? (e.current = n, d(() => t == null ? void 0 : t(n)), () => {
      `isConnected` in n && n.isConnected || (e.current = null, t == null || t(null))
    }) : (e(n), d(() => t == null ? void 0 : t(n)), () => {
      `isConnected` in n && n.isConnected || (e(null), t == null || t(null))
    })
  }
}

function ze(e) {
  return e ? `true` : `false`
}

function Z(e) {
  return e ? `` : void 0
}

function Be(e) {
  return e ? !0 : void 0
}

function Ve(e) {
  return e ? `open` : `closed`
}

function He(e) {
  return e === `starting` ? {
    "data-starting-style": ``
  } : e === `ending` ? {
    "data-ending-style": ``
  } : {}
}
var Q = new WeakMap,
  $ = new WeakMap,
  Ue = class {
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

function We(e) {
  let t = new Ue(e);
  return {
    ...t.attrs,
    selector: t.selector,
    getAttr: t.getAttr
  }
}

function Ge() {}

function Ke(e, t) {
  return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`
}
export {
  m as S, A as _, Be as a, v as b, He as c, Ie as d, z as f, j as g, M as h, ze as i, Re as l, Ae as m, Ge as n, We as o, Ne as p, Z as r, Ve as s, Ke as t, Le as u, x as v, b as x, se as y
};