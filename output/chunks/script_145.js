import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Appeal",
  p = () => "Apelo",
  a = () => "申诉",
  u = () => "Einspruch",
  o = () => "Apelación",
  c = () => "Recours",
  l = () => "Ricorso",
  s = () => "異議申立て",
  i = () => "Odwołanie",
  f = () => "Апелляция",
  _ = () => "Апеляція",
  h = () => "Kháng cáo",
  A = (d = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? p() : r === "ch" ? a() : r === "de" ? u() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? s() : r === "pl" ? i() : r === "ru" ? f() : r === "uk" ? _() : h()
  };
export {
  A as a
};