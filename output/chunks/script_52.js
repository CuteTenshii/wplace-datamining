import "./D5Mk_1eX.js";
import {
  a as i,
  z as B,
  k as K,
  p as Q,
  l as E,
  f as P,
  i as S,
  b as U,
  u as q,
  d as g,
  aW as b,
  r as _,
  t as h,
  c as y,
  m as s
} from "./BYTf-X4W.js";
import {
  d as V,
  a as p,
  c as W,
  s as f
} from "./BvWEorH0.js";
import {
  r as Y,
  p as c
} from "./DxS_2ZxM.js";
import {
  s as w
} from "./Ch81uRg7.js";
import {
  i as x
} from "./BQVJ6ha0.js";
import {
  P as j
} from "./CTF8O_NE.js";
import {
  u as F
} from "./DQgyIwwl.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a323a2bf-37de-4015-add6-f637b5f60e82", t._sentryDebugIdIdentifier = "sentry-dbid-a323a2bf-37de-4015-add6-f637b5f60e82")
  } catch {}
})();
var G = B('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function se(t, e) {
  let d = Y(e, ["$$slots", "$$events", "$$legacy"]);
  var l = G();
  V(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...d
  })), i(t, l)
}

function D(t) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(t))}`
}

function H(t) {
  typeof window > "u" || window.open(D(t), "_blank", "noopener,noreferrer")
}
var J = y('<span role="link" tabindex="0"><!></span>'),
  X = y('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  $ = y("<span><!></span>");

function de(t, e) {
  Q(e, !0);
  let d = c(e, "mode", 3, "anchor"),
    l = c(e, "class", 3, ""),
    I = c(e, "linkClass", 19, l),
    C = c(e, "textClass", 19, l);
  const A = q(() => e.allianceId != null && e.allianceId > 0 && F.hasAnyPermission(j.dashboard.alliances)),
    L = q(() => e.allianceId == null ? "" : D(e.allianceId));

  function u(n) {
    n.stopPropagation()
  }

  function k(n) {
    e.allianceId == null || e.allianceId <= 0 || (n.preventDefault(), n.stopPropagation(), H(e.allianceId))
  }

  function R(n) {
    n.key !== "Enter" && n.key !== " " || k(n)
  }
  var T = E(),
    N = P(T);
  {
    var M = n => {
        var r = E(),
          m = P(r);
        {
          var Z = o => {
              var a = J(),
                v = g(a);
              w(v, () => e.children ?? b), _(a), h(() => {
                p(a, 1, `cursor-pointer hover:underline ${I()}`), f(a, "title", e.title)
              }), s("pointerdown", a, u), s("click", a, k), s("keydown", a, R), i(o, a)
            },
            z = o => {
              var a = X(),
                v = g(a);
              w(v, () => e.children ?? b), _(a), h(() => {
                p(a, 1, `cursor-pointer hover:underline ${I()}`), f(a, "href", S(L)), f(a, "title", e.title)
              }), s("pointerdown", a, u), s("click", a, u), i(o, a)
            };
          x(m, o => {
            d() === "inline" ? o(Z) : o(z, !1)
          })
        }
        i(n, r)
      },
      O = n => {
        var r = $(),
          m = g(r);
        w(m, () => e.children ?? b), _(r), h(() => {
          p(r, 1, W(C())), f(r, "title", e.title)
        }), i(n, r)
      };
    x(N, n => {
      S(A) ? n(M) : n(O, !1)
    })
  }
  i(t, T), U()
}
K(["pointerdown", "click", "keydown"]);
export {
  se as L, de as S
};