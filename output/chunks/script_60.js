import "./BrLaT1mT.js";
import "./BxBPcLEv.js";
import {
  p as T,
  f as b,
  d as f,
  r as l,
  t as p,
  b as m,
  c as I,
  s as g,
  x as _,
  H as r
} from "./6mH-Phwe.js";
import {
  s as u
} from "./CaRH5urb.js";
import {
  i as D
} from "./iOb0rBbR.js";
import {
  a as k
} from "./D_FC_TEr.js";
import {
  i as A
} from "./ByIVjmfk.js";
import {
  p as v
} from "./BM4e7f7A.js";
import {
  R as y,
  a as w
} from "./Dbs8lQDm.js";
import {
  L as h
} from "./BeE6BhYi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
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
  let c;
  var E = f(n);
  {
    var R = s => {
        var o = N(),
          i = f(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        l(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = O(),
          i = f(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        l(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), m(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  l(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};