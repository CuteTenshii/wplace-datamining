import {
  g as t
} from "./DawG3Hoa.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "dfe69cb2-8751-4dcb-a10b-7c55004c903c", r._sentryDebugIdIdentifier = "sentry-dbid-dfe69cb2-8751-4dcb-a10b-7c55004c903c")
  } catch {}
})();
const u = () => "Unban",
  c = () => "Desbanir",
  a = () => "解封",
  b = () => "Entbannen",
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
    return n === "en" ? u() : n === "pt" ? c() : n === "ch" ? a() : n === "de" ? b() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};