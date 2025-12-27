import {
  g as t
} from "./EJbZrqRQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0d09a81b307e3e50e12318a904f634e48415b56b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b2044b2d-905f-4966-99db-24fea64f3262", e._sentryDebugIdIdentifier = "sentry-dbid-b2044b2d-905f-4966-99db-24fea64f3262")
  })()
} catch {}
const u = () => "Unban",
  f = () => "Desbanir",
  a = () => "解封",
  o = () => "Entbannen",
  b = () => "Desbanear",
  i = () => "Débannir",
  s = () => "Unban",
  d = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? f() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? b() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? d() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};