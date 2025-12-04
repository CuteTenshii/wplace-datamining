import {
  g as d
} from "./uhNN53MD.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
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
    return e === "en" ? t() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};