import "./DyTAnIvR.js";
import "./DH8PY2GB.js";
import {
  p as T,
  f as b,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as g,
  x as _,
  H as r
} from "./DuPBYAm5.js";
import {
  s as u
} from "./CuhTQCr7.js";
import {
  i as D
} from "./P7-7hVJ2.js";
import {
  a as k
} from "./DWTMwUVX.js";
import {
  i as A
} from "./BiFvncbH.js";
import {
  p as v
} from "./BKq0MFT9.js";
import {
  R as y,
  a as w
} from "./XkDbYo3i.js";
import {
  L as h
} from "./EpDlvKab.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "83ca1b65-791d-4f15-8e72-b77ac511a90c", e._sentryDebugIdIdentifier = "sentry-dbid-83ca1b65-791d-4f15-8e72-b77ac511a90c")
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
  let c;
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
  f(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};