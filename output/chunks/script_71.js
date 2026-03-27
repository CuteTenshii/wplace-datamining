import {
  g as o
} from "./CDV-gvd8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4a5c7974-0033-48df-9303-4bfb47be1c3c", e._sentryDebugIdIdentifier = "sentry-dbid-4a5c7974-0033-48df-9303-4bfb47be1c3c")
  } catch {}
})();
const t = () => "Error loading",
  i = () => "Erro ao carregar",
  a = () => "加载出错",
  d = () => "Fehler beim Laden",
  u = () => "Error al cargar",
  c = () => "Erreur lors du chargement",
  l = () => "Errore nel caricamento",
  s = () => "読み込みエラー",
  f = () => "Błąd ładowania",
  _ = () => "Ошибка загрузки",
  g = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? a() : r === "de" ? d() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? g() : b()
  };
export {
  y as e
};