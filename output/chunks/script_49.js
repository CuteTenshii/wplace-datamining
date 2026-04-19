import {
  g as n
} from "./BhCkpOlh.js";
const o = () => "Copy",
  e = () => "Copiar",
  c = () => "复制",
  p = () => "Kopieren",
  u = () => "Copiar",
  i = () => "Copier",
  s = () => "Copia",
  f = () => "コピー",
  y = () => "Kopiuj",
  _ = () => "Копировать",
  a = () => "Копіювати",
  l = () => "Sao chép",
  j = (C = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? o() : r === "pt" ? e() : r === "ch" ? c() : r === "de" ? p() : r === "es" ? u() : r === "fr" ? i() : r === "it" ? s() : r === "jp" ? f() : r === "pl" ? y() : r === "ru" ? _() : r === "uk" ? a() : l()
  };
export {
  j as c
};