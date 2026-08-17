import {
  g as n
} from "./BhCkpOlh.js";
const o = () => "Total",
  e = () => "Total",
  u = () => "总计",
  a = () => "Gesamt",
  l = () => "Total",
  s = () => "Total",
  c = () => "Totale",
  i = () => "合計",
  f = () => "Suma",
  _ = () => "Всего",
  p = () => "Усього",
  T = () => "Tổng",
  d = (m = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? o() : t === "pt" ? e() : t === "ch" ? u() : t === "de" ? a() : t === "es" ? l() : t === "fr" ? s() : t === "it" ? c() : t === "jp" ? i() : t === "pl" ? f() : t === "ru" ? _() : t === "uk" ? p() : T()
  };
export {
  d as t
};