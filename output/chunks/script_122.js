import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Search",
  c = () => "Buscar",
  s = () => "搜索",
  u = () => "Suchen",
  a = () => "Buscar",
  o = () => "Rechercher",
  h = () => "Cerca",
  i = () => "検索",
  f = () => "Szukaj",
  _ = () => "Поиск",
  p = () => "Пошук",
  l = () => "Tìm kiếm",
  j = (k = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? c() : r === "ch" ? s() : r === "de" ? u() : r === "es" ? a() : r === "fr" ? o() : r === "it" ? h() : r === "jp" ? i() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? p() : l()
  };
export {
  j as s
};