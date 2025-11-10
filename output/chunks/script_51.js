import {
  g as t
} from "./DwU20SJL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b373e5df-4cb4-4179-a56e-c25c324e6df3", e._sentryDebugIdIdentifier = "sentry-dbid-b373e5df-4cb4-4179-a56e-c25c324e6df3")
  })()
} catch {}
const d = () => "Refresh",
  o = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : o();
export {
  l as r
};