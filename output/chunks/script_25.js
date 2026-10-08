import {
  At as e,
  Bt as t,
  It as n,
  Lt as r,
  Mt as i,
  Nt as a,
  Rt as o,
  Vt as s,
  dt as c,
  ht as l,
  jt as u,
  lt as d,
  ot as f,
  ut as p,
  zt as m
} from "./D2z8HFb7.js";
import {
  t as h
} from "./BrtrtlEe.js";
var g, _ = !1,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakSet;
g = class extends Date {
  constructor(...e) {
    super(...e), s(this, x), t(this, v, a(super.getTime())), t(this, y, new Map), t(this, b, d), _ || m(x, this, ee).call(this)
  }
};

function ee() {
  _ = !0;
  var e = g.prototype,
    t = Date.prototype,
    i = Object.getOwnPropertyNames(t);
  for (let a of i)(a.startsWith(`get`) || a.startsWith(`to`) || a === `valueOf`) && (e[a] = function(...e) {
    if (e.length > 0) return p(r(v, this)), t[a].apply(this, e);
    var i = r(y, this).get(a);
    if (i === void 0) {
      let o = d;
      c(r(b, this)), i = n(() => (p(r(v, this)), t[a].apply(this, e))), r(y, this).set(a, i), c(o)
    }
    return p(i)
  }), a.startsWith(`set`) && (e[a] = function(...e) {
    var n = t[a].apply(this, e);
    return u(r(v, this), t.getTime.call(this)), n
  })
}
var S, C, w = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
  T = [`difference`, `intersection`, `symmetricDifference`, `union`],
  E = !1,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakMap,
  j = new WeakSet;
C = Symbol.iterator;
var M = class extends Set {
  constructor(e) {
    if (super(), s(this, j), t(this, D, new Map), t(this, O, a(0)), t(this, k, a(0)), t(this, A, l || -1), e) {
      for (var n of e) super.add(n);
      r(k, this).v = super.size
    }
    E || m(j, this, ne).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = r(D, this),
      i = n.get(e);
    if (i === void 0) {
      if (!t) return p(r(O, this)), !1;
      i = m(j, this, te).call(this, !0), n.set(e, i)
    }
    return p(i), t
  }
  add(t) {
    return super.has(t) || (super.add(t), u(r(k, this), super.size), e(r(O, this))), this
  }
  delete(t) {
    var n = super.delete(t),
      i = r(D, this),
      a = i.get(t);
    return a !== void 0 && (i.delete(t), u(a, !1)), n && (u(r(k, this), super.size), e(r(O, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(D, this);
      for (var n of t.values()) u(n, !1);
      t.clear(), u(r(k, this), 0), e(r(O, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return p(r(O, this)), super.values()
  }
  entries() {
    return p(r(O, this)), super.entries()
  } [C]() {
    return this.keys()
  }
  get size() {
    return p(r(k, this))
  }
};
S = M;

function te(e) {
  return l === r(A, this) ? a(e) : i(e)
}

function ne() {
  E = !0;
  var e = S.prototype,
    t = Set.prototype;
  for (let n of w) e[n] = function(...e) {
    return p(r(O, this)), t[n].apply(this, e)
  };
  for (let n of T) e[n] = function(...e) {
    p(r(O, this));
    var i = t[n].apply(this, e);
    return new S(i)
  }
}

function N(e) {
  return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }, N(e)
}

function P(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = N(e)) !== null;);
  return e
}

function F() {
  return F = typeof Reflect < `u` && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
    var r = P(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
    }
  }, F.apply(null, arguments)
}

function I(e, t, n, r) {
  var i = F(N(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function` ? function(e) {
    return i.apply(n, e)
  } : i
}
var L, R, z = new WeakMap,
  B = new WeakMap,
  V = new WeakMap,
  H = new WeakMap,
  U = new WeakSet;
R = Symbol.iterator;
var W = class extends Map {
  constructor(e) {
    if (super(), s(this, U), t(this, z, new Map), t(this, B, a(0)), t(this, V, a(0)), t(this, H, l || -1), e) {
      for (var [n, i] of e) super.set(n, i);
      r(V, this).v = super.size
    }
  }
  has(e) {
    var t = r(z, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = m(U, this, G).call(this, 0), t.set(e, n);
      else return p(r(B, this)), !1
    }
    return p(n), !0
  }
  forEach(e, t) {
    m(U, this, K).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = r(z, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = m(U, this, G).call(this, 0), t.set(e, n);
      else {
        p(r(B, this));
        return
      }
    }
    return p(n), super.get(e)
  }
  set(t, n) {
    var i = r(z, this),
      a = i.get(t),
      o = super.get(t),
      s = super.set(t, n),
      c = r(B, this);
    if (a === void 0) a = m(U, this, G).call(this, 0), i.set(t, a), u(r(V, this), super.size), e(c);
    else if (o !== n) {
      var l;
      e(a);
      var d = c.reactions === null ? null : new Set(c.reactions);
      (d === null || !((l = a.reactions) != null && l.every(e => d.has(e)))) && e(c)
    }
    return s
  }
  delete(t) {
    var n = r(z, this),
      i = n.get(t),
      a = super.delete(t);
    return i !== void 0 && (n.delete(t), u(i, -1)), a && (u(r(V, this), super.size), e(r(B, this))), a
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(z, this);
      u(r(V, this), 0);
      for (var n of t.values()) u(n, -1);
      e(r(B, this)), t.clear()
    }
  }
  keys() {
    return p(r(B, this)), super.keys()
  }
  values() {
    return m(U, this, K).call(this), super.values()
  }
  entries() {
    return m(U, this, K).call(this), super.entries()
  } [R]() {
    return this.entries()
  }
  get size() {
    return p(r(V, this)), super.size
  }
};
L = W;

function G(e) {
  return l === r(H, this) ? a(e) : i(e)
}

function K() {
  p(r(B, this));
  var e = r(z, this);
  if (r(V, this).v !== e.size) {
    for (var t of I(L.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = m(U, this, G).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of r(z, this)) p(n)
}
var q, J = Symbol(`replace`),
  Y = new WeakMap,
  X = new WeakMap,
  Z = new WeakMap,
  Q = new WeakSet;
q = Symbol.iterator;
var re = class extends URLSearchParams {
  constructor(...e) {
    super(...e), s(this, Q), t(this, Y, a(0)), t(this, X, ae()), t(this, Z, !1)
  } [J](t) {
    if (!r(Z, this)) {
      o(Z, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [e, n] of t) super.append(e, n);
      e(r(Y, this)), o(Z, this, !1)
    }
  }
  append(t, n) {
    super.append(t, n), m(Q, this, $).call(this), e(r(Y, this))
  }
  delete(t, n) {
    var i = super.has(t, n);
    super.delete(t, n), i && (m(Q, this, $).call(this), e(r(Y, this)))
  }
  get(e) {
    return p(r(Y, this)), super.get(e)
  }
  getAll(e) {
    return p(r(Y, this)), super.getAll(e)
  }
  has(e, t) {
    return p(r(Y, this)), super.has(e, t)
  }
  keys() {
    return p(r(Y, this)), super.keys()
  }
  set(t, n) {
    var i = super.getAll(t);
    super.set(t, n);
    var a = super.getAll(t);
    (i.length !== a.length || i.some((e, t) => e !== a[t])) && (m(Q, this, $).call(this), e(r(Y, this)))
  }
  sort() {
    super.sort(), m(Q, this, $).call(this), e(r(Y, this))
  }
  toString() {
    return p(r(Y, this)), super.toString()
  }
  values() {
    return p(r(Y, this)), super.values()
  }
  entries() {
    return p(r(Y, this)), super.entries()
  } [q]() {
    return this.entries()
  }
  get size() {
    return p(r(Y, this)), super.size
  }
};

function $() {
  if (!r(X, this) || r(Z, this)) return;
  o(Z, this, !0);
  let e = this.toString();
  r(X, this).search = e && `?${e}`, o(Z, this, !1)
}
var ie = null;

function ae() {
  return ie
}
var oe = /\(.+\)/,
  se = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  ce = class extends h {
    constructor(e, t) {
      let n = oe.test(e) || e.split(/[\s,]+/).some(e => se.has(e.trim())) ? e : `(${e})`,
        r = window.matchMedia(n);
      super(() => r.matches, e => f(r, `change`, e))
    }
  };
export {
  M as i, re as n, W as r, ce as t
};