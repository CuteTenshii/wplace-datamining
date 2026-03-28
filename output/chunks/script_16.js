import {
  m as r,
  E as t
} from "./DAkfeAd4.js";
import {
  B as o
} from "./BGJhEoIA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...f) {
  var s = new o(e);
  r(() => {
    const a = n() ?? null;
    s.ensure(a, a && (d => a(d, ...f)))
  }, t)
}
export {
  b as s
};