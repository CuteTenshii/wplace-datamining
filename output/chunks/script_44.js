import {
  g as t
} from "./D6nvKN2h.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63f7c335-11b0-44dc-8251-4ab0ac9f111e", e._sentryDebugIdIdentifier = "sentry-dbid-63f7c335-11b0-44dc-8251-4ab0ac9f111e")
  } catch {}
})();
const o = () => "Copy",
  c = () => "Copiar",
  u = () => "复制",
  i = () => "Kopieren",
  p = () => "Copiar",
  f = () => "Copier",
  s = () => "Copia",
  d = () => "コピー",
  y = () => "Kopiuj",
  a = () => "Копировать",
  b = () => "Копіювати",
  l = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? p() : r === "fr" ? f() : r === "it" ? s() : r === "jp" ? d() : r === "pl" ? y() : r === "ru" ? a() : r === "uk" ? b() : l()
  };
export {
  g as c
};