import {
  g as n
} from "./BhCkpOlh.js";
const u = () => "Month",
  o = () => "Mês",
  s = () => "月",
  i = () => "Monat",
  c = () => "Mes",
  _ = () => "Mois",
  f = () => "Mese",
  h = () => "月",
  d = () => "Miesiąc",
  m = () => "Месяц",
  a = () => "Місяць",
  p = () => "Tháng",
  $ = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? u() : t === "pt" ? o() : t === "ch" ? s() : t === "de" ? i() : t === "es" ? c() : t === "fr" ? _() : t === "it" ? f() : t === "jp" ? h() : t === "pl" ? d() : t === "ru" ? m() : t === "uk" ? a() : p()
  },
  l = () => "this month",
  y = () => "neste mês",
  D = () => "本月",
  I = () => "diesen Monat",
  j = () => "este mes",
  k = () => "ce mois-ci",
  g = () => "questo mese",
  M = () => "今月",
  v = () => "w tym miesiącu",
  H = () => "в этом месяце",
  w = () => "цього місяця",
  z = () => "tháng này",
  tt = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? l() : t === "pt" ? y() : t === "ch" ? D() : t === "de" ? I() : t === "es" ? j() : t === "fr" ? k() : t === "it" ? g() : t === "jp" ? M() : t === "pl" ? v() : t === "ru" ? H() : t === "uk" ? w() : z()
  },
  T = () => "Today",
  q = () => "Hoje",
  x = () => "今天",
  A = () => "Heute",
  B = () => "Hoy",
  L = () => "Aujourd’hui",
  O = () => "Oggi",
  U = () => "今日",
  b = () => "Dziś",
  C = () => "Сегодня",
  E = () => "Сьогодні",
  F = () => "Hôm nay",
  rt = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? T() : t === "pt" ? q() : t === "ch" ? x() : t === "de" ? A() : t === "es" ? B() : t === "fr" ? L() : t === "it" ? O() : t === "jp" ? U() : t === "pl" ? b() : t === "ru" ? C() : t === "uk" ? E() : F()
  },
  G = () => "User ID",
  J = () => "ID do usuário",
  K = () => "用户ID",
  N = () => "Benutzer-ID",
  P = () => "ID de usuario",
  Q = () => "ID utilisateur",
  R = () => "ID dell'utente",
  S = () => "ユーザーID",
  V = () => "ID użytkownika",
  W = () => "Идентификатор пользователя",
  X = () => "ID користувача",
  Y = () => "ID người dùng",
  nt = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? G() : t === "pt" ? J() : t === "ch" ? K() : t === "de" ? N() : t === "es" ? P() : t === "fr" ? Q() : t === "it" ? R() : t === "jp" ? S() : t === "pl" ? V() : t === "ru" ? W() : t === "uk" ? X() : Y()
  };
export {
  tt as a, $ as m, rt as t, nt as u
};