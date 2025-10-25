import {
  g as d
} from "./BJlatFx3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cf70b86b5c91cdc18d318e8e942fc55d8b1d0f41"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cb814081-2b9b-4d59-bbb6-f31dcbd79e3d", e._sentryDebugIdIdentifier = "sentry-dbid-cb814081-2b9b-4d59-bbb6-f31dcbd79e3d")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  b = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  b as c
};