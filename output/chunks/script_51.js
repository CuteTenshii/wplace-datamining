import {
  g as t
} from "./CWSLadsn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "0eb5f393-b093-42ef-9434-768f285309dd", r._sentryDebugIdIdentifier = "sentry-dbid-0eb5f393-b093-42ef-9434-768f285309dd")
  })()
} catch {}
const s = () => "Users",
  u = () => "Usuários",
  f = () => "用户",
  o = () => "Benutzer",
  i = () => "Usuarios",
  d = () => "Utilisateurs",
  l = () => "Utenti",
  c = () => "ユーザー",
  a = () => "Użytkownicy",
  b = () => "Пользователи",
  p = () => "Користувачі",
  y = () => "Người dùng",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? i() : e === "fr" ? d() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : y()
  };
export {
  g as u
};