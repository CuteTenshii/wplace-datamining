import {
  g as t
} from "./-EY-P68S.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63f7c335-11b0-44dc-8251-4ab0ac9f111e", e._sentryDebugIdIdentifier = "sentry-dbid-63f7c335-11b0-44dc-8251-4ab0ac9f111e")
  } catch {}
})();
const o = () => "Copy",
  c = () => "Copiar",
  u = () => "复制",
  i = () => "Kopieren",
  f = () => "Copiar",
  p = () => "Copier",
  s = () => "Copia",
  a = () => "コピー",
  y = () => "Kopiuj",
  d = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? f() : r === "fr" ? p() : r === "it" ? s() : r === "jp" ? a() : r === "pl" ? y() : r === "ru" ? d() : r === "uk" ? l() : _()
  };
export {
  g as c
};