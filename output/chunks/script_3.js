var On = Object.defineProperty;
var Rt = e => {
  throw TypeError(e)
};
var In = (e, t, n) => t in e ? On(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Se = (e, t, n) => In(e, typeof t != "symbol" ? t + "" : t, n),
  tt = (e, t, n) => t.has(e) || Rt("Cannot " + n);
var p = (e, t, n) => (tt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  j = (e, t, n) => t.has(e) ? Rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  J = (e, t, n, r) => (tt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  Q = (e, t, n) => (tt(e, t, "access private method"), n);
var Cn = Array.isArray,
  Mn = Array.prototype.indexOf,
  Ie = Array.prototype.includes,
  jr = Array.from,
  Dn = Object.defineProperty,
  Fe = Object.getOwnPropertyDescriptor,
  Pn = Object.getOwnPropertyDescriptors,
  Ln = Object.prototype,
  Fn = Array.prototype,
  qt = Object.getPrototypeOf,
  Ot = Object.isExtensible;

function Hr(e) {
  return typeof e == "function"
}
const jn = () => {};

function Vr(e) {
  return e()
}

function Hn(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function Yt() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s
  });
  return {
    promise: n,
    resolve: e,
    reject: t
  }
}

function qr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const T = 2,
  Ce = 4,
  qe = 8,
  pt = 1 << 24,
  X = 16,
  z = 32,
  ue = 64,
  Vn = 128,
  L = 512,
  b = 1024,
  x = 2048,
  Y = 4096,
  U = 8192,
  re = 16384,
  ie = 32768,
  $e = 65536,
  st = 1 << 17,
  Bt = 1 << 18,
  Me = 1 << 19,
  Ut = 1 << 20,
  Yr = 1 << 25,
  ge = 65536,
  at = 1 << 21,
  ht = 1 << 22,
  se = 1 << 23,
  ye = Symbol("$state"),
  Br = Symbol("legacy props"),
  Ur = Symbol(""),
  _e = new class extends Error {
    constructor() {
      super(...arguments);
      Se(this, "name", "StaleReactionError");
      Se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  };
var Ht;
const Gr = !!((Ht = globalThis.document) != null && Ht.contentType) && globalThis.document.contentType.includes("xml"),
  Ye = 3,
  wt = 8;

function qn(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required")
}

function Yn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Bn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function zr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate")
}

function Un(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function $n() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Gn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function zn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Kn() {
  throw new Error("https://svelte.dev/e/fork_discarded")
}

function Wn() {
  throw new Error("https://svelte.dev/e/fork_timing")
}

function Kr() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Wr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Xn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Zn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Jn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function Xr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const Zr = 1,
  Jr = 2,
  Qr = 4,
  es = 8,
  ts = 16,
  ns = 1,
  rs = 2,
  ss = 4,
  as = 8,
  is = 16,
  fs = 1,
  os = 2,
  ls = 4,
  $t = 1,
  Qn = 2,
  er = "[",
  tr = "[!",
  us = "[?",
  nr = "]",
  yt = {},
  k = Symbol(),
  rr = "http://www.w3.org/1999/xhtml",
  cs = "http://www.w3.org/2000/svg",
  _s = "http://www.w3.org/1998/Math/MathML",
  vs = "@attach";

function mt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function ds() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function ps() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let N = !1;

function hs(e) {
  N = e
}
let w;

function Ee(e) {
  if (e === null) throw mt(), yt;
  return w = e
}

function Gt() {
  return Ee(ce(w))
}

function ws(e) {
  if (N) {
    if (ce(w) !== null) throw mt(), yt;
    w = e
  }
}

function ys(e = 1) {
  if (N) {
    for (var t = e, n = w; t--;) n = ce(n);
    w = n
  }
}

function ms(e = !0) {
  for (var t = 0, n = w;;) {
    if (n.nodeType === wt) {
      var r = n.data;
      if (r === nr) {
        if (t === 0) return n;
        t -= 1
      } else(r === er || r === tr || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var s = ce(n);
    e && n.remove(), n = s
  }
}

function gs(e) {
  if (!e || e.nodeType !== wt) throw mt(), yt;
  return e.data
}

function zt(e) {
  return e === this.v
}

function sr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Kt(e) {
  return !sr(e, this.v)
}
let Ze = !1;

function Es() {
  Ze = !0
}
let g = null;

function Ge(e) {
  g = e
}

function bs(e) {
  return gt().get(e)
}

function Ts(e, t) {
  return gt().set(e, t), t
}

function As(e) {
  return gt().has(e)
}

function Ss(e, t = !1, n) {
  g = {
    p: g,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ze && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function ks(e) {
  var t = g,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) pn(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, g = t.p, e ?? {}
}

function Be() {
  return !Ze || g !== null && g.l === null
}

function gt(e) {
  return g === null && Yn(), g.c ?? (g.c = new Map(ar(g) || void 0))
}

function ar(e) {
  let t = e.p;
  for (; t !== null;) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p
  }
  return null
}
let ve = [];

function Wt() {
  var e = ve;
  ve = [], Hn(e)
}

function ze(e) {
  if (ve.length === 0 && !je) {
    var t = ve;
    queueMicrotask(() => {
      t === ve && Wt()
    })
  }
  ve.push(e)
}

function ir() {
  for (; ve.length > 0;) Wt()
}

function fr(e) {
  var t = y;
  if (t === null) return v.f |= se, e;
  if ((t.f & ie) === 0 && (t.f & Ce) === 0) throw e;
  Ke(e, t)
}

function Ke(e, t) {
  for (; t !== null;) {
    if ((t.f & Vn) !== 0) {
      if ((t.f & ie) === 0) throw e;
      try {
        t.b.error(e);
        return
      } catch (n) {
        e = n
      }
    }
    t = t.parent
  }
  throw e
}
const or = -7169;

function E(e, t) {
  e.f = e.f & or | t
}

function Et(e) {
  (e.f & L) !== 0 || e.deps === null ? E(e, b) : E(e, Y)
}

function Xt(e) {
  if (e !== null)
    for (const t of e)(t.f & T) === 0 || (t.f & ge) === 0 || (t.f ^= ge, Xt(t.deps))
}

function lr(e, t, n) {
  (e.f & x) !== 0 ? t.add(e) : (e.f & Y) !== 0 && n.add(e), Xt(e.deps), E(e, b)
}
const de = new Set;
let d = null,
  It = null,
  A = null,
  R = [],
  Je = null,
  it = !1,
  je = !1;
var ke, xe, we, Ne, Ve, Re, te, B, Oe, C, ft, ot, lt, Zt;
const xt = class xt {
  constructor() {
    j(this, C);
    Se(this, "current", new Map);
    Se(this, "previous", new Map);
    j(this, ke, new Set);
    j(this, xe, new Set);
    j(this, we, 0);
    j(this, Ne, 0);
    j(this, Ve, null);
    j(this, Re, new Set);
    j(this, te, new Set);
    j(this, B, new Map);
    Se(this, "is_fork", !1);
    j(this, Oe, !1)
  }
  skip_effect(t) {
    p(this, B).has(t) || p(this, B).set(t, {
      d: [],
      m: []
    })
  }
  unskip_effect(t) {
    var n = p(this, B).get(t);
    if (n) {
      p(this, B).delete(t);
      for (var r of n.d) E(r, x), W(r);
      for (r of n.m) E(r, Y), W(r)
    }
  }
  process(t) {
    var s;
    R = [], this.apply();
    var n = [],
      r = [];
    for (const a of t) Q(this, C, ot).call(this, a, n, r);
    if (Q(this, C, ft).call(this)) {
      Q(this, C, lt).call(this, r), Q(this, C, lt).call(this, n);
      for (const [a, f] of p(this, B)) tn(a, f)
    } else {
      for (const a of p(this, ke)) a();
      p(this, ke).clear(), p(this, we) === 0 && Q(this, C, Zt).call(this), It = this, d = null, Ct(r), Ct(n), p(this, Re).clear(), p(this, te).clear(), It = null, (s = p(this, Ve)) == null || s.resolve()
    }
    A = null
  }
  capture(t, n) {
    n !== k && !this.previous.has(t) && this.previous.set(t, n), (t.f & se) === 0 && (this.current.set(t, t.v), A == null || A.set(t, t.v))
  }
  activate() {
    d = this, this.apply()
  }
  deactivate() {
    d === this && (d = null, A = null)
  }
  flush() {
    if (this.activate(), R.length > 0) {
      if (ct(), d !== null && d !== this) return
    } else p(this, we) === 0 && this.process([]);
    this.deactivate()
  }
  discard() {
    for (const t of p(this, xe)) t(this);
    p(this, xe).clear()
  }
  increment(t) {
    J(this, we, p(this, we) + 1), t && J(this, Ne, p(this, Ne) + 1)
  }
  decrement(t) {
    J(this, we, p(this, we) - 1), t && J(this, Ne, p(this, Ne) - 1), !p(this, Oe) && (J(this, Oe, !0), ze(() => {
      J(this, Oe, !1), Q(this, C, ft).call(this) ? R.length > 0 && this.flush() : this.revive()
    }))
  }
  revive() {
    for (const t of p(this, Re)) p(this, te).delete(t), E(t, x), W(t);
    for (const t of p(this, te)) E(t, Y), W(t);
    this.flush()
  }
  oncommit(t) {
    p(this, ke).add(t)
  }
  ondiscard(t) {
    p(this, xe).add(t)
  }
  settled() {
    return (p(this, Ve) ?? J(this, Ve, Yt())).promise
  }
  static ensure() {
    if (d === null) {
      const t = d = new xt;
      de.add(d), je || ze(() => {
        d === t && t.flush()
      })
    }
    return d
  }
  apply() {}
};
ke = new WeakMap, xe = new WeakMap, we = new WeakMap, Ne = new WeakMap, Ve = new WeakMap, Re = new WeakMap, te = new WeakMap, B = new WeakMap, Oe = new WeakMap, C = new WeakSet, ft = function() {
  return this.is_fork || p(this, Ne) > 0
}, ot = function(t, n, r) {
  t.f ^= b;
  for (var s = t.first; s !== null;) {
    var a = s.f,
      f = (a & (z | ue)) !== 0,
      l = f && (a & b) !== 0,
      i = l || (a & U) !== 0 || p(this, B).has(s);
    if (!i && s.fn !== null) {
      f ? s.f ^= b : (a & Ce) !== 0 ? n.push(s) : De(s) && ((a & X) !== 0 && p(this, te).add(s), Ae(s));
      var o = s.first;
      if (o !== null) {
        s = o;
        continue
      }
    }
    for (; s !== null;) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break
      }
      s = s.parent
    }
  }
}, lt = function(t) {
  for (var n = 0; n < t.length; n += 1) lr(t[n], p(this, Re), p(this, te))
}, Zt = function() {
  var s;
  if (de.size > 1) {
    this.previous.clear();
    var t = A,
      n = !0;
    for (const a of de) {
      if (a === this) {
        n = !1;
        continue
      }
      const f = [];
      for (const [i, o] of this.current) {
        if (a.current.has(i))
          if (n && o !== a.current.get(i)) a.current.set(i, o);
          else continue;
        f.push(i)
      }
      if (f.length === 0) continue;
      const l = [...a.current.keys()].filter(i => !this.current.has(i));
      if (l.length > 0) {
        var r = R;
        R = [];
        const i = new Set,
          o = new Map;
        for (const c of f) Jt(c, l, i, o);
        if (R.length > 0) {
          d = a, a.apply();
          for (const c of R) Q(s = a, C, ot).call(s, c, [], []);
          a.deactivate()
        }
        R = r
      }
    }
    d = null, A = t
  }
  p(this, B).clear(), de.delete(this)
};
let fe = xt;

function ut(e) {
  var t = je;
  je = !0;
  try {
    var n;
    for (e && (d !== null && ct(), n = e());;) {
      if (ir(), R.length === 0 && (d == null || d.flush(), R.length === 0)) return Je = null, n;
      ct()
    }
  } finally {
    je = t
  }
}

function ct() {
  it = !0;
  var e = null;
  try {
    for (var t = 0; R.length > 0;) {
      var n = fe.ensure();
      if (t++ > 1e3) {
        var r, s;
        ur()
      }
      n.process(R), ae.clear()
    }
  } finally {
    R = [], it = !1, Je = null
  }
}

function ur() {
  try {
    zn()
  } catch (e) {
    Ke(e, Je)
  }
}
let H = null;

function Ct(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & (re | U)) === 0 && De(r) && (H = new Set, Ae(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yn(r), (H == null ? void 0 : H.size) > 0)) {
        ae.clear();
        for (const s of H) {
          if ((s.f & (re | U)) !== 0) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null;) H.has(f) && (H.delete(f), a.push(f)), f = f.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const i = a[l];
            (i.f & (re | U)) === 0 && Ae(i)
          }
        }
        H.clear()
      }
    }
    H = null
  }
}

function Jt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & T) !== 0 ? Jt(s, t, n, r) : (a & (ht | X)) !== 0 && (a & x) === 0 && en(s, t, r) && (E(s, x), W(s))
    }
}

function Qt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & T) !== 0 ? Qt(n, t) : (r & st) !== 0 && (E(n, x), t.add(n))
    }
}

function en(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ie.call(t, s)) return !0;
      if ((s.f & T) !== 0 && en(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function W(e) {
  var t = Je = e,
    n = t.b;
  if (n != null && n.is_pending && (e.f & (Ce | qe | pt)) !== 0 && (e.f & ie) === 0) {
    n.defer_effect(e);
    return
  }
  for (; t.parent !== null;) {
    t = t.parent;
    var r = t.f;
    if (it && t === y && (r & X) !== 0 && (r & Bt) === 0 && (r & ie) !== 0) return;
    if ((r & (ue | z)) !== 0) {
      if ((r & b) === 0) return;
      t.f ^= b
    }
  }
  R.push(t)
}

function tn(e, t) {
  if (!((e.f & z) !== 0 && (e.f & b) !== 0)) {
    (e.f & x) !== 0 ? t.d.push(e) : (e.f & Y) !== 0 && t.m.push(e), E(e, b);
    for (var n = e.first; n !== null;) tn(n, t), n = n.next
  }
}

function xs(e) {
  qn(), d !== null && Wn();
  var t = fe.ensure();
  t.is_fork = !0, A = new Map;
  var n = !1,
    r = t.settled();
  ut(e);
  for (var [s, a] of t.previous) s.v = a;
  for (s of t.current.keys())(s.f & T) !== 0 && E(s, x);
  return {
    commit: async () => {
      if (n) {
        await r;
        return
      }
      de.has(t) || Kn(), n = !0, t.is_fork = !1;
      for (var [f, l] of t.current) f.v = l, f.wv = Xe();
      ut(() => {
        var i = new Set;
        for (var o of t.current.keys()) Qt(o, i);
        wr(i), on()
      }), t.revive(), await r
    },
    discard: () => {
      for (var f of t.current.keys()) f.wv = Xe();
      !n && de.has(t) && (de.delete(t), t.discard())
    }
  }
}

function nn(e, t, n, r) {
  const s = Be() ? bt : vr;
  var a = e.filter(u => !u.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return
  }
  var f = y,
    l = cr(),
    i = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map(u => u.promise)) : null;

  function o(u) {
    l();
    try {
      r(u)
    } catch (_) {
      (f.f & re) === 0 && Ke(_, f)
    }
    _t()
  }
  if (n.length === 0) {
    i.then(() => o(t.map(s)));
    return
  }

  function c() {
    l(), Promise.all(n.map(u => _r(u))).then(u => o([...t.map(s), ...u])).catch(u => Ke(u, f))
  }
  i ? i.then(c) : c()
}

function cr() {
  var e = y,
    t = v,
    n = g,
    r = d;
  return function(a = !0) {
    le(e), G(t), Ge(n), a && (r == null || r.activate())
  }
}

function _t(e = !0) {
  le(null), G(null), Ge(null), e && (d == null || d.deactivate())
}

function rn() {
  var e = y.b,
    t = d,
    n = e.is_rendered();
  return e.update_pending_count(1), t.increment(n), () => {
    e.update_pending_count(-1), t.decrement(n)
  }
}

function bt(e) {
  var t = T | x,
    n = v !== null && (v.f & T) !== 0 ? v : null;
  return y !== null && (y.f |= Me), {
    ctx: g,
    deps: null,
    effects: null,
    equals: zt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: k,
    wv: 0,
    parent: n ?? y,
    ac: null
  }
}

function _r(e, t, n) {
  y === null && Bn();
  var s = void 0,
    a = At(k),
    f = !v,
    l = new Map;
  return Tr(() => {
    var _;
    var i = Yt();
    s = i.promise;
    try {
      Promise.resolve(e()).then(i.resolve, i.reject).finally(_t)
    } catch (m) {
      i.reject(m), _t()
    }
    var o = d;
    if (f) {
      var c = rn();
      (_ = l.get(o)) == null || _.reject(_e), l.delete(o), l.set(o, i)
    }
    const u = (m, h = void 0) => {
      if (o.activate(), h) h !== _e && (a.f |= se, vt(a, h));
      else {
        (a.f & se) !== 0 && (a.f ^= se), vt(a, m);
        for (const [D, S] of l) {
          if (l.delete(D), D === o) break;
          S.reject(_e)
        }
      }
      c && c()
    };
    i.promise.then(u, m => u(null, m || "unknown"))
  }), St(() => {
    for (const i of l.values()) i.reject(_e)
  }), new Promise(i => {
    function o(c) {
      function u() {
        c === s ? i(a) : o(s)
      }
      c.then(u, u)
    }
    o(s)
  })
}

function Ns(e) {
  const t = bt(e);
  return En(t), t
}

function vr(e) {
  const t = bt(e);
  return t.equals = Kt, t
}

function dr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) oe(t[n])
  }
}

function pr(e) {
  for (var t = e.parent; t !== null;) {
    if ((t.f & T) === 0) return (t.f & re) === 0 ? t : null;
    t = t.parent
  }
  return null
}

function Tt(e) {
  var t, n = y;
  le(pr(e));
  try {
    e.f &= ~ge, dr(e), t = An(e)
  } finally {
    le(n)
  }
  return t
}

function sn(e) {
  var t = Tt(e);
  if (!e.equals(t) && (e.wv = Xe(), (!(d != null && d.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    E(e, b);
    return
  }
  Te || (A !== null ? (dn() || d != null && d.is_fork) && A.set(e, t) : Et(e))
}

function hr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(_e), r.teardown = jn, r.ac = null, He(r, 0), kt(r))
}

function an(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && Ae(t)
}
let We = new Set;
const ae = new Map;

function wr(e) {
  We = e
}
let fn = !1;

function At(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: zt,
    rv: 0,
    wv: 0
  };
  return n
}

function ee(e, t) {
  const n = At(e);
  return En(n), n
}

function Rs(e, t = !1, n = !0) {
  var s;
  const r = At(e);
  return t || (r.equals = Kt), Ze && n && g !== null && g.l !== null && ((s = g.l).s ?? (s.s = [])).push(r), r
}

function Os(e, t) {
  return K(e, xn(() => ne(e))), t
}

function K(e, t, n = !1) {
  v !== null && (!q || (v.f & st) !== 0) && Be() && (v.f & (T | X | ht | st)) !== 0 && (F === null || !Ie.call(F, e)) && Jn();
  let r = n ? Le(t) : t;
  return vt(e, r)
}

function vt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Te ? ae.set(e, t) : ae.set(e, n), e.v = t;
    var r = fe.ensure();
    if (r.capture(e, n), (e.f & T) !== 0) {
      const s = e;
      (e.f & x) !== 0 && Tt(s), Et(s)
    }
    e.wv = Xe(), ln(e, x), Be() && y !== null && (y.f & b) !== 0 && (y.f & (z | ue)) === 0 && (P === null ? xr([e]) : P.push(e)), !r.is_fork && We.size > 0 && !fn && on()
  }
  return t
}

function on() {
  fn = !1;
  for (const e of We)(e.f & b) !== 0 && E(e, Y), De(e) && Ae(e);
  We.clear()
}

function Is(e, t = 1) {
  var n = ne(e),
    r = t === 1 ? n++ : n--;
  return K(e, n), r
}

function nt(e) {
  K(e, e.v + 1)
}

function ln(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Be(), s = n.length, a = 0; a < s; a++) {
      var f = n[a],
        l = f.f;
      if (!(!r && f === y)) {
        var i = (l & x) === 0;
        if (i && E(f, t), (l & T) !== 0) {
          var o = f;
          A == null || A.delete(o), (l & ge) === 0 && (l & L && (f.f |= ge), ln(o, Y))
        } else i && ((l & X) !== 0 && H !== null && H.add(f), W(f))
      }
    }
}

function Le(e) {
  if (typeof e != "object" || e === null || ye in e) return e;
  const t = qt(e);
  if (t !== Ln && t !== Fn) return e;
  var n = new Map,
    r = Cn(e),
    s = ee(0),
    a = me,
    f = l => {
      if (me === a) return l();
      var i = v,
        o = me;
      G(null), Ft(a);
      var c = l();
      return G(i), Ft(o), c
    };
  return r && n.set("length", ee(e.length)), new Proxy(e, {
    defineProperty(l, i, o) {
      (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Xn();
      var c = n.get(i);
      return c === void 0 ? f(() => {
        var u = ee(o.value);
        return n.set(i, u), u
      }) : K(c, o.value, !0), !0
    },
    deleteProperty(l, i) {
      var o = n.get(i);
      if (o === void 0) {
        if (i in l) {
          const c = f(() => ee(k));
          n.set(i, c), nt(s)
        }
      } else K(o, k), nt(s);
      return !0
    },
    get(l, i, o) {
      var m;
      if (i === ye) return e;
      var c = n.get(i),
        u = i in l;
      if (c === void 0 && (!u || (m = Fe(l, i)) != null && m.writable) && (c = f(() => {
          var h = Le(u ? l[i] : k),
            D = ee(h);
          return D
        }), n.set(i, c)), c !== void 0) {
        var _ = ne(c);
        return _ === k ? void 0 : _
      }
      return Reflect.get(l, i, o)
    },
    getOwnPropertyDescriptor(l, i) {
      var o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o && "value" in o) {
        var c = n.get(i);
        c && (o.value = ne(c))
      } else if (o === void 0) {
        var u = n.get(i),
          _ = u == null ? void 0 : u.v;
        if (u !== void 0 && _ !== k) return {
          enumerable: !0,
          configurable: !0,
          value: _,
          writable: !0
        }
      }
      return o
    },
    has(l, i) {
      var _;
      if (i === ye) return !0;
      var o = n.get(i),
        c = o !== void 0 && o.v !== k || Reflect.has(l, i);
      if (o !== void 0 || y !== null && (!c || (_ = Fe(l, i)) != null && _.writable)) {
        o === void 0 && (o = f(() => {
          var m = c ? Le(l[i]) : k,
            h = ee(m);
          return h
        }), n.set(i, o));
        var u = ne(o);
        if (u === k) return !1
      }
      return c
    },
    set(l, i, o, c) {
      var Nt;
      var u = n.get(i),
        _ = i in l;
      if (r && i === "length")
        for (var m = o; m < u.v; m += 1) {
          var h = n.get(m + "");
          h !== void 0 ? K(h, k) : m in l && (h = f(() => ee(k)), n.set(m + "", h))
        }
      if (u === void 0)(!_ || (Nt = Fe(l, i)) != null && Nt.writable) && (u = f(() => ee(void 0)), K(u, Le(o)), n.set(i, u));
      else {
        _ = u.v !== k;
        var D = f(() => Le(o));
        K(u, D)
      }
      var S = Reflect.getOwnPropertyDescriptor(l, i);
      if (S != null && S.set && S.set.call(c, o), !_) {
        if (r && typeof i == "string") {
          var Pe = n.get("length"),
            Z = Number(i);
          Number.isInteger(Z) && Z >= Pe.v && K(Pe, Z + 1)
        }
        nt(s)
      }
      return !0
    },
    ownKeys(l) {
      ne(s);
      var i = Reflect.ownKeys(l).filter(u => {
        var _ = n.get(u);
        return _ === void 0 || _.v !== k
      });
      for (var [o, c] of n) c.v !== k && !(o in l) && i.push(o);
      return i
    },
    setPrototypeOf() {
      Zn()
    }
  })
}

function Mt(e) {
  try {
    if (e !== null && typeof e == "object" && ye in e) return e[ye]
  } catch {}
  return e
}

function Cs(e, t) {
  return Object.is(Mt(e), Mt(t))
}
var Dt, yr, un, cn, _n;

function Ms() {
  if (Dt === void 0) {
    Dt = window, yr = document, un = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    cn = Fe(t, "firstChild").get, _n = Fe(t, "nextSibling").get, Ot(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ot(n) && (n.__t = void 0)
  }
}

function be(e = "") {
  return document.createTextNode(e)
}

function V(e) {
  return cn.call(e)
}

function ce(e) {
  return _n.call(e)
}

function Ds(e, t) {
  if (!N) return V(e);
  var n = V(w);
  if (n === null) n = w.appendChild(be());
  else if (t && n.nodeType !== Ye) {
    var r = be();
    return n == null || n.before(r), Ee(r), r
  }
  return t && Qe(n), Ee(n), n
}

function Ps(e, t = !1) {
  if (!N) {
    var n = V(e);
    return n instanceof Comment && n.data === "" ? ce(n) : n
  }
  if (t) {
    if ((w == null ? void 0 : w.nodeType) !== Ye) {
      var r = be();
      return w == null || w.before(r), Ee(r), r
    }
    Qe(w)
  }
  return w
}

function Ls(e, t = 1, n = !1) {
  let r = N ? w : e;
  for (var s; t--;) s = r, r = ce(r);
  if (!N) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ye) {
      var a = be();
      return r === null ? s == null || s.after(a) : r.before(a), Ee(a), a
    }
    Qe(r)
  }
  return Ee(r), r
}

function mr(e) {
  e.textContent = ""
}

function Fs() {
  return !1
}

function gr(e, t, n) {
  return document.createElementNS(t ?? rr, e, void 0)
}

function Qe(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Ye;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function js(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ze(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function Hs(e) {
  N && V(e) !== null && mr(e)
}
let Pt = !1;

function Er() {
  Pt || (Pt = !0, document.addEventListener("reset", e => {
    Promise.resolve().then(() => {
      var t;
      if (!e.defaultPrevented)
        for (const n of e.target.elements)(t = n.__on_r) == null || t.call(n)
    })
  }, {
    capture: !0
  }))
}

function Vs(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  St(() => {
    for (var a of t) e.removeEventListener(a, n)
  })
}

function et(e) {
  var t = v,
    n = y;
  G(null), le(null);
  try {
    return e()
  } finally {
    G(t), le(n)
  }
}

function qs(e, t, n, r = n) {
  e.addEventListener(t, () => et(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0)
  } : e.__on_r = () => r(!0), Er()
}

function vn(e) {
  y === null && (v === null && Gn(), $n()), Te && Un()
}

function br(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function M(e, t, n) {
  var r = y;
  r !== null && (r.f & U) !== 0 && (e |= U);
  var s = {
    ctx: g,
    deps: null,
    nodes: null,
    f: e | x | L,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n) try {
    Ae(s)
  } catch (l) {
    throw oe(s), l
  } else t !== null && W(s);
  var a = s;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && (a.f & Me) === 0 && (a = a.first, (e & X) !== 0 && (e & $e) !== 0 && a !== null && (a.f |= $e)), a !== null && (a.parent = r, r !== null && br(a, r), v !== null && (v.f & T) !== 0 && (e & ue) === 0)) {
    var f = v;
    (f.effects ?? (f.effects = [])).push(a)
  }
  return s
}

function dn() {
  return v !== null && !q
}

function St(e) {
  const t = M(qe, null, !1);
  return E(t, b), t.teardown = e, t
}

function Ys(e) {
  vn();
  var t = y.f,
    n = !v && (t & z) !== 0 && (t & ie) === 0;
  if (n) {
    var r = g;
    (r.e ?? (r.e = [])).push(e)
  } else return pn(e)
}

function pn(e) {
  return M(Ce | Ut, e, !1)
}

function Bs(e) {
  return vn(), M(qe | Ut, e, !0)
}

function Us(e) {
  fe.ensure();
  const t = M(ue | Me, e, !0);
  return () => {
    oe(t)
  }
}

function $s(e) {
  fe.ensure();
  const t = M(ue | Me, e, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? kr(t, () => {
      oe(t), r(void 0)
    }) : (oe(t), r(void 0))
  })
}

function Gs(e) {
  return M(Ce, e, !1)
}

function zs(e, t) {
  var n = g,
    r = {
      effect: null,
      ran: !1,
      deps: e
    };
  n.l.$.push(r), r.effect = hn(() => {
    e(), !r.ran && (r.ran = !0, xn(t))
  })
}

function Ks() {
  var e = g;
  hn(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      (n.f & b) !== 0 && n.deps !== null && E(n, Y), De(n) && Ae(n), t.ran = !1
    }
  })
}

function Tr(e) {
  return M(ht | Me, e, !0)
}

function hn(e, t = 0) {
  return M(qe | t, e, !0)
}

function Ws(e, t = [], n = [], r = []) {
  nn(r, t, n, s => {
    M(qe, () => e(...s.map(ne)), !0)
  })
}

function Xs(e, t = [], n = [], r = []) {
  if (n.length > 0 || r.length > 0) var s = rn();
  nn(r, t, n, a => {
    M(Ce, () => e(...a.map(ne)), !1), s && s()
  })
}

function Zs(e, t = 0) {
  var n = M(X | t, e, !0);
  return n
}

function Js(e, t = 0) {
  var n = M(pt | t, e, !0);
  return n
}

function Qs(e) {
  return M(z | Me, e, !0)
}

function wn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Te,
      r = v;
    Lt(!0), G(null);
    try {
      t.call(null)
    } finally {
      Lt(n), G(r)
    }
  }
}

function kt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && et(() => {
      s.abort(_e)
    });
    var r = n.next;
    (n.f & ue) !== 0 ? n.parent = null : oe(n, t), n = r
  }
}

function Ar(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & z) === 0 && oe(t), t = n
  }
}

function oe(e, t = !0) {
  var n = !1;
  (t || (e.f & Bt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Sr(e.nodes.start, e.nodes.end), n = !0), kt(e, t && !n), He(e, 0), E(e, re);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r) a.stop();
  wn(e);
  var s = e.parent;
  s !== null && s.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
}

function Sr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : ce(e);
    e.remove(), e = n
  }
}

function yn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function kr(e, t, n = !0) {
  var r = [];
  mn(e, r, !0);
  var s = () => {
      n && oe(e), t && t()
    },
    a = r.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var l of r) l.out(f)
  } else s()
}

function mn(e, t, n) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)(l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null;) {
      var a = s.next,
        f = (s.f & $e) !== 0 || (s.f & z) !== 0 && (e.f & X) !== 0;
      mn(s, t, f ? n : !1), s = a
    }
  }
}

function ea(e) {
  gn(e, !0)
}

function gn(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & b) === 0 && (E(e, x), W(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & $e) !== 0 || (n.f & z) !== 0;
      gn(n, s ? t : !1), n = r
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)(f.is_global || t) && f.in()
  }
}

function ta(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : ce(n);
      t.append(n), n = s
    }
}
let Ue = !1,
  Te = !1;

function Lt(e) {
  Te = e
}
let v = null,
  q = !1;

function G(e) {
  v = e
}
let y = null;

function le(e) {
  y = e
}
let F = null;

function En(e) {
  v !== null && (F === null ? F = [e] : F.push(e))
}
let O = null,
  I = 0,
  P = null;

function xr(e) {
  P = e
}
let bn = 1,
  pe = 0,
  me = pe;

function Ft(e) {
  me = e
}

function Xe() {
  return ++bn
}

function De(e) {
  var t = e.f;
  if ((t & x) !== 0) return !0;
  if (t & T && (e.f &= ~ge), (t & Y) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (De(a) && sn(a), a.wv > e.wv) return !0
    }(t & L) !== 0 && A === null && E(e, b)
  }
  return !1
}

function Tn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(F !== null && Ie.call(F, e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & T) !== 0 ? Tn(a, t, !1) : t === a && (n ? E(a, x) : (a.f & b) !== 0 && E(a, Y), W(a))
    }
}

function An(e) {
  var D;
  var t = O,
    n = I,
    r = P,
    s = v,
    a = F,
    f = g,
    l = q,
    i = me,
    o = e.f;
  O = null, I = 0, P = null, v = (o & (z | ue)) === 0 ? e : null, F = null, Ge(e.ctx), q = !1, me = ++pe, e.ac !== null && (et(() => {
    e.ac.abort(_e)
  }), e.ac = null);
  try {
    e.f |= at;
    var c = e.fn,
      u = c();
    e.f |= ie;
    var _ = e.deps,
      m = d == null ? void 0 : d.is_fork;
    if (O !== null) {
      var h;
      if (m || He(e, I), _ !== null && I > 0)
        for (_.length = I + O.length, h = 0; h < O.length; h++) _[I + h] = O[h];
      else e.deps = _ = O;
      if (dn() && (e.f & L) !== 0)
        for (h = I; h < _.length; h++)((D = _[h]).reactions ?? (D.reactions = [])).push(e)
    } else !m && _ !== null && I < _.length && (He(e, I), _.length = I);
    if (Be() && P !== null && !q && _ !== null && (e.f & (T | Y | x)) === 0)
      for (h = 0; h < P.length; h++) Tn(P[h], e);
    if (s !== null && s !== e) {
      if (pe++, s.deps !== null)
        for (let S = 0; S < n; S += 1) s.deps[S].rv = pe;
      if (t !== null)
        for (const S of t) S.rv = pe;
      P !== null && (r === null ? r = P : r.push(...P))
    }
    return (e.f & se) !== 0 && (e.f ^= se), u
  } catch (S) {
    return fr(S)
  } finally {
    e.f ^= at, O = t, I = n, P = r, v = s, F = a, Ge(f), q = l, me = i
  }
}

function Nr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Mn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & T) !== 0 && (O === null || !Ie.call(O, t))) {
    var a = t;
    (a.f & L) !== 0 && (a.f ^= L, a.f &= ~ge), Et(a), hr(a), He(a, 0)
  }
}

function He(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Nr(e, n[r])
}

function Ae(e) {
  var t = e.f;
  if ((t & re) === 0) {
    E(e, b);
    var n = y,
      r = Ue;
    y = e, Ue = !0;
    try {
      (t & (X | pt)) !== 0 ? Ar(e) : kt(e), wn(e);
      var s = An(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = bn;
      var a
    } finally {
      Ue = r, y = n
    }
  }
}
async function na() {
  await Promise.resolve(), ut()
}

function ra() {
  return fe.ensure().settled()
}

function ne(e) {
  var t = e.f,
    n = (t & T) !== 0;
  if (v !== null && !q) {
    var r = y !== null && (y.f & re) !== 0;
    if (!r && (F === null || !Ie.call(F, e))) {
      var s = v.deps;
      if ((v.f & at) !== 0) e.rv < pe && (e.rv = pe, O === null && s !== null && s[I] === e ? I++ : O === null ? O = [e] : O.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [v] : Ie.call(a, v) || a.push(v)
      }
    }
  }
  if (Te && ae.has(e)) return ae.get(e);
  if (n) {
    var f = e;
    if (Te) {
      var l = f.v;
      return ((f.f & b) === 0 && f.reactions !== null || kn(f)) && (l = Tt(f)), ae.set(f, l), l
    }
    var i = (f.f & L) === 0 && !q && v !== null && (Ue || (v.f & L) !== 0),
      o = (f.f & ie) === 0;
    De(f) && (i && (f.f |= L), sn(f)), i && !o && (an(f), Sn(f))
  }
  if (A != null && A.has(e)) return A.get(e);
  if ((e.f & se) !== 0) throw e.v;
  return e.v
}

function Sn(e) {
  if (e.f |= L, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & T) !== 0 && (t.f & L) === 0 && (an(t), Sn(t))
}

function kn(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ae.has(t) || (t.f & T) !== 0 && kn(t)) return !0;
  return !1
}

function xn(e) {
  var t = q;
  try {
    return q = !0, e()
  } finally {
    q = t
  }
}

function sa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ye in e) dt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ye in n && dt(n)
      }
  }
}

function dt(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      dt(e[r], t)
    } catch {}
    const n = qt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Pn(n);
      for (let s in r) {
        const a = r[s].get;
        if (a) try {
          a.call(e)
        } catch {}
      }
    }
  }
}

function aa(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const Rr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function ia(e) {
  return Rr.includes(e)
}
const Or = {
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

function fa(e) {
  return e = e.toLowerCase(), Or[e] ?? e
}
const Ir = ["touchstart", "touchmove"];

function oa(e) {
  return Ir.includes(e)
}
const he = Symbol("events"),
  Cr = new Set,
  Mr = new Set;

function la(e) {
  if (!N) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Nn(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Dr.call(t, a), !a.cancelBubble) return et(() => n == null ? void 0 : n.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ze(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function ua(e, t, n, r = {}) {
  var s = Nn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function ca(e, t, n, r, s) {
  var a = {
      capture: r,
      passive: s
    },
    f = Nn(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && St(() => {
    t.removeEventListener(e, f, a)
  })
}

function _a(e, t, n) {
  (t[he] ?? (t[he] = {}))[e] = n
}

function va(e) {
  for (var t = 0; t < e.length; t++) Cr.add(e[t]);
  for (var n of Mr) n(e)
}
let jt = null;

function Dr(e) {
  var S, Pe;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((S = e.composedPath) == null ? void 0 : S.call(e)) || [],
    a = s[0] || e.target;
  jt = e;
  var f = 0,
    l = jt === e && e[he];
  if (l) {
    var i = s.indexOf(l);
    if (i !== -1 && (t === document || t === window)) {
      e[he] = t;
      return
    }
    var o = s.indexOf(t);
    if (o === -1) return;
    i <= o && (f = i)
  }
  if (a = s[f] || e.target, a !== t) {
    Dn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n
      }
    });
    var c = v,
      u = y;
    G(null), le(null);
    try {
      for (var _, m = []; a !== null;) {
        var h = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var D = (Pe = a[he]) == null ? void 0 : Pe[r];
          D != null && (!a.disabled || e.target === a) && D.call(a, e)
        } catch (Z) {
          _ ? m.push(Z) : _ = Z
        }
        if (e.cancelBubble || h === t || h === null) break;
        a = h
      }
      if (_) {
        for (let Z of m) queueMicrotask(() => {
          throw Z
        });
        throw _
      }
    } finally {
      e[he] = t, delete e.currentTarget, G(c), le(u)
    }
  }
}
var Vt;
const rt = ((Vt = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Vt.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
  createHTML: e => e
});

function Pr(e) {
  return (rt == null ? void 0 : rt.createHTML(e)) ?? e
}

function Rn(e) {
  var t = gr("template");
  return t.innerHTML = Pr(e.replaceAll("<!>", "<!---->")), t.content
}

function $(e, t) {
  var n = y;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function da(e, t) {
  var n = (t & $t) !== 0,
    r = (t & Qn) !== 0,
    s, a = !e.startsWith("<!>");
  return () => {
    if (N) return $(w, null), w;
    s === void 0 && (s = Rn(a ? e : "<!>" + e), n || (s = V(s)));
    var f = r || un ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var l = V(f),
        i = f.lastChild;
      $(l, i)
    } else $(f, f);
    return f
  }
}

function Lr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = (t & $t) !== 0,
    a = `<${n}>${r?e:"<!>"+e}</${n}>`,
    f;
  return () => {
    if (N) return $(w, null), w;
    if (!f) {
      var l = Rn(a),
        i = V(l);
      if (s)
        for (f = document.createDocumentFragment(); V(i);) f.appendChild(V(i));
      else f = V(i)
    }
    var o = f.cloneNode(!0);
    if (s) {
      var c = V(o),
        u = o.lastChild;
      $(c, u)
    } else $(o, o);
    return o
  }
}

function pa(e, t) {
  return Lr(e, t, "svg")
}

function ha(e = "") {
  if (!N) {
    var t = be(e + "");
    return $(t, t), t
  }
  var n = w;
  return n.nodeType !== Ye ? (n.before(n = be()), Ee(n)) : Qe(n), $(n, n), n
}

function wa() {
  if (N) return $(w, null), w;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = be();
  return e.append(t, n), $(t, n), e
}

function ya(e, t) {
  if (N) {
    var n = y;
    ((n.f & ie) === 0 || n.nodes.end === null) && (n.nodes.end = w), Gt();
    return
  }
  e !== null && e.before(t)
}

function ma() {
  var e, t;
  if (N && w && w.nodeType === wt && ((e = w.textContent) != null && e.startsWith("$"))) {
    const n = w.textContent.substring(1);
    return Gt(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  yr as $, xn as A, Hs as B, N as C, Gt as D, Zs as E, $e as F, gs as G, ms as H, Ee as I, hs as J, er as K, w as L, Yn as M, g as N, Ze as O, ut as P, xs as Q, bs as R, As as S, Ts as T, ra as U, na as V, tr as W, hn as X, ze as Y, ye as Z, d as _, ya as a, Vn as a$, ea as a0, oe as a1, kr as a2, be as a3, Qs as a4, ta as a5, Fs as a6, Es as a7, Be as a8, Qr as a9, It as aA, Cs as aB, St as aC, y as aD, Sr as aE, mt as aF, yt as aG, $ as aH, gr as aI, cs as aJ, _s as aK, Dt as aL, Fe as aM, Wr as aN, ss as aO, Te as aP, re as aQ, as as aR, rs as aS, ns as aT, is as aU, Br as aV, Hr as aW, jn as aX, Is as aY, dn as aZ, nt as a_, V as aa, wt as ab, nr as ac, vt as ad, Yr as ae, zr as af, vr as ag, Cn as ah, jr as ai, Zr as aj, ts as ak, Rs as al, At as am, Jr as an, U as ao, z as ap, es as aq, mr as ar, ce as as, Bs as at, Vr as au, Hn as av, bt as aw, Bt as ax, Me as ay, qs as az, ks as b, us as b0, fe as b1, E as b2, x as b3, W as b4, Y as b5, lr as b6, le as b7, G as b8, Ge as b9, vs as bA, Pn as bB, Gr as bC, aa as bD, Nn as bE, js as bF, fa as bG, k as bH, Er as bI, ia as bJ, ua as bK, ma as bL, Us as bM, Ln as bN, Vs as bO, me as bP, zs as bQ, Ks as bR, Os as bS, la as bT, fr as ba, v as bb, Ke as bc, Xr as bd, ps as be, Ms as bf, Kr as bg, $s as bh, Cr as bi, Mr as bj, Dr as bk, oa as bl, sr as bm, X as bn, ie as bo, ls as bp, fs as bq, os as br, et as bs, Dn as bt, Js as bu, ds as bv, Ur as bw, nn as bx, rr as by, qt as bz, da as c, Ds as d, ee as e, Ps as f, Le as g, K as h, ne as i, Xs as j, va as k, wa as l, _a as m, ys as n, ha as o, Ss as p, Ys as q, ws as r, Ls as s, Ws as t, Ns as u, ca as v, Gs as w, qr as x, pa as y, sa as z
};