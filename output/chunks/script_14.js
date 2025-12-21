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
} from "./BsKihL7x.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "93f384388d5e7c5014b7c7528c87cda732169ee9"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6abc3076-7795-4363-9eb3-405cdf63ab19", t._sentryDebugIdIdentifier = "sentry-dbid-6abc3076-7795-4363-9eb3-405cdf63ab19")
  })()
} catch {}
const E = "true",
  v = "https://backend.wplace.live/files",
  A = "0x4AAAAAABpHqZ-6i7uL0nmG",
  T = "https://backend.wplace.live",
  w = "theme";
var l, g, u, d, c, h, f, b;
class y {
  constructor() {
    n(this, l, s(!1));
    n(this, g, s(!1));
    n(this, u, s(p(I())));
    n(this, d, s(!1));
    n(this, c, s("custom-winter"));
    n(this, h, s(!0));
    n(this, f, s(p(Date.now())));
    n(this, b, s(void 0));
    setInterval(() => {
      r(a(this, f), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(w), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
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
    r(a(this, c), e, !0), localStorage.setItem(w, e), document.documentElement.setAttribute("data-theme", e)
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
    return _ ? o(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    r(a(this, b), e, !0)
  }
}
l = new WeakMap, g = new WeakMap, u = new WeakMap, d = new WeakMap, c = new WeakMap, h = new WeakMap, f = new WeakMap, b = new WeakMap;
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