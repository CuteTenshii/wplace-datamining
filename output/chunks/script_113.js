import {
  g as s
} from "./BhCkpOlh.js";
const t = () => "Users",
  u = () => "Usuários",
  n = () => "用户",
  i = () => "Benutzer",
  o = () => "Usuarios",
  c = () => "Utilisateurs",
  f = () => "Utenti",
  _ = () => "ユーザー",
  p = () => "Użytkownicy",
  l = () => "Пользователи",
  a = () => "Користувачі",
  U = () => "Người dùng",
  k = (g = {}, e = {}) => {
    const r = e.locale ?? s();
    return r === "en" ? t() : r === "pt" ? u() : r === "ch" ? n() : r === "de" ? i() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? f() : r === "jp" ? _() : r === "pl" ? p() : r === "ru" ? l() : r === "uk" ? a() : U()
  };
export {
  k as u
};