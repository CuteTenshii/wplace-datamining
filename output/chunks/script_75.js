import {
  g as t
} from "./dO1JPExC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e1c69b5-b723-411d-98e1-8b15a711bd6c", e._sentryDebugIdIdentifier = "sentry-dbid-9e1c69b5-b723-411d-98e1-8b15a711bd6c")
  } catch {}
})();
const d = () => "Dashboard",
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
    const r = n.locale ?? t();
    return r === "en" ? d() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? b() : r === "it" ? i() : r === "jp" ? f() : r === "pl" ? c() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};