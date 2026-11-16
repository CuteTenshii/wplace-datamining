import {
  Bt as e,
  Ft as t,
  Gt as n,
  Ht as r,
  It as i,
  Lt as a,
  Pt as o,
  Ut as s,
  Vt as c,
  Wt as l,
  ft as u,
  lt as d,
  mt as f,
  pt as p,
  vt as m
} from "./DXDHrD2o.js";
import {
  t as h
} from "./BrohplP5.js";
var g, _ = !1,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakSet;
g = class extends Date {
  constructor(...e) {
    super(...e), n(this, x), l(this, v, a(super.getTime())), l(this, y, new Map), l(this, b, u), _ || s(x, this, S).call(this)
  }
};

function S() {
  _ = !0;
  var n = g.prototype,
    r = Date.prototype,
    i = Object.getOwnPropertyNames(r);
  for (let a of i)(a.startsWith(`get`) || a.startsWith(`to`) || a === `valueOf`) && (n[a] = function(...t) {
    if (t.length > 0) return p(c(v, this)), r[a].apply(this, t);
    var n = c(y, this).get(a);
    if (n === void 0) {
      let i = u;
      f(c(b, this)), n = e(() => (p(c(v, this)), r[a].apply(this, t))), c(y, this).set(a, n), f(i)
    }
    return p(n)
  }), a.startsWith(`set`) && (n[a] = function(...e) {
    var n = r[a].apply(this, e);
    return t(c(v, this), r.getTime.call(this)), n
  })
}
var C, w, T = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
  E = [`difference`, `intersection`, `symmetricDifference`, `union`],
  D = !1,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakMap,
  j = new WeakMap,
  M = new WeakSet;
w = Symbol.iterator;
var N = class extends Set {
  constructor(e) {
    if (super(), n(this, M), l(this, O, new Map), l(this, k, a(0)), l(this, A, a(0)), l(this, j, m || -1), e) {
      for (var t of e) super.add(t);
      c(A, this).v = super.size
    }
    D || s(M, this, te).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = c(O, this),
      r = n.get(e);
    if (r === void 0) {
      if (!t) return p(c(k, this)), !1;
      r = s(M, this, ee).call(this, !0), n.set(e, r)
    }
    return p(r), t
  }
  add(e) {
    return super.has(e) || (super.add(e), t(c(A, this), super.size), o(c(k, this))), this
  }
  delete(e) {
    var n = super.delete(e),
      r = c(O, this),
      i = r.get(e);
    return i !== void 0 && (r.delete(e), t(i, !1)), n && (t(c(A, this), super.size), o(c(k, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = c(O, this);
      for (var n of e.values()) t(n, !1);
      e.clear(), t(c(A, this), 0), o(c(k, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return p(c(k, this)), super.values()
  }
  entries() {
    return p(c(k, this)), super.entries()
  } [w]() {
    return this.keys()
  }
  get size() {
    return p(c(A, this))
  }
};
C = N;

function ee(e) {
  return m === c(j, this) ? a(e) : i(e)
}

function te() {
  D = !0;
  var e = C.prototype,
    t = Set.prototype;
  for (let n of T) e[n] = function(...e) {
    return p(c(k, this)), t[n].apply(this, e)
  };
  for (let n of E) e[n] = function(...e) {
    p(c(k, this));
    var r = t[n].apply(this, e);
    return new C(r)
  }
}

function P(e) {
  return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }, P(e)
}

function F(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = P(e)) !== null;);
  return e
}

function I() {
  return I = typeof Reflect < `u` && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
    var r = F(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
    }
  }, I.apply(null, arguments)
}

function ne(e, t, n, r) {
  var i = I(P(1 & r ? e.prototype : e), t, n);
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
    if (super(), n(this, U), l(this, z, new Map), l(this, B, a(0)), l(this, V, a(0)), l(this, H, m || -1), e) {
      for (var [t, r] of e) super.set(t, r);
      c(V, this).v = super.size
    }
  }
  has(e) {
    var t = c(z, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = s(U, this, G).call(this, 0), t.set(e, n);
      else return p(c(B, this)), !1
    }
    return p(n), !0
  }
  forEach(e, t) {
    s(U, this, K).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = c(z, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = s(U, this, G).call(this, 0), t.set(e, n);
      else {
        p(c(B, this));
        return
      }
    }
    return p(n), super.get(e)
  }
  set(e, n) {
    var r = c(z, this),
      i = r.get(e),
      a = super.get(e),
      l = super.set(e, n),
      u = c(B, this);
    if (i === void 0) i = s(U, this, G).call(this, 0), r.set(e, i), t(c(V, this), super.size), o(u);
    else if (a !== n) {
      var d;
      o(i);
      var f = u.reactions === null ? null : new Set(u.reactions);
      (f === null || !((d = i.reactions) != null && d.every(e => f.has(e)))) && o(u)
    }
    return l
  }
  delete(e) {
    var n = c(z, this),
      r = n.get(e),
      i = super.delete(e);
    return r !== void 0 && (n.delete(e), t(r, -1)), i && (t(c(V, this), super.size), o(c(B, this))), i
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = c(z, this);
      t(c(V, this), 0);
      for (var n of e.values()) t(n, -1);
      o(c(B, this)), e.clear()
    }
  }
  keys() {
    return p(c(B, this)), super.keys()
  }
  values() {
    return s(U, this, K).call(this), super.values()
  }
  entries() {
    return s(U, this, K).call(this), super.entries()
  } [R]() {
    return this.entries()
  }
  get size() {
    return p(c(V, this)), super.size
  }
};
L = W;

function G(e) {
  return m === c(H, this) ? a(e) : i(e)
}

function K() {
  p(c(B, this));
  var e = c(z, this);
  if (c(V, this).v !== e.size) {
    for (var t of ne(L.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = s(U, this, G).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of c(z, this)) p(n)
}
var q, J = Symbol(`replace`),
  Y = new WeakMap,
  X = new WeakMap,
  Z = new WeakMap,
  Q = new WeakSet;
q = Symbol.iterator;
var re = class extends URLSearchParams {
  constructor(...e) {
    super(...e), n(this, Q), l(this, Y, a(0)), l(this, X, ae()), l(this, Z, !1)
  } [J](e) {
    if (!c(Z, this)) {
      r(Z, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [t, n] of e) super.append(t, n);
      o(c(Y, this)), r(Z, this, !1)
    }
  }
  append(e, t) {
    super.append(e, t), s(Q, this, $).call(this), o(c(Y, this))
  }
  delete(e, t) {
    var n = super.has(e, t);
    super.delete(e, t), n && (s(Q, this, $).call(this), o(c(Y, this)))
  }
  get(e) {
    return p(c(Y, this)), super.get(e)
  }
  getAll(e) {
    return p(c(Y, this)), super.getAll(e)
  }
  has(e, t) {
    return p(c(Y, this)), super.has(e, t)
  }
  keys() {
    return p(c(Y, this)), super.keys()
  }
  set(e, t) {
    var n = super.getAll(e);
    super.set(e, t);
    var r = super.getAll(e);
    (n.length !== r.length || n.some((e, t) => e !== r[t])) && (s(Q, this, $).call(this), o(c(Y, this)))
  }
  sort() {
    super.sort(), s(Q, this, $).call(this), o(c(Y, this))
  }
  toString() {
    return p(c(Y, this)), super.toString()
  }
  values() {
    return p(c(Y, this)), super.values()
  }
  entries() {
    return p(c(Y, this)), super.entries()
  } [q]() {
    return this.entries()
  }
  get size() {
    return p(c(Y, this)), super.size
  }
};

function $() {
  if (!c(X, this) || c(Z, this)) return;
  r(Z, this, !0);
  let e = this.toString();
  c(X, this).search = e && `?${e}`, r(Z, this, !1)
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
      super(() => r.matches, e => d(r, `change`, e))
    }
  };
export {
  N as i, re as n, W as r, ce as t
};