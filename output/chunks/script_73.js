import "./YEnWJlcv.js";
import "./BJNW39u0.js";
import {
  p as T,
  f as b,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as g,
  y as _,
  z as r
} from "./CJKTONAG.js";
import {
  s as u
} from "./C7A6x7gN.js";
import {
  i as D
} from "./CHFbJKTA.js";
import {
  a as k
} from "./AvkrwbMM.js";
import {
  i as z
} from "./xVbPnVne.js";
import {
  p as v
} from "./C99XV9yw.js";
import {
  R as y,
  a as w
} from "./2359Ve9a.js";
import {
  L as h
} from "./m1ANYXXs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4c7dddfe-4c26-4ab5-9599-1030213c9737", e._sentryDebugIdIdentifier = "sentry-dbid-4c7dddfe-4c26-4ab5-9599-1030213c9737")
  })()
} catch {}
var A = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  N = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = b("<span><!></span>");

function G(e, t) {
  T(t, !1);
  let a = v(t, "role", 8),
    x = v(t, "big", 8, !1);
  z();
  var n = O();
  let c;
  var E = l(n);
  {
    var R = s => {
        var o = A(),
          i = l(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = N(),
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