import {
  m as r,
  E as t
} from "./BsKR9n4F.js";
import {
  B as o
} from "./CbpQzF2w.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c25d240cfeb94229297bfd517188330be66c0dac"
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