import {
  g as $
} from "./CC4jxA2W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "35431fbb-4442-49e1-baf1-9c1ad14c8590", e._sentryDebugIdIdentifier = "sentry-dbid-35431fbb-4442-49e1-baf1-9c1ad14c8590")
  })()
} catch {}
const z = () => "Timeout",
  C = () => "Timeout",
  L = (e = {}, t = {}) => (t.locale ?? $()) === "en" ? z() : C();

function M(e, t) {
  return t.includes(e)
}
const q = {
  user: "user",
  community_leader: "cl",
  moderator: "mod",
  global_moderator: "gm",
  admin: "admin"
};

function D(e) {
  const t = e - 1;
  return t * t * t + 1
}

function A(e, {
  from: t,
  to: r
}, f = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = D
  } = f, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= e.clientWidth, d /= e.clientHeight;
  var c = O(e),
    p = e.clientWidth / r.width / c,
    m = e.clientHeight / r.height / c,
    v = t.left + t.width * s,
    b = t.top + t.height * d,
    w = r.left + r.width * s,
    _ = r.top + r.height * d,
    l = (v - w) * p,
    u = (b - _) * m,
    x = t.width / r.width,
    S = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + u * u)) : i,
    easing: y,
    css: (n, a) => {
      var E = a * l,
        T = a * u,
        R = n + a * x,
        I = n + a * S;
      return `transform: ${g} translate(${E}px, ${T}px) scale(${R}, ${I});`
    }
  }
}

function O(e) {
  if ("currentCSSZoom" in e) return e.currentCSSZoom;
  for (var t = e, r = 1; t !== null;) r *= +getComputedStyle(t).zoom, t = t.parentElement;
  return r
}
export {
  q as R, A as f, M as h, L as t
};