import {
  g as d
} from "./DrzYdI9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e1c69b5-b723-411d-98e1-8b15a711bd6c", e._sentryDebugIdIdentifier = "sentry-dbid-9e1c69b5-b723-411d-98e1-8b15a711bd6c")
  } catch {}
})();
const t = () => "Dashboard",
  a = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  b = () => "Tableau de bord",
  i = () => "Pannello",
  f = () => "ダッシュボード",
  c = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? d();
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? b() : r === "it" ? i() : r === "jp" ? f() : r === "pl" ? c() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};