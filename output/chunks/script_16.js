import {
  m as r,
  E as t
} from "./mNi6L4zY.js";
import {
  B as o
} from "./BMEspvSI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function l(e, n, ...f) {
  var d = new o(e);
  r(() => {
    const a = n() ?? null;
    d.ensure(a, a && (s => a(s, ...f)))
  }, t)
}
export {
  l as s
};