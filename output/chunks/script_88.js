import {
  g as r
} from "./BhCkpOlh.js";
const a = () => "Ban appeal",
  t = () => "Revisão de banimento",
  p = () => "封禁申诉",
  u = () => "Bann-Einspruch",
  o = () => "Apelación de ban",
  c = () => "Recours de bannissement",
  s = () => "Ricorso contro il ban",
  _ = () => "BANの異議申立て",
  i = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  f = () => "Kháng cáo lệnh cấm",
  m = (d = {}, e = {}) => {
    const n = e.locale ?? r();
    return n === "en" ? a() : n === "pt" ? t() : n === "ch" ? p() : n === "de" ? u() : n === "es" ? o() : n === "fr" ? c() : n === "it" ? s() : n === "jp" ? _() : n === "pl" ? i() : n === "ru" ? l() : n === "uk" ? b() : f()
  };
export {
  m as b
};