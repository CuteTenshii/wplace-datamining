import {
  g as t
} from "./BZGVaLJf.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
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
  b = () => "Закрити",
  p = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? f() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as c
};