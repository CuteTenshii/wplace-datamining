import {
  g as d
} from "./nof0iVjR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4e903134a8e52eb1a8da35c90648b14dbd2e6388"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6fc80bb-0d5b-4a43-9261-bd291df4c4b4", e._sentryDebugIdIdentifier = "sentry-dbid-e6fc80bb-0d5b-4a43-9261-bd291df4c4b4")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : o();
export {
  l as r
};