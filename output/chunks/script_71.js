import {
  g as r
} from "./DFupwelK.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new d.Error().stack;
    t && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[t] = "f6c51e82-ad75-484c-a01d-9731c98e9de5", d._sentryDebugIdIdentifier = "sentry-dbid-f6c51e82-ad75-484c-a01d-9731c98e9de5")
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
  p = () => "Reddit",
  _ = () => "Reddit",
  b = () => "Reddit",
  g = (d = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? _() : b()
  };
export {
  g as r
};