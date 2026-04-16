import {
  a7 as a
} from "./CJNfechn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "60dc39ef-a7b4-438c-aa0c-a06c4c8b81b5", e._sentryDebugIdIdentifier = "sentry-dbid-60dc39ef-a7b4-438c-aa0c-a06c4c8b81b5")
  } catch {}
})();
a();