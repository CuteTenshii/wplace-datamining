import {
  g as e
} from "./BhCkpOlh.js";
const s = () => "Last pixel",
  u = () => "Último pixel",
  i = () => "最后一个像素",
  c = () => "Letzter Pixel",
  _ = () => "Último píxel",
  l = () => "Dernier pixel",
  o = () => "Ultimo pixel",
  a = () => "最後のピクセル",
  p = () => "Ostatni piksel",
  f = () => "Последний пиксель",
  h = () => "Останній піксель",
  x = () => "Pixel cuối cùng",
  G = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? s() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? _() : r === "fr" ? l() : r === "it" ? o() : r === "jp" ? a() : r === "pl" ? p() : r === "ru" ? f() : r === "uk" ? h() : x()
  },
  v = () => "Search user",
  k = () => "Buscar usuário",
  d = () => "搜索用户",
  j = () => "Benutzer suchen",
  m = () => "Buscar usuario",
  g = () => "Rechercher un utilisateur",
  V = () => "Cerca utente",
  B = () => "ユーザーを検索",
  z = () => "Szukaj użytkownika",
  L = () => "Поиск пользователя",
  w = () => "Пошук користувача",
  O = () => "Tìm người dùng",
  H = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? v() : r === "pt" ? k() : r === "ch" ? d() : r === "de" ? j() : r === "es" ? m() : r === "fr" ? g() : r === "it" ? V() : r === "jp" ? B() : r === "pl" ? z() : r === "ru" ? L() : r === "uk" ? w() : O()
  },
  P = () => "Visit",
  S = () => "Visitar",
  T = () => "访问",
  y = () => "Besuchen",
  C = () => "Visitar",
  D = () => "Visiter",
  R = () => "Visita",
  U = () => "訪問",
  b = () => "Odwiedź",
  q = () => "Перейти",
  A = () => "Перейти",
  E = () => "Thăm",
  I = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? P() : r === "pt" ? S() : r === "ch" ? T() : r === "de" ? y() : r === "es" ? C() : r === "fr" ? D() : r === "it" ? R() : r === "jp" ? U() : r === "pl" ? b() : r === "ru" ? q() : r === "uk" ? A() : E()
  };
export {
  G as l, H as s, I as v
};