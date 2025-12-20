import "./CH7bPVZ-.js";
import "./DhyabUyf.js";
import {
  p as T,
  f as m,
  d as f,
  r as l,
  t as p,
  b,
  c as I,
  s as g,
  x as _,
  H as r
} from "./lghyzkeh.js";
import {
  s as u
} from "./DTFBLFZ4.js";
import {
  i as D
} from "./Cwiyy_tF.js";
import {
  a as k
} from "./B41b44vU.js";
import {
  i as A
} from "./BJE__JuT.js";
import {
  p as v
} from "./9N34mgL9.js";
import {
  R as y,
  a as w
} from "./DcNyhj-M.js";
import {
  L as h
} from "./DIkmMkBK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7041e020-565e-4ef8-96be-505de27ff55f", e._sentryDebugIdIdentifier = "sentry-dbid-7041e020-565e-4ef8-96be-505de27ff55f")
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
  var E = f(n);
  {
    var R = s => {
        var o = N(),
          i = f(o);
        h(i, {
          size: "none"
        });
        var d = g(i, 1, !0);
        l(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), b(s, o)
      },
      L = s => {
        var o = O(),
          i = f(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        l(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), b(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  l(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), b(e, n), I()
}
export {
  G as R
};