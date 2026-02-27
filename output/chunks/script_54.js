import {
  g as t
} from "./BIwJezZo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "50940088-af83-42e8-aba1-1a0496c32d43", e._sentryDebugIdIdentifier = "sentry-dbid-50940088-af83-42e8-aba1-1a0496c32d43")
  } catch {}
})();
const n = () => "Users",
  u = () => "Usuários",
  i = () => "用户",
  o = () => "Benutzer",
  f = () => "Usuarios",
  d = () => "Utilisateurs",
  c = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  _ = () => "Пользователи",
  b = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? o() : r === "es" ? f() : r === "fr" ? d() : r === "it" ? c() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as u
};