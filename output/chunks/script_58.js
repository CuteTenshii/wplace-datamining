import "./4Tv6sS2k.js";
import "./BjUkOr-R.js";
import {
  p as T,
  f as c,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as g,
  x as _,
  H as r
} from "./D9fqFAK1.js";
import {
  s as u
} from "./CTJG1-X0.js";
import {
  i as D
} from "./2YtiQbkD.js";
import {
  a as k
} from "./BABvy4U3.js";
import {
  i as A
} from "./MI4bwvCe.js";
import {
  p as v
} from "./BE9-d1mE.js";
import {
  R as y,
  a as w
} from "./CUOJdkhm.js";
import {
  L as h
} from "./Bni7yjxL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "169eae4653f57d833d0e072bc2f6b253b1f72531"
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
var N = c('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = c('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = c("<span><!></span>");

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
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), m(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => b = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, b, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};