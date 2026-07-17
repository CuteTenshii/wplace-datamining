import "./Bzak7iHL.js";
import {
  w as B,
  f as I,
  a as q,
  k as h
} from "./BKnGt6Ki.js";
import {
  i as k
} from "./C31cMBCe.js";
import {
  b as n
} from "./Czze0tKx.js";
import {
  r as w
} from "./Bu-IUIdW.js";

function L(r) {
  const t = r - 1;
  return t * t * t + 1
}

function Q(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: T = 0,
    duration: o = l => Math.sqrt(l) * 120,
    easing: p = L
  } = e, s = getComputedStyle(r), v = s.transform === "none" ? "" : s.transform, [c, g] = s.transformOrigin.split(" ").map(parseFloat);
  c /= r.clientWidth, g /= r.clientHeight;
  var u = O(r),
    d = r.clientWidth / a.width / u,
    $ = r.clientHeight / a.height / u,
    x = t.left + t.width * c,
    Z = t.top + t.height * g,
    y = a.left + a.width * c,
    _ = a.top + a.height * g,
    m = (x - y) * d,
    f = (Z - _) * $,
    S = t.width / a.width,
    C = t.height / a.height;
  return {
    delay: T,
    duration: typeof o == "function" ? o(Math.sqrt(m * m + f * f)) : o,
    easing: p,
    css: (l, i) => {
      var H = i * m,
        M = i * f,
        b = l + i * S,
        z = l + i * C;
      return `transform: ${v} translate(${H}px, ${M}px) scale(${b}, ${z});`
    }
  }
}

function O(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var P = new Set(["$$slots", "$$events", "$$legacy", "filled"]),
  U = h('<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>'),
  W = h('<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');

function R(r, t) {
  let a = w(t, P);
  var e = B(),
    T = I(e);
  {
    var o = s => {
        var v = U();
        n(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), q(s, v)
      },
      p = s => {
        var v = W();
        n(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), q(s, v)
      };
    k(T, s => {
      t.filled ? s(o) : s(p, -1)
    })
  }
  q(r, e)
}
var E = new Set(["$$slots", "$$events", "$$legacy"]),
  F = h('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function V(r, t) {
  let a = w(t, E);
  var e = F();
  n(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), q(r, e)
}
var j = new Set(["$$slots", "$$events", "$$legacy"]),
  A = h('<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>');

function X(r, t) {
  let a = w(t, j);
  var e = A();
  n(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), q(r, e)
}
export {
  R as H, X as P, V as U, Q as f
};