import {
  g as i
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as s,
  w as p
} from "./DmPVOt2G.js";
import {
  d as o
} from "./C9hRcinp.js";
import {
  r as a
} from "./D4ILXblz.js";
const l = () => "Pixels painted",
  u = () => "Pixels pintados",
  _ = () => "已绘制像素数",
  c = () => "Gemalte Pixel",
  x = () => "Píxeles pintados",
  d = () => "Pixels peints",
  f = () => "Pixel dipinti",
  m = () => "塗られたピクセル数",
  v = () => "Pomalowane piksele",
  g = () => "Нарисованные пиксели",
  w = () => "Намальовані пікселі",
  P = () => "Pixel đã tô",
  Z = (r = {}, t = {}) => {
    const e = t.locale ?? i();
    return e === "en" ? l() : e === "pt" ? u() : e === "ch" ? _() : e === "de" ? c() : e === "es" ? x() : e === "fr" ? d() : e === "it" ? f() : e === "jp" ? m() : e === "pl" ? v() : e === "ru" ? g() : e === "uk" ? w() : P()
  };
var T = new Set(["$$slots", "$$events", "$$legacy"]),
  q = p('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function b(r, t) {
  let e = a(t, T);
  var n = q();
  o(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), s(r, n)
}
export {
  b as L, Z as p
};