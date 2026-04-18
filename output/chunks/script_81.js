import "./BU-NCdSO.js";
import "./sJvLKvyy.js";
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
  c as b
} from "./Cp19uF2I.js";
import {
  s as v
} from "./CEtP1x4Q.js";
import {
  i as T
} from "./BcjibeS2.js";
import {
  a as k
} from "./DWqOdrIT.js";
import {
  i as A
} from "./D4kT3aK9.js";
import {
  p as u
} from "./f9FzqMmi.js";
import {
  R as y,
  a as w
} from "./D5SKEzPf.js";
import {
  L as x
} from "./D2iulbR1.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "73927301-5d69-4be6-923e-4a2a3b31b046", a._sentryDebugIdIdentifier = "sentry-dbid-73927301-5d69-4be6-923e-4a2a3b31b046")
  } catch {}
})();
var N = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = b("<span><!></span>");

function G(a, r) {
  I(r, !1);
  let e = u(r, "role", 8),
    E = u(r, "big", 8, !1);
  A();
  var i = S();
  let c;
  var h = l(i);
  {
    var R = s => {
        var t = N(),
          o = l(t);
        x(o, {
          size: "none"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(y), n(e()), g(() => y[e()])))), p(s, t)
      },
      L = s => {
        var t = O(),
          o = l(t);
        x(o, {
          size: "small"
        });
        var d = _(o, 1, !0);
        f(t), m(() => v(d, (n(w), n(e()), g(() => w[e()])))), p(s, t)
      };
    T(h, s => {
      E() ? s(R) : s(L, !1)
    })
  }
  f(i), m(() => c = k(i, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": e() === "admin",
    "badge-secondary": e() === "moderator" || e() == "global_moderator",
    "badge-warning": e() === "community_leader" || e() === "discord_leader"
  })), p(a, i), D()
}
export {
  G as R
};