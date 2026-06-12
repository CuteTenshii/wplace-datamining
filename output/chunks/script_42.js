var D = Object.defineProperty;
var x = s => {
  throw TypeError(s)
};
var F = (s, e, t) => e in s ? D(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var E = (s, e, t) => F(s, typeof e != "symbol" ? e + "" : e, t),
  _ = (s, e, t) => e.has(s) || x("Cannot " + t);
var p = (s, e, t) => (_(s, e, "read from private field"), t ? t.call(s) : e.get(s)),
  m = (s, e, t) => e.has(s) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t),
  I = (s, e, t, i) => (_(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t),
  A = (s, e, t) => (_(s, e, "access private method"), t);
import "./Bzak7iHL.js";
import {
  p as R,
  r as w,
  t as f,
  a as g,
  b as q,
  c as b,
  d as L,
  s as G
} from "./CV6xI6o5.js";
import {
  i as M
} from "./iywslKou.js";
import {
  a as C,
  b as S,
  c as P,
  s as z
} from "./rONmwD0j.js";
import {
  h as j
} from "./C-DdtWEO.js";
import {
  t as H
} from "./Ct12j0u0.js";
const N = 9,
  J = 95,
  Q = 45,
  k = 5;

function V(s) {
  return s.split("").reduce((e, t) => (e ^ t.charCodeAt(0)) * -k, k) >>> 2
}

function y(s = "", e = J, t = Q, i = V) {
  const l = i(s),
    c = l % N * (360 / N);
  return [...Array(s ? 25 : 0)].reduce((v, U, o) => l & 1 << o % 15 ? v + `<rect x="${o>14?7-~~(o/5):~~(o/5)}" y="${o%5}" width="1" height="1"/>` : v, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${c} ${e}% ${t}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var B, r, h, d, u, T, O;
(B = globalThis.customElements) != null && B.get("minidenticon-svg") || (O = globalThis.customElements) == null || O.define("minidenticon-svg", (r = class extends HTMLElement {
  constructor() {
    super(...arguments);
    m(this, u);
    m(this, d, !1)
  }
  connectedCallback() {
    A(this, u, T).call(this), I(this, d, !0)
  }
  attributeChangedCallback() {
    p(this, d) && A(this, u, T).call(this)
  }
}, h = new WeakMap, d = new WeakMap, u = new WeakSet, T = function() {
  var l;
  const t = r.observedAttributes.map(c => this.getAttribute(c) || void 0),
    i = t.join(",");
  this.innerHTML = (l = p(r, h))[i] ?? (l[i] = y(...t))
}, E(r, "observedAttributes", ["username", "saturation", "lightness"]), m(r, h, {}), r));
var W = b("<div></div>");

function X(s, e) {
  R(e, !0);
  var t = W();
  j(t, () => y(e.userId.toString(), 95, 45), !0), w(t), f(() => C(t, 1, `bg-base-200 minidenticon ${e.class??""??""}`)), g(s, t), q()
}
var Y = b('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  Z = b('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>'),
  K = b("<div><div><!></div> <!></div>");

function ne(s, e) {
  R(e, !0);
  var t = K(),
    i = L(t);
  S(i, "width: 67.76785714285714%");
  var l = L(i);
  {
    var c = a => {
        X(a, {
          get userId() {
            return e.userId
          }
        })
      },
      v = a => {
        var n = Y();
        f(() => z(n, "src", e.pictureUrl)), g(a, n)
      };
    M(l, a => {
      e.pictureUrl ? a(v, -1) : a(c)
    })
  }
  w(i);
  var U = G(i, 2);
  {
    var o = a => {
      var n = Z();
      S(n, "scale: 114.99999999999999%;"), f(() => z(n, "src", e.frameUrl)), g(a, n)
    };
    M(U, a => {
      e.frameUrl && a(o)
    })
  }
  w(t), f((a, n) => {
    C(t, 1, a), C(i, 1, n)
  }, [() => P(H("relative inline-grid size-10 place-items-center", e.class)), () => P(H("avatar border-base-300 aspect-square overflow-hidden rounded-full border", e.avatarClass))]), g(s, t), q()
}
export {
  ne as P, X as a
};