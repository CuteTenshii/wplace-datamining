import {
  g as t
} from "./BqmyO7Vr.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
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
  i = () => "Unban",
  d = () => "BANを解除",
  f = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? c() : n === "de" ? a() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? d() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};