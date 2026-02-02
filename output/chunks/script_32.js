import {
  g as t
} from "./DSNL03G2.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
  c = () => "Fechar",
  s = () => "关闭",
  u = () => "Schließen",
  f = () => "Cerrar",
  i = () => "Fermer",
  l = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  b = () => "Закрыть",
  p = () => "Закрити",
  _ = () => "Đóng",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? c() : e === "ch" ? s() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  y as c
};