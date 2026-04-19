var Rn = Object.defineProperty;
var Rt = e => {
  throw TypeError(e)
};
var On = (e, t, n) => t in e ? Rn(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Se = (e, t, n) => On(e, typeof t != "symbol" ? t + "" : t, n),
  tt = (e, t, n) => t.has(e) || Rt("Cannot " + n);
var p = (e, t, n) => (tt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  j = (e, t, n) => t.has(e) ? Rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  Z = (e, t, n, r) => (tt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  J = (e, t, n) => (tt(e, t, "access private method"), n);
const jr = !1;
var In = Array.isArray,
  Cn = Array.prototype.indexOf,
  Ie = Array.prototype.includes,
  Hr = Array.from,
  Mn = Object.defineProperty,
  Le = Object.getOwnPropertyDescriptor,
  Dn = Object.getOwnPropertyDescriptors,
  Pn = Object.prototype,
  Ln = Array.prototype,
  qt = Object.getPrototypeOf,
  Ot = Object.isExtensible;

function Vr(e) {
  return typeof e == "function"
}
const Fn = () => {};

function qr(e) {
  return e()
}

function jn(e) {
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

function Yr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const T = 2,
  Ce = 4,
  Ve = 8,
  pt = 1 << 24,
  W = 16,
  $ = 32,
  Ae = 64,
  Hn = 128,
  P = 512,
  b = 1024,
  x = 2048,
  q = 4096,
  B = 8192,
  ne = 16384,
  ae = 32768,
  $e = 65536,
  st = 1 << 17,
  Bt = 1 << 18,
  qe = 1 << 19,
  Ut = 1 << 20,
  Br = 1 << 25,
  we = 65536,
  at = 1 << 21,
  ht = 1 << 22,
  re = 1 << 23,
  pe = Symbol("$state"),
  Ur = Symbol("legacy props"),
  $r = Symbol(""),
  le = new class extends Error {
    constructor() {
      super(...arguments);
      Se(this, "name", "StaleReactionError");
      Se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  };
var Ht;
const zr = !!((Ht = globalThis.document) != null && Ht.contentType) && globalThis.document.contentType.includes("xml"),
  Ye = 3,
  wt = 8;

function Vn(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required")
}

function qn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Yn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function Kr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate")
}

function Bn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Un() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function $n(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function Gn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function zn() {
  throw new Error("https://svelte.dev/e/fork_discarded")
}

function Kn() {
  throw new Error("https://svelte.dev/e/fork_timing")
}

function Wr() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Xr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Wn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Xn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Zn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function Zr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const Jr = 1,
  Qr = 2,
  es = 4,
  ts = 8,
  ns = 16,
  rs = 1,
  ss = 2,
  as = 4,
  is = 8,
  fs = 16,
  os = 1,
  ls = 2,
  us = 4,
  Jn = 1,
  Qn = 2,
  er = "[",
  tr = "[!",
  cs = "[?",
  nr = "]",
  yt = {},
  k = Symbol(),
  rr = "http://www.w3.org/1999/xhtml",
  _s = "http://www.w3.org/2000/svg",
  vs = "http://www.w3.org/1998/Math/MathML",
  ds = "@attach";

function mt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function ps() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function hs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let N = !1;

function ws(e) {
  N = e
}
let w;

function ye(e) {
  if (e === null) throw mt(), yt;
  return w = e
}

function $t() {
  return ye(oe(w))
}

function ys(e) {
  if (N) {
    if (oe(w) !== null) throw mt(), yt;
    w = e
  }
}

function ms(e = 1) {
  if (N) {
    for (var t = e, n = w; t--;) n = oe(n);
    w = n
  }
}

function gs(e = !0) {
  for (var t = 0, n = w;;) {
    if (n.nodeType === wt) {
      var r = n.data;
      if (r === nr) {
        if (t === 0) return n;
        t -= 1
      } else(r === er || r === tr || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var s = oe(n);
    e && n.remove(), n = s
  }
}

function Es(e) {
  if (!e || e.nodeType !== wt) throw mt(), yt;
  return e.data
}

function Gt(e) {
  return e === this.v
}

function sr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function zt(e) {
  return !sr(e, this.v)
}
let Ze = !1;

function bs() {
  Ze = !0
}
let g = null;

function Ge(e) {
  g = e
}

function Ts(e) {
  return gt().get(e)
}

function As(e, t) {
  return gt().set(e, t), t
}

function Ss(e) {
  return gt().has(e)
}

function ks(e, t = !1, n) {
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

function xs(e) {
  var t = g,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) dn(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, g = t.p, e ?? {}
}

function Be() {
  return !Ze || g !== null && g.l === null
}

function gt(e) {
  return g === null && qn(), g.c ?? (g.c = new Map(ar(g) || void 0))
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
let ue = [];

function Kt() {
  var e = ue;
  ue = [], jn(e)
}

function ze(e) {
  if (ue.length === 0 && !Fe) {
    var t = ue;
    queueMicrotask(() => {
      t === ue && Kt()
    })
  }
  ue.push(e)
}

function ir() {
  for (; ue.length > 0;) Kt()
}

function fr(e) {
  var t = y;
  if (t === null) return v.f |= re, e;
  if ((t.f & ae) === 0 && (t.f & Ce) === 0) throw e;
  Ke(e, t)
}

function Ke(e, t) {
  for (; t !== null;) {
    if ((t.f & Hn) !== 0) {
      if ((t.f & ae) === 0) throw e;
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
  (e.f & P) !== 0 || e.deps === null ? E(e, b) : E(e, q)
}

function Wt(e) {
  if (e !== null)
    for (const t of e)(t.f & T) === 0 || (t.f & we) === 0 || (t.f ^= we, Wt(t.deps))
}

function lr(e, t, n) {
  (e.f & x) !== 0 ? t.add(e) : (e.f & q) !== 0 && n.add(e), Wt(e.deps), E(e, b)
}
const ce = new Set;
let d = null,
  It = null,
  A = null,
  R = [],
  Je = null,
  it = !1,
  Fe = !1;
var ke, xe, de, Ne, He, Re, ee, Y, Oe, C, ft, ot, lt, Xt;
const xt = class xt {
  constructor() {
    j(this, C);
    Se(this, "current", new Map);
    Se(this, "previous", new Map);
    j(this, ke, new Set);
    j(this, xe, new Set);
    j(this, de, 0);
    j(this, Ne, 0);
    j(this, He, null);
    j(this, Re, new Set);
    j(this, ee, new Set);
    j(this, Y, new Map);
    Se(this, "is_fork", !1);
    j(this, Oe, !1)
  }
  skip_effect(t) {
    p(this, Y).has(t) || p(this, Y).set(t, {
      d: [],
      m: []
    })
  }
  unskip_effect(t) {
    var n = p(this, Y).get(t);
    if (n) {
      p(this, Y).delete(t);
      for (var r of n.d) E(r, x), z(r);
      for (r of n.m) E(r, q), z(r)
    }
  }
  process(t) {
    var s;
    R = [], this.apply();
    var n = [],
      r = [];
    for (const a of t) J(this, C, ot).call(this, a, n, r);
    if (J(this, C, ft).call(this)) {
      J(this, C, lt).call(this, r), J(this, C, lt).call(this, n);
      for (const [a, f] of p(this, Y)) en(a, f)
    } else {
      for (const a of p(this, ke)) a();
      p(this, ke).clear(), p(this, de) === 0 && J(this, C, Xt).call(this), It = this, d = null, Ct(r), Ct(n), p(this, Re).clear(), p(this, ee).clear(), It = null, (s = p(this, He)) == null || s.resolve()
    }
    A = null
  }
  capture(t, n) {
    n !== k && !this.previous.has(t) && this.previous.set(t, n), (t.f & re) === 0 && (this.current.set(t, t.v), A == null || A.set(t, t.v))
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
    } else p(this, de) === 0 && this.process([]);
    this.deactivate()
  }
  discard() {
    for (const t of p(this, xe)) t(this);
    p(this, xe).clear()
  }
  increment(t) {
    Z(this, de, p(this, de) + 1), t && Z(this, Ne, p(this, Ne) + 1)
  }
  decrement(t) {
    Z(this, de, p(this, de) - 1), t && Z(this, Ne, p(this, Ne) - 1), !p(this, Oe) && (Z(this, Oe, !0), ze(() => {
      Z(this, Oe, !1), J(this, C, ft).call(this) ? R.length > 0 && this.flush() : this.revive()
    }))
  }
  revive() {
    for (const t of p(this, Re)) p(this, ee).delete(t), E(t, x), z(t);
    for (const t of p(this, ee)) E(t, q), z(t);
    this.flush()
  }
  oncommit(t) {
    p(this, ke).add(t)
  }
  ondiscard(t) {
    p(this, xe).add(t)
  }
  settled() {
    return (p(this, He) ?? Z(this, He, Yt())).promise
  }
  static ensure() {
    if (d === null) {
      const t = d = new xt;
      ce.add(d), Fe || ze(() => {
        d === t && t.flush()
      })
    }
    return d
  }
  apply() {}
};
ke = new WeakMap, xe = new WeakMap, de = new WeakMap, Ne = new WeakMap, He = new WeakMap, Re = new WeakMap, ee = new WeakMap, Y = new WeakMap, Oe = new WeakMap, C = new WeakSet, ft = function() {
  return this.is_fork || p(this, Ne) > 0
}, ot = function(t, n, r) {
  t.f ^= b;
  for (var s = t.first; s !== null;) {
    var a = s.f,
      f = (a & ($ | Ae)) !== 0,
      o = f && (a & b) !== 0,
      i = o || (a & B) !== 0 || p(this, Y).has(s);
    if (!i && s.fn !== null) {
      f ? s.f ^= b : (a & Ce) !== 0 ? n.push(s) : Me(s) && ((a & W) !== 0 && p(this, ee).add(s), Te(s));
      var l = s.first;
      if (l !== null) {
        s = l;
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
  for (var n = 0; n < t.length; n += 1) lr(t[n], p(this, Re), p(this, ee))
}, Xt = function() {
  var s;
  if (ce.size > 1) {
    this.previous.clear();
    var t = A,
      n = !0;
    for (const a of ce) {
      if (a === this) {
        n = !1;
        continue
      }
      const f = [];
      for (const [i, l] of this.current) {
        if (a.current.has(i))
          if (n && l !== a.current.get(i)) a.current.set(i, l);
          else continue;
        f.push(i)
      }
      if (f.length === 0) continue;
      const o = [...a.current.keys()].filter(i => !this.current.has(i));
      if (o.length > 0) {
        var r = R;
        R = [];
        const i = new Set,
          l = new Map;
        for (const c of f) Zt(c, o, i, l);
        if (R.length > 0) {
          d = a, a.apply();
          for (const c of R) J(s = a, C, ot).call(s, c, [], []);
          a.deactivate()
        }
        R = r
      }
    }
    d = null, A = t
  }
  p(this, Y).clear(), ce.delete(this)
};
let me = xt;

function ut(e) {
  var t = Fe;
  Fe = !0;
  try {
    var n;
    for (e && (d !== null && ct(), n = e());;) {
      if (ir(), R.length === 0 && (d == null || d.flush(), R.length === 0)) return Je = null, n;
      ct()
    }
  } finally {
    Fe = t
  }
}

function ct() {
  it = !0;
  var e = null;
  try {
    for (var t = 0; R.length > 0;) {
      var n = me.ensure();
      if (t++ > 1e3) {
        var r, s;
        ur()
      }
      n.process(R), se.clear()
    }
  } finally {
    R = [], it = !1, Je = null
  }
}

function ur() {
  try {
    Gn()
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
      if ((r.f & (ne | B)) === 0 && Me(r) && (H = new Set, Te(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && wn(r), (H == null ? void 0 : H.size) > 0)) {
        se.clear();
        for (const s of H) {
          if ((s.f & (ne | B)) !== 0) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null;) H.has(f) && (H.delete(f), a.push(f)), f = f.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const i = a[o];
            (i.f & (ne | B)) === 0 && Te(i)
          }
        }
        H.clear()
      }
    }
    H = null
  }
}

function Zt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & T) !== 0 ? Zt(s, t, n, r) : (a & (ht | W)) !== 0 && (a & x) === 0 && Qt(s, t, r) && (E(s, x), z(s))
    }
}

function Jt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & T) !== 0 ? Jt(n, t) : (r & st) !== 0 && (E(n, x), t.add(n))
    }
}

function Qt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ie.call(t, s)) return !0;
      if ((s.f & T) !== 0 && Qt(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function z(e) {
  var t = Je = e,
    n = t.b;
  if (n != null && n.is_pending && (e.f & (Ce | Ve | pt)) !== 0 && (e.f & ae) === 0) {
    n.defer_effect(e);
    return
  }
  for (; t.parent !== null;) {
    t = t.parent;
    var r = t.f;
    if (it && t === y && (r & W) !== 0 && (r & Bt) === 0 && (r & ae) !== 0) return;
    if ((r & (Ae | $)) !== 0) {
      if ((r & b) === 0) return;
      t.f ^= b
    }
  }
  R.push(t)
}

function en(e, t) {
  if (!((e.f & $) !== 0 && (e.f & b) !== 0)) {
    (e.f & x) !== 0 ? t.d.push(e) : (e.f & q) !== 0 && t.m.push(e), E(e, b);
    for (var n = e.first; n !== null;) en(n, t), n = n.next
  }
}

function Ns(e) {
  Vn(), d !== null && Kn();
  var t = me.ensure();
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
      ce.has(t) || zn(), n = !0, t.is_fork = !1;
      for (var [f, o] of t.current) f.v = o, f.wv = Xe();
      ut(() => {
        var i = new Set;
        for (var l of t.current.keys()) Jt(l, i);
        wr(i), fn()
      }), t.revive(), await r
    },
    discard: () => {
      for (var f of t.current.keys()) f.wv = Xe();
      !n && ce.has(t) && (ce.delete(t), t.discard())
    }
  }
}

function tn(e, t, n, r) {
  const s = Be() ? bt : vr;
  var a = e.filter(u => !u.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return
  }
  var f = y,
    o = cr(),
    i = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map(u => u.promise)) : null;

  function l(u) {
    o();
    try {
      r(u)
    } catch (_) {
      (f.f & ne) === 0 && Ke(_, f)
    }
    _t()
  }
  if (n.length === 0) {
    i.then(() => l(t.map(s)));
    return
  }

  function c() {
    o(), Promise.all(n.map(u => _r(u))).then(u => l([...t.map(s), ...u])).catch(u => Ke(u, f))
  }
  i ? i.then(c) : c()
}

function cr() {
  var e = y,
    t = v,
    n = g,
    r = d;
  return function(a = !0) {
    fe(e), U(t), Ge(n), a && (r == null || r.activate())
  }
}

function _t(e = !0) {
  fe(null), U(null), Ge(null), e && (d == null || d.deactivate())
}

function nn() {
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
  return y !== null && (y.f |= qe), {
    ctx: g,
    deps: null,
    effects: null,
    equals: Gt,
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
  y === null && Yn();
  var s = void 0,
    a = At(k),
    f = !v,
    o = new Map;
  return Tr(() => {
    var _;
    var i = Yt();
    s = i.promise;
    try {
      Promise.resolve(e()).then(i.resolve, i.reject).finally(_t)
    } catch (m) {
      i.reject(m), _t()
    }
    var l = d;
    if (f) {
      var c = nn();
      (_ = o.get(l)) == null || _.reject(le), o.delete(l), o.set(l, i)
    }
    const u = (m, h = void 0) => {
      if (l.activate(), h) h !== le && (a.f |= re, vt(a, h));
      else {
        (a.f & re) !== 0 && (a.f ^= re), vt(a, m);
        for (const [M, S] of o) {
          if (o.delete(M), M === l) break;
          S.reject(le)
        }
      }
      c && c()
    };
    i.promise.then(u, m => u(null, m || "unknown"))
  }), St(() => {
    for (const i of o.values()) i.reject(le)
  }), new Promise(i => {
    function l(c) {
      function u() {
        c === s ? i(a) : l(s)
      }
      c.then(u, u)
    }
    l(s)
  })
}

function Rs(e) {
  const t = bt(e);
  return gn(t), t
}

function vr(e) {
  const t = bt(e);
  return t.equals = zt, t
}

function dr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Ee(t[n])
  }
}

function pr(e) {
  for (var t = e.parent; t !== null;) {
    if ((t.f & T) === 0) return (t.f & ne) === 0 ? t : null;
    t = t.parent
  }
  return null
}

function Tt(e) {
  var t, n = y;
  fe(pr(e));
  try {
    e.f &= ~we, dr(e), t = Tn(e)
  } finally {
    fe(n)
  }
  return t
}

function rn(e) {
  var t = Tt(e);
  if (!e.equals(t) && (e.wv = Xe(), (!(d != null && d.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    E(e, b);
    return
  }
  be || (A !== null ? (vn() || d != null && d.is_fork) && A.set(e, t) : Et(e))
}

function hr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(le), r.teardown = Fn, r.ac = null, je(r, 0), kt(r))
}

function sn(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && Te(t)
}
let We = new Set;
const se = new Map;

function wr(e) {
  We = e
}
let an = !1;

function At(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: Gt,
    rv: 0,
    wv: 0
  };
  return n
}

function Q(e, t) {
  const n = At(e);
  return gn(n), n
}

function Os(e, t = !1, n = !0) {
  var s;
  const r = At(e);
  return t || (r.equals = zt), Ze && n && g !== null && g.l !== null && ((s = g.l).s ?? (s.s = [])).push(r), r
}

function Is(e, t) {
  return G(e, kn(() => te(e))), t
}

function G(e, t, n = !1) {
  v !== null && (!V || (v.f & st) !== 0) && Be() && (v.f & (T | W | ht | st)) !== 0 && (L === null || !Ie.call(L, e)) && Zn();
  let r = n ? Pe(t) : t;
  return vt(e, r)
}

function vt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    be ? se.set(e, t) : se.set(e, n), e.v = t;
    var r = me.ensure();
    if (r.capture(e, n), (e.f & T) !== 0) {
      const s = e;
      (e.f & x) !== 0 && Tt(s), Et(s)
    }
    e.wv = Xe(), on(e, x), Be() && y !== null && (y.f & b) !== 0 && (y.f & ($ | Ae)) === 0 && (D === null ? xr([e]) : D.push(e)), !r.is_fork && We.size > 0 && !an && fn()
  }
  return t
}

function fn() {
  an = !1;
  for (const e of We)(e.f & b) !== 0 && E(e, q), Me(e) && Te(e);
  We.clear()
}

function Cs(e, t = 1) {
  var n = te(e),
    r = t === 1 ? n++ : n--;
  return G(e, n), r
}

function nt(e) {
  G(e, e.v + 1)
}

function on(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Be(), s = n.length, a = 0; a < s; a++) {
      var f = n[a],
        o = f.f;
      if (!(!r && f === y)) {
        var i = (o & x) === 0;
        if (i && E(f, t), (o & T) !== 0) {
          var l = f;
          A == null || A.delete(l), (o & we) === 0 && (o & P && (f.f |= we), on(l, q))
        } else i && ((o & W) !== 0 && H !== null && H.add(f), z(f))
      }
    }
}

function Pe(e) {
  if (typeof e != "object" || e === null || pe in e) return e;
  const t = qt(e);
  if (t !== Pn && t !== Ln) return e;
  var n = new Map,
    r = In(e),
    s = Q(0),
    a = he,
    f = o => {
      if (he === a) return o();
      var i = v,
        l = he;
      U(null), Ft(a);
      var c = o();
      return U(i), Ft(l), c
    };
  return r && n.set("length", Q(e.length)), new Proxy(e, {
    defineProperty(o, i, l) {
      (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Wn();
      var c = n.get(i);
      return c === void 0 ? f(() => {
        var u = Q(l.value);
        return n.set(i, u), u
      }) : G(c, l.value, !0), !0
    },
    deleteProperty(o, i) {
      var l = n.get(i);
      if (l === void 0) {
        if (i in o) {
          const c = f(() => Q(k));
          n.set(i, c), nt(s)
        }
      } else G(l, k), nt(s);
      return !0
    },
    get(o, i, l) {
      var m;
      if (i === pe) return e;
      var c = n.get(i),
        u = i in o;
      if (c === void 0 && (!u || (m = Le(o, i)) != null && m.writable) && (c = f(() => {
          var h = Pe(u ? o[i] : k),
            M = Q(h);
          return M
        }), n.set(i, c)), c !== void 0) {
        var _ = te(c);
        return _ === k ? void 0 : _
      }
      return Reflect.get(o, i, l)
    },
    getOwnPropertyDescriptor(o, i) {
      var l = Reflect.getOwnPropertyDescriptor(o, i);
      if (l && "value" in l) {
        var c = n.get(i);
        c && (l.value = te(c))
      } else if (l === void 0) {
        var u = n.get(i),
          _ = u == null ? void 0 : u.v;
        if (u !== void 0 && _ !== k) return {
          enumerable: !0,
          configurable: !0,
          value: _,
          writable: !0
        }
      }
      return l
    },
    has(o, i) {
      var _;
      if (i === pe) return !0;
      var l = n.get(i),
        c = l !== void 0 && l.v !== k || Reflect.has(o, i);
      if (l !== void 0 || y !== null && (!c || (_ = Le(o, i)) != null && _.writable)) {
        l === void 0 && (l = f(() => {
          var m = c ? Pe(o[i]) : k,
            h = Q(m);
          return h
        }), n.set(i, l));
        var u = te(l);
        if (u === k) return !1
      }
      return c
    },
    set(o, i, l, c) {
      var Nt;
      var u = n.get(i),
        _ = i in o;
      if (r && i === "length")
        for (var m = l; m < u.v; m += 1) {
          var h = n.get(m + "");
          h !== void 0 ? G(h, k) : m in o && (h = f(() => Q(k)), n.set(m + "", h))
        }
      if (u === void 0)(!_ || (Nt = Le(o, i)) != null && Nt.writable) && (u = f(() => Q(void 0)), G(u, Pe(l)), n.set(i, u));
      else {
        _ = u.v !== k;
        var M = f(() => Pe(l));
        G(u, M)
      }
      var S = Reflect.getOwnPropertyDescriptor(o, i);
      if (S != null && S.set && S.set.call(c, l), !_) {
        if (r && typeof i == "string") {
          var De = n.get("length"),
            X = Number(i);
          Number.isInteger(X) && X >= De.v && G(De, X + 1)
        }
        nt(s)
      }
      return !0
    },
    ownKeys(o) {
      te(s);
      var i = Reflect.ownKeys(o).filter(u => {
        var _ = n.get(u);
        return _ === void 0 || _.v !== k
      });
      for (var [l, c] of n) c.v !== k && !(l in o) && i.push(l);
      return i
    },
    setPrototypeOf() {
      Xn()
    }
  })
}

function Mt(e) {
  try {
    if (e !== null && typeof e == "object" && pe in e) return e[pe]
  } catch {}
  return e
}

function Ms(e, t) {
  return Object.is(Mt(e), Mt(t))
}
var Dt, yr, ln, un, cn;

function Ds() {
  if (Dt === void 0) {
    Dt = window, yr = document, ln = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    un = Le(t, "firstChild").get, cn = Le(t, "nextSibling").get, Ot(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ot(n) && (n.__t = void 0)
  }
}

function ge(e = "") {
  return document.createTextNode(e)
}

function ie(e) {
  return un.call(e)
}

function oe(e) {
  return cn.call(e)
}

function Ps(e, t) {
  if (!N) return ie(e);
  var n = ie(w);
  if (n === null) n = w.appendChild(ge());
  else if (t && n.nodeType !== Ye) {
    var r = ge();
    return n == null || n.before(r), ye(r), r
  }
  return t && Qe(n), ye(n), n
}

function Ls(e, t = !1) {
  if (!N) {
    var n = ie(e);
    return n instanceof Comment && n.data === "" ? oe(n) : n
  }
  if (t) {
    if ((w == null ? void 0 : w.nodeType) !== Ye) {
      var r = ge();
      return w == null || w.before(r), ye(r), r
    }
    Qe(w)
  }
  return w
}

function Fs(e, t = 1, n = !1) {
  let r = N ? w : e;
  for (var s; t--;) s = r, r = oe(r);
  if (!N) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ye) {
      var a = ge();
      return r === null ? s == null || s.after(a) : r.before(a), ye(a), a
    }
    Qe(r)
  }
  return ye(r), r
}

function mr(e) {
  e.textContent = ""
}

function js() {
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

function Hs(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ze(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function Vs(e) {
  N && ie(e) !== null && mr(e)
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

function qs(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  St(() => {
    for (var a of t) e.removeEventListener(a, n)
  })
}

function et(e) {
  var t = v,
    n = y;
  U(null), fe(null);
  try {
    return e()
  } finally {
    U(t), fe(n)
  }
}

function Ys(e, t, n, r = n) {
  e.addEventListener(t, () => et(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0)
  } : e.__on_r = () => r(!0), Er()
}

function _n(e) {
  y === null && (v === null && $n(), Un()), be && Bn()
}

function br(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function F(e, t, n) {
  var r = y;
  r !== null && (r.f & B) !== 0 && (e |= B);
  var s = {
    ctx: g,
    deps: null,
    nodes: null,
    f: e | x | P,
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
    Te(s)
  } catch (o) {
    throw Ee(s), o
  } else t !== null && z(s);
  var a = s;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && (a.f & qe) === 0 && (a = a.first, (e & W) !== 0 && (e & $e) !== 0 && a !== null && (a.f |= $e)), a !== null && (a.parent = r, r !== null && br(a, r), v !== null && (v.f & T) !== 0 && (e & Ae) === 0)) {
    var f = v;
    (f.effects ?? (f.effects = [])).push(a)
  }
  return s
}

function vn() {
  return v !== null && !V
}

function St(e) {
  const t = F(Ve, null, !1);
  return E(t, b), t.teardown = e, t
}

function Bs(e) {
  _n();
  var t = y.f,
    n = !v && (t & $) !== 0 && (t & ae) === 0;
  if (n) {
    var r = g;
    (r.e ?? (r.e = [])).push(e)
  } else return dn(e)
}

function dn(e) {
  return F(Ce | Ut, e, !1)
}

function Us(e) {
  return _n(), F(Ve | Ut, e, !0)
}

function $s(e) {
  me.ensure();
  const t = F(Ae | qe, e, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? kr(t, () => {
      Ee(t), r(void 0)
    }) : (Ee(t), r(void 0))
  })
}

function Gs(e) {
  return F(Ce, e, !1)
}

function zs(e, t) {
  var n = g,
    r = {
      effect: null,
      ran: !1,
      deps: e
    };
  n.l.$.push(r), r.effect = pn(() => {
    e(), !r.ran && (r.ran = !0, kn(t))
  })
}

function Ks() {
  var e = g;
  pn(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      (n.f & b) !== 0 && n.deps !== null && E(n, q), Me(n) && Te(n), t.ran = !1
    }
  })
}

function Tr(e) {
  return F(ht | qe, e, !0)
}

function pn(e, t = 0) {
  return F(Ve | t, e, !0)
}

function Ws(e, t = [], n = [], r = []) {
  tn(r, t, n, s => {
    F(Ve, () => e(...s.map(te)), !0)
  })
}

function Xs(e, t = [], n = [], r = []) {
  if (n.length > 0 || r.length > 0) var s = nn();
  tn(r, t, n, a => {
    F(Ce, () => e(...a.map(te)), !1), s && s()
  })
}

function Zs(e, t = 0) {
  var n = F(W | t, e, !0);
  return n
}

function Js(e, t = 0) {
  var n = F(pt | t, e, !0);
  return n
}

function Qs(e) {
  return F($ | qe, e, !0)
}

function hn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = be,
      r = v;
    Lt(!0), U(null);
    try {
      t.call(null)
    } finally {
      Lt(n), U(r)
    }
  }
}

function kt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && et(() => {
      s.abort(le)
    });
    var r = n.next;
    (n.f & Ae) !== 0 ? n.parent = null : Ee(n, t), n = r
  }
}

function Ar(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & $) === 0 && Ee(t), t = n
  }
}

function Ee(e, t = !0) {
  var n = !1;
  (t || (e.f & Bt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Sr(e.nodes.start, e.nodes.end), n = !0), kt(e, t && !n), je(e, 0), E(e, ne);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r) a.stop();
  hn(e);
  var s = e.parent;
  s !== null && s.first !== null && wn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
}

function Sr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : oe(e);
    e.remove(), e = n
  }
}

function wn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function kr(e, t, n = !0) {
  var r = [];
  yn(e, r, !0);
  var s = () => {
      n && Ee(e), t && t()
    },
    a = r.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var o of r) o.out(f)
  } else s()
}

function yn(e, t, n) {
  if ((e.f & B) === 0) {
    e.f ^= B;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)(o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null;) {
      var a = s.next,
        f = (s.f & $e) !== 0 || (s.f & $) !== 0 && (e.f & W) !== 0;
      yn(s, t, f ? n : !1), s = a
    }
  }
}

function ea(e) {
  mn(e, !0)
}

function mn(e, t) {
  if ((e.f & B) !== 0) {
    e.f ^= B, (e.f & b) === 0 && (E(e, x), z(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & $e) !== 0 || (n.f & $) !== 0;
      mn(n, s ? t : !1), n = r
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)(f.is_global || t) && f.in()
  }
}

function ta(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : oe(n);
      t.append(n), n = s
    }
}
let Ue = !1,
  be = !1;

function Lt(e) {
  be = e
}
let v = null,
  V = !1;

function U(e) {
  v = e
}
let y = null;

function fe(e) {
  y = e
}
let L = null;

function gn(e) {
  v !== null && (L === null ? L = [e] : L.push(e))
}
let O = null,
  I = 0,
  D = null;

function xr(e) {
  D = e
}
let En = 1,
  _e = 0,
  he = _e;

function Ft(e) {
  he = e
}

function Xe() {
  return ++En
}

function Me(e) {
  var t = e.f;
  if ((t & x) !== 0) return !0;
  if (t & T && (e.f &= ~we), (t & q) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (Me(a) && rn(a), a.wv > e.wv) return !0
    }(t & P) !== 0 && A === null && E(e, b)
  }
  return !1
}

function bn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(L !== null && Ie.call(L, e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & T) !== 0 ? bn(a, t, !1) : t === a && (n ? E(a, x) : (a.f & b) !== 0 && E(a, q), z(a))
    }
}

function Tn(e) {
  var M;
  var t = O,
    n = I,
    r = D,
    s = v,
    a = L,
    f = g,
    o = V,
    i = he,
    l = e.f;
  O = null, I = 0, D = null, v = (l & ($ | Ae)) === 0 ? e : null, L = null, Ge(e.ctx), V = !1, he = ++_e, e.ac !== null && (et(() => {
    e.ac.abort(le)
  }), e.ac = null);
  try {
    e.f |= at;
    var c = e.fn,
      u = c();
    e.f |= ae;
    var _ = e.deps,
      m = d == null ? void 0 : d.is_fork;
    if (O !== null) {
      var h;
      if (m || je(e, I), _ !== null && I > 0)
        for (_.length = I + O.length, h = 0; h < O.length; h++) _[I + h] = O[h];
      else e.deps = _ = O;
      if (vn() && (e.f & P) !== 0)
        for (h = I; h < _.length; h++)((M = _[h]).reactions ?? (M.reactions = [])).push(e)
    } else !m && _ !== null && I < _.length && (je(e, I), _.length = I);
    if (Be() && D !== null && !V && _ !== null && (e.f & (T | q | x)) === 0)
      for (h = 0; h < D.length; h++) bn(D[h], e);
    if (s !== null && s !== e) {
      if (_e++, s.deps !== null)
        for (let S = 0; S < n; S += 1) s.deps[S].rv = _e;
      if (t !== null)
        for (const S of t) S.rv = _e;
      D !== null && (r === null ? r = D : r.push(...D))
    }
    return (e.f & re) !== 0 && (e.f ^= re), u
  } catch (S) {
    return fr(S)
  } finally {
    e.f ^= at, O = t, I = n, D = r, v = s, L = a, Ge(f), V = o, he = i
  }
}

function Nr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & T) !== 0 && (O === null || !Ie.call(O, t))) {
    var a = t;
    (a.f & P) !== 0 && (a.f ^= P, a.f &= ~we), Et(a), hr(a), je(a, 0)
  }
}

function je(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Nr(e, n[r])
}

function Te(e) {
  var t = e.f;
  if ((t & ne) === 0) {
    E(e, b);
    var n = y,
      r = Ue;
    y = e, Ue = !0;
    try {
      (t & (W | pt)) !== 0 ? Ar(e) : kt(e), hn(e);
      var s = Tn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = En;
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
  return me.ensure().settled()
}

function te(e) {
  var t = e.f,
    n = (t & T) !== 0;
  if (v !== null && !V) {
    var r = y !== null && (y.f & ne) !== 0;
    if (!r && (L === null || !Ie.call(L, e))) {
      var s = v.deps;
      if ((v.f & at) !== 0) e.rv < _e && (e.rv = _e, O === null && s !== null && s[I] === e ? I++ : O === null ? O = [e] : O.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [v] : Ie.call(a, v) || a.push(v)
      }
    }
  }
  if (be && se.has(e)) return se.get(e);
  if (n) {
    var f = e;
    if (be) {
      var o = f.v;
      return ((f.f & b) === 0 && f.reactions !== null || Sn(f)) && (o = Tt(f)), se.set(f, o), o
    }
    var i = (f.f & P) === 0 && !V && v !== null && (Ue || (v.f & P) !== 0),
      l = (f.f & ae) === 0;
    Me(f) && (i && (f.f |= P), rn(f)), i && !l && (sn(f), An(f))
  }
  if (A != null && A.has(e)) return A.get(e);
  if ((e.f & re) !== 0) throw e.v;
  return e.v
}

function An(e) {
  if (e.f |= P, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & T) !== 0 && (t.f & P) === 0 && (sn(t), An(t))
}

function Sn(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (se.has(t) || (t.f & T) !== 0 && Sn(t)) return !0;
  return !1
}

function kn(e) {
  var t = V;
  try {
    return V = !0, e()
  } finally {
    V = t
  }
}

function sa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (pe in e) dt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && pe in n && dt(n)
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
      const r = Dn(n);
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
const ve = Symbol("events"),
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

function xn(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Dr.call(t, a), !a.cancelBubble) return et(() => n == null ? void 0 : n.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ze(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function ua(e, t, n, r = {}) {
  var s = xn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function ca(e, t, n, r, s) {
  var a = {
      capture: r,
      passive: s
    },
    f = xn(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && St(() => {
    t.removeEventListener(e, f, a)
  })
}

function _a(e, t, n) {
  (t[ve] ?? (t[ve] = {}))[e] = n
}

function va(e) {
  for (var t = 0; t < e.length; t++) Cr.add(e[t]);
  for (var n of Mr) n(e)
}
let jt = null;

function Dr(e) {
  var S, De;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((S = e.composedPath) == null ? void 0 : S.call(e)) || [],
    a = s[0] || e.target;
  jt = e;
  var f = 0,
    o = jt === e && e[ve];
  if (o) {
    var i = s.indexOf(o);
    if (i !== -1 && (t === document || t === window)) {
      e[ve] = t;
      return
    }
    var l = s.indexOf(t);
    if (l === -1) return;
    i <= l && (f = i)
  }
  if (a = s[f] || e.target, a !== t) {
    Mn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n
      }
    });
    var c = v,
      u = y;
    U(null), fe(null);
    try {
      for (var _, m = []; a !== null;) {
        var h = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var M = (De = a[ve]) == null ? void 0 : De[r];
          M != null && (!a.disabled || e.target === a) && M.call(a, e)
        } catch (X) {
          _ ? m.push(X) : _ = X
        }
        if (e.cancelBubble || h === t || h === null) break;
        a = h
      }
      if (_) {
        for (let X of m) queueMicrotask(() => {
          throw X
        });
        throw _
      }
    } finally {
      e[ve] = t, delete e.currentTarget, U(c), fe(u)
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

function Nn(e) {
  var t = gr("template");
  return t.innerHTML = Pr(e.replaceAll("<!>", "<!---->")), t.content
}

function K(e, t) {
  var n = y;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function da(e, t) {
  var n = (t & Jn) !== 0,
    r = (t & Qn) !== 0,
    s, a = !e.startsWith("<!>");
  return () => {
    if (N) return K(w, null), w;
    s === void 0 && (s = Nn(a ? e : "<!>" + e), n || (s = ie(s)));
    var f = r || ln ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var o = ie(f),
        i = f.lastChild;
      K(o, i)
    } else K(f, f);
    return f
  }
}

function Lr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = `<${n}>${r?e:"<!>"+e}</${n}>`,
    a;
  return () => {
    if (N) return K(w, null), w;
    if (!a) {
      var f = Nn(s),
        o = ie(f);
      a = ie(o)
    }
    var i = a.cloneNode(!0);
    return K(i, i), i
  }
}

function pa(e, t) {
  return Lr(e, t, "svg")
}

function ha(e = "") {
  if (!N) {
    var t = ge(e + "");
    return K(t, t), t
  }
  var n = w;
  return n.nodeType !== Ye ? (n.before(n = ge()), ye(n)) : Qe(n), K(n, n), n
}

function wa() {
  if (N) return K(w, null), w;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = ge();
  return e.append(t, n), K(t, n), e
}

function ya(e, t) {
  if (N) {
    var n = y;
    ((n.f & ae) === 0 || n.nodes.end === null) && (n.nodes.end = w), $t();
    return
  }
  e !== null && e.before(t)
}

function ma() {
  var e, t;
  if (N && w && w.nodeType === wt && ((e = w.textContent) != null && e.startsWith("$"))) {
    const n = w.textContent.substring(1);
    return $t(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  yr as $, N as A, $t as B, Zs as C, Es as D, $e as E, gs as F, ye as G, ws as H, er as I, w as J, Gs as K, qn as L, g as M, Ze as N, ut as O, Ns as P, Ts as Q, Ss as R, As as S, ra as T, na as U, tr as V, pn as W, ze as X, pe as Y, d as Z, ea as _, ya as a, cs as a$, Ee as a0, kr as a1, ge as a2, Qs as a3, ta as a4, js as a5, bs as a6, Be as a7, es as a8, ie as a9, Ms as aA, St as aB, y as aC, Sr as aD, mt as aE, yt as aF, K as aG, gr as aH, _s as aI, vs as aJ, Dt as aK, Le as aL, Xr as aM, as as aN, be as aO, ne as aP, is as aQ, ss as aR, rs as aS, fs as aT, Ur as aU, Vr as aV, Fn as aW, Cs as aX, vn as aY, nt as aZ, Hn as a_, wt as aa, nr as ab, vt as ac, Br as ad, Kr as ae, vr as af, In as ag, Hr as ah, Jr as ai, ns as aj, Os as ak, At as al, Qr as am, B as an, $ as ao, ts as ap, mr as aq, oe as ar, Us as as, qr as at, jn as au, bt as av, Bt as aw, qe as ax, Ys as ay, It as az, xs as b, me as b0, E as b1, x as b2, z as b3, q as b4, lr as b5, fe as b6, U as b7, Ge as b8, fr as b9, Dn as bA, zr as bB, aa as bC, xn as bD, Hs as bE, fa as bF, k as bG, Er as bH, ia as bI, ua as bJ, ma as bK, Pn as bL, qs as bM, jr as bN, he as bO, zs as bP, Ks as bQ, Is as bR, Yr as bS, la as bT, v as ba, Ke as bb, Zr as bc, hs as bd, Ds as be, Wr as bf, $s as bg, Cr as bh, Mr as bi, Dr as bj, oa as bk, sr as bl, W as bm, ae as bn, us as bo, os as bp, ls as bq, et as br, Mn as bs, Js as bt, ps as bu, $r as bv, tn as bw, rr as bx, qt as by, ds as bz, da as c, Ps as d, Q as e, Ls as f, Pe as g, G as h, te as i, Xs as j, va as k, wa as l, _a as m, ms as n, ha as o, ks as p, Bs as q, ys as r, Fs as s, Ws as t, Rs as u, ca as v, sa as w, kn as x, Vs as y, pa as z
};