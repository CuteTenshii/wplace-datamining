var m = t => {
  throw TypeError(t)
};
var L = (t, e, i) => e.has(t) || m("Cannot " + i);
var a = (t, e, i) => (L(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  n = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  e as s,
  j as o,
  i as r,
  g as p
} from "./8X9bXL-a.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4d70c89f-b11e-4dbd-8d6c-6b1ab1358e72", t._sentryDebugIdIdentifier = "sentry-dbid-4d70c89f-b11e-4dbd-8d6c-6b1ab1358e72")
  })()
} catch {}
const E = "true",
  v = "https://backend.wplace.live/files",
  A = "0x4AAAAAABpHqZ-6i7uL0nmG",
  T = "https://backend.wplace.live",
  w = "theme";
var l, d, g, u, f, h, c, b;
class y {
  constructor() {
    n(this, l, s(!1));
    n(this, d, s(!1));
    n(this, g, s(p(I())));
    n(this, u, s(!1));
    n(this, f, s("custom-winter"));
    n(this, h, s(!0));
    n(this, c, s(p(Date.now())));
    n(this, b, s(void 0));
    setInterval(() => {
      r(a(this, c), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(w), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return o(a(this, l))
  }
  set dropletsDialogOpen(e) {
    r(a(this, l), e, !0)
  }
  get muted() {
    return o(a(this, d))
  }
  set muted(e) {
    r(a(this, d), e, !0)
  }
  get language() {
    return o(a(this, g))
  }
  set language(e) {
    r(a(this, g), e, !0)
  }
  get turnstatileLoaded() {
    return o(a(this, u))
  }
  set turnstatileLoaded(e) {
    r(a(this, u), e, !0)
  }
  get theme() {
    return o(a(this, f))
  }
  set theme(e) {
    r(a(this, f), e, !0), localStorage.setItem(w, e), document.documentElement.setAttribute("data-theme", e)
  }
  get snowflakesEnabled() {
    return o(a(this, h))
  }
  set snowflakesEnabled(e) {
    r(a(this, h), e, !0)
  }
  get now() {
    return o(a(this, c))
  }
  get captcha() {
    return _ ? o(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    r(a(this, b), e, !0)
  }
}
l = new WeakMap, d = new WeakMap, g = new WeakMap, u = new WeakMap, f = new WeakMap, h = new WeakMap, c = new WeakMap, b = new WeakMap;
const U = new y;

function I() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const _ = E.toLowerCase() !== "false";
export {
  T as P, A as a, v as b, U as g, _ as t
};