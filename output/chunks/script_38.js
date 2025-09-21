import {
  g as t
} from "./DeP5M3oG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "825bee11b3c7e8e1af0343e9a8e19271ca51e2c2"
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
const d = () => "Refresh",
  f = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : f();
export {
  l as r
};