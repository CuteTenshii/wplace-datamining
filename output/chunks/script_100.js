import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "User",
  n = () => "Usuário",
  s = () => "用户",
  o = () => "Benutzer",
  i = () => "Usuario",
  c = () => "Utilisateur",
  f = () => "Utente",
  _ = () => "ユーザー",
  p = () => "Użytkownik",
  l = () => "Пользователь",
  a = () => "Користувач",
  U = () => "Người dùng",
  d = (g = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? n() : r === "ch" ? s() : r === "de" ? o() : r === "es" ? i() : r === "fr" ? c() : r === "it" ? f() : r === "jp" ? _() : r === "pl" ? p() : r === "ru" ? l() : r === "uk" ? a() : U()
  };
export {
  d as u
};