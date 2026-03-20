(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
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
  } = h, s = getComputedStyle(t), y = s.transform === "none" ? "" : s.transform, [d, f] = s.transformOrigin.split(" ").map(parseFloat);
  d /= t.clientWidth, f /= t.clientHeight;
  var c = D(t),
    g = t.clientWidth / e.width / c,
    p = t.clientHeight / e.height / c,
    b = r.left + r.width * d,
    w = r.top + r.height * f,
    x = e.left + e.width * d,
    m = e.top + e.height * f,
    o = (b - x) * g,
    l = (w - m) * p,
    S = r.width / e.width,
    E = r.height / e.height;
  return {
    delay: u,
    duration: typeof i == "function" ? i(Math.sqrt(o * o + l * l)) : i,
    easing: v,
    css: (a, n) => {
      var _ = n * o,
        I = n * l,
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