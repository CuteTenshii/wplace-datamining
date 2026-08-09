import {
  g as i
} from "./BhCkpOlh.js";
const n = () => "Enter a valid user ID",
  u = () => "Informe um ID válido",
  s = () => "请输入有效的用户 ID",
  d = () => "Gib eine gültige Benutzer-ID ein",
  o = () => "Introduce un ID de usuario válido",
  _ = () => "Entrez un ID d’utilisateur valide",
  c = () => "Inserisci un ID valido",
  l = () => "有効なユーザーIDを入力してください。",
  p = () => "Wprowadź prawidłowe ID użytkownika",
  a = () => "Введите корректный ID пользователя",
  f = () => "Введіть коректний ID користувача",
  v = () => "Nhập một ID người dùng hợp lệ",
  y = (t = {}, e = {}) => {
    const r = e.locale ?? i();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? s() : r === "de" ? d() : r === "es" ? o() : r === "fr" ? _() : r === "it" ? c() : r === "jp" ? l() : r === "pl" ? p() : r === "ru" ? a() : r === "uk" ? f() : v()
  },
  m = () => "Reddit",
  I = () => "Reddit",
  D = () => "Reddit",
  R = () => "Reddit",
  g = () => "Reddit",
  h = () => "Reddit",
  k = () => "Reddit",
  j = () => "Reddit",
  w = () => "Reddit",
  z = () => "Reddit",
  E = () => "Reddit",
  b = () => "Reddit",
  B = (t = {}, e = {}) => {
    const r = e.locale ?? i();
    return r === "en" ? m() : r === "pt" ? I() : r === "ch" ? D() : r === "de" ? R() : r === "es" ? g() : r === "fr" ? h() : r === "it" ? k() : r === "jp" ? j() : r === "pl" ? w() : r === "ru" ? z() : r === "uk" ? E() : b()
  };
export {
  y as p, B as r
};