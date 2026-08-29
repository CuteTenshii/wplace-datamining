import {
  Bt as e,
  Ft as t,
  It as n,
  Lt as r,
  Pt as i,
  Rt as a,
  bt as o,
  ct as s,
  ft as c,
  it as l,
  jt as u,
  kt as d,
  yt as f,
  zt as p
} from "./D6uuD926.js";
import "./B4y8X1vy.js";
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
  constructor(t = {}) {
    a(this, g, void 0), a(this, _, void 0);
    let {
      window: r = m,
      document: i = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (n(g, this, i), n(_, this, e(e => {
      let t = l(r, `focusin`, e),
        n = l(r, `focusout`, e);
      return () => {
        t(), n()
      }
    })))
  }
  get current() {
    var e;
    return (e = t(_, this)) == null || e.call(this), t(g, this) ? h(t(g, this)) : null
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

function b(e, t) {
  let n = u(null),
    r = i(() => y(t, 250));

  function a(...t) {
    if (s(n)) s(n).timeout && clearTimeout(s(n).timeout);
    else {
      let e, t, r = new Promise((n, r) => {
        e = n, t = r
      });
      d(n, {
        timeout: null,
        runner: null,
        promise: r,
        resolve: e,
        reject: t
      }, !0)
    }
    return s(n).runner = async () => {
      if (!s(n)) return;
      let r = s(n);
      d(n, null);
      try {
        r.resolve(await e.apply(this, t))
      } catch (e) {
        r.reject(e)
      }
    }, s(n).timeout = setTimeout(s(n).runner, s(r)), s(n).promise
  }
  return a.cancel = async () => {
    (!s(n) || s(n).timeout === null) && (await new Promise(e => setTimeout(e, 0)), !s(n) || s(n).timeout === null) || (clearTimeout(s(n).timeout), s(n).reject(`Cancelled`), d(n, null))
  }, a.runScheduledNow = async () => {
    var e, t;
    (!s(n) || !s(n).timeout) && (await new Promise(e => setTimeout(e, 0)), !s(n) || !s(n).timeout) || (clearTimeout(s(n).timeout), s(n).timeout = null, await ((e = (t = s(n)).runner) == null ? void 0 : e.call(t)))
  }, Object.defineProperty(a, "pending", {
    enumerable: !0,
    get() {
      var e;
      return !!((e = s(n)) != null && e.timeout)
    }
  }), a
}

function x(e, t) {
  switch (e) {
    case `post`:
      f(t);
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
    let r = c(() => n(t, o));
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
    constructor(e, r = 250) {
      a(this, E, u()), a(this, D, void 0), d(t(E, this), e(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), n(D, this, b(() => {
        d(t(E, this), e(), !0)
      }, r)), C(e, () => {
        t(D, this).call(this).catch(T)
      })
    }
    get current() {
      return s(t(E, this))
    }
    get pending() {
      return t(D, this).pending
    }
    cancel() {
      t(D, this).cancel()
    }
    updateImmediately() {
      return t(D, this).runScheduledNow()
    }
    setImmediately(e) {
      this.cancel(), d(t(E, this), e, !0)
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
    constructor(e, i, o = {}) {
      p(this, W), a(this, j, void 0), a(this, M, void 0), a(this, N, void 0), a(this, P, void 0), a(this, F, void 0), a(this, I, void 0), a(this, L, new WeakMap), a(this, R, void 0), a(this, z, void 0), a(this, B, void 0), a(this, V, void 0), a(this, H, void 0), a(this, U, e => {
        var i;
        e.key === t(M, this) && e.newValue !== null && (n(j, this, r(W, this, K).call(this, e.newValue)), (i = t(I, this)) == null || i.call(this))
      });
      let {
        storage: s = `local`,
        serializer: c = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        syncTabs: l = !0,
        connected: u = !0
      } = o, d = `window` in o ? o.window : m;
      if (n(j, this, i), n(M, this, e), n(N, this, c), n(R, this, u), n(B, this, d), n(V, this, l), n(H, this, s), d === void 0) return;
      let f = k(s, d);
      n(P, this, f);
      let h = f.getItem(e);
      h === null ? u && r(W, this, q).call(this, i) : n(j, this, r(W, this, K).call(this, h)), r(W, this, J).call(this)
    }
    get current() {
      var e, n, i;
      (e = t(F, this)) == null || e.call(this);
      let a;
      if (t(R, this)) {
        var o;
        let e = (o = t(P, this)) == null ? void 0 : o.getItem(t(M, this));
        a = e ? r(W, this, K).call(this, e) : t(j, this)
      } else a = t(j, this);
      return A(a, a, t(L, this), (n = t(F, this)) == null ? void 0 : n.bind(this), (i = t(I, this)) == null ? void 0 : i.bind(this), r(W, this, q).bind(this))
    }
    set current(e) {
      var n;
      r(W, this, q).call(this, e), (n = t(I, this)) == null || n.call(this)
    }
    get connected() {
      return t(R, this)
    }
    disconnect() {
      var e, i;
      if (!t(R, this)) return;
      let a = (e = t(P, this)) == null ? void 0 : e.getItem(t(M, this));
      a && n(j, this, r(W, this, K).call(this, a)), n(R, this, !1), (i = t(P, this)) == null || i.removeItem(t(M, this)), r(W, this, Y).call(this)
    }
    connect() {
      t(R, this) || (n(R, this, !0), r(W, this, q).call(this, t(j, this)), r(W, this, J).call(this))
    }
  };

function K(e) {
  try {
    return t(N, this).deserialize(e)
  } catch (n) {
    console.error(`Error when parsing "${e}" from persisted store "${t(M,this)}"`, n);
    return
  }
}

function q(e) {
  if (!t(R, this)) {
    n(j, this, e);
    return
  }
  try {
    if (e !== void 0) {
      var r;
      (r = t(P, this)) == null || r.setItem(t(M, this), t(N, this).serialize(e))
    }
  } catch (e) {
    console.error(`Error when writing value from persisted store "${t(M,this)}" to ${t(P,this)}`, e)
  }
}

function J() {
  !t(B, this) || !t(R, this) || n(F, this, e(e => (n(I, this, e), n(z, this, t(R, this) && t(V, this) && t(H, this) === `local` ? l(t(B, this), `storage`, t(U, this)) : void 0), () => {
    var e;
    (e = t(z, this)) == null || e.call(this), n(z, this, void 0), n(I, this, void 0)
  })))
}

function Y() {
  var e;
  (e = t(z, this)) == null || e.call(this), n(z, this, void 0), n(F, this, void 0)
}
export {
  O as n, C as r, G as t
};