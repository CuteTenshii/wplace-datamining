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
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "3a050333-53db-420a-8f81-a65e0619efde", n._sentryDebugIdIdentifier = "sentry-dbid-3a050333-53db-420a-8f81-a65e0619efde")
  })()
} catch {}
const o = () => "Copy",
  f = () => "Copiar",
  c = () => "复制",
  i = () => "Kopieren",
  u = () => "Copiar",
  p = () => "Copier",
  d = () => "Copia",
  s = () => "コピー",
  y = () => "Kopiuj",
  a = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? f() : e === "ch" ? c() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? p() : e === "it" ? d() : e === "jp" ? s() : e === "pl" ? y() : e === "ru" ? a() : e === "uk" ? l() : _()
  };
export {
  g as c
};