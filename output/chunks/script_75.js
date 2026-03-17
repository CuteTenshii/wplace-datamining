import {
  g as d
} from "./fWTupIuD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e1c69b5-b723-411d-98e1-8b15a711bd6c", e._sentryDebugIdIdentifier = "sentry-dbid-9e1c69b5-b723-411d-98e1-8b15a711bd6c")
  } catch {}
})();
const t = () => "Dashboard",
  a = () => "Painel",
  o = () => "控制台",
  s = () => "Dashboard",
  u = () => "Panel",
  b = () => "Tableau de bord",
  i = () => "Pannello",
  c = () => "ダッシュボード",
  f = () => "Panel",
  l = () => "Панель",
  h = () => "Панель",
  _ = () => "Bảng điều khiển",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? d();
    return r === "en" ? t() : r === "pt" ? a() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? b() : r === "it" ? i() : r === "jp" ? c() : r === "pl" ? f() : r === "ru" ? l() : r === "uk" ? h() : _()
  };
export {
  g as d
};