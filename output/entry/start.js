import {
  l as o,
  a as t
} from "../chunks/Bmexl_-y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "69e89c3139d56ad7b72a097a21288d9ef2906bde"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4f0f03dd-b040-4e94-8bac-25c639256ee8", e._sentryDebugIdIdentifier = "sentry-dbid-4f0f03dd-b040-4e94-8bac-25c639256ee8")
  })()
} catch {}
export {
  o as load_css, t as start
};