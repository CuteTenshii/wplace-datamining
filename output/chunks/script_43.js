import {
  g as t
} from "./DQG8QkAJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4a8af4cdbd1ae06ce10a324d70e489e27b1b6720"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b6fedc18-c426-4b17-bf09-8644b91cab4b", e._sentryDebugIdIdentifier = "sentry-dbid-b6fedc18-c426-4b17-bf09-8644b91cab4b")
  })()
} catch {}
const f = () => "Refresh",
  o = () => "Atualizar",
  b = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  b as r
};