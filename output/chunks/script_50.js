import {
  g as t
} from "./CMbhZE-K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
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
  f = () => "Copier",
  s = () => "Copia",
  y = () => "コピー",
  d = () => "Kopiuj",
  a = () => "Копировать",
  b = () => "Копіювати",
  l = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? p() : r === "fr" ? f() : r === "it" ? s() : r === "jp" ? y() : r === "pl" ? d() : r === "ru" ? a() : r === "uk" ? b() : l()
  };
export {
  g as c
};