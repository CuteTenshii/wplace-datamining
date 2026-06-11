import "./Bzak7iHL.js";
import {
  a as T,
  w as M
} from "./CV6xI6o5.js";
import {
  d as Z
} from "./g3dAVNmx.js";
import {
  r as b
} from "./BQ880tYw.js";

function O(r) {
  const t = r - 1;
  return t * t * t + 1
}

function k(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: f = 0,
    duration: n = s => Math.sqrt(s) * 120,
    easing: u = O
  } = e, o = getComputedStyle(r), g = o.transform === "none" ? "" : o.transform, [v, h] = o.transformOrigin.split(" ").map(parseFloat);
  v /= r.clientWidth, h /= r.clientHeight;
  var c = U(r),
    m = r.clientWidth / a.width / c,
    d = r.clientHeight / a.height / c,
    x = t.left + t.width * v,
    y = t.top + t.height * h,
    w = a.left + a.width * v,
    $ = a.top + a.height * h,
    l = (x - w) * m,
    p = (y - $) * d,
    S = t.width / a.width,
    q = t.height / a.height;
  return {
    delay: f,
    duration: typeof n == "function" ? n(Math.sqrt(l * l + p * p)) : n,
    easing: u,
    css: (s, i) => {
      var C = i * l,
        _ = i * p,
        z = s + i * S,
        H = s + i * q;
      return `transform: ${g} translate(${C}px, ${_}px) scale(${z}, ${H});`
    }
  }
}

function U(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var W = new Set(["$$slots", "$$events", "$$legacy"]),
  B = M('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function A(r, t) {
  let a = b(t, W);
  var e = B();
  Z(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), T(r, e)
}
export {
  A as U, k as f
};