import {
  g as t
} from "./DFupwelK.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
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
  c = () => "Copiar",
  i = () => "复制",
  u = () => "Kopieren",
  f = () => "Copiar",
  d = () => "Copier",
  p = () => "Copia",
  s = () => "コピー",
  a = () => "Kopiuj",
  y = () => "Копировать",
  l = () => "Копіювати",
  b = () => "Sao chép",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? c() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? p() : e === "jp" ? s() : e === "pl" ? a() : e === "ru" ? y() : e === "uk" ? l() : b()
  };
export {
  g as c
};