import {
  g as z
} from "./Dk78P9j5.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "9b2648606e2bb7a01bef003b9890229599179c1c"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "dcdc3bc1-2905-4a7a-b382-b2ec639c05ea", t._sentryDebugIdIdentifier = "sentry-dbid-dcdc3bc1-2905-4a7a-b382-b2ec639c05ea")
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
}, f = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = f, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, l] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, l /= t.clientHeight;
  var u = H(t),
    b = t.clientWidth / r.width / u,
    p = t.clientHeight / r.height / u,
    v = e.left + e.width * s,
    m = e.top + e.height * l,
    w = r.left + r.width * s,
    x = r.top + r.height * l,
    c = (v - w) * b,
    d = (m - x) * p,
    S = e.width / r.width,
    _ = e.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(c * c + d * d)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * c,
        E = a * d,
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