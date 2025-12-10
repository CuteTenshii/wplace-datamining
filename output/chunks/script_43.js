import {
  g as t
} from "./CVslo3Xr.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "3ed1e834-7694-4275-85c3-039985d62c49", n._sentryDebugIdIdentifier = "sentry-dbid-3ed1e834-7694-4275-85c3-039985d62c49")
  })()
} catch {}
const s = () => "Users banned successfully",
  u = () => "Usuários banidos com sucesso",
  o = () => "用户已成功封禁",
  i = () => "Benutzer erfolgreich gebannt",
  c = () => "Usuarios baneados correctamente",
  d = () => "Utilisateurs bannis avec succès",
  a = () => "Utenti bannati con successo",
  f = () => "ユーザーをBANしました。",
  _ = () => "Użytkownicy zostali pomyślnie zbanowani",
  l = () => "Пользователи успешно забанены",
  b = () => "Користувачів успішно заблоковано",
  p = () => "Đã cấm người dùng thành công",
  D = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? d() : e === "it" ? a() : e === "jp" ? f() : e === "pl" ? _() : e === "ru" ? l() : e === "uk" ? b() : p()
  },
  m = () => "Users timeouted successfully",
  g = () => "Usuários suspensos com sucesso",
  y = () => "用户已成功禁言",
  h = () => "Benutzer erfolgreich mit Timeout belegt",
  w = () => "Usuarios suspendidos correctamente",
  U = () => "Utilisateurs suspendus avec succès",
  k = () => "Utenti sospesi con successo",
  z = () => "ユーザーをタイムアウトしました。",
  v = () => "Użytkownicy zostali pomyślnie zawieszeni",
  T = () => "Пользователям успешно выдан тайм-аут",
  E = () => "Користувачам успішно призначено тайм-аут",
  I = () => "Đã tạm khóa người dùng thành công",
  B = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? m() : e === "pt" ? g() : e === "ch" ? y() : e === "de" ? h() : e === "es" ? w() : e === "fr" ? U() : e === "it" ? k() : e === "jp" ? z() : e === "pl" ? v() : e === "ru" ? T() : e === "uk" ? E() : I()
  };
export {
  B as a, D as u
};