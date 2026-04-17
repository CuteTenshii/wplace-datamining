import {
  g as s
} from "./DhZUX4Dk.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "ef164a17-cff1-4d3e-8a31-7d29d77617fa", r._sentryDebugIdIdentifier = "sentry-dbid-ef164a17-cff1-4d3e-8a31-7d29d77617fa")
  } catch {}
})();
const t = () => "Users banned successfully",
  u = () => "Usuários banidos com sucesso",
  o = () => "用户已成功封禁",
  i = () => "Benutzer erfolgreich gebannt",
  c = () => "Usuarios baneados correctamente",
  d = () => "Utilisateurs bannis avec succès",
  a = () => "Utenti bannati con successo",
  _ = () => "ユーザーをBANしました。",
  f = () => "Użytkownicy zostali pomyślnie zbanowani",
  b = () => "Пользователи успешно забанены",
  l = () => "Користувачів успішно заблоковано",
  m = () => "Đã cấm người dùng thành công",
  T = (r = {}, n = {}) => {
    const e = n.locale ?? s();
    return e === "en" ? t() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? d() : e === "it" ? a() : e === "jp" ? _() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? l() : m()
  },
  p = () => "Users timeouted successfully",
  g = () => "Usuários suspensos com sucesso",
  y = () => "用户已成功禁言",
  h = () => "Benutzer erfolgreich mit Timeout belegt",
  U = () => "Usuarios suspendidos correctamente",
  w = () => "Utilisateurs suspendus avec succès",
  k = () => "Utenti sospesi con successo",
  z = () => "ユーザーをタイムアウトしました。",
  v = () => "Użytkownicy zostali pomyślnie zawieszeni",
  E = () => "Пользователям успешно выдан тайм-аут",
  I = () => "Користувачам успішно призначено тайм-аут",
  j = () => "Đã tạm khóa người dùng thành công",
  B = (r = {}, n = {}) => {
    const e = n.locale ?? s();
    return e === "en" ? p() : e === "pt" ? g() : e === "ch" ? y() : e === "de" ? h() : e === "es" ? U() : e === "fr" ? w() : e === "it" ? k() : e === "jp" ? z() : e === "pl" ? v() : e === "ru" ? E() : e === "uk" ? I() : j()
  };
export {
  B as a, T as u
};