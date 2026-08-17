import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Refresh",
  s = () => "Atualizar",
  u = () => "刷新",
  f = () => "Aktualisieren",
  i = () => "Actualizar",
  c = () => "Actualiser",
  o = () => "Aggiorna",
  h = () => "更新",
  a = () => "Odśwież",
  _ = () => "Обновить",
  l = () => "Оновити",
  p = () => "Làm mới",
  m = (A = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? f() : r === "es" ? i() : r === "fr" ? c() : r === "it" ? o() : r === "jp" ? h() : r === "pl" ? a() : r === "ru" ? _() : r === "uk" ? l() : p()
  };
export {
  m as r
};