import {
  g as t
} from "./CQePO0m_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
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
  a = () => "Fin",
  s = () => "Fine",
  f = () => "終了",
  l = () => "Koniec",
  _ = () => "Конец",
  g = () => "Кінець",
  b = () => "Kết thúc",
  L = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? i() : r === "ch" ? u() : r === "de" ? d() : r === "es" ? c() : r === "fr" ? a() : r === "it" ? s() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? g() : b()
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