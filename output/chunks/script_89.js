import {
  g as n
} from "./BhCkpOlh.js";
const e = () => "Add",
  d = () => "Adicionar",
  u = () => "添加",
  o = () => "Hinzufügen",
  a = () => "Añadir",
  i = () => "Ajouter",
  c = () => "Aggiungi",
  s = () => "追加",
  f = () => "Dodaj",
  _ = () => "Добавить",
  p = () => "Додати",
  l = () => "Thêm",
  j = (g = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? e() : r === "pt" ? d() : r === "ch" ? u() : r === "de" ? o() : r === "es" ? a() : r === "fr" ? i() : r === "it" ? c() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? p() : l()
  };
export {
  j as a
};