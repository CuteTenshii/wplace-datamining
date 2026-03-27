import {
  m as r,
  E as t
} from "./06720L-J.js";
import {
  B as o
} from "./uFxPBSpV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...f) {
  var d = new o(e);
  r(() => {
    const a = n() ?? null;
    d.ensure(a, a && (s => a(s, ...f)))
  }, t)
}
export {
  b as s
};