import "./DOoz6V9P.js";
import "./BWjpbM1F.js";
import {
  p as T,
  f as b,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as c,
  x as _,
  H as r
} from "./DAiWoJQM.js";
import {
  s as u
} from "./C0QCf1GR.js";
import {
  i as D
} from "./B4cPJSse.js";
import {
  a as k
} from "./DexA-uuz.js";
import {
  i as A
} from "./DYZ5l1L_.js";
import {
  p as v
} from "./BHI_t0iS.js";
import {
  R as y,
  a as w
} from "./vlzwHox4.js";
import {
  L as h
} from "./DR-PX-Oq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
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