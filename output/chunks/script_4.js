import {
  aj as m,
  P as L,
  W as N,
  ak as M,
  a9 as j,
  ag as g,
  V as c,
  O,
  e as k,
  o as _,
  X as C,
  af as H,
  al as I,
  ab as V,
  a2 as W,
  am as Y,
  an as R,
  ao as P,
  ap as v,
  aq as S,
  j as $,
  k as q,
  h as w,
  p as F,
  w as X,
  ah as z,
  ad as B,
  c as G
} from "./B6s--CY1.js";
import {
  r as J
} from "./D6XPH2zg.js";
let D = !0;

function Z(a, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (a.__t ?? (a.__t = a.nodeValue)) && (a.__t = t, a.nodeValue = t + "")
}

function K(a, e) {
  return b(a, e)
}

function x(a, e) {
  m(), e.intro = e.intro ?? !1;
  const t = e.target,
    u = w,
    h = _;
  try {
    for (var r = L(t); r && (r.nodeType !== N || r.data !== M);) r = j(r);
    if (!r) throw g;
    c(!0), O(r), k();
    const o = b(a, {
      ...e,
      anchor: r
    });
    if (_ === null || _.nodeType !== N || _.data !== C) throw H(), g;
    return c(!1), o
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw o;
    return o !== g && console.warn("Failed to hydrate: ", o), e.recover === !1 && I(), m(), V(t), c(!1), K(a, e)
  } finally {
    c(u), O(h), J()
  }
}
const i = new Map;

function b(a, {
  target: e,
  anchor: t,
  props: u = {},
  events: h,
  context: r,
  intro: o = !0
}) {
  m();
  var f = new Set,
    p = d => {
      for (var s = 0; s < d.length; s++) {
        var n = d[s];
        if (!f.has(n)) {
          f.add(n);
          var l = S(n);
          e.addEventListener(n, v, {
            passive: l
          });
          var T = i.get(n);
          T === void 0 ? (document.addEventListener(n, v, {
            passive: l
          }), i.set(n, 1)) : i.set(n, T + 1)
        }
      }
    };
  p(W(Y)), R.add(p);
  var y = void 0,
    A = P(() => {
      var d = t ?? e.appendChild($());
      return q(() => {
        if (r) {
          F({});
          var s = X;
          s.c = r
        }
        h && (u.$$events = h), w && z(d, null), D = o, y = a(d, u) || {}, D = !0, w && (B.nodes_end = _), r && G()
      }), () => {
        var l;
        for (var s of f) {
          e.removeEventListener(s, v);
          var n = i.get(s);
          --n === 0 ? (document.removeEventListener(s, v), i.delete(s)) : i.set(s, n)
        }
        R.delete(p), d !== t && ((l = d.parentNode) == null || l.removeChild(d))
      }
    });
  return E.set(y, A), y
}
let E = new WeakMap;

function ee(a, e) {
  const t = E.get(a);
  return t ? (E.delete(a), t(e)) : Promise.resolve()
}
export {
  D as a, x as h, K as m, Z as s, ee as u
};