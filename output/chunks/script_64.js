import {
  g as e
} from "./BhCkpOlh.js";
const n = () => "Other",
  o = () => "Outro motivo",
  u = () => "其他",
  c = () => "Anderer Grund",
  s = () => "Otro",
  i = () => "Autre raison",
  h = () => "Altro motivo",
  f = () => "その他",
  _ = () => "Inny powód",
  p = () => "Другое",
  l = () => "Інше",
  a = () => "Khác",
  v = (d = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? n() : r === "pt" ? o() : r === "ch" ? u() : r === "de" ? c() : r === "es" ? s() : r === "fr" ? i() : r === "it" ? h() : r === "jp" ? f() : r === "pl" ? _() : r === "ru" ? p() : r === "uk" ? l() : a()
  };
export {
  v as o
};