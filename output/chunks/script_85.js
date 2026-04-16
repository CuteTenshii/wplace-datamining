import {
  g as a
} from "./kxb4d0Jk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "148ff59f-9fda-447c-a2a3-99accec6281a", e._sentryDebugIdIdentifier = "sentry-dbid-148ff59f-9fda-447c-a2a3-99accec6281a")
  } catch {}
})();
const t = () => "Dashboard",
  d = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  f = () => "Tableau de bord",
  i = () => "Pannello",
  c = () => "ダッシュボード",
  b = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? a();
    return r === "en" ? t() : r === "pt" ? d() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? f() : r === "it" ? i() : r === "jp" ? c() : r === "pl" ? b() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};