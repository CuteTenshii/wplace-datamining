import {
  g as M
} from "./C5GsJ62f.js";
const O = () => "Timeout",
  T = () => "Timeout",
  E = (r = {}, t = {}) => (t.locale ?? M()) === "en" ? O() : T();

function W(r) {
  const t = r - 1;
  return t * t * t + 1
}

function F(r, {
  from: t,
  to: a
}, v = {}) {
  var {
    delay: p = 0,
    duration: n = e => Math.sqrt(e) * 120,
    easing: f = W
  } = v, o = getComputedStyle(r), m = o.transform === "none" ? "" : o.transform, [s, u] = o.transformOrigin.split(" ").map(parseFloat);
  s /= r.clientWidth, u /= r.clientHeight;
  var h = Z(r),
    g = r.clientWidth / a.width / h,
    y = r.clientHeight / a.height / h,
    d = t.left + t.width * s,
    x = t.top + t.height * u,
    w = a.left + a.width * s,
    S = a.top + a.height * u,
    c = (d - w) * g,
    l = (x - S) * y,
    $ = t.width / a.width,
    z = t.height / a.height;
  return {
    delay: p,
    duration: typeof n == "function" ? n(Math.sqrt(c * c + l * l)) : n,
    easing: f,
    css: (e, i) => {
      var C = i * c,
        _ = i * l,
        q = e + i * $,
        H = e + i * z;
      return `transform: ${m} translate(${C}px, ${_}px) scale(${q}, ${H});`
    }
  }
}

function Z(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
export {
  F as f, E as t
};