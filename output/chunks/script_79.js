import {
  g as n
} from "./BhCkpOlh.js";
const i = () => "Pixels painted",
  r = () => "Pixels pintados",
  p = () => "已绘制像素数",
  s = () => "Gemalte Pixel",
  l = () => "Píxeles pintados",
  u = () => "Pixels peints",
  _ = () => "Pixel dipinti",
  a = () => "塗られたピクセル数",
  o = () => "Pomalowane piksele",
  x = () => "Нарисованные пиксели",
  c = () => "Намальовані пікселі",
  d = () => "Pixel đã tô",
  m = (f = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? r() : e === "ch" ? p() : e === "de" ? s() : e === "es" ? l() : e === "fr" ? u() : e === "it" ? _() : e === "jp" ? a() : e === "pl" ? o() : e === "ru" ? x() : e === "uk" ? c() : d()
  };
export {
  m as p
};