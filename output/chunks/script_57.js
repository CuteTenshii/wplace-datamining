import {
  g as t
} from "./kxb4d0Jk.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
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
  d = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  _ = () => "Розбанити",
  p = () => "Gỡ cấm",
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? f() : n === "es" ? s() : n === "fr" ? o() : n === "it" ? i() : n === "jp" ? d() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  y as u
};