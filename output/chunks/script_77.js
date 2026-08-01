import {
  g as t
} from "./BhCkpOlh.js";
const e = () => "Color",
  c = () => "Cor",
  u = () => "颜色",
  s = () => "Farbe",
  i = () => "Color",
  p = () => "Couleur",
  l = () => "Colore",
  f = () => "色",
  _ = () => "Kolor",
  a = () => "Цвет",
  y = () => "Колір",
  C = () => "Màu sắc",
  S = (n = {}, o = {}) => {
    const r = o.locale ?? t();
    return r === "en" ? e() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? s() : r === "es" ? i() : r === "fr" ? p() : r === "it" ? l() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? a() : r === "uk" ? y() : C()
  },
  h = () => "Copy",
  j = () => "Copiar",
  d = () => "复制",
  k = () => "Kopieren",
  K = () => "Copiar",
  g = () => "Copier",
  m = () => "Copia",
  v = () => "コピー",
  b = () => "Kopiuj",
  x = () => "Копировать",
  F = () => "Копіювати",
  L = () => "Sao chép",
  q = (n = {}, o = {}) => {
    const r = o.locale ?? t();
    return r === "en" ? h() : r === "pt" ? j() : r === "ch" ? d() : r === "de" ? k() : r === "es" ? K() : r === "fr" ? g() : r === "it" ? m() : r === "jp" ? v() : r === "pl" ? b() : r === "ru" ? x() : r === "uk" ? F() : L()
  };
export {
  q as a, S as c
};