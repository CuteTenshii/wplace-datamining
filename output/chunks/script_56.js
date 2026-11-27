import {
  Ft as e,
  Gt as t,
  H as n,
  Ht as r,
  Lt as i,
  St as a,
  Ut as o,
  V as s,
  Vt as c,
  Wt as l,
  pt as u,
  un as d
} from "./DXDHrD2o.js";
import {
  r as f
} from "./DJf9i38S.js";
import {
  t as p
} from "./oPC4dsku.js";
import {
  t as m
} from "./DzedHffB.js";
import "./CmVv3bPS.js";
import {
  n as h
} from "./CgTemYMo.js";
var g = `wplace_onboarding_done`,
  _ = `wplace_onboarding_experiment`,
  v = 3e3,
  y = 3e3,
  b = 3e3,
  x = `onboarding_intro_v3`,
  S = [`none`, `video_signin`, `tour_no_map_click`, `tour_auto_open`],
  C = `onboarding`,
  w = new Set([`signed_in`, `first_paint`]);

function T(e) {
  try {
    return localStorage.getItem(e)
  } catch {
    return null
  }
}

function E(e, t) {
  try {
    localStorage.setItem(e, t)
  } catch {}
}

function D(e) {
  return S.includes(e)
}

function O() {
  let e = T(_);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return t.experiment !== `onboarding_intro_v3` || typeof t.visitorId != `string` || !D(t.variant) ? null : t
  } catch {
    return null
  }
}

function k() {
  let e = new URLSearchParams(location.search).get(C);
  return D(e) ? e : null
}

function A() {
  return S[crypto.getRandomValues(new Uint8Array(1))[0] % S.length]
}
var j = new WeakMap,
  M = new WeakMap,
  N = new WeakMap,
  P = new WeakMap,
  F = new WeakSet,
  I = class {
    constructor() {
      var e;
      t(this, F), l(this, j, i(T(g) === `1`)), d(this, `autoOpened`, !1), l(this, M, O()), l(this, N, k()), l(this, P, !1), d(this, `variant`, c(N, this) ?? ((e = c(M, this)) == null ? void 0 : e.variant) ?? (this.done ? null : A())), d(this, `introduces`, this.variant !== `none`), d(this, `opensOnMapClick`, this.introduces && this.variant !== `tour_no_map_click`), d(this, `opensAfterIntroTrip`, this.variant === `tour_auto_open`)
    }
    get done() {
      return u(c(j, this))
    }
    set done(t) {
      e(c(j, this), t, !0)
    }
    expose() {
      c(P, this) || this.done || !this.variant || (r(P, this, !0), !c(M, this) && !c(N, this) && (r(M, this, {
        experiment: x,
        visitorId: f(),
        variant: this.variant
      }), o(F, this, R).call(this)), this.track(`exposed`))
    }
    track(e, t) {
      let n = c(M, this);
      !n || c(N, this) || this.done && !w.has(e) || p.postOnboardingExperimentEvent({
        experiment: n.experiment,
        visitorId: n.visitorId,
        variant: n.variant,
        event: e,
        value: t === void 0 ? void 0 : Math.round(t)
      })
    }
    recordFirstPaint() {
      o(F, this, L).call(this, `firstPaint`, `first_paint`)
    }
    complete() {
      o(F, this, L).call(this, `signedIn`, `signed_in`), !this.done && (this.done = !0, E(g, `1`))
    }
  };

function L(e, t) {
  !c(M, this) || c(M, this)[e] || c(N, this) || (c(M, this)[e] = !0, o(F, this, R).call(this), this.track(t))
}

function R() {
  c(M, this) && E(_, JSON.stringify(c(M, this)))
}
var z = new I;

function B(e) {
  return Object.prototype.toString.call(e) === `[object Date]`
}

function V(e, t) {
  if (e === t || e !== e) return () => e;
  let n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t)) throw Error(`Cannot interpolate values of different type`);
  if (Array.isArray(e)) {
    let n = t.map((t, n) => V(e[n], t));
    return e => n.map(t => t(e))
  }
  if (n === `object`) {
    if (!e || !t) throw Error(`Object cannot be null`);
    if (B(e) && B(t)) {
      let n = e.getTime(),
        r = t.getTime() - n;
      return e => new Date(n + e * r)
    }
    let n = Object.keys(t),
      r = {};
    return n.forEach(n => {
      r[n] = V(e[n], t[n])
    }), e => {
      let t = {};
      return n.forEach(n => {
        t[n] = r[n](e)
      }), t
    }
  }
  if (n === `number`) {
    let n = t - e;
    return t => e + t * n
  }
  return () => t
}
var H = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = class t {
    constructor(e, t = {}) {
      l(this, H, void 0), l(this, U, void 0), l(this, W, void 0), l(this, G, null), r(H, this, i(e)), r(U, this, i(e)), r(W, this, t)
    }
    static of (e, n) {
      let r = new t(e(), n);
      return a(() => {
        r.set(e())
      }), r
    }
    set(t, i) {
      e(c(U, this), t);
      let {
        delay: a = 0,
        duration: o = 400,
        easing: l = h,
        interpolate: u = V
      } = {
        ...c(W, this),
        ...i
      };
      if (o === 0) {
        var d;
        return (d = c(G, this)) == null || d.abort(), e(c(H, this), t), Promise.resolve()
      }
      let f = n.now() + a,
        p, m = !1,
        g = c(G, this);
      return r(G, this, s(n => {
        if (n < f) return !0;
        if (!m) {
          m = !0;
          let e = c(H, this).v;
          p = u(e, t), typeof o == `function` && (o = o(e, t)), g == null || g.abort()
        }
        let r = n - f;
        return r > o ? (e(c(H, this), t), !1) : (e(c(H, this), p(l(r / o))), !0)
      })), c(G, this).promise
    }
    get current() {
      return u(c(H, this))
    }
    get target() {
      return u(c(U, this))
    }
    set target(e) {
      this.set(e)
    }
  },
  q = new m(`(prefers-reduced-motion: reduce)`);
export {
  v as a, y as i, K as n, z as o, b as r, q as t
};