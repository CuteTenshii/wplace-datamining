import {
  g as r
} from "./lNmZA2C_.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "3f8a47d5-3d9c-4954-89bf-c99c5fab64ef", n._sentryDebugIdIdentifier = "sentry-dbid-3f8a47d5-3d9c-4954-89bf-c99c5fab64ef")
  })()
} catch {}
const i = () => "Description",
  s = () => "Descrição",
  o = () => "描述",
  p = () => "Beschreibung",
  u = () => "Descripción",
  c = () => "Description",
  d = () => "Descrizione",
  f = () => "説明",
  l = () => "Opis",
  a = () => "Описание",
  _ = () => "Опис",
  x = () => "Mô tả",
  v = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? i() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? l() : e === "ru" ? a() : e === "uk" ? _() : x()
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