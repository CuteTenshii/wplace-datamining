var D = Object.defineProperty;
var E = t => {
  throw TypeError(t)
};
var F = (t, e, s) => e in t ? D(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[e] = s;
var S = (t, e, s) => F(t, typeof e != "symbol" ? e + "" : e, s),
  _ = (t, e, s) => e.has(t) || E("Cannot " + s);
var A = (t, e, s) => (_(t, e, "read from private field"), s ? s.call(t) : e.get(t)),
  m = (t, e, s) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s),
  I = (t, e, s, i) => (_(t, e, "write to private field"), i ? i.call(t, s) : e.set(t, s), s),
  w = (t, e, s) => (_(t, e, "access private method"), s);
import "./Bzak7iHL.js";
import {
  p as R,
  i as G,
  r as C,
  t as f,
  a as g,
  b as q,
  u as j,
  c as b,
  d as L,
  s as J
} from "./DmPVOt2G.js";
import {
  i as M
} from "./CPZ_RRGr.js";
import {
  a as T,
  b as P,
  c as z,
  s as H
} from "./C9hRcinp.js";
import {
  h as Q
} from "./Bpj4fnyy.js";
import {
  t as N
} from "./Ct12j0u0.js";
const k = 9,
  V = 95,
  W = 45,
  p = 5;

function X(t) {
  return t.split("").reduce((e, s) => (e ^ s.charCodeAt(0)) * -p, p) >>> 2
}

function y(t = "", e = V, s = W, i = X) {
  const l = i(t),
    d = l % k * (360 / k);
  return [...Array(t ? 25 : 0)].reduce((v, x, o) => l & 1 << o % 15 ? v + `<rect x="${o>14?7-~~(o/5):~~(o/5)}" y="${o%5}" width="1" height="1"/>` : v, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${e}% ${s}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var B, r, h, c, u, U, O;
(B = globalThis.customElements) != null && B.get("minidenticon-svg") || (O = globalThis.customElements) == null || O.define("minidenticon-svg", (r = class extends HTMLElement {
  constructor() {
    super(...arguments);
    m(this, u);
    m(this, c, !1)
  }
  connectedCallback() {
    w(this, u, U).call(this), I(this, c, !0)
  }
  attributeChangedCallback() {
    A(this, c) && w(this, u, U).call(this)
  }
}, h = new WeakMap, c = new WeakMap, u = new WeakSet, U = function() {
  var l;
  const s = r.observedAttributes.map(d => this.getAttribute(d) || void 0),
    i = s.join(",");
  this.innerHTML = (l = A(r, h))[i] ?? (l[i] = y(...s))
}, S(r, "observedAttributes", ["username", "saturation", "lightness"]), m(r, h, {}), r));
var Y = b("<div></div>");

function Z(t, e) {
  R(e, !0);
  const s = j(() => e.seed && e.seed.length > 0 ? e.seed : e.userId.toString());
  var i = Y();
  Q(i, () => y(G(s), 95, 45), !0), C(i), f(() => T(i, 1, `bg-base-200 minidenticon ${e.class??""??""}`)), g(t, i), q()
}
var K = b('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  $ = b('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>'),
  ee = b("<div><div><!></div> <!></div>");

function oe(t, e) {
  R(e, !0);
  var s = ee(),
    i = L(s);
  P(i, "width: 67.76785714285714%");
  var l = L(i);
  {
    var d = a => {
        Z(a, {
          get userId() {
            return e.userId
          },
          get seed() {
            return e.avatarSeed
          }
        })
      },
      v = a => {
        var n = K();
        f(() => H(n, "src", e.pictureUrl)), g(a, n)
      };
    M(l, a => {
      e.pictureUrl ? a(v, -1) : a(d)
    })
  }
  C(i);
  var x = J(i, 2);
  {
    var o = a => {
      var n = $();
      P(n, "scale: 114.99999999999999%;"), f(() => H(n, "src", e.frameUrl)), g(a, n)
    };
    M(x, a => {
      e.frameUrl && a(o)
    })
  }
  C(s), f((a, n) => {
    T(s, 1, a), T(i, 1, n)
  }, [() => z(N("relative inline-grid size-10 place-items-center", e.class)), () => z(N("avatar border-base-300 aspect-square overflow-hidden rounded-full border", e.avatarClass))]), g(t, s), q()
}
export {
  oe as P, Z as a
};