var b = _ => {
  throw TypeError(_)
};
var g = (_, r, a) => r.has(_) || b("Cannot " + a);
var t = (_, r, a) => (g(_, r, "read from private field"), a ? a.call(_) : r.get(_)),
  p = (_, r, a) => r.has(_) ? b("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(_) : r.set(_, a),
  x = (_, r, a, n) => (g(_, r, "write to private field"), n ? n.call(_, a) : r.set(_, a), a);
import {
  i,
  h as w,
  e as q,
  u as I,
  t as M,
  a as f,
  w as h,
  d as C,
  r as P
} from "./D5GL_E7i.js";
import {
  w as S
} from "./DT1Yp-1-.js";
import {
  m as e
} from "./XL5Wf48w.js";
import {
  i as j
} from "./BTRCkmPl.js";
import "./Bzak7iHL.js";
import {
  e as v,
  s as D
} from "./Ce1mtF2R.js";
import {
  p as E,
  r as $
} from "./LT-XNHCk.js";

function L(_) {
  return typeof _ == "function"
}

function Z(_, r) {
  if (L(_)) {
    const n = _();
    return n === void 0 ? r : n
  }
  return _ === void 0 ? r : _
}

function N(_, r) {
  let a = q(null);
  const n = I(() => Z(r, 250));

  function l(...m) {
    if (i(a)) i(a).timeout && clearTimeout(i(a).timeout);
    else {
      let s, u;
      const A = new Promise((T, F) => {
        s = T, u = F
      });
      w(a, {
        timeout: null,
        runner: null,
        promise: A,
        resolve: s,
        reject: u
      }, !0)
    }
    return i(a).runner = async () => {
      if (!i(a)) return;
      const s = i(a);
      w(a, null);
      try {
        s.resolve(await _.apply(this, m))
      } catch (u) {
        s.reject(u)
      }
    }, i(a).timeout = setTimeout(i(a).runner, i(n)), i(a).promise
  }
  return l.cancel = async () => {
    (!i(a) || i(a).timeout === null) && (await new Promise(m => setTimeout(m, 0)), !i(a) || i(a).timeout === null) || (clearTimeout(i(a).timeout), i(a).reject("Cancelled"), w(a, null))
  }, l.runScheduledNow = async () => {
    var m, s;
    (!i(a) || !i(a).timeout) && (await new Promise(u => setTimeout(u, 0)), !i(a) || !i(a).timeout) || (clearTimeout(i(a).timeout), i(a).timeout = null, await ((s = (m = i(a)).runner) == null ? void 0 : s.call(m)))
  }, Object.defineProperty(l, "pending", {
    enumerable: !0,
    get() {
      var m;
      return !!((m = i(a)) != null && m.timeout)
    }
  }), l
}

function R() {}
var d, c;
class ae {
  constructor(r, a = 250) {
    p(this, d, q());
    p(this, c);
    w(t(this, d), r(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), x(this, c, N(() => {
      w(t(this, d), r(), !0)
    }, a)), S(r, () => {
      t(this, c).call(this).catch(R)
    })
  }
  get current() {
    return i(t(this, d))
  }
  get pending() {
    return t(this, c).pending
  }
  cancel() {
    t(this, c).cancel()
  }
  updateImmediately() {
    return t(this, c).runScheduledNow()
  }
  setImmediately(r) {
    this.cancel(), w(t(this, d), r, !0)
  }
}
d = new WeakMap, c = new WeakMap;
const o = {
    members: e.alliance_award_members_25_name,
    pixels: e.alliance_award_pixels_10000_name,
    dedicated_artists: e.alliance_award_dedicated_artists_10_name,
    age: e.alliance_award_age_30_days_name,
    daily_members: e.alliance_award_daily_members_10_name,
    active_days: e.alliance_award_active_7_days_name,
    members_5: e.alliance_award_members_5_name,
    members_25: e.alliance_award_members_25_name,
    members_50: e.alliance_award_members_50_name,
    members_100: e.alliance_award_members_100_name,
    members_500: e.alliance_award_members_500_name,
    members_1000: e.alliance_award_members_1000_name,
    pixels_100: e.alliance_award_pixels_100_name,
    pixels_1000: e.alliance_award_pixels_1000_name,
    pixels_10000: e.alliance_award_pixels_10000_name,
    pixels_100000: e.alliance_award_pixels_100000_name,
    pixels_1000000: e.alliance_award_pixels_1000000_name,
    pixels_10000000: e.alliance_award_pixels_10000000_name,
    dedicated_artists_10: e.alliance_award_dedicated_artists_10_name,
    age_30_days: e.alliance_award_age_30_days_name,
    age_60_days: e.alliance_award_age_60_days_name,
    age_90_days: e.alliance_award_age_90_days_name,
    age_180_days: e.alliance_award_age_180_days_name,
    age_365_days: e.alliance_award_age_365_days_name,
    daily_members_10: e.alliance_award_daily_members_10_name,
    daily_members_25: e.alliance_award_daily_members_25_name,
    daily_members_50: e.alliance_award_daily_members_50_name,
    daily_members_100: e.alliance_award_daily_members_100_name,
    active_7_days: e.alliance_award_active_7_days_name
  },
  y = {
    members_5: e.alliance_award_members_5_requirement,
    members_25: e.alliance_award_members_25_requirement,
    members_50: e.alliance_award_members_50_requirement,
    members_100: e.alliance_award_members_100_requirement,
    members_500: e.alliance_award_members_500_requirement,
    members_1000: e.alliance_award_members_1000_requirement,
    pixels_100: e.alliance_award_pixels_100_requirement,
    pixels_1000: e.alliance_award_pixels_1000_requirement,
    pixels_10000: e.alliance_award_pixels_10000_requirement,
    pixels_100000: e.alliance_award_pixels_100000_requirement,
    pixels_1000000: e.alliance_award_pixels_1000000_requirement,
    pixels_10000000: e.alliance_award_pixels_10000000_requirement,
    dedicated_artists_10: e.alliance_award_dedicated_artists_10_requirement,
    age_30_days: e.alliance_award_age_30_days_requirement,
    age_60_days: e.alliance_award_age_60_days_requirement,
    age_90_days: e.alliance_award_age_90_days_requirement,
    age_180_days: e.alliance_award_age_180_days_requirement,
    age_365_days: e.alliance_award_age_365_days_requirement,
    daily_members_10: e.alliance_award_daily_members_10_requirement,
    daily_members_25: e.alliance_award_daily_members_25_requirement,
    daily_members_50: e.alliance_award_daily_members_50_requirement,
    daily_members_100: e.alliance_award_daily_members_100_requirement,
    active_7_days: e.alliance_award_active_7_days_requirement
  },
  z = {
    members: {
      common: e.alliance_award_members_5_name,
      uncommon: e.alliance_award_members_25_name,
      rare: e.alliance_award_members_50_name,
      epic: e.alliance_award_members_100_name,
      legendary: e.alliance_award_members_500_name,
      mythic: e.alliance_award_members_1000_name
    },
    pixels: {
      common: e.alliance_award_pixels_100_name,
      uncommon: e.alliance_award_pixels_1000_name,
      rare: e.alliance_award_pixels_10000_name,
      epic: e.alliance_award_pixels_100000_name,
      legendary: e.alliance_award_pixels_1000000_name,
      mythic: e.alliance_award_pixels_10000000_name
    },
    dedicated_artists: {
      common: e.alliance_award_dedicated_artists_10_name
    },
    age: {
      common: e.alliance_award_age_30_days_name,
      uncommon: e.alliance_award_age_60_days_name,
      rare: e.alliance_award_age_90_days_name,
      epic: e.alliance_award_age_180_days_name,
      legendary: e.alliance_award_age_365_days_name
    },
    daily_members: {
      common: e.alliance_award_daily_members_10_name,
      uncommon: e.alliance_award_daily_members_25_name,
      rare: e.alliance_award_daily_members_50_name,
      epic: e.alliance_award_daily_members_100_name
    },
    active_days: {
      common: e.alliance_award_active_7_days_name
    }
  },
  B = {
    members: {
      common: e.alliance_award_members_5_requirement,
      uncommon: e.alliance_award_members_25_requirement,
      rare: e.alliance_award_members_50_requirement,
      epic: e.alliance_award_members_100_requirement,
      legendary: e.alliance_award_members_500_requirement,
      mythic: e.alliance_award_members_1000_requirement
    },
    pixels: {
      common: e.alliance_award_pixels_100_requirement,
      uncommon: e.alliance_award_pixels_1000_requirement,
      rare: e.alliance_award_pixels_10000_requirement,
      epic: e.alliance_award_pixels_100000_requirement,
      legendary: e.alliance_award_pixels_1000000_requirement,
      mythic: e.alliance_award_pixels_10000000_requirement
    },
    dedicated_artists: {
      common: e.alliance_award_dedicated_artists_10_requirement
    },
    age: {
      common: e.alliance_award_age_30_days_requirement,
      uncommon: e.alliance_award_age_60_days_requirement,
      rare: e.alliance_award_age_90_days_requirement,
      epic: e.alliance_award_age_180_days_requirement,
      legendary: e.alliance_award_age_365_days_requirement
    },
    daily_members: {
      common: e.alliance_award_daily_members_10_requirement,
      uncommon: e.alliance_award_daily_members_25_requirement,
      rare: e.alliance_award_daily_members_50_requirement,
      epic: e.alliance_award_daily_members_100_requirement
    },
    active_days: {
      common: e.alliance_award_active_7_days_requirement
    }
  },
  K = {
    common: e.alliance_award_tier_common,
    uncommon: e.alliance_award_tier_uncommon,
    rare: e.alliance_award_tier_rare,
    epic: e.alliance_award_tier_epic,
    legendary: e.alliance_award_tier_legendary,
    mythic: e.alliance_award_tier_mythic
  };

function _e(_, r) {
  var a, n, l, m;
  return r ? ((n = (a = z[_]) == null ? void 0 : a[r]) == null ? void 0 : n.call(a)) ?? ((l = o[_]) == null ? void 0 : l.call(o)) ?? e.alliance_awards() : ((m = o[_]) == null ? void 0 : m.call(o)) ?? e.alliance_awards()
}

function re(_, r) {
  var a, n, l;
  return r ? ((n = (a = B[_]) == null ? void 0 : a[r]) == null ? void 0 : n.call(a)) ?? "" : ((l = y[_]) == null ? void 0 : l.call(y)) ?? ""
}

function ie(_) {
  return K[_]()
}

function ne(_) {
  return j(_)
}

function le(_) {
  return _.replace(new RegExp("(\\P{M})(\\p{M}+)", "gu"), (r, a, n) => {
    if (/[\uFE0E\uFE0F\u20E3]/.test(n)) return r;
    const l = a.normalize("NFKC");
    return l === a || !new RegExp("^\\p{L}$", "u").test(l) ? r : (l + n).normalize("NFC")
  })
}
var O = new Set(["$$slots", "$$events", "$$legacy", "fill"]),
  U = h('<svg><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"></path></svg>');

function me(_, r) {
  let a = E(r, "fill", 3, "#5865F2"),
    n = $(r, O);
  var l = U();
  v(l, () => ({
    viewBox: "0 0 256 199",
    width: "256",
    height: "199",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...n
  }));
  var m = C(l);
  P(l), M(() => D(m, "fill", a())), f(_, l)
}
var Y = new Set(["$$slots", "$$events", "$$legacy"]),
  G = h('<svg><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>');

function te(_, r) {
  let a = $(r, Y);
  var n = G();
  v(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), f(_, n)
}
export {
  te as A, ae as D, me as a, ie as b, le as c, _e as d, re as e, ne as i
};