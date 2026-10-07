import {
  At as e,
  Bt as t,
  Ht as n,
  It as r,
  Lt as i,
  Mt as a,
  Nt as o,
  Rt as s,
  Vt as c,
  dt as l,
  ht as u,
  jt as d,
  lt as f,
  ot as ee,
  ut as p,
  zt as m
} from "./D2z8HFb7.js";
var h, g = !1,
  _ = new WeakMap,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakSet;
h = class extends Date {
  constructor(...e) {
    super(...e), c(this, b), t(this, _, o(super.getTime())), t(this, v, new Map), t(this, y, f), g || m(b, this, x).call(this)
  }
};

function x() {
  g = !0;
  var e = h.prototype,
    t = Date.prototype,
    n = Object.getOwnPropertyNames(t);
  for (let a of n)(a.startsWith(`get`) || a.startsWith(`to`) || a === `valueOf`) && (e[a] = function(...e) {
    if (e.length > 0) return p(i(_, this)), t[a].apply(this, e);
    var n = i(v, this).get(a);
    if (n === void 0) {
      let o = f;
      l(i(y, this)), n = r(() => (p(i(_, this)), t[a].apply(this, e))), i(v, this).set(a, n), l(o)
    }
    return p(n)
  }), a.startsWith(`set`) && (e[a] = function(...e) {
    var n = t[a].apply(this, e);
    return d(i(_, this), t.getTime.call(this)), n
  })
}
var S, C, te = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
  ne = [`difference`, `intersection`, `symmetricDifference`, `union`],
  w = !1,
  T = new WeakMap,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakSet;
C = Symbol.iterator;
var A = class extends Set {
  constructor(e) {
    if (super(), c(this, k), t(this, T, new Map), t(this, E, o(0)), t(this, D, o(0)), t(this, O, u || -1), e) {
      for (var n of e) super.add(n);
      i(D, this).v = super.size
    }
    w || m(k, this, re).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = i(T, this),
      r = n.get(e);
    if (r === void 0) {
      if (!t) return p(i(E, this)), !1;
      r = m(k, this, j).call(this, !0), n.set(e, r)
    }
    return p(r), t
  }
  add(t) {
    return super.has(t) || (super.add(t), d(i(D, this), super.size), e(i(E, this))), this
  }
  delete(t) {
    var n = super.delete(t),
      r = i(T, this),
      a = r.get(t);
    return a !== void 0 && (r.delete(t), d(a, !1)), n && (d(i(D, this), super.size), e(i(E, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = i(T, this);
      for (var n of t.values()) d(n, !1);
      t.clear(), d(i(D, this), 0), e(i(E, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return p(i(E, this)), super.values()
  }
  entries() {
    return p(i(E, this)), super.entries()
  } [C]() {
    return this.keys()
  }
  get size() {
    return p(i(D, this))
  }
};
S = A;

function j(e) {
  return u === i(O, this) ? o(e) : a(e)
}

function re() {
  w = !0;
  var e = S.prototype,
    t = Set.prototype;
  for (let n of te) e[n] = function(...e) {
    return p(i(E, this)), t[n].apply(this, e)
  };
  for (let n of ne) e[n] = function(...e) {
    p(i(E, this));
    var r = t[n].apply(this, e);
    return new S(r)
  }
}

function M(e) {
  return M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }, M(e)
}

function ie(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = M(e)) !== null;);
  return e
}

function N() {
  return N = typeof Reflect < `u` && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
    var r = ie(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
    }
  }, N.apply(null, arguments)
}

function P(e, t, n, r) {
  var i = N(M(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function` ? function(e) {
    return i.apply(n, e)
  } : i
}
var F, I, L = new WeakMap,
  R = new WeakMap,
  z = new WeakMap,
  B = new WeakMap,
  V = new WeakSet;
I = Symbol.iterator;
var H = class extends Map {
  constructor(e) {
    if (super(), c(this, V), t(this, L, new Map), t(this, R, o(0)), t(this, z, o(0)), t(this, B, u || -1), e) {
      for (var [n, r] of e) super.set(n, r);
      i(z, this).v = super.size
    }
  }
  has(e) {
    var t = i(L, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = m(V, this, U).call(this, 0), t.set(e, n);
      else return p(i(R, this)), !1
    }
    return p(n), !0
  }
  forEach(e, t) {
    m(V, this, W).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = i(L, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = m(V, this, U).call(this, 0), t.set(e, n);
      else {
        p(i(R, this));
        return
      }
    }
    return p(n), super.get(e)
  }
  set(t, n) {
    var r = i(L, this),
      a = r.get(t),
      o = super.get(t),
      s = super.set(t, n),
      c = i(R, this);
    if (a === void 0) a = m(V, this, U).call(this, 0), r.set(t, a), d(i(z, this), super.size), e(c);
    else if (o !== n) {
      var l;
      e(a);
      var u = c.reactions === null ? null : new Set(c.reactions);
      (u === null || !((l = a.reactions) != null && l.every(e => u.has(e)))) && e(c)
    }
    return s
  }
  delete(t) {
    var n = i(L, this),
      r = n.get(t),
      a = super.delete(t);
    return r !== void 0 && (n.delete(t), d(r, -1)), a && (d(i(z, this), super.size), e(i(R, this))), a
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = i(L, this);
      d(i(z, this), 0);
      for (var n of t.values()) d(n, -1);
      e(i(R, this)), t.clear()
    }
  }
  keys() {
    return p(i(R, this)), super.keys()
  }
  values() {
    return m(V, this, W).call(this), super.values()
  }
  entries() {
    return m(V, this, W).call(this), super.entries()
  } [I]() {
    return this.entries()
  }
  get size() {
    return p(i(z, this)), super.size
  }
};
F = H;

function U(e) {
  return u === i(B, this) ? o(e) : a(e)
}

function W() {
  p(i(R, this));
  var e = i(L, this);
  if (i(z, this).v !== e.size) {
    for (var t of P(F.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = m(V, this, U).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of i(L, this)) p(n)
}
var G, ae = Symbol(`replace`),
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakSet;
G = Symbol.iterator;
var oe = class extends URLSearchParams {
  constructor(...e) {
    super(...e), c(this, Y), t(this, K, o(0)), t(this, q, ce()), t(this, J, !1)
  } [ae](t) {
    if (!i(J, this)) {
      s(J, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [e, n] of t) super.append(e, n);
      e(i(K, this)), s(J, this, !1)
    }
  }
  append(t, n) {
    super.append(t, n), m(Y, this, X).call(this), e(i(K, this))
  }
  delete(t, n) {
    var r = super.has(t, n);
    super.delete(t, n), r && (m(Y, this, X).call(this), e(i(K, this)))
  }
  get(e) {
    return p(i(K, this)), super.get(e)
  }
  getAll(e) {
    return p(i(K, this)), super.getAll(e)
  }
  has(e, t) {
    return p(i(K, this)), super.has(e, t)
  }
  keys() {
    return p(i(K, this)), super.keys()
  }
  set(t, n) {
    var r = super.getAll(t);
    super.set(t, n);
    var a = super.getAll(t);
    (r.length !== a.length || r.some((e, t) => e !== a[t])) && (m(Y, this, X).call(this), e(i(K, this)))
  }
  sort() {
    super.sort(), m(Y, this, X).call(this), e(i(K, this))
  }
  toString() {
    return p(i(K, this)), super.toString()
  }
  values() {
    return p(i(K, this)), super.values()
  }
  entries() {
    return p(i(K, this)), super.entries()
  } [G]() {
    return this.entries()
  }
  get size() {
    return p(i(K, this)), super.size
  }
};

function X() {
  if (!i(q, this) || i(J, this)) return;
  s(J, this, !0);
  let e = this.toString();
  i(q, this).search = e && `?${e}`, s(J, this, !1)
}
var se = null;

function ce() {
  return se
}
var Z = new WeakMap,
  Q = new WeakMap,
  $ = class {
    constructor(e, r) {
      t(this, Z, void 0), t(this, Q, void 0), s(Z, this, e), s(Q, this, n(r))
    }
    get current() {
      return i(Q, this).call(this), i(Z, this).call(this)
    }
  },
  le = /\(.+\)/,
  ue = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  de = class extends $ {
    constructor(e, t) {
      let n = le.test(e) || e.split(/[\s,]+/).some(e => ue.has(e.trim())) ? e : `(${e})`,
        r = window.matchMedia(n);
      super(() => r.matches, e => ee(r, `change`, e))
    }
  };
export {
  A as a, H as i, $ as n, oe as r, de as t
};