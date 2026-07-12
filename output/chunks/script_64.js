import "./Bzak7iHL.js";
import {
  a as g,
  w as f
} from "./Dkgr_Dbt.js";
import {
  e as u
} from "./tzSUQnZi.js";
import {
  r as m
} from "./DOQuOeXT.js";

function B(r) {
  const t = r - 1;
  return t * t * t + 1
}

function k(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: q = 0,
    duration: o = v => Math.sqrt(v) * 120,
    easing: w = B
  } = e, n = getComputedStyle(r), $ = n.transform === "none" ? "" : n.transform, [i, h] = n.transformOrigin.split(" ").map(parseFloat);
  i /= r.clientWidth, h /= r.clientHeight;
  var c = I(r),
    d = r.clientWidth / a.width / c,
    x = r.clientHeight / a.height / c,
    y = t.left + t.width * i,
    T = t.top + t.height * h,
    Z = a.left + a.width * i,
    S = a.top + a.height * h,
    l = (y - Z) * d,
    p = (T - S) * x,
    C = t.width / a.width,
    H = t.height / a.height;
  return {
    delay: q,
    duration: typeof o == "function" ? o(Math.sqrt(l * l + p * p)) : o,
    easing: w,
    css: (v, s) => {
      var _ = s * l,
        M = s * p,
        z = v + s * C,
        b = v + s * H;
      return `transform: ${$} translate(${_}px, ${M}px) scale(${z}, ${b});`
    }
  }
}

function I(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var L = new Set(["$$slots", "$$events", "$$legacy"]),
  O = f('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function A(r, t) {
  let a = m(t, L);
  var e = O();
  u(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), g(r, e)
}
var P = new Set(["$$slots", "$$events", "$$legacy"]),
  U = f('<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>');

function D(r, t) {
  let a = m(t, P);
  var e = U();
  u(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), g(r, e)
}
export {
  D as P, A as U, k as f
};