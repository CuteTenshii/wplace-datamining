import {
  g as t
} from "./C-uTzaOB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5d9c477c-a16f-4bdf-a858-e65edb32d2cc", e._sentryDebugIdIdentifier = "sentry-dbid-5d9c477c-a16f-4bdf-a858-e65edb32d2cc")
  } catch {}
})();
const n = () => "Users",
  u = () => "Usuários",
  i = () => "用户",
  o = () => "Benutzer",
  c = () => "Usuarios",
  d = () => "Utilisateurs",
  f = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  b = () => "Пользователи",
  _ = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? d() : r === "it" ? f() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? b() : r === "uk" ? _() : p()
  };
export {
  y as u
};