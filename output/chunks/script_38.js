import {
  g as d
} from "./D6GCTgGw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1fd455bebad189e9f50428480abb20e05c8cf40"
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
const f = () => "Refresh",
  t = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : t();
export {
  l as r
};