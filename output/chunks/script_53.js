import {
  g as t
} from "./Cq_U3JVf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
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
  c = () => "Utilisateurs",
  d = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  _ = () => "Пользователи",
  p = () => "Користувачі",
  b = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? o() : r === "es" ? f() : r === "fr" ? c() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? p() : b()
  };
export {
  y as u
};