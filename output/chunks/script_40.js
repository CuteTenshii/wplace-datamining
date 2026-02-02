import {
  g as r
} from "./B4ScQ8O8.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  p = () => "Beschreibung",
  u = () => "Descripción",
  d = () => "Description",
  c = () => "Descrizione",
  l = () => "説明",
  f = () => "Opis",
  a = () => "Описание",
  _ = () => "Опис",
  b = () => "Mô tả",
  v = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? a() : e === "uk" ? _() : b()
  },
  x = () => "Pixels painted",
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
    return e === "en" ? x() : e === "pt" ? g() : e === "ch" ? y() : e === "de" ? h() : e === "es" ? w() : e === "fr" ? D() : e === "it" ? P() : e === "jp" ? k() : e === "pl" ? E() : e === "ru" ? I() : e === "uk" ? T() : j()
  };
export {
  v as d, L as p
};