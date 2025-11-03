import {
  g as d
} from "./DqKoccka.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5eef7edadf0463417f66f3780a2aa73c26362de2"
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
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  a as c
};