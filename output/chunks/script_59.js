import {
  g as s
} from "./BTC2qzU8.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "64bdeb03-6475-42ba-8f82-6d42b2713838", r._sentryDebugIdIdentifier = "sentry-dbid-64bdeb03-6475-42ba-8f82-6d42b2713838")
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