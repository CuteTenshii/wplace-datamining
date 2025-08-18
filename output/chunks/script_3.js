var bn = Object.defineProperty;
var be = t => {
  throw TypeError(t)
};
var Tn = (t, e, n) => e in t ? bn(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var kt = (t, e, n) => Tn(t, typeof e != "symbol" ? e + "" : e, n),
  te = (t, e, n) => e.has(t) || be("Cannot " + n);
var d = (t, e, n) => (te(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  k = (t, e, n) => e.has(t) ? be("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  R = (t, e, n, r) => (te(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
  nt = (t, e, n) => (te(t, e, "access private method"), n);
const Ar = !1;
var Me = Array.isArray,
  An = Array.prototype.indexOf,
  xr = Array.from,
  re = Object.defineProperty,
  Rt = Object.getOwnPropertyDescriptor,
  xn = Object.getOwnPropertyDescriptors,
  kn = Object.prototype,
  Sn = Array.prototype,
  Le = Object.getPrototypeOf,
  Te = Object.isExtensible;

function kr(t) {
  return typeof t == "function"
}
const Sr = () => {};

function Nr(t) {
  return t()
}

function Fe(t) {
  for (var e = 0; e < t.length; e++) t[e]()
}

function Nn() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a
  });
  return {
    promise: n,
    resolve: t,
    reject: e
  }
}

function Or(t, e) {
  if (Array.isArray(t)) return t;
  if (!(Symbol.iterator in t)) return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n
}
const O = 2,
  oe = 4,
  Gt = 8,
  Tt = 16,
  V = 32,
  vt = 64,
  qe = 128,
  P = 256,
  Ut = 512,
  T = 1024,
  F = 2048,
  tt = 4096,
  Z = 8192,
  At = 16384,
  ce = 32768,
  je = 65536,
  Ae = 1 << 17,
  Ye = 1 << 18,
  _e = 1 << 19,
  He = 1 << 20,
  ae = 1 << 21,
  ve = 1 << 22,
  ut = 1 << 23,
  lt = Symbol("$state"),
  Rr = Symbol("legacy props"),
  Ir = Symbol(""),
  de = new class extends Error {
    constructor() {
      super(...arguments);
      kt(this, "name", "StaleReactionError");
      kt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  },
  he = 3,
  Kt = 8;

function On() {
  throw new Error("https://svelte.dev/e/await_outside_boundary")
}

function Rn(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function In() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function Cn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Pn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Dn(t) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function Mn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Pr() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function Dr() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Mr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function Lr(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Ln() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Fn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function qn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
const Fr = 1,
  qr = 2,
  jr = 4,
  Yr = 8,
  Hr = 16,
  Ur = 1,
  Vr = 2,
  Br = 4,
  Wr = 8,
  $r = 16,
  Gr = 1,
  Kr = 2,
  zr = 4,
  jn = 1,
  Yn = 2,
  Ue = "[",
  Hn = "[!",
  Un = "]",
  pe = {},
  b = Symbol(),
  Xr = "http://www.w3.org/1999/xhtml",
  Zr = "@attach";

function we(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Jr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}
let E = !1;

function xe(t) {
  E = t
}
let y;

function J(t) {
  if (t === null) throw we(), pe;
  return y = t
}

function Ve() {
  return J(U(y))
}

function Qr(t) {
  if (E) {
    if (U(y) !== null) throw we(), pe;
    y = t
  }
}

function ta(t = 1) {
  if (E) {
    for (var e = t, n = y; e--;) n = U(n);
    y = n
  }
}

function ea() {
  for (var t = 0, e = y;;) {
    if (e.nodeType === Kt) {
      var n = e.data;
      if (n === Un) {
        if (t === 0) return e;
        t -= 1
      } else(n === Ue || n === Hn) && (t += 1)
    }
    var r = U(e);
    e.remove(), e = r
  }
}

function na(t) {
  if (!t || t.nodeType !== Kt) throw we(), pe;
  return t.data
}

function Be(t) {
  return t === this.v
}

function Vn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function ra(t, e) {
  return t !== e
}

function We(t) {
  return !Vn(t, this.v)
}
let zt = !1;

function aa() {
  zt = !0
}
let g = null;

function Vt(t) {
  g = t
}

function sa(t) {
  return Xt().get(t)
}

function ia(t, e) {
  return Xt().set(t, e), e
}

function ua(t) {
  return Xt().has(t)
}

function la() {
  return Xt()
}

function fa(t, e = !1, n) {
  g = {
    p: g,
    c: null,
    e: null,
    s: t,
    x: null,
    l: zt && !e ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function oa(t) {
  var e = g,
    n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n) ln(r)
  }
  return t !== void 0 && (e.x = t), g = e.p, t ?? {}
}

function qt() {
  return !zt || g !== null && g.l === null
}

function Xt(t) {
  return g === null && Rn(), g.c ?? (g.c = new Map(Bn(g) || void 0))
}

function Bn(t) {
  let e = t.p;
  for (; e !== null;) {
    const n = e.c;
    if (n !== null) return n;
    e = e.p
  }
  return null
}
const Wn = new WeakMap;

function $n(t) {
  var e = v;
  if (e === null) return _.f |= ut, t;
  if ((e.f & ce) === 0) {
    if ((e.f & qe) === 0) throw !e.parent && t instanceof Error && $e(t), t;
    e.b.error(t)
  } else ye(t, e)
}

function ye(t, e) {
  for (; e !== null;) {
    if ((e.f & qe) !== 0) try {
      e.b.error(t);
      return
    } catch (n) {
      t = n
    }
    e = e.parent
  }
  throw t instanceof Error && $e(t), t
}

function $e(t) {
  const e = Wn.get(t);
  e && (re(t, "message", {
    value: e.message
  }), re(t, "stack", {
    value: e.stack
  }))
}
const Gn = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let It = [],
  Ct = [];

function Ge() {
  var t = It;
  It = [], Fe(t)
}

function Ke() {
  var t = Ct;
  Ct = [], Fe(t)
}

function ze(t) {
  It.length === 0 && queueMicrotask(Ge), It.push(t)
}

function ca(t) {
  Ct.length === 0 && Gn(Ke), Ct.push(t)
}

function Kn() {
  It.length > 0 && Ge(), Ct.length > 0 && Ke()
}

function zn() {
  for (var t = v.b; t !== null && !t.has_pending_snippet();) t = t.parent;
  return t === null && On(), t
}

function ge(t) {
  var e = O | F,
    n = _ !== null && (_.f & O) !== 0 ? _ : null;
  return v === null || n !== null && (n.f & P) !== 0 ? e |= P : v.f |= _e, {
    ctx: g,
    deps: null,
    effects: null,
    equals: Be,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: b,
    wv: 0,
    parent: n ?? v,
    ac: null
  }
}

function Xn(t, e) {
  let n = v;
  n === null && In();
  var r = n.b,
    a = void 0,
    s = Ee(b),
    u = null,
    l = !_;
  return ur(() => {
    try {
      var i = t()
    } catch (h) {
      i = Promise.reject(h)
    }
    var f = () => i;
    a = (u == null ? void 0 : u.then(f, f)) ?? Promise.resolve(i), u = a;
    var o = m,
      c = r.pending;
    l && (r.update_pending_count(1), c || o.increment());
    const w = (h, p = void 0) => {
      u = null, c || o.activate(), p ? p !== de && (s.f |= ut, le(s, p)) : ((s.f & ut) !== 0 && (s.f ^= ut), le(s, h)), l && (r.update_pending_count(-1), c || o.decrement()), Je()
    };
    if (a.then(w, h => w(null, h || "unknown")), o) return () => {
      queueMicrotask(() => o.neuter())
    }
  }), new Promise(i => {
    function f(o) {
      function c() {
        o === a ? i(s) : f(a)
      }
      o.then(c, c)
    }
    f(a)
  })
}

function _a(t) {
  const e = ge(t);
  return dn(e), e
}

function Zn(t) {
  const e = ge(t);
  return e.equals = We, e
}

function Xe(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1) _t(e[n])
  }
}

function Jn(t) {
  for (var e = t.parent; e !== null;) {
    if ((e.f & O) === 0) return e;
    e = e.parent
  }
  return null
}

function me(t) {
  var e, n = v;
  Q(Jn(t));
  try {
    Xe(t), e = yn(t)
  } finally {
    Q(n)
  }
  return e
}

function Ze(t) {
  var e = me(t);
  if (t.equals(e) || (t.v = e, t.wv = pn()), !xt)
    if (K !== null) K.set(t, t.v);
    else {
      var n = (z || (t.f & P) !== 0) && t.deps !== null ? tt : T;
      S(t, n)
    }
}

function Qn(t, e, n) {
  const r = qt() ? ge : Zn;
  if (e.length === 0) {
    n(t.map(r));
    return
  }
  var a = m,
    s = v,
    u = tr(),
    l = zn();
  Promise.all(e.map(i => Xn(i))).then(i => {
    a == null || a.activate(), u();
    try {
      n([...t.map(r), ...i])
    } catch (f) {
      (s.f & At) === 0 && ye(f, s)
    }
    a == null || a.deactivate(), Je()
  }).catch(i => {
    l.error(i)
  })
}

function tr() {
  var t = v,
    e = _,
    n = g;
  return function() {
    Q(t), q(e), Vt(n)
  }
}

function Je() {
  Q(null), q(null), Vt(null)
}
const St = new Set;
let m = null,
  ee = null,
  K = null,
  ke = new Set,
  Bt = [];

function Qe() {
  const t = Bt.shift();
  Bt.length > 0 && queueMicrotask(Qe), t()
}
let ot = [],
  Zt = null,
  se = !1,
  Yt = !1;
var wt, yt, $, Dt, Mt, st, gt, it, G, mt, Lt, Ft, L, tn, Ht, ie;
const $t = class $t {
  constructor() {
    k(this, L);
    kt(this, "current", new Map);
    k(this, wt, new Map);
    k(this, yt, new Set);
    k(this, $, 0);
    k(this, Dt, null);
    k(this, Mt, !1);
    k(this, st, []);
    k(this, gt, []);
    k(this, it, []);
    k(this, G, []);
    k(this, mt, []);
    k(this, Lt, []);
    k(this, Ft, []);
    kt(this, "skipped_effects", new Set)
  }
  process(e) {
    var s;
    ot = [], ee = null;
    var n = null;
    if (St.size > 1) {
      n = new Map, K = new Map;
      for (const [u, l] of this.current) n.set(u, {
        v: u.v,
        wv: u.wv
      }), u.v = l;
      for (const u of St)
        if (u !== this)
          for (const [l, i] of d(u, wt)) n.has(l) || (n.set(l, {
            v: l.v,
            wv: l.wv
          }), l.v = i)
    }
    for (const u of e) nt(this, L, tn).call(this, u);
    if (d(this, st).length === 0 && d(this, $) === 0) {
      nt(this, L, ie).call(this);
      var r = d(this, it),
        a = d(this, G);
      R(this, it, []), R(this, G, []), R(this, mt, []), ee = m, m = null, Se(r), Se(a), m === null ? m = this : St.delete(this), (s = d(this, Dt)) == null || s.resolve()
    } else nt(this, L, Ht).call(this, d(this, it)), nt(this, L, Ht).call(this, d(this, G)), nt(this, L, Ht).call(this, d(this, mt));
    if (n) {
      for (const [u, {
          v: l,
          wv: i
        }] of n) u.wv <= i && (u.v = l);
      K = null
    }
    for (const u of d(this, st)) pt(u);
    for (const u of d(this, gt)) pt(u);
    R(this, st, []), R(this, gt, [])
  }
  capture(e, n) {
    d(this, wt).has(e) || d(this, wt).set(e, n), this.current.set(e, e.v)
  }
  activate() {
    m = this
  }
  deactivate() {
    m = null, ee = null;
    for (const e of ke)
      if (ke.delete(e), e(), m !== null) break
  }
  neuter() {
    R(this, Mt, !0)
  }
  flush() {
    ot.length > 0 ? ue() : nt(this, L, ie).call(this), m === this && (d(this, $) === 0 && St.delete(this), this.deactivate())
  }
  increment() {
    R(this, $, d(this, $) + 1)
  }
  decrement() {
    if (R(this, $, d(this, $) - 1), d(this, $) === 0) {
      for (const e of d(this, Lt)) S(e, F), bt(e);
      for (const e of d(this, Ft)) S(e, tt), bt(e);
      R(this, it, []), R(this, G, []), this.flush()
    } else this.deactivate()
  }
  add_callback(e) {
    d(this, yt).add(e)
  }
  settled() {
    return (d(this, Dt) ?? R(this, Dt, Nn())).promise
  }
  static ensure() {
    if (m === null) {
      const e = m = new $t;
      St.add(m), Yt || $t.enqueue(() => {
        m === e && e.flush()
      })
    }
    return m
  }
  static enqueue(e) {
    Bt.length === 0 && queueMicrotask(Qe), Bt.unshift(e)
  }
};
wt = new WeakMap, yt = new WeakMap, $ = new WeakMap, Dt = new WeakMap, Mt = new WeakMap, st = new WeakMap, gt = new WeakMap, it = new WeakMap, G = new WeakMap, mt = new WeakMap, Lt = new WeakMap, Ft = new WeakMap, L = new WeakSet, tn = function(e) {
  var o;
  e.f ^= T;
  for (var n = e.first; n !== null;) {
    var r = n.f,
      a = (r & (V | vt)) !== 0,
      s = a && (r & T) !== 0,
      u = s || (r & Z) !== 0 || this.skipped_effects.has(n);
    if (!u && n.fn !== null) {
      if (a) n.f ^= T;
      else if ((r & oe) !== 0) d(this, G).push(n);
      else if ((r & T) === 0)
        if ((r & ve) !== 0) {
          var l = (o = n.b) != null && o.pending ? d(this, gt) : d(this, st);
          l.push(n)
        } else Qt(n) && ((n.f & Tt) !== 0 && d(this, mt).push(n), pt(n));
      var i = n.first;
      if (i !== null) {
        n = i;
        continue
      }
    }
    var f = n.parent;
    for (n = n.next; n === null && f !== null;) n = f.next, f = f.parent
  }
}, Ht = function(e) {
  for (const n of e)((n.f & F) !== 0 ? d(this, Lt) : d(this, Ft)).push(n), S(n, T);
  e.length = 0
}, ie = function() {
  if (!d(this, Mt))
    for (const e of d(this, yt)) e();
  d(this, yt).clear()
};
let Et = $t;

function er(t) {
  var e = Yt;
  Yt = !0;
  try {
    var n;
    for (t && (ue(), n = t());;) {
      if (Kn(), ot.length === 0 && (m == null || m.flush(), ot.length === 0)) return Zt = null, n;
      ue()
    }
  } finally {
    Yt = e
  }
}

function ue() {
  var t = ht;
  se = !0;
  try {
    var e = 0;
    for (Ie(!0); ot.length > 0;) {
      var n = Et.ensure();
      if (e++ > 1e3) {
        var r, a;
        nr()
      }
      n.process(ot), X.clear()
    }
  } finally {
    se = !1, Ie(t), Zt = null
  }
}

function nr() {
  try {
    Mn()
  } catch (t) {
    ye(t, Zt)
  }
}
let at = null;

function Se(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e;) {
      var r = t[n++];
      if ((r.f & (At | Z)) === 0 && Qt(r) && (at = [], pt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? cn(r) : r.fn = null), at.length > 0)) {
        X.clear();
        for (const a of at) pt(a);
        at = []
      }
    }
    at = null
  }
}

function bt(t) {
  for (var e = Zt = t; e.parent !== null;) {
    e = e.parent;
    var n = e.f;
    if (se && e === v && (n & Tt) !== 0) return;
    if ((n & (vt | V)) !== 0) {
      if ((n & T) === 0) return;
      e.f ^= T
    }
  }
  ot.push(e)
}
const X = new Map;

function Ee(t, e) {
  var n = {
    f: 0,
    v: t,
    reactions: null,
    equals: Be,
    rv: 0,
    wv: 0
  };
  return n
}

function W(t, e) {
  const n = Ee(t);
  return dn(n), n
}

function va(t, e = !1, n = !0) {
  var a;
  const r = Ee(t);
  return e || (r.equals = We), zt && n && g !== null && g.l !== null && ((a = g.l).s ?? (a.s = [])).push(r), r
}

function rt(t, e, n = !1) {
  _ !== null && (!M || (_.f & Ae) !== 0) && qt() && (_.f & (O | Tt | ve | Ae)) !== 0 && !(x != null && x.includes(t)) && qn();
  let r = n ? Nt(e) : e;
  return le(t, r)
}

function le(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    xt ? X.set(t, e) : X.set(t, n), t.v = e;
    var r = Et.ensure();
    r.capture(t, n), (t.f & O) !== 0 && ((t.f & F) !== 0 && me(t), S(t, (t.f & P) === 0 ? T : tt)), t.wv = pn(), en(t, F), qt() && v !== null && (v.f & T) !== 0 && (v.f & (V | vt)) === 0 && (C === null ? vr([t]) : C.push(t))
  }
  return e
}

function ne(t) {
  rt(t, t.v + 1)
}

function en(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = qt(), a = n.length, s = 0; s < a; s++) {
      var u = n[s],
        l = u.f;
      if (!(!r && u === v)) {
        var i = (l & F) === 0;
        i && S(u, e), (l & O) !== 0 ? en(u, tt) : i && ((l & Tt) !== 0 && at !== null && at.push(u), bt(u))
      }
    }
}

function Nt(t) {
  if (typeof t != "object" || t === null || lt in t) return t;
  const e = Le(t);
  if (e !== kn && e !== Sn) return t;
  var n = new Map,
    r = Me(t),
    a = W(0),
    s = ft,
    u = l => {
      if (ft === s) return l();
      var i = _,
        f = ft;
      q(null), Pe(s);
      var o = l();
      return q(i), Pe(f), o
    };
  return r && n.set("length", W(t.length)), new Proxy(t, {
    defineProperty(l, i, f) {
      (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ln();
      var o = n.get(i);
      return o === void 0 ? o = u(() => {
        var c = W(f.value);
        return n.set(i, c), c
      }) : rt(o, f.value, !0), !0
    },
    deleteProperty(l, i) {
      var f = n.get(i);
      if (f === void 0) {
        if (i in l) {
          const o = u(() => W(b));
          n.set(i, o), ne(a)
        }
      } else rt(f, b), ne(a);
      return !0
    },
    get(l, i, f) {
      var h;
      if (i === lt) return t;
      var o = n.get(i),
        c = i in l;
      if (o === void 0 && (!c || (h = Rt(l, i)) != null && h.writable) && (o = u(() => {
          var p = Nt(c ? l[i] : b),
            D = W(p);
          return D
        }), n.set(i, o)), o !== void 0) {
        var w = Ot(o);
        return w === b ? void 0 : w
      }
      return Reflect.get(l, i, f)
    },
    getOwnPropertyDescriptor(l, i) {
      var f = Reflect.getOwnPropertyDescriptor(l, i);
      if (f && "value" in f) {
        var o = n.get(i);
        o && (f.value = Ot(o))
      } else if (f === void 0) {
        var c = n.get(i),
          w = c == null ? void 0 : c.v;
        if (c !== void 0 && w !== b) return {
          enumerable: !0,
          configurable: !0,
          value: w,
          writable: !0
        }
      }
      return f
    },
    has(l, i) {
      var w;
      if (i === lt) return !0;
      var f = n.get(i),
        o = f !== void 0 && f.v !== b || Reflect.has(l, i);
      if (f !== void 0 || v !== null && (!o || (w = Rt(l, i)) != null && w.writable)) {
        f === void 0 && (f = u(() => {
          var h = o ? Nt(l[i]) : b,
            p = W(h);
          return p
        }), n.set(i, f));
        var c = Ot(f);
        if (c === b) return !1
      }
      return o
    },
    set(l, i, f, o) {
      var et;
      var c = n.get(i),
        w = i in l;
      if (r && i === "length")
        for (var h = f; h < c.v; h += 1) {
          var p = n.get(h + "");
          p !== void 0 ? rt(p, b) : h in l && (p = u(() => W(b)), n.set(h + "", p))
        }
      if (c === void 0)(!w || (et = Rt(l, i)) != null && et.writable) && (c = u(() => W(void 0)), rt(c, Nt(f)), n.set(i, c));
      else {
        w = c.v !== b;
        var D = u(() => Nt(f));
        rt(c, D)
      }
      var B = Reflect.getOwnPropertyDescriptor(l, i);
      if (B != null && B.set && B.set.call(o, f), !w) {
        if (r && typeof i == "string") {
          var jt = n.get("length"),
            dt = Number(i);
          Number.isInteger(dt) && dt >= jt.v && rt(jt, dt + 1)
        }
        ne(a)
      }
      return !0
    },
    ownKeys(l) {
      Ot(a);
      var i = Reflect.ownKeys(l).filter(c => {
        var w = n.get(c);
        return w === void 0 || w.v !== b
      });
      for (var [f, o] of n) o.v !== b && !(f in l) && i.push(f);
      return i
    },
    setPrototypeOf() {
      Fn()
    }
  })
}

function Ne(t) {
  try {
    if (t !== null && typeof t == "object" && lt in t) return t[lt]
  } catch {}
  return t
}

function da(t, e) {
  return Object.is(Ne(t), Ne(e))
}
var Oe, rr, nn, rn, an;

function ha() {
  if (Oe === void 0) {
    Oe = window, rr = document, nn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype,
      e = Node.prototype,
      n = Text.prototype;
    rn = Rt(e, "firstChild").get, an = Rt(e, "nextSibling").get, Te(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Te(n) && (n.__t = void 0)
  }
}

function ct(t = "") {
  return document.createTextNode(t)
}

function H(t) {
  return rn.call(t)
}

function U(t) {
  return an.call(t)
}

function pa(t, e) {
  if (!E) return H(t);
  var n = H(y);
  if (n === null) n = y.appendChild(ct());
  else if (e && n.nodeType !== he) {
    var r = ct();
    return n == null || n.before(r), J(r), r
  }
  return J(n), n
}

function wa(t, e) {
  if (!E) {
    var n = H(t);
    return n instanceof Comment && n.data === "" ? U(n) : n
  }
  return y
}

function ya(t, e = 1, n = !1) {
  let r = E ? y : t;
  for (var a; e--;) a = r, r = U(r);
  if (!E) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== he) {
    var s = ct();
    return r === null ? a == null || a.after(s) : r.before(s), J(s), s
  }
  return J(r), r
}

function ar(t) {
  t.textContent = ""
}

function ga() {
  return !1
}

function ma(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, ze(() => {
      document.activeElement === n && t.focus()
    })
  }
}

function Ea(t) {
  E && H(t) !== null && ar(t)
}
let Re = !1;

function sr() {
  Re || (Re = !0, document.addEventListener("reset", t => {
    Promise.resolve().then(() => {
      var e;
      if (!t.defaultPrevented)
        for (const n of t.target.elements)(e = n.__on_r) == null || e.call(n)
    })
  }, {
    capture: !0
  }))
}

function ba(t, e, n, r = !0) {
  r && n();
  for (var a of e) t.addEventListener(a, n);
  un(() => {
    for (var s of e) t.removeEventListener(s, n)
  })
}

function Jt(t) {
  var e = _,
    n = v;
  q(null), Q(null);
  try {
    return t()
  } finally {
    q(e), Q(n)
  }
}

function Ta(t, e, n, r = n) {
  t.addEventListener(e, () => Jt(n));
  const a = t.__on_r;
  a ? t.__on_r = () => {
    a(), r(!0)
  } : t.__on_r = () => r(!0), sr()
}

function sn(t) {
  v === null && _ === null && Dn(), _ !== null && (_.f & P) !== 0 && v === null && Pn(), xt && Cn()
}

function ir(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
}

function j(t, e, n, r = !0) {
  var a = v;
  a !== null && (a.f & Z) !== 0 && (t |= Z);
  var s = {
    ctx: g,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | F,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n) try {
    pt(s), s.f |= ce
  } catch (i) {
    throw _t(s), i
  } else e !== null && bt(s);
  var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & _e) === 0;
  if (!u && r && (a !== null && ir(s, a), _ !== null && (_.f & O) !== 0 && (t & vt) === 0)) {
    var l = _;
    (l.effects ?? (l.effects = [])).push(s)
  }
  return s
}

function Aa() {
  return _ !== null && !M
}

function un(t) {
  const e = j(Gt, null, !1);
  return S(e, T), e.teardown = t, e
}

function xa(t) {
  sn();
  var e = v.f,
    n = !_ && (e & V) !== 0 && (e & ce) === 0;
  if (n) {
    var r = g;
    (r.e ?? (r.e = [])).push(t)
  } else return ln(t)
}

function ln(t) {
  return j(oe | He, t, !1)
}

function ka(t) {
  return sn(), j(Gt | He, t, !0)
}

function Sa(t) {
  Et.ensure();
  const e = j(vt, t, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? cr(e, () => {
      _t(e), r(void 0)
    }) : (_t(e), r(void 0))
  })
}

function Na(t) {
  return j(oe, t, !1)
}

function ur(t) {
  return j(ve | _e, t, !0)
}

function Oa(t, e = 0) {
  return j(Gt | e, t, !0)
}

function Ra(t, e = [], n = []) {
  Qn(e, n, r => {
    j(Gt, () => t(...r.map(Ot)), !0)
  })
}

function lr(t, e = 0) {
  var n = j(Tt | e, t, !0);
  return n
}

function Ia(t, e = !0) {
  return j(V, t, !0, e)
}

function fn(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = xt,
      r = _;
    Ce(!0), q(null);
    try {
      e.call(null)
    } finally {
      Ce(n), q(r)
    }
  }
}

function on(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null;) {
    const a = n.ac;
    a !== null && Jt(() => {
      a.abort(de)
    });
    var r = n.next;
    (n.f & vt) !== 0 ? n.parent = null : _t(n, e), n = r
  }
}

function fr(t) {
  for (var e = t.first; e !== null;) {
    var n = e.next;
    (e.f & V) === 0 && _t(e), e = n
  }
}

function _t(t, e = !0) {
  var n = !1;
  (e || (t.f & Ye) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (or(t.nodes_start, t.nodes_end), n = !0), on(t, e && !n), Wt(t, 0), S(t, At);
  var r = t.transitions;
  if (r !== null)
    for (const s of r) s.stop();
  fn(t);
  var a = t.parent;
  a !== null && a.first !== null && cn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null
}

function or(t, e) {
  for (; t !== null;) {
    var n = t === e ? null : U(t);
    t.remove(), t = n
  }
}

function cn(t) {
  var e = t.parent,
    n = t.prev,
    r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n))
}

function cr(t, e) {
  var n = [];
  _n(t, n, !0), _r(n, () => {
    _t(t), e && e()
  })
}

function _r(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var a of t) a.out(r)
  } else e()
}

function _n(t, e, n) {
  if ((t.f & Z) === 0) {
    if (t.f ^= Z, t.transitions !== null)
      for (const u of t.transitions)(u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null;) {
      var a = r.next,
        s = (r.f & je) !== 0 || (r.f & V) !== 0;
      _n(r, e, s ? n : !1), r = a
    }
  }
}

function Ca(t) {
  vn(t, !0)
}

function vn(t, e) {
  if ((t.f & Z) !== 0) {
    t.f ^= Z, (t.f & T) === 0 && (S(t, F), bt(t));
    for (var n = t.first; n !== null;) {
      var r = n.next,
        a = (n.f & je) !== 0 || (n.f & V) !== 0;
      vn(n, a ? e : !1), n = r
    }
    if (t.transitions !== null)
      for (const s of t.transitions)(s.is_global || e) && s.in()
  }
}
let ht = !1;

function Ie(t) {
  ht = t
}
let xt = !1;

function Ce(t) {
  xt = t
}
let _ = null,
  M = !1;

function q(t) {
  _ = t
}
let v = null;

function Q(t) {
  v = t
}
let x = null;

function dn(t) {
  _ !== null && (x === null ? x = [t] : x.push(t))
}
let A = null,
  N = 0,
  C = null;

function vr(t) {
  C = t
}
let hn = 1,
  Pt = 0,
  ft = Pt;

function Pe(t) {
  ft = t
}
let z = !1;

function pn() {
  return ++hn
}

function Qt(t) {
  var c;
  var e = t.f;
  if ((e & F) !== 0) return !0;
  if ((e & tt) !== 0) {
    var n = t.deps,
      r = (e & P) !== 0;
    if (n !== null) {
      var a, s, u = (e & Ut) !== 0,
        l = r && v !== null && !z,
        i = n.length;
      if ((u || l) && (v === null || (v.f & At) === 0)) {
        var f = t,
          o = f.parent;
        for (a = 0; a < i; a++) s = n[a], (u || !((c = s == null ? void 0 : s.reactions) != null && c.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        u && (f.f ^= Ut), l && o !== null && (o.f & P) === 0 && (f.f ^= P)
      }
      for (a = 0; a < i; a++)
        if (s = n[a], Qt(s) && Ze(s), s.wv > t.wv) return !0
    }(!r || v !== null && !z) && S(t, T)
  }
  return !1
}

function wn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(x != null && x.includes(t)))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & O) !== 0 ? wn(s, e, !1) : e === s && (n ? S(s, F) : (s.f & T) !== 0 && S(s, tt), bt(s))
    }
}

function yn(t) {
  var D;
  var e = A,
    n = N,
    r = C,
    a = _,
    s = z,
    u = x,
    l = g,
    i = M,
    f = ft,
    o = t.f;
  A = null, N = 0, C = null, z = (o & P) !== 0 && (M || !ht || _ === null), _ = (o & (V | vt)) === 0 ? t : null, x = null, Vt(t.ctx), M = !1, ft = ++Pt, t.ac !== null && (Jt(() => {
    t.ac.abort(de)
  }), t.ac = null);
  try {
    t.f |= ae;
    var c = t.fn,
      w = c(),
      h = t.deps;
    if (A !== null) {
      var p;
      if (Wt(t, N), h !== null && N > 0)
        for (h.length = N + A.length, p = 0; p < A.length; p++) h[N + p] = A[p];
      else t.deps = h = A;
      if (!z || (o & O) !== 0 && t.reactions !== null)
        for (p = N; p < h.length; p++)((D = h[p]).reactions ?? (D.reactions = [])).push(t)
    } else h !== null && N < h.length && (Wt(t, N), h.length = N);
    if (qt() && C !== null && !M && h !== null && (t.f & (O | tt | F)) === 0)
      for (p = 0; p < C.length; p++) wn(C[p], t);
    return a !== null && a !== t && (Pt++, C !== null && (r === null ? r = C : r.push(...C))), (t.f & ut) !== 0 && (t.f ^= ut), w
  } catch (B) {
    return $n(B)
  } finally {
    t.f ^= ae, A = e, N = n, C = r, _ = a, z = s, x = u, Vt(l), M = i, ft = f
  }
}

function dr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = An.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop())
    }
  }
  n === null && (e.f & O) !== 0 && (A === null || !A.includes(e)) && (S(e, tt), (e.f & (P | Ut)) === 0 && (e.f ^= Ut), Xe(e), Wt(e, 0))
}

function Wt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++) dr(t, n[r])
}

function pt(t) {
  var e = t.f;
  if ((e & At) === 0) {
    S(t, T);
    var n = v,
      r = ht;
    v = t, ht = !0;
    try {
      (e & Tt) !== 0 ? fr(t) : on(t), fn(t);
      var a = yn(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = hn;
      var s
    } finally {
      ht = r, v = n
    }
  }
}
async function Pa() {
  await Promise.resolve(), er()
}

function Da() {
  return Et.ensure().settled()
}

function Ot(t) {
  var e = t.f,
    n = (e & O) !== 0;
  if (_ !== null && !M) {
    var r = v !== null && (v.f & At) !== 0;
    if (!r && !(x != null && x.includes(t))) {
      var a = _.deps;
      if ((_.f & ae) !== 0) t.rv < Pt && (t.rv = Pt, A === null && a !== null && a[N] === t ? N++ : A === null ? A = [t] : (!z || !A.includes(t)) && A.push(t));
      else {
        (_.deps ?? (_.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [_] : s.includes(_) || s.push(_)
      }
    }
  } else if (n && t.deps === null && t.effects === null) {
    var u = t,
      l = u.parent;
    l !== null && (l.f & P) === 0 && (u.f ^= P)
  }
  if (xt) {
    if (X.has(t)) return X.get(t);
    if (n) {
      u = t;
      var i = u.v;
      return ((u.f & T) === 0 && u.reactions !== null || gn(u)) && (i = me(u)), X.set(u, i), i
    }
  } else if (n) {
    if (u = t, K != null && K.has(u)) return K.get(u);
    Qt(u) && Ze(u)
  }
  if ((t.f & ut) !== 0) throw t.v;
  return t.v
}

function gn(t) {
  if (t.v === b) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (X.has(e) || (e.f & O) !== 0 && gn(e)) return !0;
  return !1
}

function Ma(t) {
  var e = M;
  try {
    return M = !0, t()
  } finally {
    M = e
  }
}
const hr = -7169;

function S(t, e) {
  t.f = t.f & hr | e
}

function La(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (lt in t) fe(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && lt in n && fe(n)
      }
  }
}

function fe(t, e = new Set) {
  if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t) try {
      fe(t[r], e)
    } catch {}
    const n = Le(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = xn(n);
      for (let a in r) {
        const s = r[a].get;
        if (s) try {
          s.call(t)
        } catch {}
      }
    }
  }
}

function Fa(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture"
}
const pr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function qa(t) {
  return pr.includes(t)
}
const wr = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};

function ja(t) {
  return t = t.toLowerCase(), wr[t] ?? t
}
const yr = ["touchstart", "touchmove"];

function Ya(t) {
  return yr.includes(t)
}
const gr = new Set,
  mr = new Set;

function mn(t, e, n, r = {}) {
  function a(s) {
    if (r.capture || Er.call(e, s), !s.cancelBubble) return Jt(() => n == null ? void 0 : n.call(this, s))
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ze(() => {
    e.addEventListener(t, a, r)
  }) : e.addEventListener(t, a, r), a
}

function Ha(t, e, n, r = {}) {
  var a = mn(e, t, n, r);
  return () => {
    t.removeEventListener(e, a, r)
  }
}

function Ua(t, e, n, r, a) {
  var s = {
      capture: r,
      passive: a
    },
    u = mn(t, e, n, s);
  (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && un(() => {
    e.removeEventListener(t, u, s)
  })
}

function Va(t) {
  for (var e = 0; e < t.length; e++) gr.add(t[e]);
  for (var n of mr) n(t)
}
let De = null;

function Er(t) {
  var dt;
  var e = this,
    n = e.ownerDocument,
    r = t.type,
    a = ((dt = t.composedPath) == null ? void 0 : dt.call(t)) || [],
    s = a[0] || t.target;
  De = t;
  var u = 0,
    l = De === t && t.__root;
  if (l) {
    var i = a.indexOf(l);
    if (i !== -1 && (e === document || e === window)) {
      t.__root = e;
      return
    }
    var f = a.indexOf(e);
    if (f === -1) return;
    i <= f && (u = i)
  }
  if (s = a[u] || t.target, s !== e) {
    re(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n
      }
    });
    var o = _,
      c = v;
    q(null), Q(null);
    try {
      for (var w, h = []; s !== null;) {
        var p = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var D = s["__" + r];
          if (D != null && (!s.disabled || t.target === s))
            if (Me(D)) {
              var [B, ...jt] = D;
              B.apply(s, [t, ...jt])
            } else D.call(s, t)
        } catch (et) {
          w ? h.push(et) : w = et
        }
        if (t.cancelBubble || p === e || p === null) break;
        s = p
      }
      if (w) {
        for (let et of h) queueMicrotask(() => {
          throw et
        });
        throw w
      }
    } finally {
      t.__root = e, delete t.currentTarget, q(o), Q(c)
    }
  }
}
let I;

function Ba() {
  I = void 0
}

function Wa(t) {
  let e = null,
    n = E;
  var r;
  if (E) {
    for (e = y, I === void 0 && (I = H(document.head)); I !== null && (I.nodeType !== Kt || I.data !== Ue);) I = U(I);
    I === null ? xe(!1) : I = J(U(I))
  }
  E || (r = document.head.appendChild(ct()));
  try {
    lr(() => t(r), Ye)
  } finally {
    n && (xe(!0), I = y, J(e))
  }
}

function En(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content
}

function Y(t, e) {
  var n = v;
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e)
}

function $a(t, e) {
  var n = (e & jn) !== 0,
    r = (e & Yn) !== 0,
    a, s = !t.startsWith("<!>");
  return () => {
    if (E) return Y(y, null), y;
    a === void 0 && (a = En(s ? t : "<!>" + t), n || (a = H(a)));
    var u = r || nn ? document.importNode(a, !0) : a.cloneNode(!0);
    if (n) {
      var l = H(u),
        i = u.lastChild;
      Y(l, i)
    } else Y(u, u);
    return u
  }
}

function br(t, e, n = "svg") {
  var r = !t.startsWith("<!>"),
    a = `<${n}>${r?t:"<!>"+t}</${n}>`,
    s;
  return () => {
    if (E) return Y(y, null), y;
    if (!s) {
      var u = En(a),
        l = H(u);
      s = H(l)
    }
    var i = s.cloneNode(!0);
    return Y(i, i), i
  }
}

function Ga(t, e) {
  return br(t, e, "svg")
}

function Ka(t = "") {
  if (!E) {
    var e = ct(t + "");
    return Y(e, e), e
  }
  var n = y;
  return n.nodeType !== he && (n.before(n = ct()), J(n)), Y(n, n), n
}

function za() {
  if (E) return Y(y, null), y;
  var t = document.createDocumentFragment(),
    e = document.createComment(""),
    n = ct();
  return t.append(e, n), Y(e, n), t
}

function Xa(t, e) {
  if (E) {
    v.nodes_end = y, Ve();
    return
  }
  t !== null && t.before(e)
}

function Za() {
  var t, e;
  if (E && y && y.nodeType === Kt && ((t = y.textContent) != null && t.startsWith("#"))) {
    const n = y.textContent.substring(1);
    return Ve(), n
  }
  return (e = window.__svelte ?? (window.__svelte = {})).uid ?? (e.uid = 1), `c${window.__svelte.uid++}`
}
export {
  ar as $, ge as A, jr as B, J as C, H as D, je as E, Zn as F, na as G, Hn as H, ea as I, xe as J, Kt as K, Un as L, Fr as M, qr as N, le as O, va as P, Ee as Q, xr as R, Me as S, Ca as T, Hr as U, Z as V, ze as W, _t as X, Yr as Y, U as Z, _n as _, wa as a, Ir as a$, _r as a0, v as a1, Na as a2, Oa as a3, lt as a4, or as a5, we as a6, pe as a7, Y as a8, En as a9, Pa as aA, ta as aB, Ga as aC, b as aD, Rt as aE, Lr as aF, Br as aG, Nt as aH, rt as aI, xt as aJ, At as aK, Wr as aL, Vr as aM, Ur as aN, $r as aO, Rr as aP, kr as aQ, re as aR, W as aS, za as aT, _a as aU, Ka as aV, Jr as aW, da as aX, Qn as aY, Xr as aZ, Le as a_, ha as aa, Ue as ab, Dr as ac, gr as ad, mr as ae, Sa as af, Er as ag, Ya as ah, Ba as ai, aa as aj, Va as ak, Wa as al, rr as am, un as an, Sr as ao, Rn as ap, _ as aq, Pr as ar, Mr as as, zt as at, er as au, la as av, sa as aw, ua as ax, ia as ay, Da as az, Xa as b, Zr as b0, xn as b1, Fa as b2, mn as b3, ma as b4, ja as b5, qa as b6, ca as b7, sr as b8, Aa as b9, ne as ba, Vn as bb, Ua as bc, Oe as bd, Ha as be, Ta as bf, qt as bg, ee as bh, Ar as bi, kn as bj, ra as bk, zr as bl, Jt as bm, Tt as bn, ce as bo, Gr as bp, Kr as bq, ba as br, Ea as bs, Za as bt, Or as bu, oa as c, pa as d, Ve as e, $a as f, lr as g, E as h, ct as i, Ia as j, m as k, ga as l, y as m, cr as n, g as o, fa as p, xa as q, Qr as r, ya as s, Ra as t, ka as u, Ma as v, Nr as w, Fe as x, Ot as y, La as z
};