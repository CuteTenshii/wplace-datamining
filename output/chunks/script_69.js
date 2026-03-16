import "./Bd9SjhhN.js";
import {
  p as j,
  e as F,
  g as K,
  d as e,
  r,
  s as o,
  x as L,
  t as x,
  a as g,
  b as O,
  c as h
} from "./DOAgMrHD.js";
import {
  s as i
} from "./BvtnAOCY.js";
import {
  i as I
} from "./DWlonM8C.js";
import {
  s as T
} from "./CpI0CI6P.js";
import {
  p as Y
} from "./BElcPT_j.js";
import {
  t as q,
  P as z
} from "./C17y34tO.js";
import {
  t as G
} from "./DyP-PDfE.js";
import "./-EY-P68S.js";
import {
  b as H,
  t as J,
  p as Q,
  a as V,
  c as W,
  d as X,
  e as Z,
  m as tt
} from "./Hbry4Z7t.js";
import {
  L as at
} from "./Bpbc5lxn.js";
(function() {
  try {
    var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    s.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var n = new s.Error().stack;
    n && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[n] = "9f88076b-b191-4236-aa7a-fc42a3740379", s._sentryDebugIdIdentifier = "sentry-dbid-9f88076b-b191-4236-aa7a-fc42a3740379")
  } catch {}
})();
var et = h('<p class="my-2 text-center text-lg"> </p>'),
  rt = h('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  st = h('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function ut(s, n) {
  j(n, !0);
  let y = Y(n, "showTwitchMigration", 3, !0);
  F(K(q ? "" : "turnstile-disabled"));

  function D(t, a) {
    return `${z}/auth/${t}?token=${a}${n.redirect?`&r=${n.redirect}`:""}`
  }
  var _ = st(),
    l = e(_),
    R = e(l);
  at(R, {
    hasText: !0
  }), r(l);
  var m = o(l, 2),
    S = e(m);
  {
    var U = t => {
      var a = et(),
        f = e(a, !0);
      r(a), x(c => i(f, c), [() => X()]), g(t, a)
    };
    I(S, t => {
      t(U)
    })
  }
  r(m);
  var v = o(m, 2),
    w = e(v),
    d = o(w),
    A = e(d, !0);
  r(d);
  var p = o(d, 2),
    B = e(p, !0);
  r(p);
  var k = o(p),
    E = o(k),
    C = e(E, !0);
  r(E), L(), r(v);
  var M = o(v, 2);
  {
    var N = t => {
      var a = rt(),
        f = e(a),
        c = o(f),
        u = e(c, !0);
      r(c), L(), r(a), x((b, P, $) => {
        i(f, `${b??""} `), T(c, "href", P), i(u, $)
      }, [() => Z(), () => D("twitch", ""), () => tt()]), g(t, a)
    };
    I(M, t => {
      y() && t(N)
    })
  }
  r(_), x((t, a, f, c, u, b) => {
    i(w, `${t??""} `), T(d, "href", a), i(A, f), i(B, c), i(k, ` ${u??""} `), i(C, b)
  }, [() => H(), G, () => J(), () => Q(), () => V(), () => W()]), g(s, _), O()
}
export {
  ut as L
};