import {
  Ft as e,
  Gt as t,
  Ht as n,
  Lt as r,
  Nt as i,
  Ut as a,
  Vt as o,
  Wt as s,
  pt as c,
  un as l
} from "./DXDHrD2o.js";
import {
  C as u
} from "./BiTo61FT.js";
var d = `wplace_onboarding_done`,
  f = `wplace_onboarding_experiment`,
  p = 3e3,
  m = `onboarding_intro_v1`,
  h = [`tour`, `video`],
  g = `onboarding`,
  _ = new Set([`signed_in`, `first_paint`]);

function v(e) {
  try {
    return localStorage.getItem(e)
  } catch {
    return null
  }
}

function y(e, t) {
  try {
    localStorage.setItem(e, t)
  } catch {}
}

function b(e) {
  return h.includes(e)
}

function x() {
  let e = v(f);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return t.experiment !== `onboarding_intro_v1` || typeof t.visitorId != `string` || !b(t.variant) ? null : t
  } catch {
    return null
  }
}

function S() {
  let e = new URLSearchParams(location.search).get(g);
  return b(e) ? e : null
}

function C() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}
var w = new WeakMap,
  T = new WeakMap,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakSet,
  A = class {
    constructor() {
      var e;
      t(this, k), s(this, w, r(v(d) === `1`)), l(this, `autoOpened`, !1), s(this, T, x()), s(this, E, S()), s(this, D, !1), s(this, O, r(i(o(E, this) ?? ((e = o(T, this)) == null ? void 0 : e.variant) ?? `tour`)))
    }
    get done() {
      return c(o(w, this))
    }
    set done(t) {
      e(o(w, this), t, !0)
    }
    get variant() {
      return c(o(O, this))
    }
    set variant(t) {
      e(o(O, this), t, !0)
    }
    expose() {
      if (!(o(D, this) || this.done)) {
        if (n(D, this, !0), !o(T, this) && !o(E, this)) {
          let e = crypto.getRandomValues(new Uint8Array(1))[0];
          n(T, this, {
            experiment: m,
            visitorId: C(),
            variant: h[e % h.length]
          }), a(k, this, M).call(this), this.variant = o(T, this).variant
        }
        this.track(`exposed`)
      }
    }
    track(e, t) {
      let n = o(T, this);
      !n || o(E, this) || this.done && !_.has(e) || u.postOnboardingExperimentEvent({
        experiment: n.experiment,
        visitorId: n.visitorId,
        variant: n.variant,
        event: e,
        value: t === void 0 ? void 0 : Math.round(t)
      })
    }
    recordFirstPaint() {
      a(k, this, j).call(this, `firstPaint`, `first_paint`)
    }
    complete() {
      a(k, this, j).call(this, `signedIn`, `signed_in`), !this.done && (this.done = !0, y(d, `1`))
    }
  };

function j(e, t) {
  !o(T, this) || o(T, this)[e] || o(E, this) || (o(T, this)[e] = !0, a(k, this, M).call(this), this.track(t))
}

function M() {
  o(T, this) && y(f, JSON.stringify(o(T, this)))
}
var N = new A;
export {
  N as n, p as t
};