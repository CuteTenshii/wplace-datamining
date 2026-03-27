import {
  m as r,
  E as t
} from "./CA9fhze-.js";
import {
  B as o
} from "./B032FXMg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function l(e, a, ...d) {
  var f = new o(e);
  r(() => {
    const n = a() ?? null;
    f.ensure(n, n && (s => n(s, ...d)))
  }, t)
}
export {
  l as s
};