import {
  g as u
} from "./BhCkpOlh.js";
const n = () => "Audit Logs",
  o = () => "Logs de Auditoria",
  i = () => "审计日志",
  e = () => "Prüfprotokolle",
  s = () => "Registros de auditoría",
  a = () => "Journaux d’audit",
  d = () => "Log di audit",
  _ = () => "監査ログ",
  l = () => "Dzienniki audytu",
  c = () => "Журналы аудита",
  g = () => "Журнали аудиту",
  f = () => "Nhật ký kiểm tra",
  L = (p = {}, r = {}) => {
    const t = r.locale ?? u();
    return t === "en" ? n() : t === "pt" ? o() : t === "ch" ? i() : t === "de" ? e() : t === "es" ? s() : t === "fr" ? a() : t === "it" ? d() : t === "jp" ? _() : t === "pl" ? l() : t === "ru" ? c() : t === "uk" ? g() : f()
  };
export {
  L as a
};