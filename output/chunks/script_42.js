import {
  g as t
} from "./B4ScQ8O8.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  i = () => "Copiar",
  u = () => "复制",
  c = () => "Kopieren",
  f = () => "Copiar",
  p = () => "Copier",
  s = () => "Copia",
  d = () => "コピー",
  a = () => "Kopiuj",
  y = () => "Копировать",
  l = () => "Копіювати",
  b = () => "Sao chép",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? f() : e === "fr" ? p() : e === "it" ? s() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? y() : e === "uk" ? l() : b()
  };
export {
  g as c
};