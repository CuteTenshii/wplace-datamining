import {
  g as t
} from "./BTC2qzU8.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "dfe69cb2-8751-4dcb-a10b-7c55004c903c", r._sentryDebugIdIdentifier = "sentry-dbid-dfe69cb2-8751-4dcb-a10b-7c55004c903c")
  } catch {}
})();
const u = () => "Unban",
  a = () => "Desbanir",
  b = () => "解封",
  c = () => "Entbannen",
  s = () => "Desbanear",
  o = () => "Débannir",
  i = () => "Unban",
  f = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? c() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};