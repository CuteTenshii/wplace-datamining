import {
  g as t
} from "./BhCkpOlh.js";
const n = () => "Home",
  o = () => "Início",
  u = () => "主页",
  c = () => "Startseite",
  i = () => "Inicio",
  s = () => "Accueil",
  h = () => "Home",
  m = () => "ホーム",
  f = () => "Strona główna",
  _ = () => "Главная",
  a = () => "Головна",
  p = () => "Trang chủ",
  d = (l = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? n() : r === "pt" ? o() : r === "ch" ? u() : r === "de" ? c() : r === "es" ? i() : r === "fr" ? s() : r === "it" ? h() : r === "jp" ? m() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? a() : p()
  };
export {
  d as h
};