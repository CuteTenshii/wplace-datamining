import {
  g as r
} from "./BWURdrR3.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new t.Error().stack;
    d && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[d] = "a6afea77-03b7-4e37-beac-18f1ebdfe81b", t._sentryDebugIdIdentifier = "sentry-dbid-a6afea77-03b7-4e37-beac-18f1ebdfe81b")
  })()
} catch {}
const n = () => "Reddit",
  i = () => "Reddit",
  f = () => "Reddit",
  o = () => "Reddit",
  u = () => "Reddit",
  s = () => "Reddit",
  a = () => "Reddit",
  c = () => "Reddit",
  l = () => "Reddit",
  b = () => "Reddit",
  p = () => "Reddit",
  _ = () => "Reddit",
  g = (t = {}, d = {}) => {
    const e = d.locale ?? r();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? a() : e === "jp" ? c() : e === "pl" ? l() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as r
};