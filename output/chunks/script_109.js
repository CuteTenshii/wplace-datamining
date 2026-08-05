import {
  g as t
} from "./BhCkpOlh.js";
const e = () => "Showing",
  o = () => "Mostrando",
  s = () => "显示",
  i = () => "Anzeigen",
  u = () => "Mostrando",
  c = () => "Affichage de",
  g = () => "Mostrando",
  h = () => "表示",
  f = () => "Wyświetlanie",
  w = () => "Отображается",
  _ = () => "Показуючи",
  a = () => "Hiển thị",
  d = (p = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? e() : n === "pt" ? o() : n === "ch" ? s() : n === "de" ? i() : n === "es" ? u() : n === "fr" ? c() : n === "it" ? g() : n === "jp" ? h() : n === "pl" ? f() : n === "ru" ? w() : n === "uk" ? _() : a()
  };
export {
  d as s
};