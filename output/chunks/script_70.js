import {
  g as d
} from "./DFupwelK.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
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
  o = () => "Painel",
  a = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  f = () => "Tableau de bord",
  i = () => "Pannello",
  b = () => "ダッシュボード",
  l = () => "Panel",
  c = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? d();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};