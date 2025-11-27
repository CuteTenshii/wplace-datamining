import "./C4pz1jNS.js";
import "./BCEjsMzn.js";
import {
  p as T,
  f as m,
  d as l,
  r as f,
  t as p,
  b,
  c as I,
  s as g,
  x as _,
  H as r
} from "./DkqsQ_no.js";
import {
  s as u
} from "./DG0P4CpW.js";
import {
  i as D
} from "./2ppNae3Y.js";
import {
  a as k
} from "./DjUOH9bk.js";
import {
  i as A
} from "./NBfqztJ2.js";
import {
  p as v
} from "./B1fLW5aC.js";
import {
  R as y,
  a as w
} from "./tq14tUI_.js";
import {
  L as h
} from "./BtieSexF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a3ac030b39e1c69cc580b4434d12301a02e465ee"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6479e784-4393-4e04-a1d5-bbcb7d4013b7", e._sentryDebugIdIdentifier = "sentry-dbid-6479e784-4393-4e04-a1d5-bbcb7d4013b7")
  })()
} catch {}
var N = m('<div class="inline-flex -translate-y-[1px] items-center gap-2"><!> </div>'),
  O = m('<div class="inline-flex -translate-y-[1px] items-center gap-2"><!> </div>'),
  S = m("<span><!></span>");

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
        f(o), p(() => u(d, (r(y), r(a()), _(() => y[a()])))), b(s, o)
      },
      L = s => {
        var o = O(),
          i = l(o);
        h(i, {
          size: "small"
        });
        var d = g(i, 1, !0);
        f(o), p(() => u(d, (r(w), r(a()), _(() => w[a()])))), b(s, o)
      };
    D(E, s => {
      x() ? s(R) : s(L, !1)
    })
  }
  f(n), p(() => c = k(n, 1, "badge badge-sm ml-0.5 inline-flex items-center justify-center whitespace-nowrap pt-0.5 font-semibold leading-none shadow", null, c, {
    "badge-info": a() === "admin",
    "badge-secondary": a() === "moderator" || a() == "global_moderator",
    "badge-warning": a() === "community_leader"
  })), b(e, n), I()
}
export {
  G as R
};