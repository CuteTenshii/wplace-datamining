import {
  g as t
} from "./CLdytBYG.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
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
  f = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  _ = () => "Закрыть",
  p = () => "Закрити",
  b = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? f() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? p() : b()
  };
export {
  y as c
};