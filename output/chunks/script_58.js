import "./s6SinlRJ.js";
import "./BxCQfe54.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as c,
  b as p,
  c as I,
  s as g,
  x as _,
  H as r
} from "./DCrkY18i.js";
import {
  s as u
} from "./BQ-01Ncd.js";
import {
  i as D
} from "./CAN2JA9L.js";
import {
  a as k
} from "./DyzzNIjt.js";
import {
  i as A
} from "./hsVcBw0i.js";
import {
  p as v
} from "./CRdj_r_F.js";
import {
  R as y,
  a as w
} from "./BpPdTOpt.js";
import {
  L as h
} from "./BhWKzC06.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f20ce6c7de81c065c8837dcafe40492e8d59c7f8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "796ec903-36dc-4704-abaf-eda3ca576017", e._sentryDebugIdIdentifier = "sentry-dbid-796ec903-36dc-4704-abaf-eda3ca576017")
  })()
} catch {}
var N = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = m("<span><!></span>");

function G(e, t) {
  T(t, !1);
  let a = v(t, "role", 8),
    x = v(t, "big", 8, !1);
  A();
  var n = S();
  let b;
  var E = l(n);
  {
    var R = s => {
        var o = N(),
          i = l(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        f(o), c(() => u(d, (r(y), r(a()), _(() => y[a()])))), p(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), c(() => u(d, (r(w), r(a()), _(() => w[a()])))), p(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), c(() => b = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, b, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), p(e, n), I()
}
export {
  G as R
};