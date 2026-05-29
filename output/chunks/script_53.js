import "./Bzak7iHL.js";
import {
  a as _,
  w as M
} from "./Dbe4PVAU.js";
import {
  d as Z
} from "./B7_gUtXa.js";
import {
  r as b
} from "./K9AHFDoV.js";

function O(r) {
  const t = r - 1;
  return t * t * t + 1
}

function j(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: f = 0,
    duration: n = i => Math.sqrt(i) * 120,
    easing: g = O
  } = e, o = getComputedStyle(r), u = o.transform === "none" ? "" : o.transform, [v, h] = o.transformOrigin.split(" ").map(parseFloat);
  v /= r.clientWidth, h /= r.clientHeight;
  var c = U(r),
    m = r.clientWidth / a.width / c,
    d = r.clientHeight / a.height / c,
    y = t.left + t.width * v,
    x = t.top + t.height * h,
    w = a.left + a.width * v,
    $ = a.top + a.height * h,
    p = (y - w) * m,
    l = (x - $) * d,
    q = t.width / a.width,
    S = t.height / a.height;
  return {
    delay: f,
    duration: typeof n == "function" ? n(Math.sqrt(p * p + l * l)) : n,
    easing: g,
    css: (i, s) => {
      var C = s * p,
        z = s * l,
        H = i + s * q,
        T = i + s * S;
      return `transform: ${u} translate(${C}px, ${z}px) scale(${H}, ${T});`
    }
  }
}

function U(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var W = M('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function k(r, t) {
  let a = b(t, ["$$slots", "$$events", "$$legacy"]);
  var e = W();
  Z(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), _(r, e)
}
export {
  k as U, j as f
};