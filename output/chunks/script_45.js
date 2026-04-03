import {
  g as t
} from "./DNNhrQmR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
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
  y = () => "コピー",
  a = () => "Kopiuj",
  d = () => "Копировать",
  b = () => "Копіювати",
  l = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? f() : r === "es" ? i() : r === "fr" ? p() : r === "it" ? s() : r === "jp" ? y() : r === "pl" ? a() : r === "ru" ? d() : r === "uk" ? b() : l()
  };
export {
  g as c
};