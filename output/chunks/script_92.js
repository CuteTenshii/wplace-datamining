import {
  g as e
} from "./BhCkpOlh.js";
const t = () => "Reason",
  o = () => "Motivo",
  s = () => "原因",
  u = () => "Grund",
  a = () => "Motivo",
  i = () => "Raison",
  c = () => "Motivo",
  f = () => "理由",
  _ = () => "Powód",
  p = () => "Причина",
  l = () => "Причина",
  d = () => "Lý do",
  g = (v = {}, n = {}) => {
    const r = n.locale ?? e();
    return r === "en" ? t() : r === "pt" ? o() : r === "ch" ? s() : r === "de" ? u() : r === "es" ? a() : r === "fr" ? i() : r === "it" ? c() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? p() : r === "uk" ? l() : d()
  };
export {
  g as r
};