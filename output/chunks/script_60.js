import "./DQR1M6Or.js";
import "./CtCFg6UE.js";
import {
  p as T,
  f as b,
  d,
  r as l,
  t as p,
  b as m,
  c as I,
  s as c,
  x as _,
  H as r
} from "./BdthSYuV.js";
import {
  s as u
} from "./CDut-KgU.js";
import {
  i as D
} from "./CqpwyTww.js";
import {
  a as k
} from "./nqTt6Pp1.js";
import {
  i as A
} from "./By6zmi2z.js";
import {
  p as v
} from "./DJaRQTNf.js";
import {
  R as y,
  a as w
} from "./BIwIYFwy.js";
import {
  L as h
} from "./PWLloXlm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7041e020-565e-4ef8-96be-505de27ff55f", e._sentryDebugIdIdentifier = "sentry-dbid-7041e020-565e-4ef8-96be-505de27ff55f")
  })()
} catch {}
var N = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = b("<span><!></span>");

function G(e, t) {
  T(t, !1);
  let a = v(t, "role", 8),
    x = v(t, "big", 8, !1);
  A();
  var n = S();
  let g;
  var E = d(n);
  {
    var R = s => {
        var o = N(),
          i = d(o);
        h(i, {
          size: "none"
        });
        var f = c(i, 1, !0);
        l(o), p(() => u(f, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = O(),
          i = d(o);
        h(i, {
          size: "small"
        });
        var f = c(i, 1, !0);
        l(o), p(() => u(f, (r(w), r(a()), _(() => w[a()])))), m(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  l(n), p(() => g = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, g, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};