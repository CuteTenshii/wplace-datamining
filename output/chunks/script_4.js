import {
  aj as v,
  P as A,
  W as T,
  ak as L,
  a9 as k,
  ag as p,
  V as h,
  O as D,
  e as M,
  o as u,
  X as S,
  af as Y,
  al as j,
  ab as C,
  a2 as H,
  am as V,
  an as R,
  ao as W,
  ap as y,
  aq as P,
  j as $,
  k as q,
  h as w,
  p as F,
  w as X,
  ah as z,
  ad as B,
  c as G
} from "./CS1SYnzj.js";
import {
  r as J
} from "./NiwnSaoe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cbd3f879a261fb0bdaced237db78a13f344d32ba"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5e05913-3d9f-4c82-9095-2bb73cf7a830", e._sentryDebugIdIdentifier = "sentry-dbid-c5e05913-3d9f-4c82-9095-2bb73cf7a830")
  })()
} catch {}
let I = !0;

function Z(e, a) {
  var t = a == null ? "" : typeof a == "object" ? a + "" : a;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t + "")
}

function K(e, a) {
  return N(e, a)
}

function x(e, a) {
  v(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = w,
    c = u;
  try {
    for (var s = A(t); s && (s.nodeType !== T || s.data !== L);) s = k(s);
    if (!s) throw p;
    h(!0), D(s), M();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== S) throw Y(), p;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== p && console.warn("Failed to hydrate: ", d), a.recover === !1 && j(), v(), C(t), h(!1), K(e, a)
  } finally {
    h(_), D(c), J()
  }
}
const i = new Map;

function N(e, {
  target: a,
  anchor: t,
  props: _ = {},
  events: c,
  context: s,
  intro: d = !0
}) {
  v();
  var f = new Set,
    g = o => {
      for (var n = 0; n < o.length; n++) {
        var r = o[n];
        if (!f.has(r)) {
          f.add(r);
          var l = P(r);
          a.addEventListener(r, y, {
            passive: l
          });
          var E = i.get(r);
          E === void 0 ? (document.addEventListener(r, y, {
            passive: l
          }), i.set(r, 1)) : i.set(r, E + 1)
        }
      }
    };
  g(H(V)), R.add(g);
  var b = void 0,
    O = W(() => {
      var o = t ?? a.appendChild($());
      return q(() => {
        if (s) {
          F({});
          var n = X;
          n.c = s
        }
        c && (_.$$events = c), w && z(o, null), I = d, b = e(o, _) || {}, I = !0, w && (B.nodes_end = u), s && G()
      }), () => {
        var l;
        for (var n of f) {
          a.removeEventListener(n, y);
          var r = i.get(n);
          --r === 0 ? (document.removeEventListener(n, y), i.delete(n)) : i.set(n, r)
        }
        R.delete(g), o !== t && ((l = o.parentNode) == null || l.removeChild(o))
      }
    });
  return m.set(b, O), b
}
let m = new WeakMap;

function ee(e, a) {
  const t = m.get(e);
  return t ? (m.delete(e), t(a)) : Promise.resolve()
}
export {
  I as a, x as h, K as m, Z as s, ee as u
};