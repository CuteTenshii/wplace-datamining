import {
  g as r
} from "./DSNL03G2.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
  f = () => "Reddit",
  o = () => "Reddit",
  u = () => "Reddit",
  s = () => "Reddit",
  c = () => "Reddit",
  l = () => "Reddit",
  a = () => "Reddit",
  p = () => "Reddit",
  _ = () => "Reddit",
  y = () => "Reddit",
  R = (t = {}, d = {}) => {
    const e = d.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? _() : y()
  };
export {
  R as r
};