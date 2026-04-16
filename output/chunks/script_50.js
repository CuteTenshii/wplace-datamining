import {
  g as t
} from "./BHEqZqXQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31135446-765b-41bc-9e38-f767b6087299", e._sentryDebugIdIdentifier = "sentry-dbid-31135446-765b-41bc-9e38-f767b6087299")
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
  d = () => "Kopiuj",
  b = () => "Копировать",
  a = () => "Копіювати",
  l = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? p() : r === "fr" ? s() : r === "it" ? f() : r === "jp" ? y() : r === "pl" ? d() : r === "ru" ? b() : r === "uk" ? a() : l()
  };
export {
  g as c
};