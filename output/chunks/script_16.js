import {
  m as r,
  E as t
} from "./BpkiS5AT.js";
import {
  B as o
} from "./Ws8nQ6Dx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, a, ...d) {
  var f = new o(e);
  r(() => {
    const n = a() ?? null;
    f.ensure(n, n && (s => n(s, ...d)))
  }, t)
}
export {
  b as s
};