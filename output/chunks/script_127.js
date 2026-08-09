import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "Next",
  o = () => "Próximo",
  s = () => "下一张",
  c = () => "Weiter",
  i = () => "Siguiente",
  _ = () => "Suivant",
  l = () => "Successivo",
  a = () => "次へ",
  p = () => "Następny",
  f = () => "Далее",
  v = () => "Далі",
  x = () => "Tiếp",
  L = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? o() : r === "ch" ? s() : r === "de" ? c() : r === "es" ? i() : r === "fr" ? _() : r === "it" ? l() : r === "jp" ? a() : r === "pl" ? p() : r === "ru" ? f() : r === "uk" ? v() : x()
  },
  d = () => "Previous",
  k = () => "Anterior",
  P = () => "上一张",
  h = () => "Zurück",
  j = () => "Anterior",
  g = () => "Précédent",
  m = () => "Precedente",
  S = () => "前へ",
  A = () => "Poprzedni",
  N = () => "Назад",
  T = () => "Назад",
  y = () => "Trước",
  W = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? d() : r === "pt" ? k() : r === "ch" ? P() : r === "de" ? h() : r === "es" ? j() : r === "fr" ? g() : r === "it" ? m() : r === "jp" ? S() : r === "pl" ? A() : r === "ru" ? N() : r === "uk" ? T() : y()
  };
export {
  L as a, W as c
};