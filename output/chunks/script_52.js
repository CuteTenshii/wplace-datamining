import {
  g as t
} from "./56ZBUmtO.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "dfe69cb2-8751-4dcb-a10b-7c55004c903c", r._sentryDebugIdIdentifier = "sentry-dbid-dfe69cb2-8751-4dcb-a10b-7c55004c903c")
  } catch {}
})();
const u = () => "Unban",
  b = () => "Desbanir",
  a = () => "解封",
  c = () => "Entbannen",
  s = () => "Desbanear",
  f = () => "Débannir",
  o = () => "Unban",
  i = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? a() : n === "de" ? c() : n === "es" ? s() : n === "fr" ? f() : n === "it" ? o() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};