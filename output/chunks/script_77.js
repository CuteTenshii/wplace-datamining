import "./Dnk7a4UH.js";
import "./YoS9PVT_.js";
import {
  p as I,
  d as l,
  r as f,
  t as m,
  a as p,
  b as D,
  s as _,
  F as n,
  G as g,
  c as b
} from "./DySbC8v5.js";
import {
  s as v
} from "./K15F4x8N.js";
import {
  i as T
} from "./D4_-L5Wu.js";
import {
  a as k
} from "./CkNqLOaL.js";
import {
  i as A
} from "./C-YF4lZn.js";
import {
  p as u
} from "./Bu8Ds4-B.js";
import {
  R as y,
  a as w
} from "./Syur1j3F.js";
import {
  L as x
} from "./DjkpAN0V.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "b40de312-f288-4a2a-9cfb-059eae6a250b", a._sentryDebugIdIdentifier = "sentry-dbid-b40de312-f288-4a2a-9cfb-059eae6a250b")
  } catch {}
})();
var N = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = b("<span><!></span>");

function C(a, s) {
  I(s, !1);
  let e = u(s, "role", 8),
    E = u(s, "big", 8, !1);
  A();
  var i = S();
  let c;
  var h = l(i);
  {
    var R = r => {
        var t = N(),
          o = l(t);
        x(o, {
          size: "none"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(y), n(e()), g(() => y[e()])))), p(r, t)
      },
      L = r => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(w), n(e()), g(() => w[e()])))), p(r, t)
      };
    T(h, r => {
      E() ? r(R) : r(L, !1)
    })
  }
  f(i), m(() => c = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), p(a, i), D()
}
export {
  C as R
};