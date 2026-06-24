import {
  g as s
} from "./BhCkpOlh.js";
const t = () => "Users banned successfully",
  u = () => "Usuários banidos com sucesso",
  o = () => "用户已成功封禁",
  i = () => "Benutzer erfolgreich gebannt",
  c = () => "Usuarios baneados correctamente",
  _ = () => "Utilisateurs bannis avec succès",
  a = () => "Utenti bannati con successo",
  d = () => "ユーザーをBANしました。",
  f = () => "Użytkownicy zostali pomyślnie zbanowani",
  l = () => "Пользователи успешно забанены",
  m = () => "Користувачів успішно заблоковано",
  p = () => "Đã cấm người dùng thành công",
  L = (n = {}, r = {}) => {
    const e = r.locale ?? s();
    return e === "en" ? t() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? _() : e === "it" ? a() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? l() : e === "uk" ? m() : p()
  },
  b = () => "Users timeouted successfully",
  g = () => "Usuários suspensos com sucesso",
  U = () => "用户已成功禁言",
  h = () => "Benutzer erfolgreich mit Timeout belegt",
  y = () => "Usuarios suspendidos correctamente",
  k = () => "Utilisateurs suspendus avec succès",
  z = () => "Utenti sospesi con successo",
  j = () => "ユーザーをタイムアウトしました。",
  v = () => "Użytkownicy zostali pomyślnie zawieszeni",
  w = () => "Пользователям успешно выдан тайм-аут",
  B = () => "Користувачам успішно призначено тайм-аут",
  x = () => "Đã tạm khóa người dùng thành công",
  N = (n = {}, r = {}) => {
    const e = r.locale ?? s();
    return e === "en" ? b() : e === "pt" ? g() : e === "ch" ? U() : e === "de" ? h() : e === "es" ? y() : e === "fr" ? k() : e === "it" ? z() : e === "jp" ? j() : e === "pl" ? v() : e === "ru" ? w() : e === "uk" ? B() : x()
  };
export {
  N as a, L as u
};