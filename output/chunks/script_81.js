import {
  g as o
} from "./YjF1d-DF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ea7cc9d-2ea5-4af5-a99a-39bddccfd536", e._sentryDebugIdIdentifier = "sentry-dbid-0ea7cc9d-2ea5-4af5-a99a-39bddccfd536")
  } catch {}
})();
const t = () => "Error loading",
  a = () => "Erro ao carregar",
  d = () => "加载出错",
  i = () => "Fehler beim Laden",
  c = () => "Error al cargar",
  u = () => "Erreur lors du chargement",
  l = () => "Errore nel caricamento",
  s = () => "読み込みエラー",
  f = () => "Błąd ładowania",
  _ = () => "Ошибка загрузки",
  g = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? d() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? u() : r === "it" ? l() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? g() : b()
  };
export {
  y as e
};