import {
  g as o
} from "./lNmZA2C_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ea7cc9d-2ea5-4af5-a99a-39bddccfd536", e._sentryDebugIdIdentifier = "sentry-dbid-0ea7cc9d-2ea5-4af5-a99a-39bddccfd536")
  })()
} catch {}
const t = () => "Error loading",
  d = () => "Erro ao carregar",
  a = () => "加载出错",
  i = () => "Fehler beim Laden",
  l = () => "Error al cargar",
  u = () => "Erreur lors du chargement",
  f = () => "Errore nel caricamento",
  c = () => "読み込みエラー",
  s = () => "Błąd ładowania",
  g = () => "Ошибка загрузки",
  _ = () => "Помилка завантаження",
  p = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? d() : r === "ch" ? a() : r === "de" ? i() : r === "es" ? l() : r === "fr" ? u() : r === "it" ? f() : r === "jp" ? c() : r === "pl" ? s() : r === "ru" ? g() : r === "uk" ? _() : p()
  };
export {
  y as e
};