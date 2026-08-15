import {
  g as n
} from "./BhCkpOlh.js";
const o = () => "Error loading",
  t = () => "Erro ao carregar",
  i = () => "加载出错",
  a = () => "Fehler beim Laden",
  u = () => "Error al cargar",
  l = () => "Erreur lors du chargement",
  _ = () => "Errore nel caricamento",
  c = () => "読み込みエラー",
  d = () => "Błąd ładowania",
  s = () => "Ошибка загрузки",
  g = () => "Помилка завантаження",
  f = () => "Lỗi tải dữ liệu",
  E = (p = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? o() : r === "pt" ? t() : r === "ch" ? i() : r === "de" ? a() : r === "es" ? u() : r === "fr" ? l() : r === "it" ? _() : r === "jp" ? c() : r === "pl" ? d() : r === "ru" ? s() : r === "uk" ? g() : f()
  };
export {
  E as e
};