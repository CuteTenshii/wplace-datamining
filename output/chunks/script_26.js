import {
  g as $
} from "./DO1P0MAk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6f145a17-1c95-429a-b6a2-7fc2acbd3147", e._sentryDebugIdIdentifier = "sentry-dbid-6f145a17-1c95-429a-b6a2-7fc2acbd3147")
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
  var u = O(e),
    p = e.clientWidth / r.width / u,
    m = e.clientHeight / r.height / u,
    v = t.left + t.width * s,
    b = t.top + t.height * d,
    w = r.left + r.width * s,
    _ = r.top + r.height * d,
    l = (v - w) * p,
    c = (b - _) * m,
    x = t.width / r.width,
    S = t.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + c * c)) : i,
    easing: y,
    css: (n, a) => {
      var E = a * l,
        T = a * c,
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