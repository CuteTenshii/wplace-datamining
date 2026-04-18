import "./3onovZFu.js";
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
  aW as b,
  r as _,
  t as h,
  c as k,
  m as i
} from "./Bpkf4F49.js";
import {
  s as v
} from "./B0PPGt3g.js";
import {
  i as C
} from "./h1NDdBVH.js";
import {
  a as g,
  c as q,
  s as d
} from "./CR0laCpx.js";
import {
  p as l
} from "./BIcASWQ9.js";
import {
  P as z
} from "./X51Rq3eA.js";
import {
  u as B
} from "./DAS1Kd7x.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
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
          c = S(t);
        {
          var O = o => {
              var n = G(),
                u = m(n);
              v(u, () => e.children ?? b), _(n), h(() => {
                g(n, 1, `cursor-pointer hover:underline ${I()}`), d(n, "title", e.title)
              }), i("pointerdown", n, f), i("click", n, w), i("keydown", n, T), s(o, n)
            },
            V = o => {
              var n = H(),
                u = m(n);
              v(u, () => e.children ?? b), _(n), h(() => {
                g(n, 1, `cursor-pointer hover:underline ${I()}`), d(n, "href", D(N)), d(n, "title", e.title)
              }), i("pointerdown", n, f), i("click", n, f), s(o, n)
            };
          C(c, o => {
            p() === "inline" ? o(O) : o(V, !1)
          })
        }
        s(a, t)
      },
      M = a => {
        var t = J(),
          c = m(t);
        v(c, () => e.children ?? b), _(t), h(() => {
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