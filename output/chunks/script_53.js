import {
  g as f
} from "./Dn1N4dmO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3da3986-2727-41b4-85e7-13fa1662e896", e._sentryDebugIdIdentifier = "sentry-dbid-c3da3986-2727-41b4-85e7-13fa1662e896")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  a as r
};