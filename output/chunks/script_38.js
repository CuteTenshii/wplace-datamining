import {
  g as f
} from "./FAoWj6-g.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "276968e1d17fc8ec4f0f441c096845bbc4668125"
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
  t = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? d() : t();
export {
  l as r
};