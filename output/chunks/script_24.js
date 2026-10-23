import {
  At as e,
  Bt as t,
  It as n,
  Lt as r,
  Mt as i,
  Nt as a,
  Rt as o,
  Vt as s,
  at as c,
  ct as l,
  jt as u,
  kt as d,
  lt as f,
  mt as p,
  on as m,
  pt as h,
  ut as g,
  zt as _
} from "./DTpxYwnW.js";
import {
  t as ee
} from "./DMvd0cI6.js";
var v, y = !1,
  b = new WeakMap,
  x = new WeakMap,
  te = new WeakMap,
  ne = new WeakSet;
v = class extends Date {
  constructor(...e) {
    super(...e), s(this, ne), t(this, b, a(super.getTime())), t(this, x, new Map), t(this, te, l), y || _(ne, this, re).call(this)
  }
};

function re() {
  y = !0;
  var e = v.prototype,
    t = Date.prototype,
    i = Object.getOwnPropertyNames(t);
  for (let a of i)(a.startsWith(`get`) || a.startsWith(`to`) || a === `valueOf`) && (e[a] = function(...e) {
    if (e.length > 0) return f(r(b, this)), t[a].apply(this, e);
    var i = r(x, this).get(a);
    if (i === void 0) {
      let o = l;
      g(r(te, this)), i = n(() => (f(r(b, this)), t[a].apply(this, e))), r(x, this).set(a, i), g(o)
    }
    return f(i)
  }), a.startsWith(`set`) && (e[a] = function(...e) {
    var n = t[a].apply(this, e);
    return u(r(b, this), t.getTime.call(this)), n
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
    if (super(), s(this, k), t(this, T, new Map), t(this, E, a(0)), t(this, D, a(0)), t(this, O, p || -1), e) {
      for (var n of e) super.add(n);
      r(D, this).v = super.size
    }
    w || _(k, this, se).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = r(T, this),
      i = n.get(e);
    if (i === void 0) {
      if (!t) return f(r(E, this)), !1;
      i = _(k, this, oe).call(this, !0), n.set(e, i)
    }
    return f(i), t
  }
  add(t) {
    return super.has(t) || (super.add(t), u(r(D, this), super.size), e(r(E, this))), this
  }
  delete(t) {
    var n = super.delete(t),
      i = r(T, this),
      a = i.get(t);
    return a !== void 0 && (i.delete(t), u(a, !1)), n && (u(r(D, this), super.size), e(r(E, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(T, this);
      for (var n of t.values()) u(n, !1);
      t.clear(), u(r(D, this), 0), e(r(E, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return f(r(E, this)), super.values()
  }
  entries() {
    return f(r(E, this)), super.entries()
  } [C]() {
    return this.keys()
  }
  get size() {
    return f(r(D, this))
  }
};
S = A;

function oe(e) {
  return p === r(O, this) ? a(e) : i(e)
}

function se() {
  w = !0;
  var e = S.prototype,
    t = Set.prototype;
  for (let n of ie) e[n] = function(...e) {
    return f(r(E, this)), t[n].apply(this, e)
  };
  for (let n of ae) e[n] = function(...e) {
    f(r(E, this));
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
    if (super(), s(this, z), t(this, F, new Map), t(this, I, a(0)), t(this, L, a(0)), t(this, R, p || -1), e) {
      for (var [n, i] of e) super.set(n, i);
      r(L, this).v = super.size
    }
  }
  has(e) {
    var t = r(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = _(z, this, V).call(this, 0), t.set(e, n);
      else return f(r(I, this)), !1
    }
    return f(n), !0
  }
  forEach(e, t) {
    _(z, this, H).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = r(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = _(z, this, V).call(this, 0), t.set(e, n);
      else {
        f(r(I, this));
        return
      }
    }
    return f(n), super.get(e)
  }
  set(t, n) {
    var i = r(F, this),
      a = i.get(t),
      o = super.get(t),
      s = super.set(t, n),
      c = r(I, this);
    if (a === void 0) a = _(z, this, V).call(this, 0), i.set(t, a), u(r(L, this), super.size), e(c);
    else if (o !== n) {
      var l;
      e(a);
      var d = c.reactions === null ? null : new Set(c.reactions);
      (d === null || !((l = a.reactions) != null && l.every(e => d.has(e)))) && e(c)
    }
    return s
  }
  delete(t) {
    var n = r(F, this),
      i = n.get(t),
      a = super.delete(t);
    return i !== void 0 && (n.delete(t), u(i, -1)), a && (u(r(L, this), super.size), e(r(I, this))), a
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = r(F, this);
      u(r(L, this), 0);
      for (var n of t.values()) u(n, -1);
      e(r(I, this)), t.clear()
    }
  }
  keys() {
    return f(r(I, this)), super.keys()
  }
  values() {
    return _(z, this, H).call(this), super.values()
  }
  entries() {
    return _(z, this, H).call(this), super.entries()
  } [P]() {
    return this.entries()
  }
  get size() {
    return f(r(L, this)), super.size
  }
};
N = B;

function V(e) {
  return p === r(R, this) ? a(e) : i(e)
}

function H() {
  f(r(I, this));
  var e = r(F, this);
  if (r(L, this).v !== e.size) {
    for (var t of le(N.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = _(z, this, V).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of r(F, this)) f(n)
}
var U, ue = Symbol(`replace`),
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakSet;
U = Symbol.iterator;
var de = class extends URLSearchParams {
  constructor(...e) {
    super(...e), s(this, q), t(this, W, a(0)), t(this, G, pe()), t(this, K, !1)
  } [ue](t) {
    if (!r(K, this)) {
      o(K, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [e, n] of t) super.append(e, n);
      e(r(W, this)), o(K, this, !1)
    }
  }
  append(t, n) {
    super.append(t, n), _(q, this, J).call(this), e(r(W, this))
  }
  delete(t, n) {
    var i = super.has(t, n);
    super.delete(t, n), i && (_(q, this, J).call(this), e(r(W, this)))
  }
  get(e) {
    return f(r(W, this)), super.get(e)
  }
  getAll(e) {
    return f(r(W, this)), super.getAll(e)
  }
  has(e, t) {
    return f(r(W, this)), super.has(e, t)
  }
  keys() {
    return f(r(W, this)), super.keys()
  }
  set(t, n) {
    var i = super.getAll(t);
    super.set(t, n);
    var a = super.getAll(t);
    (i.length !== a.length || i.some((e, t) => e !== a[t])) && (_(q, this, J).call(this), e(r(W, this)))
  }
  sort() {
    super.sort(), _(q, this, J).call(this), e(r(W, this))
  }
  toString() {
    return f(r(W, this)), super.toString()
  }
  values() {
    return f(r(W, this)), super.values()
  }
  entries() {
    return f(r(W, this)), super.entries()
  } [U]() {
    return this.entries()
  }
  get size() {
    return f(r(W, this)), super.size
  }
};

function J() {
  if (!r(G, this) || r(K, this)) return;
  o(K, this, !0);
  let e = this.toString();
  r(G, this).search = e && `?${e}`, o(K, this, !1)
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
      super(() => r.matches, e => c(r, `change`, e))
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
      t(this, Y, a(d([]))), t(this, X, a(d([]))), t(this, Z, e => {
        let t = this.toasts.findIndex(t => t.id === e);
        return t === -1 ? null : t
      }), m(this, `addToast`, e => {
        ve && this.toasts.unshift(e)
      }), m(this, `updateToast`, ({
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
      }), m(this, `create`, e => {
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
      }), m(this, `dismiss`, e => (h(() => {
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
      }), e)), m(this, `remove`, e => {
        if (e === void 0) {
          this.toasts = [];
          return
        }
        let t = r(Z, this).call(this, e);
        if (t !== null) return this.toasts.splice(t, 1), e
      }), m(this, `message`, (e, t) => this.create({
        ...t,
        type: `default`,
        message: e
      })), m(this, `error`, (e, t) => this.create({
        ...t,
        type: `error`,
        message: e
      })), m(this, `success`, (e, t) => this.create({
        ...t,
        type: `success`,
        message: e
      })), m(this, `info`, (e, t) => this.create({
        ...t,
        type: `info`,
        message: e
      })), m(this, `warning`, (e, t) => this.create({
        ...t,
        type: `warning`,
        message: e
      })), m(this, `loading`, (e, t) => this.create({
        ...t,
        type: `loading`,
        message: e
      })), m(this, `promise`, (e, t) => {
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
      }), m(this, `custom`, (e, t) => {
        let n = (t == null ? void 0 : t.id) || ye++;
        return this.create({
          component: e,
          id: n,
          ...t
        }), n
      }), m(this, `removeHeight`, e => {
        this.heights = this.heights.filter(t => t.toastId !== e)
      }), m(this, `setHeight`, e => {
        let t = r(Z, this).call(this, e.toastId);
        if (t === null) {
          this.heights.push(e);
          return
        }
        this.heights[t] = e
      }), m(this, `reset`, () => {
        this.toasts = [], this.heights = []
      })
    }
    get toasts() {
      return f(r(Y, this))
    }
    set toasts(e) {
      u(r(Y, this), e, !0)
    }
    get heights() {
      return f(r(X, this))
    }
    set heights(e) {
      u(r(X, this), e, !0)
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
      t(this, $, n(() => Q.toasts.filter(e => !e.dismiss)))
    }
    get toasts() {
      return f(r($, this))
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