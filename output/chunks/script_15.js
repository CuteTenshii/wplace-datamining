var w = t => {
  throw TypeError(t)
};
var y = (t, e, i) => e.has(t) || w("Cannot " + i);
var a = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  n = (t, e, i) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  e as s,
  j as o,
  i as r,
  g as m
} from "./BX08WKHH.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "afd0213c-244a-4ac5-be37-9abd85e51b2a", t._sentryDebugIdIdentifier = "sentry-dbid-afd0213c-244a-4ac5-be37-9abd85e51b2a")
  })()
} catch {}
const L = "true",
  S = "https://backend.wplace.live/files",
  k = "https://backend.wplace.live",
  p = "theme";
var l, g, d, u, c, h, f, b;
class E {
  constructor() {
    n(this, l, s(!1));
    n(this, g, s(!1));
    n(this, d, s(m(I())));
    n(this, u, s(!1));
    n(this, c, s("custom-winter"));
    n(this, h, s(!0));
    n(this, f, s(m(Date.now())));
    n(this, b, s(void 0));
    setInterval(() => {
      r(a(this, f), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(p), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return o(a(this, l))
  }
  set dropletsDialogOpen(e) {
    r(a(this, l), e, !0)
  }
  get muted() {
    return o(a(this, g))
  }
  set muted(e) {
    r(a(this, g), e, !0)
  }
  get language() {
    return o(a(this, d))
  }
  set language(e) {
    r(a(this, d), e, !0)
  }
  get turnstatileLoaded() {
    return o(a(this, u))
  }
  set turnstatileLoaded(e) {
    r(a(this, u), e, !0)
  }
  get theme() {
    return o(a(this, c))
  }
  set theme(e) {
    r(a(this, c), e, !0), localStorage.setItem(p, e), document.documentElement.setAttribute("data-theme", e)
  }
  get snowflakesEnabled() {
    return o(a(this, h))
  }
  set snowflakesEnabled(e) {
    r(a(this, h), e, !0)
  }
  get now() {
    return o(a(this, f))
  }
  get captcha() {
    return D ? o(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    r(a(this, b), e, !0)
  }
}
l = new WeakMap, g = new WeakMap, d = new WeakMap, u = new WeakMap, c = new WeakMap, h = new WeakMap, f = new WeakMap, b = new WeakMap;
const T = new E;

function I() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const D = L.toLowerCase() !== "false";
export {
  k as P, S as a, T as g, D as t
};