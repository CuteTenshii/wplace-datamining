var En = Object.defineProperty;
var be = t => {
  throw TypeError(t)
};
var bn = (t, e, n) => e in t ? En(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var Tt = (t, e, n) => bn(t, typeof e != "symbol" ? e + "" : e, n),
  Qt = (t, e, n) => e.has(t) || be("Cannot " + n);
var d = (t, e, n) => (Qt(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  k = (t, e, n) => e.has(t) ? be("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  R = (t, e, n, r) => (Qt(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
  et = (t, e, n) => (Qt(t, e, "access private method"), n);
const Tr = !1;
var Me = Array.isArray,
  Tn = Array.prototype.indexOf,
  Ar = Array.from,
  ne = Object.defineProperty,
  St = Object.getOwnPropertyDescriptor,
  An = Object.getOwnPropertyDescriptors,
  xn = Object.prototype,
  kn = Array.prototype,
  Le = Object.getPrototypeOf,
  Te = Object.isExtensible;

function xr(t) {
  return typeof t == "function"
}
const kr = () => {};

function Sr(t) {
  return t()
}

function Fe(t) {
  for (var e = 0; e < t.length; e++) t[e]()
}

function Sn() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a
  });
  return {
    promise: n,
    resolve: t,
    reject: e
  }
}

function Nr(t, e) {
  if (Array.isArray(t)) return t;
  if (!(Symbol.iterator in t)) return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n
}
const O = 2,
  fe = 4,
  $t = 8,
  Lt = 16,
  V = 32,
  vt = 64,
  qe = 128,
  P = 256,
  Ht = 512,
  T = 1024,
  F = 2048,
  Q = 4096,
  X = 8192,
  Et = 16384,
  oe = 32768,
  je = 65536,
  Ae = 1 << 17,
  Ye = 1 << 18,
  ce = 1 << 19,
  _e = 1 << 20,
  re = 1 << 21,
  ve = 1 << 22,
  st = 1 << 23,
  it = Symbol("$state"),
  Or = Symbol("legacy props"),
  Rr = Symbol(""),
  de = new class extends Error {
    constructor() {
      super(...arguments);
      Tt(this, "name", "StaleReactionError");
      Tt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  },
  he = 3,
  Gt = 8;

function Nn() {
  throw new Error("https://svelte.dev/e/await_outside_boundary")
}

function On(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Rn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function In(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Cn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Pn(t) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function Dn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Cr() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function Pr() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Dr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function Mr(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Mn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Ln() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Fn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
const Lr = 1,
  Fr = 2,
  qr = 4,
  jr = 8,
  Yr = 16,
  Hr = 1,
  Ur = 2,
  Vr = 4,
  Br = 8,
  Wr = 16,
  $r = 1,
  Gr = 2,
  Kr = 4,
  qn = 1,
  jn = 2,
  He = "[",
  Yn = "[!",
  Hn = "]",
  pe = {},
  b = Symbol(),
  zr = "http://www.w3.org/1999/xhtml",
  Xr = "@attach";

function we(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Zr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}
let E = !1;

function xe(t) {
  E = t
}
let y;

function Z(t) {
  if (t === null) throw we(), pe;
  return y = t
}

function Ue() {
  return Z(U(y))
}

function Jr(t) {
  if (E) {
    if (U(y) !== null) throw we(), pe;
    y = t
  }
}

function Qr(t = 1) {
  if (E) {
    for (var e = t, n = y; e--;) n = U(n);
    y = n
  }
}

function ta() {
  for (var t = 0, e = y;;) {
    if (e.nodeType === Gt) {
      var n = e.data;
      if (n === Hn) {
        if (t === 0) return e;
        t -= 1
      } else(n === He || n === Yn) && (t += 1)
    }
    var r = U(e);
    e.remove(), e = r
  }
}

function ea(t) {
  if (!t || t.nodeType !== Gt) throw we(), pe;
  return t.data
}

function Ve(t) {
  return t === this.v
}

function Un(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function na(t, e) {
  return t !== e
}

function Be(t) {
  return !Un(t, this.v)
}
let Kt = !1;

function ra() {
  Kt = !0
}
let m = null;

function Ut(t) {
  m = t
}

function aa(t) {
  return zt().get(t)
}

function sa(t, e) {
  return zt().set(t, e), e
}

function ia(t) {
  return zt().has(t)
}

function ua() {
  return zt()
}

function la(t, e = !1, n) {
  m = {
    p: m,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Kt && !e ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function fa(t) {
  var e = m,
    n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n) un(r)
  }
  return t !== void 0 && (e.x = t), m = e.p, t ?? {}
}

function Ft() {
  return !Kt || m !== null && m.l === null
}

function zt(t) {
  return m === null && On(), m.c ?? (m.c = new Map(Vn(m) || void 0))
}

function Vn(t) {
  let e = t.p;
  for (; e !== null;) {
    const n = e.c;
    if (n !== null) return n;
    e = e.p
  }
  return null
}
const Bn = new WeakMap;

function Wn(t) {
  var e = v;
  if (e === null) return _.f |= st, t;
  if ((e.f & oe) === 0) {
    if ((e.f & qe) === 0) throw !e.parent && t instanceof Error && We(t), t;
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
  throw t instanceof Error && We(t), t
}

function We(t) {
  const e = Bn.get(t);
  e && (ne(t, "message", {
    value: e.message
  }), ne(t, "stack", {
    value: e.stack
  }))
}
const $n = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let Ot = [],
  Rt = [];

function $e() {
  var t = Ot;
  Ot = [], Fe(t)
}

function Ge() {
  var t = Rt;
  Rt = [], Fe(t)
}

function Ke(t) {
  Ot.length === 0 && queueMicrotask($e), Ot.push(t)
}

function oa(t) {
  Rt.length === 0 && $n(Ge), Rt.push(t)
}

function Gn() {
  Ot.length > 0 && $e(), Rt.length > 0 && Ge()
}

function Kn() {
  for (var t = v.b; t !== null && !t.has_pending_snippet();) t = t.parent;
  return t === null && Nn(), t
}

function ge(t) {
  var e = O | F,
    n = _ !== null && (_.f & O) !== 0 ? _ : null;
  return v === null || n !== null && (n.f & P) !== 0 ? e |= P : v.f |= ce, {
    ctx: m,
    deps: null,
    effects: null,
    equals: Ve,
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

function zn(t, e) {
  let n = v;
  n === null && Rn();
  var r = n.b,
    a = void 0,
    s = Ee(b),
    u = null,
    l = !_;
  return ir(() => {
    try {
      var i = t()
    } catch (h) {
      i = Promise.reject(h)
    }
    var f = () => i;
    a = (u == null ? void 0 : u.then(f, f)) ?? Promise.resolve(i), u = a;
    var o = g,
      c = r.pending;
    l && (r.update_pending_count(1), c || o.increment());
    const w = (h, p = void 0) => {
      u = null, c || o.activate(), p ? p !== de && (s.f |= st, ue(s, p)) : ((s.f & st) !== 0 && (s.f ^= st), ue(s, h)), l && (r.update_pending_count(-1), c || o.decrement()), Ze()
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

function ca(t) {
  const e = ge(t);
  return vn(e), e
}

function Xn(t) {
  const e = ge(t);
  return e.equals = Be, e
}

function ze(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1) _t(e[n])
  }
}

function Zn(t) {
  for (var e = t.parent; e !== null;) {
    if ((e.f & O) === 0) return e;
    e = e.parent
  }
  return null
}

function me(t) {
  var e, n = v;
  J(Zn(t));
  try {
    ze(t), e = wn(t)
  } finally {
    J(n)
  }
  return e
}

function Xe(t) {
  var e = me(t);
  if (t.equals(e) || (t.v = e, t.wv = hn()), !bt)
    if (K !== null) K.set(t, t.v);
    else {
      var n = (z || (t.f & P) !== 0) && t.deps !== null ? Q : T;
      S(t, n)
    }
}

function Jn(t, e, n) {
  const r = Ft() ? ge : Xn;
  if (e.length === 0) {
    n(t.map(r));
    return
  }
  var a = g,
    s = v,
    u = Qn(),
    l = Kn();
  Promise.all(e.map(i => zn(i))).then(i => {
    a == null || a.activate(), u();
    try {
      n([...t.map(r), ...i])
    } catch (f) {
      (s.f & Et) === 0 && ye(f, s)
    }
    a == null || a.deactivate(), Ze()
  }).catch(i => {
    l.error(i)
  })
}

function Qn() {
  var t = v,
    e = _,
    n = m;
  return function() {
    J(t), q(e), Ut(n)
  }
}

function Ze() {
  J(null), q(null), Ut(null)
}
const At = new Set;
let g = null,
  te = null,
  K = null,
  ke = new Set,
  Vt = [];

function Je() {
  const t = Vt.shift();
  Vt.length > 0 && queueMicrotask(Je), t()
}
let ft = [],
  Xt = null,
  ae = !1,
  jt = !1;
var pt, wt, $, Ct, Pt, rt, yt, at, G, gt, Dt, Mt, L, Qe, Yt, se;
const Wt = class Wt {
  constructor() {
    k(this, L);
    Tt(this, "current", new Map);
    k(this, pt, new Map);
    k(this, wt, new Set);
    k(this, $, 0);
    k(this, Ct, null);
    k(this, Pt, !1);
    k(this, rt, []);
    k(this, yt, []);
    k(this, at, []);
    k(this, G, []);
    k(this, gt, []);
    k(this, Dt, []);
    k(this, Mt, []);
    Tt(this, "skipped_effects", new Set)
  }
  process(e) {
    var s;
    ft = [], te = null;
    var n = null;
    if (At.size > 1) {
      n = new Map, K = new Map;
      for (const [u, l] of this.current) n.set(u, {
        v: u.v,
        wv: u.wv
      }), u.v = l;
      for (const u of At)
        if (u !== this)
          for (const [l, i] of d(u, pt)) n.has(l) || (n.set(l, {
            v: l.v,
            wv: l.wv
          }), l.v = i)
    }
    for (const u of e) et(this, L, Qe).call(this, u);
    if (d(this, rt).length === 0 && d(this, $) === 0) {
      et(this, L, se).call(this);
      var r = d(this, at),
        a = d(this, G);
      R(this, at, []), R(this, G, []), R(this, gt, []), te = g, g = null, Se(r), Se(a), g === null ? g = this : At.delete(this), (s = d(this, Ct)) == null || s.resolve()
    } else et(this, L, Yt).call(this, d(this, at)), et(this, L, Yt).call(this, d(this, G)), et(this, L, Yt).call(this, d(this, gt));
    if (n) {
      for (const [u, {
          v: l,
          wv: i
        }] of n) u.wv <= i && (u.v = l);
      K = null
    }
    for (const u of d(this, rt)) Nt(u);
    for (const u of d(this, yt)) Nt(u);
    R(this, rt, []), R(this, yt, [])
  }
  capture(e, n) {
    d(this, pt).has(e) || d(this, pt).set(e, n), this.current.set(e, e.v)
  }
  activate() {
    g = this
  }
  deactivate() {
    g = null, te = null;
    for (const e of ke)
      if (ke.delete(e), e(), g !== null) break
  }
  neuter() {
    R(this, Pt, !0)
  }
  flush() {
    ft.length > 0 ? ie() : et(this, L, se).call(this), g === this && (d(this, $) === 0 && At.delete(this), this.deactivate())
  }
  increment() {
    R(this, $, d(this, $) + 1)
  }
  decrement() {
    if (R(this, $, d(this, $) - 1), d(this, $) === 0) {
      for (const e of d(this, Dt)) S(e, F), ot(e);
      for (const e of d(this, Mt)) S(e, Q), ot(e);
      R(this, at, []), R(this, G, []), this.flush()
    } else this.deactivate()
  }
  add_callback(e) {
    d(this, wt).add(e)
  }
  settled() {
    return (d(this, Ct) ?? R(this, Ct, Sn())).promise
  }
  static ensure() {
    if (g === null) {
      const e = g = new Wt;
      At.add(g), jt || Wt.enqueue(() => {
        g === e && e.flush()
      })
    }
    return g
  }
  static enqueue(e) {
    Vt.length === 0 && queueMicrotask(Je), Vt.unshift(e)
  }
};
pt = new WeakMap, wt = new WeakMap, $ = new WeakMap, Ct = new WeakMap, Pt = new WeakMap, rt = new WeakMap, yt = new WeakMap, at = new WeakMap, G = new WeakMap, gt = new WeakMap, Dt = new WeakMap, Mt = new WeakMap, L = new WeakSet, Qe = function(e) {
  var o;
  e.f ^= T;
  for (var n = e.first; n !== null;) {
    var r = n.f,
      a = (r & (V | vt)) !== 0,
      s = a && (r & T) !== 0,
      u = s || (r & X) !== 0 || this.skipped_effects.has(n);
    if (!u && n.fn !== null) {
      if (a) n.f ^= T;
      else if ((r & T) === 0)
        if ((r & fe) !== 0) d(this, G).push(n);
        else if ((r & ve) !== 0) {
        var l = (o = n.b) != null && o.pending ? d(this, yt) : d(this, rt);
        l.push(n)
      } else Jt(n) && ((n.f & Lt) !== 0 && d(this, gt).push(n), Nt(n));
      var i = n.first;
      if (i !== null) {
        n = i;
        continue
      }
    }
    var f = n.parent;
    for (n = n.next; n === null && f !== null;) n = f.next, f = f.parent
  }
}, Yt = function(e) {
  for (const n of e)((n.f & F) !== 0 ? d(this, Dt) : d(this, Mt)).push(n), S(n, T);
  e.length = 0
}, se = function() {
  if (!d(this, Pt))
    for (const e of d(this, wt)) e();
  d(this, wt).clear()
};
let mt = Wt;

function tr(t) {
  var e = jt;
  jt = !0;
  try {
    var n;
    for (t && (ie(), n = t());;) {
      if (Gn(), ft.length === 0 && (g == null || g.flush(), ft.length === 0)) return Xt = null, n;
      ie()
    }
  } finally {
    jt = e
  }
}

function ie() {
  var t = ht;
  ae = !0;
  try {
    var e = 0;
    for (Ie(!0); ft.length > 0;) {
      var n = mt.ensure();
      if (e++ > 1e3) {
        var r, a;
        er()
      }
      n.process(ft), ut.clear()
    }
  } finally {
    ae = !1, Ie(t), Xt = null
  }
}

function er() {
  try {
    Dn()
  } catch (t) {
    ye(t, Xt)
  }
}

function Se(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e;) {
      var r = t[n++];
      if ((r.f & (Et | X)) === 0 && Jt(r)) {
        var a = g ? g.current.size : 0;
        if (Nt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? on(r) : r.fn = null), g !== null && g.current.size > a && (r.f & _e) !== 0) break
      }
    }
    for (; n < e;) ot(t[n++])
  }
}

function ot(t) {
  for (var e = Xt = t; e.parent !== null;) {
    e = e.parent;
    var n = e.f;
    if (ae && e === v && (n & Lt) !== 0) return;
    if ((n & (vt | V)) !== 0) {
      if ((n & T) === 0) return;
      e.f ^= T
    }
  }
  ft.push(e)
}
const ut = new Map;

function Ee(t, e) {
  var n = {
    f: 0,
    v: t,
    reactions: null,
    equals: Ve,
    rv: 0,
    wv: 0
  };
  return n
}

function W(t, e) {
  const n = Ee(t);
  return vn(n), n
}

function _a(t, e = !1, n = !0) {
  var a;
  const r = Ee(t);
  return e || (r.equals = Be), Kt && n && m !== null && m.l !== null && ((a = m.l).s ?? (a.s = [])).push(r), r
}

function nt(t, e, n = !1) {
  _ !== null && (!M || (_.f & Ae) !== 0) && Ft() && (_.f & (O | Lt | ve | Ae)) !== 0 && !(x != null && x.includes(t)) && Fn();
  let r = n ? xt(e) : e;
  return ue(t, r)
}

function ue(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    bt ? ut.set(t, e) : ut.set(t, n), t.v = e;
    var r = mt.ensure();
    r.capture(t, n), (t.f & O) !== 0 && ((t.f & F) !== 0 && me(t), S(t, (t.f & P) === 0 ? T : Q)), t.wv = hn(), tn(t, F), Ft() && v !== null && (v.f & T) !== 0 && (v.f & (V | vt)) === 0 && (C === null ? _r([t]) : C.push(t))
  }
  return e
}

function ee(t) {
  nt(t, t.v + 1)
}

function tn(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ft(), a = n.length, s = 0; s < a; s++) {
      var u = n[s],
        l = u.f;
      if (!(!r && u === v)) {
        var i = (l & F) === 0;
        i && S(u, e), (l & O) !== 0 ? tn(u, Q) : i && ot(u)
      }
    }
}

function xt(t) {
  if (typeof t != "object" || t === null || it in t) return t;
  const e = Le(t);
  if (e !== xn && e !== kn) return t;
  var n = new Map,
    r = Me(t),
    a = W(0),
    s = lt,
    u = l => {
      if (lt === s) return l();
      var i = _,
        f = lt;
      q(null), Pe(s);
      var o = l();
      return q(i), Pe(f), o
    };
  return r && n.set("length", W(t.length)), new Proxy(t, {
    defineProperty(l, i, f) {
      (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Mn();
      var o = n.get(i);
      return o === void 0 ? o = u(() => {
        var c = W(f.value);
        return n.set(i, c), c
      }) : nt(o, f.value, !0), !0
    },
    deleteProperty(l, i) {
      var f = n.get(i);
      if (f === void 0) {
        if (i in l) {
          const o = u(() => W(b));
          n.set(i, o), ee(a)
        }
      } else nt(f, b), ee(a);
      return !0
    },
    get(l, i, f) {
      var h;
      if (i === it) return t;
      var o = n.get(i),
        c = i in l;
      if (o === void 0 && (!c || (h = St(l, i)) != null && h.writable) && (o = u(() => {
          var p = xt(c ? l[i] : b),
            D = W(p);
          return D
        }), n.set(i, o)), o !== void 0) {
        var w = kt(o);
        return w === b ? void 0 : w
      }
      return Reflect.get(l, i, f)
    },
    getOwnPropertyDescriptor(l, i) {
      var f = Reflect.getOwnPropertyDescriptor(l, i);
      if (f && "value" in f) {
        var o = n.get(i);
        o && (f.value = kt(o))
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
      if (i === it) return !0;
      var f = n.get(i),
        o = f !== void 0 && f.v !== b || Reflect.has(l, i);
      if (f !== void 0 || v !== null && (!o || (w = St(l, i)) != null && w.writable)) {
        f === void 0 && (f = u(() => {
          var h = o ? xt(l[i]) : b,
            p = W(h);
          return p
        }), n.set(i, f));
        var c = kt(f);
        if (c === b) return !1
      }
      return o
    },
    set(l, i, f, o) {
      var tt;
      var c = n.get(i),
        w = i in l;
      if (r && i === "length")
        for (var h = f; h < c.v; h += 1) {
          var p = n.get(h + "");
          p !== void 0 ? nt(p, b) : h in l && (p = u(() => W(b)), n.set(h + "", p))
        }
      if (c === void 0)(!w || (tt = St(l, i)) != null && tt.writable) && (c = u(() => W(void 0)), nt(c, xt(f)), n.set(i, c));
      else {
        w = c.v !== b;
        var D = u(() => xt(f));
        nt(c, D)
      }
      var B = Reflect.getOwnPropertyDescriptor(l, i);
      if (B != null && B.set && B.set.call(o, f), !w) {
        if (r && typeof i == "string") {
          var qt = n.get("length"),
            dt = Number(i);
          Number.isInteger(dt) && dt >= qt.v && nt(qt, dt + 1)
        }
        ee(a)
      }
      return !0
    },
    ownKeys(l) {
      kt(a);
      var i = Reflect.ownKeys(l).filter(c => {
        var w = n.get(c);
        return w === void 0 || w.v !== b
      });
      for (var [f, o] of n) o.v !== b && !(f in l) && i.push(f);
      return i
    },
    setPrototypeOf() {
      Ln()
    }
  })
}

function Ne(t) {
  try {
    if (t !== null && typeof t == "object" && it in t) return t[it]
  } catch {}
  return t
}

function va(t, e) {
  return Object.is(Ne(t), Ne(e))
}
var Oe, nr, en, nn, rn;

function da() {
  if (Oe === void 0) {
    Oe = window, nr = document, en = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype,
      e = Node.prototype,
      n = Text.prototype;
    nn = St(e, "firstChild").get, rn = St(e, "nextSibling").get, Te(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Te(n) && (n.__t = void 0)
  }
}

function ct(t = "") {
  return document.createTextNode(t)
}

function H(t) {
  return nn.call(t)
}

function U(t) {
  return rn.call(t)
}

function ha(t, e) {
  if (!E) return H(t);
  var n = H(y);
  if (n === null) n = y.appendChild(ct());
  else if (e && n.nodeType !== he) {
    var r = ct();
    return n == null || n.before(r), Z(r), r
  }
  return Z(n), n
}

function pa(t, e) {
  if (!E) {
    var n = H(t);
    return n instanceof Comment && n.data === "" ? U(n) : n
  }
  return y
}

function wa(t, e = 1, n = !1) {
  let r = E ? y : t;
  for (var a; e--;) a = r, r = U(r);
  if (!E) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== he) {
    var s = ct();
    return r === null ? a == null || a.after(s) : r.before(s), Z(s), s
  }
  return Z(r), r
}

function rr(t) {
  t.textContent = ""
}

function ya() {
  return !1
}

function ga(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Ke(() => {
      document.activeElement === n && t.focus()
    })
  }
}

function ma(t) {
  E && H(t) !== null && rr(t)
}
let Re = !1;

function ar() {
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

function Ea(t, e, n, r = !0) {
  r && n();
  for (var a of e) t.addEventListener(a, n);
  sn(() => {
    for (var s of e) t.removeEventListener(s, n)
  })
}

function Zt(t) {
  var e = _,
    n = v;
  q(null), J(null);
  try {
    return t()
  } finally {
    q(e), J(n)
  }
}

function ba(t, e, n, r = n) {
  t.addEventListener(e, () => Zt(n));
  const a = t.__on_r;
  a ? t.__on_r = () => {
    a(), r(!0)
  } : t.__on_r = () => r(!0), ar()
}

function an(t) {
  v === null && _ === null && Pn(), _ !== null && (_.f & P) !== 0 && v === null && Cn(), bt && In()
}

function sr(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
}

function j(t, e, n, r = !0) {
  var a = v;
  a !== null && (a.f & X) !== 0 && (t |= X);
  var s = {
    ctx: m,
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
    Nt(s), s.f |= oe
  } catch (i) {
    throw _t(s), i
  } else e !== null && ot(s);
  var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & ce) === 0;
  if (!u && r && (a !== null && sr(s, a), _ !== null && (_.f & O) !== 0 && (t & vt) === 0)) {
    var l = _;
    (l.effects ?? (l.effects = [])).push(s)
  }
  return s
}

function Ta() {
  return _ !== null && !M
}

function sn(t) {
  const e = j($t, null, !1);
  return S(e, T), e.teardown = t, e
}

function Aa(t) {
  an();
  var e = v.f,
    n = !_ && (e & V) !== 0 && (e & oe) === 0;
  if (n) {
    var r = m;
    (r.e ?? (r.e = [])).push(t)
  } else return un(t)
}

function un(t) {
  return j(fe | _e, t, !1)
}

function xa(t) {
  return an(), j($t | _e, t, !0)
}

function ka(t) {
  mt.ensure();
  const e = j(vt, t, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? or(e, () => {
      _t(e), r(void 0)
    }) : (_t(e), r(void 0))
  })
}

function Sa(t) {
  return j(fe, t, !1)
}

function ir(t) {
  return j(ve | ce, t, !0)
}

function Na(t, e = 0) {
  return j($t | e, t, !0)
}

function Oa(t, e = [], n = []) {
  Jn(e, n, r => {
    j($t, () => t(...r.map(kt)), !0)
  })
}

function ur(t, e = 0) {
  var n = j(Lt | e, t, !0);
  return n
}

function Ra(t, e = !0) {
  return j(V, t, !0, e)
}

function ln(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = bt,
      r = _;
    Ce(!0), q(null);
    try {
      e.call(null)
    } finally {
      Ce(n), q(r)
    }
  }
}

function fn(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null;) {
    const a = n.ac;
    a !== null && Zt(() => {
      a.abort(de)
    });
    var r = n.next;
    (n.f & vt) !== 0 ? n.parent = null : _t(n, e), n = r
  }
}

function lr(t) {
  for (var e = t.first; e !== null;) {
    var n = e.next;
    (e.f & V) === 0 && _t(e), e = n
  }
}

function _t(t, e = !0) {
  var n = !1;
  (e || (t.f & Ye) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (fr(t.nodes_start, t.nodes_end), n = !0), fn(t, e && !n), Bt(t, 0), S(t, Et);
  var r = t.transitions;
  if (r !== null)
    for (const s of r) s.stop();
  ln(t);
  var a = t.parent;
  a !== null && a.first !== null && on(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null
}

function fr(t, e) {
  for (; t !== null;) {
    var n = t === e ? null : U(t);
    t.remove(), t = n
  }
}

function on(t) {
  var e = t.parent,
    n = t.prev,
    r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n))
}

function or(t, e) {
  var n = [];
  cn(t, n, !0), cr(n, () => {
    _t(t), e && e()
  })
}

function cr(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var a of t) a.out(r)
  } else e()
}

function cn(t, e, n) {
  if ((t.f & X) === 0) {
    if (t.f ^= X, t.transitions !== null)
      for (const u of t.transitions)(u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null;) {
      var a = r.next,
        s = (r.f & je) !== 0 || (r.f & V) !== 0;
      cn(r, e, s ? n : !1), r = a
    }
  }
}

function Ia(t) {
  _n(t, !0)
}

function _n(t, e) {
  if ((t.f & X) !== 0) {
    t.f ^= X, (t.f & T) === 0 && (S(t, F), ot(t));
    for (var n = t.first; n !== null;) {
      var r = n.next,
        a = (n.f & je) !== 0 || (n.f & V) !== 0;
      _n(n, a ? e : !1), n = r
    }
    if (t.transitions !== null)
      for (const s of t.transitions)(s.is_global || e) && s.in()
  }
}
let ht = !1;

function Ie(t) {
  ht = t
}
let bt = !1;

function Ce(t) {
  bt = t
}
let _ = null,
  M = !1;

function q(t) {
  _ = t
}
let v = null;

function J(t) {
  v = t
}
let x = null;

function vn(t) {
  _ !== null && (x === null ? x = [t] : x.push(t))
}
let A = null,
  N = 0,
  C = null;

function _r(t) {
  C = t
}
let dn = 1,
  It = 0,
  lt = It;

function Pe(t) {
  lt = t
}
let z = !1;

function hn() {
  return ++dn
}

function Jt(t) {
  var c;
  var e = t.f;
  if ((e & F) !== 0) return !0;
  if ((e & Q) !== 0) {
    var n = t.deps,
      r = (e & P) !== 0;
    if (n !== null) {
      var a, s, u = (e & Ht) !== 0,
        l = r && v !== null && !z,
        i = n.length;
      if ((u || l) && (v === null || (v.f & Et) === 0)) {
        var f = t,
          o = f.parent;
        for (a = 0; a < i; a++) s = n[a], (u || !((c = s == null ? void 0 : s.reactions) != null && c.includes(f))) && (s.reactions ?? (s.reactions = [])).push(f);
        u && (f.f ^= Ht), l && o !== null && (o.f & P) === 0 && (f.f ^= P)
      }
      for (a = 0; a < i; a++)
        if (s = n[a], Jt(s) && Xe(s), s.wv > t.wv) return !0
    }(!r || v !== null && !z) && S(t, T)
  }
  return !1
}

function pn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(x != null && x.includes(t)))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & O) !== 0 ? pn(s, e, !1) : e === s && (n ? S(s, F) : (s.f & T) !== 0 && S(s, Q), ot(s))
    }
}

function wn(t) {
  var D;
  var e = A,
    n = N,
    r = C,
    a = _,
    s = z,
    u = x,
    l = m,
    i = M,
    f = lt,
    o = t.f;
  A = null, N = 0, C = null, z = (o & P) !== 0 && (M || !ht || _ === null), _ = (o & (V | vt)) === 0 ? t : null, x = null, Ut(t.ctx), M = !1, lt = ++It, t.ac !== null && (Zt(() => {
    t.ac.abort(de)
  }), t.ac = null);
  try {
    t.f |= re;
    var c = t.fn,
      w = c(),
      h = t.deps;
    if (A !== null) {
      var p;
      if (Bt(t, N), h !== null && N > 0)
        for (h.length = N + A.length, p = 0; p < A.length; p++) h[N + p] = A[p];
      else t.deps = h = A;
      if (!z || (o & O) !== 0 && t.reactions !== null)
        for (p = N; p < h.length; p++)((D = h[p]).reactions ?? (D.reactions = [])).push(t)
    } else h !== null && N < h.length && (Bt(t, N), h.length = N);
    if (Ft() && C !== null && !M && h !== null && (t.f & (O | Q | F)) === 0)
      for (p = 0; p < C.length; p++) pn(C[p], t);
    return a !== null && a !== t && (It++, C !== null && (r === null ? r = C : r.push(...C))), (t.f & st) !== 0 && (t.f ^= st), w
  } catch (B) {
    return Wn(B)
  } finally {
    t.f ^= re, A = e, N = n, C = r, _ = a, z = s, x = u, Ut(l), M = i, lt = f
  }
}

function vr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Tn.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop())
    }
  }
  n === null && (e.f & O) !== 0 && (A === null || !A.includes(e)) && (S(e, Q), (e.f & (P | Ht)) === 0 && (e.f ^= Ht), ze(e), Bt(e, 0))
}

function Bt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++) vr(t, n[r])
}

function Nt(t) {
  var e = t.f;
  if ((e & Et) === 0) {
    S(t, T);
    var n = v,
      r = ht;
    v = t, ht = !0;
    try {
      (e & Lt) !== 0 ? lr(t) : fn(t), ln(t);
      var a = wn(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = dn;
      var s
    } finally {
      ht = r, v = n
    }
  }
}
async function Ca() {
  await Promise.resolve(), tr()
}

function Pa() {
  return mt.ensure().settled()
}

function kt(t) {
  var e = t.f,
    n = (e & O) !== 0;
  if (_ !== null && !M) {
    var r = v !== null && (v.f & Et) !== 0;
    if (!r && !(x != null && x.includes(t))) {
      var a = _.deps;
      if ((_.f & re) !== 0) t.rv < It && (t.rv = It, A === null && a !== null && a[N] === t ? N++ : A === null ? A = [t] : (!z || !A.includes(t)) && A.push(t));
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
  if (bt) {
    if (ut.has(t)) return ut.get(t);
    if (n) {
      u = t;
      var i = u.v;
      return ((u.f & T) === 0 && u.reactions !== null || yn(u)) && (i = me(u)), ut.set(u, i), i
    }
  } else if (n) {
    if (u = t, K != null && K.has(u)) return K.get(u);
    Jt(u) && Xe(u)
  }
  if ((t.f & st) !== 0) throw t.v;
  return t.v
}

function yn(t) {
  if (t.v === b) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (ut.has(e) || (e.f & O) !== 0 && yn(e)) return !0;
  return !1
}

function Da(t) {
  var e = M;
  try {
    return M = !0, t()
  } finally {
    M = e
  }
}
const dr = -7169;

function S(t, e) {
  t.f = t.f & dr | e
}

function Ma(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (it in t) le(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && it in n && le(n)
      }
  }
}

function le(t, e = new Set) {
  if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t) try {
      le(t[r], e)
    } catch {}
    const n = Le(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = An(n);
      for (let a in r) {
        const s = r[a].get;
        if (s) try {
          s.call(t)
        } catch {}
      }
    }
  }
}

function La(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture"
}
const hr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Fa(t) {
  return hr.includes(t)
}
const pr = {
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

function qa(t) {
  return t = t.toLowerCase(), pr[t] ?? t
}
const wr = ["touchstart", "touchmove"];

function ja(t) {
  return wr.includes(t)
}
const yr = new Set,
  gr = new Set;

function gn(t, e, n, r = {}) {
  function a(s) {
    if (r.capture || mr.call(e, s), !s.cancelBubble) return Zt(() => n == null ? void 0 : n.call(this, s))
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ke(() => {
    e.addEventListener(t, a, r)
  }) : e.addEventListener(t, a, r), a
}

function Ya(t, e, n, r = {}) {
  var a = gn(e, t, n, r);
  return () => {
    t.removeEventListener(e, a, r)
  }
}

function Ha(t, e, n, r, a) {
  var s = {
      capture: r,
      passive: a
    },
    u = gn(t, e, n, s);
  (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && sn(() => {
    e.removeEventListener(t, u, s)
  })
}

function Ua(t) {
  for (var e = 0; e < t.length; e++) yr.add(t[e]);
  for (var n of gr) n(t)
}
let De = null;

function mr(t) {
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
    ne(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n
      }
    });
    var o = _,
      c = v;
    q(null), J(null);
    try {
      for (var w, h = []; s !== null;) {
        var p = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var D = s["__" + r];
          if (D != null && (!s.disabled || t.target === s))
            if (Me(D)) {
              var [B, ...qt] = D;
              B.apply(s, [t, ...qt])
            } else D.call(s, t)
        } catch (tt) {
          w ? h.push(tt) : w = tt
        }
        if (t.cancelBubble || p === e || p === null) break;
        s = p
      }
      if (w) {
        for (let tt of h) queueMicrotask(() => {
          throw tt
        });
        throw w
      }
    } finally {
      t.__root = e, delete t.currentTarget, q(o), J(c)
    }
  }
}
let I;

function Va() {
  I = void 0
}

function Ba(t) {
  let e = null,
    n = E;
  var r;
  if (E) {
    for (e = y, I === void 0 && (I = H(document.head)); I !== null && (I.nodeType !== Gt || I.data !== He);) I = U(I);
    I === null ? xe(!1) : I = Z(U(I))
  }
  E || (r = document.head.appendChild(ct()));
  try {
    ur(() => t(r), Ye)
  } finally {
    n && (xe(!0), I = y, Z(e))
  }
}

function mn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content
}

function Y(t, e) {
  var n = v;
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e)
}

function Wa(t, e) {
  var n = (e & qn) !== 0,
    r = (e & jn) !== 0,
    a, s = !t.startsWith("<!>");
  return () => {
    if (E) return Y(y, null), y;
    a === void 0 && (a = mn(s ? t : "<!>" + t), n || (a = H(a)));
    var u = r || en ? document.importNode(a, !0) : a.cloneNode(!0);
    if (n) {
      var l = H(u),
        i = u.lastChild;
      Y(l, i)
    } else Y(u, u);
    return u
  }
}

function Er(t, e, n = "svg") {
  var r = !t.startsWith("<!>"),
    a = `<${n}>${r?t:"<!>"+t}</${n}>`,
    s;
  return () => {
    if (E) return Y(y, null), y;
    if (!s) {
      var u = mn(a),
        l = H(u);
      s = H(l)
    }
    var i = s.cloneNode(!0);
    return Y(i, i), i
  }
}

function $a(t, e) {
  return Er(t, e, "svg")
}

function Ga(t = "") {
  if (!E) {
    var e = ct(t + "");
    return Y(e, e), e
  }
  var n = y;
  return n.nodeType !== he && (n.before(n = ct()), Z(n)), Y(n, n), n
}

function Ka() {
  if (E) return Y(y, null), y;
  var t = document.createDocumentFragment(),
    e = document.createComment(""),
    n = ct();
  return t.append(e, n), Y(e, n), t
}

function za(t, e) {
  if (E) {
    v.nodes_end = y, Ue();
    return
  }
  t !== null && t.before(e)
}

function Xa() {
  var t, e;
  if (E && y && y.nodeType === Gt && ((t = y.textContent) != null && t.startsWith("#"))) {
    const n = y.textContent.substring(1);
    return Ue(), n
  }
  return (e = window.__svelte ?? (window.__svelte = {})).uid ?? (e.uid = 1), `c${window.__svelte.uid++}`
}
export {
  rr as $, ge as A, qr as B, Z as C, H as D, je as E, Xn as F, ea as G, Yn as H, ta as I, xe as J, Gt as K, Hn as L, Lr as M, Fr as N, ue as O, _a as P, Ee as Q, Ar as R, Me as S, Ia as T, Yr as U, X as V, Ke as W, _t as X, jr as Y, U as Z, cn as _, pa as a, Rr as a$, cr as a0, v as a1, Sa as a2, Na as a3, it as a4, fr as a5, we as a6, pe as a7, Y as a8, mn as a9, Ca as aA, Qr as aB, $a as aC, b as aD, St as aE, Mr as aF, Vr as aG, xt as aH, nt as aI, bt as aJ, Et as aK, Br as aL, Ur as aM, Hr as aN, Wr as aO, Or as aP, xr as aQ, ne as aR, W as aS, Ka as aT, ca as aU, Ga as aV, Zr as aW, va as aX, Jn as aY, zr as aZ, Le as a_, da as aa, He as ab, Pr as ac, yr as ad, gr as ae, ka as af, mr as ag, ja as ah, Va as ai, ra as aj, Ua as ak, Ba as al, nr as am, sn as an, kr as ao, On as ap, _ as aq, Cr as ar, Dr as as, Kt as at, tr as au, ua as av, aa as aw, ia as ax, sa as ay, Pa as az, za as b, Xr as b0, An as b1, La as b2, gn as b3, ga as b4, qa as b5, Fa as b6, oa as b7, ar as b8, Ta as b9, ee as ba, Un as bb, Ha as bc, Oe as bd, Ya as be, ba as bf, Ft as bg, te as bh, Tr as bi, xn as bj, na as bk, Kr as bl, Zt as bm, Lt as bn, oe as bo, $r as bp, Gr as bq, Ea as br, ma as bs, Xa as bt, Nr as bu, fa as c, ha as d, Ue as e, Wa as f, ur as g, E as h, ct as i, Ra as j, g as k, ya as l, y as m, or as n, m as o, la as p, Aa as q, Jr as r, wa as s, Oa as t, xa as u, Da as v, Sr as w, Fe as x, kt as y, Ma as z
};