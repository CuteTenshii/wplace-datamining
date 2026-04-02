import {
  m as r,
  E as t
} from "./C6Ld_Ouf.js";
import {
  B as o
} from "./jUKoqFZG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "524c6de5688559bfa8d287b7b1a6e5caba19cb91"
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