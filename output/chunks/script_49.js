import {
  g as t
} from "./IUeg5Z1n.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4732328793523ae4665fa1786d8c6f0e6111919b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "b234e053-cc09-4cb3-b18d-34b09fa3ea85", r._sentryDebugIdIdentifier = "sentry-dbid-b234e053-cc09-4cb3-b18d-34b09fa3ea85")
  })()
} catch {}
const s = () => "Users",
  u = () => "Usuários",
  o = () => "用户",
  i = () => "Benutzer",
  f = () => "Usuarios",
  c = () => "Utilisateurs",
  d = () => "Utenti",
  l = () => "ユーザー",
  a = () => "Użytkownicy",
  b = () => "Пользователи",
  p = () => "Користувачі",
  y = () => "Người dùng",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : y()
  };
export {
  g as u
};