import {
  ar as b,
  X as A,
  a2 as T,
  as as L,
  ag as k,
  ao as v,
  a1 as h,
  W as D,
  e as M,
  o as u,
  a3 as S,
  an as Y,
  at as C,
  ai as H,
  a9 as W,
  au as j,
  av as R,
  aw as V,
  ax as y,
  ay as $,
  j as F,
  k as P,
  h as w,
  p as X,
  D as q,
  ap as z,
  ak as B,
  c as G
} from "./Bry4mTdq.js";
import {
  r as J
} from "./C6NC9fZQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a44ac920-ed70-4d10-9688-9d5d7cac4ad8", e._sentryDebugIdIdentifier = "sentry-dbid-a44ac920-ed70-4d10-9688-9d5d7cac4ad8")
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
  b(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = w,
    c = u;
  try {
    for (var s = A(t); s && (s.nodeType !== T || s.data !== L);) s = k(s);
    if (!s) throw v;
    h(!0), D(s), M();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== S) throw Y(), v;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== v && console.warn("Failed to hydrate: ", d), a.recover === !1 && C(), b(), H(t), h(!1), K(e, a)
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
  b();
  var f = new Set,
    g = o => {
      for (var n = 0; n < o.length; n++) {
        var r = o[n];
        if (!f.has(r)) {
          f.add(r);
          var l = $(r);
          a.addEventListener(r, y, {
            passive: l
          });
          var m = i.get(r);
          m === void 0 ? (document.addEventListener(r, y, {
            passive: l
          }), i.set(r, 1)) : i.set(r, m + 1)
        }
      }
    };
  g(W(j)), R.add(g);
  var p = void 0,
    O = V(() => {
      var o = t ?? a.appendChild(F());
      return P(() => {
        if (s) {
          X({});
          var n = q;
          n.c = s
        }
        c && (_.$$events = c), w && z(o, null), I = d, p = e(o, _) || {}, I = !0, w && (B.nodes_end = u), s && G()
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
  return E.set(p, O), p
}
let E = new WeakMap;

function ee(e, a) {
  const t = E.get(e);
  return t ? (E.delete(e), t(a)) : Promise.resolve()
}
export {
  I as a, x as h, K as m, Z as s, ee as u
};