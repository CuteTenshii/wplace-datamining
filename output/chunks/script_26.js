import {
  g as $
} from "./B3Pi0DVN.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
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
  to: r
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = D
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, l] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, l /= t.clientHeight;
  var u = O(t),
    p = t.clientWidth / r.width / u,
    b = t.clientHeight / r.height / u,
    m = e.left + e.width * s,
    v = e.top + e.height * l,
    w = r.left + r.width * s,
    _ = r.top + r.height * l,
    d = (m - w) * p,
    f = (v - _) * b,
    x = e.width / r.width,
    S = e.height / r.height;
  return {
    delay: h,
    duration: typeof i == "function" ? i(Math.sqrt(d * d + f * f)) : i,
    easing: y,
    css: (n, a) => {
      var E = a * d,
        T = a * f,
        R = n + a * x,
        I = n + a * S;
      return `transform: ${g} translate(${E}px, ${T}px) scale(${R}, ${I});`
    }
  }
}

function O(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  q as R, A as f, M as h, L as t
};