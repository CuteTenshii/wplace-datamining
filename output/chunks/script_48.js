import {
  g as f
} from "./BqVjMzRy.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52c32908d40da7633c03ed8a85ce90814a387626"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f34a6819-208e-49fe-945f-f47a3fc0ea38", e._sentryDebugIdIdentifier = "sentry-dbid-f34a6819-208e-49fe-945f-f47a3fc0ea38")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  a as r
};