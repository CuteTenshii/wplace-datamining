import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "Banned",
  u = () => "Banido",
  a = () => "已封禁",
  o = () => "Gebannt",
  c = () => "Baneado",
  s = () => "Banni",
  d = () => "Bannato",
  i = () => "BAN済み",
  b = () => "Zbanowany",
  f = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  m = (l = {}, r = {}) => {
    const n = r.locale ?? e();
    return n === "en" ? t() : n === "pt" ? u() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? c() : n === "fr" ? s() : n === "it" ? d() : n === "jp" ? i() : n === "pl" ? b() : n === "ru" ? f() : n === "uk" ? _() : p()
  };
export {
  m as b
};