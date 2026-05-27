import {
  g as r
} from "./BhCkpOlh.js";
const a = () => "No alliance",
  t = () => "Sem aliança",
  l = () => "无联盟",
  i = () => "Ohne Allianz",
  o = () => "Sin alianza",
  c = () => "Sans alliance",
  u = () => "Senza alleanza",
  _ = () => "同盟なし",
  s = () => "Bez sojuszu",
  f = () => "Без альянса",
  p = () => "Без альянсу",
  z = () => "Không liên minh",
  S = (h = {}, e = {}) => {
    const n = e.locale ?? r();
    return n === "en" ? a() : n === "pt" ? t() : n === "ch" ? l() : n === "de" ? i() : n === "es" ? o() : n === "fr" ? c() : n === "it" ? u() : n === "jp" ? _() : n === "pl" ? s() : n === "ru" ? f() : n === "uk" ? p() : z()
  };
export {
  S as n
};