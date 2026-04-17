import {
  g as n
} from "./DADvmwwi.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "3f8a47d5-3d9c-4954-89bf-c99c5fab64ef", t._sentryDebugIdIdentifier = "sentry-dbid-3f8a47d5-3d9c-4954-89bf-c99c5fab64ef")
  } catch {}
})();
const i = () => "Description",
  s = () => "Descrição",
  p = () => "描述",
  c = () => "Beschreibung",
  o = () => "Descripción",
  u = () => "Description",
  d = () => "Descrizione",
  f = () => "説明",
  l = () => "Opis",
  a = () => "Описание",
  _ = () => "Опис",
  x = () => "Mô tả",
  T = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? p() : e === "de" ? c() : e === "es" ? o() : e === "fr" ? u() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? l() : e === "ru" ? a() : e === "uk" ? _() : x()
  },
  b = () => "Pixels painted",
  g = () => "Pixels pintados",
  y = () => "已绘制像素数",
  D = () => "Gemalte Pixel",
  h = () => "Píxeles pintados",
  P = () => "Pixels peints",
  k = () => "Pixel dipinti",
  w = () => "塗られたピクセル数",
  E = () => "Pomalowane piksele",
  I = () => "Нарисованные пиксели",
  j = () => "Намальовані пікселі",
  m = () => "Pixel đã tô",
  L = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? b() : e === "pt" ? g() : e === "ch" ? y() : e === "de" ? D() : e === "es" ? h() : e === "fr" ? P() : e === "it" ? k() : e === "jp" ? w() : e === "pl" ? E() : e === "ru" ? I() : e === "uk" ? j() : m()
  };
export {
  T as d, L as p
};