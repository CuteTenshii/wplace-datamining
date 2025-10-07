import {
  l as o,
  a as t
} from "../chunks/clDIvoYc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5e70ff9d-5ed5-41fb-9c05-e729c230d20b", e._sentryDebugIdIdentifier = "sentry-dbid-5e70ff9d-5ed5-41fb-9c05-e729c230d20b")
  })()
} catch {}
export {
  o as load_css, t as start
};