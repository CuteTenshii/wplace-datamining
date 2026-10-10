import {
  Bt as e,
  Lt as t,
  Rt as n,
  Vt as r,
  on as i,
  zt as a
} from "./D2z8HFb7.js";
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
    super(...t), r(this, d), e(this, u, !1)
  }
  connectedCallback() {
    a(d, this, v).call(this), n(u, this, !0)
  }
  attributeChangedCallback() {
    t(u, this) && a(d, this, v).call(this)
  }
}, i(c, `observedAttributes`, [`username`, `saturation`, `lightness`]), l = {
  _: {}
}, c));

function v() {
  var e;
  let t = c.observedAttributes.map(e => this.getAttribute(e) || void 0),
    n = t.join(`,`);
  this.innerHTML = (e = a(c, c, l)._)[n] ?? (e[n] = _(...t))
}
export {
  _ as t
};