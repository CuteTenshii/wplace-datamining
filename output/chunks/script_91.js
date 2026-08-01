import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "Remove",
  s = () => "Remover",
  o = () => "移除",
  i = () => "Entfernen",
  c = () => "Eliminar",
  v = () => "Retirer",
  a = () => "Rimuovi",
  f = () => "削除",
  _ = () => "Usuń",
  m = () => "Удалить",
  p = () => "Видалити",
  l = () => "Xóa",
  X = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? v() : r === "it" ? a() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? m() : r === "uk" ? p() : l()
  },
  d = () => "Save",
  h = () => "Salvar",
  j = () => "保存",
  k = () => "Speichern",
  R = () => "Guardar",
  S = () => "Enregistrer",
  g = () => "Salva",
  E = () => "保存",
  L = () => "Zapisz",
  x = () => "Сохранить",
  z = () => "Зберегти",
  G = () => "Lưu",
  Z = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? d() : r === "pt" ? h() : r === "ch" ? j() : r === "de" ? k() : r === "es" ? R() : r === "fr" ? S() : r === "it" ? g() : r === "jp" ? E() : r === "pl" ? L() : r === "ru" ? x() : r === "uk" ? z() : G()
  };
export {
  X as r, Z as s
};