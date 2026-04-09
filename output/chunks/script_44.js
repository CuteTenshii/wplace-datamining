import {
  g as t
} from "./DrzYdI9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63f7c335-11b0-44dc-8251-4ab0ac9f111e", e._sentryDebugIdIdentifier = "sentry-dbid-63f7c335-11b0-44dc-8251-4ab0ac9f111e")
  } catch {}
})();
const o = () => "Copy",
  c = () => "Copiar",
  u = () => "复制",
  f = () => "Kopieren",
  i = () => "Copiar",
  p = () => "Copier",
  s = () => "Copia",
  d = () => "コピー",
  a = () => "Kopiuj",
  y = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? f() : r === "es" ? i() : r === "fr" ? p() : r === "it" ? s() : r === "jp" ? d() : r === "pl" ? a() : r === "ru" ? y() : r === "uk" ? l() : _()
  };
export {
  g as c
};