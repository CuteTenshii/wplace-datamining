import {
  g as e
} from "./BhCkpOlh.js";
const c = () => "Cancel",
  t = () => "Cancelar",
  u = () => "取消",
  l = () => "Abbrechen",
  a = () => "Cancelar",
  o = () => "Annuler",
  s = () => "Annulla",
  i = () => "キャンセル",
  f = () => "Anuluj",
  _ = () => "Отмена",
  p = () => "Скасувати",
  A = () => "Hủy",
  C = (h = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? c() : n === "pt" ? t() : n === "ch" ? u() : n === "de" ? l() : n === "es" ? a() : n === "fr" ? o() : n === "it" ? s() : n === "jp" ? i() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : A()
  };
export {
  C as c
};