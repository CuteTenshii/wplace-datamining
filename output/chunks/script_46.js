(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1dee92bf582c1a78c458cd2ea7a5f29a8123460e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3165cf74-2c30-440d-8753-7217d3d69437", e._sentryDebugIdIdentifier = "sentry-dbid-3165cf74-2c30-440d-8753-7217d3d69437")
  })()
} catch {}

function z(e) {
  const t = e - 1;
  return t * t * t + 1
}

function D(e, {
  from: t,
  to: r
}, u = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = z
  } = u, d = getComputedStyle(e), g = d.transform === "none" ? "" : d.transform, [f, o] = d.transformOrigin.split(" ").map(parseFloat);
  f /= e.clientWidth, o /= e.clientHeight;
  var c = C(e),
    v = e.clientWidth / r.width / c,
    p = e.clientHeight / r.height / c,
    b = t.left + t.width * f,
    w = t.top + t.height * o,
    x = r.left + r.width * f,
    m = r.top + r.height * o,
    s = (b - x) * v,
    l = (w - m) * p,
    S = t.width / r.width,
    E = t.height / r.height;
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

function C(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, r = 1; t !== null;) r *= +getComputedStyle(t).zoom, t = t.parentElement;
  return r
}
export {
  D as f
};