import {
  g as t
} from "./E8BzAKy9.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ee860fc816b3b13288b485f763a0872cd79cba7b"
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
  b = () => "Pannello",
  i = () => "ダッシュボード",
  c = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? b() : e === "jp" ? i() : e === "pl" ? c() : e === "ru" ? l() : e === "uk" ? h() : p()
  };
export {
  g as d
};