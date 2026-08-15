import {
  g as n
} from "./BhCkpOlh.js";
const e = () => "Permissions",
  i = () => "Permissões",
  t = () => "权限",
  o = () => "Berechtigungen",
  u = () => "Permisos",
  p = () => "Permissions",
  c = () => "Permessi",
  m = () => "権限",
  f = () => "Uprawnienia",
  _ = () => "Права",
  a = () => "Дозволи",
  l = () => "Quyền",
  h = (P = {}, s = {}) => {
    const r = s.locale ?? n();
    return r === "en" ? e() : r === "pt" ? i() : r === "ch" ? t() : r === "de" ? o() : r === "es" ? u() : r === "fr" ? p() : r === "it" ? c() : r === "jp" ? m() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? a() : l()
  };
export {
  h as p
};