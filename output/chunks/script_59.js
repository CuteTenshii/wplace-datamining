import {
  g as t
} from "./C33D4ipC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5d9c477c-a16f-4bdf-a858-e65edb32d2cc", e._sentryDebugIdIdentifier = "sentry-dbid-5d9c477c-a16f-4bdf-a858-e65edb32d2cc")
  } catch {}
})();
const n = () => "Users",
  u = () => "Usuários",
  c = () => "用户",
  i = () => "Benutzer",
  o = () => "Usuarios",
  f = () => "Utilisateurs",
  d = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  _ = () => "Пользователи",
  b = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? c() : r === "de" ? i() : r === "es" ? o() : r === "fr" ? f() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as u
};