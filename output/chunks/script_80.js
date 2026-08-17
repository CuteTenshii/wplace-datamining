import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "Alliance",
  l = () => "Aliança",
  a = () => "联盟",
  i = () => "Allianz",
  c = () => "Alianza",
  u = () => "Alliance",
  o = () => "Alleanza",
  s = () => "アライアンス",
  f = () => "Sojusz",
  _ = () => "Альянс",
  p = () => "Альянс",
  A = () => "Liên minh",
  j = (z = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? t() : n === "pt" ? l() : n === "ch" ? a() : n === "de" ? i() : n === "es" ? c() : n === "fr" ? u() : n === "it" ? o() : n === "jp" ? s() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : A()
  };
export {
  j as a
};