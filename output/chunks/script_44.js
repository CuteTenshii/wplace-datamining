import {
  g as t
} from "./56ZBUmtO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
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
  y = () => "Kopiuj",
  a = () => "Копировать",
  b = () => "Копіювати",
  l = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? f() : r === "es" ? i() : r === "fr" ? p() : r === "it" ? s() : r === "jp" ? d() : r === "pl" ? y() : r === "ru" ? a() : r === "uk" ? b() : l()
  };
export {
  g as c
};