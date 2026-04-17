import "./DEy4XHdA.js";
import "./FFwLJku7.js";
import {
  p as E,
  a as i,
  b as k,
  c as o,
  r as f,
  d as b,
  i as r,
  s as h,
  t as z,
  af as D
} from "./BBqfZ3Cy.js";
import {
  i as u
} from "./DtMKSaSA.js";
import {
  e as P
} from "./BvTA7fSG.js";
import {
  f as S
} from "./D8Ccz4Os.js";
import {
  i as T
} from "./BaENzKbL.js";
import {
  p as R,
  V,
  P as q
} from "./r-lW09hL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a54711f9-a3ea-48c3-9bb2-d82d0c44b996", e._sentryDebugIdIdentifier = "sentry-dbid-a54711f9-a3ea-48c3-9bb2-d82d0c44b996")
  } catch {}
})();
var A = o('<div class="z-10 size-2.5 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/15"></div>'),
  H = o('<div class="z-10 size-2 rounded-full border-2 border-base-300 bg-base-100"></div>'),
  L = o('<div class="mt-1 w-px flex-1 bg-base-300/50"></div>'),
  Y = o('<div class="relative flex gap-3.5"><div class="flex shrink-0 flex-col items-center pt-2.25"><!> <!></div> <div class="min-w-0 flex-1 pb-9"><!></div></div>'),
  $ = o('<div class="flex flex-col"></div>');

function O(e, d) {
  E(d, !1);
  const n = [...R].reverse().map(s => ({
    version: s.version,
    title: s.title,
    html: V(s.markdown)
  }));
  T();
  var c = $();
  P(c, 7, () => n, s => s.version, (s, g, l) => {
    var v = Y(),
      p = b(v),
      m = b(p);
    {
      var y = a => {
          var t = A();
          i(a, t)
        },
        w = a => {
          var t = H();
          i(a, t)
        };
      u(m, a => {
        r(l) === 0 ? a(y) : a(w, !1)
      })
    }
    var x = h(m, 2);
    {
      var I = a => {
        var t = L();
        i(a, t)
      };
      u(x, a => {
        r(l) < n.length - 1 && a(I)
      })
    }
    f(p);
    var _ = h(p, 2),
      N = b(_);
    {
      let a = D(() => r(l) === 0);
      q(N, {
        get patchNote() {
          return r(g)
        },
        get latest() {
          return r(a)
        }
      })
    }
    f(_), f(v), z(() => S(v, `animation: patchSlideIn 0.3s ease-out ${r(l)*50}ms both`)), i(s, v)
  }), f(c), i(e, c), k()
}
export {
  O as P
};