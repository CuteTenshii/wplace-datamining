import {
  at as f
} from "./nXP0Sia0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "22dd6d20080aececfaae9b3120dfb71899337f43"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "af9daa84-c685-4fc5-94d3-0f04e18deb2e", e._sentryDebugIdIdentifier = "sentry-dbid-af9daa84-c685-4fc5-94d3-0f04e18deb2e")
  })()
} catch {}
f();