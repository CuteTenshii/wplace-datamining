import {
  g as o
} from "./BhCkpOlh.js";
const r = () => "Not found",
  u = () => "Não encontrado",
  e = () => "未找到",
  f = () => "Nicht gefunden",
  _ = () => "No encontrado",
  c = () => "Introuvable",
  d = () => "Non trovato",
  i = () => "見つかりません",
  s = () => "Nie znaleziono",
  a = () => "Не найдено",
  l = () => "Не знайдено",
  p = () => "Không tìm thấy",
  g = (N = {}, t = {}) => {
    const n = t.locale ?? o();
    return n === "en" ? r() : n === "pt" ? u() : n === "ch" ? e() : n === "de" ? f() : n === "es" ? _() : n === "fr" ? c() : n === "it" ? d() : n === "jp" ? i() : n === "pl" ? s() : n === "ru" ? a() : n === "uk" ? l() : p()
  };
export {
  g as n
};