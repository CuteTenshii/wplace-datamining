import {
  g as r
} from "./BhCkpOlh.js";
const n = () => "Delete",
  u = () => "Deletar",
  _ = () => "删除",
  l = () => "Löschen",
  i = () => "Eliminar",
  s = () => "Supprimer",
  c = () => "Eliminare",
  o = () => "削除",
  d = () => "Usuń",
  f = () => "Удалить",
  p = () => "Видалити",
  a = () => "Xóa",
  g = (m = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? n() : e === "pt" ? u() : e === "ch" ? _() : e === "de" ? l() : e === "es" ? i() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? o() : e === "pl" ? d() : e === "ru" ? f() : e === "uk" ? p() : a()
  };
export {
  g as _
};