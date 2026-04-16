(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "3165cf74-2c30-440d-8753-7217d3d69437", t._sentryDebugIdIdentifier = "sentry-dbid-3165cf74-2c30-440d-8753-7217d3d69437")
  } catch {}
})();

function C(t) {
  const r = t - 1;
  return r * r * r + 1
}

function T(t, {
  from: r,
  to: e
}, h = {}) {
  var {
    delay: u = 0,
    duration: i = a => Math.sqrt(a) * 120,
    easing: v = C
  } = h, d = getComputedStyle(t), y = d.transform === "none" ? "" : d.transform, [s, c] = d.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, c /= t.clientHeight;
  var l = D(t),
    g = t.clientWidth / e.width / l,
    p = t.clientHeight / e.height / l,
    b = r.left + r.width * s,
    w = r.top + r.height * c,
    x = e.left + e.width * s,
    m = e.top + e.height * c,
    f = (b - x) * g,
    o = (w - m) * p,
    S = r.width / e.width,
    E = r.height / e.height;
  return {
    delay: u,
    duration: typeof i == "function" ? i(Math.sqrt(f * f + o * o)) : i,
    easing: v,
    css: (a, n) => {
      var _ = n * f,
        I = n * o,
        $ = a + n * S,
        z = a + n * E;
      return `transform: ${y} translate(${_}px, ${I}px) scale(${$}, ${z});`
    }
  }
}

function D(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var r = t, e = 1; r !== null;) e *= +getComputedStyle(r).zoom, r = r.parentElement;
  return e
}
export {
  T as f
};