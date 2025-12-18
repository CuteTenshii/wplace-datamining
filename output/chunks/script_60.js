import "./CIH5OSXB.js";
import "./DhJLvy9u.js";
import {
  p as T,
  f as b,
  d as l,
  r as f,
  t as p,
  b as m,
  c as I,
  s as g,
  x as _,
  H as r
} from "./AT3DTgMx.js";
import {
  s as u
} from "./Dsh0CFgq.js";
import {
  i as D
} from "./DqQiG9W_.js";
import {
  a as k
} from "./_GlsUgsu.js";
import {
  i as A
} from "./BYTJKPzf.js";
import {
  p as v
} from "./D3kPQmpg.js";
import {
  R as y,
  a as w
} from "./Bg_lC7d9.js";
import {
  L as h
} from "./C4MKrrRI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38850961237e3d7e0cabf73306ceed2d401b42cd"
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
var N = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  O = b('<div class="inline-flex -translate-y-px items-center gap-2"><!> </div>'),
  S = b("<span><!></span>");

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
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), m(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), m(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), m(e, n), I()
}
export {
  G as R
};