import {
  g as t
} from "./B4ScQ8O8.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
const d = () => "Dashboard",
  o = () => "Painel",
  a = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  b = () => "Tableau de bord",
  f = () => "Pannello",
  i = () => "ダッシュボード",
  l = () => "Panel",
  c = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? b() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};