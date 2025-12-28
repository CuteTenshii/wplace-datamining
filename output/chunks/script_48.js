import {
  g as t
} from "./CO85j776.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e61b7999f3615b75da925cd12f2c77d312c3e072"
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
  o = () => "解封",
  a = () => "Entbannen",
  b = () => "Desbanear",
  i = () => "Débannir",
  d = () => "Unban",
  s = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? f() : n === "ch" ? o() : n === "de" ? a() : n === "es" ? b() : n === "fr" ? i() : n === "it" ? d() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};