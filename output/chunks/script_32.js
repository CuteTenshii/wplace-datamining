import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Close",
  c = () => "Fechar",
  o = () => "关闭",
  s = () => "Schließen",
  u = () => "Cerrar",
  l = () => "Fermer",
  i = () => "Chiudi",
  f = () => "閉じる",
  _ = () => "Zamknij",
  p = () => "Закрыть",
  a = () => "Закрити",
  h = () => "Đóng",
  g = (m = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? c() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? l() : r === "it" ? i() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? p() : r === "uk" ? a() : h()
  };
export {
  g as c
};