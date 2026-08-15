import {
  g as r
} from "./BhCkpOlh.js";
const l = () => "Last pixel",
  n = () => "Último pixel",
  i = () => "最后一个像素",
  s = () => "Letzter Pixel",
  u = () => "Último píxel",
  p = () => "Dernier pixel",
  _ = () => "Ultimo pixel",
  o = () => "最後のピクセル",
  c = () => "Ostatni piksel",
  x = () => "Последний пиксель",
  a = () => "Останній піксель",
  f = () => "Pixel cuối cùng",
  k = (m = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? l() : t === "pt" ? n() : t === "ch" ? i() : t === "de" ? s() : t === "es" ? u() : t === "fr" ? p() : t === "it" ? _() : t === "jp" ? o() : t === "pl" ? c() : t === "ru" ? x() : t === "uk" ? a() : f()
  };
export {
  k as l
};