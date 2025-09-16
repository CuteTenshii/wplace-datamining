import {
  g as z
} from "./7aCKDKSw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "006a2571-16cf-4e2d-a979-d745fcc2e5eb", e._sentryDebugIdIdentifier = "sentry-dbid-006a2571-16cf-4e2d-a979-d745fcc2e5eb")
  })()
} catch {}
const C = () => "Timeout",
  D = () => "Timeout",
  M = (e = {}, t = {}) => (t.locale ?? z()) === "en" ? C() : D();

function q(e) {
  const t = e - 1;
  return t * t * t + 1
}

function O(e, {
  from: t,
  to: r
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = c, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [s, f] = o.transformOrigin.split(" ").map(parseFloat);
  s /= e.clientWidth, f /= e.clientHeight;
  var u = H(e),
    p = e.clientWidth / r.width / u,
    v = e.clientHeight / r.height / u,
    b = t.left + t.width * s,
    m = t.top + t.height * f,
    w = r.left + r.width * s,
    x = r.top + r.height * f,
    d = (b - w) * p,
    l = (m - x) * v,
    S = t.width / r.width,
    _ = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(d * d + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * d,
        E = a * l,
        I = n + a * S,
        $ = n + a * _;
      return `transform: ${g} translate(${T}px, ${E}px) scale(${I}, ${$});`
    }
  }
}

function H(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, r = 1; t !== null;) r *= +getComputedStyle(t).zoom, t = t.parentElement;
  return r
}
export {
  O as f, M as t
};