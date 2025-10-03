import {
  g as z
} from "./BHVh6a9r.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "123067dbd61a163d94930a4efc762fdca932af1b"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "313fd94b-226d-4ab2-a7f2-bae559d4c0bf", t._sentryDebugIdIdentifier = "sentry-dbid-313fd94b-226d-4ab2-a7f2-bae559d4c0bf")
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
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [d, f] = o.transformOrigin.split(" ").map(parseFloat);
  d /= t.clientWidth, f /= t.clientHeight;
  var u = H(t),
    b = t.clientWidth / r.width / u,
    p = t.clientHeight / r.height / u,
    v = e.left + e.width * d,
    m = e.top + e.height * f,
    w = r.left + r.width * d,
    x = r.top + r.height * f,
    s = (v - w) * b,
    l = (m - x) * p,
    S = e.width / r.width,
    _ = e.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(s * s + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * s,
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