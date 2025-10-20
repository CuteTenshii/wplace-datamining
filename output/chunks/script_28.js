import {
  g as d
} from "./BgLPZDo-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55773afae0bc9cd8753b3f88c13d41d45dcd2072"
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