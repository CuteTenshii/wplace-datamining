import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "Unban",
  e = () => "Desbanir",
  a = () => "解封",
  s = () => "Entbannen",
  b = () => "Desbanear",
  c = () => "Débannir",
  o = () => "Unban",
  i = () => "BANを解除",
  f = () => "Odbanuj",
  _ = () => "Разбанить",
  p = () => "Розбанити",
  l = () => "Gỡ cấm",
  m = (d = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? e() : n === "ch" ? a() : n === "de" ? s() : n === "es" ? b() : n === "fr" ? c() : n === "it" ? o() : n === "jp" ? i() : n === "pl" ? f() : n === "ru" ? _() : n === "uk" ? p() : l()
  };
export {
  m as u
};