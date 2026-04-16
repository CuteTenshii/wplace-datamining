import {
  g as a
} from "./CpNXwF3K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
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
  c = () => "Tableau de bord",
  f = () => "Pannello",
  i = () => "ダッシュボード",
  b = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? a();
    return r === "en" ? t() : r === "pt" ? d() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? f() : r === "jp" ? i() : r === "pl" ? b() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};