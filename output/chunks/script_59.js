import {
  g as t
} from "./BKKpqwch.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
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
  f = () => "Utilisateurs",
  d = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  _ = () => "Пользователи",
  b = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as u
};