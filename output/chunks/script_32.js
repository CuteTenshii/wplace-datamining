import {
  g as t
} from "./CWSLadsn.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "c1c6b3e9-9865-4e0a-883d-e5e0561bc924", n._sentryDebugIdIdentifier = "sentry-dbid-c1c6b3e9-9865-4e0a-883d-e5e0561bc924")
  })()
} catch {}
const o = () => "Close",
  s = () => "Fechar",
  c = () => "关闭",
  u = () => "Schließen",
  i = () => "Cerrar",
  l = () => "Fermer",
  f = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  b = () => "Закрыть",
  p = () => "Закрити",
  _ = () => "Đóng",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? u() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? f() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  y as c
};