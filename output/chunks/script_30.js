import {
  g as z
} from "./DfN8llDv.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "4097d37663b9a72f9231b790868cce52a6a81192"
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
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [f, s] = o.transformOrigin.split(" ").map(parseFloat);
  f /= t.clientWidth, s /= t.clientHeight;
  var u = H(t),
    p = t.clientWidth / r.width / u,
    v = t.clientHeight / r.height / u,
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
    duration: typeof i == "function" ? i(Math.sqrt(l * l + d * d)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * l,
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