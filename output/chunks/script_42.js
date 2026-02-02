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
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "3a050333-53db-420a-8f81-a65e0619efde", n._sentryDebugIdIdentifier = "sentry-dbid-3a050333-53db-420a-8f81-a65e0619efde")
  })()
} catch {}
const o = () => "Copy",
  f = () => "Copiar",
  i = () => "复制",
  u = () => "Kopieren",
  c = () => "Copiar",
  d = () => "Copier",
  p = () => "Copia",
  s = () => "コピー",
  a = () => "Kopiuj",
  y = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? f() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? d() : e === "it" ? p() : e === "jp" ? s() : e === "pl" ? a() : e === "ru" ? y() : e === "uk" ? l() : _()
  };
export {
  g as c
};