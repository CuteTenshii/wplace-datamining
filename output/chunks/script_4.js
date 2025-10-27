import {
  av as v,
  a0 as O,
  a6 as T,
  aw as L,
  ak as k,
  as as p,
  a5 as h,
  _ as D,
  e as C,
  o as u,
  a7 as M,
  ar as S,
  ax as Y,
  am as H,
  ad as j,
  ay as V,
  az as I,
  aA as W,
  aB as y,
  aC as $,
  j as z,
  k as B,
  h as w,
  p as F,
  I as P,
  at as q,
  ao as G,
  c as J
} from "./CjHooIZx.js";
import {
  r as K
} from "./BkWSZ72-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c68c60ae-067a-44d3-bbf8-2fbf4a62b842", e._sentryDebugIdIdentifier = "sentry-dbid-c68c60ae-067a-44d3-bbf8-2fbf4a62b842")
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
  v(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = w,
    c = u;
  try {
    for (var s = O(t); s && (s.nodeType !== T || s.data !== L);) s = k(s);
    if (!s) throw p;
    h(!0), D(s), C();
    const d = N(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== M) throw S(), p;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== p && console.warn("Failed to hydrate: ", d), a.recover === !1 && Y(), v(), H(t), h(!1), Q(e, a)
  } finally {
    h(_), D(c), K()
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
          var E = i.get(n);
          E === void 0 ? (document.addEventListener(n, y, {
            passive: l
          }), i.set(n, 1)) : i.set(n, E + 1)
        }
      }
    };
  g(j(V)), I.add(g);
  var b = void 0,
    A = W(() => {
      var o = t ?? a.appendChild(z());
      return B(() => {
        if (s) {
          F({});
          var r = P;
          r.c = s
        }
        c && (_.$$events = c), w && q(o, null), R = d, b = e(o, _) || {}, R = !0, w && (G.nodes_end = u), s && J()
      }), () => {
        var l;
        for (var r of f) {
          a.removeEventListener(r, y);
          var n = i.get(r);
          --n === 0 ? (document.removeEventListener(r, y), i.delete(r)) : i.set(r, n)
        }
        I.delete(g), o !== t && ((l = o.parentNode) == null || l.removeChild(o))
      }
    });
  return m.set(b, A), b
}
let m = new WeakMap;

function ee(e, a) {
  const t = m.get(e);
  return t ? (m.delete(e), t(a)) : Promise.resolve()
}
export {
  R as a, x as h, Q as m, Z as s, ee as u
};