import {
  g as z
} from "./DeP5M3oG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "825bee11b3c7e8e1af0343e9a8e19271ca51e2c2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "75012cd1-f525-4e09-a6fd-91fd06ccd892", e._sentryDebugIdIdentifier = "sentry-dbid-75012cd1-f525-4e09-a6fd-91fd06ccd892")
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
}, u = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = u, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [d, s] = o.transformOrigin.split(" ").map(parseFloat);
  d /= e.clientWidth, s /= e.clientHeight;
  var c = H(e),
    p = e.clientWidth / r.width / c,
    v = e.clientHeight / r.height / c,
    b = t.left + t.width * d,
    m = t.top + t.height * s,
    w = r.left + r.width * d,
    x = r.top + r.height * s,
    f = (b - w) * p,
    l = (m - x) * v,
    S = t.width / r.width,
    _ = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(f * f + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * f,
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