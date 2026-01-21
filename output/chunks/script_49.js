import {
  g as t
} from "./lNmZA2C_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e3adb9f0-cb18-41f3-8576-b659a72798fa", e._sentryDebugIdIdentifier = "sentry-dbid-e3adb9f0-cb18-41f3-8576-b659a72798fa")
  })()
} catch {}
const u = () => "Unban",
  a = () => "Desbanir",
  f = () => "解封",
  o = () => "Entbannen",
  i = () => "Desbanear",
  b = () => "Débannir",
  s = () => "Unban",
  d = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? f() : n === "de" ? o() : n === "es" ? i() : n === "fr" ? b() : n === "it" ? s() : n === "jp" ? d() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};