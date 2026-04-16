import {
  g as t
} from "./C6AhFN09.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "e3adb9f0-cb18-41f3-8576-b659a72798fa", r._sentryDebugIdIdentifier = "sentry-dbid-e3adb9f0-cb18-41f3-8576-b659a72798fa")
  } catch {}
})();
const u = () => "Unban",
  a = () => "Desbanir",
  f = () => "解封",
  b = () => "Entbannen",
  s = () => "Desbanear",
  o = () => "Débannir",
  i = () => "Unban",
  c = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? f() : n === "de" ? b() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};