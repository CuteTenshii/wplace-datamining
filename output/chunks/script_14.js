var b = t => {
  throw TypeError(t)
};
var w = (t, e, i) => e.has(t) || b("Cannot " + i);
var a = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  n = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  g as s,
  h as o,
  e as r,
  y as p
} from "./DzYLfSyw.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "274e4e697c621b0b0021d13ee96b23137b8f2a87"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "67bafb4a-810d-4aae-85e9-06a8a07e70b8", t._sentryDebugIdIdentifier = "sentry-dbid-67bafb4a-810d-4aae-85e9-06a8a07e70b8")
  })()
} catch {}
const L = "true",
  S = "https://backend.wplace.live/files",
  v = "0x4AAAAAABpHqZ-6i7uL0nmG",
  A = "https://backend.wplace.live",
  m = "theme";
var g, l, u, d, c, f, h;
class y {
  constructor() {
    n(this, g, s(!1));
    n(this, l, s(!1));
    n(this, u, s(p(I())));
    n(this, d, s(!1));
    n(this, c, s("custom-winter"));
    n(this, f, s(p(Date.now())));
    n(this, h, s(void 0));
    setInterval(() => {
      r(a(this, f), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(m) || "custom-winter"
  }
  get dropletsDialogOpen() {
    return o(a(this, g))
  }
  set dropletsDialogOpen(e) {
    r(a(this, g), e, !0)
  }
  get muted() {
    return o(a(this, l))
  }
  set muted(e) {
    r(a(this, l), e, !0)
  }
  get language() {
    return o(a(this, u))
  }
  set language(e) {
    r(a(this, u), e, !0)
  }
  get turnstatileLoaded() {
    return o(a(this, d))
  }
  set turnstatileLoaded(e) {
    r(a(this, d), e, !0)
  }
  get theme() {
    return o(a(this, c))
  }
  set theme(e) {
    r(a(this, c), e, !0), localStorage.setItem(m, e), document.documentElement.setAttribute("data-theme", e)
  }
  get now() {
    return o(a(this, f))
  }
  get captcha() {
    return E ? o(a(this, h)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    r(a(this, h), e, !0)
  }
}
g = new WeakMap, l = new WeakMap, u = new WeakMap, d = new WeakMap, c = new WeakMap, f = new WeakMap, h = new WeakMap;
const T = new y;

function I() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const E = L.toLowerCase() !== "false";
export {
  A as P, v as a, S as b, T as g, E as t
};