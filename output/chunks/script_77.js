import "./BlzsQxXy.js";
import "./BqIaHz4E.js";
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
} from "./BpkiS5AT.js";
import {
  s as v
} from "./BpAiHbma.js";
import {
  i as T
} from "./C7ij7NCq.js";
import {
  a as k
} from "./YwLJDD6g.js";
import {
  i as A
} from "./BY3tCGmI.js";
import {
  p as u
} from "./CmUbnRpp.js";
import {
  R as y,
  a as w
} from "./BSfadjSw.js";
import {
  L as x
} from "./CaNBQiEP.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "ea156420-b17a-4014-8a6a-bf8e7dd31b8f", a._sentryDebugIdIdentifier = "sentry-dbid-ea156420-b17a-4014-8a6a-bf8e7dd31b8f")
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