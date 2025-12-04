import {
  g as d
} from "./CHxYu7UU.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
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
const a = () => "Dashboard",
  t = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  f = () => "Panel",
  u = () => "Tableau de bord",
  i = () => "Pannello",
  l = () => "ダッシュボード",
  c = () => "Panel",
  b = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? d();
    return e === "en" ? a() : e === "pt" ? t() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? b() : e === "uk" ? h() : p()
  };
export {
  g as d
};