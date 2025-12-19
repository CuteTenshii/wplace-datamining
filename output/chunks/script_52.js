import {
  g as t
} from "./DPMSJe7W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "07c3209e-18c7-4afb-bdae-8868be727c67", e._sentryDebugIdIdentifier = "sentry-dbid-07c3209e-18c7-4afb-bdae-8868be727c67")
  })()
} catch {}
const o = () => "End",
  i = () => "Fim",
  u = () => "结束",
  d = () => "Ende",
  c = () => "Fin",
  f = () => "Fin",
  s = () => "Fine",
  a = () => "終了",
  l = () => "Koniec",
  _ = () => "Конец",
  g = () => "Кінець",
  b = () => "Kết thúc",
  L = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? i() : r === "ch" ? u() : r === "de" ? d() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? s() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? g() : b()
  },
  p = () => "Error loading",
  y = () => "Erro ao carregar",
  h = () => "加载出错",
  E = () => "Fehler beim Laden",
  w = () => "Error al cargar",
  m = () => "Erreur lors du chargement",
  k = () => "Errore nel caricamento",
  F = () => "読み込みエラー",
  I = () => "Błąd ładowania",
  T = () => "Ошибка загрузки",
  j = () => "Помилка завантаження",
  v = () => "Lỗi tải dữ liệu",
  K = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? p() : r === "pt" ? y() : r === "ch" ? h() : r === "de" ? E() : r === "es" ? w() : r === "fr" ? m() : r === "it" ? k() : r === "jp" ? F() : r === "pl" ? I() : r === "ru" ? T() : r === "uk" ? j() : v()
  };
export {
  L as a, K as e
};