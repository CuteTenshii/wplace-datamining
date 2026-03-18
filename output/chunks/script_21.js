import {
  a8 as a
} from "./CCHDI9er.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "44ddcb48-cd37-4a3d-9e13-97553ac4edfc", e._sentryDebugIdIdentifier = "sentry-dbid-44ddcb48-cd37-4a3d-9e13-97553ac4edfc")
  } catch {}
})();
a();