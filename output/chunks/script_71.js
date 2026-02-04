import {
  g as r
} from "./DZjUHX_D.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new t.Error().stack;
    d && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[d] = "f6c51e82-ad75-484c-a01d-9731c98e9de5", t._sentryDebugIdIdentifier = "sentry-dbid-f6c51e82-ad75-484c-a01d-9731c98e9de5")
  })()
} catch {}
const n = () => "Reddit",
  i = () => "Reddit",
  o = () => "Reddit",
  u = () => "Reddit",
  f = () => "Reddit",
  s = () => "Reddit",
  c = () => "Reddit",
  l = () => "Reddit",
  a = () => "Reddit",
  b = () => "Reddit",
  p = () => "Reddit",
  _ = () => "Reddit",
  g = (t = {}, d = {}) => {
    const e = d.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as r
};