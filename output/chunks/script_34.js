import {
  g as t
} from "./DwxruM8H.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "439c79ad-52e2-42b8-8583-6d2684186a86", r._sentryDebugIdIdentifier = "sentry-dbid-439c79ad-52e2-42b8-8583-6d2684186a86")
  } catch {}
})();
const c = () => "Close",
  o = () => "Fechar",
  s = () => "关闭",
  u = () => "Schließen",
  i = () => "Cerrar",
  l = () => "Fermer",
  d = () => "Chiudi",
  f = () => "閉じる",
  a = () => "Zamknij",
  _ = () => "Закрыть",
  b = () => "Закрити",
  p = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? c() : e === "pt" ? o() : e === "ch" ? s() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? d() : e === "jp" ? f() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as c
};