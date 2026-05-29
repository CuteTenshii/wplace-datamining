var xn = Object.defineProperty;
var Rt = e => {
  throw TypeError(e)
};
var Rn = (e, t, n) => t in e ? xn(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Ae = (e, t, n) => Rn(e, typeof t != "symbol" ? t + "" : t, n),
  tt = (e, t, n) => t.has(e) || Rt("Cannot " + n);
var p = (e, t, n) => (tt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  j = (e, t, n) => t.has(e) ? Rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  Z = (e, t, n, r) => (tt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  J = (e, t, n) => (tt(e, t, "access private method"), n);
var On = Array.isArray,
  In = Array.prototype.indexOf,
  Oe = Array.prototype.includes,
  Lr = Array.from,
  Cn = Object.defineProperty,
  Le = Object.getOwnPropertyDescriptor,
  Mn = Object.getOwnPropertyDescriptors,
  Dn = Object.prototype,
  Pn = Array.prototype,
  qt = Object.getPrototypeOf,
  Ot = Object.isExtensible;

function Fr(e) {
  return typeof e == "function"
}
const Ln = () => {};

function jr(e) {
  return e()
}

function Fn(e) {
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

function Hr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const b = 2,
  Ce = 4,
  Ve = 8,
  pt = 1 << 24,
  W = 16,
  z = 32,
  le = 64,
  jn = 128,
  L = 512,
  A = 1024,
  N = 2048,
  G = 4096,
  B = 8192,
  ne = 16384,
  ae = 32768,
  Ge = 65536,
  st = 1 << 17,
  Bt = 1 << 18,
  Me = 1 << 19,
  Ut = 1 << 20,
  Vr = 1 << 25,
  ge = 65536,
  at = 1 << 21,
  ht = 1 << 22,
  re = 1 << 23,
  ye = Symbol("$state"),
  qr = Symbol("legacy props"),
  Yr = Symbol(""),
  ce = new class extends Error {
    constructor() {
      super(...arguments);
      Ae(this, "name", "StaleReactionError");
      Ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  };
var Ht;
const Ur = !!((Ht = globalThis.document) != null && Ht.contentType) && globalThis.document.contentType.includes("xml"),
  qe = 3,
  wt = 8;

function Hn(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required")
}

function Vn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function qn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function Gr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate")
}

function Yn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Bn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Un(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function Gn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function $n() {
  throw new Error("https://svelte.dev/e/fork_discarded")
}

function zn() {
  throw new Error("https://svelte.dev/e/fork_timing")
}

function $r() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function zr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Kn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Wn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Xn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function Kr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const Wr = 1,
  Xr = 2,
  Zr = 4,
  Jr = 8,
  Qr = 16,
  es = 1,
  ts = 2,
  ns = 4,
  rs = 8,
  ss = 16,
  as = 1,
  is = 2,
  fs = 4,
  Gt = 1,
  Zn = 2,
  Jn = "[",
  Qn = "[!",
  os = "[?",
  er = "]",
  yt = {},
  k = Symbol(),
  tr = "http://www.w3.org/1999/xhtml",
  ls = "http://www.w3.org/2000/svg",
  us = "http://www.w3.org/1998/Math/MathML",
  cs = "@attach";

function mt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function _s() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function vs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let x = !1;

function ds(e) {
  x = e
}
let w;

function Ee(e) {
  if (e === null) throw mt(), yt;
  return w = e
}

function $t() {
  return Ee(ue(w))
}

function ps(e) {
  if (x) {
    if (ue(w) !== null) throw mt(), yt;
    w = e
  }
}

function hs(e = 1) {
  if (x) {
    for (var t = e, n = w; t--;) n = ue(n);
    w = n
  }
}

function ws(e = !0) {
  for (var t = 0, n = w;;) {
    if (n.nodeType === wt) {
      var r = n.data;
      if (r === er) {
        if (t === 0) return n;
        t -= 1
      } else(r === Jn || r === Qn || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var s = ue(n);
    e && n.remove(), n = s
  }
}

function ys(e) {
  if (!e || e.nodeType !== wt) throw mt(), yt;
  return e.data
}

function zt(e) {
  return e === this.v
}

function nr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Kt(e) {
  return !nr(e, this.v)
}
let Ze = !1;

function ms() {
  Ze = !0
}
let E = null;

function $e(e) {
  E = e
}

function gs(e) {
  return gt().get(e)
}

function Es(e, t) {
  return gt().set(e, t), t
}

function bs(e) {
  return gt().has(e)
}

function Ts(e, t = !1, n) {
  E = {
    p: E,
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

function As(e) {
  var t = E,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) pn(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, E = t.p, e ?? {}
}

function Ye() {
  return !Ze || E !== null && E.l === null
}

function gt(e) {
  return E === null && Vn(), E.c ?? (E.c = new Map(rr(E) || void 0))
}

function rr(e) {
  let t = e.p;
  for (; t !== null;) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p
  }
  return null
}
let _e = [];

function Wt() {
  var e = _e;
  _e = [], Fn(e)
}

function ze(e) {
  if (_e.length === 0 && !Fe) {
    var t = _e;
    queueMicrotask(() => {
      t === _e && Wt()
    })
  }
  _e.push(e)
}

function sr() {
  for (; _e.length > 0;) Wt()
}

function ar(e) {
  var t = y;
  if (t === null) return v.f |= re, e;
  if ((t.f & ae) === 0 && (t.f & Ce) === 0) throw e;
  Ke(e, t)
}

function Ke(e, t) {
  for (; t !== null;) {
    if ((t.f & jn) !== 0) {
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
const ir = -7169;

function g(e, t) {
  e.f = e.f & ir | t
}

function Et(e) {
  (e.f & L) !== 0 || e.deps === null ? g(e, A) : g(e, G)
}

function Xt(e) {
  if (e !== null)
    for (const t of e)(t.f & b) === 0 || (t.f & ge) === 0 || (t.f ^= ge, Xt(t.deps))
}

function fr(e, t, n) {
  (e.f & N) !== 0 ? t.add(e) : (e.f & G) !== 0 && n.add(e), Xt(e.deps), g(e, A)
}
const ve = new Set;
let d = null,
  It = null,
  T = null,
  R = [],
  Je = null,
  it = !1,
  Fe = !1;
var Se, ke, we, Ne, He, xe, te, Y, Re, C, ft, ot, lt, Zt;
const Nt = class Nt {
  constructor() {
    j(this, C);
    Ae(this, "current", new Map);
    Ae(this, "previous", new Map);
    j(this, Se, new Set);
    j(this, ke, new Set);
    j(this, we, 0);
    j(this, Ne, 0);
    j(this, He, null);
    j(this, xe, new Set);
    j(this, te, new Set);
    j(this, Y, new Map);
    Ae(this, "is_fork", !1);
    j(this, Re, !1)
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
      for (var r of n.d) g(r, N), K(r);
      for (r of n.m) g(r, G), K(r)
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
      for (const [a, f] of p(this, Y)) tn(a, f)
    } else {
      for (const a of p(this, Se)) a();
      p(this, Se).clear(), p(this, we) === 0 && J(this, C, Zt).call(this), It = this, d = null, Ct(r), Ct(n), p(this, xe).clear(), p(this, te).clear(), It = null, (s = p(this, He)) == null || s.resolve()
    }
    T = null
  }
  capture(t, n) {
    n !== k && !this.previous.has(t) && this.previous.set(t, n), (t.f & re) === 0 && (this.current.set(t, t.v), T == null || T.set(t, t.v))
  }
  activate() {
    d = this, this.apply()
  }
  deactivate() {
    d === this && (d = null, T = null)
  }
  flush() {
    if (this.activate(), R.length > 0) {
      if (ct(), d !== null && d !== this) return
    } else p(this, we) === 0 && this.process([]);
    this.deactivate()
  }
  discard() {
    for (const t of p(this, ke)) t(this);
    p(this, ke).clear()
  }
  increment(t) {
    Z(this, we, p(this, we) + 1), t && Z(this, Ne, p(this, Ne) + 1)
  }
  decrement(t) {
    Z(this, we, p(this, we) - 1), t && Z(this, Ne, p(this, Ne) - 1), !p(this, Re) && (Z(this, Re, !0), ze(() => {
      Z(this, Re, !1), J(this, C, ft).call(this) ? R.length > 0 && this.flush() : this.revive()
    }))
  }
  revive() {
    for (const t of p(this, xe)) p(this, te).delete(t), g(t, N), K(t);
    for (const t of p(this, te)) g(t, G), K(t);
    this.flush()
  }
  oncommit(t) {
    p(this, Se).add(t)
  }
  ondiscard(t) {
    p(this, ke).add(t)
  }
  settled() {
    return (p(this, He) ?? Z(this, He, Yt())).promise
  }
  static ensure() {
    if (d === null) {
      const t = d = new Nt;
      ve.add(d), Fe || ze(() => {
        d === t && t.flush()
      })
    }
    return d
  }
  apply() {}
};
Se = new WeakMap, ke = new WeakMap, we = new WeakMap, Ne = new WeakMap, He = new WeakMap, xe = new WeakMap, te = new WeakMap, Y = new WeakMap, Re = new WeakMap, C = new WeakSet, ft = function() {
  return this.is_fork || p(this, Ne) > 0
}, ot = function(t, n, r) {
  t.f ^= A;
  for (var s = t.first; s !== null;) {
    var a = s.f,
      f = (a & (z | le)) !== 0,
      l = f && (a & A) !== 0,
      i = l || (a & B) !== 0 || p(this, Y).has(s);
    if (!i && s.fn !== null) {
      f ? s.f ^= A : (a & Ce) !== 0 ? n.push(s) : Be(s) && ((a & W) !== 0 && p(this, te).add(s), Ie(s));
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
  for (var n = 0; n < t.length; n += 1) fr(t[n], p(this, xe), p(this, te))
}, Zt = function() {
  var s;
  if (ve.size > 1) {
    this.previous.clear();
    var t = T,
      n = !0;
    for (const a of ve) {
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
          for (const c of R) J(s = a, C, ot).call(s, c, [], []);
          a.deactivate()
        }
        R = r
      }
    }
    d = null, T = t
  }
  p(this, Y).clear(), ve.delete(this)
};
let ie = Nt;

function ut(e) {
  var t = Fe;
  Fe = !0;
  try {
    var n;
    for (e && (d !== null && ct(), n = e());;) {
      if (sr(), R.length === 0 && (d == null || d.flush(), R.length === 0)) return Je = null, n;
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
      var n = ie.ensure();
      if (t++ > 1e3) {
        var r, s;
        or()
      }
      n.process(R), se.clear()
    }
  } finally {
    R = [], it = !1, Je = null
  }
}

function or() {
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
      if ((r.f & (ne | B)) === 0 && Be(r) && (H = new Set, Ie(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && wn(r), (H == null ? void 0 : H.size) > 0)) {
        se.clear();
        for (const s of H) {
          if ((s.f & (ne | B)) !== 0) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null;) H.has(f) && (H.delete(f), a.push(f)), f = f.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const i = a[l];
            (i.f & (ne | B)) === 0 && Ie(i)
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
      (a & b) !== 0 ? Jt(s, t, n, r) : (a & (ht | W)) !== 0 && (a & N) === 0 && en(s, t, r) && (g(s, N), K(s))
    }
}

function Qt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & b) !== 0 ? Qt(n, t) : (r & st) !== 0 && (g(n, N), t.add(n))
    }
}

function en(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Oe.call(t, s)) return !0;
      if ((s.f & b) !== 0 && en(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function K(e) {
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
    if ((r & (le | z)) !== 0) {
      if ((r & A) === 0) return;
      t.f ^= A
    }
  }
  R.push(t)
}

function tn(e, t) {
  if (!((e.f & z) !== 0 && (e.f & A) !== 0)) {
    (e.f & N) !== 0 ? t.d.push(e) : (e.f & G) !== 0 && t.m.push(e), g(e, A);
    for (var n = e.first; n !== null;) tn(n, t), n = n.next
  }
}

function Ss(e) {
  Hn(), d !== null && zn();
  var t = ie.ensure();
  t.is_fork = !0, T = new Map;
  var n = !1,
    r = t.settled();
  ut(e);
  for (var [s, a] of t.previous) s.v = a;
  for (s of t.current.keys())(s.f & b) !== 0 && g(s, N);
  return {
    commit: async () => {
      if (n) {
        await r;
        return
      }
      ve.has(t) || $n(), n = !0, t.is_fork = !1;
      for (var [f, l] of t.current) f.v = l, f.wv = Xe();
      ut(() => {
        var i = new Set;
        for (var o of t.current.keys()) Qt(o, i);
        pr(i), on()
      }), t.revive(), await r
    },
    discard: () => {
      for (var f of t.current.keys()) f.wv = Xe();
      !n && ve.has(t) && (ve.delete(t), t.discard())
    }
  }
}

function nn(e, t, n, r) {
  const s = Ye() ? bt : cr;
  var a = e.filter(u => !u.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return
  }
  var f = y,
    l = lr(),
    i = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map(u => u.promise)) : null;

  function o(u) {
    l();
    try {
      r(u)
    } catch (_) {
      (f.f & ne) === 0 && Ke(_, f)
    }
    _t()
  }
  if (n.length === 0) {
    i.then(() => o(t.map(s)));
    return
  }

  function c() {
    l(), Promise.all(n.map(u => ur(u))).then(u => o([...t.map(s), ...u])).catch(u => Ke(u, f))
  }
  i ? i.then(c) : c()
}

function lr() {
  var e = y,
    t = v,
    n = E,
    r = d;
  return function(a = !0) {
    oe(e), $(t), $e(n), a && (r == null || r.activate())
  }
}

function _t(e = !0) {
  oe(null), $(null), $e(null), e && (d == null || d.deactivate())
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
  var t = b | N,
    n = v !== null && (v.f & b) !== 0 ? v : null;
  return y !== null && (y.f |= Me), {
    ctx: E,
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

function ur(e, t, n) {
  y === null && qn();
  var s = void 0,
    a = At(k),
    f = !v,
    l = new Map;
  return Er(() => {
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
      (_ = l.get(o)) == null || _.reject(ce), l.delete(o), l.set(o, i)
    }
    const u = (m, h = void 0) => {
      if (o.activate(), h) h !== ce && (a.f |= re, vt(a, h));
      else {
        (a.f & re) !== 0 && (a.f ^= re), vt(a, m);
        for (const [D, S] of l) {
          if (l.delete(D), D === o) break;
          S.reject(ce)
        }
      }
      c && c()
    };
    i.promise.then(u, m => u(null, m || "unknown"))
  }), St(() => {
    for (const i of l.values()) i.reject(ce)
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

function ks(e) {
  const t = bt(e);
  return gn(t), t
}

function cr(e) {
  const t = bt(e);
  return t.equals = Kt, t
}

function _r(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) fe(t[n])
  }
}

function vr(e) {
  for (var t = e.parent; t !== null;) {
    if ((t.f & b) === 0) return (t.f & ne) === 0 ? t : null;
    t = t.parent
  }
  return null
}

function Tt(e) {
  var t, n = y;
  oe(vr(e));
  try {
    e.f &= ~ge, _r(e), t = Tn(e)
  } finally {
    oe(n)
  }
  return t
}

function sn(e) {
  var t = Tt(e);
  if (!e.equals(t) && (e.wv = Xe(), (!(d != null && d.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    g(e, A);
    return
  }
  Te || (T !== null ? (dn() || d != null && d.is_fork) && T.set(e, t) : Et(e))
}

function dr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(ce), r.teardown = Ln, r.ac = null, je(r, 0), kt(r))
}

function an(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && Ie(t)
}
let We = new Set;
const se = new Map;

function pr(e) {
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

function Q(e, t) {
  const n = At(e);
  return gn(n), n
}

function Ns(e, t = !1, n = !0) {
  var s;
  const r = At(e);
  return t || (r.equals = Kt), Ze && n && E !== null && E.l !== null && ((s = E.l).s ?? (s.s = [])).push(r), r
}

function ee(e, t, n = !1) {
  v !== null && (!q || (v.f & st) !== 0) && Ye() && (v.f & (b | W | ht | st)) !== 0 && (F === null || !Oe.call(F, e)) && Xn();
  let r = n ? Pe(t) : t;
  return vt(e, r)
}

function vt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Te ? se.set(e, t) : se.set(e, n), e.v = t;
    var r = ie.ensure();
    if (r.capture(e, n), (e.f & b) !== 0) {
      const s = e;
      (e.f & N) !== 0 && Tt(s), Et(s)
    }
    e.wv = Xe(), ln(e, N), Ye() && y !== null && (y.f & A) !== 0 && (y.f & (z | le)) === 0 && (P === null ? Sr([e]) : P.push(e)), !r.is_fork && We.size > 0 && !fn && on()
  }
  return t
}

function on() {
  fn = !1;
  for (const e of We)(e.f & A) !== 0 && g(e, G), Be(e) && Ie(e);
  We.clear()
}

function xs(e, t = 1) {
  var n = pe(e),
    r = t === 1 ? n++ : n--;
  return ee(e, n), r
}

function nt(e) {
  ee(e, e.v + 1)
}

function ln(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ye(), s = n.length, a = 0; a < s; a++) {
      var f = n[a],
        l = f.f;
      if (!(!r && f === y)) {
        var i = (l & N) === 0;
        if (i && g(f, t), (l & b) !== 0) {
          var o = f;
          T == null || T.delete(o), (l & ge) === 0 && (l & L && (f.f |= ge), ln(o, G))
        } else i && ((l & W) !== 0 && H !== null && H.add(f), K(f))
      }
    }
}

function Pe(e) {
  if (typeof e != "object" || e === null || ye in e) return e;
  const t = qt(e);
  if (t !== Dn && t !== Pn) return e;
  var n = new Map,
    r = On(e),
    s = Q(0),
    a = me,
    f = l => {
      if (me === a) return l();
      var i = v,
        o = me;
      $(null), Ft(a);
      var c = l();
      return $(i), Ft(o), c
    };
  return r && n.set("length", Q(e.length)), new Proxy(e, {
    defineProperty(l, i, o) {
      (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Kn();
      var c = n.get(i);
      return c === void 0 ? f(() => {
        var u = Q(o.value);
        return n.set(i, u), u
      }) : ee(c, o.value, !0), !0
    },
    deleteProperty(l, i) {
      var o = n.get(i);
      if (o === void 0) {
        if (i in l) {
          const c = f(() => Q(k));
          n.set(i, c), nt(s)
        }
      } else ee(o, k), nt(s);
      return !0
    },
    get(l, i, o) {
      var m;
      if (i === ye) return e;
      var c = n.get(i),
        u = i in l;
      if (c === void 0 && (!u || (m = Le(l, i)) != null && m.writable) && (c = f(() => {
          var h = Pe(u ? l[i] : k),
            D = Q(h);
          return D
        }), n.set(i, c)), c !== void 0) {
        var _ = pe(c);
        return _ === k ? void 0 : _
      }
      return Reflect.get(l, i, o)
    },
    getOwnPropertyDescriptor(l, i) {
      var o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o && "value" in o) {
        var c = n.get(i);
        c && (o.value = pe(c))
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
      if (o !== void 0 || y !== null && (!c || (_ = Le(l, i)) != null && _.writable)) {
        o === void 0 && (o = f(() => {
          var m = c ? Pe(l[i]) : k,
            h = Q(m);
          return h
        }), n.set(i, o));
        var u = pe(o);
        if (u === k) return !1
      }
      return c
    },
    set(l, i, o, c) {
      var xt;
      var u = n.get(i),
        _ = i in l;
      if (r && i === "length")
        for (var m = o; m < u.v; m += 1) {
          var h = n.get(m + "");
          h !== void 0 ? ee(h, k) : m in l && (h = f(() => Q(k)), n.set(m + "", h))
        }
      if (u === void 0)(!_ || (xt = Le(l, i)) != null && xt.writable) && (u = f(() => Q(void 0)), ee(u, Pe(o)), n.set(i, u));
      else {
        _ = u.v !== k;
        var D = f(() => Pe(o));
        ee(u, D)
      }
      var S = Reflect.getOwnPropertyDescriptor(l, i);
      if (S != null && S.set && S.set.call(c, o), !_) {
        if (r && typeof i == "string") {
          var De = n.get("length"),
            X = Number(i);
          Number.isInteger(X) && X >= De.v && ee(De, X + 1)
        }
        nt(s)
      }
      return !0
    },
    ownKeys(l) {
      pe(s);
      var i = Reflect.ownKeys(l).filter(u => {
        var _ = n.get(u);
        return _ === void 0 || _.v !== k
      });
      for (var [o, c] of n) c.v !== k && !(o in l) && i.push(o);
      return i
    },
    setPrototypeOf() {
      Wn()
    }
  })
}

function Mt(e) {
  try {
    if (e !== null && typeof e == "object" && ye in e) return e[ye]
  } catch {}
  return e
}

function Rs(e, t) {
  return Object.is(Mt(e), Mt(t))
}
var Dt, hr, un, cn, _n;

function Os() {
  if (Dt === void 0) {
    Dt = window, hr = document, un = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    cn = Le(t, "firstChild").get, _n = Le(t, "nextSibling").get, Ot(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ot(n) && (n.__t = void 0)
  }
}

function be(e = "") {
  return document.createTextNode(e)
}

function V(e) {
  return cn.call(e)
}

function ue(e) {
  return _n.call(e)
}

function Is(e, t) {
  if (!x) return V(e);
  var n = V(w);
  if (n === null) n = w.appendChild(be());
  else if (t && n.nodeType !== qe) {
    var r = be();
    return n == null || n.before(r), Ee(r), r
  }
  return t && Qe(n), Ee(n), n
}

function Cs(e, t = !1) {
  if (!x) {
    var n = V(e);
    return n instanceof Comment && n.data === "" ? ue(n) : n
  }
  if (t) {
    if ((w == null ? void 0 : w.nodeType) !== qe) {
      var r = be();
      return w == null || w.before(r), Ee(r), r
    }
    Qe(w)
  }
  return w
}

function Ms(e, t = 1, n = !1) {
  let r = x ? w : e;
  for (var s; t--;) s = r, r = ue(r);
  if (!x) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== qe) {
      var a = be();
      return r === null ? s == null || s.after(a) : r.before(a), Ee(a), a
    }
    Qe(r)
  }
  return Ee(r), r
}

function wr(e) {
  e.textContent = ""
}

function Ds() {
  return !1
}

function yr(e, t, n) {
  return document.createElementNS(t ?? tr, e, void 0)
}

function Qe(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === qe;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function Ps(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ze(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function Ls(e) {
  x && V(e) !== null && wr(e)
}
let Pt = !1;

function mr() {
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

function Fs(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  St(() => {
    for (var a of t) e.removeEventListener(a, n)
  })
}

function et(e) {
  var t = v,
    n = y;
  $(null), oe(null);
  try {
    return e()
  } finally {
    $(t), oe(n)
  }
}

function js(e, t, n, r = n) {
  e.addEventListener(t, () => et(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0)
  } : e.__on_r = () => r(!0), mr()
}

function vn(e) {
  y === null && (v === null && Un(), Bn()), Te && Yn()
}

function gr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function M(e, t, n) {
  var r = y;
  r !== null && (r.f & B) !== 0 && (e |= B);
  var s = {
    ctx: E,
    deps: null,
    nodes: null,
    f: e | N | L,
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
    Ie(s)
  } catch (l) {
    throw fe(s), l
  } else t !== null && K(s);
  var a = s;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && (a.f & Me) === 0 && (a = a.first, (e & W) !== 0 && (e & Ge) !== 0 && a !== null && (a.f |= Ge)), a !== null && (a.parent = r, r !== null && gr(a, r), v !== null && (v.f & b) !== 0 && (e & le) === 0)) {
    var f = v;
    (f.effects ?? (f.effects = [])).push(a)
  }
  return s
}

function dn() {
  return v !== null && !q
}

function St(e) {
  const t = M(Ve, null, !1);
  return g(t, A), t.teardown = e, t
}

function Hs(e) {
  vn();
  var t = y.f,
    n = !v && (t & z) !== 0 && (t & ae) === 0;
  if (n) {
    var r = E;
    (r.e ?? (r.e = [])).push(e)
  } else return pn(e)
}

function pn(e) {
  return M(Ce | Ut, e, !1)
}

function Vs(e) {
  return vn(), M(Ve | Ut, e, !0)
}

function qs(e) {
  ie.ensure();
  const t = M(le | Me, e, !0);
  return () => {
    fe(t)
  }
}

function Ys(e) {
  ie.ensure();
  const t = M(le | Me, e, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? Ar(t, () => {
      fe(t), r(void 0)
    }) : (fe(t), r(void 0))
  })
}

function Bs(e) {
  return M(Ce, e, !1)
}

function Er(e) {
  return M(ht | Me, e, !0)
}

function Us(e, t = 0) {
  return M(Ve | t, e, !0)
}

function Gs(e, t = [], n = [], r = []) {
  nn(r, t, n, s => {
    M(Ve, () => e(...s.map(pe)), !0)
  })
}

function $s(e, t = [], n = [], r = []) {
  if (n.length > 0 || r.length > 0) var s = rn();
  nn(r, t, n, a => {
    M(Ce, () => e(...a.map(pe)), !1), s && s()
  })
}

function zs(e, t = 0) {
  var n = M(W | t, e, !0);
  return n
}

function Ks(e, t = 0) {
  var n = M(pt | t, e, !0);
  return n
}

function Ws(e) {
  return M(z | Me, e, !0)
}

function hn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Te,
      r = v;
    Lt(!0), $(null);
    try {
      t.call(null)
    } finally {
      Lt(n), $(r)
    }
  }
}

function kt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && et(() => {
      s.abort(ce)
    });
    var r = n.next;
    (n.f & le) !== 0 ? n.parent = null : fe(n, t), n = r
  }
}

function br(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & z) === 0 && fe(t), t = n
  }
}

function fe(e, t = !0) {
  var n = !1;
  (t || (e.f & Bt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Tr(e.nodes.start, e.nodes.end), n = !0), kt(e, t && !n), je(e, 0), g(e, ne);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r) a.stop();
  hn(e);
  var s = e.parent;
  s !== null && s.first !== null && wn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
}

function Tr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : ue(e);
    e.remove(), e = n
  }
}

function wn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Ar(e, t, n = !0) {
  var r = [];
  yn(e, r, !0);
  var s = () => {
      n && fe(e), t && t()
    },
    a = r.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var l of r) l.out(f)
  } else s()
}

function yn(e, t, n) {
  if ((e.f & B) === 0) {
    e.f ^= B;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)(l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null;) {
      var a = s.next,
        f = (s.f & Ge) !== 0 || (s.f & z) !== 0 && (e.f & W) !== 0;
      yn(s, t, f ? n : !1), s = a
    }
  }
}

function Xs(e) {
  mn(e, !0)
}

function mn(e, t) {
  if ((e.f & B) !== 0) {
    e.f ^= B, (e.f & A) === 0 && (g(e, N), K(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & Ge) !== 0 || (n.f & z) !== 0;
      mn(n, s ? t : !1), n = r
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)(f.is_global || t) && f.in()
  }
}

function Zs(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : ue(n);
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

function $(e) {
  v = e
}
let y = null;

function oe(e) {
  y = e
}
let F = null;

function gn(e) {
  v !== null && (F === null ? F = [e] : F.push(e))
}
let O = null,
  I = 0,
  P = null;

function Sr(e) {
  P = e
}
let En = 1,
  de = 0,
  me = de;

function Ft(e) {
  me = e
}

function Xe() {
  return ++En
}

function Be(e) {
  var t = e.f;
  if ((t & N) !== 0) return !0;
  if (t & b && (e.f &= ~ge), (t & G) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (Be(a) && sn(a), a.wv > e.wv) return !0
    }(t & L) !== 0 && T === null && g(e, A)
  }
  return !1
}

function bn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(F !== null && Oe.call(F, e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & b) !== 0 ? bn(a, t, !1) : t === a && (n ? g(a, N) : (a.f & A) !== 0 && g(a, G), K(a))
    }
}

function Tn(e) {
  var D;
  var t = O,
    n = I,
    r = P,
    s = v,
    a = F,
    f = E,
    l = q,
    i = me,
    o = e.f;
  O = null, I = 0, P = null, v = (o & (z | le)) === 0 ? e : null, F = null, $e(e.ctx), q = !1, me = ++de, e.ac !== null && (et(() => {
    e.ac.abort(ce)
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
      if (dn() && (e.f & L) !== 0)
        for (h = I; h < _.length; h++)((D = _[h]).reactions ?? (D.reactions = [])).push(e)
    } else !m && _ !== null && I < _.length && (je(e, I), _.length = I);
    if (Ye() && P !== null && !q && _ !== null && (e.f & (b | G | N)) === 0)
      for (h = 0; h < P.length; h++) bn(P[h], e);
    if (s !== null && s !== e) {
      if (de++, s.deps !== null)
        for (let S = 0; S < n; S += 1) s.deps[S].rv = de;
      if (t !== null)
        for (const S of t) S.rv = de;
      P !== null && (r === null ? r = P : r.push(...P))
    }
    return (e.f & re) !== 0 && (e.f ^= re), u
  } catch (S) {
    return ar(S)
  } finally {
    e.f ^= at, O = t, I = n, P = r, v = s, F = a, $e(f), q = l, me = i
  }
}

function kr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = In.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & b) !== 0 && (O === null || !Oe.call(O, t))) {
    var a = t;
    (a.f & L) !== 0 && (a.f ^= L, a.f &= ~ge), Et(a), dr(a), je(a, 0)
  }
}

function je(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) kr(e, n[r])
}

function Ie(e) {
  var t = e.f;
  if ((t & ne) === 0) {
    g(e, A);
    var n = y,
      r = Ue;
    y = e, Ue = !0;
    try {
      (t & (W | pt)) !== 0 ? br(e) : kt(e), hn(e);
      var s = Tn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = En;
      var a
    } finally {
      Ue = r, y = n
    }
  }
}
async function Js() {
  await Promise.resolve(), ut()
}

function Qs() {
  return ie.ensure().settled()
}

function pe(e) {
  var t = e.f,
    n = (t & b) !== 0;
  if (v !== null && !q) {
    var r = y !== null && (y.f & ne) !== 0;
    if (!r && (F === null || !Oe.call(F, e))) {
      var s = v.deps;
      if ((v.f & at) !== 0) e.rv < de && (e.rv = de, O === null && s !== null && s[I] === e ? I++ : O === null ? O = [e] : O.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [v] : Oe.call(a, v) || a.push(v)
      }
    }
  }
  if (Te && se.has(e)) return se.get(e);
  if (n) {
    var f = e;
    if (Te) {
      var l = f.v;
      return ((f.f & A) === 0 && f.reactions !== null || Sn(f)) && (l = Tt(f)), se.set(f, l), l
    }
    var i = (f.f & L) === 0 && !q && v !== null && (Ue || (v.f & L) !== 0),
      o = (f.f & ae) === 0;
    Be(f) && (i && (f.f |= L), sn(f)), i && !o && (an(f), An(f))
  }
  if (T != null && T.has(e)) return T.get(e);
  if ((e.f & re) !== 0) throw e.v;
  return e.v
}

function An(e) {
  if (e.f |= L, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & b) !== 0 && (t.f & L) === 0 && (an(t), An(t))
}

function Sn(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (se.has(t) || (t.f & b) !== 0 && Sn(t)) return !0;
  return !1
}

function ea(e) {
  var t = q;
  try {
    return q = !0, e()
  } finally {
    q = t
  }
}

function ta(e) {
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
      const r = Mn(n);
      for (let s in r) {
        const a = r[s].get;
        if (a) try {
          a.call(e)
        } catch {}
      }
    }
  }
}

function na(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const Nr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function ra(e) {
  return Nr.includes(e)
}
const xr = {
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

function sa(e) {
  return e = e.toLowerCase(), xr[e] ?? e
}
const Rr = ["touchstart", "touchmove"];

function aa(e) {
  return Rr.includes(e)
}
const he = Symbol("events"),
  Or = new Set,
  Ir = new Set;

function ia(e) {
  if (!x) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function kn(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Cr.call(t, a), !a.cancelBubble) return et(() => n == null ? void 0 : n.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ze(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function fa(e, t, n, r = {}) {
  var s = kn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function oa(e, t, n, r, s) {
  var a = {
      capture: r,
      passive: s
    },
    f = kn(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && St(() => {
    t.removeEventListener(e, f, a)
  })
}

function la(e, t, n) {
  (t[he] ?? (t[he] = {}))[e] = n
}

function ua(e) {
  for (var t = 0; t < e.length; t++) Or.add(e[t]);
  for (var n of Ir) n(e)
}
let jt = null;

function Cr(e) {
  var S, De;
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
    Cn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n
      }
    });
    var c = v,
      u = y;
    $(null), oe(null);
    try {
      for (var _, m = []; a !== null;) {
        var h = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var D = (De = a[he]) == null ? void 0 : De[r];
          D != null && (!a.disabled || e.target === a) && D.call(a, e)
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
      e[he] = t, delete e.currentTarget, $(c), oe(u)
    }
  }
}
var Vt;
const rt = ((Vt = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Vt.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
  createHTML: e => e
});

function Mr(e) {
  return (rt == null ? void 0 : rt.createHTML(e)) ?? e
}

function Nn(e) {
  var t = yr("template");
  return t.innerHTML = Mr(e.replaceAll("<!>", "<!---->")), t.content
}

function U(e, t) {
  var n = y;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function ca(e, t) {
  var n = (t & Gt) !== 0,
    r = (t & Zn) !== 0,
    s, a = !e.startsWith("<!>");
  return () => {
    if (x) return U(w, null), w;
    s === void 0 && (s = Nn(a ? e : "<!>" + e), n || (s = V(s)));
    var f = r || un ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var l = V(f),
        i = f.lastChild;
      U(l, i)
    } else U(f, f);
    return f
  }
}

function Dr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = (t & Gt) !== 0,
    a = `<${n}>${r?e:"<!>"+e}</${n}>`,
    f;
  return () => {
    if (x) return U(w, null), w;
    if (!f) {
      var l = Nn(a),
        i = V(l);
      if (s)
        for (f = document.createDocumentFragment(); V(i);) f.appendChild(V(i));
      else f = V(i)
    }
    var o = f.cloneNode(!0);
    if (s) {
      var c = V(o),
        u = o.lastChild;
      U(c, u)
    } else U(o, o);
    return o
  }
}

function _a(e, t) {
  return Dr(e, t, "svg")
}

function va(e = "") {
  if (!x) {
    var t = be(e + "");
    return U(t, t), t
  }
  var n = w;
  return n.nodeType !== qe ? (n.before(n = be()), Ee(n)) : Qe(n), U(n, n), n
}

function da() {
  if (x) return U(w, null), w;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = be();
  return e.append(t, n), U(t, n), e
}

function pa(e, t) {
  if (x) {
    var n = y;
    ((n.f & ae) === 0 || n.nodes.end === null) && (n.nodes.end = w), $t();
    return
  }
  e !== null && e.before(t)
}

function ha() {
  var e, t;
  if (x && w && w.nodeType === wt && ((e = w.textContent) != null && e.startsWith("$"))) {
    const n = w.textContent.substring(1);
    return $t(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  hr as $, ys as A, ws as B, Ee as C, ds as D, Ge as E, w as F, Vn as G, Jn as H, Hs as I, E as J, Ze as K, ea as L, ut as M, Ss as N, gs as O, bs as P, Es as Q, Qs as R, Js as S, Qn as T, Us as U, ze as V, ye as W, d as X, Xs as Y, fe as Z, Ar as _, pa as a, N as a$, be as a0, Ws as a1, Zs as a2, Ds as a3, ms as a4, Ye as a5, Zr as a6, V as a7, wt as a8, er as a9, St as aA, y as aB, Tr as aC, mt as aD, yt as aE, U as aF, yr as aG, ls as aH, us as aI, Ln as aJ, Le as aK, zr as aL, ns as aM, Te as aN, ne as aO, rs as aP, ts as aQ, es as aR, ss as aS, qr as aT, Fr as aU, dn as aV, nt as aW, jn as aX, os as aY, ie as aZ, g as a_, vt as aa, Vr as ab, Gr as ac, cr as ad, On as ae, Lr as af, Wr as ag, Qr as ah, Ns as ai, At as aj, Xr as ak, B as al, z as am, Jr as an, wr as ao, ue as ap, Vs as aq, jr as ar, Fn as as, ta as at, bt as au, Bt as av, Me as aw, js as ax, It as ay, Rs as az, As as b, K as b0, G as b1, fr as b2, oe as b3, $ as b4, $e as b5, ar as b6, v as b7, Ke as b8, Kr as b9, na as bA, kn as bB, Ps as bC, sa as bD, k as bE, mr as bF, ra as bG, Dt as bH, nr as bI, fa as bJ, ha as bK, xs as bL, qs as bM, Dn as bN, Fs as bO, me as bP, ia as bQ, vs as ba, Os as bb, $r as bc, Ys as bd, Or as be, Ir as bf, Cr as bg, aa as bh, W as bi, ae as bj, fs as bk, as as bl, is as bm, et as bn, Cn as bo, va as bp, Ls as bq, Ks as br, _s as bs, Yr as bt, nn as bu, tr as bv, qt as bw, cs as bx, Mn as by, Ur as bz, ca as c, Is as d, Q as e, Cs as f, Pe as g, ee as h, pe as i, $s as j, ua as k, la as l, Bs as m, hs as n, Hr as o, Ts as p, da as q, ps as r, Ms as s, Gs as t, ks as u, oa as v, _a as w, x, $t as y, zs as z
};