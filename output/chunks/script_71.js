import {
  g as o
} from "./CCnR8d1l.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4a5c7974-0033-48df-9303-4bfb47be1c3c", e._sentryDebugIdIdentifier = "sentry-dbid-4a5c7974-0033-48df-9303-4bfb47be1c3c")
  } catch {}
})();
const t = () => "Error loading",
  i = () => "Erro ao carregar",
  d = () => "加载出错",
  a = () => "Fehler beim Laden",
  u = () => "Error al cargar",
  c = () => "Erreur lors du chargement",
  l = () => "Errore nel caricamento",
  f = () => "読み込みエラー",
  s = () => "Błąd ładowania",
  _ = () => "Ошибка загрузки",
  g = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? d() : r === "de" ? a() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? f() : r === "pl" ? s() : r === "ru" ? _() : r === "uk" ? g() : b()
  };
export {
  y as e
};