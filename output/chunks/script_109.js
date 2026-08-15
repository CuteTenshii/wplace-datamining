import {
  g as i
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as o,
  k as p
} from "./DUZ_qUVk.js";
import {
  b as s
} from "./2LwYy2UE.js";
import {
  r as u
} from "./DXFW01RN.js";
const v = () => "Preview",
  c = () => "Prévia",
  a = () => "预览",
  f = () => "Vorschau",
  w = () => "Vista previa",
  l = () => "Aperçu",
  _ = () => "Anteprima",
  m = () => "プレビュー",
  g = () => "Podgląd",
  h = () => "Предпросмотр",
  d = () => "Попередній перегляд",
  $ = () => "Xem trước",
  L = (t = {}, e = {}) => {
    const r = e.locale ?? i();
    return r === "en" ? v() : r === "pt" ? c() : r === "ch" ? a() : r === "de" ? f() : r === "es" ? w() : r === "fr" ? l() : r === "it" ? _() : r === "jp" ? m() : r === "pl" ? g() : r === "ru" ? h() : r === "uk" ? d() : $()
  };
var x = new Set(["$$slots", "$$events", "$$legacy"]),
  k = p('<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function M(t, e) {
  let r = u(e, x);
  var n = k();
  s(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), o(t, n)
}
export {
  M as U, L as p
};