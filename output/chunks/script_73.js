import "./Dqa_tdCE.js";
import "./ITRe8Xpq.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as p,
  b as c,
  c as I,
  s as g,
  y as _,
  z as r
} from "./BrDbkhPu.js";
import {
  s as u
} from "./CGiign8e.js";
import {
  i as D
} from "./BSSwFqdp.js";
import {
  a as k
} from "./Dc7LljEh.js";
import {
  i as z
} from "./C1Bg15b7.js";
import {
  p as v
} from "./DhCXuMRP.js";
import {
  R as y,
  a as w
} from "./CgLYcTP4.js";
import {
  L as h
} from "./BTjJA6By.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
var A = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  N = m('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = m("<span><!></span>");

function G(e, t) {
  T(t, !1);
  let a = v(t, "role", 8),
    x = v(t, "big", 8, !1);
  z();
  var n = O();
  let b;
  var E = l(n);
  {
    var R = s => {
        var o = A(),
          i = l(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), c(s, o)
      },
      L = s => {
        var o = N(),
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