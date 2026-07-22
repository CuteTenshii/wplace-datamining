import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "Alliances",
  l = () => "Alianças",
  a = () => "联盟",
  s = () => "Allianzen",
  i = () => "Alianzas",
  c = () => "Alliances",
  u = () => "Alleanze",
  o = () => "アライアンス",
  f = () => "Sojusze",
  _ = () => "Альянсы",
  p = () => "Альянси",
  A = () => "Các liên minh",
  j = (z = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? t() : n === "pt" ? l() : n === "ch" ? a() : n === "de" ? s() : n === "es" ? i() : n === "fr" ? c() : n === "it" ? u() : n === "jp" ? o() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : A()
  };
export {
  j as a
};