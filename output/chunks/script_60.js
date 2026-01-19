import "./Dzr0zEgr.js";
import "./BXDawSpN.js";
import {
  p as T,
  f as b,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as c,
  w as _,
  x as r
} from "./DcuED2r1.js";
import {
  s as u
} from "./C7Pahv-Y.js";
import {
  i as D
} from "./C11X_6e6.js";
import {
  a as k
} from "./DqnGd6Ri.js";
import {
  i as A
} from "./Bre_U80e.js";
import {
  p as v
} from "./CVvyswV1.js";
import {
  R as y,
  a as w
} from "./DrjKhI-x.js";
import {
  L as h
} from "./Bsk54aUv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3621fa73-9992-41d8-be86-523f6689eda0", e._sentryDebugIdIdentifier = "sentry-dbid-3621fa73-9992-41d8-be86-523f6689eda0")
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
  var E = l(n);
  {
    var R = s => {
        var o = N(),
          i = l(o);
        h(i, {
          size: "none"
        });
        var d = c(i, 1, !0);
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = c(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), m(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => g = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, g, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};