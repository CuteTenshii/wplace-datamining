import "./D5Mk_1eX.js";
import {
  k as W,
  p as Y,
  l as P,
  f as S,
  i as D,
  a as s,
  b as j,
  u as x,
  d as m,
  aW as _,
  r as h,
  t as b,
  c as k,
  m as i
} from "./BYTf-X4W.js";
import {
  s as v
} from "./Ch81uRg7.js";
import {
  i as C
} from "./BQVJ6ha0.js";
import {
  a as g,
  c as q,
  s as d
} from "./BvWEorH0.js";
import {
  p as l
} from "./DxS_2ZxM.js";
import {
  P as z
} from "./CTF8O_NE.js";
import {
  u as B
} from "./DQgyIwwl.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "864094e2-44a5-42f3-8e46-9093fcefdd09", r._sentryDebugIdIdentifier = "sentry-dbid-864094e2-44a5-42f3-8e46-9093fcefdd09")
  } catch {}
})();

function R(r) {
  return `/dashboard/users?id=${encodeURIComponent(String(r))}`
}

function F(r) {
  typeof window > "u" || window.open(R(r), "_blank", "noopener,noreferrer")
}
var G = k('<span role="link" tabindex="0"><!></span>'),
  H = k('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  J = k("<span><!></span>");

function te(r, e) {
  Y(e, !0);
  let p = l(e, "mode", 3, "anchor"),
    y = l(e, "class", 3, ""),
    I = l(e, "linkClass", 19, y),
    U = l(e, "textClass", 19, y);
  const L = x(() => e.userId != null && e.userId > 0 && B.hasAnyPermission(z.dashboard.users)),
    N = x(() => e.userId == null ? "" : R(e.userId));

  function f(a) {
    a.stopPropagation()
  }

  function w(a) {
    e.userId == null || e.userId <= 0 || (a.preventDefault(), a.stopPropagation(), F(e.userId))
  }

  function T(a) {
    a.key !== "Enter" && a.key !== " " || w(a)
  }
  var E = P(),
    A = S(E);
  {
    var K = a => {
        var t = P(),
          u = S(t);
        {
          var O = o => {
              var n = G(),
                c = m(n);
              v(c, () => e.children ?? _), h(n), b(() => {
                g(n, 1, `cursor-pointer hover:underline ${I()}`), d(n, "title", e.title)
              }), i("pointerdown", n, f), i("click", n, w), i("keydown", n, T), s(o, n)
            },
            V = o => {
              var n = H(),
                c = m(n);
              v(c, () => e.children ?? _), h(n), b(() => {
                g(n, 1, `cursor-pointer hover:underline ${I()}`), d(n, "href", D(N)), d(n, "title", e.title)
              }), i("pointerdown", n, f), i("click", n, f), s(o, n)
            };
          C(u, o => {
            p() === "inline" ? o(O) : o(V, !1)
          })
        }
        s(a, t)
      },
      M = a => {
        var t = J(),
          u = m(t);
        v(u, () => e.children ?? _), h(t), b(() => {
          g(t, 1, q(U())), d(t, "title", e.title)
        }), s(a, t)
      };
    C(A, a => {
      D(L) ? a(K) : a(M, !1)
    })
  }
  s(r, E), j()
}
W(["pointerdown", "click", "keydown"]);
export {
  te as S
};