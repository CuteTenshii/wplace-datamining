import {
  g as t
} from "./DNNhrQmR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "50940088-af83-42e8-aba1-1a0496c32d43", e._sentryDebugIdIdentifier = "sentry-dbid-50940088-af83-42e8-aba1-1a0496c32d43")
  } catch {}
})();
const n = () => "Users",
  u = () => "Usuários",
  i = () => "用户",
  f = () => "Benutzer",
  o = () => "Usuarios",
  c = () => "Utilisateurs",
  a = () => "Utenti",
  d = () => "ユーザー",
  l = () => "Użytkownicy",
  _ = () => "Пользователи",
  b = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? f() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as u
};