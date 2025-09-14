import {
  g as d
} from "./CAZ_O6hj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "48232197bdcdfc2a880dd0de2ffd5bc2075b51d0"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d063ae19-5363-4df6-a04b-1dce35a5614a", e._sentryDebugIdIdentifier = "sentry-dbid-d063ae19-5363-4df6-a04b-1dce35a5614a")
  })()
} catch {}
const t = () => "Refresh",
  f = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : f();
export {
  a as r
};