import {
  g as o
} from "./BHOVlP7C.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6bc8c324ce1f230e3a6c17fd8c71ebea9f521c24"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "97e7e731-29c8-476b-9208-3835a3c46afd", e._sentryDebugIdIdentifier = "sentry-dbid-97e7e731-29c8-476b-9208-3835a3c46afd")
  })()
} catch {}
const t = () => "Error loading",
  i = () => "Erro ao carregar",
  d = () => "加载出错",
  a = () => "Fehler beim Laden",
  l = () => "Error al cargar",
  u = () => "Erreur lors du chargement",
  f = () => "Errore nel caricamento",
  c = () => "読み込みエラー",
  s = () => "Błąd ładowania",
  g = () => "Ошибка загрузки",
  _ = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? d() : r === "de" ? a() : r === "es" ? l() : r === "fr" ? u() : r === "it" ? f() : r === "jp" ? c() : r === "pl" ? s() : r === "ru" ? g() : r === "uk" ? _() : b()
  };
export {
  y as e
};