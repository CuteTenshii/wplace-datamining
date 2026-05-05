import {
  g as t
} from "./BhCkpOlh.js";
const e = () => "Loading...",
  o = () => "Carregando...",
  i = () => "加载中...",
  a = () => "Laden...",
  u = () => "Cargando...",
  l = () => "Chargement...",
  c = () => "Caricamento...",
  d = () => "読み込み中...",
  g = () => "Ładowanie...",
  s = () => "Загрузка...",
  f = () => "Завантаження...",
  _ = () => "Đang tải...",
  C = (p = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? e() : n === "pt" ? o() : n === "ch" ? i() : n === "de" ? a() : n === "es" ? u() : n === "fr" ? l() : n === "it" ? c() : n === "jp" ? d() : n === "pl" ? g() : n === "ru" ? s() : n === "uk" ? f() : _()
  };
export {
  C as l
};