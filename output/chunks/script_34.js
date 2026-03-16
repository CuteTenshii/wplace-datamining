import {
  g as t
} from "./DIegaxO1.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21", r._sentryDebugIdIdentifier = "sentry-dbid-fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21")
  } catch {}
})();
const o = () => "Close",
  s = () => "Fechar",
  c = () => "关闭",
  u = () => "Schließen",
  i = () => "Cerrar",
  f = () => "Fermer",
  l = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  _ = () => "Закрыть",
  b = () => "Закрити",
  p = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? f() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as c
};