var Sn = Object.defineProperty;
var It = e => {
  throw TypeError(e)
};
var Rn = (e, t, n) => t in e ? Sn(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var z = (e, t, n) => Rn(e, typeof t != "symbol" ? t + "" : t, n),
  it = (e, t, n) => t.has(e) || It("Cannot " + n);
var u = (e, t, n) => (it(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  S = (e, t, n) => t.has(e) ? It("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  X = (e, t, n, r) => (it(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  L = (e, t, n) => (it(e, t, "access private method"), n);
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ec3fee10a39ac222b6aa79fae966fd9b93c3dd3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f7939a7d-751a-48e4-8be8-a8f0a12176b8", e._sentryDebugIdIdentifier = "sentry-dbid-f7939a7d-751a-48e4-8be8-a8f0a12176b8")
  })()
} catch {}
const Ht = !1;
var In = Array.isArray,
  Nn = Array.prototype.indexOf,
  jr = Array.from,
  On = Object.defineProperty,
  De = Object.getOwnPropertyDescriptor,
  Cn = Object.getOwnPropertyDescriptors,
  Dn = Object.prototype,
  Pn = Array.prototype,
  Yt = Object.getPrototypeOf,
  Nt = Object.isExtensible;

function qr(e) {
  return typeof e == "function"
}
const Hr = () => {};

function Yr(e) {
  return e()
}

function Mn(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function Bt() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s
  });
  return {
    promise: n,
    resolve: e,
    reject: t
  }
}

function Br(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const A = 2,
  Ze = 4,
  Je = 8,
  Q = 16,
  ee = 32,
  Ee = 64,
  pt = 128,
  q = 512,
  T = 1024,
  N = 2048,
  G = 4096,
  U = 8192,
  he = 16384,
  Qe = 32768,
  Be = 65536,
  lt = 1 << 17,
  Ut = 1 << 18,
  He = 1 << 19,
  Vt = 1 << 20,
  Me = 32768,
  ut = 1 << 21,
  wt = 1 << 22,
  se = 1 << 23,
  pe = Symbol("$state"),
  Ur = Symbol("legacy props"),
  Vr = Symbol(""),
  Te = new class extends Error {
    constructor() {
      super(...arguments);
      z(this, "name", "StaleReactionError");
      z(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  },
  et = 3,
  yt = 8;

function Ln(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Fn() {
  throw new Error("https://svelte.dev/e/missing_context")
}

function jn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function qn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Hn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Yn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function Bn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Un() {
  throw new Error("https://svelte.dev/e/experimental_async_fork")
}

function Vn() {
  throw new Error("https://svelte.dev/e/fork_discarded")
}

function $n() {
  throw new Error("https://svelte.dev/e/fork_timing")
}

function Gr() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function Kr() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Wr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function zr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Gn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Kn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Wn() {
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
  zn = 1,
  Xn = 2,
  Zn = "[",
  Jn = "[!",
  Qn = "]",
  mt = {},
  k = Symbol(),
  us = "http://www.w3.org/1999/xhtml",
  cs = "@attach";

function bt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function _s() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function ds() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let O = !1;

function vs(e) {
  O = e
}
let p;

function me(e) {
  if (e === null) throw bt(), mt;
  return p = e
}

function $t() {
  return me(oe(p))
}

function hs(e) {
  if (O) {
    if (oe(p) !== null) throw bt(), mt;
    p = e
  }
}

function ps(e = 1) {
  if (O) {
    for (var t = e, n = p; t--;) n = oe(n);
    p = n
  }
}

function ws(e = !0) {
  for (var t = 0, n = p;;) {
    if (n.nodeType === yt) {
      var r = n.data;
      if (r === Qn) {
        if (t === 0) return n;
        t -= 1
      } else(r === Zn || r === Jn) && (t += 1)
    }
    var s = oe(n);
    e && n.remove(), n = s
  }
}

function ys(e) {
  if (!e || e.nodeType !== yt) throw bt(), mt;
  return e.data
}

function Gt(e) {
  return e === this.v
}

function er(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Kt(e) {
  return !er(e, this.v)
}
let tt = !1,
  tr = !1;

function ms() {
  tt = !0
}
let m = null;

function Ue(e) {
  m = e
}

function bs() {
  const e = {};
  return [() => (sr(e) || Fn(), nr(e)), t => rr(e, t)]
}

function nr(e) {
  return nt().get(e)
}

function rr(e, t) {
  return nt().set(e, t), t
}

function sr(e) {
  return nt().has(e)
}

function gs() {
  return nt()
}

function Es(e, t = !1, n) {
  m = {
    p: m,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: tt && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function Ts(e) {
  var t = m,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) un(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, m = t.p, e ?? {}
}

function Ye() {
  return !tt || m !== null && m.l === null
}

function nt(e) {
  return m === null && Ln(), m.c ?? (m.c = new Map(ar(m) || void 0))
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
let ce = [];

function Wt() {
  var e = ce;
  ce = [], Mn(e)
}

function gt(e) {
  if (ce.length === 0 && !Pe) {
    var t = ce;
    queueMicrotask(() => {
      t === ce && Wt()
    })
  }
  ce.push(e)
}

function ir() {
  for (; ce.length > 0;) Wt()
}

function fr(e) {
  var t = w;
  if (t === null) return v.f |= se, e;
  if ((t.f & Qe) === 0) {
    if ((t.f & pt) === 0) throw e;
    t.b.error(e)
  } else Ve(e, t)
}

function Ve(e, t) {
  for (; t !== null;) {
    if ((t.f & pt) !== 0) try {
      t.b.error(e);
      return
    } catch (n) {
      e = n
    }
    t = t.parent
  }
  throw e
}
const _e = new Set;
let y = null,
  ft = null,
  b = null,
  Y = [],
  rt = null,
  ct = !1,
  Pe = !1;
var ke, xe, de, ve, Fe, Se, Re, x, _t, ue, zt, Xt;
const ze = class ze {
  constructor() {
    S(this, x);
    z(this, "committed", !1);
    z(this, "current", new Map);
    z(this, "previous", new Map);
    S(this, ke, new Set);
    S(this, xe, new Set);
    S(this, de, 0);
    S(this, ve, 0);
    S(this, Fe, null);
    S(this, Se, []);
    S(this, Re, []);
    z(this, "skipped_effects", new Set);
    z(this, "is_fork", !1)
  }
  process(t) {
    var r;
    Y = [], ft = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of t) L(this, x, _t).call(this, s, n);
    this.is_fork || L(this, x, zt).call(this), u(this, ve) > 0 || this.is_fork ? (L(this, x, ue).call(this, n.effects), L(this, x, ue).call(this, n.render_effects), L(this, x, ue).call(this, n.block_effects)) : (ft = this, y = null, Ot(n.render_effects), Ot(n.effects), ft = null, (r = u(this, Fe)) == null || r.resolve()), b = null
  }
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & se) === 0 && (this.current.set(t, t.v), b == null || b.set(t, t.v))
  }
  activate() {
    y = this, this.apply()
  }
  deactivate() {
    y === this && (y = null, b = null)
  }
  flush() {
    if (this.activate(), Y.length > 0) {
      if (vt(), y !== null && y !== this) return
    } else u(this, de) === 0 && this.process([]);
    this.deactivate()
  }
  discard() {
    for (const t of u(this, xe)) t(this);
    u(this, xe).clear()
  }
  increment(t) {
    X(this, de, u(this, de) + 1), t && X(this, ve, u(this, ve) + 1)
  }
  decrement(t) {
    X(this, de, u(this, de) - 1), t && X(this, ve, u(this, ve) - 1), this.revive()
  }
  revive() {
    for (const t of u(this, Se)) E(t, N), ge(t);
    for (const t of u(this, Re)) E(t, G), ge(t);
    X(this, Se, []), X(this, Re, []), this.flush()
  }
  oncommit(t) {
    u(this, ke).add(t)
  }
  ondiscard(t) {
    u(this, xe).add(t)
  }
  settled() {
    return (u(this, Fe) ?? X(this, Fe, Bt())).promise
  }
  static ensure() {
    if (y === null) {
      const t = y = new ze;
      _e.add(y), Pe || ze.enqueue(() => {
        y === t && t.flush()
      })
    }
    return y
  }
  static enqueue(t) {
    gt(t)
  }
  apply() {}
};
ke = new WeakMap, xe = new WeakMap, de = new WeakMap, ve = new WeakMap, Fe = new WeakMap, Se = new WeakMap, Re = new WeakMap, x = new WeakSet, _t = function(t, n) {
  var c;
  t.f ^= T;
  for (var r = t.first; r !== null;) {
    var s = r.f,
      a = (s & (ee | Ee)) !== 0,
      i = a && (s & T) !== 0,
      l = i || (s & U) !== 0 || this.skipped_effects.has(r);
    if ((r.f & pt) !== 0 && ((c = r.b) != null && c.is_pending()) && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !l && r.fn !== null) {
      a ? r.f ^= T : (s & Ze) !== 0 ? n.effects.push(r) : Oe(r) && ((r.f & Q) !== 0 && n.block_effects.push(r), Ie(r));
      var f = r.first;
      if (f !== null) {
        r = f;
        continue
      }
    }
    var o = r.parent;
    for (r = r.next; r === null && o !== null;) o === n.effect && (L(this, x, ue).call(this, n.effects), L(this, x, ue).call(this, n.render_effects), L(this, x, ue).call(this, n.block_effects), n = n.parent), r = o.next, o = o.parent
  }
}, ue = function(t) {
  for (const n of t)((n.f & N) !== 0 ? u(this, Se) : u(this, Re)).push(n), E(n, T)
}, zt = function() {
  if (u(this, ve) === 0) {
    for (const t of u(this, ke)) t();
    u(this, ke).clear()
  }
  u(this, de) === 0 && L(this, x, Xt).call(this)
}, Xt = function() {
  var s;
  if (_e.size > 1) {
    this.previous.clear();
    var t = b,
      n = !0,
      r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
    for (const a of _e) {
      if (a === this) {
        n = !1;
        continue
      }
      const i = [];
      for (const [f, o] of this.current) {
        if (a.current.has(f))
          if (n && o !== a.current.get(f)) a.current.set(f, o);
          else continue;
        i.push(f)
      }
      if (i.length === 0) continue;
      const l = [...a.current.keys()].filter(f => !this.current.has(f));
      if (l.length > 0) {
        const f = new Set,
          o = new Map;
        for (const c of i) Zt(c, l, f, o);
        if (Y.length > 0) {
          y = a, a.apply();
          for (const c of Y) L(s = a, x, _t).call(s, c, r);
          Y = [], a.deactivate()
        }
      }
    }
    y = null, b = t
  }
  this.committed = !0, _e.delete(this)
};
let be = ze;

function dt(e) {
  var t = Pe;
  Pe = !0;
  try {
    var n;
    for (e && (y !== null && vt(), n = e());;) {
      if (ir(), Y.length === 0 && (y == null || y.flush(), Y.length === 0)) return rt = null, n;
      vt()
    }
  } finally {
    Pe = t
  }
}

function vt() {
  var e = we;
  ct = !0;
  try {
    var t = 0;
    for (Lt(!0); Y.length > 0;) {
      var n = be.ensure();
      if (t++ > 1e3) {
        var r, s;
        or()
      }
      n.process(Y), ae.clear()
    }
  } finally {
    ct = !1, Lt(e), rt = null
  }
}

function or() {
  try {
    Bn()
  } catch (e) {
    Ve(e, rt)
  }
}
let F = null;

function Ot(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & (he | U)) === 0 && Oe(r) && (F = new Set, Ie(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? vn(r) : r.fn = null), (F == null ? void 0 : F.size) > 0)) {
        ae.clear();
        for (const s of F) {
          if ((s.f & (he | U)) !== 0) continue;
          const a = [s];
          let i = s.parent;
          for (; i !== null;) F.has(i) && (F.delete(i), a.push(i)), i = i.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const f = a[l];
            (f.f & (he | U)) === 0 && Ie(f)
          }
        }
        F.clear()
      }
    }
    F = null
  }
}

function Zt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & A) !== 0 ? Zt(s, t, n, r) : (a & (wt | Q)) !== 0 && (a & N) === 0 && Qt(s, t, r) && (E(s, N), ge(s))
    }
}

function Jt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & A) !== 0 ? Jt(n, t) : (r & lt) !== 0 && (E(n, N), t.add(n))
    }
}

function Qt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s)) return !0;
      if ((s.f & A) !== 0 && Qt(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function ge(e) {
  for (var t = rt = e; t.parent !== null;) {
    t = t.parent;
    var n = t.f;
    if (ct && t === w && (n & Q) !== 0 && (n & Ut) === 0) return;
    if ((n & (Ee | ee)) !== 0) {
      if ((n & T) === 0) return;
      t.f ^= T
    }
  }
  Y.push(t)
}

function As(e) {
  Un(), y !== null && $n();
  var t = be.ensure();
  t.is_fork = !0;
  var n = !1,
    r = t.settled();
  dt(e);
  for (var [s, a] of t.previous) s.v = a;
  return {
    commit: async () => {
      if (n) {
        await r;
        return
      }
      _e.has(t) || Vn(), n = !0, t.is_fork = !1;
      for (var [i, l] of t.current) i.v = l;
      dt(() => {
        var f = new Set;
        for (var o of t.current.keys()) Jt(o, f);
        vr(f), rn()
      }), t.revive(), await r
    },
    discard: () => {
      !n && _e.has(t) && (_e.delete(t), t.discard())
    }
  }
}

function lr(e, t, n, r) {
  const s = Ye() ? Et : _r;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return
  }
  var a = y,
    i = w,
    l = ur();

  function f() {
    Promise.all(n.map(o => cr(o))).then(o => {
      l();
      try {
        r([...t.map(s), ...o])
      } catch (c) {
        (i.f & he) === 0 && Ve(c, i)
      }
      a == null || a.deactivate(), $e()
    }).catch(o => {
      Ve(o, i)
    })
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return f()
    } finally {
      a == null || a.deactivate(), $e()
    }
  }) : f()
}

function ur() {
  var e = w,
    t = v,
    n = m,
    r = y;
  return function(a = !0) {
    fe(e), $(t), Ue(n), a && (r == null || r.activate())
  }
}

function $e() {
  fe(null), $(null), Ue(null)
}

function Et(e) {
  var t = A | N,
    n = v !== null && (v.f & A) !== 0 ? v : null;
  return w !== null && (w.f |= He), {
    ctx: m,
    deps: null,
    effects: null,
    equals: Gt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: k,
    wv: 0,
    parent: n ?? w,
    ac: null
  }
}

function cr(e, t) {
  let n = w;
  n === null && jn();
  var r = n.b,
    s = void 0,
    a = At(k),
    i = !v,
    l = new Map;
  return br(() => {
    var _;
    var f = Bt();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        o === y && o.committed && o.deactivate(), $e()
      })
    } catch (d) {
      f.reject(d), $e()
    }
    var o = y;
    if (i) {
      var c = !r.is_pending();
      r.update_pending_count(1), o.increment(c), (_ = l.get(o)) == null || _.reject(Te), l.delete(o), l.set(o, f)
    }
    const h = (d, g = void 0) => {
      if (o.activate(), g) g !== Te && (a.f |= se, Ke(a, g));
      else {
        (a.f & se) !== 0 && (a.f ^= se), Ke(a, d);
        for (const [M, W] of l) {
          if (l.delete(M), M === o) break;
          W.reject(Te)
        }
      }
      i && (r.update_pending_count(-1), o.decrement(c))
    };
    f.promise.then(h, d => h(null, d || "unknown"))
  }), xt(() => {
    for (const f of l.values()) f.reject(Te)
  }), new Promise(f => {
    function o(c) {
      function h() {
        c === s ? f(a) : o(s)
      }
      c.then(h, h)
    }
    o(s)
  })
}

function ks(e) {
  const t = Et(e);
  return yn(t), t
}

function _r(e) {
  const t = Et(e);
  return t.equals = Kt, t
}

function en(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) V(t[n])
  }
}

function dr(e) {
  for (var t = e.parent; t !== null;) {
    if ((t.f & A) === 0) return t;
    t = t.parent
  }
  return null
}

function Tt(e) {
  var t, n = w;
  fe(dr(e));
  try {
    e.f &= ~Me, en(e), t = En(e)
  } finally {
    fe(n)
  }
  return t
}

function tn(e) {
  var t = Tt(e);
  if (e.equals(t) || (e.v = t, e.wv = bn()), !Ne)
    if (b !== null) kt() && b.set(e, e.v);
    else {
      var n = (e.f & q) === 0 ? G : T;
      E(e, n)
    }
}
let Ge = new Set;
const ae = new Map;

function vr(e) {
  Ge = e
}
let nn = !1;

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

function te(e, t) {
  const n = At(e);
  return yn(n), n
}

function xs(e, t = !1, n = !0) {
  var s;
  const r = At(e);
  return t || (r.equals = Kt), tt && n && m !== null && m.l !== null && ((s = m.l).s ?? (s.s = [])).push(r), r
}

function Ss(e, t) {
  return ne(e, St(() => Ae(e))), t
}

function ne(e, t, n = !1) {
  v !== null && (!B || (v.f & lt) !== 0) && Ye() && (v.f & (A | Q | wt | lt)) !== 0 && !(I != null && I.includes(e)) && Wn();
  let r = n ? Ce(t) : t;
  return Ke(e, r)
}

function Ke(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ne ? ae.set(e, t) : ae.set(e, n), e.v = t;
    var r = be.ensure();
    r.capture(e, n), (e.f & A) !== 0 && ((e.f & N) !== 0 && Tt(e), E(e, (e.f & q) !== 0 ? T : G)), e.wv = bn(), sn(e, N), Ye() && w !== null && (w.f & T) !== 0 && (w.f & (ee | Ee)) === 0 && (P === null ? Sr([e]) : P.push(e)), !r.is_fork && Ge.size > 0 && !nn && rn()
  }
  return t
}

function rn() {
  nn = !1;
  const e = Array.from(Ge);
  for (const t of e)(t.f & T) !== 0 && E(t, G), Oe(t) && Ie(t);
  Ge.clear()
}

function ot(e) {
  ne(e, e.v + 1)
}

function sn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ye(), s = n.length, a = 0; a < s; a++) {
      var i = n[a],
        l = i.f;
      if (!(!r && i === w)) {
        var f = (l & N) === 0;
        if (f && E(i, t), (l & A) !== 0) {
          var o = i;
          b == null || b.delete(o), (l & Me) === 0 && (l & q && (i.f |= Me), sn(o, G))
        } else f && ((l & Q) !== 0 && F !== null && F.add(i), ge(i))
      }
    }
}

function Ce(e) {
  if (typeof e != "object" || e === null || pe in e) return e;
  const t = Yt(e);
  if (t !== Dn && t !== Pn) return e;
  var n = new Map,
    r = In(e),
    s = te(0),
    a = ye,
    i = l => {
      if (ye === a) return l();
      var f = v,
        o = ye;
      $(null), jt(a);
      var c = l();
      return $(f), jt(o), c
    };
  return r && n.set("length", te(e.length)), new Proxy(e, {
    defineProperty(l, f, o) {
      (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Gn();
      var c = n.get(f);
      return c === void 0 ? c = i(() => {
        var h = te(o.value);
        return n.set(f, h), h
      }) : ne(c, o.value, !0), !0
    },
    deleteProperty(l, f) {
      var o = n.get(f);
      if (o === void 0) {
        if (f in l) {
          const c = i(() => te(k));
          n.set(f, c), ot(s)
        }
      } else ne(o, k), ot(s);
      return !0
    },
    get(l, f, o) {
      var d;
      if (f === pe) return e;
      var c = n.get(f),
        h = f in l;
      if (c === void 0 && (!h || (d = De(l, f)) != null && d.writable) && (c = i(() => {
          var g = Ce(h ? l[f] : k),
            M = te(g);
          return M
        }), n.set(f, c)), c !== void 0) {
        var _ = Ae(c);
        return _ === k ? void 0 : _
      }
      return Reflect.get(l, f, o)
    },
    getOwnPropertyDescriptor(l, f) {
      var o = Reflect.getOwnPropertyDescriptor(l, f);
      if (o && "value" in o) {
        var c = n.get(f);
        c && (o.value = Ae(c))
      } else if (o === void 0) {
        var h = n.get(f),
          _ = h == null ? void 0 : h.v;
        if (h !== void 0 && _ !== k) return {
          enumerable: !0,
          configurable: !0,
          value: _,
          writable: !0
        }
      }
      return o
    },
    has(l, f) {
      var _;
      if (f === pe) return !0;
      var o = n.get(f),
        c = o !== void 0 && o.v !== k || Reflect.has(l, f);
      if (o !== void 0 || w !== null && (!c || (_ = De(l, f)) != null && _.writable)) {
        o === void 0 && (o = i(() => {
          var d = c ? Ce(l[f]) : k,
            g = te(d);
          return g
        }), n.set(f, o));
        var h = Ae(o);
        if (h === k) return !1
      }
      return c
    },
    set(l, f, o, c) {
      var Rt;
      var h = n.get(f),
        _ = f in l;
      if (r && f === "length")
        for (var d = o; d < h.v; d += 1) {
          var g = n.get(d + "");
          g !== void 0 ? ne(g, k) : d in l && (g = i(() => te(k)), n.set(d + "", g))
        }
      if (h === void 0)(!_ || (Rt = De(l, f)) != null && Rt.writable) && (h = i(() => te(void 0)), ne(h, Ce(o)), n.set(f, h));
      else {
        _ = h.v !== k;
        var M = i(() => Ce(o));
        ne(h, M)
      }
      var W = Reflect.getOwnPropertyDescriptor(l, f);
      if (W != null && W.set && W.set.call(c, o), !_) {
        if (r && typeof f == "string") {
          var le = n.get("length"),
            at = Number(f);
          Number.isInteger(at) && at >= le.v && ne(le, at + 1)
        }
        ot(s)
      }
      return !0
    },
    ownKeys(l) {
      Ae(s);
      var f = Reflect.ownKeys(l).filter(h => {
        var _ = n.get(h);
        return _ === void 0 || _.v !== k
      });
      for (var [o, c] of n) c.v !== k && !(o in l) && f.push(o);
      return f
    },
    setPrototypeOf() {
      Kn()
    }
  })
}

function Ct(e) {
  try {
    if (e !== null && typeof e == "object" && pe in e) return e[pe]
  } catch {}
  return e
}

function Rs(e, t) {
  return Object.is(Ct(e), Ct(t))
}
var Dt, hr, an, fn, on;

function Is() {
  if (Dt === void 0) {
    Dt = window, hr = document, an = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    fn = De(t, "firstChild").get, on = De(t, "nextSibling").get, Nt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Nt(n) && (n.__t = void 0)
  }
}

function J(e = "") {
  return document.createTextNode(e)
}

function ie(e) {
  return fn.call(e)
}

function oe(e) {
  return on.call(e)
}

function Ns(e, t) {
  if (!O) return ie(e);
  var n = ie(p);
  if (n === null) n = p.appendChild(J());
  else if (t && n.nodeType !== et) {
    var r = J();
    return n == null || n.before(r), me(r), r
  }
  return me(n), n
}

function Os(e, t = !1) {
  if (!O) {
    var n = ie(e);
    return n instanceof Comment && n.data === "" ? oe(n) : n
  }
  if (t && (p == null ? void 0 : p.nodeType) !== et) {
    var r = J();
    return p == null || p.before(r), me(r), r
  }
  return p
}

function Cs(e, t = 1, n = !1) {
  let r = O ? p : e;
  for (var s; t--;) s = r, r = oe(r);
  if (!O) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== et) {
    var a = J();
    return r === null ? s == null || s.after(a) : r.before(a), me(a), a
  }
  return me(r), r
}

function pr(e) {
  e.textContent = ""
}

function wr() {
  return !1
}

function Ds(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, gt(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function Ps(e) {
  O && ie(e) !== null && pr(e)
}
let Pt = !1;

function yr() {
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

function Ms(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  xt(() => {
    for (var a of t) e.removeEventListener(a, n)
  })
}

function st(e) {
  var t = v,
    n = w;
  $(null), fe(null);
  try {
    return e()
  } finally {
    $(t), fe(n)
  }
}

function Ls(e, t, n, r = n) {
  e.addEventListener(t, () => st(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0)
  } : e.__on_r = () => r(!0), yr()
}

function ln(e) {
  w === null && (v === null && Yn(), Hn()), Ne && qn()
}

function mr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function K(e, t, n, r = !0) {
  var s = w;
  s !== null && (s.f & U) !== 0 && (e |= U);
  var a = {
    ctx: m,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | N | q,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n) try {
    Ie(a), a.f |= Qe
  } catch (f) {
    throw V(a), f
  } else t !== null && ge(a);
  if (r) {
    var i = a;
    if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && (i.f & He) === 0 && (i = i.first, (e & Q) !== 0 && (e & Be) !== 0 && i !== null && (i.f |= Be)), i !== null && (i.parent = s, s !== null && mr(i, s), v !== null && (v.f & A) !== 0 && (e & Ee) === 0)) {
      var l = v;
      (l.effects ?? (l.effects = [])).push(i)
    }
  }
  return a
}

function kt() {
  return v !== null && !B
}

function xt(e) {
  const t = K(Je, null, !1);
  return E(t, T), t.teardown = e, t
}

function Fs(e) {
  ln();
  var t = w.f,
    n = !v && (t & ee) !== 0 && (t & Qe) === 0;
  if (n) {
    var r = m;
    (r.e ?? (r.e = [])).push(e)
  } else return un(e)
}

function un(e) {
  return K(Ze | Vt, e, !1)
}

function js(e) {
  return ln(), K(Je | Vt, e, !0)
}

function qs(e) {
  be.ensure();
  const t = K(Ee | He, e, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? hn(t, () => {
      V(t), r(void 0)
    }) : (V(t), r(void 0))
  })
}

function Hs(e) {
  return K(Ze, e, !1)
}

function Ys(e, t) {
  var n = m,
    r = {
      effect: null,
      ran: !1,
      deps: e
    };
  n.l.$.push(r), r.effect = cn(() => {
    e(), !r.ran && (r.ran = !0, St(t))
  })
}

function Bs() {
  var e = m;
  cn(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      (n.f & T) !== 0 && E(n, G), Oe(n) && Ie(n), t.ran = !1
    }
  })
}

function br(e) {
  return K(wt | He, e, !0)
}

function cn(e, t = 0) {
  return K(Je | t, e, !0)
}

function Us(e, t = [], n = [], r = [], s = !1) {
  lr(r, t, n, a => {
    K(s ? Ze : Je, () => e(...a.map(Ae)), !0)
  })
}

function Vs(e, t = 0) {
  var n = K(Q | t, e, !0);
  return n
}

function Mt(e, t = !0) {
  return K(ee | He, e, !0, t)
}

function _n(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ne,
      r = v;
    Ft(!0), $(null);
    try {
      t.call(null)
    } finally {
      Ft(n), $(r)
    }
  }
}

function dn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && st(() => {
      s.abort(Te)
    });
    var r = n.next;
    (n.f & Ee) !== 0 ? n.parent = null : V(n, t), n = r
  }
}

function gr(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & ee) === 0 && V(t), t = n
  }
}

function V(e, t = !0) {
  var n = !1;
  (t || (e.f & Ut) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Er(e.nodes_start, e.nodes_end), n = !0), dn(e, t && !n), We(e, 0), E(e, he);
  var r = e.transitions;
  if (r !== null)
    for (const a of r) a.stop();
  _n(e);
  var s = e.parent;
  s !== null && s.first !== null && vn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null
}

function Er(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : oe(e);
    e.remove(), e = n
  }
}

function vn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function hn(e, t, n = !0) {
  var r = [];
  pn(e, r, !0), Tr(r, () => {
    n && V(e), t && t()
  })
}

function Tr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e) s.out(r)
  } else t()
}

function pn(e, t, n) {
  if ((e.f & U) === 0) {
    if (e.f ^= U, e.transitions !== null)
      for (const i of e.transitions)(i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null;) {
      var s = r.next,
        a = (r.f & Be) !== 0 || (r.f & ee) !== 0 && (e.f & Q) !== 0;
      pn(r, t, a ? n : !1), r = s
    }
  }
}

function Ar(e) {
  wn(e, !0)
}

function wn(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & T) === 0 && (E(e, N), ge(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & Be) !== 0 || (n.f & ee) !== 0;
      wn(n, s ? t : !1), n = r
    }
    if (e.transitions !== null)
      for (const a of e.transitions)(a.is_global || t) && a.in()
  }
}

function kr(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null;) {
    var s = n === r ? null : oe(n);
    t.append(n), n = s
  }
}
let re = null;

function xr(e) {
  var t = re;
  try {
    if (re = new Set, St(e), t !== null)
      for (var n of re) t.add(n);
    return re
  } finally {
    re = t
  }
}

function $s(e) {
  for (var t of xr(e)) Ke(t, t.v)
}
let we = !1;

function Lt(e) {
  we = e
}
let Ne = !1;

function Ft(e) {
  Ne = e
}
let v = null,
  B = !1;

function $(e) {
  v = e
}
let w = null;

function fe(e) {
  w = e
}
let I = null;

function yn(e) {
  v !== null && (I === null ? I = [e] : I.push(e))
}
let R = null,
  C = 0,
  P = null;

function Sr(e) {
  P = e
}
let mn = 1,
  Le = 0,
  ye = Le;

function jt(e) {
  ye = e
}

function bn() {
  return ++mn
}

function Oe(e) {
  var t = e.f;
  if ((t & N) !== 0) return !0;
  if (t & A && (e.f &= ~Me), (t & G) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var a = n[s];
        if (Oe(a) && tn(a), a.wv > e.wv) return !0
      }(t & q) !== 0 && b === null && E(e, T)
  }
  return !1
}

function gn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(I != null && I.includes(e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & A) !== 0 ? gn(a, t, !1) : t === a && (n ? E(a, N) : (a.f & T) !== 0 && E(a, G), ge(a))
    }
}

function En(e) {
  var g;
  var t = R,
    n = C,
    r = P,
    s = v,
    a = I,
    i = m,
    l = B,
    f = ye,
    o = e.f;
  R = null, C = 0, P = null, v = (o & (ee | Ee)) === 0 ? e : null, I = null, Ue(e.ctx), B = !1, ye = ++Le, e.ac !== null && (st(() => {
    e.ac.abort(Te)
  }), e.ac = null);
  try {
    e.f |= ut;
    var c = e.fn,
      h = c(),
      _ = e.deps;
    if (R !== null) {
      var d;
      if (We(e, C), _ !== null && C > 0)
        for (_.length = C + R.length, d = 0; d < R.length; d++) _[C + d] = R[d];
      else e.deps = _ = R;
      if (we && kt() && (e.f & q) !== 0)
        for (d = C; d < _.length; d++)((g = _[d]).reactions ?? (g.reactions = [])).push(e)
    } else _ !== null && C < _.length && (We(e, C), _.length = C);
    if (Ye() && P !== null && !B && _ !== null && (e.f & (A | G | N)) === 0)
      for (d = 0; d < P.length; d++) gn(P[d], e);
    return s !== null && s !== e && (Le++, P !== null && (r === null ? r = P : r.push(...P))), (e.f & se) !== 0 && (e.f ^= se), h
  } catch (M) {
    return fr(M)
  } finally {
    e.f ^= ut, R = t, C = n, P = r, v = s, I = a, Ue(i), B = l, ye = f
  }
}

function Rr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  n === null && (t.f & A) !== 0 && (R === null || !R.includes(t)) && (E(t, G), (t.f & q) !== 0 && (t.f ^= q, t.f &= ~Me), en(t), We(t, 0))
}

function We(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Rr(e, n[r])
}

function Ie(e) {
  var t = e.f;
  if ((t & he) === 0) {
    E(e, T);
    var n = w,
      r = we;
    w = e, we = !0;
    try {
      (t & Q) !== 0 ? gr(e) : dn(e), _n(e);
      var s = En(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = mn;
      var a;
      Ht && tr && (e.f & N) !== 0 && e.deps
    } finally {
      we = r, w = n
    }
  }
}
async function Gs() {
  await Promise.resolve(), dt()
}

function Ks() {
  return be.ensure().settled()
}

function Ae(e) {
  var t = e.f,
    n = (t & A) !== 0;
  if (re == null || re.add(e), v !== null && !B) {
    var r = w !== null && (w.f & he) !== 0;
    if (!r && !(I != null && I.includes(e))) {
      var s = v.deps;
      if ((v.f & ut) !== 0) e.rv < Le && (e.rv = Le, R === null && s !== null && s[C] === e ? C++ : R === null ? R = [e] : R.includes(e) || R.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [v] : a.includes(v) || a.push(v)
      }
    }
  }
  if (Ne) {
    if (ae.has(e)) return ae.get(e);
    if (n) {
      var i = e,
        l = i.v;
      return ((i.f & T) === 0 && i.reactions !== null || An(i)) && (l = Tt(i)), ae.set(i, l), l
    }
  } else if (n) {
    if (i = e, b != null && b.has(i)) return b.get(i);
    Oe(i) && tn(i), we && kt() && (i.f & q) === 0 && Tn(i)
  } else if (b != null && b.has(e)) return b.get(e);
  if ((e.f & se) !== 0) throw e.v;
  return e.v
}

function Tn(e) {
  if (e.deps !== null) {
    e.f ^= q;
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & A) !== 0 && (t.f & q) === 0 && Tn(t)
  }
}

function An(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ae.has(t) || (t.f & A) !== 0 && An(t)) return !0;
  return !1
}

function St(e) {
  var t = B;
  try {
    return B = !0, e()
  } finally {
    B = t
  }
}
const Ir = -7169;

function E(e, t) {
  e.f = e.f & Ir | t
}

function Ws(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (pe in e) ht(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && pe in n && ht(n)
      }
  }
}

function ht(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      ht(e[r], t)
    } catch {}
    const n = Yt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Cn(n);
      for (let s in r) {
        const a = r[s].get;
        if (a) try {
          a.call(e)
        } catch {}
      }
    }
  }
}

function zs(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const Nr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Xs(e) {
  return Nr.includes(e)
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

function Zs(e) {
  return e = e.toLowerCase(), Or[e] ?? e
}
const Cr = ["touchstart", "touchmove"];

function Js(e) {
  return Cr.includes(e)
}
const Dr = new Set,
  Pr = new Set;

function kn(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Mr.call(t, a), !a.cancelBubble) return st(() => n == null ? void 0 : n.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gt(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function Qs(e, t, n, r = {}) {
  var s = kn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function ea(e, t, n, r, s) {
  var a = {
      capture: r,
      passive: s
    },
    i = kn(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && xt(() => {
    t.removeEventListener(e, i, a)
  })
}

function ta(e) {
  for (var t = 0; t < e.length; t++) Dr.add(e[t]);
  for (var n of Pr) n(e)
}
let qt = null;

function Mr(e) {
  var W;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((W = e.composedPath) == null ? void 0 : W.call(e)) || [],
    a = s[0] || e.target;
  qt = e;
  var i = 0,
    l = qt === e && e.__root;
  if (l) {
    var f = s.indexOf(l);
    if (f !== -1 && (t === document || t === window)) {
      e.__root = t;
      return
    }
    var o = s.indexOf(t);
    if (o === -1) return;
    f <= o && (i = f)
  }
  if (a = s[i] || e.target, a !== t) {
    On(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n
      }
    });
    var c = v,
      h = w;
    $(null), fe(null);
    try {
      for (var _, d = []; a !== null;) {
        var g = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var M = a["__" + r];
          M != null && (!a.disabled || e.target === a) && M.call(a, e)
        } catch (le) {
          _ ? d.push(le) : _ = le
        }
        if (e.cancelBubble || g === t || g === null) break;
        a = g
      }
      if (_) {
        for (let le of d) queueMicrotask(() => {
          throw le
        });
        throw _
      }
    } finally {
      e.__root = t, delete e.currentTarget, $(c), fe(h)
    }
  }
}

function xn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content
}

function Z(e, t) {
  var n = w;
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t)
}

function na(e, t) {
  var n = (t & zn) !== 0,
    r = (t & Xn) !== 0,
    s, a = !e.startsWith("<!>");
  return () => {
    if (O) return Z(p, null), p;
    s === void 0 && (s = xn(a ? e : "<!>" + e), n || (s = ie(s)));
    var i = r || an ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var l = ie(i),
        f = i.lastChild;
      Z(l, f)
    } else Z(i, i);
    return i
  }
}

function Lr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = `<${n}>${r?e:"<!>"+e}</${n}>`,
    a;
  return () => {
    if (O) return Z(p, null), p;
    if (!a) {
      var i = xn(s),
        l = ie(i);
      a = ie(l)
    }
    var f = a.cloneNode(!0);
    return Z(f, f), f
  }
}

function ra(e, t) {
  return Lr(e, t, "svg")
}

function sa(e = "") {
  if (!O) {
    var t = J(e + "");
    return Z(t, t), t
  }
  var n = p;
  return n.nodeType !== et && (n.before(n = J()), me(n)), Z(n, n), n
}

function aa() {
  if (O) return Z(p, null), p;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = J();
  return e.append(t, n), Z(t, n), e
}

function ia(e, t) {
  if (O) {
    var n = w;
    ((n.f & Qe) === 0 || n.nodes_end === null) && (n.nodes_end = p), $t();
    return
  }
  e !== null && e.before(t)
}

function fa() {
  var e, t;
  if (O && p && p.nodeType === yt && ((e = p.textContent) != null && e.startsWith("$"))) {
    const n = p.textContent.substring(1);
    return $t(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
var j, H, D, je, qe, Xe;
class oa {
  constructor(t, n = !0) {
    z(this, "anchor");
    S(this, j, new Map);
    S(this, H, new Map);
    S(this, D, new Map);
    S(this, je, !0);
    S(this, qe, () => {
      var t = y;
      if (u(this, j).has(t)) {
        var n = u(this, j).get(t),
          r = u(this, H).get(n);
        if (r) Ar(r);
        else {
          var s = u(this, D).get(n);
          s && (u(this, H).set(n, s.effect), u(this, D).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect)
        }
        for (const [a, i] of u(this, j)) {
          if (u(this, j).delete(a), a === t) break;
          const l = u(this, D).get(i);
          l && (V(l.effect), u(this, D).delete(i))
        }
        for (const [a, i] of u(this, H)) {
          if (a === n) continue;
          const l = () => {
            if (Array.from(u(this, j).values()).includes(a)) {
              var o = document.createDocumentFragment();
              kr(i, o), o.append(J()), u(this, D).set(a, {
                effect: i,
                fragment: o
              })
            } else V(i);
            u(this, H).delete(a)
          };
          u(this, je) || !r ? hn(i, l, !1) : l()
        }
      }
    });
    S(this, Xe, t => {
      u(this, j).delete(t);
      const n = Array.from(u(this, j).values());
      for (const [r, s] of u(this, D)) n.includes(r) || (V(s.effect), u(this, D).delete(r))
    });
    this.anchor = t, X(this, je, n)
  }
  ensure(t, n) {
    var r = y,
      s = wr();
    if (n && !u(this, H).has(t) && !u(this, D).has(t))
      if (s) {
        var a = document.createDocumentFragment(),
          i = J();
        a.append(i), u(this, D).set(t, {
          effect: Mt(() => n(i)),
          fragment: a
        })
      } else u(this, H).set(t, Mt(() => n(this.anchor)));
    if (u(this, j).set(r, t), s) {
      for (const [l, f] of u(this, H)) l === t ? r.skipped_effects.delete(f) : r.skipped_effects.add(f);
      for (const [l, f] of u(this, D)) l === t ? r.skipped_effects.delete(f.effect) : r.skipped_effects.add(f.effect);
      r.oncommit(u(this, qe)), r.ondiscard(u(this, Xe))
    } else O && (this.anchor = p), u(this, qe).call(this)
  }
}
j = new WeakMap, H = new WeakMap, D = new WeakMap, je = new WeakMap, qe = new WeakMap, Xe = new WeakMap;
export {
  hr as $, m as A, oa as B, js as C, Fs as D, Be as E, St as F, Yr as G, Mn as H, Ws as I, Et as J, Ls as K, y as L, Gs as M, cn as N, ft as O, Rs as P, xt as Q, gt as R, pe as S, J as T, Qr as U, me as V, ie as W, _r as X, ys as Y, Jn as Z, ws as _, Os as a, be as a$, vs as a0, p as a1, yt as a2, Qn as a3, Mt as a4, wr as a5, Zr as a6, Jr as a7, Ke as a8, xs as a9, bs as aA, dt as aB, As as aC, gs as aD, nr as aE, sr as aF, rr as aG, Ks as aH, De as aI, zr as aJ, ss as aK, Ne as aL, he as aM, as as aN, rs as aO, ns as aP, is as aQ, Ur as aR, qr as aS, Q as aT, Qe as aU, ls as aV, fs as aW, os as aX, st as aY, kt as aZ, ot as a_, At as aa, jr as ab, In as ac, Ar as ad, hn as ae, ts as af, U as ag, V as ah, es as ai, oe as aj, pn as ak, pr as al, Tr as am, w as an, ms as ao, Er as ap, bt as aq, mt as ar, Z as as, xn as at, Ut as au, Ln as av, tt as aw, v as ax, Gr as ay, Wr as az, ia as b, fe as b0, $ as b1, Ue as b2, fr as b3, kr as b4, Ve as b5, Xr as b6, He as b7, pt as b8, ds as b9, On as bA, Dn as bB, Ms as bC, Ht as bD, ye as bE, Ys as bF, Bs as bG, Ss as bH, $s as bI, fa as bJ, Br as bK, Is as ba, Zn as bb, Kr as bc, Dr as bd, Pr as be, qs as bf, Mr as bg, Js as bh, Ps as bi, _s as bj, lr as bk, us as bl, Yt as bm, Vr as bn, cs as bo, Cn as bp, zs as bq, kn as br, Ds as bs, Zs as bt, k as bu, yr as bv, Xs as bw, er as bx, Dt as by, Qs as bz, Ts as c, Ns as d, Hs as e, na as f, Ae as g, O as h, $t as i, Vs as j, ta as k, te as l, Ce as m, ps as n, ne as o, Es as p, sa as q, hs as r, Cs as s, Us as t, ks as u, ea as v, aa as w, Hr as x, Ye as y, ra as z
};