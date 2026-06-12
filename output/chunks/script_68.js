import {
  g as n
} from "./BhCkpOlh.js";
const t = () => "Leaderboard",
  a = () => "Ranking",
  o = () => "排行榜",
  d = () => "Bestenliste",
  u = () => "Clasificación",
  s = () => "Classement",
  l = () => "Classifica",
  i = () => "ランキング",
  c = () => "Ranking",
  f = () => "Таблица лидеров",
  b = () => "Таблиця лідерів",
  _ = () => "Bảng xếp hạng",
  k = (p = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? d() : r === "es" ? u() : r === "fr" ? s() : r === "it" ? l() : r === "jp" ? i() : r === "pl" ? c() : r === "ru" ? f() : r === "uk" ? b() : _()
  };
export {
  k as l
};