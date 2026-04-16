import {
  g as t
} from "./BHEqZqXQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
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
  d = () => "Utilisateurs",
  f = () => "Utenti",
  a = () => "ユーザー",
  b = () => "Użytkownicy",
  l = () => "Пользователи",
  _ = () => "Користувачі",
  p = () => "Người dùng",
  y = (e = {}, s = {}) => {
    const r = s.locale ?? t();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? c() : r === "de" ? i() : r === "es" ? o() : r === "fr" ? d() : r === "it" ? f() : r === "jp" ? a() : r === "pl" ? b() : r === "ru" ? l() : r === "uk" ? _() : p()
  };
export {
  y as u
};