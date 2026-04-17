var q = Object.defineProperty;
var C = t => {
  throw TypeError(t)
};
var F = (t, e, s) => e in t ? q(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[e] = s;
var U = (t, e, s) => F(t, typeof e != "symbol" ? e + "" : e, s),
  _ = (t, e, s) => e.has(t) || C("Cannot " + s);
var p = (t, e, s) => (_(t, e, "read from private field"), s ? s.call(t) : e.get(t)),
  b = (t, e, s) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s),
  x = (t, e, s, a) => (_(t, e, "write to private field"), a ? a.call(t, s) : e.set(t, s), s),
  w = (t, e, s) => (_(t, e, "access private method"), s);
import "./BHORAsI-.js";
import {
  p as H,
  d as E,
  r as y,
  t as v,
  a as g,
  b as B,
  c as h,
  s as G
} from "./Dcbzw1se.js";
import {
  i as S
} from "./EkgfBfpq.js";
import {
  a as A,
  f as L,
  c as D,
  s as M
} from "./DeKgkIEE.js";
import {
  h as j
} from "./Zm21RZ7B.js";
import {
  t as N
} from "./CM9pc2pa.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4c91c1f0-a2a3-464a-b207-e2a062e1e4e1", t._sentryDebugIdIdentifier = "sentry-dbid-4c91c1f0-a2a3-464a-b207-e2a062e1e4e1")
  } catch {}
})();
const P = 9,
  Y = 95,
  J = 45,
  R = 5;

function Q(t) {
  return t.split("").reduce((e, s) => (e ^ s.charCodeAt(0)) * -R, R) >>> 2
}

function O(t = "", e = Y, s = J, a = Q) {
  const o = a(t),
    d = o % P * (360 / P);
  return [...Array(t ? 25 : 0)].reduce((u, I, l) => o & 1 << l % 15 ? u + `<rect x="${l>14?7-~~(l/5):~~(l/5)}" y="${l%5}" width="1" height="1"/>` : u, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${e}% ${s}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var k, r, m, c, f, T, z;
(k = globalThis.customElements) != null && k.get("minidenticon-svg") || (z = globalThis.customElements) == null || z.define("minidenticon-svg", (r = class extends HTMLElement {
  constructor() {
    super(...arguments);
    b(this, f);
    b(this, c, !1)
  }
  connectedCallback() {
    w(this, f, T).call(this), x(this, c, !0)
  }
  attributeChangedCallback() {
    p(this, c) && w(this, f, T).call(this)
  }
}, m = new WeakMap, c = new WeakMap, f = new WeakSet, T = function() {
  var o;
  const s = r.observedAttributes.map(d => this.getAttribute(d) || void 0),
    a = s.join(",");
  this.innerHTML = (o = p(r, m))[a] ?? (o[a] = O(...s))
}, U(r, "observedAttributes", ["username", "saturation", "lightness"]), b(r, m, {}), r));
var V = h("<div><!></div>");

function W(t, e) {
  H(e, !0);
  var s = V(),
    a = E(s);
  j(a, () => O(e.userId.toString(), 95, 45)), y(s), v(() => A(s, 1, `bg-base-200 minidenticon ${e.class??""??""}`)), g(t, s), B()
}
var X = h('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  Z = h('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>'),
  K = h("<div><div><!></div> <!></div>");

function ne(t, e) {
  H(e, !0);
  var s = K(),
    a = E(s);
  L(a, "width: 67.76785714285714%");
  var o = E(a);
  {
    var d = i => {
        W(i, {
          get userId() {
            return e.userId
          }
        })
      },
      u = i => {
        var n = X();
        v(() => M(n, "src", e.pictureUrl)), g(i, n)
      };
    S(o, i => {
      e.pictureUrl ? i(u, !1) : i(d)
    })
  }
  y(a);
  var I = G(a, 2);
  {
    var l = i => {
      var n = Z();
      L(n, "scale: 114.99999999999999%;"), v(() => M(n, "src", e.frameUrl)), g(i, n)
    };
    S(I, i => {
      e.frameUrl && i(l)
    })
  }
  y(s), v((i, n) => {
    A(s, 1, i), A(a, 1, n)
  }, [() => D(N("relative inline-grid size-10 place-items-center", e.class)), () => D(N("avatar border-base-300 aspect-square overflow-hidden rounded-full border", e.avatarClass))]), g(t, s), B()
}
export {
  ne as P, W as a
};