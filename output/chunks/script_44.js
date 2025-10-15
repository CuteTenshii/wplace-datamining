import {
  g as t
} from "./DQ3zwLNx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b227214883eb8641881975e44ed77db97966a3e5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f933511f-eca4-45a2-9e25-ab9597bb5b6d", e._sentryDebugIdIdentifier = "sentry-dbid-f933511f-eca4-45a2-9e25-ab9597bb5b6d")
  })()
} catch {}
const o = () => "Refresh",
  f = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? o() : f();
export {
  a as r
};