import {
  g as o
} from "./DNNhrQmR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
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
  f = () => "Errore nel caricamento",
  l = () => "読み込みエラー",
  s = () => "Błąd ładowania",
  _ = () => "Ошибка загрузки",
  g = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? a() : r === "de" ? d() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? f() : r === "jp" ? l() : r === "pl" ? s() : r === "ru" ? _() : r === "uk" ? g() : b()
  };
export {
  y as e
};