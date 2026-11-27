import {
  C as e,
  Y as t,
  en as n,
  et as r,
  jt as i,
  o as a,
  rt as o,
  tn as s,
  tt as c
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as l
} from "./DduSK_CN.js";
import {
  t as u
} from "./CgTemYMo.js";

function d(e, {
  from: t,
  to: n
}, r = {}) {
  var {
    delay: i = 0,
    duration: a = e => Math.sqrt(e) * 120,
    easing: o = u
  } = r, s = getComputedStyle(e), c = s.transform === `none` ? `` : s.transform, [l, d] = s.transformOrigin.split(` `).map(parseFloat);
  l /= e.clientWidth, d /= e.clientHeight;
  var p = f(e),
    m = e.clientWidth / n.width / p,
    h = e.clientHeight / n.height / p,
    g = t.left + t.width * l,
    _ = t.top + t.height * d,
    v = n.left + n.width * l,
    y = n.top + n.height * d,
    b = (g - v) * m,
    x = (_ - y) * h,
    S = t.width / n.width,
    C = t.height / n.height;
  return {
    delay: i,
    duration: typeof a == `function` ? a(Math.sqrt(b * b + x * x)) : a,
    easing: o,
    css: (e, t) => `transform: ${c} translate(${t*b}px, ${t*x}px) scale(${e+t*S}, ${e+t*C});`
  }
}

function f(e) {
  if (`currentCSSZoom` in e) return e.currentCSSZoom;
  for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
  return n
}
var p = new Set([`$$slots`, `$$events`, `$$legacy`]),
  m = o(`<svg><path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v433l-97-27 102 102q5 5 12.5 8.5T593-120h167q33 0 56.5-23.5T840-200v-160q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Zm7-280v-160q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v160h-80Zm120 0v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120h-80Zm-20 80Z"></path></svg>`),
  h = o(`<svg><path d="M2 2h6v2H6v2H4v2H2V2Zm6 6h2v2h2V8h2v6H8v-2h2l-2-2V8Zm8-6h4v8h2v2h2v8h-2v2H10v-2H8v-2H6v-4h4v2h4V4h2V2Zm0 2v14h-6v-2H8v2h2v2h10v-2h2v-4h-2v-2h-2V4h-2Z"></path></svg>`);

function g(o, u) {
  s(u, !0);
  let d = l(),
    f = a(u, p);
  var g = c(),
    _ = i(g),
    v = t => {
      var n = m();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...f
      })), r(t, n)
    },
    y = t => {
      var n = h();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...f
      })), r(t, n)
    };
  t(_, e => {
    d.standard ? e(v) : e(y, -1)
  }), r(o, g), n()
}
export {
  d as n, g as t
};