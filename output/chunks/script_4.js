import {
  av as w,
  a0 as O,
  a6 as T,
  aw as L,
  ak as C,
  as as v,
  a5 as y,
  _ as D,
  j as M,
  v as u,
  a7 as S,
  ar as Y,
  ax as k,
  am as H,
  ad as j,
  ay as V,
  az as I,
  aA as W,
  aB as h,
  aC as $,
  l as z,
  m as B,
  i as b,
  p as F,
  I as P,
  at as q,
  ao as G,
  c as J
} from "./CBd9NCKG.js";
import {
  r as K
} from "./B93if2aC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0dac3228-8d36-40f0-a380-caf49d0f8730", e._sentryDebugIdIdentifier = "sentry-dbid-0dac3228-8d36-40f0-a380-caf49d0f8730")
  })()
} catch {}
let R = !0;

function Z(e, a) {
  var t = a == null ? "" : typeof a == "object" ? a + "" : a;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t + "")
}

function Q(e, a) {
  return N(e, a)
}

function x(e, a) {
  w(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = b,
    c = u;
  try {
    for (var s = O(t); s && (s.nodeType !== T || s.data !== L);) s = C(s);
    if (!s) throw v;
    y(!0), D(s), M();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== S) throw Y(), v;
    return y(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== v && console.warn("Failed to hydrate: ", d), a.recover === !1 && k(), w(), H(t), y(!1), Q(e, a)
  } finally {
    y(_), D(c), K()
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
  w();
  var f = new Set,
    g = o => {
      for (var r = 0; r < o.length; r++) {
        var n = o[r];
        if (!f.has(n)) {
          f.add(n);
          var l = $(n);
          a.addEventListener(n, h, {
            passive: l
          });
          var E = i.get(n);
          E === void 0 ? (document.addEventListener(n, h, {
            passive: l
          }), i.set(n, 1)) : i.set(n, E + 1)
        }
      }
    };
  g(j(V)), I.add(g);
  var p = void 0,
    A = W(() => {
      var o = t ?? a.appendChild(z());
      return B(() => {
        if (s) {
          F({});
          var r = P;
          r.c = s
        }
        c && (_.$$events = c), b && q(o, null), R = d, p = e(o, _) || {}, R = !0, b && (G.nodes_end = u), s && J()
      }), () => {
        var l;
        for (var r of f) {
          a.removeEventListener(r, h);
          var n = i.get(r);
          --n === 0 ? (document.removeEventListener(r, h), i.delete(r)) : i.set(r, n)
        }
        I.delete(g), o !== t && ((l = o.parentNode) == null || l.removeChild(o))
      }
    });
  return m.set(p, A), p
}
let m = new WeakMap;

function ee(e, a) {
  const t = m.get(e);
  return t ? (m.delete(e), t(a)) : Promise.resolve()
}
export {
  R as a, x as h, Q as m, Z as s, ee as u
};