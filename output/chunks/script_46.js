(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3165cf74-2c30-440d-8753-7217d3d69437", t._sentryDebugIdIdentifier = "sentry-dbid-3165cf74-2c30-440d-8753-7217d3d69437")
  })()
} catch {}

function z(t) {
  const e = t - 1;
  return e * e * e + 1
}

function D(t, {
  from: e,
  to: r
}, u = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = z
  } = u, d = getComputedStyle(t), g = d.transform === "none" ? "" : d.transform, [f, o] = d.transformOrigin.split(" ").map(parseFloat);
  f /= t.clientWidth, o /= t.clientHeight;
  var c = C(t),
    v = t.clientWidth / r.width / c,
    p = t.clientHeight / r.height / c,
    b = e.left + e.width * f,
    w = e.top + e.height * o,
    x = r.left + r.width * f,
    m = r.top + r.height * o,
    s = (b - x) * v,
    l = (w - m) * p,
    S = e.width / r.width,
    E = e.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(s * s + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var _ = a * s,
        I = a * l,
        T = n + a * S,
        $ = n + a * E;
      return `transform: ${g} translate(${_}px, ${I}px) scale(${T}, ${$});`
    }
  }
}

function C(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  D as f
};