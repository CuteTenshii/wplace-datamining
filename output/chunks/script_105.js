import {
  g as n
} from "./BhCkpOlh.js";
const e = () => "Sort",
  o = () => "Ordenar",
  s = () => "排序",
  u = () => "Sortieren",
  _ = () => "Ordenar",
  a = () => "Trier",
  c = () => "Ordinare",
  i = () => "並べ替える",
  f = () => "Sortować",
  p = () => "Сортировать",
  l = () => "Сортувати",
  d = () => "Sắp xếp",
  g = (S = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? e() : r === "pt" ? o() : r === "ch" ? s() : r === "de" ? u() : r === "es" ? _() : r === "fr" ? a() : r === "it" ? c() : r === "jp" ? i() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? l() : d()
  };
export {
  g as a
};