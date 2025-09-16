import {
  g as z
} from "./C8XJ1ixN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe728e8aec83db00e8678c288164b0147df8dfc8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "996472fc-efae-40b2-8d8f-33554f5c057c", e._sentryDebugIdIdentifier = "sentry-dbid-996472fc-efae-40b2-8d8f-33554f5c057c")
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
    duration: a = n => Math.sqrt(n) * 120,
    easing: y = q
  } = u, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [f, s] = o.transformOrigin.split(" ").map(parseFloat);
  f /= e.clientWidth, s /= e.clientHeight;
  var c = H(e),
    p = e.clientWidth / r.width / c,
    v = e.clientHeight / r.height / c,
    b = t.left + t.width * f,
    m = t.top + t.height * s,
    w = r.left + r.width * f,
    x = r.top + r.height * s,
    d = (b - w) * p,
    l = (m - x) * v,
    S = t.width / r.width,
    _ = t.height / r.height;
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

function H(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, r = 1; t !== null;) r *= +getComputedStyle(t).zoom, t = t.parentElement;
  return r
}
export {
  O as f, M as t
};