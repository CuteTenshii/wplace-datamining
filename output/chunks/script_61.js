import {
  G as e,
  Q as t,
  Tt as n,
  X as r,
  Y as i,
  o as a,
  y as o
} from "./D6uuD926.js";
import "./B8UK1oE5.js";

function s(e) {
  return e
}

function c(e) {
  let t = e - 1;
  return t * t * t + 1
}
var l = new Set([`$$slots`, `$$events`, `$$legacy`]),
  u = t(`<svg><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path></svg>`);

function d(e, t) {
  let n = a(t, l);
  var r = u();
  o(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), i(e, r)
}

function f(e, {
  from: t,
  to: n
}, r = {}) {
  var {
    delay: i = 0,
    duration: a = e => Math.sqrt(e) * 120,
    easing: o = c
  } = r, s = getComputedStyle(e), l = s.transform === `none` ? `` : s.transform, [u, d] = s.transformOrigin.split(` `).map(parseFloat);
  u /= e.clientWidth, d /= e.clientHeight;
  var f = p(e),
    m = e.clientWidth / n.width / f,
    h = e.clientHeight / n.height / f,
    g = t.left + t.width * u,
    _ = t.top + t.height * d,
    v = n.left + n.width * u,
    y = n.top + n.height * d,
    b = (g - v) * m,
    x = (_ - y) * h,
    S = t.width / n.width,
    C = t.height / n.height;
  return {
    delay: i,
    duration: typeof a == `function` ? a(Math.sqrt(b * b + x * x)) : a,
    easing: o,
    css: (e, t) => `transform: ${l} translate(${t*b}px, ${t*x}px) scale(${e+t*S}, ${e+t*C});`
  }
}

function p(e) {
  if (`currentCSSZoom` in e) return e.currentCSSZoom;
  for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
  return n
}
var m = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  h = t(`<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>`),
  g = t(`<svg><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>`);

function _(t, s) {
  let c = a(s, m);
  var l = r(),
    u = n(l),
    d = e => {
      var t = h();
      o(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...c
      })), i(e, t)
    },
    f = e => {
      var t = g();
      o(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...c
      })), i(e, t)
    };
  e(u, e => {
    s.filled ? e(d) : e(f, -1)
  }), i(t, l)
}
var v = new Set([`$$slots`, `$$events`, `$$legacy`]),
  y = t(`<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>`);

function b(e, t) {
  let n = a(t, v);
  var r = y();
  o(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), i(e, r)
}
export {
  c as a, d as i, _ as n, s as o, f as r, b as t
};