import {
  g as r
} from "./DolGb-m3.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
  b = () => "Reddit",
  p = () => "Reddit",
  _ = () => "Reddit",
  g = (t = {}, d = {}) => {
    const e = d.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? s() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as r
};