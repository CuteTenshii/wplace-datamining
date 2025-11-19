import {
  g as o
} from "./CqypAnHz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1459c48-7f79-4156-9b25-61f8a00bb671", e._sentryDebugIdIdentifier = "sentry-dbid-b1459c48-7f79-4156-9b25-61f8a00bb671")
  })()
} catch {}
const f = () => "Confirm",
  t = () => "Confirmar",
  d = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : t();
export {
  d as c
};