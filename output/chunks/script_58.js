import {
  g as t
} from "./BYsICFKS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
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
  d = () => "Utilisateurs",
  f = () => "Utenti",
  a = () => "ユーザー",
  l = () => "Użytkownicy",
  b = () => "Пользователи",
  _ = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? o() : r === "fr" ? d() : r === "it" ? f() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? b() : r === "uk" ? _() : p()
  };
export {
  y as u
};