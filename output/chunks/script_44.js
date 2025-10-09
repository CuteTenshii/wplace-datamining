import {
  g as t
} from "./4Szs_zBr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "396734e5db96c8d18b29022abf53bbd030e61152"
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
const f = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  a as r
};