import "./BaEU23u2.js";
import "./BnWksfGF.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as p,
  b as c,
  c as I,
  s as g,
  x as _,
  H as r
} from "./CZoruRVW.js";
import {
  s as u
} from "./BaYKnAhr.js";
import {
  i as D
} from "./BrshGqtt.js";
import {
  a as k
} from "./Cv5qs_pw.js";
import {
  i as A
} from "./BUOwQLt-.js";
import {
  p as v
} from "./CcIZg8y0.js";
import {
  R as y,
  a as w
} from "./BIlNrtKa.js";
import {
  L as h
} from "./CVftI7WR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "333b60866c7f52d6a6d78eeaca70d7067d67d0c1"
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
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), c(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), c(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => b = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, b, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), c(e, n), I()
}
export {
  G as R
};