import {
  m as r,
  E as t
} from "./DBVFc_3b.js";
import {
  B as o
} from "./DsV_B9vD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...d) {
  var f = new o(e);
  r(() => {
    const a = n() ?? null;
    f.ensure(a, a && (s => a(s, ...d)))
  }, t)
}
export {
  b as s
};