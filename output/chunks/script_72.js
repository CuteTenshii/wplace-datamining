import {
  g as t
} from "./DrzYdI9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "78e0385c-af8c-4072-92de-17e3eda2f679", e._sentryDebugIdIdentifier = "sentry-dbid-78e0385c-af8c-4072-92de-17e3eda2f679")
  } catch {}
})();
const o = () => "Loading...",
  d = () => "Carregando...",
  a = () => "加载中...",
  i = () => "Laden...",
  u = () => "Cargando...",
  f = () => "Chargement...",
  s = () => "Caricamento...",
  l = () => "読み込み中...",
  c = () => "Ładowanie...",
  g = () => "Загрузка...",
  _ = () => "Завантаження...",
  p = () => "Đang tải...",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? o() : n === "pt" ? d() : n === "ch" ? a() : n === "de" ? i() : n === "es" ? u() : n === "fr" ? f() : n === "it" ? s() : n === "jp" ? l() : n === "pl" ? c() : n === "ru" ? g() : n === "uk" ? _() : p()
  };
export {
  y as l
};