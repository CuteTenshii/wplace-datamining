import {
  g as o
} from "./BhCkpOlh.js";
const e = () => "Go to store",
  n = () => "Ir para a loja",
  _ = () => "前往商店",
  s = () => "Zum Shop",
  u = () => "Ir a la tienda",
  c = () => "Aller à la boutique",
  i = () => "Vai al negozio",
  g = () => "ストアへ",
  a = () => "Przejdź do sklepu",
  f = () => "Перейти в магазин",
  l = () => "Перейти до магазину",
  p = () => "Đến cửa hàng",
  j = (d = {}, r = {}) => {
    const t = r.locale ?? o();
    return t === "en" ? e() : t === "pt" ? n() : t === "ch" ? _() : t === "de" ? s() : t === "es" ? u() : t === "fr" ? c() : t === "it" ? i() : t === "jp" ? g() : t === "pl" ? a() : t === "ru" ? f() : t === "uk" ? l() : p()
  };
export {
  j as g
};