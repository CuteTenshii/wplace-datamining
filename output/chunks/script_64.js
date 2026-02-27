import "./DfSPqPjB.js";
import {
  p as j,
  e as F,
  g as K,
  f as y,
  d as r,
  r as o,
  s as i,
  n as k,
  t as x,
  b as g,
  c as O
} from "./BX08WKHH.js";
import {
  s as n
} from "./BuYVmOfq.js";
import {
  i as E
} from "./WtIPnxxX.js";
import {
  s as L
} from "./D1NSdIK5.js";
import {
  p as Y
} from "./BdjyGa6-.js";
import {
  t as q,
  P as z
} from "./D_ezuiS5.js";
import {
  t as G
} from "./Bcfa49nr.js";
import "./DvwOtY4M.js";
import {
  b as H,
  t as J,
  p as Q,
  a as V,
  c as W,
  d as X,
  e as Z,
  m as tt
} from "./7no19ZIF.js";
import {
  L as et
} from "./D2ykjXls.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "ad6869a7-87c0-4463-b7a6-ebfb44cba66f", a._sentryDebugIdIdentifier = "sentry-dbid-ad6869a7-87c0-4463-b7a6-ebfb44cba66f")
  })()
} catch {}
var at = y('<p class="my-2 text-center text-lg"> </p>'),
  rt = y('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  ot = y('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function vt(a, s) {
  j(s, !0);
  let I = Y(s, "showTwitchMigration", 3, !0);
  F(K(q ? "" : "turnstile-disabled"));

  function D(t, e) {
    return `${z}/auth/${t}?token=${e}${s.redirect?`&r=${s.redirect}`:""}`
  }
  var l = ot(),
    _ = r(l),
    R = r(_);
  et(R, {
    hasText: !0
  }), o(_);
  var m = i(_, 2),
    S = r(m);
  {
    var U = t => {
      var e = at(),
        c = r(e, !0);
      o(e), x(d => n(c, d), [() => X()]), g(t, e)
    };
    E(S, t => {
      t(U)
    })
  }
  o(m);
  var p = i(m, 2),
    h = r(p),
    f = i(h),
    A = r(f, !0);
  o(f);
  var u = i(f, 2),
    B = r(u, !0);
  o(u);
  var w = i(u),
    T = i(w),
    C = r(T, !0);
  o(T), k(), o(p);
  var M = i(p, 2);
  {
    var N = t => {
      var e = rt(),
        c = r(e),
        d = i(c),
        v = r(d, !0);
      o(d), k(), o(e), x((b, P, $) => {
        n(c, `${b??""} `), L(d, "href", P), n(v, $)
      }, [() => Z(), () => D("twitch", ""), () => tt()]), g(t, e)
    };
    E(M, t => {
      I() && t(N)
    })
  }
  o(l), x((t, e, c, d, v, b) => {
    n(h, `${t??""} `), L(f, "href", e), n(A, c), n(B, d), n(w, ` ${v??""} `), n(C, b)
  }, [() => H(), G, () => J(), () => Q(), () => V(), () => W()]), g(a, l), O()
}
export {
  vt as L
};