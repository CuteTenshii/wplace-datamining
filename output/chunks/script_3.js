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
  wt = (e, t, n) => t.has(e) || Yt("Cannot " + n);
var c = (e, t, n) => (wt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  R = (e, t, n) => t.has(e) ? Yt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  P = (e, t, n, r) => (wt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  A = (e, t, n) => (wt(e, t, "access private method"), n);
var Bn = Array.isArray,
  Un = Array.prototype.indexOf,
  tt = Array.prototype.includes,
  Qr = Array.from,
  Vn = Object.defineProperty,
  Ve = Object.getOwnPropertyDescriptor,
  qn = Object.getOwnPropertyDescriptors,
  Gn = Object.prototype,
  $n = Array.prototype,
  Qt = Object.getPrototypeOf,
  Bt = Object.isExtensible;

function es(e) {
  return typeof e == "function"
}
const Wn = () => {};

function ts(e) {
  return e()
}

function zn(e) {
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

function ns(e, t, n = !1) {
  return e === void 0 ? n ? t() : t : e
}

function rs(e, t) {
  if (Array.isArray(e)) return e;
  if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const O = 2,
  be = 4,
  ze = 8,
  Nt = 1 << 24,
  q = 16,
  X = 32,
  ne = 64,
  Kn = 128,
  H = 512,
  N = 1024,
  C = 2048,
  Z = 4096,
  Y = 8192,
  $ = 16384,
  xe = 32768,
  Ut = 1 << 25,
  nt = 65536,
  rt = 1 << 17,
  Xn = 1 << 18,
  je = 1 << 19,
  tn = 1 << 20,
  ss = 1 << 25,
  Te = 65536,
  st = 1 << 21,
  Ce = 1 << 22,
  ae = 1 << 23,
  Ee = Symbol("$state"),
  is = Symbol("legacy props"),
  as = Symbol(""),
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
const fs = !!((Zt = globalThis.document) != null && Zt.contentType) && globalThis.document.contentType.includes("xml"),
  os = 1,
  Ke = 3,
  Rt = 8;

function tr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function nr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function us(e, t, n) {
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

function cs() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function _s(e) {
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

function ds() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const vs = 1,
  hs = 2,
  ps = 4,
  ws = 8,
  ys = 16,
  Es = 1,
  ms = 2,
  gs = 4,
  bs = 8,
  Ts = 16,
  As = 1,
  Ss = 2,
  xs = 4,
  nn = 1,
  ur = 2,
  cr = "[",
  _r = "[!",
  Ns = "[?",
  dr = "]",
  kt = {},
  x = Symbol("uninitialized"),
  vr = "http://www.w3.org/1999/xhtml",
  Rs = "http://www.w3.org/2000/svg",
  ks = "http://www.w3.org/1998/Math/MathML",
  Cs = "@attach";

function hr() {
  console.warn("https://svelte.dev/e/derived_inert")
}

function Ct(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Os() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function Is() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let I = !1;

function Ms(e) {
  I = e
}
let m;

function Ae(e) {
  if (e === null) throw Ct(), kt;
  return m = e
}

function rn() {
  return Ae(ce(m))
}

function Ds(e) {
  if (I) {
    if (ce(m) !== null) throw Ct(), kt;
    m = e
  }
}

function Ps(e = 1) {
  if (I) {
    for (var t = e, n = m; t--;) n = ce(n);
    m = n
  }
}

function Ls(e = !0) {
  for (var t = 0, n = m;;) {
    if (n.nodeType === Rt) {
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

function Fs(e) {
  if (!e || e.nodeType !== Rt) throw Ct(), kt;
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

function js() {
  _t = !0
}
let b = null;

function it(e) {
  b = e
}

function Hs(e) {
  return dt().get(e)
}

function Ys(e, t) {
  return dt().set(e, t), t
}

function Bs(e) {
  return dt().has(e)
}

function Us() {
  return dt()
}

function Vs(e, t = !1, n) {
  b = {
    p: b,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: E,
    l: _t && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function qs(e) {
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

function dt(e) {
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
  de = [], zn(e)
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

function Er(e) {
  var t = E;
  if (t === null) return p.f |= ae, e;
  if ((t.f & xe) === 0 && (t.f & be) === 0) throw e;
  lt(e, t)
}

function lt(e, t) {
  if (!(t !== null && (t.f & $) !== 0)) {
    for (; t !== null;) {
      if ((t.f & Kn) !== 0) {
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

function Ot(e) {
  (e.f & H) !== 0 || e.deps === null ? T(e, N) : T(e, Z)
}

function fn(e) {
  if (e !== null)
    for (const t of e)(t.f & O) === 0 || (t.f & Te) === 0 || (t.f ^= Te, fn(t.deps))
}

function gr(e, t, n) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & Z) !== 0 && n.add(e), fn(e.deps), T(e, N)
}

function on(e, t, n, r) {
  const s = Xe() ? It : Ar;
  var i = e.filter(_ => !_.settled),
    l = t.map(s);
  if (n.length === 0 && i.length === 0) {
    r(l);
    return
  }
  var o = E,
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
  var e = E,
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
  var e = E,
    t = e.b,
    n = w,
    r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e)
  }
}

function It(e) {
  var t = O | C;
  return E !== null && (E.f |= je), {
    ctx: b,
    deps: null,
    effects: null,
    equals: sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: x,
    wv: 0,
    parent: E,
    ac: null
  }
}
const He = Symbol("obsolete");

function Tr(e, t, n) {
  let r = E;
  r === null && nr();
  var s = void 0,
    i = Lt(x),
    l = !p,
    o = new Set;
  return Fr(() => {
    var _, h;
    var a = E,
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
      if ((a.f & xe) !== 0) var v = un();
      if ((_ = r.b) != null && _.is_rendered())(h = d.async_deriveds.get(a)) == null || h.reject(He);
      else
        for (const y of o.values()) y.reject(He);
      o.add(u), d.async_deriveds.set(a, u)
    }
    const f = (y, S = void 0) => {
      v == null || v(), o.delete(u), S !== He && (d.activate(), S ? (i.f |= ae, St(i, S)) : ((i.f & ae) !== 0 && (i.f ^= ae), St(i, y)), d.deactivate())
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

function Gs(e) {
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
  var t, n = E,
    r = e.parent;
  if (!oe && r !== null && e.v !== x && (r.f & ($ | Y)) !== 0) return hr(), e.v;
  ue(r);
  try {
    e.f &= ~Te, Sr(e), t = Dn(e)
  } finally {
    ue(n)
  }
  return t
}

function cn(e) {
  var t = Mt(e);
  if (!e.equals(t) && (e.wv = In(), (!(w != null && w.is_fork) || e.deps === null) && (w !== null ? (w.capture(e, t, !0), qe == null || qe.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    T(e, N);
    return
  }
  oe || (k !== null ? (An() || w != null && w.is_fork) && k.set(e, t) : Ot(e))
}

function xr(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)(r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(ct), r.fn !== null && (r.teardown = Wn), r.ac = null, $e(r, 0), jt(r))
}

function _n(e) {
  if (e.effects !== null)
    for (const t of e.effects) t.teardown && t.fn !== null && Fe(t)
}
let yt = null,
  Ne = null,
  w = null,
  qe = null,
  k = null,
  bt = null,
  Ge = !1,
  Et = !1,
  ke = null,
  Qe = null;
var Vt = 0;
let Nr = 1;
var Oe, ie, we, Ie, Me, De, ee, Pe, M, We, te, U, W, Le, ye, g, Tt, Ye, At, dn, vn, Re, Rr, Be;
const ut = class ut {
  constructor() {
    R(this, g);
    Q(this, "id", Nr++);
    R(this, Oe, !1);
    Q(this, "linked", !0);
    R(this, ie, null);
    R(this, we, null);
    Q(this, "async_deriveds", new Map);
    Q(this, "current", new Map);
    Q(this, "previous", new Map);
    R(this, Ie, new Set);
    R(this, Me, new Set);
    R(this, De, 0);
    R(this, ee, new Map);
    R(this, Pe, null);
    R(this, M, []);
    R(this, We, []);
    R(this, te, new Set);
    R(this, U, new Set);
    R(this, W, new Map);
    R(this, Le, new Set);
    Q(this, "is_fork", !1);
    R(this, ye, !1);
    Ne === null ? yt = Ne = this : (P(Ne, we, this), P(this, ie, Ne)), Ne = this
  }
  skip_effect(t) {
    c(this, W).has(t) || c(this, W).set(t, {
      d: [],
      m: []
    }), c(this, Le).delete(t)
  }
  unskip_effect(t, n = r => this.schedule(r)) {
    var r = c(this, W).get(t);
    if (r) {
      c(this, W).delete(t);
      for (var s of r.d) T(s, C), n(s);
      for (s of r.m) T(s, Z), n(s)
    }
    c(this, Le).add(t)
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
      Et = !0, w = this, A(this, g, Ye).call(this)
    } finally {
      Vt = 0, bt = null, ke = null, Qe = null, Et = !1, w = null, k = null, me.clear()
    }
  }
  discard() {
    var t;
    for (const n of c(this, Me)) n(this);
    c(this, Me).clear();
    for (const n of this.async_deriveds.values()) n.reject(He);
    A(this, g, Be).call(this), (t = c(this, Pe)) == null || t.resolve()
  }
  register_created_effect(t) {
    c(this, We).push(t)
  }
  increment(t, n) {
    if (P(this, De, c(this, De) + 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      c(this, ee).set(n, r + 1)
    }
  }
  decrement(t, n) {
    if (P(this, De, c(this, De) - 1), t) {
      let r = c(this, ee).get(n) ?? 0;
      r === 1 ? c(this, ee).delete(n) : c(this, ee).set(n, r - 1)
    }
    c(this, ye) || (P(this, ye, !0), at(() => {
      P(this, ye, !1), this.linked && this.flush()
    }))
  }
  transfer_effects(t, n) {
    for (const r of t) c(this, te).add(r);
    for (const r of n) c(this, U).add(r);
    t.clear(), n.clear()
  }
  oncommit(t) {
    c(this, Ie).add(t)
  }
  ondiscard(t) {
    c(this, Me).add(t)
  }
  settled() {
    return (c(this, Pe) ?? P(this, Pe, en())).promise
  }
  static ensure() {
    if (w === null) {
      const t = w = new ut;
      !Et && !Ge && at(() => {
        c(t, Oe) || t.flush()
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
    if (bt = t, (s = t.b) != null && s.is_pending && (t.f & (be | ze | Nt)) !== 0 && (t.f & xe) === 0) {
      t.b.defer_effect(t);
      return
    }
    for (var n = t; n.parent !== null;) {
      n = n.parent;
      var r = n.f;
      if (ke !== null && n === E && (p === null || (p.f & O) === 0)) return;
      if ((r & (ne | X)) !== 0) {
        if ((r & N) === 0) return;
        n.f ^= N
      }
    }
    c(this, M).push(n)
  }
};
Oe = new WeakMap, ie = new WeakMap, we = new WeakMap, Ie = new WeakMap, Me = new WeakMap, De = new WeakMap, ee = new WeakMap, Pe = new WeakMap, M = new WeakMap, We = new WeakMap, te = new WeakMap, U = new WeakMap, W = new WeakMap, Le = new WeakMap, ye = new WeakMap, g = new WeakSet, Tt = function() {
  if (this.is_fork) return !0;
  for (const r of c(this, ee).keys()) {
    for (var t = r, n = !1; t.parent !== null;) {
      if (c(this, W).has(t)) {
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
  P(this, Oe, !0), Vt++ > 1e3 && (A(this, g, Be).call(this), Cr());
  for (const f of c(this, te)) c(this, U).delete(f), T(f, C), this.schedule(f);
  for (const f of c(this, U)) T(f, Z), this.schedule(f);
  const t = c(this, M);
  P(this, M, []), this.apply();
  var n = ke = [],
    r = [],
    s = Qe = [];
  for (const f of t) try {
    A(this, g, At).call(this, f, n, r)
  } catch (_) {
    throw wn(f), A(this, g, Tt).call(this) || this.discard(), _
  }
  if (w = null, s.length > 0) {
    var i = ut.ensure();
    for (const f of s) i.schedule(f)
  }
  if (ke = null, Qe = null, A(this, g, Tt).call(this)) {
    A(this, g, Re).call(this, r), A(this, g, Re).call(this, n);
    for (const [f, _] of c(this, W)) pn(f, _);
    s.length > 0 && A(a = w, g, Ye).call(a);
    return
  }
  const l = A(this, g, dn).call(this);
  if (l) {
    A(this, g, Re).call(this, r), A(this, g, Re).call(this, n), A(u = l, g, vn).call(u, this);
    return
  }
  c(this, te).clear(), c(this, U).clear();
  for (const f of c(this, Ie)) f(this);
  c(this, Ie).clear(), qe = this, qt(r), qt(n), qe = null, (d = c(this, Pe)) == null || d.resolve();
  var o = w;
  if (c(this, De) === 0 && (c(this, M).length === 0 || o !== null) && A(this, g, Be).call(this), c(this, M).length > 0)
    if (o !== null) {
      const f = o;
      c(f, M).push(...c(this, M).filter(_ => !c(f, M).includes(_)))
    } else o = this;
  o !== null && A(v = o, g, Ye).call(v)
}, At = function(t, n, r) {
  t.f ^= N;
  for (var s = t.first; s !== null;) {
    var i = s.f,
      l = (i & (X | ne)) !== 0,
      o = l && (i & N) !== 0,
      a = o || (i & Y) !== 0 || c(this, W).has(s);
    if (!a && s.fn !== null) {
      l ? s.f ^= N : (i & be) !== 0 ? n.push(s) : Ze(s) && ((i & q) !== 0 && c(this, U).add(s), Fe(s));
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
  t.async_deriveds.clear(), this.transfer_effects(c(t, te), c(t, U));
  const n = s => {
    var i = s.reactions;
    if (i !== null)
      for (const a of i) {
        var l = a.f;
        if ((l & O) !== 0) n(a);
        else {
          var o = a;
          l & (Ce | q) && !this.async_deriveds.has(o) && (c(this, U).delete(o), T(o, C), this.schedule(o))
        }
      }
  };
  for (const s of this.current.keys()) n(s);
  this.oncommit(() => t.discard()), A(r = t, g, Be).call(r), w = this, A(this, g, Ye).call(this)
}, Re = function(t) {
  for (var n = 0; n < t.length; n += 1) gr(t[n], c(this, te), c(this, U))
}, Rr = function() {
  var v;
  for (let f = yt; f !== null; f = c(f, we)) {
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
            (h.f & (q | Ce)) !== 0 ? f.schedule(h) : A(y = f, g, Re).call(y, [h])
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
          for (const _ of c(this, We))(_.f & ($ | Y | rt)) === 0 && Dt(_, u, o) && ((_.f & (Ce | q)) !== 0 ? (T(_, C), f.schedule(_)) : c(f, te).add(_));
        if (c(f, M).length > 0 && !c(f, ye)) {
          f.apply();
          for (var d of c(f, M)) A(v = f, g, At).call(v, d, [], []);
          P(f, M, [])
        }
        f.deactivate()
      }
    }
  }
}, Be = function() {
  if (this.linked) {
    var t = c(this, ie),
      n = c(this, we);
    t === null ? yt = n : P(t, we, n), n === null ? Ne = t : P(n, ie, t), this.linked = !1
  }
};
let le = ut;

function kr(e) {
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
    lt(e, bt)
  }
}
let B = null;

function qt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & ($ | Y)) === 0 && Ze(r) && (B = new Set, Fe(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Nn(r), (B == null ? void 0 : B.size) > 0)) {
        me.clear();
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
      (i & O) !== 0 ? hn(s, t, n, r) : (i & (Ce | q)) !== 0 && (i & C) === 0 && Dt(s, t, r) && (T(s, C), Pt(s))
    }
}

function Dt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (tt.call(t, s)) return !0;
      if ((s.f & O) !== 0 && Dt(s, t, n)) return n.set(s, !0), !0
    }
  return n.set(e, !1), !1
}

function Pt(e) {
  w.schedule(e)
}

function pn(e, t) {
  if (!((e.f & X) !== 0 && (e.f & N) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & Z) !== 0 && t.m.push(e), T(e, N);
    for (var n = e.first; n !== null;) pn(n, t), n = n.next
  }
}

function wn(e) {
  T(e, N);
  for (var t = e.first; t !== null;) wn(t), t = t.next
}
let ot = new Set;
const me = new Map;
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

function $s(e, t = !1, n = !0) {
  var s;
  const r = Lt(e);
  return t || (r.equals = an), _t && n && b !== null && b.l !== null && ((s = b.l).s ?? (s.s = [])).push(r), r
}

function se(e, t, n = !1) {
  p !== null && (!G || (p.f & rt) !== 0) && Xe() && (p.f & (O | q | Ce | rt)) !== 0 && (z === null || !z.has(e)) && or();
  let r = n ? Ue(t) : t;
  return St(e, r, Qe)
}

function St(e, t, n = null) {
  if (!e.equals(t)) {
    me.set(e, oe ? t : e.v);
    var r = le.ensure();
    if (r.capture(e, t), (e.f & O) !== 0) {
      const s = e;
      (e.f & C) !== 0 && Mt(s), k === null && Ot(s)
    }
    e.wv = In(), En(e, C, n), Xe() && E !== null && (E.f & N) !== 0 && (E.f & (X | ne)) === 0 && (j === null ? Br([e]) : j.push(e)), !r.is_fork && ot.size > 0 && !yn && Or()
  }
  return t
}

function Or() {
  yn = !1;
  for (const e of ot) {
    (e.f & N) !== 0 && T(e, Z);
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

function Ws(e, t = 1) {
  var n = he(e),
    r = t === 1 ? n++ : n--;
  return se(e, n), r
}

function mt(e) {
  se(e, e.v + 1)
}

function En(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = Xe(), i = r.length, l = 0; l < i; l++) {
      var o = r[l],
        a = o.f;
      if (!(!s && o === E)) {
        var u = (a & C) === 0;
        if (u && T(o, t), (a & rt) !== 0) ot.add(o);
        else if ((a & O) !== 0) {
          var d = o;
          k == null || k.delete(d), (a & Te) === 0 && (a & H && (E === null || (E.f & st) === 0) && (o.f |= Te), En(d, Z, n))
        } else if (u) {
          var v = o;
          (a & q) !== 0 && B !== null && B.add(v), n !== null ? n.push(v) : Pt(v)
        }
      }
    }
}

function Ue(e) {
  if (typeof e != "object" || e === null || Ee in e) return e;
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
      J(null), Kt(i);
      var d = o();
      return J(a), Kt(u), d
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
          const d = l(() => re(x));
          n.set(a, d), mt(s)
        }
      } else se(u, x), mt(s);
      return !0
    },
    get(o, a, u) {
      var _;
      if (a === Ee) return e;
      var d = n.get(a),
        v = a in o;
      if (d === void 0 && (!v || (_ = Ve(o, a)) != null && _.writable) && (d = l(() => {
          var h = Ue(v ? o[a] : x),
            y = re(h);
          return y
        }), n.set(a, d)), d !== void 0) {
        var f = he(d);
        return f === x ? void 0 : f
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
        if (v !== void 0 && f !== x) return {
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
      if (a === Ee) return !0;
      var u = n.get(a),
        d = u !== void 0 && u.v !== x || Reflect.has(o, a);
      if (u !== void 0 || E !== null && (!d || (f = Ve(o, a)) != null && f.writable)) {
        u === void 0 && (u = l(() => {
          var _ = d ? Ue(o[a]) : x,
            h = re(_);
          return h
        }), n.set(a, u));
        var v = he(u);
        if (v === x) return !1
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
          h !== void 0 ? se(h, x) : _ in o && (h = l(() => re(x)), n.set(_ + "", h))
        }
      if (v === void 0)(!f || (Ht = Ve(o, a)) != null && Ht.writable) && (v = l(() => re(void 0)), se(v, Ue(u)), n.set(a, v));
      else {
        f = v.v !== x;
        var y = l(() => Ue(u));
        se(v, y)
      }
      var S = Reflect.getOwnPropertyDescriptor(o, a);
      if (S != null && S.set && S.set.call(d, u), !f) {
        if (r && typeof a == "string") {
          var _e = n.get("length"),
            pt = Number(a);
          Number.isInteger(pt) && pt >= _e.v && se(_e, pt + 1)
        }
        mt(s)
      }
      return !0
    },
    ownKeys(o) {
      he(s);
      var a = Reflect.ownKeys(o).filter(v => {
        var f = n.get(v);
        return f === void 0 || f.v !== x
      });
      for (var [u, d] of n) d.v !== x && !(u in o) && a.push(u);
      return a
    },
    setPrototypeOf() {
      fr()
    }
  })
}

function Gt(e) {
  try {
    if (e !== null && typeof e == "object" && Ee in e) return e[Ee]
  } catch {}
  return e
}

function zs(e, t) {
  return Object.is(Gt(e), Gt(t))
}
var $t, Ir, mn, gn, bn;

function Ks() {
  if ($t === void 0) {
    $t = window, Ir = document, mn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    gn = Ve(t, "firstChild").get, bn = Ve(t, "nextSibling").get, Bt(e) && (e[Jn] = void 0, e[Zn] = null, e[Qn] = void 0, e.__e = void 0), Bt(n) && (n[er] = void 0)
  }
}

function Se(e = "") {
  return document.createTextNode(e)
}

function V(e) {
  return gn.call(e)
}

function ce(e) {
  return bn.call(e)
}

function Xs(e, t) {
  if (!I) return V(e);
  var n = V(m);
  if (n === null) n = m.appendChild(Se());
  else if (t && n.nodeType !== Ke) {
    var r = Se();
    return n == null || n.before(r), Ae(r), r
  }
  return t && vt(n), Ae(n), n
}

function Zs(e, t = !1) {
  if (!I) {
    var n = V(e);
    return n instanceof Comment && n.data === "" ? ce(n) : n
  }
  if (t) {
    if ((m == null ? void 0 : m.nodeType) !== Ke) {
      var r = Se();
      return m == null || m.before(r), Ae(r), r
    }
    vt(m)
  }
  return m
}

function Js(e, t = 1, n = !1) {
  let r = I ? m : e;
  for (var s; t--;) s = r, r = ce(r);
  if (!I) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ke) {
      var i = Se();
      return r === null ? s == null || s.after(i) : r.before(i), Ae(i), i
    }
    vt(r)
  }
  return Ae(r), r
}

function Mr(e) {
  e.textContent = ""
}

function Qs() {
  return !1
}

function Dr(e, t, n) {
  return t == null || t === vr ? n ? document.createElement(e, {
    is: n
  }) : document.createElement(e) : n ? document.createElementNS(t, e, {
    is: n
  }) : document.createElementNS(t, e)
}

function vt(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Ke;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
}

function ei(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, at(() => {
      document.activeElement === n && e.focus()
    })
  }
}

function ti(e) {
  I && V(e) !== null && Mr(e)
}
let Wt = !1;

function Pr() {
  Wt || (Wt = !0, document.addEventListener("reset", e => {
    Promise.resolve().then(() => {
      var t;
      if (!e.defaultPrevented)
        for (const n of e.target.elements)(t = n[Je]) == null || t.call(n)
    })
  }, {
    capture: !0
  }))
}

function ni(e, t, n, r = !0) {
  r && n();
  for (var s of t) e.addEventListener(s, n);
  Ft(() => {
    for (var i of t) e.removeEventListener(i, n)
  })
}

function ht(e) {
  var t = p,
    n = E;
  J(null), ue(null);
  try {
    return e()
  } finally {
    J(t), ue(n)
  }
}

function ri(e, t, n, r = n) {
  e.addEventListener(t, () => ht(n));
  const s = e[Je];
  s ? e[Je] = () => {
    s(), r(!0)
  } : e[Je] = () => r(!0), Pr()
}

function Tn(e) {
  E === null && (p === null && ir(), sr()), oe && rr()
}

function Lr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function F(e, t) {
  var n = E;
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
  if ((e & be) !== 0) ke !== null ? ke.push(r) : le.ensure().schedule(r);
  else if (t !== null) {
    try {
      Fe(r)
    } catch (l) {
      throw fe(r), l
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & je) === 0 && (s = s.first, (e & q) !== 0 && (e & nt) !== 0 && s !== null && (s.f |= nt))
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
  const t = F(ze, null);
  return T(t, N), t.teardown = e, t
}

function si(e) {
  Tn();
  var t = E.f,
    n = !p && (t & X) !== 0 && b !== null && !b.i;
  if (n) {
    var r = b;
    (r.e ?? (r.e = [])).push(e)
  } else return Sn(e)
}

function Sn(e) {
  return F(be | tn, e)
}

function ii(e) {
  return Tn(), F(ze | tn, e)
}

function ai(e) {
  le.ensure();
  const t = F(ne | je, e);
  return () => {
    fe(t)
  }
}

function li(e) {
  le.ensure();
  const t = F(ne | je, e);
  return (n = {}) => new Promise(r => {
    n.outro ? Yr(t, () => {
      fe(t), r(void 0)
    }) : (fe(t), r(void 0))
  })
}

function fi(e) {
  return F(be, e)
}

function Fr(e) {
  return F(Ce | je, e)
}

function oi(e, t = 0) {
  return F(ze | t, e)
}

function ui(e, t = [], n = [], r = []) {
  on(r, t, n, s => {
    F(ze, () => {
      e(...s.map(he))
    })
  })
}

function ci(e, t = [], n = [], r = []) {
  on(r, t, n, s => {
    F(be, () => e(...s.map(he)))
  })
}

function _i(e, t = 0) {
  var n = F(q | t, e);
  return n
}

function di(e, t = 0) {
  var n = F(Nt | t, e);
  return n
}

function vi(e) {
  return F(X | je, e)
}

function xn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = oe,
      r = p;
    zt(!0), J(null);
    try {
      t.call(null)
    } finally {
      zt(n), J(r)
    }
  }
}

function jt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && ht(() => {
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
  (t || (e.f & Xn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Hr(e.nodes.start, e.nodes.end), n = !0), e.f |= Ut, jt(e, t && !n), $e(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r) i.stop();
  xn(e), e.f ^= Ut, e.f |= $;
  var s = e.parent;
  s !== null && s.first !== null && Nn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null
}

function Hr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : ce(e);
    e.remove(), e = n
  }
}

function Nn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Yr(e, t, n = !0) {
  var r = [];
  Rn(e, r, !0);
  var s = () => {
      n && fe(e), t && t()
    },
    i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var o of r) o.out(l)
  } else s()
}

function Rn(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)(o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null;) {
      var i = s.next;
      if ((s.f & ne) === 0) {
        var l = (s.f & nt) !== 0 || (s.f & X) !== 0 && (e.f & q) !== 0;
        Rn(s, t, l ? n : !1)
      }
      s = i
    }
  }
}

function hi(e) {
  kn(e, !0)
}

function kn(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & N) === 0 && (T(e, C), le.ensure().schedule(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & nt) !== 0 || (n.f & X) !== 0;
      kn(n, s ? t : !1), n = r
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)(l.is_global || t) && l.in()
  }
}

function pi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var s = n === r ? null : ce(n);
      t.append(n), n = s
    }
}
let et = !1,
  oe = !1;

function zt(e) {
  oe = e
}
let p = null,
  G = !1;

function J(e) {
  p = e
}
let E = null;

function ue(e) {
  E = e
}
let z = null;

function Cn(e) {
  p !== null && (z ?? (z = new Set)).add(e)
}
let D = null,
  L = 0,
  j = null;

function Br(e) {
  j = e
}
let On = 1,
  ve = 0,
  ge = ve;

function Kt(e) {
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
    }(t & H) !== 0 && k === null && T(e, N)
  }
  return !1
}

function Mn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(z !== null && z.has(e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & O) !== 0 ? Mn(i, t, !1) : t === i && (n ? T(i, C) : (i.f & N) !== 0 && T(i, Z), Pt(i))
    }
}

function Dn(e) {
  var y;
  var t = D,
    n = L,
    r = j,
    s = p,
    i = z,
    l = b,
    o = G,
    a = ge,
    u = e.f;
  D = null, L = 0, j = null, p = (u & (X | ne)) === 0 ? e : null, z = null, it(e.ctx), G = !1, ge = ++ve, e.ac !== null && (ht(() => {
    e.ac.abort(ct)
  }), e.ac = null);
  try {
    e.f |= st;
    var d = e.fn,
      v = d();
    e.f |= xe;
    var f = e.deps,
      _ = w == null ? void 0 : w.is_fork;
    if (D !== null) {
      var h;
      if (_ || $e(e, L), f !== null && L > 0)
        for (f.length = L + D.length, h = 0; h < D.length; h++) f[L + h] = D[h];
      else e.deps = f = D;
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
    return Er(S)
  } finally {
    e.f ^= st, D = t, L = n, j = r, p = s, z = i, it(l), G = o, ge = a
  }
}

function Ur(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Un.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  if (n === null && (t.f & O) !== 0 && (D === null || !tt.call(D, t))) {
    var i = t;
    (i.f & H) !== 0 && (i.f ^= H, i.f &= ~Te), i.v !== x && Ot(i), xr(i), $e(i, 0)
  }
}

function $e(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) Ur(e, n[r])
}

function Fe(e) {
  var t = e.f;
  if ((t & $) === 0) {
    T(e, N);
    var n = E,
      r = et;
    E = e, et = !0;
    try {
      (t & (q | Nt)) !== 0 ? jr(e) : jt(e), xn(e);
      var s = Dn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = On;
      var i
    } finally {
      et = r, E = n
    }
  }
}
async function wi() {
  await Promise.resolve(), kr()
}

function yi() {
  return le.ensure().settled()
}

function he(e) {
  var t = e.f,
    n = (t & O) !== 0;
  if (p !== null && !G) {
    var r = E !== null && (E.f & $) !== 0;
    if (!r && (z === null || !z.has(e))) {
      var s = p.deps;
      if ((p.f & st) !== 0) e.rv < ve && (e.rv = ve, D === null && s !== null && s[L] === e ? L++ : D === null ? D = [e] : D.push(e));
      else {
        p.deps ?? (p.deps = []), tt.call(p.deps, e) || p.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [p] : tt.call(i, p) || i.push(p)
      }
    }
  }
  if (oe && me.has(e)) return me.get(e);
  if (n) {
    var l = e;
    if (oe) {
      var o = l.v;
      return ((l.f & N) === 0 && l.reactions !== null || Ln(l)) && (o = Mt(l)), me.set(l, o), o
    }
    var a = (l.f & H) === 0 && !G && p !== null && (et || (p.f & H) !== 0),
      u = (l.f & xe) === 0;
    Ze(l) && (a && (l.f |= H), cn(l)), a && !u && (_n(l), Pn(l))
  }
  if (k != null && k.has(e)) return k.get(e);
  if ((e.f & ae) !== 0) throw e.v;
  return e.v
}

function Pn(e) {
  if (e.f |= H, e.deps !== null)
    for (const t of e.deps)(t.reactions ?? (t.reactions = [])).push(e), (t.f & O) !== 0 && (t.f & H) === 0 && (_n(t), Pn(t))
}

function Ln(e) {
  if (e.v === x) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (me.has(t) || (t.f & O) !== 0 && Ln(t)) return !0;
  return !1
}

function Ei(e) {
  var t = G;
  try {
    return G = !0, e()
  } finally {
    G = t
  }
}

function mi(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ee in e) xt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ee in n && xt(n)
      }
  }
}

function xt(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      xt(e[r], t)
    } catch {}
    const n = Qt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i) try {
          i.call(e)
        } catch {}
      }
    }
  }
}

function gi(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const Vr = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function bi(e) {
  return Vr.includes(e)
}
const qr = {
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

function Ti(e) {
  return e = e.toLowerCase(), qr[e] ?? e
}
const Gr = ["touchstart", "touchmove"];

function Ai(e) {
  return Gr.includes(e)
}
const $r = ["textarea", "script", "style", "title"];

function Si(e) {
  return $r.includes(e)
}
const pe = Symbol("events"),
  Wr = new Set,
  zr = new Set;

function xi(e) {
  if (!I) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function Fn(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Kr.call(t, i), !i.cancelBubble) return ht(() => n == null ? void 0 : n.call(this, i))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? at(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function Ni(e, t, n, r = {}) {
  var s = Fn(t, e, n, r);
  return () => {
    e.removeEventListener(t, s, r)
  }
}

function Ri(e, t, n, r, s) {
  var i = {
      capture: r,
      passive: s
    },
    l = Fn(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ft(() => {
    t.removeEventListener(e, l, i)
  })
}

function ki(e, t, n) {
  (t[pe] ?? (t[pe] = {}))[e] = n
}

function Ci(e) {
  for (var t = 0; t < e.length; t++) Wr.add(e[t]);
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
    Vn(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n
      }
    });
    var d = p,
      v = E;
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
const gt = ((Jt = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Jt.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
  createHTML: e => e
});

function Xr(e) {
  return (gt == null ? void 0 : gt.createHTML(e)) ?? e
}

function jn(e) {
  var t = Dr("template");
  return t.innerHTML = Xr(e.replaceAll("<!>", "<!---->")), t.content
}

function K(e, t) {
  var n = E;
  n.nodes === null && (n.nodes = {
    start: e,
    end: t,
    a: null,
    t: null
  })
}

function Oi(e, t) {
  var n = (t & nn) !== 0,
    r = (t & ur) !== 0,
    s, i = !e.startsWith("<!>");
  return () => {
    if (I) return K(m, null), m;
    s === void 0 && (s = jn(i ? e : "<!>" + e), n || (s = V(s)));
    var l = r || mn ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var o = V(l),
        a = l.lastChild;
      K(o, a)
    } else K(l, l);
    return l
  }
}

function Zr(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = (t & nn) !== 0,
    i = `<${n}>${r?e:"<!>"+e}</${n}>`,
    l;
  return () => {
    if (I) return K(m, null), m;
    if (!l) {
      var o = jn(i),
        a = V(o);
      if (s)
        for (l = document.createDocumentFragment(); V(a);) l.appendChild(V(a));
      else l = V(a)
    }
    var u = l.cloneNode(!0);
    if (s) {
      var d = V(u),
        v = u.lastChild;
      K(d, v)
    } else K(u, u);
    return u
  }
}

function Ii(e, t) {
  return Zr(e, t, "svg")
}

function Mi(e = "") {
  if (!I) {
    var t = Se(e + "");
    return K(t, t), t
  }
  var n = m;
  return n.nodeType !== Ke ? (n.before(n = Se()), Ae(n)) : vt(n), K(n, n), n
}

function Di() {
  if (I) return K(m, null), m;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = Se();
  return e.append(t, n), K(t, n), e
}

function Pi(e, t) {
  if (I) {
    var n = E;
    ((n.f & xe) === 0 || n.nodes.end === null) && (n.nodes.end = m), rn();
    return
  }
  e !== null && e.before(t)
}

function Li() {
  var e, t;
  if (I && m && m.nodeType === Rt && ((e = m.textContent) != null && e.startsWith("$"))) {
    const n = m.textContent.substring(1);
    return rn(), n
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
}
export {
  Ir as $, _t as A, Ei as B, kr as C, Us as D, Hs as E, Bs as F, Ys as G, yi as H, wi as I, _i as J, I as K, rn as L, nt as M, Fs as N, Ls as O, Ae as P, Ms as Q, m as R, cr as S, fi as T, oi as U, E as V, Ut as W, Ee as X, hi as Y, fe as Z, Yr as _, Pi as a, ue as a$, Se as a0, vi as a1, w as a2, pi as a3, Qs as a4, js as a5, Xe as a6, ps as a7, V as a8, _r as a9, Ct as aA, kt as aB, Dr as aC, Rs as aD, ks as aE, ii as aF, zn as aG, ts as aH, mi as aI, It as aJ, rs as aK, Ve as aL, _s as aM, gs as aN, oe as aO, bs as aP, ms as aQ, Es as aR, Ts as aS, is as aT, es as aU, Li as aV, An as aW, mt as aX, Kn as aY, Ns as aZ, gr as a_, Rt as aa, dr as ab, St as ac, ss as ad, us as ae, Ar as af, Bn as ag, Qr as ah, vs as ai, ys as aj, $s as ak, Lt as al, hs as am, $ as an, Y as ao, at as ap, X as aq, ws as ar, Mr as as, ce as at, Xn as au, ri as av, zs as aw, Ft as ax, K as ay, Hr as az, qs as b, J as b0, it as b1, le as b2, Er as b3, p as b4, lt as b5, je as b6, ds as b7, Is as b8, er as b9, qn as bA, fs as bB, gi as bC, Fn as bD, ei as bE, Ti as bF, x as bG, Je as bH, Pr as bI, bi as bJ, xi as bK, $t as bL, pr as bM, ns as bN, ge as bO, Ws as bP, ai as bQ, Gn as bR, os as bS, Si as bT, ni as bU, Ks as ba, cs as bb, li as bc, Wr as bd, zr as be, Kr as bf, Ai as bg, q as bh, xe as bi, xs as bj, As as bk, Ss as bl, ht as bm, Ni as bn, ti as bo, Vn as bp, di as bq, Jn as br, Qn as bs, Os as bt, as as bu, on as bv, Zn as bw, vr as bx, Qt as by, Cs as bz, Oi as c, Xs as d, re as e, Zs as f, Ue as g, se as h, he as i, ci as j, Ii as k, Ci as l, ki as m, Wn as n, Ps as o, Vs as p, Ri as q, Ds as r, Js as s, ui as t, Gs as u, Mi as v, Di as w, tr as x, si as y, b as z
};