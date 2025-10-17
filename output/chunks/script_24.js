import {
  g as $
} from "./CKM5458v.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
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
}, c = {}) {
  var {
    delay: h = 0,
    duration: i = n => Math.sqrt(n) * 120,
    easing: y = D
  } = c, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [s, d] = o.transformOrigin.split(" ").map(parseFloat);
  s /= e.clientWidth, d /= e.clientHeight;
  var f = O(e),
    b = e.clientWidth / r.width / f,
    p = e.clientHeight / r.height / f,
    m = t.left + t.width * s,
    v = t.top + t.height * d,
    w = r.left + r.width * s,
    _ = r.top + r.height * d,
    l = (m - w) * b,
    u = (v - _) * p,
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