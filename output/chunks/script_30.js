import {
  g as z
} from "./BnlU_GE9.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "c15cd1ace8f581becdea18dd6b1672f67db80587"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "75012cd1-f525-4e09-a6fd-91fd06ccd892", t._sentryDebugIdIdentifier = "sentry-dbid-75012cd1-f525-4e09-a6fd-91fd06ccd892")
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
  var c = H(t),
    p = t.clientWidth / r.width / c,
    v = t.clientHeight / r.height / c,
    b = e.left + e.width * d,
    m = e.top + e.height * s,
    w = r.left + r.width * d,
    x = r.top + r.height * s,
    f = (b - w) * p,
    l = (m - x) * v,
    S = e.width / r.width,
    _ = e.height / r.height;
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

function H(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  O as f, M as t
};