import {
  g as n
} from "./BhCkpOlh.js";
const i = () => "Common",
  u = () => "Comum",
  o = () => "常见",
  c = () => "Allgemein",
  a = () => "Común",
  _ = () => "Commun",
  s = () => "Comune",
  y = () => "共通",
  f = () => "Wspólny",
  p = () => "Обычный",
  l = () => "Звичайний",
  m = () => "Phổ biến",
  $ = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? i() : r === "pt" ? u() : r === "ch" ? o() : r === "de" ? c() : r === "es" ? a() : r === "fr" ? _() : r === "it" ? s() : r === "jp" ? y() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? l() : m()
  },
  d = () => "Epic",
  g = () => "Épico",
  h = () => "史诗",
  k = () => "Episch",
  j = () => "Épico",
  L = () => "Épique",
  R = () => "Epico",
  v = () => "エピック",
  C = () => "Epicki",
  E = () => "Эпический",
  b = () => "Епічний",
  H = () => "Tuyệt vời",
  rr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? d() : r === "pt" ? g() : r === "ch" ? h() : r === "de" ? k() : r === "es" ? j() : r === "fr" ? L() : r === "it" ? R() : r === "jp" ? v() : r === "pl" ? C() : r === "ru" ? E() : r === "uk" ? b() : H()
  },
  q = () => "Legendary",
  x = () => "Lendário",
  z = () => "传奇的",
  A = () => "Legendär",
  P = () => "Legendario",
  S = () => "Légendaire",
  T = () => "Leggendario",
  W = () => "伝説的",
  w = () => "Legendarny",
  B = () => "Легендарный",
  D = () => "Легендарний",
  F = () => "Huyền thoại",
  tr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? q() : r === "pt" ? x() : r === "ch" ? z() : r === "de" ? A() : r === "es" ? P() : r === "fr" ? S() : r === "it" ? T() : r === "jp" ? W() : r === "pl" ? w() : r === "ru" ? B() : r === "uk" ? D() : F()
  },
  G = () => "Rare",
  I = () => "Raro",
  J = () => "罕见",
  K = () => "Selten",
  M = () => "Raro",
  N = () => "Rare",
  O = () => "Raro",
  Q = () => "レア",
  U = () => "Rzadkie",
  V = () => "Редкий",
  X = () => "Рідкісний",
  Y = () => "Hiếm",
  nr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? G() : r === "pt" ? I() : r === "ch" ? J() : r === "de" ? K() : r === "es" ? M() : r === "fr" ? N() : r === "it" ? O() : r === "jp" ? Q() : r === "pl" ? U() : r === "ru" ? V() : r === "uk" ? X() : Y()
  };
export {
  rr as a, nr as b, $ as c, tr as r
};