import {
  g as d
} from "./C_a06lyj.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "b98ef8da-2454-4f67-9269-74b924e89c0b", r._sentryDebugIdIdentifier = "sentry-dbid-b98ef8da-2454-4f67-9269-74b924e89c0b")
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
  l = () => "Panel",
  c = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? d();
    return e === "en" ? t() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};