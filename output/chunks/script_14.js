var w = t => {
  throw TypeError(t)
};
var I = (t, e, i) => e.has(t) || w("Cannot " + i);
var a = (t, e, i) => (I(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  n = (t, e, i) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  e as o,
  j as r,
  i as s,
  g as m
} from "./D6bzUFXP.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6a2ddc41-daae-4f4d-89e3-4ca477fbd0f8", t._sentryDebugIdIdentifier = "sentry-dbid-6a2ddc41-daae-4f4d-89e3-4ca477fbd0f8")
  })()
} catch {}
const y = "true",
  v = "https://backend.wplace.live/files",
  A = "0x4AAAAAABpHqZ-6i7uL0nmG",
  T = "https://backend.wplace.live",
  p = "theme",
  L = "snowflakes-enabled";
var d, g, u, f, l, c, h, b;
class E {
  constructor() {
    n(this, d, o(!1));
    n(this, g, o(!1));
    n(this, u, o(m(S())));
    n(this, f, o(!1));
    n(this, l, o(!0));
    n(this, c, o("custom-winter"));
    n(this, h, o(m(Date.now())));
    n(this, b, o(void 0));
    setInterval(() => {
      s(a(this, h), Date.now(), !0)
    }, 500);
    {
      this.theme = localStorage.getItem(p), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter");
      const e = localStorage.getItem(L);
      e !== null && s(a(this, l), e === "true")
    }
  }
  get dropletsDialogOpen() {
    return r(a(this, d))
  }
  set dropletsDialogOpen(e) {
    s(a(this, d), e, !0)
  }
  get muted() {
    return r(a(this, g))
  }
  set muted(e) {
    s(a(this, g), e, !0)
  }
  get language() {
    return r(a(this, u))
  }
  set language(e) {
    s(a(this, u), e, !0)
  }
  get turnstatileLoaded() {
    return r(a(this, f))
  }
  set turnstatileLoaded(e) {
    s(a(this, f), e, !0)
  }
  get snowflakesEnabled() {
    return r(a(this, l))
  }
  set snowflakesEnabled(e) {
    s(a(this, l), e, !0), localStorage.setItem(L, String(e))
  }
  get theme() {
    return r(a(this, c))
  }
  set theme(e) {
    s(a(this, c), e, !0), localStorage.setItem(p, e), document.documentElement.setAttribute("data-theme", e)
  }
  get now() {
    return r(a(this, h))
  }
  get captcha() {
    return _ ? r(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    s(a(this, b), e, !0)
  }
}
d = new WeakMap, g = new WeakMap, u = new WeakMap, f = new WeakMap, l = new WeakMap, c = new WeakMap, h = new WeakMap, b = new WeakMap;
const U = new E;

function S() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const _ = y.toLowerCase() !== "false";
export {
  T as P, A as a, v as b, U as g, _ as t
};