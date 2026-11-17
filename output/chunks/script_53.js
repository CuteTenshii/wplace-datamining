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
  t as l
} from "./DYmRJpLf.js";
import {
  n as u
} from "./Bcuu4dxA.js";
var d = `wplace_onboarding_done`,
  f = `wplace_onboarding_experiment`,
  p = 3e3,
  m = 3e3,
  h = 3e3,
  g = `onboarding_intro_v3`,
  _ = [`none`, `video_signin`, `tour_no_map_click`, `tour_auto_open`],
  v = `onboarding`,
  y = new Set([`signed_in`, `first_paint`]);

function b(e) {
  try {
    return localStorage.getItem(e)
  } catch {
    return null
  }
}

function x(e, t) {
  try {
    localStorage.setItem(e, t)
  } catch {}
}

function S(e) {
  return _.includes(e)
}

function C() {
  let e = b(f);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return t.experiment !== `onboarding_intro_v3` || typeof t.visitorId != `string` || !S(t.variant) ? null : t
  } catch {
    return null
  }
}

function w() {
  let e = new URLSearchParams(location.search).get(v);
  return S(e) ? e : null
}

function T() {
  return _[crypto.getRandomValues(new Uint8Array(1))[0] % _.length]
}
var E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakSet,
  j = class {
    constructor() {
      var e;
      t(this, A), o(this, E, r(b(d) === `1`)), c(this, `autoOpened`, !1), o(this, D, C()), o(this, O, w()), o(this, k, !1), c(this, `variant`, a(O, this) ?? ((e = a(D, this)) == null ? void 0 : e.variant) ?? (this.done ? null : T())), c(this, `introduces`, this.variant !== `none`), c(this, `opensOnMapClick`, this.introduces && this.variant !== `tour_no_map_click`), c(this, `opensAfterIntroTrip`, this.variant === `tour_auto_open`)
    }
    get done() {
      return s(a(E, this))
    }
    set done(t) {
      e(a(E, this), t, !0)
    }
    expose() {
      a(k, this) || this.done || !this.variant || (n(k, this, !0), !a(D, this) && !a(O, this) && (n(D, this, {
        experiment: g,
        visitorId: u(),
        variant: this.variant
      }), i(A, this, N).call(this)), this.track(`exposed`))
    }
    track(e, t) {
      let n = a(D, this);
      !n || a(O, this) || this.done && !y.has(e) || l.postOnboardingExperimentEvent({
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
      i(A, this, M).call(this, `signedIn`, `signed_in`), !this.done && (this.done = !0, x(d, `1`))
    }
  };

function M(e, t) {
  !a(D, this) || a(D, this)[e] || a(O, this) || (a(D, this)[e] = !0, i(A, this, N).call(this), this.track(t))
}

function N() {
  a(D, this) && x(f, JSON.stringify(a(D, this)))
}
var P = new j;
export {
  P as i, m as n, p as r, h as t
};