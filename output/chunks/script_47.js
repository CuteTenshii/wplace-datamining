import {
  g as n
} from "./Cop95dKZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f34a6819-208e-49fe-945f-f47a3fc0ea38", e._sentryDebugIdIdentifier = "sentry-dbid-f34a6819-208e-49fe-945f-f47a3fc0ea38")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  d = (e = {}, f = {}) => (f.locale ?? n()) === "en" ? t() : o();
export {
  d as r
};