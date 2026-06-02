import {
  g as t
} from "./BhCkpOlh.js";
const a = () => "Dashboard",
  e = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  d = () => "Panel",
  u = () => "Tableau de bord",
  c = () => "Pannello",
  i = () => "ダッシュボード",
  h = () => "Panel",
  b = () => "Панель",
  f = () => "Панель",
  l = () => "Bảng điều khiển",
  P = (_ = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? a() : r === "pt" ? e() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? d() : r === "fr" ? u() : r === "it" ? c() : r === "jp" ? i() : r === "pl" ? h() : r === "ru" ? b() : r === "uk" ? f() : l()
  };
export {
  P as d
};