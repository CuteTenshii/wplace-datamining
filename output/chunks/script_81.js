import "./DemjF_EU.js";
import "./syWzG2Vh.js";
import {
  p as I,
  d as l,
  r as f,
  t as m,
  a as p,
  b as D,
  s as _,
  w as n,
  x as g,
  c
} from "./jMNCXwTX.js";
import {
  s as v
} from "./DwkAklGo.js";
import {
  i as T
} from "./NH9JmFAp.js";
import {
  a as k
} from "./BVdHsGeD.js";
import {
  i as A
} from "./BJiy37aj.js";
import {
  p as u
} from "./BymP_Peq.js";
import {
  R as y,
  a as w
} from "./BybLjTVW.js";
import {
  L as x
} from "./yStlqaHk.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "716cbc3d-bf71-497f-9ae9-148aeaac7035", a._sentryDebugIdIdentifier = "sentry-dbid-716cbc3d-bf71-497f-9ae9-148aeaac7035")
  } catch {}
})();
var N = c('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = c('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = c("<span><!></span>");

function G(a, s) {
  I(s, !1);
  let e = u(s, "role", 8),
    E = u(s, "big", 8, !1);
  A();
  var i = S();
  let b;
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
  f(i), m(() => b = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, b, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), p(a, i), D()
}
export {
  G as R
};