import {
  g as t
} from "./DZjUHX_D.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
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
  f = () => "Kopieren",
  c = () => "Copiar",
  p = () => "Copier",
  d = () => "Copia",
  s = () => "コピー",
  a = () => "Kopiuj",
  y = () => "Копировать",
  l = () => "Копіювати",
  b = () => "Sao chép",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? f() : e === "es" ? c() : e === "fr" ? p() : e === "it" ? d() : e === "jp" ? s() : e === "pl" ? a() : e === "ru" ? y() : e === "uk" ? l() : b()
  };
export {
  g as c
};