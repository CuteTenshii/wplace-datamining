import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "None",
  o = () => "Nenhum",
  u = () => "无",
  c = () => "Keine",
  s = () => "Ninguno",
  i = () => "Aucun",
  f = () => "Nessuno",
  _ = () => "なし",
  p = () => "Brak",
  l = () => "Нет",
  a = () => "Жодного",
  g = () => "Không có",
  k = (h = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? t() : n === "pt" ? o() : n === "ch" ? u() : n === "de" ? c() : n === "es" ? s() : n === "fr" ? i() : n === "it" ? f() : n === "jp" ? _() : n === "pl" ? p() : n === "ru" ? l() : n === "uk" ? a() : g()
  };
export {
  k as n
};