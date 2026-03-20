import {
  a8 as f
} from "./CA_jRce9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "44ddcb48-cd37-4a3d-9e13-97553ac4edfc", e._sentryDebugIdIdentifier = "sentry-dbid-44ddcb48-cd37-4a3d-9e13-97553ac4edfc")
  } catch {}
})();
f();