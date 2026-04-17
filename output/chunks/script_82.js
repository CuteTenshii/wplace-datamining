import "./BvtDw2fq.js";
import "./mSLUwJTb.js";
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
} from "./CdM0B1iz.js";
import {
  s as v
} from "./jgmhezi5.js";
import {
  i as T
} from "./DefVyea0.js";
import {
  a as k
} from "./B-xJiFIe.js";
import {
  i as A
} from "./qmKeskpc.js";
import {
  p as u
} from "./DMrwqQbv.js";
import {
  R as y,
  a as w
} from "./CgMNazhH.js";
import {
  L as x
} from "./HqvjEtii.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "1cb9e401-28c4-40a4-961b-37b6155c9d42", a._sentryDebugIdIdentifier = "sentry-dbid-1cb9e401-28c4-40a4-961b-37b6155c9d42")
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