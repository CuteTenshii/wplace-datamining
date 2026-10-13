import {
  At as e,
  Bt as t,
  Ft as n,
  It as r,
  Lt as i,
  Mt as a,
  Ot as o,
  Rt as s,
  an as c,
  at as l,
  ct as u,
  jt as d,
  kt as f,
  lt as p,
  mt as m,
  pt as h,
  ut as g,
  zt as _
} from "./R3px7NU1.js";
import {
  t as ee
} from "./CUtBdivQ.js";
var v, y = !1,
  b = new WeakMap,
  x = new WeakMap,
  te = new WeakMap,
  ne = new WeakSet;
v = class extends Date {
  constructor(...e) {
    super(...e), t(this, ne), _(this, b, a(super.getTime())), _(this, x, new Map), _(this, te, u), y || s(ne, this, re).call(this)
  }
};

function re() {
  y = !0;
  var t = v.prototype,
    i = Date.prototype,
    a = Object.getOwnPropertyNames(i);
  for (let o of a)(o.startsWith(`get`) || o.startsWith(`to`) || o === `valueOf`) && (t[o] = function(...e) {
    if (e.length > 0) return p(r(b, this)), i[o].apply(this, e);
    var t = r(x, this).get(o);
    if (t === void 0) {
      let a = u;
      g(r(te, this)), t = n(() => (p(r(b, this)), i[o].apply(this, e))), r(x, this).set(o, t), g(a)
    }
    return p(t)
  }), o.startsWith(`set`) && (t[o] = function(...t) {
    var n = i[o].apply(this, t);
    return e(r(b, this), i.getTime.call(this)), n
  })
}
var S, C, ie = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`],
  ae = [`difference`, `intersection`, `symmetricDifference`, `union`],
  w = !1,
  T = new WeakMap,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakSet;
C = Symbol.iterator;
var A = class extends Set {
  constructor(e) {
    if (super(), t(this, k), _(this, T, new Map), _(this, E, a(0)), _(this, D, a(0)), _(this, O, m || -1), e) {
      for (var n of e) super.add(n);
      r(D, this).v = super.size
    }
    w || s(k, this, se).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = r(T, this),
      i = n.get(e);
    if (i === void 0) {
      if (!t) return p(r(E, this)), !1;
      i = s(k, this, oe).call(this, !0), n.set(e, i)
    }
    return p(i), t
  }
  add(t) {
    return super.has(t) || (super.add(t), e(r(D, this), super.size), f(r(E, this))), this
  }
  delete(t) {
    var n = super.delete(t),
      i = r(T, this),
      a = i.get(t);
    return a !== void 0 && (i.delete(t), e(a, !1)), n && (e(r(D, this), super.size), f(r(E, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(T, this);
      for (var n of t.values()) e(n, !1);
      t.clear(), e(r(D, this), 0), f(r(E, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return p(r(E, this)), super.values()
  }
  entries() {
    return p(r(E, this)), super.entries()
  } [C]() {
    return this.keys()
  }
  get size() {
    return p(r(D, this))
  }
};
S = A;

function oe(e) {
  return m === r(O, this) ? a(e) : d(e)
}

function se() {
  w = !0;
  var e = S.prototype,
    t = Set.prototype;
  for (let n of ie) e[n] = function(...e) {
    return p(r(E, this)), t[n].apply(this, e)
  };
  for (let n of ae) e[n] = function(...e) {
    p(r(E, this));
    var i = t[n].apply(this, e);
    return new S(i)
  }
}

function j(e) {
  return j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }, j(e)
}

function ce(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = j(e)) !== null;);
  return e
}

function M() {
  return M = typeof Reflect < `u` && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
    var r = ce(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
    }
  }, M.apply(null, arguments)
}

function le(e, t, n, r) {
  var i = M(j(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function` ? function(e) {
    return i.apply(n, e)
  } : i
}
var N, P, F = new WeakMap,
  I = new WeakMap,
  L = new WeakMap,
  R = new WeakMap,
  z = new WeakSet;
P = Symbol.iterator;
var B = class extends Map {
  constructor(e) {
    if (super(), t(this, z), _(this, F, new Map), _(this, I, a(0)), _(this, L, a(0)), _(this, R, m || -1), e) {
      for (var [n, i] of e) super.set(n, i);
      r(L, this).v = super.size
    }
  }
  has(e) {
    var t = r(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = s(z, this, V).call(this, 0), t.set(e, n);
      else return p(r(I, this)), !1
    }
    return p(n), !0
  }
  forEach(e, t) {
    s(z, this, H).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = r(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = s(z, this, V).call(this, 0), t.set(e, n);
      else {
        p(r(I, this));
        return
      }
    }
    return p(n), super.get(e)
  }
  set(t, n) {
    var i = r(F, this),
      a = i.get(t),
      o = super.get(t),
      c = super.set(t, n),
      l = r(I, this);
    if (a === void 0) a = s(z, this, V).call(this, 0), i.set(t, a), e(r(L, this), super.size), f(l);
    else if (o !== n) {
      var u;
      f(a);
      var d = l.reactions === null ? null : new Set(l.reactions);
      (d === null || !((u = a.reactions) != null && u.every(e => d.has(e)))) && f(l)
    }
    return c
  }
  delete(t) {
    var n = r(F, this),
      i = n.get(t),
      a = super.delete(t);
    return i !== void 0 && (n.delete(t), e(i, -1)), a && (e(r(L, this), super.size), f(r(I, this))), a
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(F, this);
      e(r(L, this), 0);
      for (var n of t.values()) e(n, -1);
      f(r(I, this)), t.clear()
    }
  }
  keys() {
    return p(r(I, this)), super.keys()
  }
  values() {
    return s(z, this, H).call(this), super.values()
  }
  entries() {
    return s(z, this, H).call(this), super.entries()
  } [P]() {
    return this.entries()
  }
  get size() {
    return p(r(L, this)), super.size
  }
};
N = B;

function V(e) {
  return m === r(R, this) ? a(e) : d(e)
}

function H() {
  p(r(I, this));
  var e = r(F, this);
  if (r(L, this).v !== e.size) {
    for (var t of le(N.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = s(z, this, V).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of r(F, this)) p(n)
}
var U, ue = Symbol(`replace`),
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakSet;
U = Symbol.iterator;
var de = class extends URLSearchParams {
  constructor(...e) {
    super(...e), t(this, q), _(this, W, a(0)), _(this, G, pe()), _(this, K, !1)
  } [ue](e) {
    if (!r(K, this)) {
      i(K, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [t, n] of e) super.append(t, n);
      f(r(W, this)), i(K, this, !1)
    }
  }
  append(e, t) {
    super.append(e, t), s(q, this, J).call(this), f(r(W, this))
  }
  delete(e, t) {
    var n = super.has(e, t);
    super.delete(e, t), n && (s(q, this, J).call(this), f(r(W, this)))
  }
  get(e) {
    return p(r(W, this)), super.get(e)
  }
  getAll(e) {
    return p(r(W, this)), super.getAll(e)
  }
  has(e, t) {
    return p(r(W, this)), super.has(e, t)
  }
  keys() {
    return p(r(W, this)), super.keys()
  }
  set(e, t) {
    var n = super.getAll(e);
    super.set(e, t);
    var i = super.getAll(e);
    (n.length !== i.length || n.some((e, t) => e !== i[t])) && (s(q, this, J).call(this), f(r(W, this)))
  }
  sort() {
    super.sort(), s(q, this, J).call(this), f(r(W, this))
  }
  toString() {
    return p(r(W, this)), super.toString()
  }
  values() {
    return p(r(W, this)), super.values()
  }
  entries() {
    return p(r(W, this)), super.entries()
  } [U]() {
    return this.entries()
  }
  get size() {
    return p(r(W, this)), super.size
  }
};

function J() {
  if (!r(G, this) || r(K, this)) return;
  i(K, this, !0);
  let e = this.toString();
  r(G, this).search = e && `?${e}`, i(K, this, !1)
}
var fe = null;

function pe() {
  return fe
}
var me = /\(.+\)/,
  he = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  ge = class extends ee {
    constructor(e, t) {
      let n = me.test(e) || e.split(/[\s,]+/).some(e => he.has(e.trim())) ? e : `(${e})`,
        r = window.matchMedia(n);
      super(() => r.matches, e => l(r, `change`, e))
    }
  };

function _e(...e) {
  return e.filter(Boolean).join(` `)
}
var ve = typeof document < `u`,
  ye = 0,
  Y = new WeakMap,
  X = new WeakMap,
  Z = new WeakMap,
  be = class {
    constructor() {
      _(this, Y, a(o([]))), _(this, X, a(o([]))), _(this, Z, e => {
        let t = this.toasts.findIndex(t => t.id === e);
        return t === -1 ? null : t
      }), c(this, `addToast`, e => {
        ve && this.toasts.unshift(e)
      }), c(this, `updateToast`, ({
        id: e,
        data: t,
        type: n,
        message: r
      }) => {
        let i = this.toasts.findIndex(t => t.id === e),
          a = this.toasts[i];
        this.toasts[i] = {
          ...a,
          ...t,
          id: e,
          title: r,
          type: n,
          updated: !0
        }
      }), c(this, `create`, e => {
        var t;
        let {
          message: n,
          ...r
        } = e, i = typeof(e == null ? void 0 : e.id) == `number` || e.id && ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : ye++, a = e.dismissable === void 0 || e.dismissable, o = e.type === void 0 ? `default` : e.type;
        return h(() => {
          this.toasts.find(e => e.id === i) ? this.updateToast({
            id: i,
            data: e,
            type: o,
            message: n,
            dismissable: a
          }) : this.addToast({
            ...r,
            id: i,
            title: n,
            dismissable: a,
            type: o
          })
        }), i
      }), c(this, `dismiss`, e => (h(() => {
        if (e === void 0) {
          this.toasts = this.toasts.map(e => ({
            ...e,
            dismiss: !0
          }));
          return
        }
        let t = this.toasts.findIndex(t => t.id === e);
        this.toasts[t] && (this.toasts[t] = {
          ...this.toasts[t],
          dismiss: !0
        })
      }), e)), c(this, `remove`, e => {
        if (e === void 0) {
          this.toasts = [];
          return
        }
        let t = r(Z, this).call(this, e);
        if (t !== null) return this.toasts.splice(t, 1), e
      }), c(this, `message`, (e, t) => this.create({
        ...t,
        type: `default`,
        message: e
      })), c(this, `error`, (e, t) => this.create({
        ...t,
        type: `error`,
        message: e
      })), c(this, `success`, (e, t) => this.create({
        ...t,
        type: `success`,
        message: e
      })), c(this, `info`, (e, t) => this.create({
        ...t,
        type: `info`,
        message: e
      })), c(this, `warning`, (e, t) => this.create({
        ...t,
        type: `warning`,
        message: e
      })), c(this, `loading`, (e, t) => this.create({
        ...t,
        type: `loading`,
        message: e
      })), c(this, `promise`, (e, t) => {
        if (!t) return;
        let n;
        t.loading !== void 0 && (n = this.create({
          ...t,
          promise: e,
          type: `loading`,
          message: typeof t.loading == `string` ? t.loading : t.loading()
        }));
        let r = e instanceof Promise ? e : e(),
          i = n !== void 0;
        return r.then(e => {
          if (typeof e == `object` && e && `ok` in e && typeof e.ok == `boolean` && !e.ok) {
            i = !1;
            let t = xe(e);
            this.create({
              id: n,
              type: `error`,
              message: t
            })
          } else if (t.success !== void 0) {
            i = !1;
            let r = typeof t.success == `function` ? t.success(e) : t.success;
            this.create({
              id: n,
              type: `success`,
              message: r
            })
          }
        }).catch(e => {
          if (t.error !== void 0) {
            i = !1;
            let r = typeof t.error == `function` ? t.error(e) : t.error;
            this.create({
              id: n,
              type: `error`,
              message: r
            })
          }
        }).finally(() => {
          var e;
          i && (this.dismiss(n), n = void 0), (e = t.finally) == null || e.call(t)
        }), n
      }), c(this, `custom`, (e, t) => {
        let n = (t == null ? void 0 : t.id) || ye++;
        return this.create({
          component: e,
          id: n,
          ...t
        }), n
      }), c(this, `removeHeight`, e => {
        this.heights = this.heights.filter(t => t.toastId !== e)
      }), c(this, `setHeight`, e => {
        let t = r(Z, this).call(this, e.toastId);
        if (t === null) {
          this.heights.push(e);
          return
        }
        this.heights[t] = e
      }), c(this, `reset`, () => {
        this.toasts = [], this.heights = []
      })
    }
    get toasts() {
      return p(r(Y, this))
    }
    set toasts(t) {
      e(r(Y, this), t, !0)
    }
    get heights() {
      return p(r(X, this))
    }
    set heights(t) {
      e(r(X, this), t, !0)
    }
  };

function xe(e) {
  return e && typeof e == `object` && `status` in e ? `HTTP error! Status: ${e.status}` : `Error! ${e}`
}
var Q = new be;

function Se(e, t) {
  return Q.create({
    message: e,
    ...t
  })
}
var $ = new WeakMap,
  Ce = class {
    constructor() {
      _(this, $, n(() => Q.toasts.filter(e => !e.dismiss)))
    }
    get toasts() {
      return p(r($, this))
    }
  },
  we = Object.assign(Se, {
    success: Q.success,
    info: Q.info,
    warning: Q.warning,
    error: Q.error,
    custom: Q.custom,
    message: Q.message,
    promise: Q.promise,
    dismiss: Q.dismiss,
    loading: Q.loading,
    getActiveToasts: () => Q.toasts.filter(e => !e.dismiss)
  });
export {
  ge as a, A as c, _e as i, we as n, de as o, Q as r, B as s, Ce as t
};