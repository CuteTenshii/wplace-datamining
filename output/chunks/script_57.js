import {
  g as t
} from "./Cl_dwRWp.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "e3adb9f0-cb18-41f3-8576-b659a72798fa", r._sentryDebugIdIdentifier = "sentry-dbid-e3adb9f0-cb18-41f3-8576-b659a72798fa")
  } catch {}
})();
const u = () => "Unban",
  a = () => "Desbanir",
  b = () => "解封",
  f = () => "Entbannen",
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
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? f() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};