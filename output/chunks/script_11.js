import {
  At as e,
  Bt as t,
  Ft as n,
  It as r,
  Lt as i,
  Ot as a,
  Pt as o,
  Rt as s,
  ct as c,
  it as l,
  jt as u,
  kt as d,
  lt as f,
  pt as p,
  st as m,
  zt as h
} from "./D6uuD926.js";
var g, _ = !1,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakSet;
g = class extends Date {
  constructor(...e) {
    super(...e), h(this, x), s(this, v, u(super.getTime())), s(this, y, new Map), s(this, b, m), _ || i(x, this, S).call(this)
  }
};

function S() {
  _ = !0;
  var e = g.prototype,
    t = Date.prototype,
    r = Object.getOwnPropertyNames(t);
  for (let i of r)(i.startsWith(`get`) || i.startsWith(`to`) || i === `valueOf`) && (e[i] = function(...e) {
    if (e.length > 0) return c(n(v, this)), t[i].apply(this, e);
    var r = n(y, this).get(i);
    if (r === void 0) {
      let a = m;
      f(n(b, this)), r = o(() => (c(n(v, this)), t[i].apply(this, e))), n(y, this).set(i, r), f(a)
    }
    return c(r)
  }), i.startsWith(`set`) && (e[i] = function(...e) {
    var r = t[i].apply(this, e);
    return d(n(v, this), t.getTime.call(this)), r
  })
}
var C, w, ee = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
  te = [`difference`, `intersection`, `symmetricDifference`, `union`],
  T = !1,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakSet;
w = Symbol.iterator, C = class extends Set {
  constructor(e) {
    if (super(), h(this, A), s(this, E, new Map), s(this, D, u(0)), s(this, O, u(0)), s(this, k, p || -1), e) {
      for (var t of e) super.add(t);
      n(O, this).v = super.size
    }
    T || i(A, this, ne).call(this)
  }
  has(e) {
    var t = super.has(e),
      r = n(E, this),
      a = r.get(e);
    if (a === void 0) {
      if (!t) return c(n(D, this)), !1;
      a = i(A, this, j).call(this, !0), r.set(e, a)
    }
    return c(a), t
  }
  add(e) {
    return super.has(e) || (super.add(e), d(n(O, this), super.size), a(n(D, this))), this
  }
  delete(e) {
    var t = super.delete(e),
      r = n(E, this),
      i = r.get(e);
    return i !== void 0 && (r.delete(e), d(i, !1)), t && (d(n(O, this), super.size), a(n(D, this))), t
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = n(E, this);
      for (var t of e.values()) d(t, !1);
      e.clear(), d(n(O, this), 0), a(n(D, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return c(n(D, this)), super.values()
  }
  entries() {
    return c(n(D, this)), super.entries()
  } [w]() {
    return this.keys()
  }
  get size() {
    return c(n(O, this))
  }
};

function j(t) {
  return p === n(k, this) ? u(t) : e(t)
}

function ne() {
  T = !0;
  var e = C.prototype,
    t = Set.prototype;
  for (let r of ee) e[r] = function(...e) {
    return c(n(D, this)), t[r].apply(this, e)
  };
  for (let r of te) e[r] = function(...e) {
    c(n(D, this));
    var i = t[r].apply(this, e);
    return new C(i)
  }
}

function M(e) {
  return M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }, M(e)
}

function N(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = M(e)) !== null;);
  return e
}

function P() {
  return P = typeof Reflect < `u` && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
    var r = N(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
    }
  }, P.apply(null, arguments)
}

function re(e, t, n, r) {
  var i = P(M(1 & r ? e.prototype : e), t, n);
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
    if (super(), h(this, V), s(this, L, new Map), s(this, R, u(0)), s(this, z, u(0)), s(this, B, p || -1), e) {
      for (var [t, r] of e) super.set(t, r);
      n(z, this).v = super.size
    }
  }
  has(e) {
    var t = n(L, this),
      r = t.get(e);
    if (r === void 0) {
      if (super.has(e)) r = i(V, this, U).call(this, 0), t.set(e, r);
      else return c(n(R, this)), !1
    }
    return c(r), !0
  }
  forEach(e, t) {
    i(V, this, W).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = n(L, this),
      r = t.get(e);
    if (r === void 0) {
      if (super.has(e)) r = i(V, this, U).call(this, 0), t.set(e, r);
      else {
        c(n(R, this));
        return
      }
    }
    return c(r), super.get(e)
  }
  set(e, t) {
    var r = n(L, this),
      o = r.get(e),
      s = super.get(e),
      c = super.set(e, t),
      l = n(R, this);
    if (o === void 0) o = i(V, this, U).call(this, 0), r.set(e, o), d(n(z, this), super.size), a(l);
    else if (s !== t) {
      var u;
      a(o);
      var f = l.reactions === null ? null : new Set(l.reactions);
      (f === null || !((u = o.reactions) != null && u.every(e => f.has(e)))) && a(l)
    }
    return c
  }
  delete(e) {
    var t = n(L, this),
      r = t.get(e),
      i = super.delete(e);
    return r !== void 0 && (t.delete(e), d(r, -1)), i && (d(n(z, this), super.size), a(n(R, this))), i
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = n(L, this);
      d(n(z, this), 0);
      for (var t of e.values()) d(t, -1);
      a(n(R, this)), e.clear()
    }
  }
  keys() {
    return c(n(R, this)), super.keys()
  }
  values() {
    return i(V, this, W).call(this), super.values()
  }
  entries() {
    return i(V, this, W).call(this), super.entries()
  } [I]() {
    return this.entries()
  }
  get size() {
    return c(n(z, this)), super.size
  }
};
F = H;

function U(t) {
  return p === n(B, this) ? u(t) : e(t)
}

function W() {
  c(n(R, this));
  var e = n(L, this);
  if (n(z, this).v !== e.size) {
    for (var t of re(F.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var r = i(V, this, U).call(this, 0);
        e.set(t, r)
      }
  }
  for ([, r] of n(L, this)) c(r)
}
var G, K = Symbol(`replace`),
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakMap,
  X = new WeakSet;
G = Symbol.iterator;
var ie = class extends URLSearchParams {
  constructor(...e) {
    super(...e), h(this, X), s(this, q, u(0)), s(this, J, oe()), s(this, Y, !1)
  } [K](e) {
    if (!n(Y, this)) {
      r(Y, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [t, n] of e) super.append(t, n);
      a(n(q, this)), r(Y, this, !1)
    }
  }
  append(e, t) {
    super.append(e, t), i(X, this, Z).call(this), a(n(q, this))
  }
  delete(e, t) {
    var r = super.has(e, t);
    super.delete(e, t), r && (i(X, this, Z).call(this), a(n(q, this)))
  }
  get(e) {
    return c(n(q, this)), super.get(e)
  }
  getAll(e) {
    return c(n(q, this)), super.getAll(e)
  }
  has(e, t) {
    return c(n(q, this)), super.has(e, t)
  }
  keys() {
    return c(n(q, this)), super.keys()
  }
  set(e, t) {
    var r = super.getAll(e);
    super.set(e, t);
    var o = super.getAll(e);
    (r.length !== o.length || r.some((e, t) => e !== o[t])) && (i(X, this, Z).call(this), a(n(q, this)))
  }
  sort() {
    super.sort(), i(X, this, Z).call(this), a(n(q, this))
  }
  toString() {
    return c(n(q, this)), super.toString()
  }
  values() {
    return c(n(q, this)), super.values()
  }
  entries() {
    return c(n(q, this)), super.entries()
  } [G]() {
    return this.entries()
  }
  get size() {
    return c(n(q, this)), super.size
  }
};

function Z() {
  if (!n(J, this) || n(Y, this)) return;
  r(Y, this, !0);
  let e = this.toString();
  n(J, this).search = e && `?${e}`, r(Y, this, !1)
}
var ae = null;

function oe() {
  return ae
}
var Q = new WeakMap,
  $ = new WeakMap,
  se = class {
    constructor(e, n) {
      s(this, Q, void 0), s(this, $, void 0), r(Q, this, e), r($, this, t(n))
    }
    get current() {
      return n($, this).call(this), n(Q, this).call(this)
    }
  },
  ce = /\(.+\)/,
  le = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  ue = class extends se {
    constructor(e, t) {
      let n = ce.test(e) || e.split(/[\s,]+/).some(e => le.has(e.trim())) ? e : `(${e})`,
        r = window.matchMedia(n);
      super(() => r.matches, e => l(r, `change`, e))
    }
  };
export {
  ie as n, H as r, ue as t
};