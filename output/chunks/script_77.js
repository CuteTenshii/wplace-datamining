import "./DWiaIDSa.js";
import "./CsthDKuu.js";
import {
  p as I,
  d as l,
  r as f,
  t as m,
  a as b,
  b as D,
  s as _,
  F as n,
  G as g,
  c as p
} from "./C6Ld_Ouf.js";
import {
  s as v
} from "./C_VcZRp0.js";
import {
  i as T
} from "./DqvAWVT4.js";
import {
  a as k
} from "./ozaL_Q3i.js";
import {
  i as A
} from "./DK8lZfZe.js";
import {
  p as u
} from "./CtRVT2QZ.js";
import {
  R as y,
  a as w
} from "./BR01szQu.js";
import {
  L as x
} from "./SU5qPGHS.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "524c6de5688559bfa8d287b7b1a6e5caba19cb91"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "b40de312-f288-4a2a-9cfb-059eae6a250b", a._sentryDebugIdIdentifier = "sentry-dbid-b40de312-f288-4a2a-9cfb-059eae6a250b")
  } catch {}
})();
var N = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = p("<span><!></span>");

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
        f(t), m(() => v(d, (n(y), n(e()), g(() => y[e()])))), b(r, t)
      },
      L = r => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(w), n(e()), g(() => w[e()])))), b(r, t)
      };
    T(h, r => {
      E() ? r(R) : r(L, !1)
    })
  }
  f(i), m(() => c = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), b(a, i), D()
}
export {
  C as R
};