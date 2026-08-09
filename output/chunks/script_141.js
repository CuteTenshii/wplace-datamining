import {
  g as r
} from "./BhCkpOlh.js";
const n = () => "Tickets",
  c = () => "Tickets",
  i = () => "工单",
  s = () => "Tickets",
  u = () => "Tickets",
  k = () => "Tickets",
  o = () => "Ticket",
  f = () => "チケット",
  _ = () => "Tickety",
  p = () => "Тикеты",
  l = () => "Тікети",
  T = () => "Phiếu",
  d = (a = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? n() : t === "pt" ? c() : t === "ch" ? i() : t === "de" ? s() : t === "es" ? u() : t === "fr" ? k() : t === "it" ? o() : t === "jp" ? f() : t === "pl" ? _() : t === "ru" ? p() : t === "uk" ? l() : T()
  };
export {
  d as t
};