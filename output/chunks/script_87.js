import {
  Gt as e,
  Ht as t,
  Ut as n,
  Vt as r,
  Wt as i,
  un as a
} from "./DXDHrD2o.js";
var o, s, c, l, u, d, f = 9,
  p = 95,
  m = 45,
  h = 5;

function g(e) {
  return e.split(``).reduce((e, t) => (e ^ t.charCodeAt(0)) * -5, h) >>> 2
}

function _(e = ``, t = p, n = m, r = g) {
  let i = r(e),
    a = i % f * (360 / f);
  return [...Array(e ? 25 : 0)].reduce((e, t, n) => i & 1 << n % 15 ? e + `<rect x="${n>14?7-~~(n/5):~~(n/5)}" y="${n%5}" width="1" height="1"/>` : e, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${a} ${t}% ${n}%)" shape-rendering="crispEdges">`) + `</svg>`
}(o = globalThis.customElements) != null && o.get(`minidenticon-svg`) || (s = globalThis.customElements) == null || s.define(`minidenticon-svg`, (u = new WeakMap, d = new WeakSet, c = class extends HTMLElement {
  constructor(...t) {
    super(...t), e(this, d), i(this, u, !1)
  }
  connectedCallback() {
    n(d, this, v).call(this), t(u, this, !0)
  }
  attributeChangedCallback() {
    r(u, this) && n(d, this, v).call(this)
  }
}, a(c, `observedAttributes`, [`username`, `saturation`, `lightness`]), l = {
  _: {}
}, c));

function v() {
  var e;
  let t = c.observedAttributes.map(e => this.getAttribute(e) || void 0),
    r = t.join(`,`);
  this.innerHTML = (e = n(c, c, l)._)[r] ?? (e[r] = _(...t))
}
export {
  _ as t
};