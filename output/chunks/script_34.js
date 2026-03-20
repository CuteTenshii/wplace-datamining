import {
  g as t
} from "./D6nvKN2h.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21", r._sentryDebugIdIdentifier = "sentry-dbid-fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21")
  } catch {}
})();
const o = () => "Close",
  s = () => "Fechar",
  c = () => "关闭",
  u = () => "Schließen",
  f = () => "Cerrar",
  i = () => "Fermer",
  l = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  b = () => "Закрыть",
  _ = () => "Закрити",
  p = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  y as c
};