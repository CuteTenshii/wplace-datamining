import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "User ID",
  n = () => "ID do usuário",
  s = () => "用户ID",
  i = () => "Benutzer-ID",
  _ = () => "ID de usuario",
  o = () => "ID utilisateur",
  c = () => "ID dell'utente",
  d = () => "ユーザーID",
  f = () => "ID użytkownika",
  D = () => "Идентификатор пользователя",
  I = () => "ID користувача",
  l = () => "ID người dùng",
  g = (p = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? n() : r === "ch" ? s() : r === "de" ? i() : r === "es" ? _() : r === "fr" ? o() : r === "it" ? c() : r === "jp" ? d() : r === "pl" ? f() : r === "ru" ? D() : r === "uk" ? I() : l()
  };
export {
  g as u
};