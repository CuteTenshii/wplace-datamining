import {
  g as o
} from "./BS_YoBqz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "30249c0052a6db2e8885effd6fd4553811e48ab4"
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
  s = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  s
};