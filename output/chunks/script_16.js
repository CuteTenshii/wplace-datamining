import {
  m as r,
  E as t
} from "./D28CkLTn.js";
import {
  B as o
} from "./oqRqHqL7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, f, ...a) {
  var d = new o(e);
  r(() => {
    const n = f() ?? null;
    d.ensure(n, n && (s => n(s, ...a)))
  }, t)
}
export {
  b as s
};