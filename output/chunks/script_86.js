import "./D5Mk_1eX.js";
import "./9iuNSfqc.js";
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
} from "./BYTf-X4W.js";
import {
  i as u
} from "./BQVJ6ha0.js";
import {
  e as P
} from "./Cb3Of28l.js";
import {
  f as S
} from "./BvWEorH0.js";
import {
  i as T
} from "./CWyUJf8G.js";
import {
  p as R,
  V,
  P as q
} from "./-RDsdsDO.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "225cbfea-6848-4a01-8fa0-2db196127b73", a._sentryDebugIdIdentifier = "sentry-dbid-225cbfea-6848-4a01-8fa0-2db196127b73")
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
  var p = $();
  P(p, 7, () => n, s => s.version, (s, g, l) => {
    var v = Y(),
      c = b(v),
      m = b(c);
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
      N = b(_);
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
  }), f(p), i(a, p), k()
}
export {
  O as P
};