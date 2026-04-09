import {
  m as r,
  E as t
} from "./Cu0FD5l7.js";
import {
  B as o
} from "./BfT---R5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
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