(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
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
}, c = {}) {
  var {
    delay: h = 0,
    duration: a = n => Math.sqrt(n) * 120,
    easing: y = z
  } = c, d = getComputedStyle(t), g = d.transform === "none" ? "" : d.transform, [f, o] = d.transformOrigin.split(" ").map(parseFloat);
  f /= t.clientWidth, o /= t.clientHeight;
  var u = C(t),
    v = t.clientWidth / r.width / u,
    b = t.clientHeight / r.height / u,
    p = e.left + e.width * f,
    w = e.top + e.height * o,
    x = r.left + r.width * f,
    m = r.top + r.height * o,
    s = (p - x) * v,
    l = (w - m) * b,
    S = e.width / r.width,
    E = e.height / r.height;
  return {
    delay: h,
    duration: typeof a == "function" ? a(Math.sqrt(s * s + l * l)) : a,
    easing: y,
    css: (n, i) => {
      var _ = i * s,
        I = i * l,
        T = n + i * S,
        $ = n + i * E;
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