import {
  g as t
} from "./Bu_K0cwi.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "22a546fbb215f27eb1e048884138171ecb9ba2c5"
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
  l = () => "Panel",
  c = () => "Панель",
  h = () => "Панель",
  p = () => "Bảng điều khiển",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? b() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? h() : p()
  };
export {
  g as d
};