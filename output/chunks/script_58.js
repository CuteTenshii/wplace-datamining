import {
  g as t
} from "./DADvmwwi.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "e3adb9f0-cb18-41f3-8576-b659a72798fa", r._sentryDebugIdIdentifier = "sentry-dbid-e3adb9f0-cb18-41f3-8576-b659a72798fa")
  } catch {}
})();
const u = () => "Unban",
  a = () => "Desbanir",
  b = () => "解封",
  s = () => "Entbannen",
  f = () => "Desbanear",
  o = () => "Débannir",
  i = () => "Unban",
  c = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? s() : n === "es" ? f() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};