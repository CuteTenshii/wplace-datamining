import {
  g as f
} from "./CItBVTel.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7f7948f0-6927-4528-b225-c8550146f5f0", e._sentryDebugIdIdentifier = "sentry-dbid-7f7948f0-6927-4528-b225-c8550146f5f0")
  })()
} catch {}
const o = () => "Confirm",
  t = () => "Confirmar",
  d = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : t();
export {
  d as c
};