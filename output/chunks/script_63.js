import {
  g as r
} from "./BhCkpOlh.js";
const u = () => "Timeout",
  n = () => "Suspender",
  o = () => "禁言",
  i = () => "Timeout",
  s = () => "Suspender",
  c = () => "Suspendre",
  m = () => "Sospendi",
  f = () => "タイムアウト",
  p = () => "Zawieszenie",
  _ = () => "Тайм-аут",
  a = () => "Тайм-аут",
  l = () => "Tạm khóa",
  h = (d = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? u() : t === "pt" ? n() : t === "ch" ? o() : t === "de" ? i() : t === "es" ? s() : t === "fr" ? c() : t === "it" ? m() : t === "jp" ? f() : t === "pl" ? p() : t === "ru" ? _() : t === "uk" ? a() : l()
  };
export {
  h as t
};