var D = Object.defineProperty;
var E = s => {
  throw TypeError(s)
};
var F = (s, e, t) => e in s ? D(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var I = (s, e, t) => F(s, typeof e != "symbol" ? e + "" : e, t),
  _ = (s, e, t) => e.has(s) || E("Cannot " + t);
var p = (s, e, t) => (_(s, e, "read from private field"), t ? t.call(s) : e.get(s)),
  m = (s, e, t) => e.has(s) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t),
  L = (s, e, t, a) => (_(s, e, "write to private field"), a ? a.call(s, t) : e.set(s, t), t),
  A = (s, e, t) => (_(s, e, "access private method"), t);
import "./Bzak7iHL.js";
import {
  p as R,
  d as w,
  r as C,
  t as f,
  a as g,
  b as q,
  c as b,
  s as G
} from "./C21-Odj5.js";
import {
  i as M
} from "./CHICDTuh.js";
import {
  a as T,
  f as S,
  c as P,
  s as z
} from "./BO7gtcmY.js";
import {
  h as j
} from "./DmHSt3Fw.js";
import {
  t as H
} from "./CPcsbTWB.js";
const N = 9,
  J = 95,
  Q = 45,
  k = 5;

function V(s) {
  return s.split("").reduce((e, t) => (e ^ t.charCodeAt(0)) * -k, k) >>> 2
}

function y(s = "", e = J, t = Q, a = V) {
  const l = a(s),
    c = l % N * (360 / N);
  return [...Array(s ? 25 : 0)].reduce((v, x, o) => l & 1 << o % 15 ? v + `<rect x="${o>14?7-~~(o/5):~~(o/5)}" y="${o%5}" width="1" height="1"/>` : v, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${c} ${e}% ${t}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var B, r, h, d, u, U, O;
(B = globalThis.customElements) != null && B.get("minidenticon-svg") || (O = globalThis.customElements) == null || O.define("minidenticon-svg", (r = class extends HTMLElement {
  constructor() {
    super(...arguments);
    m(this, u);
    m(this, d, !1)
  }
  connectedCallback() {
    A(this, u, U).call(this), L(this, d, !0)
  }
  attributeChangedCallback() {
    p(this, d) && A(this, u, U).call(this)
  }
}, h = new WeakMap, d = new WeakMap, u = new WeakSet, U = function() {
  var l;
  const t = r.observedAttributes.map(c => this.getAttribute(c) || void 0),
    a = t.join(",");
  this.innerHTML = (l = p(r, h))[a] ?? (l[a] = y(...t))
}, I(r, "observedAttributes", ["username", "saturation", "lightness"]), m(r, h, {}), r));
var W = b("<div><!></div>");

function X(s, e) {
  R(e, !0);
  var t = W(),
    a = w(t);
  j(a, () => y(e.userId.toString(), 95, 45)), C(t), f(() => T(t, 1, `bg-base-200 minidenticon ${e.class??""??""}`)), g(s, t), q()
}
var Y = b('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  Z = b('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>'),
  K = b("<div><div><!></div> <!></div>");

function ne(s, e) {
  R(e, !0);
  var t = K(),
    a = w(t);
  S(a, "width: 67.76785714285714%");
  var l = w(a);
  {
    var c = i => {
        X(i, {
          get userId() {
            return e.userId
          }
        })
      },
      v = i => {
        var n = Y();
        f(() => z(n, "src", e.pictureUrl)), g(i, n)
      };
    M(l, i => {
      e.pictureUrl ? i(v, !1) : i(c)
    })
  }
  C(a);
  var x = G(a, 2);
  {
    var o = i => {
      var n = Z();
      S(n, "scale: 114.99999999999999%;"), f(() => z(n, "src", e.frameUrl)), g(i, n)
    };
    M(x, i => {
      e.frameUrl && i(o)
    })
  }
  C(t), f((i, n) => {
    T(t, 1, i), T(a, 1, n)
  }, [() => P(H("relative inline-grid size-10 place-items-center", e.class)), () => P(H("avatar border-base-300 aspect-square overflow-hidden rounded-full border", e.avatarClass))]), g(s, t), q()
}
export {
  ne as P, X as a
};