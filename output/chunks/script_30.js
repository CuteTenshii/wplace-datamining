import {
  g as z
} from "./C9GJVbtK.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "30f09f0230c485b726216ceb4465e7532bc1894f"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "996472fc-efae-40b2-8d8f-33554f5c057c", t._sentryDebugIdIdentifier = "sentry-dbid-996472fc-efae-40b2-8d8f-33554f5c057c")
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
}, u = {}) {
  var {
    delay: h = 0,
    duration: a = n => Math.sqrt(n) * 120,
    easing: y = q
  } = u, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [f, s] = o.transformOrigin.split(" ").map(parseFloat);
  f /= t.clientWidth, s /= t.clientHeight;
  var c = H(t),
    p = t.clientWidth / r.width / c,
    v = t.clientHeight / r.height / c,
    b = e.left + e.width * f,
    m = e.top + e.height * s,
    w = r.left + r.width * f,
    x = r.top + r.height * s,
    l = (b - w) * p,
    d = (m - x) * v,
    S = e.width / r.width,
    _ = e.height / r.height;
  return {
    delay: h,
    duration: typeof a == "function" ? a(Math.sqrt(l * l + d * d)) : a,
    easing: y,
    css: (n, i) => {
      var T = i * l,
        E = i * d,
        I = n + i * S,
        $ = n + i * _;
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