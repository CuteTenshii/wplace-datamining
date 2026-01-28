import {
  g as o
} from "./CQ_gfREe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5e3a4020-2252-4fc6-bf0b-4092111ea40f", e._sentryDebugIdIdentifier = "sentry-dbid-5e3a4020-2252-4fc6-bf0b-4092111ea40f")
  })()
} catch {}
const t = () => "Error loading",
  i = () => "Erro ao carregar",
  a = () => "加载出错",
  d = () => "Fehler beim Laden",
  l = () => "Error al cargar",
  u = () => "Erreur lors du chargement",
  f = () => "Errore nel caricamento",
  s = () => "読み込みエラー",
  c = () => "Błąd ładowania",
  g = () => "Ошибка загрузки",
  _ = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? a() : r === "de" ? d() : r === "es" ? l() : r === "fr" ? u() : r === "it" ? f() : r === "jp" ? s() : r === "pl" ? c() : r === "ru" ? g() : r === "uk" ? _() : b()
  };
export {
  y as e
};