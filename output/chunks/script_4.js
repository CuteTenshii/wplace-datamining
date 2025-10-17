import {
  ar as v,
  V as A,
  a0 as T,
  as as L,
  ae as M,
  ao as b,
  _ as h,
  U as D,
  e as S,
  o as u,
  a1 as Y,
  an as k,
  at as C,
  ag as H,
  a7 as V,
  au as j,
  av as R,
  aw as W,
  ax as y,
  ay as $,
  j as F,
  k as P,
  h as w,
  p as U,
  D as q,
  ap as z,
  ai as B,
  c as G
} from "./DUWZzbWe.js";
import {
  r as J
} from "./DpLniEVG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6148de58-71b0-49b1-9361-c26ca5999668", e._sentryDebugIdIdentifier = "sentry-dbid-6148de58-71b0-49b1-9361-c26ca5999668")
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
    for (var s = A(t); s && (s.nodeType !== T || s.data !== L);) s = M(s);
    if (!s) throw b;
    h(!0), D(s), S();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== Y) throw k(), b;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== b && console.warn("Failed to hydrate: ", d), a.recover === !1 && C(), v(), H(t), h(!1), K(e, a)
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
  g(V(j)), R.add(g);
  var p = void 0,
    O = W(() => {
      var o = t ?? a.appendChild(F());
      return P(() => {
        if (s) {
          U({});
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