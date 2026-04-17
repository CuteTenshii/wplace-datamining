import {
  g as t
} from "./BZGVaLJf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e", e._sentryDebugIdIdentifier = "sentry-dbid-4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e")
  } catch {}
})();
const o = () => "Loading...",
  a = () => "Carregando...",
  i = () => "加载中...",
  d = () => "Laden...",
  u = () => "Cargando...",
  c = () => "Chargement...",
  f = () => "Caricamento...",
  s = () => "読み込み中...",
  l = () => "Ładowanie...",
  g = () => "Загрузка...",
  _ = () => "Завантаження...",
  b = () => "Đang tải...",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? o() : n === "pt" ? a() : n === "ch" ? i() : n === "de" ? d() : n === "es" ? u() : n === "fr" ? c() : n === "it" ? f() : n === "jp" ? s() : n === "pl" ? l() : n === "ru" ? g() : n === "uk" ? _() : b()
  };
export {
  y as l
};