import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "Copied",
  o = () => "Copiado",
  c = () => "已复制",
  i = () => "Kopiert",
  s = () => "Copiado",
  p = () => "Copié",
  a = () => "Copiato",
  f = () => "コピーしました。",
  _ = () => "Skopiowano",
  d = () => "Скопировано",
  b = () => "Скопійовано",
  l = () => "Đã sao chép",
  E = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? o() : n === "ch" ? c() : n === "de" ? i() : n === "es" ? s() : n === "fr" ? p() : n === "it" ? a() : n === "jp" ? f() : n === "pl" ? _() : n === "ru" ? d() : n === "uk" ? b() : l()
  },
  h = () => "Unban",
  j = () => "Desbanir",
  k = () => "解封",
  C = () => "Entbannen",
  m = () => "Desbanear",
  D = () => "Débannir",
  g = () => "Unban",
  v = () => "BANを解除",
  U = () => "Odbanuj",
  w = () => "Разбанить",
  x = () => "Розбанити",
  A = () => "Gỡ cấm",
  G = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? h() : n === "pt" ? j() : n === "ch" ? k() : n === "de" ? C() : n === "es" ? m() : n === "fr" ? D() : n === "it" ? g() : n === "jp" ? v() : n === "pl" ? U() : n === "ru" ? w() : n === "uk" ? x() : A()
  };
export {
  E as c, G as u
};