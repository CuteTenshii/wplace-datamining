(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b1e3b78-51b7-4ecf-8b2d-82d1c4886c5a", e._sentryDebugIdIdentifier = "sentry-dbid-4b1e3b78-51b7-4ecf-8b2d-82d1c4886c5a")
  })()
} catch {}

function C(e, t) {
  return t.includes(e)
}
const D = {
  user: "user",
  community_leader: "cl",
  moderator: "mod",
  global_moderator: "gm",
  admin: "admin"
};

function $(e) {
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
    easing: y = $
  } = c, d = getComputedStyle(e), g = d.transform === "none" ? "" : d.transform, [o, s] = d.transformOrigin.split(" ").map(parseFloat);
  o /= e.clientWidth, s /= e.clientHeight;
  var u = z(e),
    b = e.clientWidth / r.width / u,
    v = e.clientHeight / r.height / u,
    p = t.left + t.width * o,
    m = t.top + t.height * s,
    w = r.left + r.width * o,
    x = r.top + r.height * s,
    f = (p - w) * b,
    l = (m - x) * v,
    _ = t.width / r.width,
    S = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(f * f + l * l)) : i,
    easing: y,
    css: (n, a) => {
      var E = a * f,
        R = a * l,
        T = n + a * _,
        I = n + a * S;
      return `transform: ${g} translate(${E}px, ${R}px) scale(${T}, ${I});`
    }
  }
}

function z(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, r = 1; t !== null;) r *= +getComputedStyle(t).zoom, t = t.parentElement;
  return r
}
export {
  D as R, O as f, C as h
};