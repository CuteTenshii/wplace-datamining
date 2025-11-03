import {
  g as n
} from "./BmECnhD6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f34a6819-208e-49fe-945f-f47a3fc0ea38", e._sentryDebugIdIdentifier = "sentry-dbid-f34a6819-208e-49fe-945f-f47a3fc0ea38")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, f = {}) => (f.locale ?? n()) === "en" ? t() : o();
export {
  a as r
};