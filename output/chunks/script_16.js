var m = t => {
  throw TypeError(t)
};
var L = (t, e, i) => e.has(t) || m("Cannot " + i);
var a = (t, e, i) => (L(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  s = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
import {
  e as n,
  i as r,
  h as o,
  g as p
} from "./DOAgMrHD.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f459a571-edc9-4ec1-9bd5-0c9a9f3b7ffc", t._sentryDebugIdIdentifier = "sentry-dbid-f459a571-edc9-4ec1-9bd5-0c9a9f3b7ffc")
  } catch {}
})();
const E = "true",
  S = "https://maps.wplace.live/styles/liberty",
  U = "https://backend.wplace.live/files",
  k = "https://backend.wplace.live",
  w = "theme";
var l, g, u, d, c, h, f, b;
class y {
  constructor() {
    s(this, l, n(!1));
    s(this, g, n(!1));
    s(this, u, n(p(I())));
    s(this, d, n(!1));
    s(this, c, n("custom-winter"));
    s(this, h, n(!0));
    s(this, f, n(p(Date.now())));
    s(this, b, n(void 0));
    setInterval(() => {
      o(a(this, f), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(w), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
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
    o(a(this, c), e, !0), localStorage.setItem(w, e), document.documentElement.setAttribute("data-theme", e)
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
    return _ ? r(a(this, b)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    o(a(this, b), e, !0)
  }
}
l = new WeakMap, g = new WeakMap, u = new WeakMap, d = new WeakMap, c = new WeakMap, h = new WeakMap, f = new WeakMap, b = new WeakMap;
const B = new y;

function I() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const _ = E.toLowerCase() !== "false";
export {
  k as P, U as a, S as b, B as g, _ as t
};