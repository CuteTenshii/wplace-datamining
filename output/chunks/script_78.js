import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Clear",
  c = () => "Limpar",
  u = () => "清除",
  a = () => "Leeren",
  l = () => "Limpiar",
  i = () => "Effacer",
  o = () => "Pulisci",
  s = () => "クリア",
  f = () => "Wyczyść",
  _ = () => "Очистить",
  p = () => "Очистити",
  m = () => "Xóa",
  g = (L = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? a() : r === "es" ? l() : r === "fr" ? i() : r === "it" ? o() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? p() : m()
  };
export {
  g as c
};