import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Preview",
  i = () => "Prévia",
  u = () => "预览",
  p = () => "Vorschau",
  o = () => "Vista previa",
  c = () => "Aperçu",
  s = () => "Anteprima",
  v = () => "プレビュー",
  f = () => "Podgląd",
  w = () => "Предпросмотр",
  _ = () => "Попередній перегляд",
  a = () => "Xem trước",
  m = (l = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? i() : r === "ch" ? u() : r === "de" ? p() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? s() : r === "jp" ? v() : r === "pl" ? f() : r === "ru" ? w() : r === "uk" ? _() : a()
  };
export {
  m as p
};