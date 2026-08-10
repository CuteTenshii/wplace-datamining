import {
  g as n
} from "./BhCkpOlh.js";
const e = () => "Back",
  c = () => "Voltar",
  u = () => "返回",
  o = () => "Zurück",
  a = () => "Atrás",
  s = () => "Retour",
  i = () => "Indietro",
  k = () => "戻る",
  b = () => "Wróć",
  f = () => "Назад",
  _ = () => "Назад",
  l = () => "Quay lại",
  g = (p = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? e() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? o() : r === "es" ? a() : r === "fr" ? s() : r === "it" ? i() : r === "jp" ? k() : r === "pl" ? b() : r === "ru" ? f() : r === "uk" ? _() : l()
  };
export {
  g as b
};