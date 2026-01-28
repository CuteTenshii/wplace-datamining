import {
  g as o
} from "./C_a06lyj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
  d = () => "加载出错",
  a = () => "Fehler beim Laden",
  f = () => "Error al cargar",
  l = () => "Erreur lors du chargement",
  u = () => "Errore nel caricamento",
  s = () => "読み込みエラー",
  c = () => "Błąd ładowania",
  g = () => "Ошибка загрузки",
  _ = () => "Помилка завантаження",
  b = () => "Lỗi tải dữ liệu",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? o();
    return r === "en" ? t() : r === "pt" ? i() : r === "ch" ? d() : r === "de" ? a() : r === "es" ? f() : r === "fr" ? l() : r === "it" ? u() : r === "jp" ? s() : r === "pl" ? c() : r === "ru" ? g() : r === "uk" ? _() : b()
  };
export {
  y as e
};