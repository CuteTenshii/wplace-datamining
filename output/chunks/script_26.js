import {
  g as $
} from "./DsZdAqoa.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
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
}, f = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = D
  } = f, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= t.clientWidth, d /= t.clientHeight;
  var u = O(t),
    p = t.clientWidth / r.width / u,
    m = t.clientHeight / r.height / u,
    v = e.left + e.width * s,
    b = e.top + e.height * d,
    w = r.left + r.width * s,
    _ = r.top + r.height * d,
    l = (v - w) * p,
    c = (b - _) * m,
    x = e.width / r.width,
    S = e.height / r.height;
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

function O(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  q as R, A as f, M as h, L as t
};