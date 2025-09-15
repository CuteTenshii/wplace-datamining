import {
  g as z
} from "./Di_RRjlH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a2853da5197f1e8876a5229454a4e7ee1aa190e"
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
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = q
  } = c, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [f, s] = o.transformOrigin.split(" ").map(parseFloat);
  f /= e.clientWidth, s /= e.clientHeight;
  var u = H(e),
    p = e.clientWidth / r.width / u,
    v = e.clientHeight / r.height / u,
    b = t.left + t.width * f,
    m = t.top + t.height * s,
    w = r.left + r.width * f,
    x = r.top + r.height * s,
    l = (b - w) * p,
    d = (m - x) * v,
    S = t.width / r.width,
    _ = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + d * d)) : i,
    easing: y,
    css: (n, a) => {
      var T = a * l,
        E = a * d,
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