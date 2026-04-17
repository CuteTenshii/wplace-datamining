import {
  g as t
} from "./DADvmwwi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
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
  a = () => "Копировать",
  l = () => "Копіювати",
  _ = () => "Sao chép",
  g = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? c() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? p() : r === "fr" ? s() : r === "it" ? f() : r === "jp" ? y() : r === "pl" ? d() : r === "ru" ? a() : r === "uk" ? l() : _()
  };
export {
  g as c
};