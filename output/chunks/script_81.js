import "./gt6MPWUX.js";
import "./CN-Ukaat.js";
import {
  p as I,
  d as l,
  r as f,
  t as m,
  a as c,
  b as D,
  s as _,
  w as n,
  x as g,
  c as p
} from "./CaCjFaGC.js";
import {
  s as v
} from "./pbToTqiO.js";
import {
  i as T
} from "./DnklOTye.js";
import {
  a as k
} from "./DXYJApGa.js";
import {
  i as A
} from "./Bc9fxeGs.js";
import {
  p as u
} from "./DVNIykfY.js";
import {
  R as y,
  a as w
} from "./B4g32gyM.js";
import {
  L as x
} from "./BUDk-9Am.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
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
        f(t), m(() => v(d, (n(y), n(e()), g(() => y[e()])))), c(r, t)
      },
      L = r => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(w), n(e()), g(() => w[e()])))), c(r, t)
      };
    T(h, r => {
      E() ? r(R) : r(L, !1)
    })
  }
  f(i), m(() => b = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, b, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader"
  })), c(a, i), D()
}
export {
  G as R
};