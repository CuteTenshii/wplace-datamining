import {
  g as z
} from "./DNe0cQT0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
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
}, f = {}) {
  var {
    delay: h = 0,
    duration: i = r => Math.sqrt(r) * 120,
    easing: y = R
  } = f, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= e.clientWidth, d /= e.clientHeight;
  var c = q(e),
    p = e.clientWidth / n.width / c,
    v = e.clientHeight / n.height / c,
    b = t.left + t.width * s,
    m = t.top + t.height * d,
    w = n.left + n.width * s,
    x = n.top + n.height * d,
    l = (b - w) * p,
    u = (m - x) * v,
    S = t.width / n.width,
    _ = t.height / n.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + u * u)) : i,
    easing: y,
    css: (r, a) => {
      var T = a * l,
        E = a * u,
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