import {
  g as t
} from "./CUn96ABT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
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
  s = () => "Copier",
  f = () => "Copia",
  y = () => "コピー",
  a = () => "Kopiuj",
  d = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? p() : r === "fr" ? s() : r === "it" ? f() : r === "jp" ? y() : r === "pl" ? a() : r === "ru" ? d() : r === "uk" ? l() : _()
  };
export {
  g as c
};