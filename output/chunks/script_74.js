import "./DfSPqPjB.js";
import "./CJA2c4gL.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as p,
  b,
  c as I,
  s as g,
  y as _,
  z as r
} from "./BX08WKHH.js";
import {
  s as u
} from "./BuYVmOfq.js";
import {
  i as D
} from "./WtIPnxxX.js";
import {
  a as k
} from "./D1NSdIK5.js";
import {
  i as z
} from "./D4Udo5qv.js";
import {
  p as v
} from "./BdjyGa6-.js";
import {
  R as y,
  a as w
} from "./wVWz-iIE.js";
import {
  L as h
} from "./D2ykjXls.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f074424b-cf5b-4825-b723-2e605b14616c", e._sentryDebugIdIdentifier = "sentry-dbid-f074424b-cf5b-4825-b723-2e605b14616c")
  })()
} catch {}
var A = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  N = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = m("<span><!></span>");

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
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), b(s, o)
      },
      L = s => {
        var o = N(),
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
  f(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), b(e, n), I()
}
export {
  G as R
};