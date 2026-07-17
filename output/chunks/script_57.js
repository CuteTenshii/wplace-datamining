import {
  g as n
} from "./BhCkpOlh.js";
const o = () => "Month",
  u = () => "Mês",
  s = () => "月",
  i = () => "Monat",
  c = () => "Mes",
  h = () => "Mois",
  _ = () => "Mese",
  f = () => "月",
  m = () => "Miesiąc",
  a = () => "Месяц",
  p = () => "Місяць",
  d = () => "Tháng",
  K = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? o() : t === "pt" ? u() : t === "ch" ? s() : t === "de" ? i() : t === "es" ? c() : t === "fr" ? h() : t === "it" ? _() : t === "jp" ? f() : t === "pl" ? m() : t === "ru" ? a() : t === "uk" ? p() : d()
  },
  l = () => "this month",
  y = () => "neste mês",
  j = () => "本月",
  M = () => "diesen Monat",
  g = () => "este mes",
  k = () => "ce mois-ci",
  H = () => "questo mese",
  v = () => "今月",
  T = () => "w tym miesiącu",
  q = () => "в этом месяце",
  w = () => "цього місяця",
  x = () => "tháng này",
  N = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? l() : t === "pt" ? y() : t === "ch" ? j() : t === "de" ? M() : t === "es" ? g() : t === "fr" ? k() : t === "it" ? H() : t === "jp" ? v() : t === "pl" ? T() : t === "ru" ? q() : t === "uk" ? w() : x()
  },
  z = () => "Today",
  A = () => "Hoje",
  D = () => "今天",
  L = () => "Heute",
  O = () => "Hoy",
  b = () => "Aujourd’hui",
  B = () => "Oggi",
  C = () => "今日",
  E = () => "Dziś",
  F = () => "Сегодня",
  G = () => "Сьогодні",
  I = () => "Hôm nay",
  P = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? z() : t === "pt" ? A() : t === "ch" ? D() : t === "de" ? L() : t === "es" ? O() : t === "fr" ? b() : t === "it" ? B() : t === "jp" ? C() : t === "pl" ? E() : t === "ru" ? F() : t === "uk" ? G() : I()
  };
export {
  N as a, K as m, P as t
};