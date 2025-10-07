import {
  g as f
} from "./DwZ6mW66.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "abd976f8f8e90d32df6a1b04404d40d50ecf5fd4"
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
const d = () => "Refresh",
  t = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? d() : t();
export {
  a as r
};