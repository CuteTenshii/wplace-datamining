import {
  g as z
} from "./B_rlGoi1.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "7278ed977b90641928943db9499ca73f82620c56"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "006a2571-16cf-4e2d-a979-d745fcc2e5eb", t._sentryDebugIdIdentifier = "sentry-dbid-006a2571-16cf-4e2d-a979-d745fcc2e5eb")
  })()
} catch {}
const C = () => "Timeout",
  D = () => "Timeout",
  M = (t = {}, e = {}) => (e.locale ?? z()) === "en" ? C() : D();

function q(t) {
  const e = t - 1;
  return e * e * e + 1
}

function O(t, {
  from: e,
  to: r
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, d /= t.clientHeight;
  var u = H(t),
    p = t.clientWidth / r.width / u,
    v = t.clientHeight / r.height / u,
    b = e.left + e.width * s,
    m = e.top + e.height * d,
    w = r.left + r.width * s,
    x = r.top + r.height * d,
    l = (b - w) * p,
    f = (m - x) * v,
    S = e.width / r.width,
    _ = e.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + f * f)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * l,
        E = a * f,
        I = n + a * S,
        $ = n + a * _;
      return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`
    }
  }
}

function H(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  O as f, M as t
};