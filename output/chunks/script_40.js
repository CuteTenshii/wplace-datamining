import {
  g as r
} from "./C_a06lyj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "253debbf-f3ac-4aa7-bd08-d67174d98c5c", n._sentryDebugIdIdentifier = "sentry-dbid-253debbf-f3ac-4aa7-bd08-d67174d98c5c")
  })()
} catch {}
const i = () => "Description",
  s = () => "Descrição",
  o = () => "描述",
  d = () => "Beschreibung",
  p = () => "Descripción",
  u = () => "Description",
  c = () => "Descrizione",
  f = () => "説明",
  l = () => "Opis",
  a = () => "Описание",
  _ = () => "Опис",
  x = () => "Mô tả",
  v = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? d() : e === "es" ? p() : e === "fr" ? u() : e === "it" ? c() : e === "jp" ? f() : e === "pl" ? l() : e === "ru" ? a() : e === "uk" ? _() : x()
  },
  b = () => "Pixels painted",
  g = () => "Pixels pintados",
  y = () => "已绘制像素数",
  h = () => "Gemalte Pixel",
  w = () => "Píxeles pintados",
  D = () => "Pixels peints",
  P = () => "Pixel dipinti",
  k = () => "塗られたピクセル数",
  E = () => "Pomalowane piksele",
  I = () => "Нарисованные пиксели",
  T = () => "Намальовані пікселі",
  j = () => "Pixel đã tô",
  L = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? b() : e === "pt" ? g() : e === "ch" ? y() : e === "de" ? h() : e === "es" ? w() : e === "fr" ? D() : e === "it" ? P() : e === "jp" ? k() : e === "pl" ? E() : e === "ru" ? I() : e === "uk" ? T() : j()
  };
export {
  v as d, L as p
};