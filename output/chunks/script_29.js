import {
  g as h
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  v as z,
  b as D
} from "./apxRKl0u.js";
import {
  b as Z
} from "./DRcRj3o9.js";
import {
  r as L
} from "./DBMZVJyA.js";
const M = () => "Description",
  O = () => "Descrição",
  J = (t = {}, r = {}) => (r.locale ?? h()) === "en" ? M() : O(),
  H = t => `Copy alliance ID: #${t.allianceId}`,
  W = t => `Copiar ID da aliança: #${t.allianceId}`,
  K = (t, r = {}) => (r.locale ?? h()) === "en" ? H(t) : W(t);
var B = z('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function N(t, r) {
  let a = L(r, ["$$slots", "$$events", "$$legacy"]);
  var e = B();
  Z(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), D(t, e)
}

function E(t) {
  const r = t - 1;
  return r * r * r + 1
}

function P(t, {
  from: r,
  to: a
}, e = {}) {
  var {
    delay: f = 0,
    duration: o = n => Math.sqrt(n) * 120,
    easing: d = E
  } = e, s = getComputedStyle(t), g = s.transform === "none" ? "" : s.transform, [c, l] = s.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, l /= t.clientHeight;
  var u = F(t),
    m = t.clientWidth / a.width / u,
    y = t.clientHeight / a.height / u,
    _ = r.left + r.width * c,
    x = r.top + r.height * l,
    $ = a.left + a.width * c,
    w = a.top + a.height * l,
    p = (_ - $) * m,
    v = (x - w) * y,
    q = r.width / a.width,
    T = r.height / a.height;
  return {
    delay: f,
    duration: typeof o == "function" ? o(Math.sqrt(p * p + v * v)) : o,
    easing: d,
    css: (n, i) => {
      var C = i * p,
        S = i * v,
        I = n + i * q,
        b = n + i * T;
      return `transform: ${g} translate(${C}px, ${S}px) scale(${I}, ${b});`
    }
  }
}

function F(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var r = t, a = 1; r !== null;) a *= +getComputedStyle(r).zoom, r = r.parentElement;
  return a
}
export {
  N as L, K as c, J as d, P as f
};