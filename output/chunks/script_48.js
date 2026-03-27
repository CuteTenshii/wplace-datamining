(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
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
  to: a
}, h = {}) {
  var {
    delay: u = 0,
    duration: i = e => Math.sqrt(e) * 120,
    easing: v = C
  } = h, d = getComputedStyle(t), y = d.transform === "none" ? "" : d.transform, [s, f] = d.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, f /= t.clientHeight;
  var c = D(t),
    g = t.clientWidth / a.width / c,
    p = t.clientHeight / a.height / c,
    b = r.left + r.width * s,
    w = r.top + r.height * f,
    x = a.left + a.width * s,
    m = a.top + a.height * f,
    o = (b - x) * g,
    l = (w - m) * p,
    S = r.width / a.width,
    E = r.height / a.height;
  return {
    delay: u,
    duration: typeof i == "function" ? i(Math.sqrt(o * o + l * l)) : i,
    easing: v,
    css: (e, n) => {
      var _ = n * o,
        I = n * l,
        $ = e + n * S,
        z = e + n * E;
      return `transform: ${y} translate(${_}px, ${I}px) scale(${$}, ${z});`
    }
  }
}

function D(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var r = t, a = 1; r !== null;) a *= +getComputedStyle(r).zoom, r = r.parentElement;
  return a
}
export {
  T as f
};