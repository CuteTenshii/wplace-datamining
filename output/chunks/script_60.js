import {
  g as t
} from "./EJbZrqRQ.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "0d09a81b307e3e50e12318a904f634e48415b56b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "85ea9c1c-def8-408f-b928-76e6302b759b", r._sentryDebugIdIdentifier = "sentry-dbid-85ea9c1c-def8-408f-b928-76e6302b759b")
  })()
} catch {}
const d = () => "Dashboard",
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
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};