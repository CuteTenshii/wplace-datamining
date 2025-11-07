import {
  g as $
} from "./DQLsifzP.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6f145a17-1c95-429a-b6a2-7fc2acbd3147", t._sentryDebugIdIdentifier = "sentry-dbid-6f145a17-1c95-429a-b6a2-7fc2acbd3147")
  })()
} catch {}
const z = () => "Timeout",
  C = () => "Timeout",
  L = (t = {}, e = {}) => (e.locale ?? $()) === "en" ? z() : C();

function M(t, e) {
  return e.includes(t)
}
const q = {
  user: "user",
  community_leader: "cl",
  moderator: "mod",
  global_moderator: "gm",
  admin: "admin"
};

function D(t) {
  const e = t - 1;
  return e * e * e + 1
}

function A(t, {
  from: e,
  to: a
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = r => Math.sqrt(r) * 120,
    easing: y = D
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, d /= t.clientHeight;
  var f = O(t),
    p = t.clientWidth / a.width / f,
    m = t.clientHeight / a.height / f,
    v = e.left + e.width * s,
    b = e.top + e.height * d,
    w = a.left + a.width * s,
    _ = a.top + a.height * d,
    l = (v - w) * p,
    u = (b - _) * m,
    x = e.width / a.width,
    S = e.height / a.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(l * l + u * u)) : i,
    easing: y,
    css: (r, n) => {
      var E = n * l,
        T = n * u,
        R = r + n * x,
        I = r + n * S;
      return `transform: ${g} translate(${E}px, ${T}px) scale(${R}, ${I});`
    }
  }
}

function O(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, a = 1; e !== null;) a *= +getComputedStyle(e).zoom, e = e.parentElement;
  return a
}
export {
  q as R, A as f, M as h, L as t
};