import {
  al as v,
  X as A,
  P as T,
  am as L,
  Q as M,
  T as p,
  a4 as h,
  V as R,
  e as S,
  o as u,
  a5 as Y,
  R as j,
  an as k,
  aj as C,
  ab as H,
  ao as V,
  ap as D,
  aq as P,
  ar as y,
  as as W,
  j as $,
  k as q,
  h as w,
  p as F,
  w as Q,
  U,
  N as X,
  c as z
} from "./BONTOiKC.js";
import {
  r as B
} from "./D-DLxj80.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e593a4fa-64dd-4984-8ccb-a1076195b4c1", e._sentryDebugIdIdentifier = "sentry-dbid-e593a4fa-64dd-4984-8ccb-a1076195b4c1")
  })()
} catch {}
let N = !0;

function Z(e, a) {
  var t = a == null ? "" : typeof a == "object" ? a + "" : a;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t + "")
}

function G(e, a) {
  return I(e, a)
}

function x(e, a) {
  v(), a.intro = a.intro ?? !1;
  const t = a.target,
    _ = w,
    c = u;
  try {
    for (var s = A(t); s && (s.nodeType !== T || s.data !== L);) s = M(s);
    if (!s) throw p;
    h(!0), R(s), S();
    const d = I(e, {
      ...a,
      anchor: s
    });
    if (u === null || u.nodeType !== T || u.data !== Y) throw j(), p;
    return h(!1), d
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw d;
    return d !== p && console.warn("Failed to hydrate: ", d), a.recover === !1 && k(), v(), C(t), h(!1), G(e, a)
  } finally {
    h(_), R(c), B()
  }
}
const i = new Map;

function I(e, {
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
          var l = W(r);
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
  g(H(V)), D.add(g);
  var b = void 0,
    O = P(() => {
      var o = t ?? a.appendChild($());
      return q(() => {
        if (s) {
          F({});
          var n = Q;
          n.c = s
        }
        c && (_.$$events = c), w && U(o, null), N = d, b = e(o, _) || {}, N = !0, w && (X.nodes_end = u), s && z()
      }), () => {
        var l;
        for (var n of f) {
          a.removeEventListener(n, y);
          var r = i.get(n);
          --r === 0 ? (document.removeEventListener(n, y), i.delete(n)) : i.set(n, r)
        }
        D.delete(g), o !== t && ((l = o.parentNode) == null || l.removeChild(o))
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
  N as a, x as h, G as m, Z as s, ee as u
};