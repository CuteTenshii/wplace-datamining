var m = t => {
  throw TypeError(t)
};
var w = (t, e, i) => e.has(t) || m("Cannot " + i);
var a = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  s = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  e as n,
  i as r,
  h as o,
  g as p
} from "./CA9fhze-.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bcd5c52f-1a8e-45d9-be4f-1fc6d3189428", t._sentryDebugIdIdentifier = "sentry-dbid-bcd5c52f-1a8e-45d9-be4f-1fc6d3189428")
  } catch {}
})();
const E = "true",
  A = "https://maps.wplace.live",
  S = "https://backend.wplace.live/files",
  U = "0x4AAAAAABpHqZ-6i7uL0nmG",
  k = "https://backend.wplace.live",
  L = "theme";
var l, g, u, d, c, h, f, b;
class I {
  constructor() {
    s(this, l, n(!1));
    s(this, g, n(!1));
    s(this, u, n(p(_())));
    s(this, d, n(!1));
    s(this, c, n("custom-winter"));
    s(this, h, n(!0));
    s(this, f, n(p(Date.now())));
    s(this, b, n(void 0));
    setInterval(() => {
      o(a(this, f), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(L), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return r(a(this, l))
  }
  set dropletsDialogOpen(e) {
    o(a(this, l), e, !0)
  }
  get muted() {
    return r(a(this, g))
  }
  set muted(e) {
    o(a(this, g), e, !0)
  }
  get language() {
    return r(a(this, u))
  }
  set language(e) {
    o(a(this, u), e, !0)
  }
  get turnstatileLoaded() {
    return r(a(this, d))
  }
  set turnstatileLoaded(e) {
    o(a(this, d), e, !0)
  }
  get theme() {
    return r(a(this, c))
  }
  set theme(e) {
    o(a(this, c), e, !0), localStorage.setItem(L, e), document.documentElement.setAttribute("data-theme", e)
  }
  get snowflakesEnabled() {
    return r(a(this, h))
  }
  set snowflakesEnabled(e) {
    o(a(this, h), e, !0)
  }
  get now() {
    return r(a(this, f))
  }
  get captcha() {
    return y ? r(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    o(a(this, b), e, !0)
  }
}
l = new WeakMap, g = new WeakMap, u = new WeakMap, d = new WeakMap, c = new WeakMap, h = new WeakMap, f = new WeakMap, b = new WeakMap;
const B = new I;

function _() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const y = E.toLowerCase() !== "false";
export {
  k as P, S as a, U as b, A as c, B as g, y as t
};