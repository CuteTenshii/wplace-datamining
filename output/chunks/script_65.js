import "./BLuq94kG.js";
import {
  p as j,
  e as F,
  g as K,
  d as a,
  r,
  s as o,
  x as L,
  t as x,
  a as g,
  b as O,
  c as h
} from "./BGZizgo7.js";
import {
  s as i
} from "./BYUo2UjJ.js";
import {
  i as I
} from "./DclWce1c.js";
import {
  s as T
} from "./Bhr_YgHq.js";
import {
  p as Y
} from "./B9brejRs.js";
import {
  t as q,
  P as z
} from "./6RkRUpie.js";
import {
  t as G
} from "./BIvbzSfc.js";
import "./BIwJezZo.js";
import {
  b as H,
  t as J,
  p as Q,
  a as V,
  c as W,
  d as X,
  e as Z,
  m as tt
} from "./Cs1-HC8H.js";
import {
  L as et
} from "./Ihw3CI5m.js";
(function() {
  try {
    var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    s.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var n = new s.Error().stack;
    n && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[n] = "286300a9-8ce8-489b-959c-1efe5a3c372f", s._sentryDebugIdIdentifier = "sentry-dbid-286300a9-8ce8-489b-959c-1efe5a3c372f")
  } catch {}
})();
var at = h('<p class="my-2 text-center text-lg"> </p>'),
  rt = h('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  st = h('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function ut(s, n) {
  j(n, !0);
  let y = Y(n, "showTwitchMigration", 3, !0);
  F(K(q ? "" : "turnstile-disabled"));

  function D(t, e) {
    return `${z}/auth/${t}?token=${e}${n.redirect?`&r=${n.redirect}`:""}`
  }
  var _ = st(),
    l = a(_),
    R = a(l);
  et(R, {
    hasText: !0
  }), r(l);
  var m = o(l, 2),
    S = a(m);
  {
    var U = t => {
      var e = at(),
        d = a(e, !0);
      r(e), x(c => i(d, c), [() => X()]), g(t, e)
    };
    I(S, t => {
      t(U)
    })
  }
  r(m);
  var v = o(m, 2),
    w = a(v),
    f = o(w),
    A = a(f, !0);
  r(f);
  var p = o(f, 2),
    B = a(p, !0);
  r(p);
  var k = o(p),
    E = o(k),
    C = a(E, !0);
  r(E), L(), r(v);
  var M = o(v, 2);
  {
    var N = t => {
      var e = rt(),
        d = a(e),
        c = o(d),
        u = a(c, !0);
      r(c), L(), r(e), x((b, P, $) => {
        i(d, `${b??""} `), T(c, "href", P), i(u, $)
      }, [() => Z(), () => D("twitch", ""), () => tt()]), g(t, e)
    };
    I(M, t => {
      y() && t(N)
    })
  }
  r(_), x((t, e, d, c, u, b) => {
    i(w, `${t??""} `), T(f, "href", e), i(A, d), i(B, c), i(k, ` ${u??""} `), i(C, b)
  }, [() => H(), G, () => J(), () => Q(), () => V(), () => W()]), g(s, _), O()
}
export {
  ut as L
};