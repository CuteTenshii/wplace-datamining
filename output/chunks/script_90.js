import {
  g as o
} from "./BhCkpOlh.js";
const t = () => "Load more",
  n = () => "Carregar mais",
  a = () => "加载更多",
  u = () => "Mehr laden",
  _ = () => "Cargar más",
  l = () => "Charger plus",
  c = () => "Carica altro",
  s = () => "さらに読み込む",
  i = () => "Wczytaj więcej",
  m = () => "Загрузить ещё",
  d = () => "Завантажити ще",
  f = () => "Tải thêm",
  h = (p = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? t() : r === "pt" ? n() : r === "ch" ? a() : r === "de" ? u() : r === "es" ? _() : r === "fr" ? l() : r === "it" ? c() : r === "jp" ? s() : r === "pl" ? i() : r === "ru" ? m() : r === "uk" ? d() : f()
  };
export {
  h as l
};