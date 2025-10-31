import {
  g as $
} from "./B3WUOJBD.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e40e5462293a971da297506d4fe4e597c7bcf197"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d5f6dd31-9d1a-4b53-8249-629cc22764f7", t._sentryDebugIdIdentifier = "sentry-dbid-d5f6dd31-9d1a-4b53-8249-629cc22764f7")
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
  } = c, o = getComputedStyle(t), g = o.transform === "none" ? "" : o.transform, [d, s] = o.transformOrigin.split(" ").map(parseFloat);
  d /= t.clientWidth, s /= t.clientHeight;
  var f = O(t),
    p = t.clientWidth / r.width / f,
    m = t.clientHeight / r.height / f,
    v = e.left + e.width * d,
    b = e.top + e.height * s,
    w = r.left + r.width * d,
    _ = r.top + r.height * s,
    l = (v - w) * p,
    u = (b - _) * m,
    x = e.width / r.width,
    S = e.height / r.height;
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

function O(t) {
  if ("currentCSSZoom" in t) return t.currentCSSZoom;
  for (var e = t, r = 1; e !== null;) r *= +getComputedStyle(e).zoom, e = e.parentElement;
  return r
}
export {
  q as R, A as f, M as h, L as t
};