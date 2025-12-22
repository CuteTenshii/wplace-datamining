import {
  g as i
} from "./g2ZRSQwI.js";
import "./DyTAnIvR.js";
import {
  o as s,
  b as o
} from "./DuPBYAm5.js";
import {
  b as p
} from "./DWTMwUVX.js";
import {
  r as c
} from "./BKq0MFT9.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "c660fc01-dfaa-4c2e-82d2-f3721271fb71", t._sentryDebugIdIdentifier = "sentry-dbid-c660fc01-dfaa-4c2e-82d2-f3721271fb71")
  })()
} catch {}
const u = () => "Description",
  d = () => "Descrição",
  f = () => "描述",
  l = () => "Beschreibung",
  a = () => "Descripción",
  _ = () => "Description",
  x = () => "Descrizione",
  g = () => "説明",
  b = () => "Opis",
  y = () => "Описание",
  w = () => "Опис",
  h = () => "Mô tả",
  z = (t = {}, n = {}) => {
    const e = n.locale ?? i();
    return e === "en" ? u() : e === "pt" ? d() : e === "ch" ? f() : e === "de" ? l() : e === "es" ? a() : e === "fr" ? _() : e === "it" ? x() : e === "jp" ? g() : e === "pl" ? b() : e === "ru" ? y() : e === "uk" ? w() : h()
  },
  m = () => "Pixels painted",
  v = () => "Pixels pintados",
  T = () => "已绘制像素数",
  D = () => "Gemalte Pixel",
  P = () => "Píxeles pintados",
  q = () => "Pixels peints",
  k = () => "Pixel dipinti",
  I = () => "塗られたピクセル数",
  $ = () => "Pomalowane piksele",
  E = () => "Нарисованные пиксели",
  j = () => "Намальовані пікселі",
  L = () => "Pixel đã tô",
  A = (t = {}, n = {}) => {
    const e = n.locale ?? i();
    return e === "en" ? m() : e === "pt" ? v() : e === "ch" ? T() : e === "de" ? D() : e === "es" ? P() : e === "fr" ? q() : e === "it" ? k() : e === "jp" ? I() : e === "pl" ? $() : e === "ru" ? E() : e === "uk" ? j() : L()
  };
var B = s('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function C(t, n) {
  let e = c(n, ["$$slots", "$$events", "$$legacy"]);
  var r = B();
  p(r, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(t, r)
}
export {
  C as L, z as d, A as p
};