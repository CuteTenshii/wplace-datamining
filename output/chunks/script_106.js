import {
  g as e
} from "./BhCkpOlh.js";
const n = () => "All roles",
  s = () => "Todos os cargos",
  _ = () => "所有职位",
  a = () => "Alle Stellen",
  o = () => "Todos los cargos",
  c = () => "Tous les postes",
  u = () => "Tutte le posizioni",
  i = () => "すべての役職",
  f = () => "Wszystkie stanowiska",
  p = () => "Все должности",
  d = () => "Усі посади",
  h = () => "Tất cả chức vụ",
  w = (l = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? n() : r === "pt" ? s() : r === "ch" ? _() : r === "de" ? a() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? u() : r === "jp" ? i() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? d() : h()
  },
  k = () => "Clear filters",
  T = () => "Limpar filtros",
  g = () => "清除筛选器",
  j = () => "Filter löschen",
  y = () => "Borrar filtros",
  m = () => "Effacer les filtres",
  v = () => "Cancella filtri",
  z = () => "フィルターをクリア",
  b = () => "Wyczyść filtry",
  A = () => "Очистить фильтры",
  C = () => "Очистити фільтри",
  L = () => "Xóa bộ lọc",
  x = (l = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? k() : r === "pt" ? T() : r === "ch" ? g() : r === "de" ? j() : r === "es" ? y() : r === "fr" ? m() : r === "it" ? v() : r === "jp" ? z() : r === "pl" ? b() : r === "ru" ? A() : r === "uk" ? C() : L()
  };
export {
  w as a, x as b
};