import {
  g as z
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  v as Z,
  b as L
} from "./B6s--CY1.js";
import {
  b as M
} from "./B-MUH0Pm.js";
import {
  r as O
} from "./DCOkPuhX.js";
const D = () => "Description",
  H = () => "Descrição",
  A = (r = {}, t = {}) => (t.locale ?? z()) === "en" ? D() : H();
var W = Z('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function G(r, t) {
  let a = O(t, ["$$slots", "$$events", "$$legacy"]);
  var e = W();
  M(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), L(r, e)
}

function B(r) {
  const t = r - 1;
  return t * t * t + 1
}

function J(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: u = 0,
    duration: o = i => Math.sqrt(i) * 120,
    easing: f = B
  } = e, s = getComputedStyle(r), g = s.transform === "none" ? "" : s.transform, [c, p] = s.transformOrigin.split(" ").map(parseFloat);
  c /= r.clientWidth, p /= r.clientHeight;
  var h = E(r),
    m = r.clientWidth / a.width / h,
    d = r.clientHeight / a.height / h,
    y = t.left + t.width * c,
    x = t.top + t.height * p,
    w = a.left + a.width * c,
    $ = a.top + a.height * p,
    l = (y - w) * m,
    v = (x - $) * d,
    q = t.width / a.width,
    T = t.height / a.height;
  return {
    delay: u,
    duration: typeof o == "function" ? o(Math.sqrt(l * l + v * v)) : o,
    easing: f,
    css: (i, n) => {
      var S = n * l,
        _ = n * v,
        C = i + n * q,
        b = i + n * T;
      return `transform: ${g} translate(${S}px, ${_}px) scale(${C}, ${b});`
    }
  }
}

function E(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
export {
  G as L, A as d, J as f
};