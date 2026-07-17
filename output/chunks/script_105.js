import {
  g as r
} from "./BhCkpOlh.js";
const i = () => "Ticket corrections",
  s = () => "Correções de tickets",
  n = () => "工单更正",
  c = () => "Ticket-Korrekturen",
  _ = () => "Correcciones de tickets",
  l = () => "Corrections de tickets",
  o = () => "Correzioni ticket",
  u = () => "チケット修正",
  k = () => "Poprawki zgłoszeń",
  a = () => "Исправления тикетов",
  f = () => "Виправлення тікетів",
  v = () => "Sửa ticket",
  C = (p = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? i() : t === "pt" ? s() : t === "ch" ? n() : t === "de" ? c() : t === "es" ? _() : t === "fr" ? l() : t === "it" ? o() : t === "jp" ? u() : t === "pl" ? k() : t === "ru" ? a() : t === "uk" ? f() : v()
  };
export {
  C as t
};