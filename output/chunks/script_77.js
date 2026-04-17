import {
  g as t
} from "./D_SMuPJE.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e", r._sentryDebugIdIdentifier = "sentry-dbid-4ee35f3a-97bf-4fcd-ac48-cea911cd0a9e")
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
  y = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? o() : n === "pt" ? a() : n === "ch" ? i() : n === "de" ? d() : n === "es" ? u() : n === "fr" ? c() : n === "it" ? f() : n === "jp" ? s() : n === "pl" ? l() : n === "ru" ? g() : n === "uk" ? _() : b()
  };
export {
  y as l
};