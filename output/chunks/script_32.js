import {
  g as o
} from "./eqSfXg5t.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0f6cab18-296c-468b-826d-58d79173c310", e._sentryDebugIdIdentifier = "sentry-dbid-0f6cab18-296c-468b-826d-58d79173c310")
  })()
} catch {}
const t = () => "Select the report reason",
  d = () => "Selecione o motivo da denúncia",
  a = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  a as s
};