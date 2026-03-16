import {
  g as t
} from "./CCnR8d1l.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "dfe69cb2-8751-4dcb-a10b-7c55004c903c", r._sentryDebugIdIdentifier = "sentry-dbid-dfe69cb2-8751-4dcb-a10b-7c55004c903c")
  } catch {}
})();
const u = () => "Unban",
  b = () => "Desbanir",
  c = () => "解封",
  a = () => "Entbannen",
  s = () => "Desbanear",
  o = () => "Débannir",
  f = () => "Unban",
  i = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? c() : n === "de" ? a() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? f() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};