import {
  g as t
} from "./g2ZRSQwI.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
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
  f = () => "Benutzer",
  i = () => "Usuarios",
  d = () => "Utilisateurs",
  c = () => "Utenti",
  l = () => "ユーザー",
  a = () => "Użytkownicy",
  p = () => "Пользователи",
  y = () => "Користувачі",
  _ = () => "Người dùng",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? f() : e === "es" ? i() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? y() : _()
  };
export {
  g as u
};