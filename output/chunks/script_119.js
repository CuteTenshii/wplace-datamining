import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "Name",
  u = () => "Nome",
  o = () => "名称",
  a = () => "Name",
  m = () => "Nombre",
  c = () => "Nom",
  s = () => "Nome",
  i = () => "名前",
  f = () => "Nazwa",
  _ = () => "Имя",
  p = () => "Імʼя",
  l = () => "Tên",
  g = (N = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? t() : n === "pt" ? u() : n === "ch" ? o() : n === "de" ? a() : n === "es" ? m() : n === "fr" ? c() : n === "it" ? s() : n === "jp" ? i() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : l()
  };
export {
  g as n
};