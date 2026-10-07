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
  return typeof(e == null ? void 0 : e.then) == `function`
}

function te(e) {
  return e()
}

function ne(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function re() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      e = n, t = r
    }),
    resolve: e,
    reject: t
  }
}

function ie(e, t, n = !1) {
  return e === void 0 ? n ? t() : t : e
}

function ae(e, t) {
  if (Array.isArray(e)) return e;
  if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
  let n = [];
  for (let r of e)
    if (n.push(r), n.length === t) break;
  return n
}

function oe(e) {
  "@babel/helpers - typeof";
  return oe = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
  }, oe(e)
}

function se(e, t) {
  if (oe(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (oe(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`)
  }
  return (t === `string` ? String : Number)(e)
}

function ce(e) {
  var t = se(e, `string`);
  return oe(t) == `symbol` ? t : t + ``
}

function C(e, t, n) {
  return (t = ce(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var le, ue = 1 << 24,
  de = 1024,
  fe = 2048,
  pe = 4096,
  me = 8192,
  he = 16384,
  ge = 32768,
  _e = 1 << 25,
  ve = 65536,
  ye = 1 << 18,
  be = 1 << 19,
  xe = 1 << 20,
  Se = 1 << 25,
  Ce = 65536,
  we = 1 << 21,
  Te = 1 << 22,
  Ee = 1 << 23,
  De = Symbol(`$state`),
  Oe = Symbol(`legacy props`),
  ke = Symbol(``),
  Ae = Symbol(`proxy path`),
  je = Symbol(`attributes`),
  Me = Symbol(`class`),
  Ne = Symbol(`style`),
  Pe = Symbol(`text`),
  Fe = Symbol(`form reset`),
  Ie = new class extends Error {
    constructor(...e) {
      super(...e), C(this, `name`, `StaleReactionError`), C(this, `message`, "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  },
  Le = !!((le = globalThis.document) != null && le.contentType) && globalThis.document.contentType.includes(`xml`);

function Re(e) {
  throw Error(`https://svelte.dev/e/experimental_async_required`)
}

function ze(e) {
  throw Error(`https://svelte.dev/e/lifecycle_outside_component`)
}

function Be() {
  throw Error(`https://svelte.dev/e/missing_context`)
}

function Ve() {
  throw Error(`https://svelte.dev/e/async_derived_orphan`)
}

function He(e, t, n) {
  throw Error(`https://svelte.dev/e/each_key_duplicate`)
}

function Ue(e) {
  throw Error(`https://svelte.dev/e/effect_in_teardown`)
}

function We() {
  throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)
}

function Ge(e) {
  throw Error(`https://svelte.dev/e/effect_orphan`)
}

function Ke() {
  throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)
}

function qe() {
  throw Error(`https://svelte.dev/e/fork_discarded`)
}

function Je() {
  throw Error(`https://svelte.dev/e/fork_timing`)
}

function Ye() {
  throw Error(`https://svelte.dev/e/get_abort_signal_outside_reaction`)
}

function Xe() {
  throw Error(`https://svelte.dev/e/hydration_failed`)
}

function Ze(e) {
  throw Error(`https://svelte.dev/e/lifecycle_legacy_only`)
}

function Qe(e) {
  throw Error(`https://svelte.dev/e/props_invalid_value`)
}

function $e() {
  throw Error(`https://svelte.dev/e/state_descriptors_fixed`)
}

function et() {
  throw Error(`https://svelte.dev/e/state_prototype_fixed`)
}

function tt() {
  throw Error(`https://svelte.dev/e/state_unsafe_mutation`)
}

function nt() {
  throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)
}
var rt = {},
  w = Symbol(`uninitialized`),
  it = `http://www.w3.org/2000/svg`,
  at = `http://www.w3.org/1998/Math/MathML`,
  ot = `@attach`;

function st() {
  console.warn(`https://svelte.dev/e/derived_inert`)
}

function ct(e) {
  console.warn(`https://svelte.dev/e/hydratable_missing_but_expected`)
}

function lt(e) {
  console.warn(`https://svelte.dev/e/hydration_mismatch`)
}

function ut() {
  console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)
}

function dt() {
  console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)
}

function ft(e) {
  console.warn(`https://svelte.dev/e/transition_slide_display`)
}
var T = !1;

function E(e) {
  T = e
}
var D;

function O(e) {
  if (e === null) throw lt(), rt;
  return D = e
}

function pt() {
  return O(H(D))
}

function mt(e) {
  if (T) {
    if (H(D) !== null) throw lt(), rt;
    D = e
  }
}

function ht(e = 1) {
  if (T) {
    for (var t = e, n = D; t--;) n = H(n);
    D = n
  }
}

function gt(e = !0) {
  for (var t = 0, n = D;;) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === `]`) {
        if (t === 0) return n;
        --t
      } else(r === `[` || r === `[!` || r[0] === `[` && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var i = H(n);
    e && n.remove(), n = i
  }
}

function _t(e) {
  if (!e || e.nodeType !== 8) throw lt(), rt;
  return e.data
}

function vt(e) {
  return e === this.v
}

function yt(e, t) {
  return e == e ? e !== t || typeof e == `object` && !!e || typeof e == `function` : t == t
}

function bt(e) {
  return !yt(e, this.v)
}
var xt = !1;

function St() {
  xt = !0
}
var Ct = [];

function wt(e, t = !1, n = !1) {
  return Tt(e, new Map, ``, Ct, null, n)
}

function Tt(e, t, n, r, i = null, a = !1) {
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
        c in e && (s[c] = Tt(l, t, n, r, null, a))
      }
      return s
    }
    if (y(e) === _) {
      s = {}, t.set(e, s), i !== null && t.set(i, s);
      for (var d of Object.keys(e)) s[d] = Tt(e[d], t, n, r, null, a);
      return s
    }
    if (e instanceof Date) return structuredClone(e);
    if (typeof e.toJSON == `function` && !a) return Tt(e.toJSON(), t, n, r, e)
  }
  if (e instanceof EventTarget) return e;
  try {
    return structuredClone(e)
  } catch {
    return e
  }
}

function Et(e, t) {
  return e.label = t, Dt(e.v, t), e
}

function Dt(e, t) {
  var n;
  return e == null || (n = e[Ae]) == null || n.call(e, t), e
}

function Ot(e) {
  return typeof e == `symbol` ? `Symbol(${e.description})` : typeof e == `function` ? `<function>` : typeof e == `object` && e ? `<object>` : String(e)
}
var k = null;

function kt(e) {
  k = e
}

function At() {
  let e = {};
  return [() => (Nt(e) || Be(), jt(e)), t => Mt(e, t)]
}

function jt(e) {
  return Rt(`getContext`).get(e)
}

function Mt(e, t) {
  return Rt(`setContext`).set(e, t), t
}

function Nt(e) {
  return Rt(`hasContext`).has(e)
}

function Pt() {
  return Rt(`getAllContexts`)
}

function Ft(e, t = !1, n) {
  k = {
    p: k,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: J,
    l: xt && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function It(e) {
  var t = k,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) wi(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {}
}

function Lt() {
  return !xt || k !== null && k.l === null
}

function Rt(e) {
  var t;
  return k === null && ze(e), (t = k).c ?? (t.c = new Map(zt(k) || void 0))
}

function zt(e) {
  let t = e.p;
  for (; t !== null;) {
    let e = t.c;
    if (e !== null) return e;
    t = t.p
  }
  return null
}
var Bt = [];

function Vt() {
  var e = Bt;
  Bt = [], ne(e)
}

function A(e) {
  if (Bt.length === 0 && !$n) {
    var t = Bt;
    queueMicrotask(() => {
      t === Bt && Vt()
    })
  }
  Bt.push(e)
}

function Ht() {
  for (; Bt.length > 0;) Vt()
}

function Ut(e) {
  var t = J;
  if (t === null) return K.f |= Ee, e;
  if (!(t.f & 32768) && !(t.f & 4)) throw e;
  Wt(e, t)
}

function Wt(e, t) {
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
var Gt = ~(fe | pe | de);

function j(e, t) {
  e.f = e.f & Gt | t
}

function Kt(e) {
  e.f & 512 || e.deps === null ? j(e, de) : j(e, pe)
}

function qt(e) {
  if (e !== null)
    for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= Ce, qt(t.deps))
}

function Jt(e, t, n) {
  e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), qt(e.deps), j(e, de)
}

function Yt(e, t, n) {
  if (e == null) return t(void 0), n && n(void 0), S;
  let r = Q(() => e.subscribe(t, n));
  return r.unsubscribe ? () => r.unsubscribe() : r
}
var Xt = [];

function Zt(e, t = S) {
  let n = null,
    r = new Set;

  function i(t) {
    if (yt(e, t) && (e = t, n)) {
      let t = !Xt.length;
      for (let t of r) t[1](), Xt.push(t, e);
      if (t) {
        for (let e = 0; e < Xt.length; e += 2) Xt[e][0](Xt[e + 1]);
        Xt.length = 0
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

function Qt(e) {
  let t;
  return Yt(e, e => t = e)(), t
}
var $t = !1,
  en = Symbol(`unmounted`);

function tn(e, t, n) {
  let r = n[t] ?? (n[t] = {
    store: null,
    source: Ur(void 0),
    unsubscribe: S
  });
  if (r.store !== e && !(en in n)) {
    if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = S;
    else {
      var i = !0;
      r.unsubscribe = Yt(e, e => {
        i ? r.source.v = e : Wr(r.source, e)
      }), i = !1
    }
  }
  return e && en in n ? Qt(e) : Z(r.source)
}

function nn() {
  let e = {};

  function t() {
    Si(() => {
      for (var t in e) e[t].unsubscribe();
      m(e, en, {
        enumerable: !1,
        value: !0
      })
    })
  }
  return [e, t]
}

function rn(e) {
  var t = $t;
  try {
    return $t = !1, [e(), $t]
  } finally {
    $t = t
  }
}

function an(e) {
  let t = 0,
    n = Vr(0),
    r;
  return () => {
    xi() && (Z(n), Ai(() => (t === 0 && (r = Q(() => e(() => Jr(n)))), t += 1, () => {
      A(() => {
        --t, t === 0 && (r == null || r(), r = void 0, Jr(n))
      })
    })))
  }
}

function on(e, t) {
  if (t.has(e)) throw TypeError(`Cannot initialize the same private elements twice on an object`)
}

function sn(e, t) {
  on(e, t), t.add(e)
}

function M(e, t, n) {
  on(e, t), t.set(e, n)
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
var cn = ve | be;

function ln(e, t, n, r) {
  new En(e, t, n, r)
}
var un = new WeakMap,
  dn = new WeakMap,
  fn = new WeakMap,
  pn = new WeakMap,
  mn = new WeakMap,
  hn = new WeakMap,
  gn = new WeakMap,
  _n = new WeakMap,
  vn = new WeakMap,
  yn = new WeakMap,
  bn = new WeakMap,
  xn = new WeakMap,
  Sn = new WeakMap,
  Cn = new WeakMap,
  wn = new WeakMap,
  Tn = new WeakMap,
  I = new WeakSet,
  En = class {
    constructor(e, t, n, r) {
      var i;
      sn(this, I), C(this, `parent`, void 0), C(this, `is_pending`, !1), C(this, `transform_error`, void 0), M(this, un, void 0), M(this, dn, T ? D : null), M(this, fn, void 0), M(this, pn, void 0), M(this, mn, void 0), M(this, hn, null), M(this, gn, null), M(this, _n, null), M(this, vn, null), M(this, yn, 0), M(this, bn, 0), M(this, xn, !1), M(this, Sn, new Set), M(this, Cn, new Set), M(this, wn, null), M(this, Tn, an(() => (P(wn, this, Vr(F(yn, this))), () => {
        P(wn, this, null)
      }))), P(un, this, e), P(fn, this, t), P(pn, this, e => {
        var t = J;
        t.b = this, t.f |= 128, n(e)
      }), this.parent = J.b, this.transform_error = r ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? (e => e), P(mn, this, Ni(() => {
        if (T) {
          let e = F(dn, this);
          pt();
          let t = e.data === `[!`;
          if (e.data.startsWith(`[?`)) {
            let t = JSON.parse(e.data.slice(2));
            N(I, this, On).call(this, t)
          } else t ? N(I, this, kn).call(this) : N(I, this, Dn).call(this)
        } else N(I, this, An).call(this)
      }, cn)), T && P(un, this, D)
    }
    defer_effect(e) {
      Jt(e, F(Sn, this), F(Cn, this))
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered())
    }
    has_pending_snippet() {
      return !!F(fn, this).pending
    }
    update_pending_count(e, t) {
      N(I, this, Nn).call(this, e, t), P(yn, this, F(yn, this) + e), !(!F(wn, this) || F(xn, this)) && (P(xn, this, !0), A(() => {
        P(xn, this, !1), F(wn, this) && Gr(F(wn, this), F(yn, this))
      }))
    }
    get_effect_pending() {
      return F(Tn, this).call(this), Z(F(wn, this))
    }
    error(e) {
      if (!F(fn, this).onerror && !F(fn, this).failed) throw e;
      L != null && L.is_fork ? (F(hn, this) && L.skip_effect(F(hn, this)), F(gn, this) && L.skip_effect(F(gn, this)), F(_n, this) && L.skip_effect(F(_n, this)), L.oncommit(() => {
        N(I, this, Pn).call(this, e)
      })) : N(I, this, Pn).call(this, e)
    }
  };

function Dn() {
  try {
    P(hn, this, W(() => F(pn, this).call(this, F(un, this))))
  } catch (e) {
    this.error(e)
  }
}

function On(e) {
  let t = F(fn, this).failed;
  t && P(_n, this, W(() => {
    t(F(un, this), () => e, () => () => {})
  }))
}

function kn() {
  let e = F(fn, this).pending;
  e && (this.is_pending = !0, P(gn, this, W(() => e(F(un, this)))), A(() => {
    var e = P(vn, this, document.createDocumentFragment()),
      t = B();
    e.append(t), P(hn, this, N(I, this, Mn).call(this, () => W(() => F(pn, this).call(this, t)))), F(bn, this) === 0 && (F(un, this).before(e), P(vn, this, null), Bi(F(gn, this), () => {
      P(gn, this, null)
    }), N(I, this, jn).call(this, L))
  }))
}

function An() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(bn, this, 0), P(yn, this, 0), P(hn, this, W(() => {
        F(pn, this).call(this, F(un, this))
      })), F(bn, this) > 0) {
      var e = P(vn, this, document.createDocumentFragment());
      Wi(F(hn, this), e);
      let t = F(fn, this).pending;
      P(gn, this, W(() => t(F(un, this))))
    } else N(I, this, jn).call(this, L)
  } catch (e) {
    this.error(e)
  }
}

function jn(e) {
  this.is_pending = !1, e.transfer_effects(F(Sn, this), F(Cn, this))
}

function Mn(e) {
  var t = J,
    n = K,
    r = k;
  Xi(F(mn, this)), q(F(mn, this)), kt(F(mn, this).ctx);
  try {
    return br.ensure(), e()
  } catch (e) {
    return Ut(e), null
  } finally {
    Xi(t), q(n), kt(r)
  }
}

function Nn(e, t) {
  if (!this.has_pending_snippet()) {
    if (this.parent) {
      var n;
      N(I, n = this.parent, Nn).call(n, e, t)
    }
    return
  }
  P(bn, this, F(bn, this) + e), F(bn, this) === 0 && (N(I, this, jn).call(this, t), F(gn, this) && Bi(F(gn, this), () => {
    P(gn, this, null)
  }), F(vn, this) && (F(un, this).before(F(vn, this)), P(vn, this, null)))
}

function Pn(e) {
  F(hn, this) && (G(F(hn, this)), P(hn, this, null)), F(gn, this) && (G(F(gn, this)), P(gn, this, null)), F(_n, this) && (G(F(_n, this)), P(_n, this, null)), T && (O(F(dn, this)), ht(), O(gt()));
  var t = F(fn, this).onerror;
  let n = F(fn, this).failed;
  var r = !1,
    i = !1;
  let a = () => {
      if (r) {
        dt();
        return
      }
      r = !0, i && nt(), F(_n, this) !== null && Bi(F(_n, this), () => {
        P(_n, this, null)
      }), N(I, this, Mn).call(this, () => {
        N(I, this, An).call(this)
      })
    },
    o = e => {
      try {
        i = !0, t == null || t(e, a), i = !1
      } catch (e) {
        Wt(e, F(mn, this) && F(mn, this).parent)
      }
      n && P(_n, this, N(I, this, Mn).call(this, () => {
        try {
          return W(() => {
            var t = J;
            t.b = this, t.f |= 128, n(F(un, this), () => e, () => a)
          })
        } catch (e) {
          return Wt(e, F(mn, this).parent), null
        }
      }))
    };
  A(() => {
    var t;
    try {
      t = this.transform_error(e)
    } catch (e) {
      Wt(e, F(mn, this) && F(mn, this).parent);
      return
    }
    typeof t == `object` && t && typeof t.then == `function` ? t.then(o, e => Wt(e, F(mn, this) && F(mn, this).parent)) : o(t)
  })
}

function Fn(e, t, n, r) {
  let i = Lt() ? zn : Un;
  var a = e.filter(e => !e.settled),
    o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return
  }
  var s = J,
    c = In(),
    l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map(e => e.promise)) : null;

  function u(e) {
    if (!(s.f & 16384)) {
      c();
      try {
        r([...o, ...e])
      } catch (e) {
        Wt(e, s)
      }
      Ln()
    }
  }
  var d = Rn();
  if (n.length === 0) {
    l.then(() => u([])).finally(d);
    return
  }

  function f() {
    Promise.all(n.map(e => Vn(e))).then(u).catch(e => Wt(e, s)).finally(d)
  }
  l ? l.then(() => {
    c(), f(), Ln()
  }) : f()
}

function In() {
  var e = J,
    t = K,
    n = k,
    r = L;
  return function(i = !0) {
    Xi(e), q(t), kt(n), i && !(e.f & 16384) && (r == null || r.activate(), r == null || r.apply())
  }
}

function Ln(e = !0) {
  Xi(null), q(null), kt(null), e && (L == null || L.deactivate())
}

function Rn() {
  var e = J,
    t = e.b,
    n = L,
    r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e)
  }
}

function zn(e) {
  var t = 2 | fe;
  return J !== null && (J.f |= be), {
    ctx: k,
    deps: null,
    effects: null,
    equals: vt,
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
var Bn = Symbol(`obsolete`);

function Vn(e, t, n) {
  let r = J;
  r === null && Ve();
  var i = void 0,
    a = Vr(w),
    o = !K,
    s = new Set;
  return ki(() => {
    var t = J,
      n = re();
    i = n.promise;
    try {
      Promise.resolve(e()).then(n.resolve, e => {
        e !== Ie && n.reject(e)
      }).finally(Ln)
    } catch (e) {
      n.reject(e), Ln()
    }
    var c = L;
    if (o) {
      var l;
      if (t.f & 32768) var u = Rn();
      if ((l = r.b) != null && l.is_rendered()) {
        var d;
        (d = c.async_deriveds.get(t)) == null || d.reject(Bn)
      } else
        for (let e of s.values()) e.reject(Bn);
      s.add(n), c.async_deriveds.set(t, n)
    }
    let f = (e, t = void 0) => {
      u == null || u(), s.delete(n), t !== Bn && (c.activate(), t ? (a.f |= Ee, Gr(a, t)) : (a.f & 8388608 && (a.f ^= Ee), Gr(a, e)), c.deactivate())
    };
    n.promise.then(f, e => f(null, e || `unknown`))
  }), Si(() => {
    for (let e of s) e.reject(Bn)
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

function Hn(e) {
  let t = zn(e);
  return Qi(t), t
}

function Un(e) {
  let t = zn(e);
  return t.equals = bt, t
}

function Wn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) G(t[n])
  }
}

function Gn(e) {
  var t, n = J,
    r = e.parent;
  if (!qi && r !== null && e.v !== w && r.f & 24576) return st(), e.v;
  Xi(r);
  try {
    e.f &= ~Ce, Wn(e), t = ca(e)
  } finally {
    Xi(n)
  }
  return t
}

function Kn(e) {
  var t = Gn(e);
  if (!e.equals(t) && (e.wv = aa(), (!(L != null && L.is_fork) || e.deps === null) && (L === null ? e.v = t : (L.capture(e, t, !0), Zn == null || Zn.capture(e, t, !0)), e.deps === null))) {
    j(e, de);
    return
  }
  qi || (R === null ? Kt(e) : (xi() || L != null && L.is_fork) && R.set(e, t))
}

function qn(e) {
  if (e.effects !== null) {
    for (let r of e.effects)
      if (r.teardown || r.ac) {
        var t, n;
        (t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Ie), r.fn !== null && (r.teardown = S), r.ac = null, ua(r, 0), Ii(r)
      }
  }
}

function Jn(e) {
  if (e.effects !== null)
    for (let t of e.effects) t.teardown && t.fn !== null && da(t)
}
var Yn, Xn = null,
  L = null,
  Zn = null,
  R = null,
  Qn = null,
  $n = !1,
  er = !1,
  tr = null,
  nr = null,
  rr = 0,
  ir = 1,
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
  vr = new WeakMap,
  yr = new WeakMap,
  z = new WeakSet,
  br = class e {
    constructor() {
      sn(this, z), C(this, `id`, ir++), M(this, ar, !1), C(this, `linked`, !0), M(this, or, null), M(this, sr, null), C(this, `async_deriveds`, new Map), C(this, `current`, new Map), C(this, `previous`, new Map), M(this, cr, new Set), M(this, lr, new Set), M(this, ur, 0), M(this, dr, new Map), M(this, fr, null), M(this, pr, []), M(this, mr, []), M(this, hr, new Set), M(this, gr, new Set), M(this, _r, new Map), M(this, vr, new Set), C(this, `is_fork`, !1), M(this, yr, !1), Xn === null ? Xn = this : (P(sr, Xn, this), P(or, this, Xn)), Xn = this
    }
    skip_effect(e) {
      F(_r, this).has(e) || F(_r, this).set(e, {
        d: [],
        m: []
      }), F(vr, this).delete(e)
    }
    unskip_effect(e, t = e => this.schedule(e)) {
      var n = F(_r, this).get(e);
      if (n) {
        F(_r, this).delete(e);
        for (var r of n.d) j(r, fe), t(r);
        for (r of n.m) j(r, pe), t(r)
      }
      F(vr, this).add(e)
    }
    capture(e, t, n = !1) {
      e.v !== w && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), R == null || R.set(e, t)), this.is_fork || (e.v = t)
    }
    activate() {
      L = this
    }
    deactivate() {
      L = null, R = null
    }
    flush() {
      try {
        er = !0, L = this, N(z, this, Sr).call(this)
      } finally {
        rr = 0, Qn = null, tr = null, nr = null, er = !1, L = null, R = null, Rr.clear()
      }
    }
    discard() {
      var e;
      for (let e of F(lr, this)) e(this);
      F(lr, this).clear();
      for (let e of this.async_deriveds.values()) e.reject(Bn);
      N(z, this, Dr).call(this), (e = F(fr, this)) == null || e.resolve()
    }
    register_created_effect(e) {
      F(mr, this).push(e)
    }
    increment(e, t) {
      if (P(ur, this, F(ur, this) + 1), e) {
        let e = F(dr, this).get(t) ?? 0;
        F(dr, this).set(t, e + 1)
      }
    }
    decrement(e, t) {
      if (P(ur, this, F(ur, this) - 1), e) {
        let e = F(dr, this).get(t) ?? 0;
        e === 1 ? F(dr, this).delete(t) : F(dr, this).set(t, e - 1)
      }
      F(yr, this) || (P(yr, this, !0), A(() => {
        P(yr, this, !1), this.linked && this.flush()
      }))
    }
    transfer_effects(e, t) {
      for (let t of e) F(hr, this).add(t);
      for (let e of t) F(gr, this).add(e);
      e.clear(), t.clear()
    }
    oncommit(e) {
      F(cr, this).add(e)
    }
    ondiscard(e) {
      F(lr, this).add(e)
    }
    settled() {
      return (F(fr, this) ?? P(fr, this, re())).promise
    }
    static ensure() {
      if (L === null) {
        let t = L = new e;
        !er && !$n && A(() => {
          F(ar, t) || t.flush()
        })
      }
      return L
    }
    apply() {
      R = null
    }
    schedule(e) {
      var t;
      if (Qn = e, (t = e.b) != null && t.is_pending && e.f & 16777228 && !(e.f & 32768)) {
        e.b.defer_effect(e);
        return
      }
      for (var n = e; n.parent !== null;) {
        n = n.parent;
        var r = n.f;
        if (tr !== null && n === J && (K === null || !(K.f & 2))) return;
        if (r & 96) {
          if (!(r & 1024)) return;
          n.f ^= de
        }
      }
      F(pr, this).push(n)
    }
  };
Yn = br;

function xr() {
  if (this.is_fork) return !0;
  for (let n of F(dr, this).keys()) {
    for (var e = n, t = !1; e.parent !== null;) {
      if (F(_r, this).has(e)) {
        t = !0;
        break
      }
      e = e.parent
    }
    if (!t) return !0
  }
  return !1
}

function Sr() {
  var e;
  P(ar, this, !0), rr++ > 1e3 && (N(z, this, Dr).call(this), kr());
  for (let e of F(hr, this)) F(gr, this).delete(e), j(e, fe), this.schedule(e);
  for (let e of F(gr, this)) j(e, pe), this.schedule(e);
  let t = F(pr, this);
  P(pr, this, []), this.apply();
  var n = tr = [],
    r = [],
    i = nr = [];
  for (let e of t) try {
    N(z, this, Cr).call(this, e, n, r)
  } catch (t) {
    throw Fr(e), N(z, this, xr).call(this) || this.discard(), t
  }
  if (L = null, i.length > 0) {
    var a = Yn.ensure();
    for (let e of i) a.schedule(e)
  }
  if (tr = null, nr = null, N(z, this, xr).call(this)) {
    N(z, this, Er).call(this, r), N(z, this, Er).call(this, n);
    for (let [e, t] of F(_r, this)) Pr(e, t);
    i.length > 0 && N(z, L, Sr).call(L);
    return
  }
  let o = N(z, this, wr).call(this);
  if (o) {
    N(z, this, Er).call(this, r), N(z, this, Er).call(this, n), N(z, o, Tr).call(o, this);
    return
  }
  F(hr, this).clear(), F(gr, this).clear();
  for (let e of F(cr, this)) e(this);
  F(cr, this).clear(), Zn = this, jr(r), jr(n), Zn = null, (e = F(fr, this)) == null || e.resolve();
  var s = L;
  if (F(ur, this) === 0 && (F(pr, this).length === 0 || s !== null) && N(z, this, Dr).call(this), F(pr, this).length > 0) {
    if (s !== null) {
      let e = s;
      F(pr, e).push(...F(pr, this).filter(t => !F(pr, e).includes(t)))
    } else s = this
  }
  s !== null && N(z, s, Sr).call(s)
}

function Cr(e, t, n) {
  e.f ^= de;
  for (var r = e.first; r !== null;) {
    var i = r.f,
      a = !!(i & 96);
    if (!(a && i & 1024 || i & 8192 || F(_r, this).has(r)) && r.fn !== null) {
      a ? r.f ^= de : i & 4 ? t.push(r) : oa(r) && (i & 16 && F(gr, this).add(r), da(r));
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

function wr() {
  for (var e = F(or, this); e !== null;) {
    if (!e.is_fork) {
      for (let [t, [, n]] of this.current)
        if (e.current.has(t) && !n) return e
    }
    e = F(or, e)
  }
  return null
}

function Tr(e) {
  for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
  for (let [t, n] of e.async_deriveds) {
    let e = this.async_deriveds.get(t);
    e && n.promise.then(e.resolve).catch(e.reject)
  }
  e.async_deriveds.clear(), this.transfer_effects(F(hr, e), F(gr, e));
  let t = e => {
    var n = e.reactions;
    if (n !== null)
      for (let e of n) {
        var r = e.f;
        if (r & 2) t(e);
        else {
          var i = e;
          r & 4194320 && !this.async_deriveds.has(i) && (F(gr, this).delete(i), j(i, fe), this.schedule(i))
        }
      }
  };
  for (let e of this.current.keys()) t(e);
  this.oncommit(() => e.discard()), N(z, e, Dr).call(e), L = this, N(z, this, Sr).call(this)
}

function Er(e) {
  for (var t = 0; t < e.length; t += 1) Jt(e[t], F(hr, this), F(gr, this))
}

function Dr() {
  if (this.linked) {
    var e = F(or, this),
      t = F(sr, this);
    e === null || P(sr, e, t), t === null ? Xn = e : P(or, t, e), this.linked = !1
  }
}

function Or(e) {
  var t = $n;
  $n = !0;
  try {
    var n;
    for (e && (L !== null && !L.is_fork && L.flush(), n = e());;) {
      if (Ht(), L === null) return n;
      L.flush()
    }
  } finally {
    $n = t
  }
}

function kr() {
  try {
    Ke()
  } catch (e) {
    Wt(e, Qn)
  }
}
var Ar = null;

function jr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if (!(r.f & 24576) && oa(r) && (Ar = new Set, da(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && zi(r), (Ar == null ? void 0 : Ar.size) > 0)) {
        Rr.clear();
        for (let e of Ar) {
          if (e.f & 24576) continue;
          let t = [e],
            n = e.parent;
          for (; n !== null;) Ar.has(n) && (Ar.delete(n), t.push(n)), n = n.parent;
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            n.f & 24576 || da(n)
          }
        }
        Ar.clear()
      }
    }
    Ar = null
  }
}

function Mr(e, t) {
  if (e.reactions !== null)
    for (let n of e.reactions) {
      let e = n.f;
      e & 2 ? Mr(n, t) : e & 131072 && (j(n, fe), t.add(n))
    }
}

function Nr(e) {
  L.schedule(e)
}

function Pr(e, t) {
  if (!(e.f & 32 && e.f & 1024)) {
    e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, de);
    for (var n = e.first; n !== null;) Pr(n, t), n = n.next
  }
}

function Fr(e) {
  j(e, de);
  for (var t = e.first; t !== null;) Fr(t), t = t.next
}

function Ir(e) {
  Re(`fork`), L !== null && Je();
  var t = br.ensure();
  t.is_fork = !0, R = new Map;
  var n = !1,
    r = t.settled();
  return Or(e), {
    commit: async () => {
      if (n) {
        await r;
        return
      }
      t.linked || qe(), n = !0, t.is_fork = !1;
      for (var [e, [i]] of t.current) e.v = i, e.wv = aa();
      Or(() => {
        var e = new Set;
        for (var n of t.current.keys()) Mr(n, e);
        zr(e), Kr()
      }), t.flush(), await r
    },
    discard: () => {
      for (var e of t.current.keys()) e.wv = aa();
      !n && t.linked && t.discard()
    }
  }
}
var Lr = new Set,
  Rr = new Map;

function zr(e) {
  Lr = e
}
var Br = !1;

function Vr(e, t) {
  return {
    f: 0,
    v: e,
    reactions: null,
    equals: vt,
    rv: 0,
    wv: 0
  }
}

function Hr(e, t) {
  let n = Vr(e, t);
  return Qi(n), n
}

function Ur(e, t = !1, n = !0) {
  let r = Vr(e);
  if (t || (r.equals = bt), xt && n && k !== null && k.l !== null) {
    var i;
    ((i = k.l).s ?? (i.s = [])).push(r)
  }
  return r
}

function Wr(e, t, n = !1) {
  return K !== null && (!Yi || K.f & 131072) && Lt() && K.f & 4325394 && (Zi === null || !Zi.has(e)) && tt(), Gr(e, n ? Xr(t) : t, nr)
}

function Gr(e, t, n = null) {
  if (!e.equals(t)) {
    Rr.set(e, qi ? t : e.v);
    var r = br.ensure();
    if (r.capture(e, t), e.f & 2) {
      let t = e;
      e.f & 2048 && Gn(t), R === null && Kt(t)
    }
    e.wv = aa(), Yr(e, fe, n), Lt() && J !== null && J.f & 1024 && !(J.f & 96) && ($i === null ? ea([e]) : $i.push(e)), !r.is_fork && Lr.size > 0 && !Br && Kr()
  }
  return t
}

function Kr() {
  Br = !1;
  for (let e of Lr) {
    e.f & 1024 && j(e, pe);
    let t;
    try {
      t = oa(e)
    } catch {
      t = !0
    }
    t && da(e)
  }
  Lr.clear()
}

function qr(e, t = 1) {
  var n = Z(e),
    r = t === 1 ? n++ : n--;
  return Wr(e, n), r
}

function Jr(e) {
  Wr(e, e.v + 1)
}

function Yr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = Lt(), a = r.length, o = 0; o < a; o++) {
      var s = r[o],
        c = s.f;
      if (!(!i && s === J)) {
        var l = (c & fe) === 0;
        if (l && j(s, t), c & 131072) Lr.add(s);
        else if (c & 2) {
          var u = s;
          R == null || R.delete(u), c & 65536 || (c & 512 && (J === null || !(J.f & 2097152)) && (s.f |= Ce), Yr(u, pe, n))
        } else if (l) {
          var d = s;
          c & 16 && Ar !== null && Ar.add(d), n === null ? Nr(d) : n.push(d)
        }
      }
    }
}

function Xr(e) {
  if (typeof e != `object` || !e || De in e) return e;
  let t = y(e);
  if (t !== _ && t !== v) return e;
  var n = new Map,
    r = u(e),
    i = Hr(0),
    a = null,
    o = ra,
    s = e => {
      if (ra === o) return e();
      var t = K,
        n = ra;
      q(null), ia(o);
      var r = e();
      return q(t), ia(n), r
    };
  return r && n.set(`length`, Hr(e.length, a)), new Proxy(e, {
    defineProperty(e, t, r) {
      (!(`value` in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && $e();
      var i = n.get(t);
      return i === void 0 ? s(() => {
        var e = Hr(r.value, a);
        return n.set(t, e), e
      }) : Wr(i, r.value, !0), !0
    },
    deleteProperty(e, t) {
      var r = n.get(t);
      if (r === void 0) {
        if (t in e) {
          let e = s(() => Hr(w, a));
          n.set(t, e), Jr(i)
        }
      } else Wr(r, w), Jr(i);
      return !0
    },
    get(t, r, i) {
      var o;
      if (r === De) return e;
      var c = n.get(r),
        l = r in t;
      if (c === void 0 && (!l || (o = h(t, r)) != null && o.writable) && (c = s(() => Hr(Xr(l ? t[r] : w), a)), n.set(r, c)), c !== void 0) {
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
      if (t === De) return !0;
      var i = n.get(t),
        o = i !== void 0 && i.v !== w || Reflect.has(e, t);
      return (i !== void 0 || J !== null && (!o || (r = h(e, t)) != null && r.writable)) && (i === void 0 && (i = s(() => Hr(o ? Xr(e[t]) : w, a)), n.set(t, i)), Z(i) === w) ? !1 : o
    },
    set(e, t, o, c) {
      var l = n.get(t),
        u = t in e;
      if (r && t === `length`)
        for (var d = o; d < l.v; d += 1) {
          var f = n.get(d + ``);
          f === void 0 ? d in e && (f = s(() => Hr(w, a)), n.set(d + ``, f)) : Wr(f, w)
        }
      if (l === void 0) {
        var p;
        (!u || (p = h(e, t)) != null && p.writable) && (l = s(() => Hr(void 0, a)), Wr(l, Xr(o)), n.set(t, l))
      } else {
        u = l.v !== w;
        var m = s(() => Xr(o));
        Wr(l, m)
      }
      var g = Reflect.getOwnPropertyDescriptor(e, t);
      if (g != null && g.set && g.set.call(c, o), !u) {
        if (r && typeof t == `string`) {
          var _ = n.get(`length`),
            v = Number(t);
          Number.isInteger(v) && v >= _.v && Wr(_, v + 1)
        }
        Jr(i)
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
      et()
    }
  })
}

function Zr(e) {
  try {
    if (typeof e == `object` && e && De in e) return e[De]
  } catch {}
  return e
}

function Qr(e, t) {
  return Object.is(Zr(e), Zr(t))
}
var $r, ei, ti, ni, ri;

function ii() {
  if ($r === void 0) {
    $r = window, ei = document, ti = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ni = h(t, `firstChild`).get, ri = h(t, `nextSibling`).get, b(e) && (e[Me] = void 0, e[je] = null, e[Ne] = void 0, e.__e = void 0), b(n) && (n[Pe] = void 0)
  }
}

function B(e = ``) {
  return document.createTextNode(e)
}

function V(e) {
  return ni.call(e)
}

function H(e) {
  return ri.call(e)
}

function ai(e, t) {
  if (!T) return V(e);
  var n = V(D);
  if (n === null) n = D.appendChild(B());
  else if (t && n.nodeType !== 3) {
    var r = B();
    return n == null || n.before(r), O(r), r
  }
  return t && di(n), O(n), n
}

function oi(e, t = !1) {
  if (!T) {
    var n = V(e);
    return n instanceof Comment && n.data === `` ? H(n) : n
  }
  if (t) {
    if ((D == null ? void 0 : D.nodeType) !== 3) {
      var r = B();
      return D == null || D.before(r), O(r), r
    }
    di(D)
  }
  return D
}

function si(e, t = 1, n = !1) {
  let r = T ? D : e;
  for (var i; t--;) i = r, r = H(r);
  if (!T) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== 3) {
      var a = B();
      return r === null ? i == null || i.after(a) : r.before(a), O(a), a
    }
    di(r)
  }
  return O(r), r
}

function ci(e) {
  e.textContent = ``
}

function li() {
  return !1
}

function ui(e, t, n) {
  return t == null || t === `http://www.w3.org/1999/xhtml` ? n ? document.createElement(e, {
    is: n
  }) : document.createElement(e) : n ? document.createElementNS(t, e, {
    is: n
  }) : document.createElementNS(t, e)
}

function di(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function fi(e, t) {
  if (t) {
    let t = document.body;
    e.autofocus = !0, A(() => {
      document.activeElement === t && e.focus()
    })
  }
}

function pi(e) {
  T && V(e) !== null && ci(e)
}
var mi = !1;

function hi() {
  mi || (mi = !0, document.addEventListener(`reset`, e => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented)
        for (let n of e.target.elements) {
          var t;
          (t = n[Fe]) == null || t.call(n)
        }
    })
  }, {
    capture: !0
  }))
}

function gi(e, t, n, r = !0) {
  r && n();
  for (var i of t) e.addEventListener(i, n);
  Si(() => {
    for (var r of t) e.removeEventListener(r, n)
  })
}

function _i(e) {
  var t = K,
    n = J;
  q(null), Xi(null);
  try {
    return e()
  } finally {
    q(t), Xi(n)
  }
}

function vi(e, t, n, r = n) {
  e.addEventListener(t, () => _i(n));
  let i = e[Fe];
  e[Fe] = i ? () => {
    i(), r(!0)
  } : () => r(!0), hi()
}

function yi(e) {
  J === null && (K === null && Ge(e), We()), qi && Ue(e)
}

function bi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function U(e, t) {
  var n = J;
  n !== null && n.f & 8192 && (e |= me);
  var r = {
    ctx: k,
    deps: null,
    nodes: null,
    f: e | fe | 512,
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
  L == null || L.register_created_effect(r);
  var i = r;
  if (e & 4) tr === null ? br.ensure().schedule(r) : tr.push(r);
  else if (t !== null) {
    try {
      da(r)
    } catch (e) {
      throw G(r), e
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ve))
  }
  if (i !== null && (i.parent = n, n !== null && bi(i, n), K !== null && K.f & 2 && !(e & 64))) {
    var a = K;
    (a.effects ?? (a.effects = [])).push(i)
  }
  return r
}

function xi() {
  return K !== null && !Yi
}

function Si(e) {
  let t = U(8, null);
  return j(t, de), t.teardown = e, t
}

function Ci(e) {
  yi(`$effect`);
  var t = J.f;
  if (!K && t & 32 && k !== null && !k.i) {
    var n = k;
    (n.e ?? (n.e = [])).push(e)
  } else return wi(e)
}

function wi(e) {
  return U(4 | xe, e)
}

function Ti(e) {
  return yi(`$effect.pre`), U(8 | xe, e)
}

function Ei(e) {
  br.ensure();
  let t = U(64 | be, e);
  return () => {
    G(t)
  }
}

function Di(e) {
  br.ensure();
  let t = U(64 | be, e);
  return (e = {}) => new Promise(n => {
    e.outro ? Bi(t, () => {
      G(t), n(void 0)
    }) : (G(t), n(void 0))
  })
}

function Oi(e) {
  return U(4, e)
}

function ki(e) {
  return U(Te | be, e)
}

function Ai(e, t = 0) {
  return U(8 | t, e)
}

function ji(e, t = [], n = [], r = []) {
  Fn(r, t, n, t => {
    U(8, () => {
      e(...t.map(Z))
    })
  })
}

function Mi(e, t = [], n = [], r = []) {
  Fn(r, t, n, t => {
    U(4, () => e(...t.map(Z)))
  })
}

function Ni(e, t = 0) {
  return U(16 | t, e)
}

function Pi(e, t = 0) {
  return U(ue | t, e)
}

function W(e) {
  return U(32 | be, e)
}

function Fi(e) {
  var t = e.teardown;
  if (t !== null) {
    let e = qi,
      n = K;
    Ji(!0), q(null);
    try {
      t.call(null)
    } finally {
      Ji(e), q(n)
    }
  }
}

function Ii(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    let e = n.ac;
    e !== null && _i(() => {
      e.abort(Ie)
    });
    var r = n.next;
    n.f & 64 ? n.parent = null : G(n, t), n = r
  }
}

function Li(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    t.f & 32 || G(t), t = n
  }
}

function G(e, t = !0) {
  var n = !1;
  (t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Ri(e.nodes.start, e.nodes.end), n = !0), e.f |= _e, Ii(e, t && !n), ua(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (let e of r) e.stop();
  Fi(e), e.f ^= _e, e.f |= he;
  var i = e.parent;
  i !== null && i.first !== null && zi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null
}

function Ri(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : H(e);
    e.remove(), e = n
  }
}

function zi(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Bi(e, t, n = !0) {
  var r = [];
  Vi(e, r, !0);
  var i = () => {
      n && G(e), t && t()
    },
    a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of r) s.out(o)
  } else i()
}

function Vi(e, t, n) {
  if (!(e.f & 8192)) {
    e.f ^= me;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (let e of r)(e.is_global || n) && t.push(e);
    for (var i = e.first; i !== null;) {
      var a = i.next;
      if (!(i.f & 64)) {
        var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
        Vi(i, t, o ? n : !1)
      }
      i = a
    }
  }
}

function Hi(e) {
  Ui(e, !0)
}

function Ui(e, t) {
  if (e.f & 8192) {
    e.f ^= me, e.f & 1024 || (j(e, fe), br.ensure().schedule(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        i = !!(n.f & 65536) || !!(n.f & 32);
      Ui(n, i ? t : !1), n = r
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (let e of a)(e.is_global || t) && e.in()
  }
}

function Wi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var i = n === r ? null : H(n);
      t.append(n), n = i
    }
}
var Gi = null,
  Ki = !1,
  qi = !1;

function Ji(e) {
  qi = e
}
var K = null,
  Yi = !1;

function q(e) {
  K = e
}
var J = null;

function Xi(e) {
  J = e
}
var Zi = null;

function Qi(e) {
  K !== null && (Zi ?? (Zi = new Set)).add(e)
}
var Y = null,
  X = 0,
  $i = null;

function ea(e) {
  $i = e
}
var ta = 1,
  na = 0,
  ra = na;

function ia(e) {
  ra = e
}

function aa() {
  return ++ta
}

function oa(e) {
  var t = e.f;
  if (t & 2048) return !0;
  if (t & 2 && (e.f &= ~Ce), t & 4096) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (oa(a) && Kn(a), a.wv > e.wv) return !0
    }
    t & 512 && R === null && j(e, de)
  }
  return !1
}

function sa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Zi !== null && Zi.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & 2 ? sa(a, t, !1) : t === a && (n ? j(a, fe) : a.f & 1024 && j(a, pe), Nr(a))
    }
}

function ca(e) {
  var t = Y,
    n = X,
    r = $i,
    i = K,
    a = Zi,
    o = k,
    s = Yi,
    c = ra,
    l = e.f;
  Y = null, X = 0, $i = null, K = l & 96 ? null : e, Zi = null, kt(e.ctx), Yi = !1, ra = ++na, e.ac !== null && (_i(() => {
    e.ac.abort(Ie)
  }), e.ac = null);
  try {
    e.f |= we;
    var u = e.fn,
      d = u();
    e.f |= ge;
    var f = e.deps,
      p = L == null ? void 0 : L.is_fork;
    if (Y !== null) {
      var m;
      if (p || ua(e, X), f !== null && X > 0)
        for (f.length = X + Y.length, m = 0; m < Y.length; m++) f[X + m] = Y[m];
      else e.deps = f = Y;
      if (xi() && e.f & 512)
        for (m = X; m < f.length; m++) {
          var h;
          ((h = f[m]).reactions ?? (h.reactions = [])).push(e)
        }
    } else !p && f !== null && X < f.length && (ua(e, X), f.length = X);
    if (Lt() && $i !== null && !Yi && f !== null && !(e.f & 6146))
      for (m = 0; m < $i.length; m++) sa($i[m], e);
    if (i !== null && i !== e) {
      if (na++, i.deps !== null)
        for (let e = 0; e < n; e += 1) i.deps[e].rv = na;
      if (t !== null)
        for (let e of t) e.rv = na;
      $i !== null && (r === null ? r = $i : r.push(...$i))
    }
    return e.f & 8388608 && (e.f ^= Ee), d
  } catch (e) {
    return Ut(e)
  } finally {
    e.f ^= we, Y = t, X = n, $i = r, K = i, Zi = a, kt(o), Yi = s, ra = c
  }
}

function la(e, t) {
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
    a.f & 512 && (a.f ^= 512, a.f &= ~Ce), a.v !== w && Kt(a), qn(a), ua(a, 0)
  }
}

function ua(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) la(e, n[r])
}

function da(e) {
  var t = e.f;
  if (!(t & 16384)) {
    j(e, de);
    var n = J,
      r = Ki;
    J = e, Ki = !0;
    try {
      t & 16777232 ? Li(e) : Ii(e), Fi(e);
      var i = ca(e);
      e.teardown = typeof i == `function` ? i : null, e.wv = ta
    } finally {
      Ki = r, J = n
    }
  }
}
async function fa() {
  await Promise.resolve(), Or()
}

function pa() {
  return br.ensure().settled()
}

function Z(e) {
  var t = !!(e.f & 2);
  if (Gi == null || Gi.add(e), K !== null && !Yi && !(J !== null && J.f & 16384) && (Zi === null || !Zi.has(e))) {
    var n = K.deps;
    if (K.f & 2097152) e.rv < na && (e.rv = na, Y === null && n !== null && n[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
    else {
      var r;
      (r = K).deps ?? (r.deps = []), f.call(K.deps, e) || K.deps.push(e);
      var i = e.reactions;
      i === null ? e.reactions = [K] : f.call(i, K) || i.push(K)
    }
  }
  if (qi && Rr.has(e)) return Rr.get(e);
  if (t) {
    var a = e;
    if (qi) {
      var o = a.v;
      return (!(a.f & 1024) && a.reactions !== null || ha(a)) && (o = Gn(a)), Rr.set(a, o), o
    }
    var s = !(a.f & 512) && !Yi && K !== null && (Ki || !!(K.f & 512)),
      c = (a.f & ge) === 0;
    oa(a) && (s && (a.f |= 512), Kn(a)), s && !c && (Jn(a), ma(a))
  }
  if (R != null && R.has(e)) return R.get(e);
  if (e.f & 8388608) throw e.v;
  return e.v
}

function ma(e) {
  if (e.f |= 512, e.deps !== null)
    for (let t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), t.f & 2 && !(t.f & 512) && (Jn(t), ma(t))
}

function ha(e) {
  if (e.v === w) return !0;
  if (e.deps === null) return !1;
  for (let t of e.deps)
    if (Rr.has(t) || t.f & 2 && ha(t)) return !0;
  return !1
}

function Q(e) {
  var t = Yi;
  try {
    return Yi = !0, e()
  } finally {
    Yi = t
  }
}

function ga(e) {
  if (!(typeof e != `object` || !e || e instanceof EventTarget)) {
    if (De in e) _a(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        let n = e[t];
        typeof n == `object` && n && De in n && _a(n)
      }
  }
}

function _a(e, t = new Set) {
  if (typeof e == `object` && e && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e) try {
      _a(e[n], t)
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

function va() {
  return Symbol(ot)
}

function ya(e) {
  return e.endsWith(`capture`) && e !== `gotpointercapture` && e !== `lostpointercapture`
}
var ba = [`beforeinput`, `click`, `change`, `dblclick`, `contextmenu`, `focusin`, `focusout`, `input`, `keydown`, `keyup`, `mousedown`, `mousemove`, `mouseout`, `mouseover`, `mouseup`, `pointerdown`, `pointermove`, `pointerout`, `pointerover`, `pointerup`, `touchend`, `touchmove`, `touchstart`];

function xa(e) {
  return ba.includes(e)
}
var Sa = `allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`),
  Ca = {
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

function wa(e) {
  return e = e.toLowerCase(), Ca[e] ?? e
} [...Sa];
var Ta = [`touchstart`, `touchmove`];

function Ea(e) {
  return Ta.includes(e)
}
var Da = [`textarea`, `script`, `style`, `title`];

function Oa(e) {
  return Da.includes(e)
}
var ka = Symbol(`events`),
  Aa = new Set,
  ja = new Set;

function Ma(e) {
  if (!T) return;
  e.removeAttribute(`onload`), e.removeAttribute(`onerror`);
  let t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Na(e, t, n, r = {}) {
  function i(e) {
    if (r.capture || za.call(t, e), !e.cancelBubble) return _i(() => n == null ? void 0 : n.call(this, e))
  }
  return e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel` ? A(() => {
    t.addEventListener(e, i, r)
  }) : t.addEventListener(e, i, r), i
}

function Pa(e, t, n, r = {}) {
  var i = Na(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r)
  }
}

function Fa(e, t, n, r, i) {
  var a = {
      capture: r,
      passive: i
    },
    o = Na(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Si(() => {
    t.removeEventListener(e, o, a)
  })
}

function Ia(e, t, n) {
  (t[ka] ?? (t[ka] = {}))[e] = n
}

function La(e) {
  for (var t = 0; t < e.length; t++) Aa.add(e[t]);
  for (var n of ja) n(e)
}
var Ra = null;

function za(e) {
  var t, n = this,
    r = n.ownerDocument,
    i = e.type,
    a = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [],
    o = a[0] || e.target;
  Ra = e;
  var s = 0,
    c = Ra === e && e[ka];
  if (c) {
    var l = a.indexOf(c);
    if (l !== -1 && (n === document || n === window)) {
      e[ka] = n;
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
    var d = K,
      f = J;
    q(null), Xi(null);
    try {
      for (var p, h = []; o !== null && o !== n;) {
        try {
          var g, _ = (g = o[ka]) == null ? void 0 : g[i];
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
      e[ka] = n, delete e.currentTarget, q(d), Xi(f)
    }
  }
}
var Ba, Va = ((Ba = globalThis) == null || (Ba = Ba.window) == null ? void 0 : Ba.trustedTypes) && globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, {
  createHTML: e => e
});

function Ha(e) {
  return (Va == null ? void 0 : Va.createHTML(e)) ?? e
}

function Ua(e) {
  var t = ui(`template`);
  return t.innerHTML = Ha(e.replaceAll(`<!>`, `<!---->`)), t.content
}
var Wa = Le ? `script` : `SCRIPT`;

function $(e, t) {
  var n = J;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function Ga(e, t) {
  var n = !!(t & 1),
    r = !!(t & 2),
    i, a = !e.startsWith(`<!>`);
  return () => {
    if (T) return $(D, null), D;
    i === void 0 && (i = Ua(a ? e : `<!>` + e), n || (i = V(i)));
    var t = r || ti ? document.importNode(i, !0) : i.cloneNode(!0);
    if (n) {
      var o = V(t),
        s = t.lastChild;
      $(o, s)
    } else $(t, t);
    return t
  }
}

function Ka(e, t, n = `svg`) {
  var r = !e.startsWith(`<!>`),
    i = !!(t & 1),
    a = `<${n}>${r?e:`<!>`+e}</${n}>`,
    o;
  return () => {
    if (T) return $(D, null), D;
    if (!o) {
      var e = V(Ua(a));
      if (i)
        for (o = document.createDocumentFragment(); V(e);) o.appendChild(V(e));
      else o = V(e)
    }
    var t = o.cloneNode(!0);
    if (i) {
      var n = V(t),
        r = t.lastChild;
      $(n, r)
    } else $(t, t);
    return t
  }
}

function qa(e, t) {
  return Ka(e, t, `svg`)
}

function Ja(e) {
  return () => Ya(e())
}

function Ya(e) {
  if (T) return e;
  let t = e.nodeType === 11,
    n = e.nodeName === Wa ? [e] : e.querySelectorAll(`script`),
    r = J;
  for (let a of n) {
    let n = ui(`script`);
    for (var i of a.attributes) n.setAttribute(i.name, i.value);
    n.textContent = a.textContent, (t ? e.firstChild === a : e === a) && (r.nodes.start = n), (t ? e.lastChild === a : e === a) && (r.nodes.end = n), a.replaceWith(n)
  }
  return e
}

function Xa(e = ``) {
  if (!T) {
    var t = B(e + ``);
    return $(t, t), t
  }
  var n = D;
  return n.nodeType === 3 ? di(n) : (n.before(n = B()), O(n)), $(n, n), n
}

function Za() {
  if (T) return $(D, null), D;
  var e = document.createDocumentFragment(),
    t = document.createComment(``),
    n = B();
  return e.append(t, n), $(t, n), e
}

function Qa(e, t) {
  if (T) {
    var n = J;
    (!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), pt();
    return
  }
  e !== null && e.before(t)
}

function $a() {
  var e, t, n;
  if (T && D && D.nodeType === 8 && (e = D.textContent) != null && e.startsWith(`$`)) {
    let e = D.textContent.substring(1);
    return pt(), e
  }
  return (t = (n = window).__svelte ?? (n.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
var eo = !0;

function to(e) {
  eo = e
}

function no(e, t) {
  var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
  n !== (e[Pe] ?? (e[Pe] = e.nodeValue)) && (e[Pe] = n, e.nodeValue = `${n}`)
}

function ro(e, t) {
  return oo(e, t)
}

function io(e, t) {
  ii(), t.intro = t.intro ?? !1;
  let n = t.target,
    r = T,
    i = D;
  try {
    for (var a = V(n); a && (a.nodeType !== 8 || a.data !== `[`);) a = H(a);
    if (!a) throw rt;
    E(!0), O(a);
    let r = oo(e, {
      ...t,
      anchor: a
    });
    return E(!1), r
  } catch (r) {
    if (r instanceof Error && r.message.split(`
`).some(e => e.startsWith(`https://svelte.dev/e/`))) throw r;
    return r !== rt && console.warn(`Failed to hydrate: `, r), t.recover === !1 && Xe(), ii(), ci(n), E(!1), ro(e, t)
  } finally {
    E(r), O(i)
  }
}
var ao = new Map;

function oo(e, {
  target: t,
  anchor: n,
  props: r = {},
  events: i,
  context: a,
  intro: o = !0,
  transformError: s
}) {
  ii();
  var c = void 0,
    l = Di(() => {
      var l = n ?? t.appendChild(B());
      ln(l, {
        pending: () => {}
      }, t => {
        Ft({});
        var n = k;
        if (a && (n.c = a), i && (r.$$events = i), T && $(t, null), eo = o, c = e(t, r) || {}, eo = !0, T && (J.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== `]`)) throw lt(), rt;
        It()
      }, s);
      var u = new Set,
        d = e => {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!u.has(r)) {
              u.add(r);
              var i = Ea(r);
              for (let e of [t, document]) {
                var a = ao.get(e);
                a === void 0 && (a = new Map, ao.set(e, a));
                var o = a.get(r);
                o === void 0 ? (e.addEventListener(r, za, {
                  passive: i
                }), a.set(r, 1)) : a.set(r, o + 1)
              }
            }
          }
        };
      return d(p(Aa)), ja.add(d), () => {
        for (var e of u)
          for (let n of [t, document]) {
            var r = ao.get(n),
              i = r.get(e);
            --i == 0 ? (n.removeEventListener(e, za), r.delete(e), r.size === 0 && ao.delete(n)) : r.set(e, i)
          }
        if (ja.delete(d), l !== n) {
          var a;
          (a = l.parentNode) == null || a.removeChild(l)
        }
      }
    });
  return so.set(c, l), c
}
var so = new WeakMap;

function co(e, t) {
  let n = so.get(e);
  return n ? (so.delete(e), n(t)) : Promise.resolve()
}
var lo = new WeakMap,
  uo = new WeakMap,
  fo = new WeakMap,
  po = new WeakMap,
  mo = new WeakMap,
  ho = new WeakMap,
  go = new WeakMap,
  _o = class {
    constructor(e, t = !0) {
      C(this, `anchor`, void 0), M(this, lo, new Map), M(this, uo, new Map), M(this, fo, new Map), M(this, po, new Set), M(this, mo, !0), M(this, ho, e => {
        if (F(lo, this).has(e)) {
          var t = F(lo, this).get(e),
            n = F(uo, this).get(t);
          if (n) Hi(n), F(po, this).delete(t);
          else {
            var r = F(fo, this).get(t);
            r && (Hi(r.effect), F(uo, this).set(t, r.effect), F(fo, this).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect)
          }
          for (let [t, n] of F(lo, this)) {
            if (F(lo, this).delete(t), t === e) break;
            let r = F(fo, this).get(n);
            r && (G(r.effect), F(fo, this).delete(n))
          }
          for (let [e, r] of F(uo, this)) {
            if (e === t || F(po, this).has(e)) continue;
            let i = () => {
              if (Array.from(F(lo, this).values()).includes(e)) {
                var t = document.createDocumentFragment();
                Wi(r, t), t.append(B()), F(fo, this).set(e, {
                  effect: r,
                  fragment: t
                })
              } else G(r);
              F(po, this).delete(e), F(uo, this).delete(e)
            };
            F(mo, this) || !n ? (F(po, this).add(e), Bi(r, i, !1)) : i()
          }
        }
      }), M(this, go, e => {
        F(lo, this).delete(e);
        let t = Array.from(F(lo, this).values());
        for (let [e, n] of F(fo, this)) t.includes(e) || (G(n.effect), F(fo, this).delete(e))
      }), this.anchor = e, P(mo, this, t)
    }
    ensure(e, t) {
      var n = L,
        r = li();
      if (t && !F(uo, this).has(e) && !F(fo, this).has(e)) {
        if (r) {
          var i = document.createDocumentFragment(),
            a = B();
          i.append(a), F(fo, this).set(e, {
            effect: W(() => t(a)),
            fragment: i
          })
        } else F(uo, this).set(e, W(() => t(this.anchor)))
      }
      if (F(lo, this).set(n, e), r) {
        for (let [t, r] of F(uo, this)) t === e ? n.unskip_effect(r) : n.skip_effect(r);
        for (let [t, r] of F(fo, this)) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
        n.oncommit(F(ho, this)), n.ondiscard(F(go, this))
      } else T && (this.anchor = D), F(ho, this).call(this, n)
    }
  },
  vo = 0,
  yo = 1,
  bo = 2;

function xo(e, t, n, r, i) {
  T && pt();
  var a = Lt(),
    o = w,
    s = a ? Vr(o) : Ur(o, !1, !1),
    c = a ? Vr(o) : Ur(o, !1, !1),
    l = new _o(e);
  Ni(() => {
    var a = L,
      o = t(),
      u = !1;
    let d = T && ee(o) === (e.data === `[!`);
    if (d && (O(gt()), E(!1)), ee(o)) {
      var f = In(),
        p = !1;
      let e = e => {
        if (!u) {
          p = !0, f(!1), L === a && a.deactivate(), br.ensure();
          try {
            e()
          } finally {
            Ln(!1), $n || Or()
          }
        }
      };
      o.then(t => {
        e(() => {
          Gr(s, t), l.ensure(yo, r && (e => r(e, s)))
        })
      }, t => {
        e(() => {
          if (Gr(c, t), l.ensure(bo, i && (e => i(e, c))), !i) throw c.v
        })
      }), T ? l.ensure(vo, n) : A(() => {
        p || e(() => {
          l.ensure(vo, n)
        })
      })
    } else Gr(s, o), l.ensure(yo, r && (e => r(e, s)));
    return d && E(!0), () => {
      u = !0
    }
  })
}

function So(e, t, n = !1) {
  var r;
  T && (r = D, pt());
  var i = new _o(e),
    a = n ? ve : 0;

  function o(e, t) {
    if (T) {
      var n = _t(r);
      if (e !== parseInt(n.substring(1))) {
        var a = gt();
        O(a), i.anchor = a, E(!1), i.ensure(e, t), E(!0);
        return
      }
    }
    i.ensure(e, t)
  }
  Ni(() => {
    var e = !1;
    t((t, n = 0) => {
      e = !0, o(n, t)
    }), e || o(-1, null)
  }, a)
}
var Co = Symbol(`NaN`);

function wo(e, t, n) {
  T && pt();
  var r = new _o(e),
    i = !Lt();
  Ni(() => {
    var e = t();
    e !== e && (e = Co), i && typeof e == `object` && e && (e = {}), r.ensure(e, n)
  })
}

function To(e, t) {
  return t
}

function Eo(e, t, n) {
  for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
    let n = t[s];
    Bi(n, () => {
      if (a) {
        if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
          var t = e.outrogroups;
          Do(e, p(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null)
        }
      } else --o
    }, !1)
  }
  if (o === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var l = n,
        u = l.parentNode;
      ci(u), u.append(l), e.items.clear()
    }
    Do(e, t, !c)
  } else a = {
    pending: new Set(t),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(a)
}

function Do(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = new Set;
    for (let t of e.pending.values())
      for (let n of t) r.add(e.items.get(n).e)
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    r != null && r.has(a) ? (a.f |= Se, Wi(a, document.createDocumentFragment())) : G(t[i], n)
  }
}
var Oo;

function ko(e, t, n, r, i, a = null) {
  var o = e,
    s = new Map;
  if (t & 4) {
    var c = e;
    o = T ? O(V(c)) : c.appendChild(B())
  }
  T && pt();
  var l = null,
    d = Un(() => {
      var e = n();
      return u(e) ? e : e == null ? [] : p(e)
    }),
    f, m = new Map,
    h = !0;

  function g(e) {
    v.effect.f & 16384 || (v.pending.delete(e), v.fallback = l, jo(v, f, o, t, r), l !== null && (f.length === 0 ? l.f & 33554432 ? (l.f ^= Se, No(l, null, o)) : Hi(l) : Bi(l, () => {
      l = null
    })))
  }

  function _(e) {
    v.pending.delete(e)
  }
  var v = {
    effect: Ni(() => {
      f = Z(d);
      var e = f.length;
      let c = !1;
      T && _t(o) === `[!` != (e === 0) && (o = gt(), O(o), E(!1), c = !0);
      for (var u = new Set, p = L, v = li(), y = 0; y < e; y += 1) {
        T && D.nodeType === 8 && D.data === `]` && (o = D, c = !0, E(!1));
        var b = f[y],
          x = r(b, y),
          S = h ? null : s.get(x);
        S ? (S.v && Gr(S.v, b), S.i && Gr(S.i, y), v && p.unskip_effect(S.e)) : (S = Mo(s, h ? o : Oo ?? (Oo = B()), b, x, y, i, t, n), h || (S.e.f |= Se), s.set(x, S)), u.add(x)
      }
      if (e === 0 && a && !l && (h ? l = W(() => a(o)) : (l = W(() => a(Oo ?? (Oo = B()))), l.f |= Se)), e > u.size && He(``, ``, ``), T && e > 0 && O(gt()), !h) {
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

function Ao(e) {
  for (; e !== null && !(e.f & 32);) e = e.next;
  return e
}

function jo(e, t, n, r, i) {
  var a = !!(r & 8),
    o = t.length,
    s = e.items,
    c = Ao(e.effect.first),
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
    if (_.f & 8192 && (Hi(_), a)) {
      var b;
      (b = _.nodes) == null || (b = b.a) == null || b.unfix(), (d ?? (d = new Set)).delete(_)
    }
    if (_.f & 33554432) {
      if (_.f ^= Se, _ === c) No(_, null, n);
      else {
        var x = u ? u.next : c;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Po(e, u, _), Po(e, _, x), No(_, x, n), u = _, f = [], m = [], c = Ao(u.next);
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
          for (ee = 0; ee < f.length; ee += 1) No(f[ee], S, n);
          for (ee = 0; ee < m.length; ee += 1) l.delete(m[ee]);
          Po(e, te.prev, ne.next), Po(e, u, te), Po(e, ne, S), c = S, u = ne, --v, f = [], m = []
        } else l.delete(_), No(_, c, n), Po(e, _.prev, _.next), Po(e, _, u === null ? e.effect.first : u.next), Po(e, u, _), u = _;
        continue
      }
      for (f = [], m = []; c !== null && c !== _;)(l ?? (l = new Set)).add(c), m.push(c), c = Ao(c.next);
      if (c === null) continue
    }
    _.f & 33554432 || f.push(_), u = _, c = Ao(_.next)
  }
  if (e.outrogroups !== null) {
    for (let t of e.outrogroups)
      if (t.pending.size === 0) {
        var re;
        Do(e, p(t.done)), (re = e.outrogroups) == null || re.delete(t)
      } e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (c !== null || l !== void 0) {
    var ie = [];
    if (l !== void 0)
      for (_ of l) _.f & 8192 || ie.push(_);
    for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ie.push(c), c = Ao(c.next);
    var ae = ie.length;
    if (ae > 0) {
      var oe = r & 4 && o === 0 ? n : null;
      if (a) {
        for (v = 0; v < ae; v += 1) {
          var se;
          (se = ie[v].nodes) == null || (se = se.a) == null || se.measure()
        }
        for (v = 0; v < ae; v += 1) {
          var ce;
          (ce = ie[v].nodes) == null || (ce = ce.a) == null || ce.fix()
        }
      }
      Eo(e, ie, oe)
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

function Mo(e, t, n, r, i, a, o, s) {
  var c = o & 1 ? o & 16 ? Vr(n) : Ur(n, !1, !1) : null,
    l = o & 2 ? Vr(i) : null;
  return {
    v: c,
    i: l,
    e: W(() => (a(t, c ?? n, l ?? i, s), () => {
      e.delete(r)
    }))
  }
}

function No(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
      var o = H(r);
      if (a.before(r), r === i) return;
      r = o
    }
}

function Po(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t
}

function Fo(e, t, n = !1, r = !1, i = !1, a = !1) {
  var o = e,
    s = ``;
  if (n) {
    var c = e;
    T && (o = O(V(c)))
  }
  ji(() => {
    var e = J;
    if (s === (s = t() ?? ``)) {
      T && pt();
      return
    }
    if (n && !T) {
      e.nodes = null, c.innerHTML = s, s !== `` && $(V(c), c.lastChild);
      return
    }
    if (e.nodes !== null && (Ri(e.nodes.start, e.nodes.end), e.nodes = null), s !== ``) {
      if (T) {
        for (var a = D.data, l = pt(), u = l; l !== null && (l.nodeType !== 8 || l.data !== ``);) u = l, l = H(l);
        if (l === null) throw lt(), rt;
        $(D, u), o = O(l);
        return
      }
      var d = ui(r ? `svg` : i ? `math` : `template`, r ? it : i ? at : void 0);
      d.innerHTML = s;
      var f = r || i ? d : d.content;
      if ($(V(f), f.lastChild), r || i)
        for (; V(f);) o.before(V(f));
      else o.before(f)
    }
  })
}

function Io(e, t, ...n) {
  var r = new _o(e);
  Ni(() => {
    let e = t() ?? null;
    r.ensure(e, e && (t => e(t, ...n)))
  }, ve)
}

function Lo(e) {
  return (t, ...n) => {
    var r, i = e(...n),
      a;
    T ? (a = D, pt()) : (a = V(Ua(i.render().trim())), t.before(a));
    let o = (r = i.setup) == null ? void 0 : r.call(i, a);
    $(a, a), typeof o == `function` && Si(o)
  }
}

function Ro(e, t, n) {
  var r;
  T && (r = D, pt());
  var i = new _o(e);
  Ni(() => {
    var e = t() ?? null;
    if (T && _t(r) === `[` != (e !== null)) {
      var a = gt();
      O(a), i.anchor = a, E(!1), i.ensure(e, e && (t => n(t, e))), E(!0);
      return
    }
    i.ensure(e, e && (t => n(t, e)))
  }, ve)
}
var zo = () => performance.now(),
  Bo = {
    tick: e => requestAnimationFrame(e),
    now: () => zo(),
    tasks: new Set
  };

function Vo() {
  let e = Bo.now();
  Bo.tasks.forEach(t => {
    t.c(e) || (Bo.tasks.delete(t), t.f())
  }), Bo.tasks.size !== 0 && Bo.tick(Vo)
}

function Ho(e) {
  let t;
  return Bo.tasks.size === 0 && Bo.tick(Vo), {
    promise: new Promise(n => {
      Bo.tasks.add(t = {
        c: e,
        f: n
      })
    }),
    abort() {
      Bo.tasks.delete(t)
    }
  }
}

function Uo(e, t) {
  _i(() => {
    e.dispatchEvent(new CustomEvent(t))
  })
}

function Wo(e) {
  if (e === `float`) return `cssFloat`;
  if (e === `offset`) return `cssOffset`;
  if (e.startsWith(`--`)) return e;
  let t = e.split(`-`);
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(e => e[0].toUpperCase() + e.slice(1)).join(``)
}

function Go(e) {
  let t = {},
    n = e.split(`;`);
  for (let e of n) {
    let [n, r] = e.split(`:`);
    if (!n || r === void 0) break;
    let i = Wo(n.trim());
    t[i] = r.trim()
  }
  return t
}
var Ko = e => e,
  qo = null;

function Jo(e) {
  qo = e
}

function Yo(e, t, n) {
  var r = (qo ?? J).nodes,
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
        o = Zo(this.element, e, void 0, 1, () => {}, () => {
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

function Xo(e, t, n, r) {
  var i, a = !!(e & 1),
    o = !!(e & 2),
    s = a && o,
    c = !!(e & 4),
    l = s ? `both` : a ? `in` : `out`,
    u, d = t.inert,
    f = t.style.overflow,
    p, m;

  function h() {
    return _i(() => u ?? (u = n()(t, (r == null ? void 0 : r()) ?? {}, {
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
        o || p == null || p.abort(), p = Zo(t, h(), m, 1, () => {
          Uo(t, `introstart`)
        }, () => {
          Uo(t, `introend`), p == null || p.abort(), p = u = void 0, t.style.overflow = f
        })
      },
      out(e) {
        if (!o) {
          e == null || e(), u = void 0;
          return
        }
        t.inert = !0, m = Zo(t, h(), p, 0, () => {
          Uo(t, `outrostart`)
        }, () => {
          Uo(t, `outroend`), e == null || e()
        })
      },
      stop: () => {
        p == null || p.abort(), m == null || m.abort()
      }
    },
    _ = J;
  if (((i = _.nodes).t ?? (i.t = [])).push(g), a && eo) {
    var v = c;
    if (!v) {
      for (var y = _.parent; y && y.f & 65536;)
        for (;
          (y = y.parent) && !(y.f & 16););
      v = !y || !!(y.f & 32768)
    }
    v && Oi(() => {
      Q(() => g.in())
    })
  }
}

function Zo(e, t, n, r, i, a) {
  var o = r === 1;
  if (x(t)) {
    var s, c = !1;
    return A(() => {
      c || (s = Zo(e, t({
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
    easing: f = Ko
  } = t;
  var p = [];
  if (o && n === void 0 && (d && d(0, 1), u)) {
    var m = Go(u(0, 1));
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
            y = Go(u(v, 1 - v));
          l.push(y), p || (p = y.overflow === `hidden`)
        }
      p && (e.style.overflow = `hidden`), h = () => {
        var e = g.currentTime;
        return o + s * f(e / c)
      }, d && Ho(() => {
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

function Qo(e, t, n, r, i, a) {
  let o = T;
  T && pt();
  var s = null;
  T && D.nodeType === 1 && (s = D, pt());
  var c = T ? D : e,
    l = J,
    u = new _o(c, !1);
  Ni(() => {
    let e = t() || null;
    var a = i ? i() : n || e === `svg` ? it : void 0;
    if (e === null) {
      u.ensure(null, null), to(!0);
      return
    }
    return u.ensure(e, t => {
      if (e) {
        if (s = T ? s : ui(e, a), $(s, s), r) {
          var n = null;
          T && Oa(e) && s.append(n = document.createComment(``));
          var i = T ? V(s) : s.appendChild(B());
          T && (i === null ? E(!1) : O(i)), Jo(l), r(s, i), n == null || n.remove(), Jo(null)
        }
        J.nodes.end = s, t.before(s)
      }
      T && O(t)
    }), to(!0), () => {
      e && to(!1)
    }
  }, ve), Si(() => {
    to(!0)
  }), o && (E(!0), O(c))
}

function $o(e, t) {
  let n = null,
    r = T;
  var i;
  if (T) {
    n = D;
    for (var a = V(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = H(a);
    if (a === null) E(!1);
    else {
      var o = H(a);
      a.remove(), O(o)
    }
  }
  T || (i = document.head.appendChild(B()));
  try {
    Ni(() => {
      var e = W(() => t(i));
      e.f |= ye
    })
  } finally {
    r && (E(!0), O(n))
  }
}

function es(e, t, n) {
  Oi(() => {
    var r = Q(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var i = !1,
        a = {};
      Ai(() => {
        var e = n();
        ga(e), i && yt(a, e) && (a = e, r.update(e))
      }), i = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}

function ts(e, t) {
  var n = void 0,
    r;
  Pi(() => {
    n !== (n = t()) && (r && (G(r), r = null), n && (r = W(() => {
      Oi(() => n(e))
    })))
  })
}

function ns(e) {
  var t, n, r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = ns(e[t])) && (r && (r += ` `), r += n)
    } else
      for (n in e) e[n] && (r && (r += ` `), r += n)
  }
  return r
}

function rs() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)(e = arguments[n]) && (t = ns(e)) && (r && (r += ` `), r += t);
  return r
}

function is(e) {
  return typeof e == `object` ? rs(e) : e ?? ``
}
var as = [...` 	
\r\f\xA0\v﻿`];

function os(e, t, n) {
  var r = e == null ? `` : `` + e;
  if (t && (r = r ? r + ` ` + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i]) r = r ? r + ` ` + i : i;
      else if (r.length)
      for (var a = i.length, o = 0;
        (o = r.indexOf(i, o)) >= 0;) {
        var s = o + a;
        (o === 0 || as.includes(r[o - 1])) && (s === r.length || as.includes(r[s])) ? r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1): o = s
      }
  }
  return r === `` ? null : r
}

function ss(e, t = !1) {
  var n = t ? ` !important;` : `;`,
    r = ``;
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== `` && (r += ` ` + i + `: ` + a + n)
  }
  return r
}

function cs(e) {
  return e[0] !== `-` || e[1] !== `-` ? e.toLowerCase() : e
}

function ls(e, t) {
  if (t) {
    var n = ``,
      r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, ``).trim();
      var a = !1,
        o = 0,
        s = !1,
        c = [];
      r && c.push(...Object.keys(r).map(cs)), i && c.push(...Object.keys(i).map(cs));
      var l = 0,
        u = -1;
      let t = e.length;
      for (var d = 0; d < t; d++) {
        var f = e[d];
        if (s ? f === `/` && e[d - 1] === `*` && (s = !1) : a ? a === f && (a = !1) : f === `/` && e[d + 1] === `*` ? s = !0 : f === `"` || f === `'` ? a = f : f === `(` ? o++ : f === `)` && o--, !s && a === !1 && o === 0) {
          if (f === `:` && u === -1) u = d;
          else if (f === `;` || d === t - 1) {
            if (u !== -1) {
              var p = cs(e.substring(l, u).trim());
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
    return r && (n += ss(r)), i && (n += ss(i, !0)), n = n.trim(), n === `` ? null : n
  }
  return e == null ? null : String(e)
}

function us(e, t, n, r, i, a) {
  var o = e[Me];
  if (T || o !== n || o === void 0) {
    var s = os(n, r, a);
    (!T || s !== e.getAttribute(`class`)) && (s == null ? e.removeAttribute(`class`) : t ? e.className = s : e.setAttribute(`class`, s)), e[Me] = n
  } else if (a && i !== a)
    for (var c in a) {
      var l = !!a[c];
      (i == null || l !== !!i[c]) && e.classList.toggle(c, l)
    }
  return a
}

function ds(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r))
  }
}

function fs(e, t, n, r) {
  var i = e[Ne];
  if (T || i !== t) {
    var a = ls(t, r);
    (!T || a !== e.getAttribute(`style`)) && (a == null ? e.removeAttribute(`style`) : e.style.cssText = a), e[Ne] = t
  } else r && (Array.isArray(r) ? (ds(e, n == null ? void 0 : n[0], r[0]), ds(e, n == null ? void 0 : n[1], r[1], `important`)) : ds(e, n, r));
  return r
}

function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null) return;
    if (!u(t)) return ut();
    for (var r of e.options) r.selected = t.includes(gs(r));
    return
  }
  for (r of e.options)
    if (Qr(gs(r), t)) {
      r.selected = !0;
      return
    }(!n || t !== void 0) && (e.selectedIndex = -1)
}

function ms(e) {
  var t = new MutationObserver(() => {
    ps(e, e.__value)
  });
  t.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [`value`]
  }), Si(() => {
    t.disconnect()
  })
}

function hs(e, t, n = t) {
  var r = new WeakSet,
    i = !0;
  vi(e, `change`, t => {
    var i = t ? `[selected]` : `:checked`,
      a;
    if (e.multiple) a = [].map.call(e.querySelectorAll(i), gs);
    else {
      var o = e.querySelector(i) ?? e.querySelector(`option:not([disabled])`);
      a = o && gs(o)
    }
    n(a), e.__value = a, L !== null && r.add(L)
  }), Oi(() => {
    var a = t();
    if (e === document.activeElement) {
      var o = L;
      if (r.has(o)) return
    }
    if (ps(e, a, i), i && a === void 0) {
      var s = e.querySelector(`:checked`);
      s !== null && (a = gs(s), n(a))
    }
    e.__value = a, i = !1
  }), ms(e)
}

function gs(e) {
  return `__value` in e ? e.__value : e.value
}
var _s = Symbol(`class`),
  vs = Symbol(`style`),
  ys = Symbol(`is custom element`),
  bs = Symbol(`is html`),
  xs = Le ? `link` : `LINK`,
  Ss = Le ? `input` : `INPUT`,
  Cs = Le ? `option` : `OPTION`,
  ws = Le ? `select` : `SELECT`,
  Ts = Le ? `progress` : `PROGRESS`;

function Es(e) {
  if (T) {
    var t = !1,
      n = () => {
        if (!t) {
          if (t = !0, e.hasAttribute(`value`)) {
            var n = e.value;
            As(e, `value`, null), e.value = n
          }
          if (e.hasAttribute(`checked`)) {
            var r = e.checked;
            As(e, `checked`, null), e.checked = r
          }
        }
      };
    e[Fe] = n, A(n), hi()
  }
}

function Ds(e, t) {
  var n = Ns(e);
  n.value !== (n.value = t ?? void 0) && (e.value !== t || t === 0 && e.nodeName === Ts) && (e.value = t ?? ``)
}

function Os(e, t) {
  var n = Ns(e);
  n.checked !== (n.checked = t ?? void 0) && (e.checked = t)
}

function ks(e, t) {
  t ? e.hasAttribute(`selected`) || e.setAttribute(`selected`, ``) : e.removeAttribute(`selected`)
}

function As(e, t, n, r) {
  var i = Ns(e);
  T && (i[t] = e.getAttribute(t), t === `src` || t === `srcset` || t === `href` && e.nodeName === xs) || i[t] !== (i[t] = n) && (t === `loading` && (e[ke] = n), n == null ? e.removeAttribute(t) : typeof n != `string` && Fs(e).includes(t) ? e[t] = n : e.setAttribute(t, n))
}

function js(e, t, n, r, i = !1, a = !1) {
  if (T && i && e.nodeName === Ss) {
    var o = e;
    (o.type === `checkbox` ? `defaultChecked` : `defaultValue`) in n || Es(o)
  }
  var s = Ns(e),
    c = s[ys],
    l = !s[bs];
  let u = T && c;
  u && E(!1);
  var d = t || {},
    f = e.nodeName === Cs;
  for (var p in t) p in n || (n[p] = null);
  n.class ? n.class = is(n.class) : (r || n[_s]) && (n.class = null), n[vs] && (n.style ?? (n.style = null));
  var m = Fs(e);
  if (e.nodeName === Ss && `type` in n && (`value` in n || `__value` in n)) {
    var h = n.type;
    (h !== d.type || h === void 0 && e.hasAttribute(`type`)) && (d.type = h, As(e, `type`, h, a))
  }
  for (let i in n) {
    let o = n[i];
    if (f && i === `value` && o == null) {
      e.value = e.__value = ``, d[i] = o;
      continue
    }
    if (i === `class`) {
      us(e, e.namespaceURI === `http://www.w3.org/1999/xhtml`, o, r, t == null ? void 0 : t[_s], n[_s]), d[i] = o, d[_s] = n[_s];
      continue
    }
    if (i === `style`) {
      fs(e, o, t == null ? void 0 : t[vs], n[vs]), d[i] = o, d[vs] = n[vs];
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
          var v = xa(r);
          if (ya(r) && (r = r.slice(0, -7), t.capture = !0), !v && g) {
            if (o != null) continue;
            e.removeEventListener(r, d[n], t), d[n] = null
          }
          if (v) Ia(r, e, o), La([r]);
          else if (o != null) {
            function a(e) {
              d[i].call(this, e)
            }
            d[n] = Na(r, e, a, t)
          }
        } else if (i === `style`) As(e, i, o);
        else if (i === `autofocus`) fi(e, !!o);
        else if (!c && (i === `__value` || i === `value` && o != null)) e.value = e.__value = o;
        else if (i === `selected` && f) ks(e, o);
        else {
          var y = i;
          l || (y = wa(y));
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
          } else b || m.includes(y) && (c || typeof o != `string`) ? (e[y] = o, y in s && (s[y] = w)) : typeof o != `function` && As(e, y, o, a)
        }
      }
    }
  }
  return u && E(!0), d
}

function Ms(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
  Fn(i, n, r, n => {
    var r = void 0,
      i = {},
      c = e.nodeName === ws,
      l = !1;
    if (Pi(() => {
        var u = t(...n.map(Z)),
          d = js(e, r, u, a, o, s);
        l && c && `value` in u && ps(e, u.value);
        for (let e of Object.getOwnPropertySymbols(i)) u[e] || G(i[e]);
        for (let t of Object.getOwnPropertySymbols(u)) {
          var f = u[t];
          t.description === `@attach` && (!r || f !== r[t]) && (i[t] && G(i[t]), i[t] = W(() => ts(e, () => f))), d[t] = f
        }
        r = d
      }), c) {
      var u = e;
      Oi(() => {
        ps(u, r.value, !0), ms(u)
      })
    }
    l = !0
  })
}

function Ns(e) {
  return e[je] ?? (e[je] = {
    [ys]: e.nodeName.includes(`-`),
    [bs]: e.namespaceURI === `http://www.w3.org/1999/xhtml`
  })
}
var Ps = new Map;

function Fs(e) {
  var t = e.getAttribute(`is`) || e.nodeName,
    n = Ps.get(t);
  if (n) return n;
  Ps.set(t, n = []);
  for (var r, i = e, a = Element.prototype; a !== i;) {
    for (var o in r = g(i), r) r[o].set && o !== `innerHTML` && o !== `textContent` && o !== `innerText` && n.push(o);
    i = y(i)
  }
  return n
}

function Is(e, t, n = t) {
  var r = new WeakSet;
  vi(e, `input`, async i => {
    var a = i ? e.defaultValue : e.value;
    if (a = Vs(e) ? Hs(a) : a, n(a), L !== null && r.add(L), await fa(), a !== (a = t())) {
      var o = e.selectionStart,
        s = e.selectionEnd,
        c = e.value.length;
      if (e.value = a ?? ``, s !== null) {
        var l = e.value.length;
        o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l))
      }
    }
  }), (T && e.defaultValue !== e.value || Q(t) == null && e.value) && (n(Vs(e) ? Hs(e.value) : e.value), L !== null && r.add(L)), Ai(() => {
    var n = t();
    if (e === document.activeElement) {
      var i = L;
      if (r.has(i)) return
    }
    Vs(e) && n === Hs(e.value) || e.type === `date` && !n && !e.value || n !== e.value && (e.value = n ?? ``)
  })
}
var Ls = new Set;

function Rs(e, t, n, r, i = r) {
  var a = n.getAttribute(`type`) === `checkbox`,
    o = e;
  let s = !1;
  if (t !== null)
    for (var c of t) {
      var l;
      o = (l = o)[c] ?? (l[c] = [])
    }
  o.push(n), vi(n, `change`, () => {
    var e = n.__value;
    a && (e = Bs(o, e, n.checked)), i(e)
  }, () => i(a ? [] : null)), Ai(() => {
    var e = r();
    if (T && n.defaultChecked !== n.checked) {
      s = !0;
      return
    }
    a ? (e = e || [], n.checked = e.includes(n.__value)) : n.checked = Qr(n.__value, e)
  }), Si(() => {
    var e = o.indexOf(n);
    e !== -1 && o.splice(e, 1)
  }), Ls.has(o) || (Ls.add(o), A(() => {
    o.sort((e, t) => e.compareDocumentPosition(t) === 4 ? -1 : 1), Ls.delete(o)
  })), A(() => {
    if (s) {
      var e;
      if (a) e = Bs(o, e, n.checked);
      else {
        var t = o.find(e => e.checked);
        e = t == null ? void 0 : t.__value
      }
      i(e)
    }
  })
}

function zs(e, t, n = t) {
  vi(e, `change`, t => {
    n(t ? e.defaultChecked : e.checked)
  }), (T && e.defaultChecked !== e.checked || Q(t) == null) && n(e.checked), Ai(() => {
    e.checked = !!t()
  })
}

function Bs(e, t, n) {
  for (var r = new Set, i = 0; i < e.length; i += 1) e[i].checked && r.add(e[i].__value);
  return n || r.delete(t), Array.from(r)
}

function Vs(e) {
  var t = e.type;
  return t === `number` || t === `range`
}

function Hs(e) {
  return e === `` ? null : +e
}
var Us, Ws = new WeakMap,
  Gs = new WeakMap,
  Ks = new WeakMap,
  qs = new WeakSet,
  Js = class {
    constructor(e) {
      sn(this, qs), M(this, Ws, new WeakMap), M(this, Gs, void 0), M(this, Ks, void 0), P(Ks, this, e)
    }
    observe(e, t) {
      var n = F(Ws, this).get(e) || new Set;
      return n.add(t), F(Ws, this).set(e, n), N(qs, this, Ys).call(this).observe(e, F(Ks, this)), () => {
        var n = F(Ws, this).get(e);
        n.delete(t), n.size === 0 && (F(Ws, this).delete(e), F(Gs, this).unobserve(e))
      }
    }
  };
Us = Js;

function Ys() {
  return F(Gs, this) ?? P(Gs, this, new ResizeObserver(e => {
    for (var t of e) {
      Us.entries.set(t.target, t);
      for (var n of F(Ws, this).get(t.target) || []) n(t)
    }
  }))
}
C(Js, `entries`, new WeakMap);
var Xs = new Js({
  box: `border-box`
});

function Zs(e, t, n) {
  var r = Xs.observe(e, () => n(e[t]));
  Oi(() => (Q(() => n(e[t])), r))
}

function Qs(e, t) {
  return e === t || (e == null ? void 0 : e[De]) === t
}

function $s(e = {}, t, n, r) {
  var i = k.r,
    a = J;
  return Oi(() => {
    var o, s;
    return Ai(() => {
      o = s, s = (r == null ? void 0 : r()) || [], Q(() => {
        Qs(n(...s), e) || (t(e, ...s), o && Qs(n(...o), e) && t(null, ...o))
      })
    }), () => {
      let r = a;
      for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
      let o = () => {
          s && Qs(n(...s), e) && t(null, ...s)
        },
        c = r.teardown;
      r.teardown = () => {
        o(), c == null || c()
      }
    }
  }), e
}

function ec(e, t, n, r, i) {
  var a = () => {
    r(n[e])
  };
  n.addEventListener(t, a), i ? Ai(() => {
    n[e] = i()
  }) : a(), (n === document.body || n === window || n === document) && Si(() => {
    n.removeEventListener(t, a)
  })
}

function tc(e, t) {
  gi(window, [`resize`], () => _i(() => t(window[e])))
}

function nc(e = !1) {
  let t = k,
    n = t.l.u;
  if (!n) return;
  let r = () => ga(t.s);
  if (e) {
    let e = 0,
      n = {},
      i = zn(() => {
        let r = !1,
          i = t.s;
        for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
        return r && e++, e
      });
    r = () => Z(i)
  }
  n.b.length && Ti(() => {
    rc(t, r), ne(n.b)
  }), Ci(() => {
    let e = Q(() => n.m.map(te));
    return () => {
      for (let t of e) typeof t == `function` && t()
    }
  }), n.a.length && Ci(() => {
    rc(t, r), ne(n.a)
  })
}

function rc(e, t) {
  if (e.l.s)
    for (let t of e.l.s) Z(t);
  t()
}

function ic(e, t = 1) {
  let n = e();
  return e(n + t), n
}
var ac = {
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

function oc(e, t, n) {
  return new Proxy({
    props: e,
    exclude: t
  }, ac)
}
var sc = {
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
    if (t === De || t === Oe) return !1;
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

function cc(...e) {
  return new Proxy({
    props: e
  }, sc)
}

function lc(e, t, n, r) {
  var i = !xt || !!(n & 2),
    a = !!(n & 8),
    o = !!(n & 16),
    s = r,
    c = !0,
    l = void 0,
    u = () => o && i ? (l ?? (l = zn(r)), Z(l)) : (c && (c = !1, s = o ? Q(r) : r), s);
  let d;
  if (a) {
    var f, p = De in e || Oe in e;
    d = ((f = h(e, t)) == null ? void 0 : f.set) ?? (p && t in e ? n => e[t] = n : void 0)
  }
  var m, g = !1;
  a ? [m, g] = rn(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), d && (i && Qe(t), d(m)));
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
    b = (n & 1 ? zn : Un)(() => (y = !1, _()));
  a && Z(b);
  var x = J;
  return (function(e, t) {
    if (arguments.length > 0) {
      let n = t ? Z(b) : i && a ? Xr(e) : e;
      return Wr(b, n), y = !0, s !== void 0 && (s = n), e
    }
    return qi && y || x.f & 16384 ? b.v : Z(b)
  })
}

function uc(e) {
  return class extends pc {
    constructor(t) {
      super({
        component: e,
        ...t
      })
    }
  }
}
var dc = new WeakMap,
  fc = new WeakMap,
  pc = class {
    constructor(e) {
      var t;
      M(this, dc, void 0), M(this, fc, void 0);
      var n = new Map,
        r = (e, t) => {
          var r = Ur(t, !1, !1);
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
          return t === Oe || (Z(n.get(t) ?? r(t, Reflect.get(e, t))), Reflect.has(e, t))
        },
        set(e, t, i) {
          return Wr(n.get(t) ?? r(t, i), i), Reflect.set(e, t, i)
        }
      });
      P(fc, this, (e.hydrate ? io : ro)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: i,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
        transformError: e.transformError
      })), (!(e != null && (t = e.props) != null && t.$$host) || e.sync === !1) && Or(), P(dc, this, i.$$events);
      for (let e of Object.keys(F(fc, this))) e !== `$set` && e !== `$destroy` && e !== `$on` && m(this, e, {
        get() {
          return F(fc, this)[e]
        },
        set(t) {
          F(fc, this)[e] = t
        },
        enumerable: !0
      });
      F(fc, this).$set = e => {
        Object.assign(i, e)
      }, F(fc, this).$destroy = () => {
        co(F(fc, this))
      }
    }
    $set(e) {
      F(fc, this).$set(e)
    }
    $on(e, t) {
      F(dc, this)[e] = F(dc, this)[e] || [];
      let n = (...e) => t.call(this, ...e);
      return F(dc, this)[e].push(n), () => {
        F(dc, this)[e] = F(dc, this)[e].filter(e => e !== n)
      }
    }
    $destroy() {
      F(fc, this).$destroy()
    }
  };

function mc(e, t) {
  if (Re(`hydratable`), T) {
    var n;
    let t = (n = window.__svelte) == null ? void 0 : n.h;
    if (t != null && t.has(e)) return t.get(e);
    ct(e)
  }
  return t()
}
var hc = s({
  afterUpdate: () => Sc,
  beforeUpdate: () => xc,
  createContext: () => At,
  createEventDispatcher: () => bc,
  createRawSnippet: () => Lo,
  flushSync: () => Or,
  fork: () => Ir,
  getAbortSignal: () => gc,
  getAllContexts: () => Pt,
  getContext: () => jt,
  hasContext: () => Nt,
  hydratable: () => mc,
  hydrate: () => io,
  mount: () => ro,
  onDestroy: () => vc,
  onMount: () => _c,
  setContext: () => Mt,
  settled: () => pa,
  tick: () => fa,
  unmount: () => co,
  untrack: () => Q
});

function gc() {
  return K === null && Ye(), (K.ac ?? (K.ac = new AbortController)).signal
}

function _c(e) {
  k === null && ze(`onMount`), xt && k.l !== null ? Cc(k).m.push(e) : Ci(() => {
    let t = Q(e);
    if (typeof t == `function`) return t
  })
}

function vc(e) {
  k === null && ze(`onDestroy`), _c(() => () => Q(e))
}

function yc(e, t, {
  bubbles: n = !1,
  cancelable: r = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: n,
    cancelable: r
  })
}

function bc() {
  let e = k;
  return e === null && ze(`createEventDispatcher`), (t, n, r) => {
    var i;
    let a = (i = e.s.$$events) == null ? void 0 : i[t];
    if (a) {
      let i = u(a) ? a.slice() : [a],
        o = yc(t, n, r);
      for (let t of i) t.call(e.x, o);
      return !o.defaultPrevented
    }
    return !0
  }
}

function xc(e) {
  k === null && ze(`beforeUpdate`), k.l === null && Ze(`beforeUpdate`), Cc(k).b.push(e)
}

function Sc(e) {
  k === null && ze(`afterUpdate`), k.l === null && Ze(`afterUpdate`), Cc(k).a.push(e)
}

function Cc(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
export {
  qa as $, Ot as $t, rs as A, Jr as At, Io as B, M as Bt, Ds as C, pi as Ct, fs as D, oi as Dt, ps as E, ai as Et, Yo as F, Un as Ft, So as G, Qt as Gt, ko as H, an as Ht, Xo as I, Hn as It, no as J, jt as Jt, xo as K, Zt as Kt, Ho as L, F as Lt, es as M, Vr as Mt, $o as N, Hr as Nt, us as O, si as Ot, Qo as P, qr as Pt, Ga as Q, Mt as Qt, Bo as R, P as Rt, Os as S, Ti as St, ms as T, $r as Tt, To as U, nn as Ut, Fo as V, sn as Vt, wo as W, tn as Wt, Qa as X, It as Xt, co as Y, Nt as Yt, Za as Z, Ft as Zt, _s as _, Oi as _t, lc as a, ft as an, Fa as at, Es as b, ji as bt, ic as c, S as cn, va as ct, ec as d, s as dn, q as dt, Et as en, $a as et, $s as f, l as fn, pa as ft, Is as g, Mi as gt, Rs as h, ra as ht, uc as i, mt as in, Ia as it, ts as j, Wr as jt, is as k, Xr as kt, nc as l, ae as ln, K as lt, zs as m, Q as mt, vc as n, St as nn, Ja as nt, oc as o, C as on, Pa as ot, Zs as p, fa as pt, ro as q, Pt as qt, _c as r, ht as rn, La as rt, cc as s, ie as sn, Ma as st, hc as t, wt as tn, Xa as tt, tc as u, o as un, Z as ut, vs as v, Ei as vt, hs as w, ei as wt, As as x, Ci as xt, Ms as y, Ai as yt, Ro as z, N as zt
};