import {
  aq as v,
  a3 as A,
  X as T,
  ar as L,
  Y,
  _ as b,
  a9 as h,
  a1 as D,
  e as M,
  o as u,
  aa as S,
  Z as k,
  as as C,
  ao as H,
  ag as V,
  at as j,
  au as R,
  av as W,
  aw as y,
  ax as $,
  j as q,
  k as F,
  h as w,
  p as P,
  D as X,
  a0 as Z,
  V as z,
  c as B
} from "./CwbVIH7w.js";
import {
  r as G
} from "./14RpiuYH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "abd976f8f8e90d32df6a1b04404d40d50ecf5fd4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "51a21050-ca8d-43f5-bd29-007122be4c8a", e._sentryDebugIdIdentifier = "sentry-dbid-51a21050-ca8d-43f5-bd29-007122be4c8a")
  })()
} catch {}
let I = !0;

function U(e, a) {
  var t = a == null ? "" : typeof a == "object" ? a + "" : a;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t + "")
}

function J(e, a) {
  return N(e, a)
}

function x(e, a) {
  v(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = w,
    c = u;
  try {
    for (var s = A(t); s && (s.nodeType !== T || s.data !== L);) s = Y(s);
    if (!s) throw b;
    h(!0), D(s), M();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== S) throw k(), b;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== b && console.warn("Failed to hydrate: ", d), a.recover === !1 && C(), v(), H(t), h(!1), J(e, a)
  } finally {
    h(_), D(c), G()
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
      for (var r = 0; r < o.length; r++) {
        var n = o[r];
        if (!f.has(n)) {
          f.add(n);
          var l = $(n);
          a.addEventListener(n, y, {
            passive: l
          });
          var m = i.get(n);
          m === void 0 ? (document.addEventListener(n, y, {
            passive: l
          }), i.set(n, 1)) : i.set(n, m + 1)
        }
      }
    };
  g(V(j)), R.add(g);
  var p = void 0,
    O = W(() => {
      var o = t ?? a.appendChild(q());
      return F(() => {
        if (s) {
          P({});
          var r = X;
          r.c = s
        }
        c && (_.$$events = c), w && Z(o, null), I = d, p = e(o, _) || {}, I = !0, w && (z.nodes_end = u), s && B()
      }), () => {
        var l;
        for (var r of f) {
          a.removeEventListener(r, y);
          var n = i.get(r);
          --n === 0 ? (document.removeEventListener(r, y), i.delete(r)) : i.set(r, n)
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
  I as a, x as h, J as m, U as s, ee as u
};