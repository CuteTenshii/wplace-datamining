import {
  g as n
} from "./BhCkpOlh.js";
const t = () => "Store Manager",
  a = () => "Gerente de Loja",
  o = () => "店长",
  s = () => "Filialleiter",
  u = () => "Gerente de Tienda",
  i = () => "Directeur de magasin",
  _ = () => "Responsabile del negozio",
  c = () => "店長",
  g = () => "Kierownik sklepu",
  m = () => "Менеджер магазина",
  f = () => "Менеджер магазину",
  l = () => "Quản lý cửa hàng",
  k = (p = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? i() : r === "it" ? _() : r === "jp" ? c() : r === "pl" ? g() : r === "ru" ? m() : r === "uk" ? f() : l()
  };
export {
  k as s
};