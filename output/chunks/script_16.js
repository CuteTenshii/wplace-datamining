import {
  m as r,
  E as t
} from "./BwyorQE6.js";
import {
  B as o
} from "./DQqPsHUo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function l(e, n, ...a) {
  var f = new o(e);
  r(() => {
    const d = n() ?? null;
    f.ensure(d, d && (s => d(s, ...a)))
  }, t)
}
export {
  l as s
};