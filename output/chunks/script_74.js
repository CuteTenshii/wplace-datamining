import {
  g as t
} from "./BhCkpOlh.js";
const e = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  f = () => "Confirmar",
  u = () => "Confirmer",
  m = () => "Conferma",
  s = () => "確認",
  _ = () => "Potwierdź",
  p = () => "Подтвердить",
  a = () => "Підтвердити",
  l = () => "Xác nhận",
  g = (C = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? e() : r === "pt" ? o() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? f() : r === "fr" ? u() : r === "it" ? m() : r === "jp" ? s() : r === "pl" ? _() : r === "ru" ? p() : r === "uk" ? a() : l()
  };
export {
  g as c
};