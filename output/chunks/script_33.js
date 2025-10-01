import {
  g as z
} from "./MkhDhP69.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "62927027eb35380145df236b415c7021973de3ee"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dcdc3bc1-2905-4a7a-b382-b2ec639c05ea", e._sentryDebugIdIdentifier = "sentry-dbid-dcdc3bc1-2905-4a7a-b382-b2ec639c05ea")
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
}, f = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = f, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= e.clientWidth, d /= e.clientHeight;
  var u = H(e),
    p = e.clientWidth / r.width / u,
    v = e.clientHeight / r.height / u,
    b = t.left + t.width * s,
    m = t.top + t.height * d,
    w = r.left + r.width * s,
    x = r.top + r.height * d,
    l = (b - w) * p,
    c = (m - x) * v,
    S = t.width / r.width,
    _ = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + c * c)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * l,
        E = a * c,
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