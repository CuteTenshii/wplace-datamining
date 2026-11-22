import {
  Bt as e,
  Ft as t,
  Gt as n,
  Ht as r,
  Kt as i,
  Lt as a,
  Tt as o,
  Ut as s,
  Vt as c,
  Wt as l,
  _t as u,
  lt as d,
  pt as f,
  wt as p
} from "./DXDHrD2o.js";
import "./BrohplP5.js";
import "./DzedHffB.js";
var m = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function h(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var g = new WeakMap,
  _ = new WeakMap;
new class {
  constructor(e = {}) {
    l(this, g, void 0), l(this, _, void 0);
    let {
      window: t = m,
      document: n = t == null ? void 0 : t.document
    } = e;
    t !== void 0 && (r(g, this, n), r(_, this, i(e => {
      let n = d(t, `focusin`, e),
        r = d(t, `focusout`, e);
      return () => {
        n(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = c(_, this)) == null || e.call(this), c(g, this) ? h(c(g, this)) : null
  }
};

function v(e) {
  return typeof e == `function`
}

function y(e, t) {
  if (v(e)) {
    let n = e();
    return n === void 0 ? t : n
  }
  return e === void 0 ? t : e
}

function b(n, r) {
  let i = a(null),
    o = e(() => y(r, 250));

  function s(...e) {
    if (f(i)) f(i).timeout && clearTimeout(f(i).timeout);
    else {
      let e, n, r = new Promise((t, r) => {
        e = t, n = r
      });
      t(i, {
        timeout: null,
        runner: null,
        promise: r,
        resolve: e,
        reject: n
      }, !0)
    }
    return f(i).runner = async () => {
      if (!f(i)) return;
      let r = f(i);
      t(i, null);
      try {
        r.resolve(await n.apply(this, e))
      } catch (e) {
        r.reject(e)
      }
    }, f(i).timeout = setTimeout(f(i).runner, f(o)), f(i).promise
  }
  return s.cancel = async () => {
    (!f(i) || f(i).timeout === null) && (await new Promise(e => setTimeout(e, 0)), !f(i) || f(i).timeout === null) || (clearTimeout(f(i).timeout), f(i).reject(`Cancelled`), t(i, null))
  }, s.runScheduledNow = async () => {
    var e, t;
    (!f(i) || !f(i).timeout) && (await new Promise(e => setTimeout(e, 0)), !f(i) || !f(i).timeout) || (clearTimeout(f(i).timeout), f(i).timeout = null, await ((e = (t = f(i)).runner) == null ? void 0 : e.call(t)))
  }, Object.defineProperty(s, "pending", {
    enumerable: !0,
    get() {
      var e;
      return !!((e = f(i)) != null && e.timeout)
    }
  }), s
}

function x(e, t) {
  switch (e) {
    case `post`:
      p(t);
      break;
    case `pre`:
      o(t)
  }
}

function S(e, t, n, r = {}) {
  let {
    lazy: i = !1
  } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
  x(t, () => {
    let t = Array.isArray(e) ? e.map(e => e()) : e();
    if (!a) {
      a = !0, o = t;
      return
    }
    let r = u(() => n(t, o));
    return o = t, r
  })
}

function C(e, t, n) {
  S(e, `post`, t, n)
}

function w(e, t, n) {
  S(e, `pre`, t, n)
}
C.pre = w;

function T() {}
var E = new WeakMap,
  D = new WeakMap,
  O = class {
    constructor(e, n = 250) {
      l(this, E, a()), l(this, D, void 0), t(c(E, this), e(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), r(D, this, b(() => {
        t(c(E, this), e(), !0)
      }, n)), C(e, () => {
        c(D, this).call(this).catch(T)
      })
    }
    get current() {
      return f(c(E, this))
    }
    get pending() {
      return c(D, this).pending
    }
    cancel() {
      c(D, this).cancel()
    }
    updateImmediately() {
      return c(D, this).runScheduledNow()
    }
    setImmediately(e) {
      this.cancel(), t(c(E, this), e, !0)
    }
  };

function k(e, t) {
  switch (e) {
    case `local`:
      return t.localStorage;
    case `session`:
      return t.sessionStorage
  }
}

function A(e, t, n, r, i, a) {
  if (typeof e != `object` || !e) return e;
  let o = Object.getPrototypeOf(e);
  if (o !== null && o !== Object.prototype && !Array.isArray(e)) return e;
  let s = n.get(e);
  return s || (s = new Proxy(e, {
    get: (e, o) => (r == null || r(), A(Reflect.get(e, o), t, n, r, i, a)),
    set: (e, n, r) => (i == null || i(), Reflect.set(e, n, r), a(t), !0)
  }), n.set(e, s)), s
}
var j = new WeakMap,
  M = new WeakMap,
  N = new WeakMap,
  P = new WeakMap,
  F = new WeakMap,
  I = new WeakMap,
  L = new WeakMap,
  R = new WeakMap,
  z = new WeakMap,
  B = new WeakMap,
  V = new WeakMap,
  H = new WeakMap,
  U = new WeakMap,
  W = new WeakSet,
  G = class {
    constructor(e, t, i = {}) {
      n(this, W), l(this, j, void 0), l(this, M, void 0), l(this, N, void 0), l(this, P, void 0), l(this, F, void 0), l(this, I, void 0), l(this, L, new WeakMap), l(this, R, void 0), l(this, z, void 0), l(this, B, void 0), l(this, V, void 0), l(this, H, void 0), l(this, U, e => {
        var t;
        e.key === c(M, this) && e.newValue !== null && (r(j, this, s(W, this, K).call(this, e.newValue)), (t = c(I, this)) == null || t.call(this))
      });
      let {
        storage: a = `local`,
        serializer: o = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        syncTabs: u = !0,
        connected: d = !0
      } = i, f = `window` in i ? i.window : m;
      if (r(j, this, t), r(M, this, e), r(N, this, o), r(R, this, d), r(B, this, f), r(V, this, u), r(H, this, a), f === void 0) return;
      let p = k(a, f);
      r(P, this, p);
      let h = p.getItem(e);
      h === null ? d && s(W, this, q).call(this, t) : r(j, this, s(W, this, K).call(this, h)), s(W, this, J).call(this)
    }
    get current() {
      var e, t, n;
      (e = c(F, this)) == null || e.call(this);
      let r;
      if (c(R, this)) {
        var i;
        let e = (i = c(P, this)) == null ? void 0 : i.getItem(c(M, this));
        r = e ? s(W, this, K).call(this, e) : c(j, this)
      } else r = c(j, this);
      return A(r, r, c(L, this), (t = c(F, this)) == null ? void 0 : t.bind(this), (n = c(I, this)) == null ? void 0 : n.bind(this), s(W, this, q).bind(this))
    }
    set current(e) {
      var t;
      s(W, this, q).call(this, e), (t = c(I, this)) == null || t.call(this)
    }
    get connected() {
      return c(R, this)
    }
    disconnect() {
      var e, t;
      if (!c(R, this)) return;
      let n = (e = c(P, this)) == null ? void 0 : e.getItem(c(M, this));
      n && r(j, this, s(W, this, K).call(this, n)), r(R, this, !1), (t = c(P, this)) == null || t.removeItem(c(M, this)), s(W, this, Y).call(this)
    }
    connect() {
      c(R, this) || (r(R, this, !0), s(W, this, q).call(this, c(j, this)), s(W, this, J).call(this))
    }
  };

function K(e) {
  try {
    return c(N, this).deserialize(e)
  } catch (t) {
    console.error(`Error when parsing "${e}" from persisted store "${c(M,this)}"`, t);
    return
  }
}

function q(e) {
  if (!c(R, this)) {
    r(j, this, e);
    return
  }
  try {
    if (e !== void 0) {
      var t;
      (t = c(P, this)) == null || t.setItem(c(M, this), c(N, this).serialize(e))
    }
  } catch (e) {
    console.error(`Error when writing value from persisted store "${c(M,this)}" to ${c(P,this)}`, e)
  }
}

function J() {
  !c(B, this) || !c(R, this) || r(F, this, i(e => (r(I, this, e), r(z, this, c(R, this) && c(V, this) && c(H, this) === `local` ? d(c(B, this), `storage`, c(U, this)) : void 0), () => {
    var e;
    (e = c(z, this)) == null || e.call(this), r(z, this, void 0), r(I, this, void 0)
  })))
}

function Y() {
  var e;
  (e = c(z, this)) == null || e.call(this), r(z, this, void 0), r(F, this, void 0)
}
export {
  O as n, C as r, G as t
};