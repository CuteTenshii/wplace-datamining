import {
  g as t
} from "./BhCkpOlh.js";
const e = () => "Ban",
  u = () => "Banimento",
  a = () => "封禁",
  o = () => "Bannen",
  c = () => "Banear",
  s = () => "Bannir",
  i = () => "Ban",
  b = () => "BAN",
  f = () => "Ban",
  _ = () => "Забанить",
  p = () => "Бан",
  B = () => "Cấm",
  d = (l = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? e() : n === "pt" ? u() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? c() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? b() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : B()
  };
export {
  d as b
};