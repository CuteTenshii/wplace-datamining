import {
  g as e
} from "./BhCkpOlh.js";
const n = () => "Last pixel",
  s = () => "Último pixel",
  u = () => "最后一个像素",
  l = () => "Letzter Pixel",
  c = () => "Último píxel",
  o = () => "Dernier pixel",
  _ = () => "Ultimo pixel",
  p = () => "最後のピクセル",
  f = () => "Ostatni piksel",
  a = () => "Последний пиксель",
  x = () => "Останній піксель",
  v = () => "Pixel cuối cùng",
  D = (i = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? n() : t === "pt" ? s() : t === "ch" ? u() : t === "de" ? l() : t === "es" ? c() : t === "fr" ? o() : t === "it" ? _() : t === "jp" ? p() : t === "pl" ? f() : t === "ru" ? a() : t === "uk" ? x() : v()
  },
  d = () => "Visit",
  h = () => "Visitar",
  m = () => "访问",
  k = () => "Besuchen",
  V = () => "Visitar",
  j = () => "Visiter",
  g = () => "Visita",
  L = () => "訪問",
  O = () => "Odwiedź",
  P = () => "Перейти",
  w = () => "Перейти",
  z = () => "Thăm",
  T = (i = {}, r = {}) => {
    const t = r.locale ?? e();
    return t === "en" ? d() : t === "pt" ? h() : t === "ch" ? m() : t === "de" ? k() : t === "es" ? V() : t === "fr" ? j() : t === "it" ? g() : t === "jp" ? L() : t === "pl" ? O() : t === "ru" ? P() : t === "uk" ? w() : z()
  };
export {
  D as l, T as v
};