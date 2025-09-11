import {
  g as z
} from "./etMdSgD_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
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
}, u = {}) {
  var {
    delay: h = 0,
    duration: a = n => Math.sqrt(n) * 120,
    easing: y = q
  } = u, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, f] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, f /= t.clientHeight;
  var c = H(t),
    p = t.clientWidth / r.width / c,
    v = t.clientHeight / r.height / c,
    b = e.left + e.width * s,
    m = e.top + e.height * f,
    w = r.left + r.width * s,
    x = r.top + r.height * f,
    d = (b - w) * p,
    l = (m - x) * v,
    S = e.width / r.width,
    _ = e.height / r.height;
  return {
    delay: h,
    duration: typeof a == "function" ? a(Math.sqrt(d * d + l * l)) : a,
    easing: y,
    css: (n, i) => {
      var T = i * d,
        E = i * l,
        I = n + i * S,
        $ = n + i * _;
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