import {
  g as z
} from "./DwZ6mW66.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "abd976f8f8e90d32df6a1b04404d40d50ecf5fd4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3a3344c-4a57-4483-935e-ab308ee21d3d", e._sentryDebugIdIdentifier = "sentry-dbid-c3a3344c-4a57-4483-935e-ab308ee21d3d")
  })()
} catch {}
const C = () => "Timeout",
  D = () => "Timeout",
  L = (e = {}, t = {}) => (t.locale ?? z()) === "en" ? C() : D();

function M(e, t) {
  return t.includes(e)
}

function R(e) {
  const t = e - 1;
  return t * t * t + 1
}

function O(e, {
  from: t,
  to: n
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = r => Math.sqrt(r) * 120,
    easing: y = R
  } = c, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [d, s] = o.transformOrigin.split(" ").map(parseFloat);
  d /= e.clientWidth, s /= e.clientHeight;
  var u = q(e),
    p = e.clientWidth / n.width / u,
    v = e.clientHeight / n.height / u,
    b = t.left + t.width * d,
    m = t.top + t.height * s,
    w = n.left + n.width * d,
    x = n.top + n.height * s,
    l = (b - w) * p,
    f = (m - x) * v,
    S = t.width / n.width,
    _ = t.height / n.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + f * f)) : i,
    easing: y,
    css: (r, a) => {
      var T = a * l,
        E = a * f,
        I = r + a * S,
        $ = r + a * _;
      return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`
    }
  }
}

function q(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, n = 1; t !== null;) n *= +getComputedStyle(t).zoom, t = t.parentElement;
  return n
}
export {
  O as f, M as h, L as t
};