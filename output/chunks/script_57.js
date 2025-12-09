import {
  g as d
} from "./Ny3ijo9y.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e56bf90e2bb69bf6dd1cbc6ce0cb1afca52af8e3"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "ad33edda-d1e9-4a1f-87f9-f05c6e19c050", r._sentryDebugIdIdentifier = "sentry-dbid-ad33edda-d1e9-4a1f-87f9-f05c6e19c050")
  })()
} catch {}
const t = () => "Dashboard",
  a = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  f = () => "Panel",
  u = () => "Tableau de bord",
  i = () => "Pannello",
  b = () => "ダッシュボード",
  c = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? d();
    return e === "en" ? t() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? c() : e === "ru" ? l() : e === "uk" ? h() : p()
  };
export {
  g as d
};