import "./BHORAsI-.js";
import "./BP4Dz0ir.js";
import {
  p as I,
  d as l,
  r as f,
  t as b,
  a as m,
  b as D,
  s as _,
  w as n,
  x as g,
  c as p
} from "./Dcbzw1se.js";
import {
  s as v
} from "./70B2o-Hg.js";
import {
  i as T
} from "./EkgfBfpq.js";
import {
  a as k
} from "./DeKgkIEE.js";
import {
  i as A
} from "./HuHo-37s.js";
import {
  p as u
} from "./B5GV16O5.js";
import {
  R as y,
  a as w
} from "./D1VH7G9f.js";
import {
  L as x
} from "./3IhJYSLS.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "716cbc3d-bf71-497f-9ae9-148aeaac7035", a._sentryDebugIdIdentifier = "sentry-dbid-716cbc3d-bf71-497f-9ae9-148aeaac7035")
  } catch {}
})();
var N = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = p('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = p("<span><!></span>");

function G(a, s) {
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
        f(t), b(() => v(d, (n(y), n(e()), g(() => y[e()])))), m(r, t)
      },
      L = r => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), b(() => v(d, (n(w), n(e()), g(() => w[e()])))), m(r, t)
      };
    T(h, r => {
      E() ? r(R) : r(L, !1)
    })
  }
  f(i), b(() => c = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), m(a, i), D()
}
export {
  G as R
};