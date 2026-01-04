import {
  g as t
} from "./CCwyOsrP.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
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
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};