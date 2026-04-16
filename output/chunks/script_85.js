import {
  g as a
} from "./C6AhFN09.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "148ff59f-9fda-447c-a2a3-99accec6281a", n._sentryDebugIdIdentifier = "sentry-dbid-148ff59f-9fda-447c-a2a3-99accec6281a")
  } catch {}
})();
const t = () => "Dashboard",
  d = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  f = () => "Tableau de bord",
  c = () => "Pannello",
  i = () => "ダッシュボード",
  b = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (n = {}, e = {}) => {
    const r = e.locale ?? a();
    return r === "en" ? t() : r === "pt" ? d() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? f() : r === "it" ? c() : r === "jp" ? i() : r === "pl" ? b() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};