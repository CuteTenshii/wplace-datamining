import {
  ap as f
} from "./CYoegeTR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "92ae795e9248bdcce35d232be052f909a85c076d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d5646f2c-6d6f-4a74-ab74-bff84af3cd3f", e._sentryDebugIdIdentifier = "sentry-dbid-d5646f2c-6d6f-4a74-ab74-bff84af3cd3f")
  })()
} catch {}
f();