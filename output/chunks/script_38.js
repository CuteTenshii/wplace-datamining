import {
  g as d
} from "./CsmheoQ2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a08aaa4cc3329c16d583f3f519629bce2e5a6410"
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
  a = () => "Atualizar",
  r = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : a();
export {
  r
};