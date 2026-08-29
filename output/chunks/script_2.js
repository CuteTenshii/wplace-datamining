var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || (e((t = {
    exports: {}
  }).exports, t), e = null), t.exports),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, {
      get: e[i],
      enumerable: !0
    });
    return n || t(r, Symbol.toStringTag, {
      value: `Module`
    }), r
  },
  c = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
        get: (e => i[e]).bind(null, d),
        enumerable: !(s = n(i, d)) || s.enumerable
      });
    return e
  },
  l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
    value: n,
    enumerable: !0
  }) : o, n)),
  u = Array.isArray,
  d = Array.prototype.indexOf,
  f = Array.prototype.includes,
  p = Array.from,
  m = Object.defineProperty,
  h = Object.getOwnPropertyDescriptor,
  g = Object.getOwnPropertyDescriptors,
  _ = Object.prototype,
  v = Array.prototype,
  y = Object.getPrototypeOf,
  b = Object.isExtensible;

function x(e) {
  return typeof e == `function`
}
var S = () => {};

function ee(e) {
  return e()
}

function te(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function ne() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      e = n, t = r
    }),
    resolve: e,
    reject: t
  }
}

function re(e, t, n = !1) {
  return e === void 0 ? n ? t() : t : e
}

function ie(e, t) {
  if (Array.isArray(e)) return e;
  if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
  let n = [];
  for (let r of e)
    if (n.push(r), n.length === t) break;
  return n
}

function ae(e) {
  "@babel/helpers - typeof";
  return ae = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
  }, ae(e)
}

function oe(e, t) {
  if (ae(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ae(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`)
  }
  return (t === `string` ? String : Number)(e)
}

function se(e) {
  var t = oe(e, `string`);
  return ae(t) == `symbol` ? t : t + ``
}

function C(e, t, n) {
  return (t = se(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var ce, le = 1 << 24,
  ue = 1024,
  de = 2048,
  fe = 4096,
  pe = 8192,
  me = 16384,
  he = 32768,
  ge = 1 << 25,
  _e = 65536,
  ve = 1 << 18,
  ye = 1 << 19,
  be = 1 << 20,
  xe = 1 << 25,
  Se = 65536,
  Ce = 1 << 21,
  we = 1 << 22,
  Te = 1 << 23,
  Ee = Symbol(`$state`),
  De = Symbol(`legacy props`),
  Oe = Symbol(``),
  ke = Symbol(`proxy path`),
  Ae = Symbol(`attributes`),
  je = Symbol(`class`),
  Me = Symbol(`style`),
  Ne = Symbol(`text`),
  Pe = Symbol(`form reset`),
  Fe = new class extends Error {
    constructor(...e) {
      super(...e), C(this, `name`, `StaleReactionError`), C(this, `message`, "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  },
  Ie = !!((ce = globalThis.document) != null && ce.contentType) && globalThis.document.contentType.includes(`xml`);

function Le(e) {
  throw Error(`https://svelte.dev/e/experimental_async_required`)
}

function Re(e) {
  throw Error(`https://svelte.dev/e/lifecycle_outside_component`)
}

function ze() {
  throw Error(`https://svelte.dev/e/missing_context`)
}

function Be() {
  throw Error(`https://svelte.dev/e/async_derived_orphan`)
}

function Ve(e, t, n) {
  throw Error(`https://svelte.dev/e/each_key_duplicate`)
}

function He(e) {
  throw Error(`https://svelte.dev/e/effect_in_teardown`)
}

function Ue() {
  throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)
}

function We(e) {
  throw Error(`https://svelte.dev/e/effect_orphan`)
}

function Ge() {
  throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)
}

function Ke() {
  throw Error(`https://svelte.dev/e/fork_discarded`)
}

function qe() {
  throw Error(`https://svelte.dev/e/fork_timing`)
}

function Je() {
  throw Error(`https://svelte.dev/e/get_abort_signal_outside_reaction`)
}

function Ye() {
  throw Error(`https://svelte.dev/e/hydration_failed`)
}

function Xe(e) {
  throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)
}

function Ze(e) {
  throw Error(`https://svelte.dev/e/props_invalid_value`)
}

function Qe() {
  throw Error(`https://svelte.dev/e/state_descriptors_fixed`)
}

function $e() {
  throw Error(`https://svelte.dev/e/state_prototype_fixed`)
}

function et() {
  throw Error(`https://svelte.dev/e/state_unsafe_mutation`)
}

function tt() {
  throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)
}
var nt = {},
  w = Symbol(`uninitialized`),
  rt = `http://www.w3.org/2000/svg`,
  it = `http://www.w3.org/1998/Math/MathML`,
  at = `@attach`;

function ot() {
  console.warn(`https://svelte.dev/e/derived_inert`)
}

function st(e) {
  console.warn(`https://svelte.dev/e/hydratable_missing_but_expected`)
}

function ct(e) {
  console.warn(`https://svelte.dev/e/hydration_mismatch`)
}

function lt() {
  console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)
}

function ut() {
  console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)
}

function dt(e) {
  console.warn(`https://svelte.dev/e/transition_slide_display`)
}
var T = !1;

function E(e) {
  T = e
}
var D;

function O(e) {
  if (e === null) throw ct(), nt;
  return D = e
}

function ft() {
  return O(W(D))
}

function pt(e) {
  if (T) {
    if (W(D) !== null) throw ct(), nt;
    D = e
  }
}

function mt(e = 1) {
  if (T) {
    for (var t = e, n = D; t--;) n = W(n);
    D = n
  }
}

function ht(e = !0) {
  for (var t = 0, n = D;;) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === `]`) {
        if (t === 0) return n;
        --t
      } else(r === `[` || r === `[!` || r[0] === `[` && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var i = W(n);
    e && n.remove(), n = i
  }
}

function gt(e) {
  if (!e || e.nodeType !== 8) throw ct(), nt;
  return e.data
}

function _t(e) {
  return e === this.v
}

function vt(e, t) {
  return e == e ? e !== t || typeof e == `object` && !!e || typeof e == `function` : t == t
}

function yt(e) {
  return !vt(e, this.v)
}
var bt = !1;

function xt() {
  bt = !0
}
var St = [];

function Ct(e, t = !1, n = !1) {
  return wt(e, new Map, ``, St, null, n)
}

function wt(e, t, n, r, i = null, a = !1) {
  if (typeof e == `object` && e) {
    var o = t.get(e);
    if (o !== void 0) return o;
    if (e instanceof Map) return new Map(e);
    if (e instanceof Set) return new Set(e);
    if (u(e)) {
      var s = Array(e.length);
      t.set(e, s), i !== null && t.set(i, s);
      for (var c = 0; c < e.length; c += 1) {
        var l = e[c];
        c in e && (s[c] = wt(l, t, n, r, null, a))
      }
      return s
    }
    if (y(e) === _) {
      s = {}, t.set(e, s), i !== null && t.set(i, s);
      for (var d of Object.keys(e)) s[d] = wt(e[d], t, n, r, null, a);
      return s
    }
    if (e instanceof Date) return structuredClone(e);
    if (typeof e.toJSON == `function` && !a) return wt(e.toJSON(), t, n, r, e)
  }
  if (e instanceof EventTarget) return e;
  try {
    return structuredClone(e)
  } catch {
    return e
  }
}

function Tt(e, t) {
  return e.label = t, Et(e.v, t), e
}

function Et(e, t) {
  var n;
  return e == null || (n = e[ke]) == null || n.call(e, t), e
}

function Dt(e) {
  return typeof e == `symbol` ? `Symbol(${e.description})` : typeof e == `function` ? `<function>` : typeof e == `object` && e ? `<object>` : String(e)
}
var k = null;

function Ot(e) {
  k = e
}

function kt() {
  let e = {};
  return [() => (Mt(e) || ze(), At(e)), t => jt(e, t)]
}

function At(e) {
  return Lt(`getContext`).get(e)
}

function jt(e, t) {
  return Lt(`setContext`).set(e, t), t
}

function Mt(e) {
  return Lt(`hasContext`).has(e)
}

function Nt() {
  return Lt(`getAllContexts`)
}

function Pt(e, t = !1, n) {
  k = {
    p: k,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: J,
    l: bt && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function Ft(e) {
  var t = k,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Si(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {}
}

function It() {
  return !bt || k !== null && k.l === null
}

function Lt(e) {
  var t;
  return k === null && Re(e), (t = k).c ?? (t.c = new Map(Rt(k) || void 0))
}

function Rt(e) {
  let t = e.p;
  for (; t !== null;) {
    let e = t.c;
    if (e !== null) return e;
    t = t.p
  }
  return null
}
var zt = [];

function Bt() {
  var e = zt;
  zt = [], te(e)
}

function A(e) {
  if (zt.length === 0 && !Zn) {
    var t = zt;
    queueMicrotask(() => {
      t === zt && Bt()
    })
  }
  zt.push(e)
}

function Vt() {
  for (; zt.length > 0;) Bt()
}

function Ht(e) {
  var t = J;
  if (t === null) return q.f |= Te, e;
  if (!(t.f & 32768) && !(t.f & 4)) throw e;
  Ut(e, t)
}

function Ut(e, t) {
  if (!(t !== null && t.f & 16384)) {
    for (; t !== null;) {
      if (t.f & 128) {
        if (!(t.f & 32768)) throw e;
        try {
          t.b.error(e);
          return
        } catch (t) {
          e = t
        }
      }
      t = t.parent
    }
    throw e
  }
}
var Wt = ~(de | fe | ue);

function j(e, t) {
  e.f = e.f & Wt | t
}

function Gt(e) {
  e.f & 512 || e.deps === null ? j(e, ue) : j(e, fe)
}

function Kt(e) {
  if (e !== null)
    for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= Se, Kt(t.deps))
}

function qt(e, t, n) {
  e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Kt(e.deps), j(e, ue)
}

function Jt(e, t, n) {
  if (e == null) return t(void 0), n && n(void 0), S;
  let r = Q(() => e.subscribe(t, n));
  return r.unsubscribe ? () => r.unsubscribe() : r
}
var Yt = [];

function Xt(e, t = S) {
  let n = null,
    r = new Set;

  function i(t) {
    if (vt(e, t) && (e = t, n)) {
      let t = !Yt.length;
      for (let t of r) t[1](), Yt.push(t, e);
      if (t) {
        for (let e = 0; e < Yt.length; e += 2) Yt[e][0](Yt[e + 1]);
        Yt.length = 0
      }
    }
  }

  function a(t) {
    i(t(e))
  }

  function o(o, s = S) {
    let c = [o, s];
    return r.add(c), r.size === 1 && (n = t(i, a) || S), o(e), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: i,
    update: a,
    subscribe: o
  }
}

function Zt(e) {
  let t;
  return Jt(e, e => t = e)(), t
}
var Qt = !1,
  $t = Symbol(`unmounted`);

function en(e, t, n) {
  let r = n[t] ?? (n[t] = {
    store: null,
    source: Vr(void 0),
    unsubscribe: S
  });
  if (r.store !== e && !($t in n)) {
    if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = S;
    else {
      var i = !0;
      r.unsubscribe = Jt(e, e => {
        i ? r.source.v = e : V(r.source, e)
      }), i = !1
    }
  }
  return e && $t in n ? Zt(e) : Z(r.source)
}

function tn() {
  let e = {};

  function t() {
    bi(() => {
      for (var t in e) e[t].unsubscribe();
      m(e, $t, {
        enumerable: !1,
        value: !0
      })
    })
  }
  return [e, t]
}

function nn(e) {
  var t = Qt;
  try {
    return Qt = !1, [e(), Qt]
  } finally {
    Qt = t
  }
}

function rn(e) {
  let t = 0,
    n = zr(0),
    r;
  return () => {
    yi() && (Z(n), Oi(() => (t === 0 && (r = Q(() => e(() => Gr(n)))), t += 1, () => {
      A(() => {
        --t, t === 0 && (r == null || r(), r = void 0, Gr(n))
      })
    })))
  }
}

function an(e, t) {
  if (t.has(e)) throw TypeError(`Cannot initialize the same private elements twice on an object`)
}

function on(e, t) {
  an(e, t), t.add(e)
}

function M(e, t, n) {
  an(e, t), t.set(e, n)
}

function N(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw TypeError(`Private element is not present on this object`)
}

function P(e, t, n) {
  return e.set(N(e, t), n), n
}

function F(e, t) {
  return e.get(N(e, t))
}
var sn = _e | ye;

function cn(e, t, n, r) {
  new wn(e, t, n, r)
}
var ln = new WeakMap,
  un = new WeakMap,
  dn = new WeakMap,
  fn = new WeakMap,
  pn = new WeakMap,
  mn = new WeakMap,
  I = new WeakMap,
  hn = new WeakMap,
  gn = new WeakMap,
  _n = new WeakMap,
  vn = new WeakMap,
  yn = new WeakMap,
  bn = new WeakMap,
  xn = new WeakMap,
  Sn = new WeakMap,
  Cn = new WeakMap,
  L = new WeakSet,
  wn = class {
    constructor(e, t, n, r) {
      var i;
      on(this, L), C(this, `parent`, void 0), C(this, `is_pending`, !1), C(this, `transform_error`, void 0), M(this, ln, void 0), M(this, un, T ? D : null), M(this, dn, void 0), M(this, fn, void 0), M(this, pn, void 0), M(this, mn, null), M(this, I, null), M(this, hn, null), M(this, gn, null), M(this, _n, 0), M(this, vn, 0), M(this, yn, !1), M(this, bn, new Set), M(this, xn, new Set), M(this, Sn, null), M(this, Cn, rn(() => (P(Sn, this, zr(F(_n, this))), () => {
        P(Sn, this, null)
      }))), P(ln, this, e), P(dn, this, t), P(fn, this, e => {
        var t = J;
        t.b = this, t.f |= 128, n(e)
      }), this.parent = J.b, this.transform_error = r ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? (e => e), P(pn, this, ji(() => {
        if (T) {
          let e = F(un, this);
          ft();
          let t = e.data === `[!`;
          if (e.data.startsWith(`[?`)) {
            let t = JSON.parse(e.data.slice(2));
            N(L, this, En).call(this, t)
          } else t ? N(L, this, Dn).call(this) : N(L, this, Tn).call(this)
        } else N(L, this, On).call(this)
      }, sn)), T && P(ln, this, D)
    }
    defer_effect(e) {
      qt(e, F(bn, this), F(xn, this))
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered())
    }
    has_pending_snippet() {
      return !!F(dn, this).pending
    }
    update_pending_count(e, t) {
      N(L, this, jn).call(this, e, t), P(_n, this, F(_n, this) + e), !(!F(Sn, this) || F(yn, this)) && (P(yn, this, !0), A(() => {
        P(yn, this, !1), F(Sn, this) && Hr(F(Sn, this), F(_n, this))
      }))
    }
    get_effect_pending() {
      return F(Cn, this).call(this), Z(F(Sn, this))
    }
    error(e) {
      if (!F(dn, this).onerror && !F(dn, this).failed) throw e;
      R != null && R.is_fork ? (F(mn, this) && R.skip_effect(F(mn, this)), F(I, this) && R.skip_effect(F(I, this)), F(hn, this) && R.skip_effect(F(hn, this)), R.oncommit(() => {
        N(L, this, Mn).call(this, e)
      })) : N(L, this, Mn).call(this, e)
    }
  };

function Tn() {
  try {
    P(mn, this, G(() => F(fn, this).call(this, F(ln, this))))
  } catch (e) {
    this.error(e)
  }
}

function En(e) {
  let t = F(dn, this).failed;
  t && P(hn, this, G(() => {
    t(F(ln, this), () => e, () => () => {})
  }))
}

function Dn() {
  let e = F(dn, this).pending;
  e && (this.is_pending = !0, P(I, this, G(() => e(F(ln, this)))), A(() => {
    var e = P(gn, this, document.createDocumentFragment()),
      t = H();
    e.append(t), P(mn, this, N(L, this, An).call(this, () => G(() => F(fn, this).call(this, t)))), F(vn, this) === 0 && (F(ln, this).before(e), P(gn, this, null), Ri(F(I, this), () => {
      P(I, this, null)
    }), N(L, this, kn).call(this, R))
  }))
}

function On() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(vn, this, 0), P(_n, this, 0), P(mn, this, G(() => {
        F(fn, this).call(this, F(ln, this))
      })), F(vn, this) > 0) {
      var e = P(gn, this, document.createDocumentFragment());
      Hi(F(mn, this), e);
      let t = F(dn, this).pending;
      P(I, this, G(() => t(F(ln, this))))
    } else N(L, this, kn).call(this, R)
  } catch (e) {
    this.error(e)
  }
}

function kn(e) {
  this.is_pending = !1, e.transfer_effects(F(bn, this), F(xn, this))
}

function An(e) {
  var t = J,
    n = q,
    r = k;
  Yi(F(pn, this)), Ji(F(pn, this)), Ot(F(pn, this).ctx);
  try {
    return vr.ensure(), e()
  } catch (e) {
    return Ht(e), null
  } finally {
    Yi(t), Ji(n), Ot(r)
  }
}

function jn(e, t) {
  if (!this.has_pending_snippet()) {
    if (this.parent) {
      var n;
      N(L, n = this.parent, jn).call(n, e, t)
    }
    return
  }
  P(vn, this, F(vn, this) + e), F(vn, this) === 0 && (N(L, this, kn).call(this, t), F(I, this) && Ri(F(I, this), () => {
    P(I, this, null)
  }), F(gn, this) && (F(ln, this).before(F(gn, this)), P(gn, this, null)))
}

function Mn(e) {
  F(mn, this) && (K(F(mn, this)), P(mn, this, null)), F(I, this) && (K(F(I, this)), P(I, this, null)), F(hn, this) && (K(F(hn, this)), P(hn, this, null)), T && (O(F(un, this)), mt(), O(ht()));
  var t = F(dn, this).onerror;
  let n = F(dn, this).failed;
  var r = !1,
    i = !1;
  let a = () => {
      if (r) {
        ut();
        return
      }
      r = !0, i && tt(), F(hn, this) !== null && Ri(F(hn, this), () => {
        P(hn, this, null)
      }), N(L, this, An).call(this, () => {
        N(L, this, On).call(this)
      })
    },
    o = e => {
      try {
        i = !0, t == null || t(e, a), i = !1
      } catch (e) {
        Ut(e, F(pn, this) && F(pn, this).parent)
      }
      n && P(hn, this, N(L, this, An).call(this, () => {
        try {
          return G(() => {
            var t = J;
            t.b = this, t.f |= 128, n(F(ln, this), () => e, () => a)
          })
        } catch (e) {
          return Ut(e, F(pn, this).parent), null
        }
      }))
    };
  A(() => {
    var t;
    try {
      t = this.transform_error(e)
    } catch (e) {
      Ut(e, F(pn, this) && F(pn, this).parent);
      return
    }
    typeof t == `object` && t && typeof t.then == `function` ? t.then(o, e => Ut(e, F(pn, this) && F(pn, this).parent)) : o(t)
  })
}

function Nn(e, t, n, r) {
  let i = It() ? Ln : Vn;
  var a = e.filter(e => !e.settled),
    o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return
  }
  var s = J,
    c = Pn(),
    l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map(e => e.promise)) : null;

  function u(e) {
    if (!(s.f & 16384)) {
      c();
      try {
        r([...o, ...e])
      } catch (e) {
        Ut(e, s)
      }
      Fn()
    }
  }
  var d = In();
  if (n.length === 0) {
    l.then(() => u([])).finally(d);
    return
  }

  function f() {
    Promise.all(n.map(e => zn(e))).then(u).catch(e => Ut(e, s)).finally(d)
  }
  l ? l.then(() => {
    c(), f(), Fn()
  }) : f()
}

function Pn() {
  var e = J,
    t = q,
    n = k,
    r = R;
  return function(i = !0) {
    Yi(e), Ji(t), Ot(n), i && !(e.f & 16384) && (r == null || r.activate(), r == null || r.apply())
  }
}

function Fn(e = !0) {
  Yi(null), Ji(null), Ot(null), e && (R == null || R.deactivate())
}

function In() {
  var e = J,
    t = e.b,
    n = R,
    r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e)
  }
}

function Ln(e) {
  var t = 2 | de;
  return J !== null && (J.f |= ye), {
    ctx: k,
    deps: null,
    effects: null,
    equals: _t,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: w,
    wv: 0,
    parent: J,
    ac: null
  }
}
var Rn = Symbol(`obsolete`);

function zn(e, t, n) {
  let r = J;
  r === null && Be();
  var i = void 0,
    a = zr(w),
    o = !q,
    s = new Set;
  return Di(() => {
    var t = J,
      n = ne();
    i = n.promise;
    try {
      Promise.resolve(e()).then(n.resolve, e => {
        e !== Fe && n.reject(e)
      }).finally(Fn)
    } catch (e) {
      n.reject(e), Fn()
    }
    var c = R;
    if (o) {
      var l;
      if (t.f & 32768) var u = In();
      if ((l = r.b) != null && l.is_rendered()) {
        var d;
        (d = c.async_deriveds.get(t)) == null || d.reject(Rn)
      } else
        for (let e of s.values()) e.reject(Rn);
      s.add(n), c.async_deriveds.set(t, n)
    }
    let f = (e, t = void 0) => {
      u == null || u(), s.delete(n), t !== Rn && (c.activate(), t ? (a.f |= Te, Hr(a, t)) : (a.f & 8388608 && (a.f ^= Te), Hr(a, e)), c.deactivate())
    };
    n.promise.then(f, e => f(null, e || `unknown`))
  }), bi(() => {
    for (let e of s) e.reject(Rn)
  }), new Promise(e => {
    function t(n) {
      function r() {
        n === i ? e(a) : t(i)
      }
      n.then(r, r)
    }
    t(i)
  })
}

function Bn(e) {
  let t = Ln(e);
  return Zi(t), t
}

function Vn(e) {
  let t = Ln(e);
  return t.equals = yt, t
}

function Hn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) K(t[n])
  }
}

function Un(e) {
  var t, n = J,
    r = e.parent;
  if (!Gi && r !== null && e.v !== w && r.f & 24576) return ot(), e.v;
  Yi(r);
  try {
    e.f &= ~Se, Hn(e), t = sa(e)
  } finally {
    Yi(n)
  }
  return t
}

function Wn(e) {
  var t = Un(e);
  if (!e.equals(t) && (e.wv = ia(), (!(R != null && R.is_fork) || e.deps === null) && (R === null ? e.v = t : (R.capture(e, t, !0), Yn == null || Yn.capture(e, t, !0)), e.deps === null))) {
    j(e, ue);
    return
  }
  Gi || (z === null ? Gt(e) : (yi() || R != null && R.is_fork) && z.set(e, t))
}

function Gn(e) {
  if (e.effects !== null) {
    for (let r of e.effects)
      if (r.teardown || r.ac) {
        var t, n;
        (t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Fe), r.fn !== null && (r.teardown = S), r.ac = null, la(r, 0), Pi(r)
      }
  }
}

function Kn(e) {
  if (e.effects !== null)
    for (let t of e.effects) t.teardown && t.fn !== null && ua(t)
}
var qn, Jn = null,
  R = null,
  Yn = null,
  z = null,
  Xn = null,
  Zn = !1,
  Qn = !1,
  $n = null,
  er = null,
  tr = 0,
  nr = 1,
  rr = new WeakMap,
  ir = new WeakMap,
  ar = new WeakMap,
  or = new WeakMap,
  sr = new WeakMap,
  cr = new WeakMap,
  lr = new WeakMap,
  ur = new WeakMap,
  dr = new WeakMap,
  fr = new WeakMap,
  pr = new WeakMap,
  mr = new WeakMap,
  hr = new WeakMap,
  gr = new WeakMap,
  _r = new WeakMap,
  B = new WeakSet,
  vr = class e {
    constructor() {
      on(this, B), C(this, `id`, nr++), M(this, rr, !1), C(this, `linked`, !0), M(this, ir, null), M(this, ar, null), C(this, `async_deriveds`, new Map), C(this, `current`, new Map), C(this, `previous`, new Map), M(this, or, new Set), M(this, sr, new Set), M(this, cr, 0), M(this, lr, new Map), M(this, ur, null), M(this, dr, []), M(this, fr, []), M(this, pr, new Set), M(this, mr, new Set), M(this, hr, new Map), M(this, gr, new Set), C(this, `is_fork`, !1), M(this, _r, !1), Jn === null ? Jn = this : (P(ar, Jn, this), P(ir, this, Jn)), Jn = this
    }
    skip_effect(e) {
      F(hr, this).has(e) || F(hr, this).set(e, {
        d: [],
        m: []
      }), F(gr, this).delete(e)
    }
    unskip_effect(e, t = e => this.schedule(e)) {
      var n = F(hr, this).get(e);
      if (n) {
        F(hr, this).delete(e);
        for (var r of n.d) j(r, de), t(r);
        for (r of n.m) j(r, fe), t(r)
      }
      F(gr, this).add(e)
    }
    capture(e, t, n = !1) {
      e.v !== w && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), z == null || z.set(e, t)), this.is_fork || (e.v = t)
    }
    activate() {
      R = this
    }
    deactivate() {
      R = null, z = null
    }
    flush() {
      try {
        Qn = !0, R = this, N(B, this, br).call(this)
      } finally {
        tr = 0, Xn = null, $n = null, er = null, Qn = !1, R = null, z = null, Ir.clear()
      }
    }
    discard() {
      var e;
      for (let e of F(sr, this)) e(this);
      F(sr, this).clear();
      for (let e of this.async_deriveds.values()) e.reject(Rn);
      N(B, this, Tr).call(this), (e = F(ur, this)) == null || e.resolve()
    }
    register_created_effect(e) {
      F(fr, this).push(e)
    }
    increment(e, t) {
      if (P(cr, this, F(cr, this) + 1), e) {
        let e = F(lr, this).get(t) ?? 0;
        F(lr, this).set(t, e + 1)
      }
    }
    decrement(e, t) {
      if (P(cr, this, F(cr, this) - 1), e) {
        let e = F(lr, this).get(t) ?? 0;
        e === 1 ? F(lr, this).delete(t) : F(lr, this).set(t, e - 1)
      }
      F(_r, this) || (P(_r, this, !0), A(() => {
        P(_r, this, !1), this.linked && this.flush()
      }))
    }
    transfer_effects(e, t) {
      for (let t of e) F(pr, this).add(t);
      for (let e of t) F(mr, this).add(e);
      e.clear(), t.clear()
    }
    oncommit(e) {
      F(or, this).add(e)
    }
    ondiscard(e) {
      F(sr, this).add(e)
    }
    settled() {
      return (F(ur, this) ?? P(ur, this, ne())).promise
    }
    static ensure() {
      if (R === null) {
        let t = R = new e;
        !Qn && !Zn && A(() => {
          F(rr, t) || t.flush()
        })
      }
      return R
    }
    apply() {
      z = null
    }
    schedule(e) {
      var t;
      if (Xn = e, (t = e.b) != null && t.is_pending && e.f & 16777228 && !(e.f & 32768)) {
        e.b.defer_effect(e);
        return
      }
      for (var n = e; n.parent !== null;) {
        n = n.parent;
        var r = n.f;
        if ($n !== null && n === J && (q === null || !(q.f & 2))) return;
        if (r & 96) {
          if (!(r & 1024)) return;
          n.f ^= ue
        }
      }
      F(dr, this).push(n)
    }
  };
qn = vr;

function yr() {
  if (this.is_fork) return !0;
  for (let n of F(lr, this).keys()) {
    for (var e = n, t = !1; e.parent !== null;) {
      if (F(hr, this).has(e)) {
        t = !0;
        break
      }
      e = e.parent
    }
    if (!t) return !0
  }
  return !1
}

function br() {
  var e;
  P(rr, this, !0), tr++ > 1e3 && (N(B, this, Tr).call(this), Dr());
  for (let e of F(pr, this)) F(mr, this).delete(e), j(e, de), this.schedule(e);
  for (let e of F(mr, this)) j(e, fe), this.schedule(e);
  let t = F(dr, this);
  P(dr, this, []), this.apply();
  var n = $n = [],
    r = [],
    i = er = [];
  for (let e of t) try {
    N(B, this, xr).call(this, e, n, r)
  } catch (t) {
    throw Nr(e), N(B, this, yr).call(this) || this.discard(), t
  }
  if (R = null, i.length > 0) {
    var a = qn.ensure();
    for (let e of i) a.schedule(e)
  }
  if ($n = null, er = null, N(B, this, yr).call(this)) {
    N(B, this, wr).call(this, r), N(B, this, wr).call(this, n);
    for (let [e, t] of F(hr, this)) Mr(e, t);
    i.length > 0 && N(B, R, br).call(R);
    return
  }
  let o = N(B, this, Sr).call(this);
  if (o) {
    N(B, this, wr).call(this, r), N(B, this, wr).call(this, n), N(B, o, Cr).call(o, this);
    return
  }
  F(pr, this).clear(), F(mr, this).clear();
  for (let e of F(or, this)) e(this);
  F(or, this).clear(), Yn = this, kr(r), kr(n), Yn = null, (e = F(ur, this)) == null || e.resolve();
  var s = R;
  if (F(cr, this) === 0 && (F(dr, this).length === 0 || s !== null) && N(B, this, Tr).call(this), F(dr, this).length > 0) {
    if (s !== null) {
      let e = s;
      F(dr, e).push(...F(dr, this).filter(t => !F(dr, e).includes(t)))
    } else s = this
  }
  s !== null && N(B, s, br).call(s)
}

function xr(e, t, n) {
  e.f ^= ue;
  for (var r = e.first; r !== null;) {
    var i = r.f,
      a = !!(i & 96);
    if (!(a && i & 1024 || i & 8192 || F(hr, this).has(r)) && r.fn !== null) {
      a ? r.f ^= ue : i & 4 ? t.push(r) : aa(r) && (i & 16 && F(mr, this).add(r), ua(r));
      var o = r.first;
      if (o !== null) {
        r = o;
        continue
      }
    }
    for (; r !== null;) {
      var s = r.next;
      if (s !== null) {
        r = s;
        break
      }
      r = r.parent
    }
  }
}

function Sr() {
  for (var e = F(ir, this); e !== null;) {
    if (!e.is_fork) {
      for (let [t, [, n]] of this.current)
        if (e.current.has(t) && !n) return e
    }
    e = F(ir, e)
  }
  return null
}

function Cr(e) {
  for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
  for (let [t, n] of e.async_deriveds) {
    let e = this.async_deriveds.get(t);
    e && n.promise.then(e.resolve).catch(e.reject)
  }
  e.async_deriveds.clear(), this.transfer_effects(F(pr, e), F(mr, e));
  let t = e => {
    var n = e.reactions;
    if (n !== null)
      for (let e of n) {
        var r = e.f;
        if (r & 2) t(e);
        else {
          var i = e;
          r & 4194320 && !this.async_deriveds.has(i) && (F(mr, this).delete(i), j(i, de), this.schedule(i))
        }
      }
  };
  for (let e of this.current.keys()) t(e);
  this.oncommit(() => e.discard()), N(B, e, Tr).call(e), R = this, N(B, this, br).call(this)
}

function wr(e) {
  for (var t = 0; t < e.length; t += 1) qt(e[t], F(pr, this), F(mr, this))
}

function Tr() {
  if (this.linked) {
    var e = F(ir, this),
      t = F(ar, this);
    e === null || P(ar, e, t), t === null ? Jn = e : P(ir, t, e), this.linked = !1
  }
}

function Er(e) {
  var t = Zn;
  Zn = !0;
  try {
    var n;
    for (e && (R !== null && !R.is_fork && R.flush(), n = e());;) {
      if (Vt(), R === null) return n;
      R.flush()
    }
  } finally {
    Zn = t
  }
}

function Dr() {
  try {
    Ge()
  } catch (e) {
    Ut(e, Xn)
  }
}
var Or = null;

function kr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if (!(r.f & 24576) && aa(r) && (Or = new Set, ua(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Li(r), (Or == null ? void 0 : Or.size) > 0)) {
        Ir.clear();
        for (let e of Or) {
          if (e.f & 24576) continue;
          let t = [e],
            n = e.parent;
          for (; n !== null;) Or.has(n) && (Or.delete(n), t.push(n)), n = n.parent;
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            n.f & 24576 || ua(n)
          }
        }
        Or.clear()
      }
    }
    Or = null
  }
}

function Ar(e, t) {
  if (e.reactions !== null)
    for (let n of e.reactions) {
      let e = n.f;
      e & 2 ? Ar(n, t) : e & 131072 && (j(n, de), t.add(n))
    }
}

function jr(e) {
  R.schedule(e)
}

function Mr(e, t) {
  if (!(e.f & 32 && e.f & 1024)) {
    e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, ue);
    for (var n = e.first; n !== null;) Mr(n, t), n = n.next
  }
}

function Nr(e) {
  j(e, ue);
  for (var t = e.first; t !== null;) Nr(t), t = t.next
}

function Pr(e) {
  Le(`fork`), R !== null && qe();
  var t = vr.ensure();
  t.is_fork = !0, z = new Map;
  var n = !1,
    r = t.settled();
  return Er(e), {
    commit: async () => {
      if (n) {
        await r;
        return
      }
      t.linked || Ke(), n = !0, t.is_fork = !1;
      for (var [e, [i]] of t.current) e.v = i, e.wv = ia();
      Er(() => {
        var e = new Set;
        for (var n of t.current.keys()) Ar(n, e);
        Lr(e), Ur()
      }), t.flush(), await r
    },
    discard: () => {
      for (var e of t.current.keys()) e.wv = ia();
      !n && t.linked && t.discard()
    }
  }
}
var Fr = new Set,
  Ir = new Map;

function Lr(e) {
  Fr = e
}
var Rr = !1;

function zr(e, t) {
  return {
    f: 0,
    v: e,
    reactions: null,
    equals: _t,
    rv: 0,
    wv: 0
  }
}

function Br(e, t) {
  let n = zr(e, t);
  return Zi(n), n
}

function Vr(e, t = !1, n = !0) {
  let r = zr(e);
  if (t || (r.equals = yt), bt && n && k !== null && k.l !== null) {
    var i;
    ((i = k.l).s ?? (i.s = [])).push(r)
  }
  return r
}

function V(e, t, n = !1) {
  return q !== null && (!qi || q.f & 131072) && It() && q.f & 4325394 && (Xi === null || !Xi.has(e)) && et(), Hr(e, n ? qr(t) : t, er)
}

function Hr(e, t, n = null) {
  if (!e.equals(t)) {
    Ir.set(e, Gi ? t : e.v);
    var r = vr.ensure();
    if (r.capture(e, t), e.f & 2) {
      let t = e;
      e.f & 2048 && Un(t), z === null && Gt(t)
    }
    e.wv = ia(), Kr(e, de, n), It() && J !== null && J.f & 1024 && !(J.f & 96) && (Qi === null ? $i([e]) : Qi.push(e)), !r.is_fork && Fr.size > 0 && !Rr && Ur()
  }
  return t
}

function Ur() {
  Rr = !1;
  for (let e of Fr) {
    e.f & 1024 && j(e, fe);
    let t;
    try {
      t = aa(e)
    } catch {
      t = !0
    }
    t && ua(e)
  }
  Fr.clear()
}

function Wr(e, t = 1) {
  var n = Z(e),
    r = t === 1 ? n++ : n--;
  return V(e, n), r
}

function Gr(e) {
  V(e, e.v + 1)
}

function Kr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = It(), a = r.length, o = 0; o < a; o++) {
      var s = r[o],
        c = s.f;
      if (!(!i && s === J)) {
        var l = (c & de) === 0;
        if (l && j(s, t), c & 131072) Fr.add(s);
        else if (c & 2) {
          var u = s;
          z == null || z.delete(u), c & 65536 || (c & 512 && (J === null || !(J.f & 2097152)) && (s.f |= Se), Kr(u, fe, n))
        } else if (l) {
          var d = s;
          c & 16 && Or !== null && Or.add(d), n === null ? jr(d) : n.push(d)
        }
      }
    }
}

function qr(e) {
  if (typeof e != `object` || !e || Ee in e) return e;
  let t = y(e);
  if (t !== _ && t !== v) return e;
  var n = new Map,
    r = u(e),
    i = Br(0),
    a = null,
    o = na,
    s = e => {
      if (na === o) return e();
      var t = q,
        n = na;
      Ji(null), ra(o);
      var r = e();
      return Ji(t), ra(n), r
    };
  return r && n.set(`length`, Br(e.length, a)), new Proxy(e, {
    defineProperty(e, t, r) {
      (!(`value` in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Qe();
      var i = n.get(t);
      return i === void 0 ? s(() => {
        var e = Br(r.value, a);
        return n.set(t, e), e
      }) : V(i, r.value, !0), !0
    },
    deleteProperty(e, t) {
      var r = n.get(t);
      if (r === void 0) {
        if (t in e) {
          let e = s(() => Br(w, a));
          n.set(t, e), Gr(i)
        }
      } else V(r, w), Gr(i);
      return !0
    },
    get(t, r, i) {
      var o;
      if (r === Ee) return e;
      var c = n.get(r),
        l = r in t;
      if (c === void 0 && (!l || (o = h(t, r)) != null && o.writable) && (c = s(() => Br(qr(l ? t[r] : w), a)), n.set(r, c)), c !== void 0) {
        var u = Z(c);
        return u === w ? void 0 : u
      }
      return Reflect.get(t, r, i)
    },
    getOwnPropertyDescriptor(e, t) {
      var r = Reflect.getOwnPropertyDescriptor(e, t);
      if (r && `value` in r) {
        var i = n.get(t);
        i && (r.value = Z(i))
      } else if (r === void 0) {
        var a = n.get(t),
          o = a == null ? void 0 : a.v;
        if (a !== void 0 && o !== w) return {
          enumerable: !0,
          configurable: !0,
          value: o,
          writable: !0
        }
      }
      return r
    },
    has(e, t) {
      var r;
      if (t === Ee) return !0;
      var i = n.get(t),
        o = i !== void 0 && i.v !== w || Reflect.has(e, t);
      return (i !== void 0 || J !== null && (!o || (r = h(e, t)) != null && r.writable)) && (i === void 0 && (i = s(() => Br(o ? qr(e[t]) : w, a)), n.set(t, i)), Z(i) === w) ? !1 : o
    },
    set(e, t, o, c) {
      var l = n.get(t),
        u = t in e;
      if (r && t === `length`)
        for (var d = o; d < l.v; d += 1) {
          var f = n.get(d + ``);
          f === void 0 ? d in e && (f = s(() => Br(w, a)), n.set(d + ``, f)) : V(f, w)
        }
      if (l === void 0) {
        var p;
        (!u || (p = h(e, t)) != null && p.writable) && (l = s(() => Br(void 0, a)), V(l, qr(o)), n.set(t, l))
      } else {
        u = l.v !== w;
        var m = s(() => qr(o));
        V(l, m)
      }
      var g = Reflect.getOwnPropertyDescriptor(e, t);
      if (g != null && g.set && g.set.call(c, o), !u) {
        if (r && typeof t == `string`) {
          var _ = n.get(`length`),
            v = Number(t);
          Number.isInteger(v) && v >= _.v && V(_, v + 1)
        }
        Gr(i)
      }
      return !0
    },
    ownKeys(e) {
      Z(i);
      var t = Reflect.ownKeys(e).filter(e => {
        var t = n.get(e);
        return t === void 0 || t.v !== w
      });
      for (var [r, a] of n) a.v !== w && !(r in e) && t.push(r);
      return t
    },
    setPrototypeOf() {
      $e()
    }
  })
}

function Jr(e) {
  try {
    if (typeof e == `object` && e && Ee in e) return e[Ee]
  } catch {}
  return e
}

function Yr(e, t) {
  return Object.is(Jr(e), Jr(t))
}
var Xr, Zr, Qr, $r, ei;

function ti() {
  if (Xr === void 0) {
    Xr = window, Zr = document, Qr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    $r = h(t, `firstChild`).get, ei = h(t, `nextSibling`).get, b(e) && (e[je] = void 0, e[Ae] = null, e[Me] = void 0, e.__e = void 0), b(n) && (n[Ne] = void 0)
  }
}

function H(e = ``) {
  return document.createTextNode(e)
}

function U(e) {
  return $r.call(e)
}

function W(e) {
  return ei.call(e)
}

function ni(e, t) {
  if (!T) return U(e);
  var n = U(D);
  if (n === null) n = D.appendChild(H());
  else if (t && n.nodeType !== 3) {
    var r = H();
    return n == null || n.before(r), O(r), r
  }
  return t && ci(n), O(n), n
}

function ri(e, t = !1) {
  if (!T) {
    var n = U(e);
    return n instanceof Comment && n.data === `` ? W(n) : n
  }
  if (t) {
    if ((D == null ? void 0 : D.nodeType) !== 3) {
      var r = H();
      return D == null || D.before(r), O(r), r
    }
    ci(D)
  }
  return D
}

function ii(e, t = 1, n = !1) {
  let r = T ? D : e;
  for (var i; t--;) i = r, r = W(r);
  if (!T) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== 3) {
      var a = H();
      return r === null ? i == null || i.after(a) : r.before(a), O(a), a
    }
    ci(r)
  }
  return O(r), r
}

function ai(e) {
  e.textContent = ``
}

function oi() {
  return !1
}

function si(e, t, n) {
  return t == null || t === `http://www.w3.org/1999/xhtml` ? n ? document.createElement(e, {
    is: n
  }) : document.createElement(e) : n ? document.createElementNS(t, e, {
    is: n
  }) : document.createElementNS(t, e)
}

function ci(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function li(e, t) {
  if (t) {
    let t = document.body;
    e.autofocus = !0, A(() => {
      document.activeElement === t && e.focus()
    })
  }
}

function ui(e) {
  T && U(e) !== null && ai(e)
}
var di = !1;

function fi() {
  di || (di = !0, document.addEventListener(`reset`, e => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented)
        for (let n of e.target.elements) {
          var t;
          (t = n[Pe]) == null || t.call(n)
        }
    })
  }, {
    capture: !0
  }))
}

function pi(e, t, n, r = !0) {
  r && n();
  for (var i of t) e.addEventListener(i, n);
  bi(() => {
    for (var r of t) e.removeEventListener(r, n)
  })
}

function mi(e) {
  var t = q,
    n = J;
  Ji(null), Yi(null);
  try {
    return e()
  } finally {
    Ji(t), Yi(n)
  }
}

function hi(e, t, n, r = n) {
  e.addEventListener(t, () => mi(n));
  let i = e[Pe];
  e[Pe] = i ? () => {
    i(), r(!0)
  } : () => r(!0), fi()
}

function gi(e) {
  J === null && (q === null && We(e), Ue()), Gi && He(e)
}

function _i(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function vi(e, t) {
  var n = J;
  n !== null && n.f & 8192 && (e |= pe);
  var r = {
    ctx: k,
    deps: null,
    nodes: null,
    f: e | de | 512,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  R == null || R.register_created_effect(r);
  var i = r;
  if (e & 4) $n === null ? vr.ensure().schedule(r) : $n.push(r);
  else if (t !== null) {
    try {
      ua(r)
    } catch (e) {
      throw K(r), e
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= _e))
  }
  if (i !== null && (i.parent = n, n !== null && _i(i, n), q !== null && q.f & 2 && !(e & 64))) {
    var a = q;
    (a.effects ?? (a.effects = [])).push(i)
  }
  return r
}

function yi() {
  return q !== null && !qi
}

function bi(e) {
  let t = vi(8, null);
  return j(t, ue), t.teardown = e, t
}

function xi(e) {
  gi(`$effect`);
  var t = J.f;
  if (!q && t & 32 && k !== null && !k.i) {
    var n = k;
    (n.e ?? (n.e = [])).push(e)
  } else return Si(e)
}

function Si(e) {
  return vi(4 | be, e)
}

function Ci(e) {
  return gi(`$effect.pre`), vi(8 | be, e)
}

function wi(e) {
  vr.ensure();
  let t = vi(64 | ye, e);
  return () => {
    K(t)
  }
}

function Ti(e) {
  vr.ensure();
  let t = vi(64 | ye, e);
  return (e = {}) => new Promise(n => {
    e.outro ? Ri(t, () => {
      K(t), n(void 0)
    }) : (K(t), n(void 0))
  })
}

function Ei(e) {
  return vi(4, e)
}

function Di(e) {
  return vi(we | ye, e)
}

function Oi(e, t = 0) {
  return vi(8 | t, e)
}

function ki(e, t = [], n = [], r = []) {
  Nn(r, t, n, t => {
    vi(8, () => {
      e(...t.map(Z))
    })
  })
}

function Ai(e, t = [], n = [], r = []) {
  Nn(r, t, n, t => {
    vi(4, () => e(...t.map(Z)))
  })
}

function ji(e, t = 0) {
  return vi(16 | t, e)
}

function Mi(e, t = 0) {
  return vi(le | t, e)
}

function G(e) {
  return vi(32 | ye, e)
}

function Ni(e) {
  var t = e.teardown;
  if (t !== null) {
    let e = Gi,
      n = q;
    Ki(!0), Ji(null);
    try {
      t.call(null)
    } finally {
      Ki(e), Ji(n)
    }
  }
}

function Pi(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    let e = n.ac;
    e !== null && mi(() => {
      e.abort(Fe)
    });
    var r = n.next;
    n.f & 64 ? n.parent = null : K(n, t), n = r
  }
}

function Fi(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    t.f & 32 || K(t), t = n
  }
}

function K(e, t = !0) {
  var n = !1;
  (t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Ii(e.nodes.start, e.nodes.end), n = !0), e.f |= ge, Pi(e, t && !n), la(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (let e of r) e.stop();
  Ni(e), e.f ^= ge, e.f |= me;
  var i = e.parent;
  i !== null && i.first !== null && Li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null
}

function Ii(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : W(e);
    e.remove(), e = n
  }
}

function Li(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Ri(e, t, n = !0) {
  var r = [];
  zi(e, r, !0);
  var i = () => {
      n && K(e), t && t()
    },
    a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of r) s.out(o)
  } else i()
}

function zi(e, t, n) {
  if (!(e.f & 8192)) {
    e.f ^= pe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (let e of r)(e.is_global || n) && t.push(e);
    for (var i = e.first; i !== null;) {
      var a = i.next;
      if (!(i.f & 64)) {
        var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
        zi(i, t, o ? n : !1)
      }
      i = a
    }
  }
}

function Bi(e) {
  Vi(e, !0)
}

function Vi(e, t) {
  if (e.f & 8192) {
    e.f ^= pe, e.f & 1024 || (j(e, de), vr.ensure().schedule(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        i = !!(n.f & 65536) || !!(n.f & 32);
      Vi(n, i ? t : !1), n = r
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (let e of a)(e.is_global || t) && e.in()
  }
}

function Hi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var i = n === r ? null : W(n);
      t.append(n), n = i
    }
}
var Ui = null,
  Wi = !1,
  Gi = !1;

function Ki(e) {
  Gi = e
}
var q = null,
  qi = !1;

function Ji(e) {
  q = e
}
var J = null;

function Yi(e) {
  J = e
}
var Xi = null;

function Zi(e) {
  q !== null && (Xi ?? (Xi = new Set)).add(e)
}
var Y = null,
  X = 0,
  Qi = null;

function $i(e) {
  Qi = e
}
var ea = 1,
  ta = 0,
  na = ta;

function ra(e) {
  na = e
}

function ia() {
  return ++ea
}

function aa(e) {
  var t = e.f;
  if (t & 2048) return !0;
  if (t & 2 && (e.f &= ~Se), t & 4096) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (aa(a) && Wn(a), a.wv > e.wv) return !0
    }
    t & 512 && z === null && j(e, ue)
  }
  return !1
}

function oa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Xi !== null && Xi.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & 2 ? oa(a, t, !1) : t === a && (n ? j(a, de) : a.f & 1024 && j(a, fe), jr(a))
    }
}

function sa(e) {
  var t = Y,
    n = X,
    r = Qi,
    i = q,
    a = Xi,
    o = k,
    s = qi,
    c = na,
    l = e.f;
  Y = null, X = 0, Qi = null, q = l & 96 ? null : e, Xi = null, Ot(e.ctx), qi = !1, na = ++ta, e.ac !== null && (mi(() => {
    e.ac.abort(Fe)
  }), e.ac = null);
  try {
    e.f |= Ce;
    var u = e.fn,
      d = u();
    e.f |= he;
    var f = e.deps,
      p = R == null ? void 0 : R.is_fork;
    if (Y !== null) {
      var m;
      if (p || la(e, X), f !== null && X > 0)
        for (f.length = X + Y.length, m = 0; m < Y.length; m++) f[X + m] = Y[m];
      else e.deps = f = Y;
      if (yi() && e.f & 512)
        for (m = X; m < f.length; m++) {
          var h;
          ((h = f[m]).reactions ?? (h.reactions = [])).push(e)
        }
    } else !p && f !== null && X < f.length && (la(e, X), f.length = X);
    if (It() && Qi !== null && !qi && f !== null && !(e.f & 6146))
      for (m = 0; m < Qi.length; m++) oa(Qi[m], e);
    if (i !== null && i !== e) {
      if (ta++, i.deps !== null)
        for (let e = 0; e < n; e += 1) i.deps[e].rv = ta;
      if (t !== null)
        for (let e of t) e.rv = ta;
      Qi !== null && (r === null ? r = Qi : r.push(...Qi))
    }
    return e.f & 8388608 && (e.f ^= Te), d
  } catch (e) {
    return Ht(e)
  } finally {
    e.f ^= Ce, Y = t, X = n, Qi = r, q = i, Xi = a, Ot(o), qi = s, na = c
  }
}

function ca(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = d.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop())
    }
  }
  if (n === null && t.f & 2 && (Y === null || !f.call(Y, t))) {
    var a = t;
    a.f & 512 && (a.f ^= 512, a.f &= ~Se), a.v !== w && Gt(a), Gn(a), la(a, 0)
  }
}

function la(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) ca(e, n[r])
}

function ua(e) {
  var t = e.f;
  if (!(t & 16384)) {
    j(e, ue);
    var n = J,
      r = Wi;
    J = e, Wi = !0;
    try {
      t & 16777232 ? Fi(e) : Pi(e), Ni(e);
      var i = sa(e);
      e.teardown = typeof i == `function` ? i : null, e.wv = ea
    } finally {
      Wi = r, J = n
    }
  }
}
async function da() {
  await Promise.resolve(), Er()
}

function fa() {
  return vr.ensure().settled()
}

function Z(e) {
  var t = !!(e.f & 2);
  if (Ui == null || Ui.add(e), q !== null && !qi && !(J !== null && J.f & 16384) && (Xi === null || !Xi.has(e))) {
    var n = q.deps;
    if (q.f & 2097152) e.rv < ta && (e.rv = ta, Y === null && n !== null && n[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
    else {
      var r;
      (r = q).deps ?? (r.deps = []), f.call(q.deps, e) || q.deps.push(e);
      var i = e.reactions;
      i === null ? e.reactions = [q] : f.call(i, q) || i.push(q)
    }
  }
  if (Gi && Ir.has(e)) return Ir.get(e);
  if (t) {
    var a = e;
    if (Gi) {
      var o = a.v;
      return (!(a.f & 1024) && a.reactions !== null || ma(a)) && (o = Un(a)), Ir.set(a, o), o
    }
    var s = !(a.f & 512) && !qi && q !== null && (Wi || !!(q.f & 512)),
      c = (a.f & he) === 0;
    aa(a) && (s && (a.f |= 512), Wn(a)), s && !c && (Kn(a), pa(a))
  }
  if (z != null && z.has(e)) return z.get(e);
  if (e.f & 8388608) throw e.v;
  return e.v
}

function pa(e) {
  if (e.f |= 512, e.deps !== null)
    for (let t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), t.f & 2 && !(t.f & 512) && (Kn(t), pa(t))
}

function ma(e) {
  if (e.v === w) return !0;
  if (e.deps === null) return !1;
  for (let t of e.deps)
    if (Ir.has(t) || t.f & 2 && ma(t)) return !0;
  return !1
}

function Q(e) {
  var t = qi;
  try {
    return qi = !0, e()
  } finally {
    qi = t
  }
}

function ha(e) {
  if (!(typeof e != `object` || !e || e instanceof EventTarget)) {
    if (Ee in e) ga(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        let n = e[t];
        typeof n == `object` && n && Ee in n && ga(n)
      }
  }
}

function ga(e, t = new Set) {
  if (typeof e == `object` && e && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e) try {
      ga(e[n], t)
    } catch {}
    let n = y(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      let t = g(n);
      for (let n in t) {
        let r = t[n].get;
        if (r) try {
          r.call(e)
        } catch {}
      }
    }
  }
}

function _a() {
  return Symbol(at)
}

function va(e) {
  return e.endsWith(`capture`) && e !== `gotpointercapture` && e !== `lostpointercapture`
}
var ya = [`beforeinput`, `click`, `change`, `dblclick`, `contextmenu`, `focusin`, `focusout`, `input`, `keydown`, `keyup`, `mousedown`, `mousemove`, `mouseout`, `mouseover`, `mouseup`, `pointerdown`, `pointermove`, `pointerout`, `pointerover`, `pointerup`, `touchend`, `touchmove`, `touchstart`];

function ba(e) {
  return ya.includes(e)
}
var xa = `allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),
  Sa = {
    formnovalidate: `formNoValidate`,
    ismap: `isMap`,
    nomodule: `noModule`,
    playsinline: `playsInline`,
    readonly: `readOnly`,
    defaultvalue: `defaultValue`,
    defaultchecked: `defaultChecked`,
    srcobject: `srcObject`,
    novalidate: `noValidate`,
    allowfullscreen: `allowFullscreen`,
    disablepictureinpicture: `disablePictureInPicture`,
    disableremoteplayback: `disableRemotePlayback`
  };

function Ca(e) {
  return e = e.toLowerCase(), Sa[e] ?? e
} [...xa];
var wa = [`touchstart`, `touchmove`];

function Ta(e) {
  return wa.includes(e)
}
var Ea = [`textarea`, `script`, `style`, `title`];

function Da(e) {
  return Ea.includes(e)
}
var Oa = Symbol(`events`),
  ka = new Set,
  Aa = new Set;

function ja(e) {
  if (!T) return;
  e.removeAttribute(`onload`), e.removeAttribute(`onerror`);
  let t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Ma(e, t, n, r = {}) {
  function i(e) {
    if (r.capture || Ra.call(t, e), !e.cancelBubble) return mi(() => n == null ? void 0 : n.call(this, e))
  }
  return e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel` ? A(() => {
    t.addEventListener(e, i, r)
  }) : t.addEventListener(e, i, r), i
}

function Na(e, t, n, r = {}) {
  var i = Ma(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r)
  }
}

function Pa(e, t, n, r, i) {
  var a = {
      capture: r,
      passive: i
    },
    o = Ma(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && bi(() => {
    t.removeEventListener(e, o, a)
  })
}

function Fa(e, t, n) {
  (t[Oa] ?? (t[Oa] = {}))[e] = n
}

function Ia(e) {
  for (var t = 0; t < e.length; t++) ka.add(e[t]);
  for (var n of Aa) n(e)
}
var La = null;

function Ra(e) {
  var t, n = this,
    r = n.ownerDocument,
    i = e.type,
    a = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [],
    o = a[0] || e.target;
  La = e;
  var s = 0,
    c = La === e && e[Oa];
  if (c) {
    var l = a.indexOf(c);
    if (l !== -1 && (n === document || n === window)) {
      e[Oa] = n;
      return
    }
    var u = a.indexOf(n);
    if (u === -1) return;
    l <= u && (s = l)
  }
  if (o = a[s] || e.target, o !== n) {
    m(e, `currentTarget`, {
      configurable: !0,
      get() {
        return o || r
      }
    });
    var d = q,
      f = J;
    Ji(null), Yi(null);
    try {
      for (var p, h = []; o !== null && o !== n;) {
        try {
          var g, _ = (g = o[Oa]) == null ? void 0 : g[i];
          _ != null && (!o.disabled || e.target === o) && _.call(o, e)
        } catch (e) {
          p ? h.push(e) : p = e
        }
        if (e.cancelBubble) break;
        s++, o = s < a.length ? a[s] : null
      }
      if (p) {
        for (let e of h) queueMicrotask(() => {
          throw e
        });
        throw p
      }
    } finally {
      e[Oa] = n, delete e.currentTarget, Ji(d), Yi(f)
    }
  }
}
var za, Ba = ((za = globalThis) == null || (za = za.window) == null ? void 0 : za.trustedTypes) && globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, {
  createHTML: e => e
});

function Va(e) {
  return (Ba == null ? void 0 : Ba.createHTML(e)) ?? e
}

function Ha(e) {
  var t = si(`template`);
  return t.innerHTML = Va(e.replaceAll(`<!>`, `<!---->`)), t.content
}

function $(e, t) {
  var n = J;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function Ua(e, t) {
  var n = !!(t & 1),
    r = !!(t & 2),
    i, a = !e.startsWith(`<!>`);
  return () => {
    if (T) return $(D, null), D;
    i === void 0 && (i = Ha(a ? e : `<!>` + e), n || (i = U(i)));
    var t = r || Qr ? document.importNode(i, !0) : i.cloneNode(!0);
    if (n) {
      var o = U(t),
        s = t.lastChild;
      $(o, s)
    } else $(t, t);
    return t
  }
}

function Wa(e, t, n = `svg`) {
  var r = !e.startsWith(`<!>`),
    i = !!(t & 1),
    a = `<${n}>${r?e:`<!>`+e}</${n}>`,
    o;
  return () => {
    if (T) return $(D, null), D;
    if (!o) {
      var e = U(Ha(a));
      if (i)
        for (o = document.createDocumentFragment(); U(e);) o.appendChild(U(e));
      else o = U(e)
    }
    var t = o.cloneNode(!0);
    if (i) {
      var n = U(t),
        r = t.lastChild;
      $(n, r)
    } else $(t, t);
    return t
  }
}

function Ga(e, t) {
  return Wa(e, t, `svg`)
}

function Ka(e = ``) {
  if (!T) {
    var t = H(e + ``);
    return $(t, t), t
  }
  var n = D;
  return n.nodeType === 3 ? ci(n) : (n.before(n = H()), O(n)), $(n, n), n
}

function qa() {
  if (T) return $(D, null), D;
  var e = document.createDocumentFragment(),
    t = document.createComment(``),
    n = H();
  return e.append(t, n), $(t, n), e
}

function Ja(e, t) {
  if (T) {
    var n = J;
    (!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), ft();
    return
  }
  e !== null && e.before(t)
}

function Ya() {
  var e, t, n;
  if (T && D && D.nodeType === 8 && (e = D.textContent) != null && e.startsWith(`$`)) {
    let e = D.textContent.substring(1);
    return ft(), e
  }
  return (t = (n = window).__svelte ?? (n.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
var Xa = !0;

function Za(e) {
  Xa = e
}

function Qa(e, t) {
  var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
  n !== (e[Ne] ?? (e[Ne] = e.nodeValue)) && (e[Ne] = n, e.nodeValue = `${n}`)
}

function $a(e, t) {
  return no(e, t)
}

function eo(e, t) {
  ti(), t.intro = t.intro ?? !1;
  let n = t.target,
    r = T,
    i = D;
  try {
    for (var a = U(n); a && (a.nodeType !== 8 || a.data !== `[`);) a = W(a);
    if (!a) throw nt;
    E(!0), O(a);
    let r = no(e, {
      ...t,
      anchor: a
    });
    return E(!1), r
  } catch (r) {
    if (r instanceof Error && r.message.split(`
`).some(e => e.startsWith(`https://svelte.dev/e/`))) throw r;
    return r !== nt && console.warn(`Failed to hydrate: `, r), t.recover === !1 && Ye(), ti(), ai(n), E(!1), $a(e, t)
  } finally {
    E(r), O(i)
  }
}
var to = new Map;

function no(e, {
  target: t,
  anchor: n,
  props: r = {},
  events: i,
  context: a,
  intro: o = !0,
  transformError: s
}) {
  ti();
  var c = void 0,
    l = Ti(() => {
      var l = n ?? t.appendChild(H());
      cn(l, {
        pending: () => {}
      }, t => {
        Pt({});
        var n = k;
        if (a && (n.c = a), i && (r.$$events = i), T && $(t, null), Xa = o, c = e(t, r) || {}, Xa = !0, T && (J.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== `]`)) throw ct(), nt;
        Ft()
      }, s);
      var u = new Set,
        d = e => {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!u.has(r)) {
              u.add(r);
              var i = Ta(r);
              for (let e of [t, document]) {
                var a = to.get(e);
                a === void 0 && (a = new Map, to.set(e, a));
                var o = a.get(r);
                o === void 0 ? (e.addEventListener(r, Ra, {
                  passive: i
                }), a.set(r, 1)) : a.set(r, o + 1)
              }
            }
          }
        };
      return d(p(ka)), Aa.add(d), () => {
        for (var e of u)
          for (let n of [t, document]) {
            var r = to.get(n),
              i = r.get(e);
            --i == 0 ? (n.removeEventListener(e, Ra), r.delete(e), r.size === 0 && to.delete(n)) : r.set(e, i)
          }
        if (Aa.delete(d), l !== n) {
          var a;
          (a = l.parentNode) == null || a.removeChild(l)
        }
      }
    });
  return ro.set(c, l), c
}
var ro = new WeakMap;

function io(e, t) {
  let n = ro.get(e);
  return n ? (ro.delete(e), n(t)) : Promise.resolve()
}
var ao = new WeakMap,
  oo = new WeakMap,
  so = new WeakMap,
  co = new WeakMap,
  lo = new WeakMap,
  uo = new WeakMap,
  fo = new WeakMap,
  po = class {
    constructor(e, t = !0) {
      C(this, `anchor`, void 0), M(this, ao, new Map), M(this, oo, new Map), M(this, so, new Map), M(this, co, new Set), M(this, lo, !0), M(this, uo, e => {
        if (F(ao, this).has(e)) {
          var t = F(ao, this).get(e),
            n = F(oo, this).get(t);
          if (n) Bi(n), F(co, this).delete(t);
          else {
            var r = F(so, this).get(t);
            r && (Bi(r.effect), F(oo, this).set(t, r.effect), F(so, this).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect)
          }
          for (let [t, n] of F(ao, this)) {
            if (F(ao, this).delete(t), t === e) break;
            let r = F(so, this).get(n);
            r && (K(r.effect), F(so, this).delete(n))
          }
          for (let [e, r] of F(oo, this)) {
            if (e === t || F(co, this).has(e)) continue;
            let i = () => {
              if (Array.from(F(ao, this).values()).includes(e)) {
                var t = document.createDocumentFragment();
                Hi(r, t), t.append(H()), F(so, this).set(e, {
                  effect: r,
                  fragment: t
                })
              } else K(r);
              F(co, this).delete(e), F(oo, this).delete(e)
            };
            F(lo, this) || !n ? (F(co, this).add(e), Ri(r, i, !1)) : i()
          }
        }
      }), M(this, fo, e => {
        F(ao, this).delete(e);
        let t = Array.from(F(ao, this).values());
        for (let [e, n] of F(so, this)) t.includes(e) || (K(n.effect), F(so, this).delete(e))
      }), this.anchor = e, P(lo, this, t)
    }
    ensure(e, t) {
      var n = R,
        r = oi();
      if (t && !F(oo, this).has(e) && !F(so, this).has(e)) {
        if (r) {
          var i = document.createDocumentFragment(),
            a = H();
          i.append(a), F(so, this).set(e, {
            effect: G(() => t(a)),
            fragment: i
          })
        } else F(oo, this).set(e, G(() => t(this.anchor)))
      }
      if (F(ao, this).set(n, e), r) {
        for (let [t, r] of F(oo, this)) t === e ? n.unskip_effect(r) : n.skip_effect(r);
        for (let [t, r] of F(so, this)) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
        n.oncommit(F(uo, this)), n.ondiscard(F(fo, this))
      } else T && (this.anchor = D), F(uo, this).call(this, n)
    }
  };

function mo(e, t, n = !1) {
  var r;
  T && (r = D, ft());
  var i = new po(e),
    a = n ? _e : 0;

  function o(e, t) {
    if (T) {
      var n = gt(r);
      if (e !== parseInt(n.substring(1))) {
        var a = ht();
        O(a), i.anchor = a, E(!1), i.ensure(e, t), E(!0);
        return
      }
    }
    i.ensure(e, t)
  }
  ji(() => {
    var e = !1;
    t((t, n = 0) => {
      e = !0, o(n, t)
    }), e || o(-1, null)
  }, a)
}
var ho = Symbol(`NaN`);

function go(e, t, n) {
  T && ft();
  var r = new po(e),
    i = !It();
  ji(() => {
    var e = t();
    e !== e && (e = ho), i && typeof e == `object` && e && (e = {}), r.ensure(e, n)
  })
}

function _o(e, t) {
  return t
}

function vo(e, t, n) {
  for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
    let n = t[s];
    Ri(n, () => {
      if (a) {
        if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
          var t = e.outrogroups;
          yo(e, p(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null)
        }
      } else --o
    }, !1)
  }
  if (o === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var l = n,
        u = l.parentNode;
      ai(u), u.append(l), e.items.clear()
    }
    yo(e, t, !c)
  } else a = {
    pending: new Set(t),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(a)
}

function yo(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = new Set;
    for (let t of e.pending.values())
      for (let n of t) r.add(e.items.get(n).e)
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    r != null && r.has(a) ? (a.f |= xe, Hi(a, document.createDocumentFragment())) : K(t[i], n)
  }
}
var bo;

function xo(e, t, n, r, i, a = null) {
  var o = e,
    s = new Map;
  if (t & 4) {
    var c = e;
    o = T ? O(U(c)) : c.appendChild(H())
  }
  T && ft();
  var l = null,
    d = Vn(() => {
      var e = n();
      return u(e) ? e : e == null ? [] : p(e)
    }),
    f, m = new Map,
    h = !0;

  function g(e) {
    v.effect.f & 16384 || (v.pending.delete(e), v.fallback = l, Co(v, f, o, t, r), l !== null && (f.length === 0 ? l.f & 33554432 ? (l.f ^= xe, To(l, null, o)) : Bi(l) : Ri(l, () => {
      l = null
    })))
  }

  function _(e) {
    v.pending.delete(e)
  }
  var v = {
    effect: ji(() => {
      f = Z(d);
      var e = f.length;
      let c = !1;
      T && gt(o) === `[!` != (e === 0) && (o = ht(), O(o), E(!1), c = !0);
      for (var u = new Set, p = R, v = oi(), y = 0; y < e; y += 1) {
        T && D.nodeType === 8 && D.data === `]` && (o = D, c = !0, E(!1));
        var b = f[y],
          x = r(b, y),
          S = h ? null : s.get(x);
        S ? (S.v && Hr(S.v, b), S.i && Hr(S.i, y), v && p.unskip_effect(S.e)) : (S = wo(s, h ? o : bo ?? (bo = H()), b, x, y, i, t, n), h || (S.e.f |= xe), s.set(x, S)), u.add(x)
      }
      if (e === 0 && a && !l && (h ? l = G(() => a(o)) : (l = G(() => a(bo ?? (bo = H()))), l.f |= xe)), e > u.size && Ve(``, ``, ``), T && e > 0 && O(ht()), !h) {
        if (m.set(p, u), v) {
          for (let [e, t] of s) u.has(e) || p.skip_effect(t.e);
          p.oncommit(g), p.ondiscard(_)
        } else g(p)
      }
      c && E(!0), Z(d)
    }),
    flags: t,
    items: s,
    pending: m,
    outrogroups: null,
    fallback: l
  };
  h = !1, T && (o = D)
}

function So(e) {
  for (; e !== null && !(e.f & 32);) e = e.next;
  return e
}

function Co(e, t, n, r, i) {
  var a = !!(r & 8),
    o = t.length,
    s = e.items,
    c = So(e.effect.first),
    l, u = null,
    d, f = [],
    m = [],
    h, g, _, v;
  if (a) {
    for (v = 0; v < o; v += 1)
      if (h = t[v], g = i(h, v), _ = s.get(g).e, !(_.f & 33554432)) {
        var y;
        (y = _.nodes) == null || (y = y.a) == null || y.measure(), (d ?? (d = new Set)).add(_)
      }
  }
  for (v = 0; v < o; v += 1) {
    if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null)
      for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
    if (_.f & 8192 && (Bi(_), a)) {
      var b;
      (b = _.nodes) == null || (b = b.a) == null || b.unfix(), (d ?? (d = new Set)).delete(_)
    }
    if (_.f & 33554432) {
      if (_.f ^= xe, _ === c) To(_, null, n);
      else {
        var x = u ? u.next : c;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Eo(e, u, _), Eo(e, _, x), To(_, x, n), u = _, f = [], m = [], c = So(u.next);
        continue
      }
    }
    if (_ !== c) {
      if (l !== void 0 && l.has(_)) {
        if (f.length < m.length) {
          var S = m[0],
            ee;
          u = S.prev;
          var te = f[0],
            ne = f[f.length - 1];
          for (ee = 0; ee < f.length; ee += 1) To(f[ee], S, n);
          for (ee = 0; ee < m.length; ee += 1) l.delete(m[ee]);
          Eo(e, te.prev, ne.next), Eo(e, u, te), Eo(e, ne, S), c = S, u = ne, --v, f = [], m = []
        } else l.delete(_), To(_, c, n), Eo(e, _.prev, _.next), Eo(e, _, u === null ? e.effect.first : u.next), Eo(e, u, _), u = _;
        continue
      }
      for (f = [], m = []; c !== null && c !== _;)(l ?? (l = new Set)).add(c), m.push(c), c = So(c.next);
      if (c === null) continue
    }
    _.f & 33554432 || f.push(_), u = _, c = So(_.next)
  }
  if (e.outrogroups !== null) {
    for (let t of e.outrogroups)
      if (t.pending.size === 0) {
        var re;
        yo(e, p(t.done)), (re = e.outrogroups) == null || re.delete(t)
      } e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (c !== null || l !== void 0) {
    var ie = [];
    if (l !== void 0)
      for (_ of l) _.f & 8192 || ie.push(_);
    for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ie.push(c), c = So(c.next);
    var ae = ie.length;
    if (ae > 0) {
      var oe = r & 4 && o === 0 ? n : null;
      if (a) {
        for (v = 0; v < ae; v += 1) {
          var se;
          (se = ie[v].nodes) == null || (se = se.a) == null || se.measure()
        }
        for (v = 0; v < ae; v += 1) {
          var C;
          (C = ie[v].nodes) == null || (C = C.a) == null || C.fix()
        }
      }
      vo(e, ie, oe)
    }
  }
  a && A(() => {
    if (d !== void 0)
      for (_ of d) {
        var e;
        (e = _.nodes) == null || (e = e.a) == null || e.apply()
      }
  })
}

function wo(e, t, n, r, i, a, o, s) {
  var c = o & 1 ? o & 16 ? zr(n) : Vr(n, !1, !1) : null,
    l = o & 2 ? zr(i) : null;
  return {
    v: c,
    i: l,
    e: G(() => (a(t, c ?? n, l ?? i, s), () => {
      e.delete(r)
    }))
  }
}

function To(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
      var o = W(r);
      if (a.before(r), r === i) return;
      r = o
    }
}

function Eo(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t
}

function Do(e, t, n = !1, r = !1, i = !1, a = !1) {
  var o = e,
    s = ``;
  if (n) {
    var c = e;
    T && (o = O(U(c)))
  }
  ki(() => {
    var e = J;
    if (s === (s = t() ?? ``)) {
      T && ft();
      return
    }
    if (n && !T) {
      e.nodes = null, c.innerHTML = s, s !== `` && $(U(c), c.lastChild);
      return
    }
    if (e.nodes !== null && (Ii(e.nodes.start, e.nodes.end), e.nodes = null), s !== ``) {
      if (T) {
        for (var a = D.data, l = ft(), u = l; l !== null && (l.nodeType !== 8 || l.data !== ``);) u = l, l = W(l);
        if (l === null) throw ct(), nt;
        $(D, u), o = O(l);
        return
      }
      var d = si(r ? `svg` : i ? `math` : `template`, r ? rt : i ? it : void 0);
      d.innerHTML = s;
      var f = r || i ? d : d.content;
      if ($(U(f), f.lastChild), r || i)
        for (; U(f);) o.before(U(f));
      else o.before(f)
    }
  })
}

function Oo(e, t, ...n) {
  var r = new po(e);
  ji(() => {
    let e = t() ?? null;
    r.ensure(e, e && (t => e(t, ...n)))
  }, _e)
}

function ko(e) {
  return (t, ...n) => {
    var r, i = e(...n),
      a;
    T ? (a = D, ft()) : (a = U(Ha(i.render().trim())), t.before(a));
    let o = (r = i.setup) == null ? void 0 : r.call(i, a);
    $(a, a), typeof o == `function` && bi(o)
  }
}

function Ao(e, t, n) {
  var r;
  T && (r = D, ft());
  var i = new po(e);
  ji(() => {
    var e = t() ?? null;
    if (T && gt(r) === `[` != (e !== null)) {
      var a = ht();
      O(a), i.anchor = a, E(!1), i.ensure(e, e && (t => n(t, e))), E(!0);
      return
    }
    i.ensure(e, e && (t => n(t, e)))
  }, _e)
}
var jo = () => performance.now(),
  Mo = {
    tick: e => requestAnimationFrame(e),
    now: () => jo(),
    tasks: new Set
  };

function No() {
  let e = Mo.now();
  Mo.tasks.forEach(t => {
    t.c(e) || (Mo.tasks.delete(t), t.f())
  }), Mo.tasks.size !== 0 && Mo.tick(No)
}

function Po(e) {
  let t;
  return Mo.tasks.size === 0 && Mo.tick(No), {
    promise: new Promise(n => {
      Mo.tasks.add(t = {
        c: e,
        f: n
      })
    }),
    abort() {
      Mo.tasks.delete(t)
    }
  }
}

function Fo(e, t) {
  mi(() => {
    e.dispatchEvent(new CustomEvent(t))
  })
}

function Io(e) {
  if (e === `float`) return `cssFloat`;
  if (e === `offset`) return `cssOffset`;
  if (e.startsWith(`--`)) return e;
  let t = e.split(`-`);
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(e => e[0].toUpperCase() + e.slice(1)).join(``)
}

function Lo(e) {
  let t = {},
    n = e.split(`;`);
  for (let e of n) {
    let [n, r] = e.split(`:`);
    if (!n || r === void 0) break;
    let i = Io(n.trim());
    t[i] = r.trim()
  }
  return t
}
var Ro = e => e,
  zo = null;

function Bo(e) {
  zo = e
}

function Vo(e, t, n) {
  var r = (zo ?? J).nodes,
    i, a, o, s = null;
  r.a ?? (r.a = {
    element: e,
    measure() {
      i = this.element.getBoundingClientRect()
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        let e = t()(this.element, {
          from: i,
          to: a
        }, n == null ? void 0 : n());
        o = Uo(this.element, e, void 0, 1, () => {}, () => {
          o == null || o.abort(), o = void 0
        })
      }
    },
    fix() {
      if (!e.getAnimations().length) {
        var {
          position: t,
          width: n,
          height: r
        } = getComputedStyle(e);
        if (t !== `absolute` && t !== `fixed`) {
          var a = e.style;
          s = {
            position: a.position,
            width: a.width,
            height: a.height,
            transform: a.transform
          }, a.position = `absolute`, a.width = n, a.height = r;
          var o = e.getBoundingClientRect();
          if (i.left !== o.left || i.top !== o.top) {
            var c = `translate(${i.left-o.left}px, ${i.top-o.top}px)`;
            a.transform = a.transform ? `${a.transform} ${c}` : c
          }
        }
      }
    },
    unfix() {
      if (s) {
        var t = e.style;
        t.position = s.position, t.width = s.width, t.height = s.height, t.transform = s.transform
      }
    }
  }), r.a.element = e
}

function Ho(e, t, n, r) {
  var i, a = !!(e & 1),
    o = !!(e & 2),
    s = a && o,
    c = !!(e & 4),
    l = s ? `both` : a ? `in` : `out`,
    u, d = t.inert,
    f = t.style.overflow,
    p, m;

  function h() {
    return mi(() => u ?? (u = n()(t, (r == null ? void 0 : r()) ?? {}, {
      direction: l
    })))
  }
  var g = {
      is_global: c,
      in() {
        if (t.inert = d, !a) {
          var e;
          m == null || m.abort(), m == null || (e = m.reset) == null || e.call(m);
          return
        }
        o || p == null || p.abort(), p = Uo(t, h(), m, 1, () => {
          Fo(t, `introstart`)
        }, () => {
          Fo(t, `introend`), p == null || p.abort(), p = u = void 0, t.style.overflow = f
        })
      },
      out(e) {
        if (!o) {
          e == null || e(), u = void 0;
          return
        }
        t.inert = !0, m = Uo(t, h(), p, 0, () => {
          Fo(t, `outrostart`)
        }, () => {
          Fo(t, `outroend`), e == null || e()
        })
      },
      stop: () => {
        p == null || p.abort(), m == null || m.abort()
      }
    },
    _ = J;
  if (((i = _.nodes).t ?? (i.t = [])).push(g), a && Xa) {
    var v = c;
    if (!v) {
      for (var y = _.parent; y && y.f & 65536;)
        for (;
          (y = y.parent) && !(y.f & 16););
      v = !y || !!(y.f & 32768)
    }
    v && Ei(() => {
      Q(() => g.in())
    })
  }
}

function Uo(e, t, n, r, i, a) {
  var o = r === 1;
  if (x(t)) {
    var s, c = !1;
    return A(() => {
      c || (s = Uo(e, t({
        direction: o ? `in` : `out`
      }), n, r, i, a))
    }), {
      abort: () => {
        c = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (n == null || n.deactivate(), !(t != null && t.duration) && !(t != null && t.delay)) return i(), a(), {
    abort: S,
    deactivate: S,
    reset: S,
    t: () => r
  };
  let {
    delay: l = 0,
    css: u,
    tick: d,
    easing: f = Ro
  } = t;
  var p = [];
  if (o && n === void 0 && (d && d(0, 1), u)) {
    var m = Lo(u(0, 1));
    p.push(m, m)
  }
  var h = () => 1 - r,
    g = e.animate(p, {
      duration: l,
      fill: `forwards`
    });
  return g.onfinish = () => {
    g.cancel(), i();
    var o = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var s = r - o,
      c = t.duration * Math.abs(s),
      l = [];
    if (c > 0) {
      var p = !1;
      if (u)
        for (var m = Math.ceil(c / (1e3 / 60)), _ = 0; _ <= m; _ += 1) {
          var v = o + s * f(_ / m),
            y = Lo(u(v, 1 - v));
          l.push(y), p || (p = y.overflow === `hidden`)
        }
      p && (e.style.overflow = `hidden`), h = () => {
        var e = g.currentTime;
        return o + s * f(e / c)
      }, d && Po(() => {
        if (g.playState !== `running`) return !1;
        var e = h();
        return d(e, 1 - e), !0
      })
    }
    g = e.animate(l, {
      duration: c,
      fill: `forwards`
    }), g.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), a()
    }
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = S)
    },
    deactivate: () => {
      a = S
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0))
    },
    t: () => h()
  }
}

function Wo(e, t, n, r, i, a) {
  let o = T;
  T && ft();
  var s = null;
  T && D.nodeType === 1 && (s = D, ft());
  var c = T ? D : e,
    l = J,
    u = new po(c, !1);
  ji(() => {
    let e = t() || null;
    var a = i ? i() : n || e === `svg` ? rt : void 0;
    if (e === null) {
      u.ensure(null, null), Za(!0);
      return
    }
    return u.ensure(e, t => {
      if (e) {
        if (s = T ? s : si(e, a), $(s, s), r) {
          var n = null;
          T && Da(e) && s.append(n = document.createComment(``));
          var i = T ? U(s) : s.appendChild(H());
          T && (i === null ? E(!1) : O(i)), Bo(l), r(s, i), n == null || n.remove(), Bo(null)
        }
        J.nodes.end = s, t.before(s)
      }
      T && O(t)
    }), Za(!0), () => {
      e && Za(!1)
    }
  }, _e), bi(() => {
    Za(!0)
  }), o && (E(!0), O(c))
}

function Go(e, t) {
  let n = null,
    r = T;
  var i;
  if (T) {
    n = D;
    for (var a = U(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = W(a);
    if (a === null) E(!1);
    else {
      var o = W(a);
      a.remove(), O(o)
    }
  }
  T || (i = document.head.appendChild(H()));
  try {
    ji(() => {
      var e = G(() => t(i));
      e.f |= ve
    })
  } finally {
    r && (E(!0), O(n))
  }
}

function Ko(e, t, n) {
  Ei(() => {
    var r = Q(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var i = !1,
        a = {};
      Oi(() => {
        var e = n();
        ha(e), i && vt(a, e) && (a = e, r.update(e))
      }), i = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}

function qo(e, t) {
  var n = void 0,
    r;
  Mi(() => {
    n !== (n = t()) && (r && (K(r), r = null), n && (r = G(() => {
      Ei(() => n(e))
    })))
  })
}

function Jo(e) {
  var t, n, r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Jo(e[t])) && (r && (r += ` `), r += n)
    } else
      for (n in e) e[n] && (r && (r += ` `), r += n)
  }
  return r
}

function Yo() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)(e = arguments[n]) && (t = Jo(e)) && (r && (r += ` `), r += t);
  return r
}

function Xo(e) {
  return typeof e == `object` ? Yo(e) : e ?? ``
}
var Zo = [...` 	
\r\f\xA0\v﻿`];

function Qo(e, t, n) {
  var r = e == null ? `` : `` + e;
  if (t && (r = r ? r + ` ` + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i]) r = r ? r + ` ` + i : i;
      else if (r.length)
      for (var a = i.length, o = 0;
        (o = r.indexOf(i, o)) >= 0;) {
        var s = o + a;
        (o === 0 || Zo.includes(r[o - 1])) && (s === r.length || Zo.includes(r[s])) ? r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1): o = s
      }
  }
  return r === `` ? null : r
}

function $o(e, t = !1) {
  var n = t ? ` !important;` : `;`,
    r = ``;
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== `` && (r += ` ` + i + `: ` + a + n)
  }
  return r
}

function es(e) {
  return e[0] !== `-` || e[1] !== `-` ? e.toLowerCase() : e
}

function ts(e, t) {
  if (t) {
    var n = ``,
      r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, ``).trim();
      var a = !1,
        o = 0,
        s = !1,
        c = [];
      r && c.push(...Object.keys(r).map(es)), i && c.push(...Object.keys(i).map(es));
      var l = 0,
        u = -1;
      let t = e.length;
      for (var d = 0; d < t; d++) {
        var f = e[d];
        if (s ? f === `/` && e[d - 1] === `*` && (s = !1) : a ? a === f && (a = !1) : f === `/` && e[d + 1] === `*` ? s = !0 : f === `"` || f === `'` ? a = f : f === `(` ? o++ : f === `)` && o--, !s && a === !1 && o === 0) {
          if (f === `:` && u === -1) u = d;
          else if (f === `;` || d === t - 1) {
            if (u !== -1) {
              var p = es(e.substring(l, u).trim());
              if (!c.includes(p)) {
                f !== `;` && d++;
                var m = e.substring(l, d).trim();
                n += ` ` + m + `;`
              }
            }
            l = d + 1, u = -1
          }
        }
      }
    }
    return r && (n += $o(r)), i && (n += $o(i, !0)), n = n.trim(), n === `` ? null : n
  }
  return e == null ? null : String(e)
}

function ns(e, t, n, r, i, a) {
  var o = e[je];
  if (T || o !== n || o === void 0) {
    var s = Qo(n, r, a);
    (!T || s !== e.getAttribute(`class`)) && (s == null ? e.removeAttribute(`class`) : t ? e.className = s : e.setAttribute(`class`, s)), e[je] = n
  } else if (a && i !== a)
    for (var c in a) {
      var l = !!a[c];
      (i == null || l !== !!i[c]) && e.classList.toggle(c, l)
    }
  return a
}

function rs(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r))
  }
}

function is(e, t, n, r) {
  var i = e[Me];
  if (T || i !== t) {
    var a = ts(t, r);
    (!T || a !== e.getAttribute(`style`)) && (a == null ? e.removeAttribute(`style`) : e.style.cssText = a), e[Me] = t
  } else r && (Array.isArray(r) ? (rs(e, n == null ? void 0 : n[0], r[0]), rs(e, n == null ? void 0 : n[1], r[1], `important`)) : rs(e, n, r));
  return r
}

function as(e, t, n = !1) {
  if (e.multiple) {
    if (t == null) return;
    if (!u(t)) return lt();
    for (var r of e.options) r.selected = t.includes(cs(r));
    return
  }
  for (r of e.options)
    if (Yr(cs(r), t)) {
      r.selected = !0;
      return
    }(!n || t !== void 0) && (e.selectedIndex = -1)
}

function os(e) {
  var t = new MutationObserver(() => {
    as(e, e.__value)
  });
  t.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [`value`]
  }), bi(() => {
    t.disconnect()
  })
}

function ss(e, t, n = t) {
  var r = new WeakSet,
    i = !0;
  hi(e, `change`, t => {
    var i = t ? `[selected]` : `:checked`,
      a;
    if (e.multiple) a = [].map.call(e.querySelectorAll(i), cs);
    else {
      var o = e.querySelector(i) ?? e.querySelector(`option:not([disabled])`);
      a = o && cs(o)
    }
    n(a), e.__value = a, R !== null && r.add(R)
  }), Ei(() => {
    var a = t();
    if (e === document.activeElement) {
      var o = R;
      if (r.has(o)) return
    }
    if (as(e, a, i), i && a === void 0) {
      var s = e.querySelector(`:checked`);
      s !== null && (a = cs(s), n(a))
    }
    e.__value = a, i = !1
  }), os(e)
}

function cs(e) {
  return `__value` in e ? e.__value : e.value
}
var ls = Symbol(`class`),
  us = Symbol(`style`),
  ds = Symbol(`is custom element`),
  fs = Symbol(`is html`),
  ps = Ie ? `link` : `LINK`,
  ms = Ie ? `input` : `INPUT`,
  hs = Ie ? `option` : `OPTION`,
  gs = Ie ? `select` : `SELECT`,
  _s = Ie ? `progress` : `PROGRESS`;

function vs(e) {
  if (T) {
    var t = !1,
      n = () => {
        if (!t) {
          if (t = !0, e.hasAttribute(`value`)) {
            var n = e.value;
            Ss(e, `value`, null), e.value = n
          }
          if (e.hasAttribute(`checked`)) {
            var r = e.checked;
            Ss(e, `checked`, null), e.checked = r
          }
        }
      };
    e[Pe] = n, A(n), fi()
  }
}

function ys(e, t) {
  var n = Ts(e);
  n.value !== (n.value = t ?? void 0) && (e.value !== t || t === 0 && e.nodeName === _s) && (e.value = t ?? ``)
}

function bs(e, t) {
  var n = Ts(e);
  n.checked !== (n.checked = t ?? void 0) && (e.checked = t)
}

function xs(e, t) {
  t ? e.hasAttribute(`selected`) || e.setAttribute(`selected`, ``) : e.removeAttribute(`selected`)
}

function Ss(e, t, n, r) {
  var i = Ts(e);
  T && (i[t] = e.getAttribute(t), t === `src` || t === `srcset` || t === `href` && e.nodeName === ps) || i[t] !== (i[t] = n) && (t === `loading` && (e[Oe] = n), n == null ? e.removeAttribute(t) : typeof n != `string` && Ds(e).includes(t) ? e[t] = n : e.setAttribute(t, n))
}

function Cs(e, t, n, r, i = !1, a = !1) {
  if (T && i && e.nodeName === ms) {
    var o = e;
    (o.type === `checkbox` ? `defaultChecked` : `defaultValue`) in n || vs(o)
  }
  var s = Ts(e),
    c = s[ds],
    l = !s[fs];
  let u = T && c;
  u && E(!1);
  var d = t || {},
    f = e.nodeName === hs;
  for (var p in t) p in n || (n[p] = null);
  n.class ? n.class = Xo(n.class) : (r || n[ls]) && (n.class = null), n[us] && (n.style ?? (n.style = null));
  var m = Ds(e);
  if (e.nodeName === ms && `type` in n && (`value` in n || `__value` in n)) {
    var h = n.type;
    (h !== d.type || h === void 0 && e.hasAttribute(`type`)) && (d.type = h, Ss(e, `type`, h, a))
  }
  for (let i in n) {
    let o = n[i];
    if (f && i === `value` && o == null) {
      e.value = e.__value = ``, d[i] = o;
      continue
    }
    if (i === `class`) {
      ns(e, e.namespaceURI === `http://www.w3.org/1999/xhtml`, o, r, t == null ? void 0 : t[ls], n[ls]), d[i] = o, d[ls] = n[ls];
      continue
    }
    if (i === `style`) {
      is(e, o, t == null ? void 0 : t[us], n[us]), d[i] = o, d[us] = n[us];
      continue
    }
    var g = d[i];
    if (!(o === g && !(o === void 0 && e.hasAttribute(i)))) {
      d[i] = o;
      var _ = i[0] + i[1];
      if (_ !== `$$`) {
        if (_ === `on`) {
          let t = {},
            n = `$$` + i,
            r = i.slice(2);
          var v = ba(r);
          if (va(r) && (r = r.slice(0, -7), t.capture = !0), !v && g) {
            if (o != null) continue;
            e.removeEventListener(r, d[n], t), d[n] = null
          }
          if (v) Fa(r, e, o), Ia([r]);
          else if (o != null) {
            function a(e) {
              d[i].call(this, e)
            }
            d[n] = Ma(r, e, a, t)
          }
        } else if (i === `style`) Ss(e, i, o);
        else if (i === `autofocus`) li(e, !!o);
        else if (!c && (i === `__value` || i === `value` && o != null)) e.value = e.__value = o;
        else if (i === `selected` && f) xs(e, o);
        else {
          var y = i;
          l || (y = Ca(y));
          var b = y === `defaultValue` || y === `defaultChecked`;
          if (o == null && !c && !b) {
            if (s[i] = null, y === `value` || y === `checked`) {
              let n = e,
                r = t === void 0;
              if (y === `value`) {
                let e = n.defaultValue;
                n.removeAttribute(y), n.defaultValue = e, n.value = n.__value = r ? e : null
              } else {
                let e = n.defaultChecked;
                n.removeAttribute(y), n.defaultChecked = e, n.checked = r ? e : !1
              }
            } else e.removeAttribute(i)
          } else b || m.includes(y) && (c || typeof o != `string`) ? (e[y] = o, y in s && (s[y] = w)) : typeof o != `function` && Ss(e, y, o, a)
        }
      }
    }
  }
  return u && E(!0), d
}

function ws(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
  Nn(i, n, r, n => {
    var r = void 0,
      i = {},
      c = e.nodeName === gs,
      l = !1;
    if (Mi(() => {
        var u = t(...n.map(Z)),
          d = Cs(e, r, u, a, o, s);
        l && c && `value` in u && as(e, u.value);
        for (let e of Object.getOwnPropertySymbols(i)) u[e] || K(i[e]);
        for (let t of Object.getOwnPropertySymbols(u)) {
          var f = u[t];
          t.description === `@attach` && (!r || f !== r[t]) && (i[t] && K(i[t]), i[t] = G(() => qo(e, () => f))), d[t] = f
        }
        r = d
      }), c) {
      var u = e;
      Ei(() => {
        as(u, r.value, !0), os(u)
      })
    }
    l = !0
  })
}

function Ts(e) {
  return e[Ae] ?? (e[Ae] = {
    [ds]: e.nodeName.includes(`-`),
    [fs]: e.namespaceURI === `http://www.w3.org/1999/xhtml`
  })
}
var Es = new Map;

function Ds(e) {
  var t = e.getAttribute(`is`) || e.nodeName,
    n = Es.get(t);
  if (n) return n;
  Es.set(t, n = []);
  for (var r, i = e, a = Element.prototype; a !== i;) {
    for (var o in r = g(i), r) r[o].set && o !== `innerHTML` && o !== `textContent` && o !== `innerText` && n.push(o);
    i = y(i)
  }
  return n
}

function Os(e, t, n = t) {
  var r = new WeakSet;
  hi(e, `input`, async i => {
    var a = i ? e.defaultValue : e.value;
    if (a = Ns(e) ? Ps(a) : a, n(a), R !== null && r.add(R), await da(), a !== (a = t())) {
      var o = e.selectionStart,
        s = e.selectionEnd,
        c = e.value.length;
      if (e.value = a ?? ``, s !== null) {
        var l = e.value.length;
        o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l))
      }
    }
  }), (T && e.defaultValue !== e.value || Q(t) == null && e.value) && (n(Ns(e) ? Ps(e.value) : e.value), R !== null && r.add(R)), Oi(() => {
    var n = t();
    if (e === document.activeElement) {
      var i = R;
      if (r.has(i)) return
    }
    Ns(e) && n === Ps(e.value) || e.type === `date` && !n && !e.value || n !== e.value && (e.value = n ?? ``)
  })
}
var ks = new Set;

function As(e, t, n, r, i = r) {
  var a = n.getAttribute(`type`) === `checkbox`,
    o = e;
  let s = !1;
  if (t !== null)
    for (var c of t) {
      var l;
      o = (l = o)[c] ?? (l[c] = [])
    }
  o.push(n), hi(n, `change`, () => {
    var e = n.__value;
    a && (e = Ms(o, e, n.checked)), i(e)
  }, () => i(a ? [] : null)), Oi(() => {
    var e = r();
    if (T && n.defaultChecked !== n.checked) {
      s = !0;
      return
    }
    a ? (e = e || [], n.checked = e.includes(n.__value)) : n.checked = Yr(n.__value, e)
  }), bi(() => {
    var e = o.indexOf(n);
    e !== -1 && o.splice(e, 1)
  }), ks.has(o) || (ks.add(o), A(() => {
    o.sort((e, t) => e.compareDocumentPosition(t) === 4 ? -1 : 1), ks.delete(o)
  })), A(() => {
    if (s) {
      var e;
      if (a) e = Ms(o, e, n.checked);
      else {
        var t = o.find(e => e.checked);
        e = t == null ? void 0 : t.__value
      }
      i(e)
    }
  })
}

function js(e, t, n = t) {
  hi(e, `change`, t => {
    n(t ? e.defaultChecked : e.checked)
  }), (T && e.defaultChecked !== e.checked || Q(t) == null) && n(e.checked), Oi(() => {
    e.checked = !!t()
  })
}

function Ms(e, t, n) {
  for (var r = new Set, i = 0; i < e.length; i += 1) e[i].checked && r.add(e[i].__value);
  return n || r.delete(t), Array.from(r)
}

function Ns(e) {
  var t = e.type;
  return t === `number` || t === `range`
}

function Ps(e) {
  return e === `` ? null : +e
}
var Fs, Is = new WeakMap,
  Ls = new WeakMap,
  Rs = new WeakMap,
  zs = new WeakSet,
  Bs = class {
    constructor(e) {
      on(this, zs), M(this, Is, new WeakMap), M(this, Ls, void 0), M(this, Rs, void 0), P(Rs, this, e)
    }
    observe(e, t) {
      var n = F(Is, this).get(e) || new Set;
      return n.add(t), F(Is, this).set(e, n), N(zs, this, Vs).call(this).observe(e, F(Rs, this)), () => {
        var n = F(Is, this).get(e);
        n.delete(t), n.size === 0 && (F(Is, this).delete(e), F(Ls, this).unobserve(e))
      }
    }
  };
Fs = Bs;

function Vs() {
  return F(Ls, this) ?? P(Ls, this, new ResizeObserver(e => {
    for (var t of e) {
      Fs.entries.set(t.target, t);
      for (var n of F(Is, this).get(t.target) || []) n(t)
    }
  }))
}
C(Bs, `entries`, new WeakMap);
var Hs = new Bs({
  box: `border-box`
});

function Us(e, t, n) {
  var r = Hs.observe(e, () => n(e[t]));
  Ei(() => (Q(() => n(e[t])), r))
}

function Ws(e, t) {
  return e === t || (e == null ? void 0 : e[Ee]) === t
}

function Gs(e = {}, t, n, r) {
  var i = k.r,
    a = J;
  return Ei(() => {
    var o, s;
    return Oi(() => {
      o = s, s = (r == null ? void 0 : r()) || [], Q(() => {
        Ws(n(...s), e) || (t(e, ...s), o && Ws(n(...o), e) && t(null, ...o))
      })
    }), () => {
      let r = a;
      for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
      let o = () => {
          s && Ws(n(...s), e) && t(null, ...s)
        },
        c = r.teardown;
      r.teardown = () => {
        o(), c == null || c()
      }
    }
  }), e
}

function Ks(e, t) {
  pi(window, [`resize`], () => mi(() => t(window[e])))
}

function qs(e = !1) {
  let t = k,
    n = t.l.u;
  if (!n) return;
  let r = () => ha(t.s);
  if (e) {
    let e = 0,
      n = {},
      i = Ln(() => {
        let r = !1,
          i = t.s;
        for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
        return r && e++, e
      });
    r = () => Z(i)
  }
  n.b.length && Ci(() => {
    Js(t, r), te(n.b)
  }), xi(() => {
    let e = Q(() => n.m.map(ee));
    return () => {
      for (let t of e) typeof t == `function` && t()
    }
  }), n.a.length && xi(() => {
    Js(t, r), te(n.a)
  })
}

function Js(e, t) {
  if (e.l.s)
    for (let t of e.l.s) Z(t);
  t()
}

function Ys(e) {
  var t = zr(0);
  return function() {
    return arguments.length === 1 ? (V(t, Z(t) + 1), arguments[0]) : (Z(t), e())
  }
}

function Xs(e, t = 1) {
  let n = e();
  return e(n + t), n
}
var Zs = {
  get(e, t) {
    if (!e.exclude.has(t)) return e.props[t]
  },
  set(e, t) {
    return !1
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.has(t) && t in e.props) return {
      enumerable: !0,
      configurable: !0,
      value: e.props[t]
    }
  },
  has(e, t) {
    return !e.exclude.has(t) && t in e.props
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(t => !e.exclude.has(t))
  }
};

function Qs(e, t, n) {
  return new Proxy({
    props: e,
    exclude: t
  }, Zs)
}
var $s = {
  get(e, t) {
    let n = e.props.length;
    for (; n--;) {
      let r = e.props[n];
      if (x(r) && (r = r()), typeof r == `object` && r && t in r) return r[t]
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--;) {
      let i = e.props[r];
      x(i) && (i = i());
      let a = h(i, t);
      if (a && a.set) return a.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--;) {
      let r = e.props[n];
      if (x(r) && (r = r()), typeof r == `object` && r && t in r) {
        let e = h(r, t);
        return e && !e.configurable && (e.configurable = !0), e
      }
    }
  },
  has(e, t) {
    if (t === Ee || t === De) return !1;
    for (let n of e.props)
      if (x(n) && (n = n()), n != null && t in n) return !0;
    return !1
  },
  ownKeys(e) {
    let t = [];
    for (let n of e.props)
      if (x(n) && (n = n()), n) {
        for (let e in n) t.includes(e) || t.push(e);
        for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e)
      } return t
  }
};

function ec(...e) {
  return new Proxy({
    props: e
  }, $s)
}

function tc(e, t, n, r) {
  var i = !bt || !!(n & 2),
    a = !!(n & 8),
    o = !!(n & 16),
    s = r,
    c = !0,
    l = void 0,
    u = () => o && i ? (l ?? (l = Ln(r)), Z(l)) : (c && (c = !1, s = o ? Q(r) : r), s);
  let d;
  if (a) {
    var f, p = Ee in e || De in e;
    d = ((f = h(e, t)) == null ? void 0 : f.set) ?? (p && t in e ? n => e[t] = n : void 0)
  }
  var m, g = !1;
  a ? [m, g] = nn(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), d && (i && Ze(t), d(m)));
  var _ = i ? () => {
    var n = e[t];
    return n === void 0 ? u() : (c = !0, n)
  } : () => {
    var n = e[t];
    return n !== void 0 && (s = void 0), n === void 0 ? s : n
  };
  if (i && !(n & 4)) return _;
  if (d) {
    var v = e.$$legacy;
    return (function(e, t) {
      return arguments.length > 0 ? ((!i || !t || v || g) && d(t ? _() : e), e) : _()
    })
  }
  var y = !1,
    b = (n & 1 ? Ln : Vn)(() => (y = !1, _()));
  a && Z(b);
  var x = J;
  return (function(e, t) {
    if (arguments.length > 0) {
      let n = t ? Z(b) : i && a ? qr(e) : e;
      return V(b, n), y = !0, s !== void 0 && (s = n), e
    }
    return Gi && y || x.f & 16384 ? b.v : Z(b)
  })
}

function nc(e) {
  return class extends ac {
    constructor(t) {
      super({
        component: e,
        ...t
      })
    }
  }
}
var rc = new WeakMap,
  ic = new WeakMap,
  ac = class {
    constructor(e) {
      var t;
      M(this, rc, void 0), M(this, ic, void 0);
      var n = new Map,
        r = (e, t) => {
          var r = Vr(t, !1, !1);
          return n.set(e, r), r
        };
      let i = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(e, t) {
          return Z(n.get(t) ?? r(t, Reflect.get(e, t)))
        },
        has(e, t) {
          return t === De || (Z(n.get(t) ?? r(t, Reflect.get(e, t))), Reflect.has(e, t))
        },
        set(e, t, i) {
          return V(n.get(t) ?? r(t, i), i), Reflect.set(e, t, i)
        }
      });
      P(ic, this, (e.hydrate ? eo : $a)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: i,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
        transformError: e.transformError
      })), (!(e != null && (t = e.props) != null && t.$$host) || e.sync === !1) && Er(), P(rc, this, i.$$events);
      for (let e of Object.keys(F(ic, this))) e !== `$set` && e !== `$destroy` && e !== `$on` && m(this, e, {
        get() {
          return F(ic, this)[e]
        },
        set(t) {
          F(ic, this)[e] = t
        },
        enumerable: !0
      });
      F(ic, this).$set = e => {
        Object.assign(i, e)
      }, F(ic, this).$destroy = () => {
        io(F(ic, this))
      }
    }
    $set(e) {
      F(ic, this).$set(e)
    }
    $on(e, t) {
      F(rc, this)[e] = F(rc, this)[e] || [];
      let n = (...e) => t.call(this, ...e);
      return F(rc, this)[e].push(n), () => {
        F(rc, this)[e] = F(rc, this)[e].filter(e => e !== n)
      }
    }
    $destroy() {
      F(ic, this).$destroy()
    }
  };

function oc(e, t) {
  if (Le(`hydratable`), T) {
    var n;
    let t = (n = window.__svelte) == null ? void 0 : n.h;
    if (t != null && t.has(e)) return t.get(e);
    st(e)
  }
  return t()
}
var sc = s({
  afterUpdate: () => mc,
  beforeUpdate: () => pc,
  createContext: () => kt,
  createEventDispatcher: () => fc,
  createRawSnippet: () => ko,
  flushSync: () => Er,
  fork: () => Pr,
  getAbortSignal: () => cc,
  getAllContexts: () => Nt,
  getContext: () => At,
  hasContext: () => Mt,
  hydratable: () => oc,
  hydrate: () => eo,
  mount: () => $a,
  onDestroy: () => uc,
  onMount: () => lc,
  setContext: () => jt,
  settled: () => fa,
  tick: () => da,
  unmount: () => io,
  untrack: () => Q
});

function cc() {
  return q === null && Je(), (q.ac ?? (q.ac = new AbortController)).signal
}

function lc(e) {
  k === null && Re(`onMount`), bt && k.l !== null ? hc(k).m.push(e) : xi(() => {
    let t = Q(e);
    if (typeof t == `function`) return t
  })
}

function uc(e) {
  k === null && Re(`onDestroy`), lc(() => () => Q(e))
}

function dc(e, t, {
  bubbles: n = !1,
  cancelable: r = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: n,
    cancelable: r
  })
}

function fc() {
  let e = k;
  return e === null && Re(`createEventDispatcher`), (t, n, r) => {
    var i;
    let a = (i = e.s.$$events) == null ? void 0 : i[t];
    if (a) {
      let i = u(a) ? a.slice() : [a],
        o = dc(t, n, r);
      for (let t of i) t.call(e.x, o);
      return !o.defaultPrevented
    }
    return !0
  }
}

function pc(e) {
  k === null && Re(`beforeUpdate`), k.l === null && Xe(`beforeUpdate`), hc(k).b.push(e)
}

function mc(e) {
  k === null && Re(`afterUpdate`), k.l === null && Xe(`afterUpdate`), hc(k).a.push(e)
}

function hc(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
export {
  Ya as $, Ct as $t, Yo as A, zr as At, Oo as B, rn as Bt, ys as C, Xr as Ct, is as D, qr as Dt, as as E, ii as Et, Vo as F, F as Ft, mo as G, Nt as Gt, xo as H, en as Ht, Ho as I, P as It, io as J, Ft as Jt, $a as K, At as Kt, Po as L, N as Lt, Ko as M, Wr as Mt, Go as N, Vn as Nt, ns as O, Gr as Ot, Wo as P, Bn as Pt, Ga as Q, Tt as Qt, Mo as R, M as Rt, bs as S, Zr as St, os as T, ri as Tt, _o as U, Zt as Ut, Do as V, tn as Vt, go as W, Xt as Wt, qa as X, jt as Xt, Ja as Y, Pt as Yt, Ua as Z, Dt as Zt, ls as _, Oi as _t, tc as a, re as an, ja as at, vs as b, Ci as bt, Xs as c, o as cn, Z as ct, Ks as d, da as dt, xt as en, Ka as et, Gs as f, Q as ft, Os as g, wi as gt, As as h, Ei as ht, nc as i, C as in, Na as it, qo as j, Br as jt, Xo as k, V as kt, Ys as l, s as ln, Ji as lt, js as m, Ai as mt, uc as n, pt as nn, Fa as nt, Qs as o, S as on, _a as ot, Us as p, na as pt, Qa as q, Mt as qt, lc as r, dt as rn, Pa as rt, ec as s, ie as sn, q as st, sc as t, mt as tn, Ia as tt, qs as u, l as un, fa as ut, us as v, ki as vt, ss as w, ni as wt, Ss as x, ui as xt, ws as y, xi as yt, Ao as z, on as zt
};