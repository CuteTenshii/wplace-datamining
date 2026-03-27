import {
  g as n
} from "./CDV-gvd8.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "8b661710-f58b-4309-8992-d1f0962ae2da", t._sentryDebugIdIdentifier = "sentry-dbid-8b661710-f58b-4309-8992-d1f0962ae2da")
  } catch {}
})();
const i = () => "Description",
  s = () => "Descrição",
  p = () => "描述",
  o = () => "Beschreibung",
  u = () => "Descripción",
  c = () => "Description",
  d = () => "Descrizione",
  l = () => "説明",
  f = () => "Opis",
  a = () => "Описание",
  _ = () => "Опис",
  x = () => "Mô tả",
  T = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? p() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? a() : e === "uk" ? _() : x()
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