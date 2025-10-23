import {
  g as $
} from "./Dwv1k78u.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d5f6dd31-9d1a-4b53-8249-629cc22764f7", e._sentryDebugIdIdentifier = "sentry-dbid-d5f6dd31-9d1a-4b53-8249-629cc22764f7")
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
  } = f, o = getComputedStyle(e), g = o.transform === "none" ? "" : o.transform, [d, s] = o.transformOrigin.split(" ").map(parseFloat);
  d /= e.clientWidth, s /= e.clientHeight;
  var c = O(e),
    b = e.clientWidth / r.width / c,
    p = e.clientHeight / r.height / c,
    m = t.left + t.width * d,
    v = t.top + t.height * s,
    w = r.left + r.width * d,
    _ = r.top + r.height * s,
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