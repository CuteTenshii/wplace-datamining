import {
  g as a
} from "./lNmZA2C_.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "148ff59f-9fda-447c-a2a3-99accec6281a", r._sentryDebugIdIdentifier = "sentry-dbid-148ff59f-9fda-447c-a2a3-99accec6281a")
  })()
} catch {}
const t = () => "Dashboard",
  d = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  f = () => "Panel",
  u = () => "Tableau de bord",
  i = () => "Pannello",
  c = () => "ダッシュボード",
  l = () => "Panel",
  b = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? t() : e === "pt" ? d() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? c() : e === "pl" ? l() : e === "ru" ? b() : e === "uk" ? h() : p()
  };
export {
  g as d
};