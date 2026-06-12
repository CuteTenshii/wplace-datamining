import {
  g as f
} from "./BhCkpOlh.js";
const n = () => "Staff",
  e = () => "Equipe",
  s = () => "工作人员",
  u = () => "Staff",
  a = () => "Staff",
  o = () => "Staff",
  c = () => "Staff",
  i = () => "スタッフ",
  _ = () => "Staff",
  p = () => "Персонал",
  l = () => "Персонал",
  S = () => "Staff",
  h = (d = {}, r = {}) => {
    const t = r.locale ?? f();
    return t === "en" ? n() : t === "pt" ? e() : t === "ch" ? s() : t === "de" ? u() : t === "es" ? a() : t === "fr" ? o() : t === "it" ? c() : t === "jp" ? i() : t === "pl" ? _() : t === "ru" ? p() : t === "uk" ? l() : S()
  };
export {
  h as s
};