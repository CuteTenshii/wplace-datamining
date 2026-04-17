import {
  g as t
} from "./Cl_dwRWp.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "439c79ad-52e2-42b8-8583-6d2684186a86", r._sentryDebugIdIdentifier = "sentry-dbid-439c79ad-52e2-42b8-8583-6d2684186a86")
  } catch {}
})();
const o = () => "Close",
  s = () => "Fechar",
  c = () => "关闭",
  u = () => "Schließen",
  i = () => "Cerrar",
  l = () => "Fermer",
  d = () => "Chiudi",
  f = () => "閉じる",
  a = () => "Zamknij",
  _ = () => "Закрыть",
  p = () => "Закрити",
  b = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? p() : b()
  };
export {
  y as c
};