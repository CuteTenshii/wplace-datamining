var Hn = Object.defineProperty;
var Yt = e => {
  throw TypeError(e)
};
var Yn = (e, t, n) => t in e ? Hn(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Q = (e, t, n) => Yn(e, typeof t != "symbol" ? t + "" : t, n),
  pt = (e, t, n) => t.has(e) || Yt("Cannot " + n);
var c = (e, t, n) => (pt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  x = (e, t, n) => t.has(e) ? Yt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  D = (e, t, n, r) => (pt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  A = (e, t, n) => (pt(e, t, "access private method"), n);
var Bn = Array.isArray,
  Vn = Array.prototype.indexOf,
  tt = Array.prototype.includes,
  Jr = Array.from,
  qn = Object.defineProperty,
  qe = Object.getOwnPropertyDescriptor,
  Un = Object.getOwnPropertyDescriptors,
  Gn = Object.prototype,
  $n = Array.prototype,
  Qt = Object.getPrototypeOf,
  Bt = Object.isExtensible;

function Qr(e) {
  return typeof e == "function"
}
const zn = () => {};

function es(e) {
  return e()
}

function Kn(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function en() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s
  });
  return {
    promise: n,
    resolve: e,
    reject: t
  }
}

function ts(e, t, n = !1) {
  return e === void 0 ? n ? t() : t : e
}

function ns(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const O = 2,
  be = 4,
  Ke = 8,
  Rt = 1 << 24,
  U = 16,
  X = 32,
  ne = 64,
  Wn = 128,
  H = 512,
  k = 1024,
  C = 2048,
  Z = 4096,
  Y = 8192,
  $ = 16384,
  Re = 32768,
  Vt = 1 << 25,
  nt = 65536,
  rt = 1 << 17,
  Xn = 1 << 18,
  je = 1 << 19,
  tn = 1 << 20,
  rs = 1 << 25,
  Te = 65536,
  st = 1 << 21,
  Ce = 1 << 22,
  ae = 1 << 23,
  me = Symbol("$state"),
  ss = Symbol("legacy props"),
  is = Symbol(""),
  Zn = Symbol("attributes"),
  Jn = Symbol("class"),
  Qn = Symbol("style"),
  er = Symbol("text"),
  Je = Symbol("form reset"),
  ct = new class extends Error {
    constructor() {
      super(...arguments);
      Q(this, "name", "StaleReactionError");
      Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
  };
var Zt;
const ls = !!((Zt = globalThis.document) != null && Zt.contentType) && globalThis.document.contentType.includes("xml"),
  We = 3,
  kt = 8;

function tr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function nr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function fs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate")
}

function rr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function sr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function ir(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function ar() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function os() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function us(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function lr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function fr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function or() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function cs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const _s = 1,
  ds = 2,
  vs = 4,
  hs = 8,
  ps = 16,
  ws = 1,
  ys = 2,
  ms = 4,
  Es = 8,
  gs = 16,
  bs = 1,
  Ts = 2,
  As = 4,
  nn = 1,
  ur = 2,
  cr = "[",
  _r = "[!",
  Ss = "[?",
  dr = "]",
  xt = {},
  R = Symbol("uninitialized"),
  vr = "http://www.w3.org/1999/xhtml",
  Rs = "http://www.w3.org/2000/svg",
  ks = "http://www.w3.org/1998/Math/MathML",
  xs = "@attach";

function hr() {
  console.warn("https://svelte.dev/e/derived_inert")
}

function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Ns() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function Cs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let I = !1;

function Os(e) {
  I = e
}
let E;

function Ae(e) {
  if (e === null) throw Nt(), xt;
  return E = e
}

function rn() {
  return Ae(ce(E))
}

function Is(e) {
  if (I) {
    if (ce(E) !== null) throw Nt(), xt;
    E = e
  }
}

function Ms(e = 1) {
  if (I) {
    for (var t = e, n = E; t--;) n = ce(n);
    E = n
  }
}

function Ps(e = !0) {
  for (var t = 0, n = E;;) {
    if (n.nodeType === kt) {
      var r = n.data;
      if (r === dr) {
        if (t === 0) return n;
        t -= 1
      } else(r === cr || r === _r || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1)
    }
    var s = ce(n);
    e && n.remove(), n = s
  }
}

function Ds(e) {
  if (!e || e.nodeType !== kt) throw Nt(), xt;
  return e.data
}

function sn(e) {
  return e === this.v
}

function pr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function an(e) {
  return !pr(e, this.v)
}
let _t = !1;

function Ls() {
  _t = !0
}
let b = null;

function it(e) {
  b = e
}

function Fs(e) {
  return Ct().get(e)
}

function js(e, t) {
  return Ct().set(e, t), t
}

function Hs(e) {
  return Ct().has(e)
}

function Ys(e, t = !1, n) {
  b = {
    p: b,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: m,
    l: _t && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function Bs(e) {
  var t = b,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Sn(r)
  }
  return e !== void 0 && (t.x = e), t.i = !0, b = t.p, e ?? {}
}

function Xe() {
  return !_t || b !== null && b.l === null
}

function Ct(e) {
  return b === null && tr(), b.c ?? (b.c = new Map(wr(b) || void 0))
}

function wr(e) {
  let t = e.p;
  for (; t !== null;) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p
  }
  return null
}
let de = [];

function ln() {
  var e = de;
  de = [], Kn(e)
}

function at(e) {
  if (de.length === 0 && !Ge) {
    var t = de;
    queueMicrotask(() => {
      t === de && ln()
    })
  }
  de.push(e)
}

function yr() {
  for (; de.length > 0;) ln()
}

function mr(e) {
  var t = m;
  if (t === null) return p.f |= ae, e;
  if ((t.f & Re) === 0 && (t.f & be) === 0) throw e;
  lt(e, t)
}

function lt(e, t) {
  if (!(t !== null && (t.f & $) !== 0)) {
    for (; t !== null;) {
      if ((t.f & Wn) !== 0) {
        if ((t.f & Re) === 0) throw e;
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
const Er = -7169;

function T(e, t) {
  e.f = e.f & Er | t
}

function Ot(e) {
  (e.f & H) !== 0 || e.deps === null ? T(e, k) : T(e, Z)
}

function fn(e) {
  if (e !== null)
    for (const t of e)(t.f & O) === 0 || (t.f & Te) === 0 || (t.f ^= Te, fn(t.deps))
}

function gr(e, t, n) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & Z) !== 0 && n.add(e), fn(e.deps), T(e, k)
}

function on(e, t, n, r) {
  const s = Xe() ? It : Ar;
  var i = e.filter(_ => !_.settled),
    l = t.map(s);
  if (n.length === 0 && i.length === 0) {
    r(l);
    return
  }
  var o = m,
    a = br(),
    u = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map(_ => _.promise)) : null;

  function d(_) {
    if ((o.f & $) === 0) {
      a();
      try {
        r([...l, ..._])
      } catch (h) {
        lt(h, o)
      }
      ft()
    }
  }
  var v = un();
  if (n.length === 0) {
    u.then(() => d([])).finally(v);
    return
  }

  function f() {
    Promise.all(n.map(_ => Tr(_))).then(d).catch(_ => lt(_, o)).finally(v)
  }
  u ? u.then(() => {
    a(), f(), ft()
  }) : f()
}

function br() {
  var e = m,
    t = p,
    n = b,
    r = w;
  return function(i = !0) {
    ue(e), J(t), it(n), i && (e.f & $) === 0 && (r == null || r.activate(), r == null || r.apply())
  }
}

function ft(e = !0) {
  ue(null), J(null), it(null), e && (w == null || w.deactivate())
}

function un() {
  var e = m,
    t = e.b,
    n = w,
    r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e)
  }
}

function It(e) {
  var t = O | C;
  return m !== null && (m.f |= je), {
    ctx: b,
    deps: null,
    effects: null,
    equals: sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: R,
    wv: 0,
    parent: m,
    ac: null
  }
}
const He = Symbol("obsolete");

function Tr(e, t, n) {
  let r = m;
  r === null && nr();
  var s = void 0,
    i = Lt(R),
    l = !p,
    o = new Set;
  return Fr(() => {
    var _, h;
    var a = m,
      u = en();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, y => {
        y !== ct && u.reject(y)
      }).finally(ft)
    } catch (y) {
      u.reject(y), ft()
    }
    var d = w;
    if (l) {
      if ((a.f & Re) !== 0) var v = un();
      if ((_ = r.b) != null && _.is_rendered())(h = d.async_deriveds.get(a)) == null || h.reject(He);
      else
        for (const y of o.values()) y.reject(He);
      o.add(u), d.async_deriveds.set(a, u)
    }
    const f = (y, S = void 0) => {
      v == null || v(), o.delete(u), S !== He && (d.activate(), S ? (i.f |= ae, At(i, S)) : ((i.f & ae) !== 0 && (i.f ^= ae), At(i, y)), d.deactivate())
    };
    u.promise.then(f, y => f(null, y || "unknown"))
  }), Ft(() => {
    for (const a of o) a.reject(He)
  }), new Promise(a => {
    function u(d) {
      function v() {
        d === s ? a(i) : u(s)
      }
      d.then(v, v)
    }
    u(s)
  })
}

function Vs(e) {
  const t = It(e);
  return Cn(t), t
}

function Ar(e) {
  const t = It(e);
  return t.equals = an, t
}

function Sr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) fe(t[n])
  }
}

function Mt(e) {
  var t, n = m,
    r = e.parent;
  if (!oe && r !== null && e.v !== R && (r.f & ($ | Y)) !== 0) return hr(), e.v;
  ue(r);
  try {
    e.f &= ~Te, Sr(e), t = Pn(e)
  } finally {
    ue(n)
  }
  return t
}

function cn(e) {
  var t = Mt(e);
  if (!e.equals(t) && (e.wv = In(), (!(w != null && w.is_fork) || e.deps === null) && (w !== null ? (w.capture(e, t, !0), Ue == null || Ue.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    T(e, k);
    return
  }
  oe || (N !== null ? (An() || w != null && w.is_fork) && N.set(e, t) : Ot(e))
}

function Rr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(ct), r.fn !== null && (r.teardown = zn), r.ac = null, $e(r, 0), jt(r))
}

function _n(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && t.fn !== null && Fe(t)
}
let wt = null,
  ke = null,
  w = null,
  Ue = null,
  N = null,
  gt = null,
  Ge = !1,
  yt = !1,
  Ne = null,
  Qe = null;
var qt = 0;
let kr = 1;
var Oe, ie, we, Ie, Me, Pe, ee, De, M, ze, te, V, z, Le, ye, g, bt, Ye, Tt, dn, vn, xe, xr, Be;
const ut = class ut {
  constructor() {
    x(this, g);
    Q(this, "id", kr++);
    x(this, Oe, !1);
    Q(this, "linked", !0);
    x(this, ie, null);
    x(this, we, null);
    Q(this, "async_deriveds", new Map);
    Q(this, "current", new Map);
    Q(this, "previous", new Map);
    x(this, Ie, new Set);
    x(this, Me, new Set);
    x(this, Pe, 0);
    x(this, ee, new Map);
    x(this, De, null);
    x(this, M, []);
    x(this, ze, []);
    x(this, te, new Set);
    x(this, V, new Set);
    x(this, z, new Map);
    x(this, Le, new Set);
    Q(this, "is_fork", !1);
    x(this, ye, !1);
    ke === null ? wt = ke = this : (D(ke, we, this), D(this, ie, ke)), ke = this
  }
  skip_effect(t) {
    c(this, z).has(t) || c(this, z).set(t, {
      d: [],
      m: []
    }), c(this, Le).delete(t)
  }
  unskip_effect(t, n = r => this.schedule(r)) {
    var r = c(this, z).get(t);
    if (r) {
      c(this, z).delete(t);
      for (var s of r.d) T(s, C), n(s);
      for (s of r.m) T(s, Z), n(s)
    }
    c(this, Le).add(t)
  }
  capture(t, n, r = !1) {
    t.v !== R && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ae) === 0 && (this.current.set(t, [n, r]), N == null || N.set(t, n)), this.is_fork || (t.v = n)
  }
  activate() {
    w = this
  }
  deactivate() {
    w = null, N = null
  }
  flush() {
    try {
      yt = !0, w = this, A(this, g, Ye).call(this)
    } finally {
      qt = 0, gt = null, Ne = null, Qe = null, yt = !1, w = null, N = null, Ee.clear()
    }
  }
  discard() {
    var t;
    for (const n of c(this, Me)) n(this);
    c(this, Me).clear();
    for (const n of this.async_deriveds.values()) n.reject(He);
    A(this, g, Be).call(this), (t = c(this, De)) == null || t.resolve()
  }
  register_created_effect(t) {
    c(this, ze).push(t)
  }
  increment(t, n) {
    if (D(this, Pe, c(this, Pe) + 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      c(this, ee).set(n, r + 1)
    }
  }
  decrement(t, n) {
    if (D(this, Pe, c(this, Pe) - 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      r === 1 ? c(this, ee).delete(n) : c(this, ee).set(n, r - 1)
    }
    c(this, ye) || (D(this, ye, !0), at(() => {
      D(this, ye, !1), this.linked && this.flush()
    }))
  }
  transfer_effects(t, n) {
    for (const r of t) c(this, te).add(r);
    for (const r of n) c(this, V).add(r);
    t.clear(), n.clear()
  }
  oncommit(t) {
    c(this, Ie).add(t)
  }
  ondiscard(t) {
    c(this, Me).add(t)
  }
  settled() {
    return (c(this, De) ?? D(this, De, en())).promise
  }
  static ensure() {
    if (w === null) {
      const t = w = new ut;
      !yt && !Ge && at(() => {
        c(t, Oe) || t.flush()
      })
    }
    return w
  }
  apply() {
    {
      N = null;
      return
    }
  }
  schedule(t) {
    var s;
    if (gt = t, (s = t.b) != null && s.is_pending && (t.f & (be | Ke | Rt)) !== 0 && (t.f & Re) === 0) {
      t.b.defer_effect(t);
      return
    }
    for (var n = t; n.parent !== null;) {
      n = n.parent;
      var r = n.f;
      if (Ne !== null && n === m && (p === null || (p.f & O) === 0)) return;
      if ((r & (ne | X)) !== 0) {
        if ((r & k) === 0) return;
        n.f ^= k
      }
    }
    c(this, M).push(n)
  }
};
Oe = new WeakMap, ie = new WeakMap, we = new WeakMap, Ie = new WeakMap, Me = new WeakMap, Pe = new WeakMap, ee = new WeakMap, De = new WeakMap, M = new WeakMap, ze = new WeakMap, te = new WeakMap, V = new WeakMap, z = new WeakMap, Le = new WeakMap, ye = new WeakMap, g = new WeakSet, bt = function() {
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
}, Ye = function() {
  var a, u, d, v;
  D(this, Oe, !0), qt++ > 1e3 && (A(this, g, Be).call(this), Cr());
  for (const f of c(this, te)) c(this, V).delete(f), T(f, C), this.schedule(f);
  for (const f of c(this, V)) T(f, Z), this.schedule(f);
  const t = c(this, M);
  D(this, M, []), this.apply();
  var n = Ne = [],
    r = [],
    s = Qe = [];
  for (const f of t) try {
    A(this, g, Tt).call(this, f, n, r)
  } catch (_) {
    throw wn(f), A(this, g, bt).call(this) || this.discard(), _
  }
  if (w = null, s.length > 0) {
    var i = ut.ensure();
    for (const f of s) i.schedule(f)
  }
  if (Ne = null, Qe = null, A(this, g, bt).call(this)) {
    A(this, g, xe).call(this, r), A(this, g, xe).call(this, n);
    for (const [f, _] of c(this, z)) pn(f, _);
    s.length > 0 && A(a = w, g, Ye).call(a);
    return
  }
  const l = A(this, g, dn).call(this);
  if (l) {
    A(this, g, xe).call(this, r), A(this, g, xe).call(this, n), A(u = l, g, vn).call(u, this);
    return
  }
  c(this, te).clear(), c(this, V).clear();
  for (const f of c(this, Ie)) f(this);
  c(this, Ie).clear(), Ue = this, Ut(r), Ut(n), Ue = null, (d = c(this, De)) == null || d.resolve();
  var o = w;
  if (c(this, Pe) === 0 && (c(this, M).length === 0 || o !== null) && A(this, g, Be).call(this), c(this, M).length > 0)
    if (o !== null) {
      const f = o;
      c(f, M).push(...c(this, M).filter(_ => !c(f, M).includes(_)))
    } else o = this;
  o !== null && A(v = o, g, Ye).call(v)
}, Tt = function(t, n, r) {
  t.f ^= k;
  for (var s = t.first; s !== null;) {
    var i = s.f,
      l = (i & (X | ne)) !== 0,
      o = l && (i & k) !== 0,
      a = o || (i & Y) !== 0 || c(this, z).has(s);
    if (!a && s.fn !== null) {
      l ? s.f ^= k : (i & be) !== 0 ? n.push(s) : Ze(s) && ((i & U) !== 0 && c(this, V).add(s), Fe(s));
      var u = s.first;
      if (u !== null) {
        s = u;
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
}, dn = function() {
  for (var t = c(this, ie); t !== null;) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r) return t
    }
    t = c(t, ie)
  }
  return null
}, vn = function(t) {
  var r;
  for (const [s, i] of t.current) !this.previous.has(s) && t.previous.has(s) && this.previous.set(s, t.previous.get(s)), this.current.set(s, i);
  for (const [s, i] of t.async_deriveds) {
    const l = this.async_deriveds.get(s);
    l && i.promise.then(l.resolve).catch(l.reject)
  }
  t.async_deriveds.clear(), this.transfer_effects(c(t, te), c(t, V));
  const n = s => {
    var i = s.reactions;
    if (i !== null)
      for (const a of i) {
        var l = a.f;
        if ((l & O) !== 0) n(a);
        else {
          var o = a;
          l & (Ce | U) && !this.async_deriveds.has(o) && (c(this, V).delete(o), T(o, C), this.schedule(o))
        }
      }
  };
  for (const s of this.current.keys()) n(s);
  this.oncommit(() => t.discard()), A(r = t, g, Be).call(r), w = this, A(this, g, Ye).call(this)
}, xe = function(t) {
  for (var n = 0; n < t.length; n += 1) gr(t[n], c(this, te), c(this, V))
}, xr = function() {
  var v;
  for (let f = wt; f !== null; f = c(f, we)) {
    var t = f.id < this.id,
      n = [];
    for (const [_, [h, y]] of this.current) {
      if (f.current.has(_)) {
        var r = f.current.get(_)[0];
        if (t && h !== r) f.current.set(_, [h, y]);
        else continue
      }
      n.push(_)
    }
    if (t)
      for (const [_, h] of this.async_deriveds) {
        const y = f.async_deriveds.get(_);
        y && h.promise.then(y.resolve).catch(y.reject)
      }
    var s = [...f.current.keys()].filter(_ => !f.current.get(_)[1]);
    if (!(!c(f, Oe) || s.length === 0)) {
      var i = s.filter(_ => !this.current.has(_));
      if (i.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t)
          for (const _ of c(this, Le)) f.unskip_effect(_, h => {
            var y;
            (h.f & (U | Ce)) !== 0 ? f.schedule(h) : A(y = f, g, xe).call(y, [h])
          });
        f.activate();
        var l = new Set,
          o = new Map;
        for (var a of n) hn(a, i, l, o);
        o = new Map;
        var u = [...f.current].filter(([_, h]) => {
          const y = this.current.get(_);
          return y ? y[0] !== h[0] || y[1] !== h[1] : !0
        }).map(([_]) => _);
        if (u.length > 0)
          for (const _ of c(this, ze))(_.f & ($ | Y | rt)) === 0 && Pt(_, u, o) && ((_.f & (Ce | U)) !== 0 ? (T(_, C), f.schedule(_)) : c(f, te).add(_));
        if (c(f, M).length > 0 && !c(f, ye)) {
          f.apply();
          for (var d of c(f, M)) A(v = f, g, Tt).call(v, d, [], []);
          D(f, M, [])
        }
        f.deactivate()
      }
    }
  }
}, Be = function() {
  if (this.linked) {
    var t = c(this, ie),
      n = c(this, we);
    t === null ? wt = n : D(t, we, n), n === null ? ke = t : D(n, ie, t), this.linked = !1
  }
};
let le = ut;

function Nr(e) {
  var t = Ge;
  Ge = !0;
  try {
    for (var n;;) {
      if (yr(), w === null) return n;
      w.flush()
    }
  } finally {
    Ge = t
  }
}

function Cr() {
  try {
    ar()
  } catch (e) {
    lt(e, gt)
  }
}
let B = null;

function Ut(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & ($ | Y)) === 0 && Ze(r) && (B = new Set, Fe(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && kn(r), (B == null ? void 0 : B.size) > 0)) {
        Ee.clear();
        for (const s of B) {
          if ((s.f & ($ | Y)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null;) B.has(l) && (B.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const a = i[o];
            (a.f & ($ | Y)) === 0 && Fe(a)
          }
        }
        B.clear()
      }
    }
    B = null
  }
}

function hn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & O) !== 0 ? hn(s, t, n, r) : (i & (Ce | U)) !== 0 && (i & C) === 0 && Pt(s, t, r) && (T(s, C), Dt(s))
    }
}

function Pt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (tt.call(t, s)) return !0;
      if ((s.f & O) !== 0 && Pt(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function Dt(e) {
  w.schedule(e)
}

function pn(e, t) {
  if (!((e.f & X) !== 0 && (e.f & k) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & Z) !== 0 && t.m.push(e), T(e, k);
    for (var n = e.first; n !== null;) pn(n, t), n = n.next
  }
}

function wn(e) {
  T(e, k);
  for (var t = e.first; t !== null;) wn(t), t = t.next
}
let ot = new Set;
const Ee = new Map;
let yn = !1;

function Lt(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: sn,
    rv: 0,
    wv: 0
  };
  return n
}

function re(e, t) {
  const n = Lt(e);
  return Cn(n), n
}

function qs(e, t = !1, n = !0) {
  var s;
  const r = Lt(e);
  return t || (r.equals = an), _t && n && b !== null && b.l !== null && ((s = b.l).s ?? (s.s = [])).push(r), r
}

function se(e, t, n = !1) {
  p !== null && (!G || (p.f & rt) !== 0) && Xe() && (p.f & (O | U | Ce | rt)) !== 0 && (K === null || !K.has(e)) && or();
  let r = n ? Ve(t) : t;
  return At(e, r, Qe)
}

function At(e, t, n = null) {
  if (!e.equals(t)) {
    Ee.set(e, oe ? t : e.v);
    var r = le.ensure();
    if (r.capture(e, t), (e.f & O) !== 0) {
      const s = e;
      (e.f & C) !== 0 && Mt(s), N === null && Ot(s)
    }
    e.wv = In(), mn(e, C, n), Xe() && m !== null && (m.f & k) !== 0 && (m.f & (X | ne)) === 0 && (j === null ? Br([e]) : j.push(e)), !r.is_fork && ot.size > 0 && !yn && Or()
  }
  return t
}

function Or() {
  yn = !1;
  for (const e of ot) {
    (e.f & k) !== 0 && T(e, Z);
    let t;
    try {
      t = Ze(e)
    } catch {
      t = !0
    }
    t && Fe(e)
  }
  ot.clear()
}

function Us(e, t = 1) {
  var n = he(e),
    r = t === 1 ? n++ : n--;
  return se(e, n), r
}

function mt(e) {
  se(e, e.v + 1)
}

function mn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = Xe(), i = r.length, l = 0; l < i; l++) {
      var o = r[l],
        a = o.f;
      if (!(!s && o === m)) {
        var u = (a & C) === 0;
        if (u && T(o, t), (a & rt) !== 0) ot.add(o);
        else if ((a & O) !== 0) {
          var d = o;
          N == null || N.delete(d), (a & Te) === 0 && (a & H && (m === null || (m.f & st) === 0) && (o.f |= Te), mn(d, Z, n))
        } else if (u) {
          var v = o;
          (a & U) !== 0 && B !== null && B.add(v), n !== null ? n.push(v) : Dt(v)
        }
      }
    }
}

function Ve(e) {
  if (typeof e != "object" || e === null || me in e) return e;
  const t = Qt(e);
  if (t !== Gn && t !== $n) return e;
  var n = new Map,
    r = Bn(e),
    s = re(0),
    i = ge,
    l = o => {
      if (ge === i) return o();
      var a = p,
        u = ge;
      J(null), Wt(i);
      var d = o();
      return J(a), Wt(u), d
    };
  return r && n.set("length", re(e.length)), new Proxy(e, {
    defineProperty(o, a, u) {
      (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && lr();
      var d = n.get(a);
      return d === void 0 ? l(() => {
        var v = re(u.value);
        return n.set(a, v), v
      }) : se(d, u.value, !0), !0
    },
    deleteProperty(o, a) {
      var u = n.get(a);
      if (u === void 0) {
        if (a in o) {
          const d = l(() => re(R));
          n.set(a, d), mt(s)
        }
      } else se(u, R), mt(s);
      return !0
    },
    get(o, a, u) {
      var _;
      if (a === me) return e;
      var d = n.get(a),
        v = a in o;
      if (d === void 0 && (!v || (_ = qe(o, a)) != null && _.writable) && (d = l(() => {
          var h = Ve(v ? o[a] : R),
            y = re(h);
          return y
        }), n.set(a, d)), d !== void 0) {
        var f = he(d);
        return f === R ? void 0 : f
      }
      return Reflect.get(o, a, u)
    },
    getOwnPropertyDescriptor(o, a) {
      var u = Reflect.getOwnPropertyDescriptor(o, a);
      if (u && "value" in u) {
        var d = n.get(a);
        d && (u.value = he(d))
      } else if (u === void 0) {
        var v = n.get(a),
          f = v == null ? void 0 : v.v;
        if (v !== void 0 && f !== R) return {
          enumerable: !0,
          configurable: !0,
          value: f,
          writable: !0
        }
      }
      return u
    },
    has(o, a) {
      var f;
      if (a === me) return !0;
      var u = n.get(a),
        d = u !== void 0 && u.v !== R || Reflect.has(o, a);
      if (u !== void 0 || m !== null && (!d || (f = qe(o, a)) != null && f.writable)) {
        u === void 0 && (u = l(() => {
          var _ = d ? Ve(o[a]) : R,
            h = re(_);
          return h
        }), n.set(a, u));
        var v = he(u);
        if (v === R) return !1
      }
      return d
    },
    set(o, a, u, d) {
      var Ht;
      var v = n.get(a),
        f = a in o;
      if (r && a === "length")
        for (var _ = u; _ < v.v; _ += 1) {
          var h = n.get(_ + "");
          h !== void 0 ? se(h, R) : _ in o && (h = l(() => re(R)), n.set(_ + "", h))
        }
      if (v === void 0)(!f || (Ht = qe(o, a)) != null && Ht.writable) && (v = l(() => re(void 0)), se(v, Ve(u)), n.set(a, v));
      else {
        f = v.v !== R;
        var y = l(() => Ve(u));
        se(v, y)
      }
      var S = Reflect.getOwnPropertyDescriptor(o, a);
      if (S != null && S.set && S.set.call(d, u), !f) {
        if (r && typeof a == "string") {
          var _e = n.get("length"),
            ht = Number(a);
          Number.isInteger(ht) && ht >= _e.v && se(_e, ht + 1)
        }
        mt(s)
      }
      return !0
    },
    ownKeys(o) {
      he(s);
      var a = Reflect.ownKeys(o).filter(v => {
        var f = n.get(v);
        return f === void 0 || f.v !== R
      });
      for (var [u, d] of n) d.v !== R && !(u in o) && a.push(u);
      return a
    },
    setPrototypeOf() {
      fr()
    }
  })
}

function Gt(e) {
  try {
    if (e !== null && typeof e == "object" && me in e) return e[me]
  } catch {}
  return e
}

function Gs(e, t) {
  return Object.is(Gt(e), Gt(t))
}
var $t, Ir, En, gn, bn;

function $s() {
  if ($t === void 0) {
    $t = window, Ir = document, En = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    gn = qe(t, "firstChild").get, bn = qe(t, "nextSibling").get, Bt(e) && (e[Jn] = void 0, e[Zn] = null, e[Qn] = void 0, e.__e = void 0), Bt(n) && (n[er] = void 0)
  }
}

function Se(e = "") {
  return document.createTextNode(e)
}

function q(e) {
  return gn.call(e)
}

function ce(e) {
  return bn.call(e)
}

function zs(e, t) {
  if (!I) return q(e);
  var n = q(E);
  if (n === null) n = E.appendChild(Se());
  else if (t && n.nodeType !== We) {
    var r = Se();
    return n == null || n.before(r), Ae(r), r
  }
  return t && dt(n), Ae(n), n
}

function Ks(e, t = !1) {
  if (!I) {
    var n = q(e);
    return n instanceof Comment && n.data === "" ? ce(n) : n
  }
  if (t) {
    if ((E == null ? void 0 : E.nodeType) !== We) {
      var r = Se();
      return E == null || E.before(r), Ae(r), r
    }
    dt(E)
  }
  return E
}

function Ws(e, t = 1, n = !1) {
  let r = I ? E : e;
  for (var s; t--;) s = r, r = ce(r);
  if (!I) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== We) {
      var i = Se();
      return r === null ? s == null || s.after(i) : r.before(i), Ae(i), i
    }
    dt(r)
  }
  return Ae(r), r
}

function Mr(e) {
  e.textContent = ""
}

function Xs() {
  return !1
}

function Pr(e, t, n) {
  return t == null || t === vr ? n ? document.createElement(e, {
    is: n
  }) : document.createElement(e) : n ? document.createElementNS(t, e, {
    is: n
  }) : document.createElementNS(t, e)
}

function dt(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === We;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function Zs(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, at(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function Js(e) {
  I && q(e) !== null && Mr(e)
}
let zt = !1;

function Dr() {
  zt || (zt = !0, document.addEventListener("reset", e => {
    Promise.resolve().then(() => {
      var t;
      if (!e.defaultPrevented)
        for (const n of e.target.elements)(t = n[Je]) == null || t.call(n)
    })
  }, {
    capture: !0
  }))
}

function Qs(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  Ft(() => {
    for (var i of t) e.removeEventListener(i, n)
  })
}

function vt(e) {
  var t = p,
    n = m;
  J(null), ue(null);
  try {
    return e()
  } finally {
    J(t), ue(n)
  }
}

function ei(e, t, n, r = n) {
  e.addEventListener(t, () => vt(n));
  const s = e[Je];
  s ? e[Je] = () => {
    s(), r(!0)
  } : e[Je] = () => r(!0), Dr()
}

function Tn(e) {
  m === null && (p === null && ir(), sr()), oe && rr()
}

function Lr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function F(e, t) {
  var n = m;
  n !== null && (n.f & Y) !== 0 && (e |= Y);
  var r = {
    ctx: b,
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
  if ((e & be) !== 0) Ne !== null ? Ne.push(r) : le.ensure().schedule(r);
  else if (t !== null) {
    try {
      Fe(r)
    } catch (l) {
      throw fe(r), l
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & je) === 0 && (s = s.first, (e & U) !== 0 && (e & nt) !== 0 && s !== null && (s.f |= nt))
  }
  if (s !== null && (s.parent = n, n !== null && Lr(s, n), p !== null && (p.f & O) !== 0 && (e & ne) === 0)) {
    var i = p;
    (i.effects ?? (i.effects = [])).push(s)
  }
  return r
}

function An() {
  return p !== null && !G
}

function Ft(e) {
  const t = F(Ke, null);
  return T(t, k), t.teardown = e, t
}

function ti(e) {
  Tn();
  var t = m.f,
    n = !p && (t & X) !== 0 && b !== null && !b.i;
  if (n) {
    var r = b;
    (r.e ?? (r.e = [])).push(e)
  } else return Sn(e)
}

function Sn(e) {
  return F(be | tn, e)
}

function ni(e) {
  return Tn(), F(Ke | tn, e)
}

function ri(e) {
  le.ensure();
  const t = F(ne | je, e);
  return () => {
    fe(t)
  }
}

function si(e) {
  le.ensure();
  const t = F(ne | je, e);
  return (n = {}) => new Promise(r => {
    n.outro ? Yr(t, () => {
      fe(t), r(void 0)
    }) : (fe(t), r(void 0))
  })
}

function ii(e) {
  return F(be, e)
}

function Fr(e) {
  return F(Ce | je, e)
}

function ai(e, t = 0) {
  return F(Ke | t, e)
}

function li(e, t = [], n = [], r = []) {
  on(r, t, n, s => {
    F(Ke, () => {
      e(...s.map(he))
    })
  })
}

function fi(e, t = [], n = [], r = []) {
  on(r, t, n, s => {
    F(be, () => e(...s.map(he)))
  })
}

function oi(e, t = 0) {
  var n = F(U | t, e);
  return n
}

function ui(e, t = 0) {
  var n = F(Rt | t, e);
  return n
}

function ci(e) {
  return F(X | je, e)
}

function Rn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = oe,
      r = p;
    Kt(!0), J(null);
    try {
      t.call(null)
    } finally {
      Kt(n), J(r)
    }
  }
}

function jt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && vt(() => {
      s.abort(ct)
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : fe(n, t), n = r
  }
}

function jr(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & X) === 0 && fe(t), t = n
  }
}

function fe(e, t = !0) {
  var n = !1;
  (t || (e.f & Xn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Hr(e.nodes.start, e.nodes.end), n = !0), e.f |= Vt, jt(e, t && !n), $e(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r) i.stop();
  Rn(e), e.f ^= Vt, e.f |= $;
  var s = e.parent;
  s !== null && s.first !== null && kn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null
}

function Hr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : ce(e);
    e.remove(), e = n
  }
}

function kn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Yr(e, t, n = !0) {
  var r = [];
  xn(e, r, !0);
  var s = () => {
      n && fe(e), t && t()
    },
    i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var o of r) o.out(l)
  } else s()
}

function xn(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)(o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null;) {
      var i = s.next;
      if ((s.f & ne) === 0) {
        var l = (s.f & nt) !== 0 || (s.f & X) !== 0 && (e.f & U) !== 0;
        xn(s, t, l ? n : !1)
      }
      s = i
    }
  }
}

function _i(e) {
  Nn(e, !0)
}

function Nn(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & k) === 0 && (T(e, C), le.ensure().schedule(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & nt) !== 0 || (n.f & X) !== 0;
      Nn(n, s ? t : !1), n = r
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)(l.is_global || t) && l.in()
  }
}

function di(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : ce(n);
      t.append(n), n = s
    }
}
let et = !1,
  oe = !1;

function Kt(e) {
  oe = e
}
let p = null,
  G = !1;

function J(e) {
  p = e
}
let m = null;

function ue(e) {
  m = e
}
let K = null;

function Cn(e) {
  p !== null && (K ?? (K = new Set)).add(e)
}
let P = null,
  L = 0,
  j = null;

function Br(e) {
  j = e
}
let On = 1,
  ve = 0,
  ge = ve;

function Wt(e) {
  ge = e
}

function In() {
  return ++On
}

function Ze(e) {
  var t = e.f;
  if ((t & C) !== 0) return !0;
  if (t & O && (e.f &= ~Te), (t & Z) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (Ze(i) && cn(i), i.wv > e.wv) return !0
    }(t & H) !== 0 && N === null && T(e, k)
  }
  return !1
}

function Mn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(K !== null && K.has(e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & O) !== 0 ? Mn(i, t, !1) : t === i && (n ? T(i, C) : (i.f & k) !== 0 && T(i, Z), Dt(i))
    }
}

function Pn(e) {
  var y;
  var t = P,
    n = L,
    r = j,
    s = p,
    i = K,
    l = b,
    o = G,
    a = ge,
    u = e.f;
  P = null, L = 0, j = null, p = (u & (X | ne)) === 0 ? e : null, K = null, it(e.ctx), G = !1, ge = ++ve, e.ac !== null && (vt(() => {
    e.ac.abort(ct)
  }), e.ac = null);
  try {
    e.f |= st;
    var d = e.fn,
      v = d();
    e.f |= Re;
    var f = e.deps,
      _ = w == null ? void 0 : w.is_fork;
    if (P !== null) {
      var h;
      if (_ || $e(e, L), f !== null && L > 0)
        for (f.length = L + P.length, h = 0; h < P.length; h++) f[L + h] = P[h];
      else e.deps = f = P;
      if (An() && (e.f & H) !== 0)
        for (h = L; h < f.length; h++)((y = f[h]).reactions ?? (y.reactions = [])).push(e)
    } else !_ && f !== null && L < f.length && ($e(e, L), f.length = L);
    if (Xe() && j !== null && !G && f !== null && (e.f & (O | Z | C)) === 0)
      for (h = 0; h < j.length; h++) Mn(j[h], e);
    if (s !== null && s !== e) {
      if (ve++, s.deps !== null)
        for (let S = 0; S < n; S += 1) s.deps[S].rv = ve;
      if (t !== null)
        for (const S of t) S.rv = ve;
      j !== null && (r === null ? r = j : r.push(...j))
    }
    return (e.f & ae) !== 0 && (e.f ^= ae), v
  } catch (S) {
    return mr(S)
  } finally {
    e.f ^= st, P = t, L = n, j = r, p = s, K = i, it(l), G = o, ge = a
  }
}

function Vr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Vn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & O) !== 0 && (P === null || !tt.call(P, t))) {
    var i = t;
    (i.f & H) !== 0 && (i.f ^= H, i.f &= ~Te), i.v !== R && Ot(i), Rr(i), $e(i, 0)
  }
}

function $e(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Vr(e, n[r])
}

function Fe(e) {
  var t = e.f;
  if ((t & $) === 0) {
    T(e, k);
    var n = m,
      r = et;
    m = e, et = !0;
    try {
      (t & (U | Rt)) !== 0 ? jr(e) : jt(e), Rn(e);
      var s = Pn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = On;
      var i
    } finally {
      et = r, m = n
    }
  }
}
async function vi() {
  await Promise.resolve(), Nr()
}

function hi() {
  return le.ensure().settled()
}

function he(e) {
  var t = e.f,
    n = (t & O) !== 0;
  if (p !== null && !G) {
    var r = m !== null && (m.f & $) !== 0;
    if (!r && (K === null || !K.has(e))) {
      var s = p.deps;
      if ((p.f & st) !== 0) e.rv < ve && (e.rv = ve, P === null && s !== null && s[L] === e ? L++ : P === null ? P = [e] : P.push(e));
      else {
        p.deps ?? (p.deps = []), tt.call(p.deps, e) || p.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [p] : tt.call(i, p) || i.push(p)
      }
    }
  }
  if (oe && Ee.has(e)) return Ee.get(e);
  if (n) {
    var l = e;
    if (oe) {
      var o = l.v;
      return ((l.f & k) === 0 && l.reactions !== null || Ln(l)) && (o = Mt(l)), Ee.set(l, o), o
    }
    var a = (l.f & H) === 0 && !G && p !== null && (et || (p.f & H) !== 0),
      u = (l.f & Re) === 0;
    Ze(l) && (a && (l.f |= H), cn(l)), a && !u && (_n(l), Dn(l))
  }
  if (N != null && N.has(e)) return N.get(e);
  if ((e.f & ae) !== 0) throw e.v;
  return e.v
}

function Dn(e) {
  if (e.f |= H, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & O) !== 0 && (t.f & H) === 0 && (_n(t), Dn(t))
}

function Ln(e) {
  if (e.v === R) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ee.has(t) || (t.f & O) !== 0 && Ln(t)) return !0;
  return !1
}

function pi(e) {
  var t = G;
  try {
    return G = !0, e()
  } finally {
    G = t
  }
}

function wi(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (me in e) St(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && me in n && St(n)
      }
  }
}

function St(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      St(e[r], t)
    } catch {}
    const n = Qt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Un(n);
      for (let s in r) {
        const i = r[s].get;
        if (i) try {
          i.call(e)
        } catch {}
      }
    }
  }
}

function yi(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const qr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function mi(e) {
  return qr.includes(e)
}
const Ur = {
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

function Ei(e) {
  return e = e.toLowerCase(), Ur[e] ?? e
}
const Gr = ["touchstart", "touchmove"];

function gi(e) {
  return Gr.includes(e)
}
const pe = Symbol("events"),
  $r = new Set,
  zr = new Set;

function bi(e) {
  if (!I) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Fn(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Kr.call(t, i), !i.cancelBubble) return vt(() => n == null ? void 0 : n.call(this, i))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? at(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function Ti(e, t, n, r = {}) {
  var s = Fn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function Ai(e, t, n, r, s) {
  var i = {
      capture: r,
      passive: s
    },
    l = Fn(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ft(() => {
    t.removeEventListener(e, l, i)
  })
}

function Si(e, t, n) {
  (t[pe] ?? (t[pe] = {}))[e] = n
}

function Ri(e) {
  for (var t = 0; t < e.length; t++) $r.add(e[t]);
  for (var n of zr) n(e)
}
let Xt = null;

function Kr(e) {
  var y, S;
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [],
    i = s[0] || e.target;
  Xt = e;
  var l = 0,
    o = Xt === e && e[pe];
  if (o) {
    var a = s.indexOf(o);
    if (a !== -1 && (t === document || t === window)) {
      e[pe] = t;
      return
    }
    var u = s.indexOf(t);
    if (u === -1) return;
    a <= u && (l = a)
  }
  if (i = s[l] || e.target, i !== t) {
    qn(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n
      }
    });
    var d = p,
      v = m;
    J(null), ue(null);
    try {
      for (var f, _ = []; i !== null && i !== t;) {
        try {
          var h = (S = i[pe]) == null ? void 0 : S[r];
          h != null && (!i.disabled || e.target === i) && h.call(i, e)
        } catch (_e) {
          f ? _.push(_e) : f = _e
        }
        if (e.cancelBubble) break;
        l++, i = l < s.length ? s[l] : null
      }
      if (f) {
        for (let _e of _) queueMicrotask(() => {
          throw _e
        });
        throw f
      }
    } finally {
      e[pe] = t, delete e.currentTarget, J(d), ue(v)
    }
  }
}
var Jt;
const Et = ((Jt = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Jt.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
  createHTML: e => e
});

function Wr(e) {
  return (Et == null ? void 0 : Et.createHTML(e)) ?? e
}

function jn(e) {
  var t = Pr("template");
  return t.innerHTML = Wr(e.replaceAll("<!>", "<!---->")), t.content
}

function W(e, t) {
  var n = m;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function ki(e, t) {
  var n = (t & nn) !== 0,
    r = (t & ur) !== 0,
    s, i = !e.startsWith("<!>");
  return () => {
    if (I) return W(E, null), E;
    s === void 0 && (s = jn(i ? e : "<!>" + e), n || (s = q(s)));
    var l = r || En ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var o = q(l),
        a = l.lastChild;
      W(o, a)
    } else W(l, l);
    return l
  }
}

function Xr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = (t & nn) !== 0,
    i = `<${n}>${r?e:"<!>"+e}</${n}>`,
    l;
  return () => {
    if (I) return W(E, null), E;
    if (!l) {
      var o = jn(i),
        a = q(o);
      if (s)
        for (l = document.createDocumentFragment(); q(a);) l.appendChild(q(a));
      else l = q(a)
    }
    var u = l.cloneNode(!0);
    if (s) {
      var d = q(u),
        v = u.lastChild;
      W(d, v)
    } else W(u, u);
    return u
  }
}

function xi(e, t) {
  return Xr(e, t, "svg")
}

function Ni(e = "") {
  if (!I) {
    var t = Se(e + "");
    return W(t, t), t
  }
  var n = E;
  return n.nodeType !== We ? (n.before(n = Se()), Ae(n)) : dt(n), W(n, n), n
}

function Ci() {
  if (I) return W(E, null), E;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = Se();
  return e.append(t, n), W(t, n), e
}

function Oi(e, t) {
  if (I) {
    var n = m;
    ((n.f & Re) === 0 || n.nodes.end === null) && (n.nodes.end = E), rn();
    return
  }
  e !== null && e.before(t)
}

function Ii() {
  var e, t;
  if (I && E && E.nodeType === kt && ((e = E.textContent) != null && e.startsWith("$"))) {
    const n = E.textContent.substring(1);
    return rn(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  Ir as $, ti as A, b as B, _t as C, pi as D, Nr as E, Fs as F, Hs as G, js as H, hi as I, vi as J, oi as K, I as L, rn as M, nt as N, Ds as O, Ps as P, Ae as Q, Os as R, E as S, cr as T, ai as U, m as V, Vt as W, me as X, _i as Y, fe as Z, Yr as _, Oi as a, it as a$, Se as a0, ci as a1, w as a2, di as a3, Xs as a4, Ls as a5, Xe as a6, vs as a7, q as a8, _r as a9, Nt as aA, xt as aB, Pr as aC, Rs as aD, ks as aE, ni as aF, Kn as aG, es as aH, wi as aI, It as aJ, qe as aK, us as aL, ms as aM, oe as aN, Es as aO, ys as aP, ws as aQ, gs as aR, ss as aS, Qr as aT, An as aU, mt as aV, Wn as aW, Ss as aX, gr as aY, ue as aZ, J as a_, kt as aa, dr as ab, At as ac, rs as ad, fs as ae, Ar as af, Bn as ag, Jr as ah, _s as ai, ps as aj, qs as ak, Lt as al, ds as am, $ as an, Y as ao, at as ap, X as aq, hs as ar, Mr as as, ce as at, Xn as au, ei as av, Gs as aw, Ft as ax, W as ay, Hr as az, Bs as b, le as b0, mr as b1, p as b2, lt as b3, je as b4, cs as b5, Cs as b6, er as b7, $s as b8, os as b9, Fn as bA, Zs as bB, Ei as bC, R as bD, Je as bE, Dr as bF, mi as bG, $t as bH, pr as bI, Ti as bJ, Ii as bK, ri as bL, Gn as bM, Qs as bN, ge as bO, bi as bP, ts as bQ, Us as bR, si as ba, $r as bb, zr as bc, Kr as bd, gi as be, U as bf, Re as bg, As as bh, bs as bi, Ts as bj, vt as bk, Js as bl, qn as bm, ui as bn, Jn as bo, Qn as bp, Ns as bq, is as br, on as bs, Zn as bt, vr as bu, Qt as bv, xs as bw, Un as bx, ls as by, yi as bz, ki as c, zs as d, re as e, Ks as f, Ve as g, se as h, he as i, fi as j, Ri as k, Si as l, ii as m, Ms as n, ns as o, Ys as p, Ci as q, Is as r, Ws as s, li as t, Vs as u, Ai as v, xi as w, zn as x, Ni as y, tr as z
};