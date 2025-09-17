import {
  aj as v,
  P as A,
  W as T,
  ak as L,
  a9 as k,
  ag as b,
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
} from "./7GDDwXAz.js";
import {
  r as J
} from "./DAer_U_W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7717d06f815fd9b38aee4f2cbbcd5d44b5e4fc77"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8e8454c5-f3d4-4fdd-97f2-81fff90cf3df", e._sentryDebugIdIdentifier = "sentry-dbid-8e8454c5-f3d4-4fdd-97f2-81fff90cf3df")
  })()
} catch {}
let I = !0;

function Z(e, t) {
  var a = t == null ? "" : typeof t == "object" ? t + "" : t;
  a !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = a, e.nodeValue = a + "")
}

function K(e, t) {
  return N(e, t)
}

function x(e, t) {
  v(), t.intro = t.intro ?? !1;
  const a = t.target,
    _ = w,
    c = u;
  try {
    for (var s = A(a); s && (s.nodeType !== T || s.data !== L);) s = k(s);
    if (!s) throw b;
    h(!0), D(s), M();
    const d = N(e, {
      ...t,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== S) throw Y(), b;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(i => i.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== b && console.warn("Failed to hydrate: ", d), t.recover === !1 && j(), v(), C(a), h(!1), K(e, t)
  } finally {
    h(_), D(c), J()
  }
}
const f = new Map;

function N(e, {
  target: t,
  anchor: a,
  props: _ = {},
  events: c,
  context: s,
  intro: d = !0
}) {
  v();
  var i = new Set,
    g = o => {
      for (var n = 0; n < o.length; n++) {
        var r = o[n];
        if (!i.has(r)) {
          i.add(r);
          var l = P(r);
          t.addEventListener(r, y, {
            passive: l
          });
          var E = f.get(r);
          E === void 0 ? (document.addEventListener(r, y, {
            passive: l
          }), f.set(r, 1)) : f.set(r, E + 1)
        }
      }
    };
  g(H(V)), R.add(g);
  var p = void 0,
    O = W(() => {
      var o = a ?? t.appendChild($());
      return q(() => {
        if (s) {
          F({});
          var n = X;
          n.c = s
        }
        c && (_.$$events = c), w && z(o, null), I = d, p = e(o, _) || {}, I = !0, w && (B.nodes_end = u), s && G()
      }), () => {
        var l;
        for (var n of i) {
          t.removeEventListener(n, y);
          var r = f.get(n);
          --r === 0 ? (document.removeEventListener(n, y), f.delete(n)) : f.set(n, r)
        }
        R.delete(g), o !== a && ((l = o.parentNode) == null || l.removeChild(o))
      }
    });
  return m.set(p, O), p
}
let m = new WeakMap;

function ee(e, t) {
  const a = m.get(e);
  return a ? (m.delete(e), a(t)) : Promise.resolve()
}
export {
  I as a, x as h, K as m, Z as s, ee as u
};