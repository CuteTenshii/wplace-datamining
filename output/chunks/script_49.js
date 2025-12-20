import {
  g as t
} from "./Cg2XhUFn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "204c2068-cec7-40dc-89bf-7521aef7468d", r._sentryDebugIdIdentifier = "sentry-dbid-204c2068-cec7-40dc-89bf-7521aef7468d")
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