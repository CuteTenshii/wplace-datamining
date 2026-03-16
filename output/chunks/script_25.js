import {
  m as r,
  E as t
} from "./DOAgMrHD.js";
import {
  B as o
} from "./BGZlwEO3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, a, ...f) {
  var d = new o(e);
  r(() => {
    const n = a() ?? null;
    d.ensure(n, n && (s => n(s, ...f)))
  }, t)
}
export {
  b as s
};