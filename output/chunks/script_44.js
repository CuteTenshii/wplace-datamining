import {
  Ft as e,
  Gt as t,
  Ht as n,
  Lt as r,
  Ut as i,
  Vt as a,
  Wt as o,
  pt as s,
  un as c
} from "./DXDHrD2o.js";
import {
  C as l
} from "./B7wnxm1M.js";
var u = `wplace_onboarding_done`,
  d = `wplace_onboarding_experiment`,
  f = 3e3,
  p = 3e3,
  m = 3e3,
  h = `onboarding_intro_v3`,
  g = [`none`, `video_signin`, `tour_no_map_click`, `tour_auto_open`],
  _ = `onboarding`,
  v = new Set([`signed_in`, `first_paint`]);

function y(e) {
  try {
    return localStorage.getItem(e)
  } catch {
    return null
  }
}

function b(e, t) {
  try {
    localStorage.setItem(e, t)
  } catch {}
}

function x(e) {
  return g.includes(e)
}

function S() {
  let e = y(d);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return t.experiment !== `onboarding_intro_v3` || typeof t.visitorId != `string` || !x(t.variant) ? null : t
  } catch {
    return null
  }
}

function C() {
  let e = new URLSearchParams(location.search).get(_);
  return x(e) ? e : null
}

function w() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}

function T() {
  return g[crypto.getRandomValues(new Uint8Array(1))[0] % g.length]
}
var E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakSet,
  j = class {
    constructor() {
      var e;
      t(this, A), o(this, E, r(y(u) === `1`)), c(this, `autoOpened`, !1), o(this, D, S()), o(this, O, C()), o(this, k, !1), c(this, `variant`, a(O, this) ?? ((e = a(D, this)) == null ? void 0 : e.variant) ?? (this.done ? null : T())), c(this, `introduces`, this.variant !== `none`), c(this, `opensOnMapClick`, this.introduces && this.variant !== `tour_no_map_click`), c(this, `opensAfterIntroTrip`, this.variant === `tour_auto_open`)
    }
    get done() {
      return s(a(E, this))
    }
    set done(t) {
      e(a(E, this), t, !0)
    }
    expose() {
      a(k, this) || this.done || !this.variant || (n(k, this, !0), !a(D, this) && !a(O, this) && (n(D, this, {
        experiment: h,
        visitorId: w(),
        variant: this.variant
      }), i(A, this, N).call(this)), this.track(`exposed`))
    }
    track(e, t) {
      let n = a(D, this);
      !n || a(O, this) || this.done && !v.has(e) || l.postOnboardingExperimentEvent({
        experiment: n.experiment,
        visitorId: n.visitorId,
        variant: n.variant,
        event: e,
        value: t === void 0 ? void 0 : Math.round(t)
      })
    }
    recordFirstPaint() {
      i(A, this, M).call(this, `firstPaint`, `first_paint`)
    }
    complete() {
      i(A, this, M).call(this, `signedIn`, `signed_in`), !this.done && (this.done = !0, b(u, `1`))
    }
  };

function M(e, t) {
  !a(D, this) || a(D, this)[e] || a(O, this) || (a(D, this)[e] = !0, i(A, this, N).call(this), this.track(t))
}

function N() {
  a(D, this) && b(d, JSON.stringify(a(D, this)))
}
var P = new j;
export {
  P as i, p as n, f as r, m as t
};