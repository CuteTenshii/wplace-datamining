import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Save",
  s = () => "Salvar",
  u = () => "保存",
  a = () => "Speichern",
  c = () => "Guardar",
  o = () => "Enregistrer",
  i = () => "Salva",
  v = () => "保存",
  f = () => "Zapisz",
  _ = () => "Сохранить",
  p = () => "Зберегти",
  l = () => "Lưu",
  g = (S = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? a() : r === "es" ? c() : r === "fr" ? o() : r === "it" ? i() : r === "jp" ? v() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? p() : l()
  };
export {
  g as s
};