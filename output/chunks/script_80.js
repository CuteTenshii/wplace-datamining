import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Role",
  o = () => "Cargo",
  u = () => "角色",
  l = () => "Rolle",
  c = () => "Rol",
  s = () => "Rôle",
  i = () => "Ruolo",
  f = () => "ロール",
  _ = () => "Rola",
  p = () => "Роль",
  a = () => "Роль",
  R = () => "Vai trò",
  h = (g = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? o() : r === "ch" ? u() : r === "de" ? l() : r === "es" ? c() : r === "fr" ? s() : r === "it" ? i() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? p() : r === "uk" ? a() : R()
  };
export {
  h as r
};