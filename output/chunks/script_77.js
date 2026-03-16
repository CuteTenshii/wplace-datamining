import "./M8DO3TCO.js";
import "./B7vtIttz.js";
import {
  p as I,
  d as l,
  r as f,
  t as b,
  a as m,
  b as D,
  s as _,
  F as n,
  G as g,
  c as p
} from "./Df0Hz134.js";
import {
  s as v
} from "./BXg7_WfL.js";
import {
  i as T
} from "./2QgDRSWz.js";
import {
  a as k
} from "./CHn7OGu9.js";
import {
  i as A
} from "./m8y2Oa8t.js";
import {
  p as u
} from "./D71bP1Ad.js";
import {
  R as y,
  a as w
} from "./DpqwanYD.js";
import {
  L as x
} from "./DuVKmYNZ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "ea156420-b17a-4014-8a6a-bf8e7dd31b8f", a._sentryDebugIdIdentifier = "sentry-dbid-ea156420-b17a-4014-8a6a-bf8e7dd31b8f")
  } catch {}
})();
var N = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = p("<span><!></span>");

function C(a, s) {
  I(s, !1);
  let e = u(s, "role", 8),
    E = u(s, "big", 8, !1);
  A();
  var i = S();
  let c;
  var h = l(i);
  {
    var R = r => {
        var t = N(),
          o = l(t);
        x(o, {
          size: "none"
        });
        var d = _(o, 1, !0);
        f(t), b(() => v(d, (n(y), n(e()), g(() => y[e()])))), m(r, t)
      },
      L = r => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), b(() => v(d, (n(w), n(e()), g(() => w[e()])))), m(r, t)
      };
    T(h, r => {
      E() ? r(R) : r(L, !1)
    })
  }
  f(i), b(() => c = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), m(a, i), D()
}
export {
  C as R
};