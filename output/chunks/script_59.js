import "./DDpMCJH1.js";
import "./Bp2R7kSQ.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as p,
  b,
  c as I,
  s as g,
  x as _,
  H as r
} from "./CQZMEYoL.js";
import {
  s as u
} from "./JzEgc4XP.js";
import {
  i as D
} from "./Dsa6Vynv.js";
import {
  a as k
} from "./C2XzIybF.js";
import {
  i as A
} from "./CR0OJR2O.js";
import {
  p as v
} from "./bk-D59aY.js";
import {
  R as y,
  a as w
} from "./zsxMc158.js";
import {
  L as h
} from "./yIhQenWF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "22a546fbb215f27eb1e048884138171ecb9ba2c5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e553ea3d-9525-4255-8066-e5996e0cbcbd", e._sentryDebugIdIdentifier = "sentry-dbid-e553ea3d-9525-4255-8066-e5996e0cbcbd")
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
  f(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), b(e, n), I()
}
export {
  G as R
};