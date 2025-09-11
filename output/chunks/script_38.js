import {
  g as d
} from "./DXXros20.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f261223d088ed61b87361f00600c7fcc32afef6a"
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
const f = () => "Refresh",
  t = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : t();
export {
  a as r
};