import "./DSO83YFt.js";
import "./D44yAW8R.js";
import {
  p as T,
  f as c,
  d as l,
  r as f,
  t as p,
  b,
  c as I,
  s as g,
  x as _,
  H as r
} from "./CjkM38R6.js";
import {
  s as u
} from "./DCNDOD3D.js";
import {
  i as D
} from "./ezm742eF.js";
import {
  a as k
} from "./DgkQhC9o.js";
import {
  i as A
} from "./CM79kD4L.js";
import {
  p as v
} from "./C5gGzt6C.js";
import {
  R as y,
  a as w
} from "./ACivXWwB.js";
import {
  L as h
} from "./COv3BhOl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "51633bbb0f20b0f5578caf566ba6bc15f3497cdd"
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
  let m;
  var E = l(n);
  {
    var R = s => {
        var o = N(),
          i = l(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), b(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), b(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => m = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, m, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), b(e, n), I()
}
export {
  G as R
};