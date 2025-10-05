import {
  at as f
} from "./C7dcjzId.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d8fe2b59c656bd9f6dccc34a4ac724cc1c260861"
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