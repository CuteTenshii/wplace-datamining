import {
  g as t
} from "./CTqtndnH.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
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
  f = () => "Unban",
  i = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? c() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? f() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};