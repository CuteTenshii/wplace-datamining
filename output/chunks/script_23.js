import {
  g as z
} from "./DghIaI4W.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "052f352a026d022e3e4fc4fdcb3f4a54614f0cb2"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "1d9795f1-5997-42fd-9818-f9058f8b1d32", t._sentryDebugIdIdentifier = "sentry-dbid-1d9795f1-5997-42fd-9818-f9058f8b1d32")
  })()
} catch {}
const C = () => "Timeout",
  D = () => "Timeout",
  L = (t = {}, e = {}) => (e.locale ?? z()) === "en" ? C() : D();

function M(t, e) {
  return e.includes(t)
}

function R(t) {
  const e = t - 1;
  return e * e * e + 1
}

function O(t, {
  from: e,
  to: n
}, c = {}) {
  var {
    delay: h = 0,
    duration: a = r => Math.sqrt(r) * 120,
    easing: y = R
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [f, s] = o.transformOrigin.split(" ").map(parseFloat);
  f /= t.clientWidth, s /= t.clientHeight;
  var u = q(t),
    p = t.clientWidth / n.width / u,
    v = t.clientHeight / n.height / u,
    b = e.left + e.width * f,
    m = e.top + e.height * s,
    w = n.left + n.width * f,
    x = n.top + n.height * s,
    d = (b - w) * p,
    l = (m - x) * v,
    S = e.width / n.width,
    _ = e.height / n.height;
  return {
    delay: h,
    duration: typeof a == "function" ? a(Math.sqrt(d * d + l * l)) : a,
    easing: y,
    css: (r, i) => {
      var T = i * d,
        E = i * l,
        I = r + i * S,
        $ = r + i * _;
      return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`
    }
  }
}

function q(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, n = 1; e !== null;) n *= +getComputedStyle(e).zoom, e = e.parentElement;
  return n
}
export {
  O as f, M as h, L as t
};