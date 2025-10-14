import {
  g as d
} from "./BrQ-nIYg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93ce353ea66c24fd9b67d84d4d5dac764dc78ea8"
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
const t = () => "Refresh",
  f = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : f();
export {
  a as r
};