import {
  Bt as e,
  Ft as t,
  Gt as n,
  Ht as r,
  It as i,
  Lt as a,
  Nt as o,
  Pt as s,
  Ut as c,
  Vt as l,
  Wt as u,
  _t as d,
  ft as f,
  lt as ee,
  mt as p,
  pt as m,
  un as h,
  vt as g
} from "./DXDHrD2o.js";
import {
  t as te
} from "./BrohplP5.js";
var _, v = !1,
  y = new WeakMap,
  b = new WeakMap,
  x = new WeakMap,
  ne = new WeakSet;
_ = class extends Date {
  constructor(...e) {
    super(...e), n(this, ne), u(this, y, a(super.getTime())), u(this, b, new Map), u(this, x, f), v || c(ne, this, re).call(this)
  }
};

function re() {
  v = !0;
  var n = _.prototype,
    r = Date.prototype,
    i = Object.getOwnPropertyNames(r);
  for (let a of i)(a.startsWith(`get`) || a.startsWith(`to`) || a === `valueOf`) && (n[a] = function(...t) {
    if (t.length > 0) return m(l(y, this)), r[a].apply(this, t);
    var n = l(b, this).get(a);
    if (n === void 0) {
      let i = f;
      p(l(x, this)), n = e(() => (m(l(y, this)), r[a].apply(this, t))), l(b, this).set(a, n), p(i)
    }
    return m(n)
  }), a.startsWith(`set`) && (n[a] = function(...e) {
    var n = r[a].apply(this, e);
    return t(l(y, this), r.getTime.call(this)), n
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
    if (super(), n(this, k), u(this, T, new Map), u(this, E, a(0)), u(this, D, a(0)), u(this, O, g || -1), e) {
      for (var t of e) super.add(t);
      l(D, this).v = super.size
    }
    w || c(k, this, se).call(this)
  }
  has(e) {
    var t = super.has(e),
      n = l(T, this),
      r = n.get(e);
    if (r === void 0) {
      if (!t) return m(l(E, this)), !1;
      r = c(k, this, oe).call(this, !0), n.set(e, r)
    }
    return m(r), t
  }
  add(e) {
    return super.has(e) || (super.add(e), t(l(D, this), super.size), s(l(E, this))), this
  }
  delete(e) {
    var n = super.delete(e),
      r = l(T, this),
      i = r.get(e);
    return i !== void 0 && (r.delete(e), t(i, !1)), n && (t(l(D, this), super.size), s(l(E, this))), n
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = l(T, this);
      for (var n of e.values()) t(n, !1);
      e.clear(), t(l(D, this), 0), s(l(E, this))
    }
  }
  keys() {
    return this.values()
  }
  values() {
    return m(l(E, this)), super.values()
  }
  entries() {
    return m(l(E, this)), super.entries()
  } [C]() {
    return this.keys()
  }
  get size() {
    return m(l(D, this))
  }
};
S = A;

function oe(e) {
  return g === l(O, this) ? a(e) : i(e)
}

function se() {
  w = !0;
  var e = S.prototype,
    t = Set.prototype;
  for (let n of ie) e[n] = function(...e) {
    return m(l(E, this)), t[n].apply(this, e)
  };
  for (let n of ae) e[n] = function(...e) {
    m(l(E, this));
    var r = t[n].apply(this, e);
    return new S(r)
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
    if (super(), n(this, z), u(this, F, new Map), u(this, I, a(0)), u(this, L, a(0)), u(this, R, g || -1), e) {
      for (var [t, r] of e) super.set(t, r);
      l(L, this).v = super.size
    }
  }
  has(e) {
    var t = l(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = c(z, this, V).call(this, 0), t.set(e, n);
      else return m(l(I, this)), !1
    }
    return m(n), !0
  }
  forEach(e, t) {
    c(z, this, H).call(this), super.forEach(e, t)
  }
  get(e) {
    var t = l(F, this),
      n = t.get(e);
    if (n === void 0) {
      if (super.has(e)) n = c(z, this, V).call(this, 0), t.set(e, n);
      else {
        m(l(I, this));
        return
      }
    }
    return m(n), super.get(e)
  }
  set(e, n) {
    var r = l(F, this),
      i = r.get(e),
      a = super.get(e),
      o = super.set(e, n),
      u = l(I, this);
    if (i === void 0) i = c(z, this, V).call(this, 0), r.set(e, i), t(l(L, this), super.size), s(u);
    else if (a !== n) {
      var d;
      s(i);
      var f = u.reactions === null ? null : new Set(u.reactions);
      (f === null || !((d = i.reactions) != null && d.every(e => f.has(e)))) && s(u)
    }
    return o
  }
  delete(e) {
    var n = l(F, this),
      r = n.get(e),
      i = super.delete(e);
    return r !== void 0 && (n.delete(e), t(r, -1)), i && (t(l(L, this), super.size), s(l(I, this))), i
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = l(F, this);
      t(l(L, this), 0);
      for (var n of e.values()) t(n, -1);
      s(l(I, this)), e.clear()
    }
  }
  keys() {
    return m(l(I, this)), super.keys()
  }
  values() {
    return c(z, this, H).call(this), super.values()
  }
  entries() {
    return c(z, this, H).call(this), super.entries()
  } [P]() {
    return this.entries()
  }
  get size() {
    return m(l(L, this)), super.size
  }
};
N = B;

function V(e) {
  return g === l(R, this) ? a(e) : i(e)
}

function H() {
  m(l(I, this));
  var e = l(F, this);
  if (l(L, this).v !== e.size) {
    for (var t of le(N.prototype, `keys`, this, 2)([]))
      if (!e.has(t)) {
        var n = c(z, this, V).call(this, 0);
        e.set(t, n)
      }
  }
  for ([, n] of l(F, this)) m(n)
}
var U, ue = Symbol(`replace`),
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakSet;
U = Symbol.iterator;
var de = class extends URLSearchParams {
  constructor(...e) {
    super(...e), n(this, q), u(this, W, a(0)), u(this, G, pe()), u(this, K, !1)
  } [ue](e) {
    if (!l(K, this)) {
      r(K, this, !0);
      for (let e of [...super.keys()]) super.delete(e);
      for (let [t, n] of e) super.append(t, n);
      s(l(W, this)), r(K, this, !1)
    }
  }
  append(e, t) {
    super.append(e, t), c(q, this, J).call(this), s(l(W, this))
  }
  delete(e, t) {
    var n = super.has(e, t);
    super.delete(e, t), n && (c(q, this, J).call(this), s(l(W, this)))
  }
  get(e) {
    return m(l(W, this)), super.get(e)
  }
  getAll(e) {
    return m(l(W, this)), super.getAll(e)
  }
  has(e, t) {
    return m(l(W, this)), super.has(e, t)
  }
  keys() {
    return m(l(W, this)), super.keys()
  }
  set(e, t) {
    var n = super.getAll(e);
    super.set(e, t);
    var r = super.getAll(e);
    (n.length !== r.length || n.some((e, t) => e !== r[t])) && (c(q, this, J).call(this), s(l(W, this)))
  }
  sort() {
    super.sort(), c(q, this, J).call(this), s(l(W, this))
  }
  toString() {
    return m(l(W, this)), super.toString()
  }
  values() {
    return m(l(W, this)), super.values()
  }
  entries() {
    return m(l(W, this)), super.entries()
  } [U]() {
    return this.entries()
  }
  get size() {
    return m(l(W, this)), super.size
  }
};

function J() {
  if (!l(G, this) || l(K, this)) return;
  r(K, this, !0);
  let e = this.toString();
  l(G, this).search = e && `?${e}`, r(K, this, !1)
}
var fe = null;

function pe() {
  return fe
}
var me = /\(.+\)/,
  he = new Set([`all`, `print`, `screen`, `and`, `or`, `not`, `only`]),
  ge = class extends te {
    constructor(e, t) {
      let n = me.test(e) || e.split(/[\s,]+/).some(e => he.has(e.trim())) ? e : `(${e})`,
        r = window.matchMedia(n);
      super(() => r.matches, e => ee(r, `change`, e))
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
      u(this, Y, a(o([]))), u(this, X, a(o([]))), u(this, Z, e => {
        let t = this.toasts.findIndex(t => t.id === e);
        return t === -1 ? null : t
      }), h(this, `addToast`, e => {
        ve && this.toasts.unshift(e)
      }), h(this, `updateToast`, ({
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
      }), h(this, `create`, e => {
        var t;
        let {
          message: n,
          ...r
        } = e, i = typeof(e == null ? void 0 : e.id) == `number` || e.id && ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : ye++, a = e.dismissable === void 0 || e.dismissable, o = e.type === void 0 ? `default` : e.type;
        return d(() => {
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
      }), h(this, `dismiss`, e => (d(() => {
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
      }), e)), h(this, `remove`, e => {
        if (e === void 0) {
          this.toasts = [];
          return
        }
        let t = l(Z, this).call(this, e);
        if (t !== null) return this.toasts.splice(t, 1), e
      }), h(this, `message`, (e, t) => this.create({
        ...t,
        type: `default`,
        message: e
      })), h(this, `error`, (e, t) => this.create({
        ...t,
        type: `error`,
        message: e
      })), h(this, `success`, (e, t) => this.create({
        ...t,
        type: `success`,
        message: e
      })), h(this, `info`, (e, t) => this.create({
        ...t,
        type: `info`,
        message: e
      })), h(this, `warning`, (e, t) => this.create({
        ...t,
        type: `warning`,
        message: e
      })), h(this, `loading`, (e, t) => this.create({
        ...t,
        type: `loading`,
        message: e
      })), h(this, `promise`, (e, t) => {
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
      }), h(this, `custom`, (e, t) => {
        let n = (t == null ? void 0 : t.id) || ye++;
        return this.create({
          component: e,
          id: n,
          ...t
        }), n
      }), h(this, `removeHeight`, e => {
        this.heights = this.heights.filter(t => t.toastId !== e)
      }), h(this, `setHeight`, e => {
        let t = l(Z, this).call(this, e.toastId);
        if (t === null) {
          this.heights.push(e);
          return
        }
        this.heights[t] = e
      }), h(this, `reset`, () => {
        this.toasts = [], this.heights = []
      })
    }
    get toasts() {
      return m(l(Y, this))
    }
    set toasts(e) {
      t(l(Y, this), e, !0)
    }
    get heights() {
      return m(l(X, this))
    }
    set heights(e) {
      t(l(X, this), e, !0)
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
      u(this, $, e(() => Q.toasts.filter(e => !e.dismiss)))
    }
    get toasts() {
      return m(l($, this))
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