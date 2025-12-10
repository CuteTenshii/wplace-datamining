(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2d93caab31ad43e5d9e57c08634e0a6280bfa30c"
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
  } = u, d = getComputedStyle(e), g = d.transform === "none" ? "" : d.transform, [o, s] = d.transformOrigin.split(" ").map(parseFloat);
  o /= e.clientWidth, s /= e.clientHeight;
  var c = C(e),
    v = e.clientWidth / r.width / c,
    p = e.clientHeight / r.height / c,
    b = t.left + t.width * o,
    w = t.top + t.height * s,
    x = r.left + r.width * o,
    m = r.top + r.height * s,
    f = (b - x) * v,
    l = (w - m) * p,
    S = t.width / r.width,
    E = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(f * f + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var _ = a * f,
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