import {
  g as o
} from "./BKKpqwch.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ea7cc9d-2ea5-4af5-a99a-39bddccfd536", e._sentryDebugIdIdentifier = "sentry-dbid-0ea7cc9d-2ea5-4af5-a99a-39bddccfd536")
  } catch {}
})();
const t = () => "Error loading",
  a = () => "Erro ao carregar",
  i = () => "加载出错",
  d = () => "Fehler beim Laden",
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
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? i() : r === "de" ? d() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? f() : r === "pl" ? s() : r === "ru" ? _() : r === "uk" ? g() : b()
  };
export {
  y as e
};