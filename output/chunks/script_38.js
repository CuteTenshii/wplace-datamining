import {
  g as d
} from "./Dxz1oID2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8664226c36b3dea53924eb4a5f34f4b7e9db6bc7"
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
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : o();
export {
  a as r
};