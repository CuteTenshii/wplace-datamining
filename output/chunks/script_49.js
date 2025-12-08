import {
  g as t
} from "./BMZgV-pO.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "38bb15d6890b2160becfb07b4396631f8d785598"
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
  d = () => "Utilisateurs",
  c = () => "Utenti",
  l = () => "ユーザー",
  b = () => "Użytkownicy",
  a = () => "Пользователи",
  p = () => "Користувачі",
  y = () => "Người dùng",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? b() : e === "ru" ? a() : e === "uk" ? p() : y()
  };
export {
  g as u
};