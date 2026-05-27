import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Appeals",
  p = () => "Apelos",
  s = () => "申诉",
  a = () => "Einsprüche",
  u = () => "Apelaciones",
  o = () => "Recours",
  c = () => "Ricorsi",
  l = () => "異議申立て",
  i = () => "Odwołania",
  f = () => "Апелляции",
  _ = () => "Апеляції",
  h = () => "Các kháng cáo",
  k = (d = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? p() : r === "ch" ? s() : r === "de" ? a() : r === "es" ? u() : r === "fr" ? o() : r === "it" ? c() : r === "jp" ? l() : r === "pl" ? i() : r === "ru" ? f() : r === "uk" ? _() : h()
  };
export {
  k as a
};