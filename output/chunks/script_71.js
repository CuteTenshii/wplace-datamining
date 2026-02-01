import {
  g as r
} from "./DXljTAZ5.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
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
  c = () => "Reddit",
  s = () => "Reddit",
  l = () => "Reddit",
  a = () => "Reddit",
  p = () => "Reddit",
  _ = () => "Reddit",
  b = () => "Reddit",
  g = (t = {}, d = {}) => {
    const e = d.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? s() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? _() : b()
  };
export {
  g as r
};