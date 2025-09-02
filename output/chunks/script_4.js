import {
  am as m,
  R as M,
  Z as T,
  an as Y,
  ac as b,
  aj as g,
  Y as h,
  Q as N,
  e as j,
  o as l,
  _ as k,
  ai as C,
  ao as H,
  ae as I,
  a5 as S,
  ap as V,
  aq as O,
  ar as W,
  as as v,
  at as $,
  j as q,
  k as z,
  h as w,
  p as F,
  z as P,
  ak as Q,
  ag as Z,
  c as B
} from "./DDWIi-vs.js";
import {
  r as G
} from "./DyJg5QNB.js";
let D = !0;

function X(a, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (a.__t ?? (a.__t = a.nodeValue)) && (a.__t = t, a.nodeValue = t + "")
}

function J(a, e) {
  return A(a, e)
}

function x(a, e) {
  m(), e.intro = e.intro ?? !1;
  const t = e.target,
    u = w,
    c = l;
  try {
    for (var r = M(t); r && (r.nodeType !== T || r.data !== Y);) r = b(r);
    if (!r) throw g;
    h(!0), N(r), j();
    const o = A(a, {
      ...e,
      anchor: r
    });
    if (l === null || l.nodeType !== T || l.data !== k) throw C(), g;
    return h(!1), o
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw o;
    return o !== g && console.warn("Failed to hydrate: ", o), e.recover === !1 && H(), m(), I(t), h(!1), J(a, e)
  } finally {
    h(u), N(c), G()
  }
}
const d = new Map;

function A(a, {
  target: e,
  anchor: t,
  props: u = {},
  events: c,
  context: r,
  intro: o = !0
}) {
  m();
  var f = new Set,
    p = i => {
      for (var s = 0; s < i.length; s++) {
        var n = i[s];
        if (!f.has(n)) {
          f.add(n);
          var _ = $(n);
          e.addEventListener(n, v, {
            passive: _
          });
          var R = d.get(n);
          R === void 0 ? (document.addEventListener(n, v, {
            passive: _
          }), d.set(n, 1)) : d.set(n, R + 1)
        }
      }
    };
  p(S(V)), O.add(p);
  var y = void 0,
    L = W(() => {
      var i = t ?? e.appendChild(q());
      return z(() => {
        if (r) {
          F({});
          var s = P;
          s.c = r
        }
        c && (u.$$events = c), w && Q(i, null), D = o, y = a(i, u) || {}, D = !0, w && (Z.nodes_end = l), r && B()
      }), () => {
        var _;
        for (var s of f) {
          e.removeEventListener(s, v);
          var n = d.get(s);
          --n === 0 ? (document.removeEventListener(s, v), d.delete(s)) : d.set(s, n)
        }
        O.delete(p), i !== t && ((_ = i.parentNode) == null || _.removeChild(i))
      }
    });
  return E.set(y, L), y
}
let E = new WeakMap;

function ee(a, e) {
  const t = E.get(a);
  return t ? (E.delete(a), t(e)) : Promise.resolve()
}
export {
  D as a, x as h, J as m, X as s, ee as u
};