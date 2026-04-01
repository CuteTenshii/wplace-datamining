import {
  g as t
} from "./BT9k_vYz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "be8234278ededc2527fbc3b765caee2baaf18120"
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
  c = () => "ダッシュボード",
  f = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? d() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? b() : r === "it" ? i() : r === "jp" ? c() : r === "pl" ? f() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};