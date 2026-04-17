import {
  g as t
} from "./DhZUX4Dk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5d9c477c-a16f-4bdf-a858-e65edb32d2cc", e._sentryDebugIdIdentifier = "sentry-dbid-5d9c477c-a16f-4bdf-a858-e65edb32d2cc")
  } catch {}
})();
const n = () => "Users",
  u = () => "Usuários",
  i = () => "用户",
  c = () => "Benutzer",
  o = () => "Usuarios",
  f = () => "Utilisateurs",
  d = () => "Utenti",
  b = () => "ユーザー",
  a = () => "Użytkownicy",
  l = () => "Пользователи",
  _ = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? o() : r === "fr" ? f() : r === "it" ? d() : r === "jp" ? b() : r === "pl" ? a() : r === "ru" ? l() : r === "uk" ? _() : p()
  };
export {
  y as u
};