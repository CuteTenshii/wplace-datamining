import {
  g as e
} from "./BhCkpOlh.js";
const i = () => "Last pixel",
  s = () => "Último pixel",
  u = () => "最后一个像素",
  c = () => "Letzter Pixel",
  l = () => "Último píxel",
  o = () => "Dernier pixel",
  _ = () => "Ultimo pixel",
  a = () => "最後のピクセル",
  p = () => "Ostatni piksel",
  f = () => "Последний пиксель",
  h = () => "Останній піксель",
  x = () => "Pixel cuối cùng",
  G = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? i() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? c() : r === "es" ? l() : r === "fr" ? o() : r === "it" ? _() : r === "jp" ? a() : r === "pl" ? p() : r === "ru" ? f() : r === "uk" ? h() : x()
  },
  v = () => "Search",
  k = () => "Buscar",
  d = () => "搜索",
  m = () => "Suchen",
  j = () => "Buscar",
  V = () => "Rechercher",
  g = () => "Cerca",
  B = () => "検索",
  L = () => "Szukaj",
  S = () => "Поиск",
  z = () => "Пошук",
  O = () => "Tìm kiếm",
  H = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? v() : r === "pt" ? k() : r === "ch" ? d() : r === "de" ? m() : r === "es" ? j() : r === "fr" ? V() : r === "it" ? g() : r === "jp" ? B() : r === "pl" ? L() : r === "ru" ? S() : r === "uk" ? z() : O()
  },
  P = () => "Visit",
  T = () => "Visitar",
  w = () => "访问",
  C = () => "Besuchen",
  D = () => "Visitar",
  R = () => "Visiter",
  U = () => "Visita",
  b = () => "訪問",
  q = () => "Odwiedź",
  y = () => "Перейти",
  A = () => "Перейти",
  E = () => "Thăm",
  I = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? P() : r === "pt" ? T() : r === "ch" ? w() : r === "de" ? C() : r === "es" ? D() : r === "fr" ? R() : r === "it" ? U() : r === "jp" ? b() : r === "pl" ? q() : r === "ru" ? y() : r === "uk" ? A() : E()
  };
export {
  G as l, H as s, I as v
};