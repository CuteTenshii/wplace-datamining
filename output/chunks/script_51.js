import {
  g as t
} from "./B4ScQ8O8.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  o = () => "用户",
  i = () => "Benutzer",
  f = () => "Usuarios",
  d = () => "Utilisateurs",
  c = () => "Utenti",
  l = () => "ユーザー",
  a = () => "Użytkownicy",
  b = () => "Пользователи",
  p = () => "Користувачі",
  y = () => "Người dùng",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : y()
  };
export {
  g as u
};