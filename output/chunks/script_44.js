import {
  Bt as e,
  Ft as t,
  Gt as n,
  Ht as r,
  Lt as i,
  Nt as a,
  Ut as o,
  Vt as s,
  Wt as c,
  pt as l,
  un as u
} from "./DXDHrD2o.js";
import {
  C as d
} from "./CZ4DazQD.js";
var f = `wplace_onboarding_done`,
  p = `wplace_onboarding_experiment`,
  m = 3e3,
  h = 3e3,
  g = 3e3,
  _ = `onboarding_intro_v2`,
  v = [`tour`, `video`, `video_signin`, `tour_no_map_click`, `tour_auto_open`],
  y = `onboarding`,
  b = new Set([`signed_in`, `first_paint`]);

function x(e) {
  try {
    return localStorage.getItem(e)
  } catch {
    return null
  }
}

function S(e, t) {
  try {
    localStorage.setItem(e, t)
  } catch {}
}

function C(e) {
  return v.includes(e)
}

function w() {
  let e = x(p);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return t.experiment !== `onboarding_intro_v2` || typeof t.visitorId != `string` || !C(t.variant) ? null : t
  } catch {
    return null
  }
}

function T() {
  let e = new URLSearchParams(location.search).get(y);
  return C(e) ? e : null
}

function E() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}
var D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakMap,
  j = new WeakMap,
  M = new WeakMap,
  N = new WeakMap,
  P = new WeakSet,
  F = class {
    constructor() {
      var t;
      n(this, P), c(this, D, i(x(f) === `1`)), u(this, `autoOpened`, !1), c(this, O, w()), c(this, k, T()), c(this, A, !1), c(this, j, i(a(s(k, this) ?? ((t = s(O, this)) == null ? void 0 : t.variant) ?? `tour`))), c(this, M, e(() => this.variant !== `tour_no_map_click`)), c(this, N, e(() => this.variant === `tour_auto_open`))
    }
    get done() {
      return l(s(D, this))
    }
    set done(e) {
      t(s(D, this), e, !0)
    }
    get variant() {
      return l(s(j, this))
    }
    set variant(e) {
      t(s(j, this), e, !0)
    }
    get opensOnMapClick() {
      return l(s(M, this))
    }
    set opensOnMapClick(e) {
      t(s(M, this), e)
    }
    get opensAfterIntroTrip() {
      return l(s(N, this))
    }
    set opensAfterIntroTrip(e) {
      t(s(N, this), e)
    }
    expose() {
      if (!(s(A, this) || this.done)) {
        if (r(A, this, !0), !s(O, this) && !s(k, this)) {
          let e = crypto.getRandomValues(new Uint8Array(1))[0];
          r(O, this, {
            experiment: _,
            visitorId: E(),
            variant: v[e % v.length]
          }), o(P, this, L).call(this), this.variant = s(O, this).variant
        }
        this.track(`exposed`)
      }
    }
    track(e, t) {
      let n = s(O, this);
      !n || s(k, this) || this.done && !b.has(e) || d.postOnboardingExperimentEvent({
        experiment: n.experiment,
        visitorId: n.visitorId,
        variant: n.variant,
        event: e,
        value: t === void 0 ? void 0 : Math.round(t)
      })
    }
    recordFirstPaint() {
      o(P, this, I).call(this, `firstPaint`, `first_paint`)
    }
    complete() {
      o(P, this, I).call(this, `signedIn`, `signed_in`), !this.done && (this.done = !0, S(f, `1`))
    }
  };

function I(e, t) {
  !s(O, this) || s(O, this)[e] || s(k, this) || (s(O, this)[e] = !0, o(P, this, L).call(this), this.track(t))
}

function L() {
  s(O, this) && S(p, JSON.stringify(s(O, this)))
}
var R = new F;
export {
  R as i, h as n, m as r, g as t
};