import "./Bzak7iHL.js";
import {
  a as l,
  w as h,
  l as b,
  f as I
} from "./D5GL_E7i.js";
import {
  e as i
} from "./Ce1mtF2R.js";
import {
  r as w
} from "./LT-XNHCk.js";
import {
  i as L
} from "./unjGrhDm.js";

function Q(r) {
  return r
}

function O(r) {
  const t = r - 1;
  return t * t * t + 1
}
var P = new Set(["$$slots", "$$events", "$$legacy"]),
  U = h('<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>');

function R(r, t) {
  let a = w(t, P);
  var e = U();
  i(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), l(r, e)
}

function V(r, {
  from: t,
  to: a
}, e = {}) {
  var {
    delay: T = 0,
    duration: o = q => Math.sqrt(q) * 120,
    easing: c = O
  } = e, s = getComputedStyle(r), v = s.transform === "none" ? "" : s.transform, [p, g] = s.transformOrigin.split(" ").map(parseFloat);
  p /= r.clientWidth, g /= r.clientHeight;
  var u = W(r),
    d = r.clientWidth / a.width / u,
    $ = r.clientHeight / a.height / u,
    x = t.left + t.width * p,
    Z = t.top + t.height * g,
    y = a.left + a.width * p,
    _ = a.top + a.height * g,
    f = (x - y) * d,
    m = (Z - _) * $,
    S = t.width / a.width,
    C = t.height / a.height;
  return {
    delay: T,
    duration: typeof o == "function" ? o(Math.sqrt(f * f + m * m)) : o,
    easing: c,
    css: (q, n) => {
      var H = n * f,
        M = n * m,
        z = q + n * S,
        B = q + n * C;
      return `transform: ${v} translate(${H}px, ${M}px) scale(${z}, ${B});`
    }
  }
}

function W(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var k = new Set(["$$slots", "$$events", "$$legacy", "filled"]),
  E = h('<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>'),
  F = h('<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');

function X(r, t) {
  let a = w(t, k);
  var e = b(),
    T = I(e);
  {
    var o = s => {
        var v = E();
        i(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), l(s, v)
      },
      c = s => {
        var v = F();
        i(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), l(s, v)
      };
    L(T, s => {
      t.filled ? s(o) : s(c, -1)
    })
  }
  l(r, e)
}
var j = new Set(["$$slots", "$$events", "$$legacy"]),
  A = h('<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>');

function Y(r, t) {
  let a = w(t, j);
  var e = A();
  i(e, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), l(r, e)
}
export {
  X as H, Y as P, R as U, O as c, V as f, Q as l
};