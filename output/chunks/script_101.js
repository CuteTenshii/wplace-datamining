import {
  g as n
} from "./BhCkpOlh.js";
const e = () => "Description",
  i = () => "Descrição",
  c = () => "描述",
  s = () => "Beschreibung",
  o = () => "Descripción",
  u = () => "Description",
  p = () => "Descrizione",
  d = () => "説明",
  f = () => "Opis",
  _ = () => "Описание",
  l = () => "Опис",
  a = () => "Mô tả",
  h = (D = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? e() : r === "pt" ? i() : r === "ch" ? c() : r === "de" ? s() : r === "es" ? o() : r === "fr" ? u() : r === "it" ? p() : r === "jp" ? d() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? l() : a()
  };
export {
  h as d
};