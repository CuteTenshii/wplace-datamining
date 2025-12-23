import {
  g as o
} from "./CMw04vg4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8706a848567fc83422d651908aa77f13fdf383e3"
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
  s = () => "読み込みエラー",
  c = () => "Błąd ładowania",
  g = () => "Ошибка загрузки",
  _ = () => "Помилка завантаження",
  p = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? d() : r === "de" ? a() : r === "es" ? l() : r === "fr" ? u() : r === "it" ? f() : r === "jp" ? s() : r === "pl" ? c() : r === "ru" ? g() : r === "uk" ? _() : p()
  };
export {
  y as e
};