import {
  g as e
} from "./BhCkpOlh.js";
const o = () => "Filter",
  u = () => "Filtro",
  i = () => "筛选",
  s = () => "Filter",
  f = () => "Filtro",
  c = () => "Filtre",
  l = () => "Filtro",
  p = () => "フィルター",
  _ = () => "Filtr",
  a = () => "Фильтр",
  d = () => "Фільтр",
  j = () => "Bộ lọc",
  $ = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? o() : r === "pt" ? u() : r === "ch" ? i() : r === "de" ? s() : r === "es" ? f() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? p() : r === "pl" ? _() : r === "ru" ? a() : r === "uk" ? d() : j()
  },
  h = () => "of",
  k = () => "de",
  F = () => "的",
  O = () => "von",
  v = () => "de",
  R = () => "de",
  m = () => "di",
  z = () => "の",
  g = () => "z",
  y = () => "из",
  Z = () => "з",
  b = () => "của",
  rr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? h() : r === "pt" ? k() : r === "ch" ? F() : r === "de" ? O() : r === "es" ? v() : r === "fr" ? R() : r === "it" ? m() : r === "jp" ? z() : r === "pl" ? g() : r === "ru" ? y() : r === "uk" ? Z() : b()
  },
  x = () => "Optional",
  B = () => "Opcional",
  L = () => "可选",
  T = () => "Optional",
  q = () => "Opcional",
  w = () => "Facultatif",
  A = () => "Opzionale",
  C = () => "オプション",
  D = () => "Opcjonalny",
  E = () => "Необязательно",
  G = () => "Необов'язково",
  H = () => "Tùy chọn",
  tr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? x() : r === "pt" ? B() : r === "ch" ? L() : r === "de" ? T() : r === "es" ? q() : r === "fr" ? w() : r === "it" ? A() : r === "jp" ? C() : r === "pl" ? D() : r === "ru" ? E() : r === "uk" ? G() : H()
  },
  I = () => "Reset",
  J = () => "Redefinir",
  K = () => "重置",
  M = () => "Zurücksetzen",
  N = () => "Restablecer",
  P = () => "Réinitialiser",
  Q = () => "Reimposta",
  S = () => "リセット",
  U = () => "Zresetuj",
  V = () => "Сбросить",
  W = () => "Скинути",
  X = () => "Đặt lại",
  er = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? I() : r === "pt" ? J() : r === "ch" ? K() : r === "de" ? M() : r === "es" ? N() : r === "fr" ? P() : r === "it" ? Q() : r === "jp" ? S() : r === "pl" ? U() : r === "ru" ? V() : r === "uk" ? W() : X()
  };
export {
  rr as a, $ as f, tr as o, er as r
};