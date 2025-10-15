import {
  g as o
} from "./DQ3zwLNx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b227214883eb8641881975e44ed77db97966a3e5"
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
const f = () => "Confirm",
  t = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : t();
export {
  r as c
};