import {
  g as z
} from "./DM7nkZHP.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "898d81c1fd54065a15a1bfd2b6539ddebd5eab08"
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
}, u = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = u, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [d, s] = o.transformOrigin.split(" ").map(parseFloat);
  d /= t.clientWidth, s /= t.clientHeight;
  var f = H(t),
    b = t.clientWidth / r.width / f,
    p = t.clientHeight / r.height / f,
    v = e.left + e.width * d,
    m = e.top + e.height * s,
    w = r.left + r.width * d,
    x = r.top + r.height * s,
    l = (v - w) * b,
    c = (m - x) * p,
    S = e.width / r.width,
    _ = e.height / r.height;
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

function H(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  O as f, M as t
};