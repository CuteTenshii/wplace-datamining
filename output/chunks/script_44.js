import {
  g as t
} from "./BhCkpOlh.js";
const i = () => "Description",
  s = () => "Descrição",
  p = () => "描述",
  u = () => "Beschreibung",
  c = () => "Descripción",
  o = () => "Description",
  _ = () => "Descrizione",
  l = () => "説明",
  d = () => "Opis",
  a = () => "Описание",
  f = () => "Опис",
  x = () => "Mô tả",
  L = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? _() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? a() : e === "uk" ? f() : x()
  },
  P = () => "Pixels painted",
  h = () => "Pixels pintados",
  k = () => "已绘制像素数",
  D = () => "Gemalte Pixel",
  j = () => "Píxeles pintados",
  m = () => "Pixels peints",
  g = () => "Pixel dipinti",
  v = () => "塗られたピクセル数",
  b = () => "Pomalowane piksele",
  w = () => "Нарисованные пиксели",
  z = () => "Намальовані пікселі",
  B = () => "Pixel đã tô",
  M = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? P() : e === "pt" ? h() : e === "ch" ? k() : e === "de" ? D() : e === "es" ? j() : e === "fr" ? m() : e === "it" ? g() : e === "jp" ? v() : e === "pl" ? b() : e === "ru" ? w() : e === "uk" ? z() : B()
  };
export {
  L as d, M as p
};