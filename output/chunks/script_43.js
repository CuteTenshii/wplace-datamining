import {
  g as f
} from "./DqKoccka.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5eef7edadf0463417f66f3780a2aa73c26362de2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7af0aa88-6a65-4204-abd8-fb1fc7e8d27c", e._sentryDebugIdIdentifier = "sentry-dbid-7af0aa88-6a65-4204-abd8-fb1fc7e8d27c")
  })()
} catch {}
const o = () => "Confirm",
  d = () => "Confirmar",
  i = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : d();
export {
  i as c
};