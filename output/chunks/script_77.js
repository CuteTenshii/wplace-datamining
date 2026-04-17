import {
  g as t
} from "./Cl_dwRWp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e", e._sentryDebugIdIdentifier = "sentry-dbid-4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e")
  } catch {}
})();
const a = () => "Loading...",
  o = () => "Carregando...",
  d = () => "加载中...",
  i = () => "Laden...",
  u = () => "Cargando...",
  c = () => "Chargement...",
  f = () => "Caricamento...",
  s = () => "読み込み中...",
  l = () => "Ładowanie...",
  g = () => "Загрузка...",
  _ = () => "Завантаження...",
  p = () => "Đang tải...",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? o() : n === "ch" ? d() : n === "de" ? i() : n === "es" ? u() : n === "fr" ? c() : n === "it" ? f() : n === "jp" ? s() : n === "pl" ? l() : n === "ru" ? g() : n === "uk" ? _() : p()
  };
export {
  y as l
};