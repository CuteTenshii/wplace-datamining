import "./Bzak7iHL.js";
import {
  a as o,
  w as n
} from "./CxLQz1V2.js";
import {
  d as l
} from "./0rgL9IxG.js";
import {
  r as i
} from "./C_QAuGIk.js";

function B(r) {
  const t = r - 1;
  return t * t * t + 1
}

function J(r, {
  from: t,
  to: e
}, s = {}) {
  var {
    delay: m = 0,
    duration: h = v => Math.sqrt(v) * 120,
    easing: f = B
  } = s, p = getComputedStyle(r), x = p.transform === "none" ? "" : p.transform, [c, g] = p.transformOrigin.split(" ").map(parseFloat);
  c /= r.clientWidth, g /= r.clientHeight;
  var u = L(r),
    d = r.clientWidth / e.width / u,
    q = r.clientHeight / e.height / u,
    T = t.left + t.width * c,
    y = t.top + t.height * g,
    Z = e.left + e.width * c,
    C = e.top + e.height * g,
    $ = (T - Z) * d,
    w = (y - C) * q,
    S = t.width / e.width,
    H = t.height / e.height;
  return {
    delay: m,
    duration: typeof h == "function" ? h(Math.sqrt($ * $ + w * w)) : h,
    easing: f,
    css: (v, a) => {
      var _ = a * $,
        M = a * w,
        I = v + a * S,
        z = v + a * H;
      return `transform: ${x} translate(${_}px, ${M}px) scale(${I}, ${z});`
    }
  }
}

function L(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, e = 1; t !== null;) e *= +getComputedStyle(t).zoom, t = t.parentElement;
  return e
}
var b = new Set(["$$slots", "$$events", "$$legacy"]),
  O = n('<svg><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"></path></svg>');

function K(r, t) {
  let e = i(t, b);
  var s = O();
  l(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...e
  })), o(r, s)
}
var P = new Set(["$$slots", "$$events", "$$legacy"]),
  U = n('<svg><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');

function N(r, t) {
  let e = i(t, P);
  var s = U();
  l(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(r, s)
}
var W = new Set(["$$slots", "$$events", "$$legacy"]),
  k = n('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function Q(r, t) {
  let e = i(t, W);
  var s = k();
  l(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(r, s)
}
var E = new Set(["$$slots", "$$events", "$$legacy"]),
  F = n('<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>');

function R(r, t) {
  let e = i(t, E);
  var s = F();
  l(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(r, s)
}
export {
  N as C, K as I, R as P, Q as U, J as f
};