import "./BHORAsI-.js";
import "./BP4Dz0ir.js";
import {
  p as E,
  a as i,
  b as k,
  c as o,
  r as f,
  d as p,
  i as r,
  s as h,
  t as z,
  af as D
} from "./Dcbzw1se.js";
import {
  i as u
} from "./EkgfBfpq.js";
import {
  e as P
} from "./CM9B8buy.js";
import {
  f as S
} from "./DeKgkIEE.js";
import {
  i as T
} from "./HuHo-37s.js";
import {
  p as R,
  V,
  P as q
} from "./BBXp3ab4.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "a54711f9-a3ea-48c3-9bb2-d82d0c44b996", a._sentryDebugIdIdentifier = "sentry-dbid-a54711f9-a3ea-48c3-9bb2-d82d0c44b996")
  } catch {}
})();
var A = o('<div class="z-10 size-2.5 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/15"></div>'),
  H = o('<div class="z-10 size-2 rounded-full border-2 border-base-300 bg-base-100"></div>'),
  L = o('<div class="mt-1 w-px flex-1 bg-base-300/50"></div>'),
  Y = o('<div class="relative flex gap-3.5"><div class="flex shrink-0 flex-col items-center pt-2.25"><!> <!></div> <div class="min-w-0 flex-1 pb-9"><!></div></div>'),
  $ = o('<div class="flex flex-col"></div>');

function O(a, d) {
  E(d, !1);
  const n = [...R].reverse().map(s => ({
    version: s.version,
    title: s.title,
    html: V(s.markdown)
  }));
  T();
  var b = $();
  P(b, 7, () => n, s => s.version, (s, g, l) => {
    var v = Y(),
      c = p(v),
      m = p(c);
    {
      var y = e => {
          var t = A();
          i(e, t)
        },
        w = e => {
          var t = H();
          i(e, t)
        };
      u(m, e => {
        r(l) === 0 ? e(y) : e(w, !1)
      })
    }
    var x = h(m, 2);
    {
      var I = e => {
        var t = L();
        i(e, t)
      };
      u(x, e => {
        r(l) < n.length - 1 && e(I)
      })
    }
    f(c);
    var _ = h(c, 2),
      N = p(_);
    {
      let e = D(() => r(l) === 0);
      q(N, {
        get patchNote() {
          return r(g)
        },
        get latest() {
          return r(e)
        }
      })
    }
    f(_), f(v), z(() => S(v, `animation: patchSlideIn 0.3s ease-out ${r(l)*50}ms both`)), i(s, v)
  }), f(b), i(a, b), k()
}
export {
  O as P
};