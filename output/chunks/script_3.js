var Bn = Object.defineProperty;
var Bt = e => {
  throw TypeError(e)
};
var Vn = (e, t, n) => t in e ? Bn(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Q = (e, t, n) => Vn(e, typeof t != "symbol" ? t + "" : t, n),
  yt = (e, t, n) => t.has(e) || Bt("Cannot " + n);
var c = (e, t, n) => (yt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  R = (e, t, n) => t.has(e) ? Bt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  P = (e, t, n, r) => (yt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  A = (e, t, n) => (yt(e, t, "access private method"), n);
var Un = Array.isArray,
  Gn = Array.prototype.indexOf,
  rt = Array.prototype.includes,
  ns = Array.from,
  $n = Object.defineProperty,
  Ue = Object.getOwnPropertyDescriptor,
  zn = Object.getOwnPropertyDescriptors,
  Wn = Object.prototype,
  Kn = Array.prototype,
  tn = Object.getPrototypeOf,
  Vt = Object.isExtensible;

function rs(e) {
  return typeof e == "function"
}
const Ge = () => {};

function ss(e) {
  return e()
}

function Xn(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function nn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s
  });
  return {
    promise: n,
    resolve: e,
    reject: t
  }
}

function is(e, t, n = !1) {
  return e === void 0 ? n ? t() : t : e
}

function as(e, t) {
  if (Array.isArray(e)) return e;
  if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const O = 2,
  ge = 4,
  Xe = 8,
  kt = 1 << 24,
  U = 16,
  X = 32,
  ne = 64,
  Zn = 128,
  H = 512,
  N = 1024,
  C = 2048,
  Z = 4096,
  Y = 8192,
  $ = 16384,
  xe = 32768,
  Ut = 1 << 25,
  st = 65536,
  it = 1 << 17,
  Jn = 1 << 18,
  He = 1 << 19,
  rn = 1 << 20,
  ls = 1 << 25,
  Te = 65536,
  at = 1 << 21,
  Oe = 1 << 22,
  ae = 1 << 23,
  ye = Symbol("$state"),
  fs = Symbol("legacy props"),
  us = Symbol(""),
  Qn = Symbol("attributes"),
  er = Symbol("class"),
  tr = Symbol("style"),
  nr = Symbol("text"),
  et = Symbol("form reset"),
  dt = new class extends Error {
    constructor() {
      super(...arguments);
      Q(this, "name", "StaleReactionError");
      Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  };
var Qt;
const cs = !!((Qt = globalThis.document) != null && Qt.contentType) && globalThis.document.contentType.includes("xml"),
  _s = 1,
  Ze = 3,
  Ct = 8;

function rr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function sr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function ds(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate")
}

function ir(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function ar() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function lr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function fr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function vs() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function hs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function ur() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function or() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function cr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const ws = 1,
  bs = 2,
  ys = 4,
  Es = 8,
  ms = 16,
  gs = 1,
  Ts = 2,
  As = 4,
  Ss = 8,
  xs = 16,
  Ns = 1,
  Rs = 2,
  ks = 4,
  sn = 1,
  _r = 2,
  dr = "[",
  vr = "[!",
  Cs = "[?",
  hr = "]",
  Ot = {},
  x = Symbol("uninitialized"),
  pr = "http://www.w3.org/1999/xhtml",
  Os = "http://www.w3.org/2000/svg",
  Is = "http://www.w3.org/1998/Math/MathML",
  Ms = "@attach";

function wr() {
  console.warn("https://svelte.dev/e/derived_inert")
}

function It(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Ds() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function Ps() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let I = !1;

function Ls(e) {
  I = e
}
let E;

function Ae(e) {
  if (e === null) throw It(), Ot;
  return E = e
}

function an() {
  return Ae(ce(E))
}

function Fs(e) {
  if (I) {
    if (ce(E) !== null) throw It(), Ot;
    E = e
  }
}

function js(e = 1) {
  if (I) {
    for (var t = e, n = E; t--;) n = ce(n);
    E = n
  }
}

function Hs(e = !0) {
  for (var t = 0, n = E;;) {
    if (n.nodeType === Ct) {
      var r = n.data;
      if (r === hr) {
        if (t === 0) return n;
        t -= 1
      } else(r === dr || r === vr || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var s = ce(n);
    e && n.remove(), n = s
  }
}

function Ys(e) {
  if (!e || e.nodeType !== Ct) throw It(), Ot;
  return e.data
}

function ln(e) {
  return e === this.v
}

function fn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function un(e) {
  return !fn(e, this.v)
}
let vt = !1;

function qs() {
  vt = !0
}
let g = null;

function lt(e) {
  g = e
}

function Bs(e) {
  return ht().get(e)
}

function Vs(e, t) {
  return ht().set(e, t), t
}

function Us(e) {
  return ht().has(e)
}

function Gs() {
  return ht()
}

function $s(e, t = !1, n) {
  g = {
    p: g,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: y,
    l: vt && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function zs(e) {
  var t = g,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Rn(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, g = t.p, e ?? {}
}

function Je() {
  return !vt || g !== null && g.l === null
}

function ht(e) {
  return g === null && rr(), g.c ?? (g.c = new Map(br(g) || void 0))
}

function br(e) {
  let t = e.p;
  for (; t !== null;) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p
  }
  return null
}
let de = [];

function on() {
  var e = de;
  de = [], Xn(e)
}

function ft(e) {
  if (de.length === 0 && !ze) {
    var t = de;
    queueMicrotask(() => {
      t === de && on()
    })
  }
  de.push(e)
}

function yr() {
  for (; de.length > 0;) on()
}

function Er(e) {
  var t = y;
  if (t === null) return p.f |= ae, e;
  if ((t.f & xe) === 0 && (t.f & ge) === 0) throw e;
  ut(e, t)
}

function ut(e, t) {
  if (!(t !== null && (t.f & $) !== 0)) {
    for (; t !== null;) {
      if ((t.f & Zn) !== 0) {
        if ((t.f & xe) === 0) throw e;
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
}
const mr = -7169;

function T(e, t) {
  e.f = e.f & mr | t
}

function Mt(e) {
  (e.f & H) !== 0 || e.deps === null ? T(e, N) : T(e, Z)
}

function cn(e) {
  if (e !== null)
    for (const t of e)(t.f & O) === 0 || (t.f & Te) === 0 || (t.f ^= Te, cn(t.deps))
}

function gr(e, t, n) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & Z) !== 0 && n.add(e), cn(e.deps), T(e, N)
}

function Tr(e, t, n) {
  if (e == null) return t(void 0), Ge;
  const r = Gr(() => e.subscribe(t, n));
  return r.unsubscribe ? () => r.unsubscribe() : r
}
const Ne = [];

function Ws(e, t = Ge) {
  let n = null;
  const r = new Set;

  function s(l) {
    if (fn(e, l) && (e = l, n)) {
      const a = !Ne.length;
      for (const f of r) f[1](), Ne.push(f, e);
      if (a) {
        for (let f = 0; f < Ne.length; f += 2) Ne[f][0](Ne[f + 1]);
        Ne.length = 0
      }
    }
  }

  function i(l) {
    s(l(e))
  }

  function u(l, a = Ge) {
    const f = [l, a];
    return r.add(f), r.size === 1 && (n = t(s, i) || Ge), l(e), () => {
      r.delete(f), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: s,
    update: i,
    subscribe: u
  }
}

function Ks(e) {
  let t;
  return Tr(e, n => t = n)(), t
}

function _n(e, t, n, r) {
  const s = Je() ? Dt : xr;
  var i = e.filter(_ => !_.settled),
    u = t.map(s);
  if (n.length === 0 && i.length === 0) {
    r(u);
    return
  }
  var l = y,
    a = Ar(),
    f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map(_ => _.promise)) : null;

  function d(_) {
    if ((l.f & $) === 0) {
      a();
      try {
        r([...u, ..._])
      } catch (h) {
        ut(h, l)
      }
      ot()
    }
  }
  var v = dn();
  if (n.length === 0) {
    f.then(() => d([])).finally(v);
    return
  }

  function o() {
    Promise.all(n.map(_ => Sr(_))).then(d).catch(_ => ut(_, l)).finally(v)
  }
  f ? f.then(() => {
    a(), o(), ot()
  }) : o()
}

function Ar() {
  var e = y,
    t = p,
    n = g,
    r = w;
  return function(i = !0) {
    oe(e), J(t), lt(n), i && (e.f & $) === 0 && (r == null || r.activate(), r == null || r.apply())
  }
}

function ot(e = !0) {
  oe(null), J(null), lt(null), e && (w == null || w.deactivate())
}

function dn() {
  var e = y,
    t = e.b,
    n = w,
    r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e)
  }
}

function Dt(e) {
  var t = O | C;
  return y !== null && (y.f |= He), {
    ctx: g,
    deps: null,
    effects: null,
    equals: ln,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: x,
    wv: 0,
    parent: y,
    ac: null
  }
}
const Ye = Symbol("obsolete");

function Sr(e, t, n) {
  let r = y;
  r === null && sr();
  var s = void 0,
    i = jt(x),
    u = !p,
    l = new Set;
  return Hr(() => {
    var _, h;
    var a = y,
      f = nn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, b => {
        b !== dt && f.reject(b)
      }).finally(ot)
    } catch (b) {
      f.reject(b), ot()
    }
    var d = w;
    if (u) {
      if ((a.f & xe) !== 0) var v = dn();
      if ((_ = r.b) != null && _.is_rendered())(h = d.async_deriveds.get(a)) == null || h.reject(Ye);
      else
        for (const b of l.values()) b.reject(Ye);
      l.add(f), d.async_deriveds.set(a, f)
    }
    const o = (b, S = void 0) => {
      v == null || v(), l.delete(f), S !== Ye && (d.activate(), S ? (i.f |= ae, Nt(i, S)) : ((i.f & ae) !== 0 && (i.f ^= ae), Nt(i, b)), d.deactivate())
    };
    f.promise.then(o, b => o(null, b || "unknown"))
  }), Ht(() => {
    for (const a of l) a.reject(Ye)
  }), new Promise(a => {
    function f(d) {
      function v() {
        d === s ? a(i) : f(s)
      }
      d.then(v, v)
    }
    f(s)
  })
}

function Xs(e) {
  const t = Dt(e);
  return Mn(t), t
}

function xr(e) {
  const t = Dt(e);
  return t.equals = un, t
}

function Nr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) fe(t[n])
  }
}

function Pt(e) {
  var t, n = y,
    r = e.parent;
  if (!ue && r !== null && e.v !== x && (r.f & ($ | Y)) !== 0) return wr(), e.v;
  oe(r);
  try {
    e.f &= ~Te, Nr(e), t = Fn(e)
  } finally {
    oe(n)
  }
  return t
}

function vn(e) {
  var t = Pt(e);
  if (!e.equals(t) && (e.wv = Pn(), (!(w != null && w.is_fork) || e.deps === null) && (w !== null ? (w.capture(e, t, !0), $e == null || $e.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    T(e, N);
    return
  }
  ue || (k !== null ? (Nn() || w != null && w.is_fork) && k.set(e, t) : Mt(e))
}

function Rr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(dt), r.fn !== null && (r.teardown = Ge), r.ac = null, We(r, 0), Yt(r))
}

function hn(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && t.fn !== null && je(t)
}
let Et = null,
  Re = null,
  w = null,
  $e = null,
  k = null,
  At = null,
  ze = !1,
  mt = !1,
  Ce = null,
  tt = null;
var Gt = 0;
let kr = 1;
var Ie, ie, we, Me, De, Pe, ee, Le, M, Ke, te, B, z, Fe, be, m, St, qe, xt, pn, wn, ke, Cr, Be;
const _t = class _t {
  constructor() {
    R(this, m);
    Q(this, "id", kr++);
    R(this, Ie, !1);
    Q(this, "linked", !0);
    R(this, ie, null);
    R(this, we, null);
    Q(this, "async_deriveds", new Map);
    Q(this, "current", new Map);
    Q(this, "previous", new Map);
    R(this, Me, new Set);
    R(this, De, new Set);
    R(this, Pe, 0);
    R(this, ee, new Map);
    R(this, Le, null);
    R(this, M, []);
    R(this, Ke, []);
    R(this, te, new Set);
    R(this, B, new Set);
    R(this, z, new Map);
    R(this, Fe, new Set);
    Q(this, "is_fork", !1);
    R(this, be, !1);
    Re === null ? Et = Re = this : (P(Re, we, this), P(this, ie, Re)), Re = this
  }
  skip_effect(t) {
    c(this, z).has(t) || c(this, z).set(t, {
      d: [],
      m: []
    }), c(this, Fe).delete(t)
  }
  unskip_effect(t, n = r => this.schedule(r)) {
    var r = c(this, z).get(t);
    if (r) {
      c(this, z).delete(t);
      for (var s of r.d) T(s, C), n(s);
      for (s of r.m) T(s, Z), n(s)
    }
    c(this, Fe).add(t)
  }
  capture(t, n, r = !1) {
    t.v !== x && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ae) === 0 && (this.current.set(t, [n, r]), k == null || k.set(t, n)), this.is_fork || (t.v = n)
  }
  activate() {
    w = this
  }
  deactivate() {
    w = null, k = null
  }
  flush() {
    try {
      mt = !0, w = this, A(this, m, qe).call(this)
    } finally {
      Gt = 0, At = null, Ce = null, tt = null, mt = !1, w = null, k = null, Ee.clear()
    }
  }
  discard() {
    var t;
    for (const n of c(this, De)) n(this);
    c(this, De).clear();
    for (const n of this.async_deriveds.values()) n.reject(Ye);
    A(this, m, Be).call(this), (t = c(this, Le)) == null || t.resolve()
  }
  register_created_effect(t) {
    c(this, Ke).push(t)
  }
  increment(t, n) {
    if (P(this, Pe, c(this, Pe) + 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      c(this, ee).set(n, r + 1)
    }
  }
  decrement(t, n) {
    if (P(this, Pe, c(this, Pe) - 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      r === 1 ? c(this, ee).delete(n) : c(this, ee).set(n, r - 1)
    }
    c(this, be) || (P(this, be, !0), ft(() => {
      P(this, be, !1), this.linked && this.flush()
    }))
  }
  transfer_effects(t, n) {
    for (const r of t) c(this, te).add(r);
    for (const r of n) c(this, B).add(r);
    t.clear(), n.clear()
  }
  oncommit(t) {
    c(this, Me).add(t)
  }
  ondiscard(t) {
    c(this, De).add(t)
  }
  settled() {
    return (c(this, Le) ?? P(this, Le, nn())).promise
  }
  static ensure() {
    if (w === null) {
      const t = w = new _t;
      !mt && !ze && ft(() => {
        c(t, Ie) || t.flush()
      })
    }
    return w
  }
  apply() {
    {
      k = null;
      return
    }
  }
  schedule(t) {
    var s;
    if (At = t, (s = t.b) != null && s.is_pending && (t.f & (ge | Xe | kt)) !== 0 && (t.f & xe) === 0) {
      t.b.defer_effect(t);
      return
    }
    for (var n = t; n.parent !== null;) {
      n = n.parent;
      var r = n.f;
      if (Ce !== null && n === y && (p === null || (p.f & O) === 0)) return;
      if ((r & (ne | X)) !== 0) {
        if ((r & N) === 0) return;
        n.f ^= N
      }
    }
    c(this, M).push(n)
  }
};
Ie = new WeakMap, ie = new WeakMap, we = new WeakMap, Me = new WeakMap, De = new WeakMap, Pe = new WeakMap, ee = new WeakMap, Le = new WeakMap, M = new WeakMap, Ke = new WeakMap, te = new WeakMap, B = new WeakMap, z = new WeakMap, Fe = new WeakMap, be = new WeakMap, m = new WeakSet, St = function() {
  if (this.is_fork) return !0;
  for (const r of c(this, ee).keys()) {
    for (var t = r, n = !1; t.parent !== null;) {
      if (c(this, z).has(t)) {
        n = !0;
        break
      }
      t = t.parent
    }
    if (!n) return !0
  }
  return !1
}, qe = function() {
  var a, f, d, v;
  P(this, Ie, !0), Gt++ > 1e3 && (A(this, m, Be).call(this), Ir());
  for (const o of c(this, te)) c(this, B).delete(o), T(o, C), this.schedule(o);
  for (const o of c(this, B)) T(o, Z), this.schedule(o);
  const t = c(this, M);
  P(this, M, []), this.apply();
  var n = Ce = [],
    r = [],
    s = tt = [];
  for (const o of t) try {
    A(this, m, xt).call(this, o, n, r)
  } catch (_) {
    throw En(o), A(this, m, St).call(this) || this.discard(), _
  }
  if (w = null, s.length > 0) {
    var i = _t.ensure();
    for (const o of s) i.schedule(o)
  }
  if (Ce = null, tt = null, A(this, m, St).call(this)) {
    A(this, m, ke).call(this, r), A(this, m, ke).call(this, n);
    for (const [o, _] of c(this, z)) yn(o, _);
    s.length > 0 && A(a = w, m, qe).call(a);
    return
  }
  const u = A(this, m, pn).call(this);
  if (u) {
    A(this, m, ke).call(this, r), A(this, m, ke).call(this, n), A(f = u, m, wn).call(f, this);
    return
  }
  c(this, te).clear(), c(this, B).clear();
  for (const o of c(this, Me)) o(this);
  c(this, Me).clear(), $e = this, $t(r), $t(n), $e = null, (d = c(this, Le)) == null || d.resolve();
  var l = w;
  if (c(this, Pe) === 0 && (c(this, M).length === 0 || l !== null) && A(this, m, Be).call(this), c(this, M).length > 0)
    if (l !== null) {
      const o = l;
      c(o, M).push(...c(this, M).filter(_ => !c(o, M).includes(_)))
    } else l = this;
  l !== null && A(v = l, m, qe).call(v)
}, xt = function(t, n, r) {
  t.f ^= N;
  for (var s = t.first; s !== null;) {
    var i = s.f,
      u = (i & (X | ne)) !== 0,
      l = u && (i & N) !== 0,
      a = l || (i & Y) !== 0 || c(this, z).has(s);
    if (!a && s.fn !== null) {
      u ? s.f ^= N : (i & ge) !== 0 ? n.push(s) : Qe(s) && ((i & U) !== 0 && c(this, B).add(s), je(s));
      var f = s.first;
      if (f !== null) {
        s = f;
        continue
      }
    }
    for (; s !== null;) {
      var d = s.next;
      if (d !== null) {
        s = d;
        break
      }
      s = s.parent
    }
  }
}, pn = function() {
  for (var t = c(this, ie); t !== null;) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r) return t
    }
    t = c(t, ie)
  }
  return null
}, wn = function(t) {
  var r;
  for (const [s, i] of t.current) !this.previous.has(s) && t.previous.has(s) && this.previous.set(s, t.previous.get(s)), this.current.set(s, i);
  for (const [s, i] of t.async_deriveds) {
    const u = this.async_deriveds.get(s);
    u && i.promise.then(u.resolve).catch(u.reject)
  }
  t.async_deriveds.clear(), this.transfer_effects(c(t, te), c(t, B));
  const n = s => {
    var i = s.reactions;
    if (i !== null)
      for (const a of i) {
        var u = a.f;
        if ((u & O) !== 0) n(a);
        else {
          var l = a;
          u & (Oe | U) && !this.async_deriveds.has(l) && (c(this, B).delete(l), T(l, C), this.schedule(l))
        }
      }
  };
  for (const s of this.current.keys()) n(s);
  this.oncommit(() => t.discard()), A(r = t, m, Be).call(r), w = this, A(this, m, qe).call(this)
}, ke = function(t) {
  for (var n = 0; n < t.length; n += 1) gr(t[n], c(this, te), c(this, B))
}, Cr = function() {
  var v;
  for (let o = Et; o !== null; o = c(o, we)) {
    var t = o.id < this.id,
      n = [];
    for (const [_, [h, b]] of this.current) {
      if (o.current.has(_)) {
        var r = o.current.get(_)[0];
        if (t && h !== r) o.current.set(_, [h, b]);
        else continue
      }
      n.push(_)
    }
    if (t)
      for (const [_, h] of this.async_deriveds) {
        const b = o.async_deriveds.get(_);
        b && h.promise.then(b.resolve).catch(b.reject)
      }
    var s = [...o.current.keys()].filter(_ => !o.current.get(_)[1]);
    if (!(!c(o, Ie) || s.length === 0)) {
      var i = s.filter(_ => !this.current.has(_));
      if (i.length === 0) t && o.discard();
      else if (n.length > 0) {
        if (t)
          for (const _ of c(this, Fe)) o.unskip_effect(_, h => {
            var b;
            (h.f & (U | Oe)) !== 0 ? o.schedule(h) : A(b = o, m, ke).call(b, [h])
          });
        o.activate();
        var u = new Set,
          l = new Map;
        for (var a of n) bn(a, i, u, l);
        l = new Map;
        var f = [...o.current].filter(([_, h]) => {
          const b = this.current.get(_);
          return b ? b[0] !== h[0] || b[1] !== h[1] : !0
        }).map(([_]) => _);
        if (f.length > 0)
          for (const _ of c(this, Ke))(_.f & ($ | Y | it)) === 0 && Lt(_, f, l) && ((_.f & (Oe | U)) !== 0 ? (T(_, C), o.schedule(_)) : c(o, te).add(_));
        if (c(o, M).length > 0 && !c(o, be)) {
          o.apply();
          for (var d of c(o, M)) A(v = o, m, xt).call(v, d, [], []);
          P(o, M, [])
        }
        o.deactivate()
      }
    }
  }
}, Be = function() {
  if (this.linked) {
    var t = c(this, ie),
      n = c(this, we);
    t === null ? Et = n : P(t, we, n), n === null ? Re = t : P(n, ie, t), this.linked = !1
  }
};
let le = _t;

function Or(e) {
  var t = ze;
  ze = !0;
  try {
    for (var n;;) {
      if (yr(), w === null) return n;
      w.flush()
    }
  } finally {
    ze = t
  }
}

function Ir() {
  try {
    fr()
  } catch (e) {
    ut(e, At)
  }
}
let q = null;

function $t(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & ($ | Y)) === 0 && Qe(r) && (q = new Set, je(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Cn(r), (q == null ? void 0 : q.size) > 0)) {
        Ee.clear();
        for (const s of q) {
          if ((s.f & ($ | Y)) !== 0) continue;
          const i = [s];
          let u = s.parent;
          for (; u !== null;) q.has(u) && (q.delete(u), i.push(u)), u = u.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const a = i[l];
            (a.f & ($ | Y)) === 0 && je(a)
          }
        }
        q.clear()
      }
    }
    q = null
  }
}

function bn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & O) !== 0 ? bn(s, t, n, r) : (i & (Oe | U)) !== 0 && (i & C) === 0 && Lt(s, t, r) && (T(s, C), Ft(s))
    }
}

function Lt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (rt.call(t, s)) return !0;
      if ((s.f & O) !== 0 && Lt(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function Ft(e) {
  w.schedule(e)
}

function yn(e, t) {
  if (!((e.f & X) !== 0 && (e.f & N) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & Z) !== 0 && t.m.push(e), T(e, N);
    for (var n = e.first; n !== null;) yn(n, t), n = n.next
  }
}

function En(e) {
  T(e, N);
  for (var t = e.first; t !== null;) En(t), t = t.next
}
let ct = new Set;
const Ee = new Map;
let mn = !1;

function jt(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: ln,
    rv: 0,
    wv: 0
  };
  return n
}

function re(e, t) {
  const n = jt(e);
  return Mn(n), n
}

function Zs(e, t = !1, n = !0) {
  var s;
  const r = jt(e);
  return t || (r.equals = un), vt && n && g !== null && g.l !== null && ((s = g.l).s ?? (s.s = [])).push(r), r
}

function se(e, t, n = !1) {
  p !== null && (!G || (p.f & it) !== 0) && Je() && (p.f & (O | U | Oe | it)) !== 0 && (W === null || !W.has(e)) && cr();
  let r = n ? Ve(t) : t;
  return Nt(e, r, tt)
}

function Nt(e, t, n = null) {
  if (!e.equals(t)) {
    Ee.set(e, ue ? t : e.v);
    var r = le.ensure();
    if (r.capture(e, t), (e.f & O) !== 0) {
      const s = e;
      (e.f & C) !== 0 && Pt(s), k === null && Mt(s)
    }
    e.wv = Pn(), gn(e, C, n), Je() && y !== null && (y.f & N) !== 0 && (y.f & (X | ne)) === 0 && (j === null ? Vr([e]) : j.push(e)), !r.is_fork && ct.size > 0 && !mn && Mr()
  }
  return t
}

function Mr() {
  mn = !1;
  for (const e of ct) {
    (e.f & N) !== 0 && T(e, Z);
    let t;
    try {
      t = Qe(e)
    } catch {
      t = !0
    }
    t && je(e)
  }
  ct.clear()
}

function Js(e, t = 1) {
  var n = he(e),
    r = t === 1 ? n++ : n--;
  return se(e, n), r
}

function gt(e) {
  se(e, e.v + 1)
}

function gn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = Je(), i = r.length, u = 0; u < i; u++) {
      var l = r[u],
        a = l.f;
      if (!(!s && l === y)) {
        var f = (a & C) === 0;
        if (f && T(l, t), (a & it) !== 0) ct.add(l);
        else if ((a & O) !== 0) {
          var d = l;
          k == null || k.delete(d), (a & Te) === 0 && (a & H && (y === null || (y.f & at) === 0) && (l.f |= Te), gn(d, Z, n))
        } else if (f) {
          var v = l;
          (a & U) !== 0 && q !== null && q.add(v), n !== null ? n.push(v) : Ft(v)
        }
      }
    }
}

function Ve(e) {
  if (typeof e != "object" || e === null || ye in e) return e;
  const t = tn(e);
  if (t !== Wn && t !== Kn) return e;
  var n = new Map,
    r = Un(e),
    s = re(0),
    i = me,
    u = l => {
      if (me === i) return l();
      var a = p,
        f = me;
      J(null), Zt(i);
      var d = l();
      return J(a), Zt(f), d
    };
  return r && n.set("length", re(e.length)), new Proxy(e, {
    defineProperty(l, a, f) {
      (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ur();
      var d = n.get(a);
      return d === void 0 ? u(() => {
        var v = re(f.value);
        return n.set(a, v), v
      }) : se(d, f.value, !0), !0
    },
    deleteProperty(l, a) {
      var f = n.get(a);
      if (f === void 0) {
        if (a in l) {
          const d = u(() => re(x));
          n.set(a, d), gt(s)
        }
      } else se(f, x), gt(s);
      return !0
    },
    get(l, a, f) {
      var _;
      if (a === ye) return e;
      var d = n.get(a),
        v = a in l;
      if (d === void 0 && (!v || (_ = Ue(l, a)) != null && _.writable) && (d = u(() => {
          var h = Ve(v ? l[a] : x),
            b = re(h);
          return b
        }), n.set(a, d)), d !== void 0) {
        var o = he(d);
        return o === x ? void 0 : o
      }
      return Reflect.get(l, a, f)
    },
    getOwnPropertyDescriptor(l, a) {
      var f = Reflect.getOwnPropertyDescriptor(l, a);
      if (f && "value" in f) {
        var d = n.get(a);
        d && (f.value = he(d))
      } else if (f === void 0) {
        var v = n.get(a),
          o = v == null ? void 0 : v.v;
        if (v !== void 0 && o !== x) return {
          enumerable: !0,
          configurable: !0,
          value: o,
          writable: !0
        }
      }
      return f
    },
    has(l, a) {
      var o;
      if (a === ye) return !0;
      var f = n.get(a),
        d = f !== void 0 && f.v !== x || Reflect.has(l, a);
      if (f !== void 0 || y !== null && (!d || (o = Ue(l, a)) != null && o.writable)) {
        f === void 0 && (f = u(() => {
          var _ = d ? Ve(l[a]) : x,
            h = re(_);
          return h
        }), n.set(a, f));
        var v = he(f);
        if (v === x) return !1
      }
      return d
    },
    set(l, a, f, d) {
      var qt;
      var v = n.get(a),
        o = a in l;
      if (r && a === "length")
        for (var _ = f; _ < v.v; _ += 1) {
          var h = n.get(_ + "");
          h !== void 0 ? se(h, x) : _ in l && (h = u(() => re(x)), n.set(_ + "", h))
        }
      if (v === void 0)(!o || (qt = Ue(l, a)) != null && qt.writable) && (v = u(() => re(void 0)), se(v, Ve(f)), n.set(a, v));
      else {
        o = v.v !== x;
        var b = u(() => Ve(f));
        se(v, b)
      }
      var S = Reflect.getOwnPropertyDescriptor(l, a);
      if (S != null && S.set && S.set.call(d, f), !o) {
        if (r && typeof a == "string") {
          var _e = n.get("length"),
            bt = Number(a);
          Number.isInteger(bt) && bt >= _e.v && se(_e, bt + 1)
        }
        gt(s)
      }
      return !0
    },
    ownKeys(l) {
      he(s);
      var a = Reflect.ownKeys(l).filter(v => {
        var o = n.get(v);
        return o === void 0 || o.v !== x
      });
      for (var [f, d] of n) d.v !== x && !(f in l) && a.push(f);
      return a
    },
    setPrototypeOf() {
      or()
    }
  })
}

function zt(e) {
  try {
    if (e !== null && typeof e == "object" && ye in e) return e[ye]
  } catch {}
  return e
}

function Qs(e, t) {
  return Object.is(zt(e), zt(t))
}
var Wt, Dr, Tn, An, Sn;

function ei() {
  if (Wt === void 0) {
    Wt = window, Dr = document, Tn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    An = Ue(t, "firstChild").get, Sn = Ue(t, "nextSibling").get, Vt(e) && (e[er] = void 0, e[Qn] = null, e[tr] = void 0, e.__e = void 0), Vt(n) && (n[nr] = void 0)
  }
}

function Se(e = "") {
  return document.createTextNode(e)
}

function V(e) {
  return An.call(e)
}

function ce(e) {
  return Sn.call(e)
}

function ti(e, t) {
  if (!I) return V(e);
  var n = V(E);
  if (n === null) n = E.appendChild(Se());
  else if (t && n.nodeType !== Ze) {
    var r = Se();
    return n == null || n.before(r), Ae(r), r
  }
  return t && pt(n), Ae(n), n
}

function ni(e, t = !1) {
  if (!I) {
    var n = V(e);
    return n instanceof Comment && n.data === "" ? ce(n) : n
  }
  if (t) {
    if ((E == null ? void 0 : E.nodeType) !== Ze) {
      var r = Se();
      return E == null || E.before(r), Ae(r), r
    }
    pt(E)
  }
  return E
}

function ri(e, t = 1, n = !1) {
  let r = I ? E : e;
  for (var s; t--;) s = r, r = ce(r);
  if (!I) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ze) {
      var i = Se();
      return r === null ? s == null || s.after(i) : r.before(i), Ae(i), i
    }
    pt(r)
  }
  return Ae(r), r
}

function Pr(e) {
  e.textContent = ""
}

function si() {
  return !1
}

function Lr(e, t, n) {
  return t == null || t === pr ? n ? document.createElement(e, {
    is: n
  }) : document.createElement(e) : n ? document.createElementNS(t, e, {
    is: n
  }) : document.createElementNS(t, e)
}

function pt(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Ze;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function ii(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ft(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function ai(e) {
  I && V(e) !== null && Pr(e)
}
let Kt = !1;

function Fr() {
  Kt || (Kt = !0, document.addEventListener("reset", e => {
    Promise.resolve().then(() => {
      var t;
      if (!e.defaultPrevented)
        for (const n of e.target.elements)(t = n[et]) == null || t.call(n)
    })
  }, {
    capture: !0
  }))
}

function li(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  Ht(() => {
    for (var i of t) e.removeEventListener(i, n)
  })
}

function wt(e) {
  var t = p,
    n = y;
  J(null), oe(null);
  try {
    return e()
  } finally {
    J(t), oe(n)
  }
}

function fi(e, t, n, r = n) {
  e.addEventListener(t, () => wt(n));
  const s = e[et];
  s ? e[et] = () => {
    s(), r(!0)
  } : e[et] = () => r(!0), Fr()
}

function xn(e) {
  y === null && (p === null && lr(), ar()), ue && ir()
}

function jr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function F(e, t) {
  var n = y;
  n !== null && (n.f & Y) !== 0 && (e |= Y);
  var r = {
    ctx: g,
    deps: null,
    nodes: null,
    f: e | C | H,
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
  w == null || w.register_created_effect(r);
  var s = r;
  if ((e & ge) !== 0) Ce !== null ? Ce.push(r) : le.ensure().schedule(r);
  else if (t !== null) {
    try {
      je(r)
    } catch (u) {
      throw fe(r), u
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & He) === 0 && (s = s.first, (e & U) !== 0 && (e & st) !== 0 && s !== null && (s.f |= st))
  }
  if (s !== null && (s.parent = n, n !== null && jr(s, n), p !== null && (p.f & O) !== 0 && (e & ne) === 0)) {
    var i = p;
    (i.effects ?? (i.effects = [])).push(s)
  }
  return r
}

function Nn() {
  return p !== null && !G
}

function Ht(e) {
  const t = F(Xe, null);
  return T(t, N), t.teardown = e, t
}

function ui(e) {
  xn();
  var t = y.f,
    n = !p && (t & X) !== 0 && g !== null && !g.i;
  if (n) {
    var r = g;
    (r.e ?? (r.e = [])).push(e)
  } else return Rn(e)
}

function Rn(e) {
  return F(ge | rn, e)
}

function oi(e) {
  return xn(), F(Xe | rn, e)
}

function ci(e) {
  le.ensure();
  const t = F(ne | He, e);
  return () => {
    fe(t)
  }
}

function _i(e) {
  le.ensure();
  const t = F(ne | He, e);
  return (n = {}) => new Promise(r => {
    n.outro ? Br(t, () => {
      fe(t), r(void 0)
    }) : (fe(t), r(void 0))
  })
}

function di(e) {
  return F(ge, e)
}

function Hr(e) {
  return F(Oe | He, e)
}

function vi(e, t = 0) {
  return F(Xe | t, e)
}

function hi(e, t = [], n = [], r = []) {
  _n(r, t, n, s => {
    F(Xe, () => {
      e(...s.map(he))
    })
  })
}

function pi(e, t = [], n = [], r = []) {
  _n(r, t, n, s => {
    F(ge, () => e(...s.map(he)))
  })
}

function wi(e, t = 0) {
  var n = F(U | t, e);
  return n
}

function bi(e, t = 0) {
  var n = F(kt | t, e);
  return n
}

function yi(e) {
  return F(X | He, e)
}

function kn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ue,
      r = p;
    Xt(!0), J(null);
    try {
      t.call(null)
    } finally {
      Xt(n), J(r)
    }
  }
}

function Yt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && wt(() => {
      s.abort(dt)
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : fe(n, t), n = r
  }
}

function Yr(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & X) === 0 && fe(t), t = n
  }
}

function fe(e, t = !0) {
  var n = !1;
  (t || (e.f & Jn) !== 0) && e.nodes !== null && e.nodes.end !== null && (qr(e.nodes.start, e.nodes.end), n = !0), e.f |= Ut, Yt(e, t && !n), We(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r) i.stop();
  kn(e), e.f ^= Ut, e.f |= $;
  var s = e.parent;
  s !== null && s.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null
}

function qr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : ce(e);
    e.remove(), e = n
  }
}

function Cn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Br(e, t, n = !0) {
  var r = [];
  On(e, r, !0);
  var s = () => {
      n && fe(e), t && t()
    },
    i = r.length;
  if (i > 0) {
    var u = () => --i || s();
    for (var l of r) l.out(u)
  } else s()
}

function On(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)(l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null;) {
      var i = s.next;
      if ((s.f & ne) === 0) {
        var u = (s.f & st) !== 0 || (s.f & X) !== 0 && (e.f & U) !== 0;
        On(s, t, u ? n : !1)
      }
      s = i
    }
  }
}

function Ei(e) {
  In(e, !0)
}

function In(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & N) === 0 && (T(e, C), le.ensure().schedule(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & st) !== 0 || (n.f & X) !== 0;
      In(n, s ? t : !1), n = r
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)(u.is_global || t) && u.in()
  }
}

function mi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : ce(n);
      t.append(n), n = s
    }
}
let nt = !1,
  ue = !1;

function Xt(e) {
  ue = e
}
let p = null,
  G = !1;

function J(e) {
  p = e
}
let y = null;

function oe(e) {
  y = e
}
let W = null;

function Mn(e) {
  p !== null && (W ?? (W = new Set)).add(e)
}
let D = null,
  L = 0,
  j = null;

function Vr(e) {
  j = e
}
let Dn = 1,
  ve = 0,
  me = ve;

function Zt(e) {
  me = e
}

function Pn() {
  return ++Dn
}

function Qe(e) {
  var t = e.f;
  if ((t & C) !== 0) return !0;
  if (t & O && (e.f &= ~Te), (t & Z) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (Qe(i) && vn(i), i.wv > e.wv) return !0
    }(t & H) !== 0 && k === null && T(e, N)
  }
  return !1
}

function Ln(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(W !== null && W.has(e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & O) !== 0 ? Ln(i, t, !1) : t === i && (n ? T(i, C) : (i.f & N) !== 0 && T(i, Z), Ft(i))
    }
}

function Fn(e) {
  var b;
  var t = D,
    n = L,
    r = j,
    s = p,
    i = W,
    u = g,
    l = G,
    a = me,
    f = e.f;
  D = null, L = 0, j = null, p = (f & (X | ne)) === 0 ? e : null, W = null, lt(e.ctx), G = !1, me = ++ve, e.ac !== null && (wt(() => {
    e.ac.abort(dt)
  }), e.ac = null);
  try {
    e.f |= at;
    var d = e.fn,
      v = d();
    e.f |= xe;
    var o = e.deps,
      _ = w == null ? void 0 : w.is_fork;
    if (D !== null) {
      var h;
      if (_ || We(e, L), o !== null && L > 0)
        for (o.length = L + D.length, h = 0; h < D.length; h++) o[L + h] = D[h];
      else e.deps = o = D;
      if (Nn() && (e.f & H) !== 0)
        for (h = L; h < o.length; h++)((b = o[h]).reactions ?? (b.reactions = [])).push(e)
    } else !_ && o !== null && L < o.length && (We(e, L), o.length = L);
    if (Je() && j !== null && !G && o !== null && (e.f & (O | Z | C)) === 0)
      for (h = 0; h < j.length; h++) Ln(j[h], e);
    if (s !== null && s !== e) {
      if (ve++, s.deps !== null)
        for (let S = 0; S < n; S += 1) s.deps[S].rv = ve;
      if (t !== null)
        for (const S of t) S.rv = ve;
      j !== null && (r === null ? r = j : r.push(...j))
    }
    return (e.f & ae) !== 0 && (e.f ^= ae), v
  } catch (S) {
    return Er(S)
  } finally {
    e.f ^= at, D = t, L = n, j = r, p = s, W = i, lt(u), G = l, me = a
  }
}

function Ur(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Gn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & O) !== 0 && (D === null || !rt.call(D, t))) {
    var i = t;
    (i.f & H) !== 0 && (i.f ^= H, i.f &= ~Te), i.v !== x && Mt(i), Rr(i), We(i, 0)
  }
}

function We(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Ur(e, n[r])
}

function je(e) {
  var t = e.f;
  if ((t & $) === 0) {
    T(e, N);
    var n = y,
      r = nt;
    y = e, nt = !0;
    try {
      (t & (U | kt)) !== 0 ? Yr(e) : Yt(e), kn(e);
      var s = Fn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Dn;
      var i
    } finally {
      nt = r, y = n
    }
  }
}
async function gi() {
  await Promise.resolve(), Or()
}

function Ti() {
  return le.ensure().settled()
}

function he(e) {
  var t = e.f,
    n = (t & O) !== 0;
  if (p !== null && !G) {
    var r = y !== null && (y.f & $) !== 0;
    if (!r && (W === null || !W.has(e))) {
      var s = p.deps;
      if ((p.f & at) !== 0) e.rv < ve && (e.rv = ve, D === null && s !== null && s[L] === e ? L++ : D === null ? D = [e] : D.push(e));
      else {
        p.deps ?? (p.deps = []), rt.call(p.deps, e) || p.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [p] : rt.call(i, p) || i.push(p)
      }
    }
  }
  if (ue && Ee.has(e)) return Ee.get(e);
  if (n) {
    var u = e;
    if (ue) {
      var l = u.v;
      return ((u.f & N) === 0 && u.reactions !== null || Hn(u)) && (l = Pt(u)), Ee.set(u, l), l
    }
    var a = (u.f & H) === 0 && !G && p !== null && (nt || (p.f & H) !== 0),
      f = (u.f & xe) === 0;
    Qe(u) && (a && (u.f |= H), vn(u)), a && !f && (hn(u), jn(u))
  }
  if (k != null && k.has(e)) return k.get(e);
  if ((e.f & ae) !== 0) throw e.v;
  return e.v
}

function jn(e) {
  if (e.f |= H, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & O) !== 0 && (t.f & H) === 0 && (hn(t), jn(t))
}

function Hn(e) {
  if (e.v === x) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ee.has(t) || (t.f & O) !== 0 && Hn(t)) return !0;
  return !1
}

function Gr(e) {
  var t = G;
  try {
    return G = !0, e()
  } finally {
    G = t
  }
}

function Ai(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ye in e) Rt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ye in n && Rt(n)
      }
  }
}

function Rt(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      Rt(e[r], t)
    } catch {}
    const n = tn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = zn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i) try {
          i.call(e)
        } catch {}
      }
    }
  }
}

function Si(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const $r = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function xi(e) {
  return $r.includes(e)
}
const zr = {
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

function Ni(e) {
  return e = e.toLowerCase(), zr[e] ?? e
}
const Wr = ["touchstart", "touchmove"];

function Ri(e) {
  return Wr.includes(e)
}
const Kr = ["textarea", "script", "style", "title"];

function ki(e) {
  return Kr.includes(e)
}
const pe = Symbol("events"),
  Xr = new Set,
  Zr = new Set;

function Ci(e) {
  if (!I) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Yn(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Jr.call(t, i), !i.cancelBubble) return wt(() => n == null ? void 0 : n.call(this, i))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ft(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function Oi(e, t, n, r = {}) {
  var s = Yn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function Ii(e, t, n, r, s) {
  var i = {
      capture: r,
      passive: s
    },
    u = Yn(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ht(() => {
    t.removeEventListener(e, u, i)
  })
}

function Mi(e, t, n) {
  (t[pe] ?? (t[pe] = {}))[e] = n
}

function Di(e) {
  for (var t = 0; t < e.length; t++) Xr.add(e[t]);
  for (var n of Zr) n(e)
}
let Jt = null;

function Jr(e) {
  var b, S;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [],
    i = s[0] || e.target;
  Jt = e;
  var u = 0,
    l = Jt === e && e[pe];
  if (l) {
    var a = s.indexOf(l);
    if (a !== -1 && (t === document || t === window)) {
      e[pe] = t;
      return
    }
    var f = s.indexOf(t);
    if (f === -1) return;
    a <= f && (u = a)
  }
  if (i = s[u] || e.target, i !== t) {
    $n(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n
      }
    });
    var d = p,
      v = y;
    J(null), oe(null);
    try {
      for (var o, _ = []; i !== null && i !== t;) {
        try {
          var h = (S = i[pe]) == null ? void 0 : S[r];
          h != null && (!i.disabled || e.target === i) && h.call(i, e)
        } catch (_e) {
          o ? _.push(_e) : o = _e
        }
        if (e.cancelBubble) break;
        u++, i = u < s.length ? s[u] : null
      }
      if (o) {
        for (let _e of _) queueMicrotask(() => {
          throw _e
        });
        throw o
      }
    } finally {
      e[pe] = t, delete e.currentTarget, J(d), oe(v)
    }
  }
}
var en;
const Tt = ((en = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : en.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
  createHTML: e => e
});

function Qr(e) {
  return (Tt == null ? void 0 : Tt.createHTML(e)) ?? e
}

function qn(e) {
  var t = Lr("template");
  return t.innerHTML = Qr(e.replaceAll("<!>", "<!---->")), t.content
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

function Pi(e, t) {
  var n = (t & sn) !== 0,
    r = (t & _r) !== 0,
    s, i = !e.startsWith("<!>");
  return () => {
    if (I) return K(E, null), E;
    s === void 0 && (s = qn(i ? e : "<!>" + e), n || (s = V(s)));
    var u = r || Tn ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var l = V(u),
        a = u.lastChild;
      K(l, a)
    } else K(u, u);
    return u
  }
}

function es(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = (t & sn) !== 0,
    i = `<${n}>${r?e:"<!>"+e}</${n}>`,
    u;
  return () => {
    if (I) return K(E, null), E;
    if (!u) {
      var l = qn(i),
        a = V(l);
      if (s)
        for (u = document.createDocumentFragment(); V(a);) u.appendChild(V(a));
      else u = V(a)
    }
    var f = u.cloneNode(!0);
    if (s) {
      var d = V(f),
        v = f.lastChild;
      K(d, v)
    } else K(f, f);
    return f
  }
}

function Li(e, t) {
  return es(e, t, "svg")
}

function Fi(e = "") {
  if (!I) {
    var t = Se(e + "");
    return K(t, t), t
  }
  var n = E;
  return n.nodeType !== Ze ? (n.before(n = Se()), Ae(n)) : pt(n), K(n, n), n
}

function ji() {
  if (I) return K(E, null), E;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = Se();
  return e.append(t, n), K(t, n), e
}

function Hi(e, t) {
  if (I) {
    var n = y;
    ((n.f & xe) === 0 || n.nodes.end === null) && (n.nodes.end = E), an();
    return
  }
  e !== null && e.before(t)
}

function Yi() {
  var e, t;
  if (I && E && E.nodeType === Ct && ((e = E.textContent) != null && e.startsWith("$"))) {
    const n = E.textContent.substring(1);
    return an(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  Dr as $, vt as A, Gr as B, Or as C, Gs as D, Bs as E, Us as F, Vs as G, Ti as H, gi as I, wi as J, I as K, an as L, st as M, Ys as N, Hs as O, Ae as P, Ls as Q, E as R, dr as S, di as T, vi as U, y as V, Ut as W, ye as X, Ei as Y, fe as Z, Br as _, Hi as a, Zn as a$, Se as a0, yi as a1, w as a2, mi as a3, si as a4, qs as a5, Je as a6, ys as a7, V as a8, vr as a9, It as aA, Ot as aB, Lr as aC, Os as aD, Is as aE, oi as aF, Xn as aG, ss as aH, Ai as aI, Dt as aJ, as as aK, $n as aL, Tr as aM, Ks as aN, Ue as aO, hs as aP, As as aQ, ue as aR, Ss as aS, Ts as aT, gs as aU, xs as aV, fs as aW, rs as aX, Yi as aY, Nn as aZ, gt as a_, Ct as aa, hr as ab, Nt as ac, ls as ad, ds as ae, xr as af, Un as ag, ns as ah, ws as ai, ms as aj, Zs as ak, jt as al, bs as am, $ as an, Y as ao, ft as ap, X as aq, Es as ar, Pr as as, ce as at, Jn as au, fi as av, Qs as aw, Ht as ax, K as ay, qr as az, zs as b, Cs as b0, gr as b1, oe as b2, J as b3, lt as b4, le as b5, Er as b6, p as b7, ut as b8, He as b9, tn as bA, Ms as bB, zn as bC, cs as bD, Si as bE, Yn as bF, ii as bG, Ni as bH, x as bI, et as bJ, Fr as bK, xi as bL, Ci as bM, Wt as bN, Ws as bO, fn as bP, is as bQ, me as bR, Js as bS, ci as bT, Wn as bU, _s as bV, ki as bW, li as bX, ps as ba, Ps as bb, nr as bc, ei as bd, vs as be, _i as bf, Xr as bg, Zr as bh, Jr as bi, Ri as bj, U as bk, xe as bl, ks as bm, Ns as bn, Rs as bo, wt as bp, Oi as bq, ai as br, bi as bs, er as bt, tr as bu, Ds as bv, us as bw, _n as bx, Qn as by, pr as bz, Pi as c, ti as d, re as e, ni as f, Ve as g, se as h, he as i, pi as j, Li as k, Di as l, Mi as m, Ge as n, js as o, $s as p, Ii as q, Fs as r, ri as s, hi as t, Xs as u, Fi as v, ji as w, rr as x, ui as y, g as z
};