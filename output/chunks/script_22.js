import {
  ap as f
} from "./CoAY_RIV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
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