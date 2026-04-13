import {
  g as t
} from "./obv90mRu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "78e0385c-af8c-4072-92de-17e3eda2f679", e._sentryDebugIdIdentifier = "sentry-dbid-78e0385c-af8c-4072-92de-17e3eda2f679")
  } catch {}
})();
const o = () => "Loading...",
  i = () => "Carregando...",
  a = () => "加载中...",
  d = () => "Laden...",
  u = () => "Cargando...",
  f = () => "Chargement...",
  s = () => "Caricamento...",
  l = () => "読み込み中...",
  c = () => "Ładowanie...",
  g = () => "Загрузка...",
  _ = () => "Завантаження...",
  b = () => "Đang tải...",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? o() : n === "pt" ? i() : n === "ch" ? a() : n === "de" ? d() : n === "es" ? u() : n === "fr" ? f() : n === "it" ? s() : n === "jp" ? l() : n === "pl" ? c() : n === "ru" ? g() : n === "uk" ? _() : b()
  };
export {
  y as l
};