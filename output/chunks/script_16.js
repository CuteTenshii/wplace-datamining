import {
  m as r,
  E as c
} from "./G_TaGb8Z.js";
import {
  B as t
} from "./Cbs1BdHv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...f) {
  var s = new t(e);
  r(() => {
    const a = n() ?? null;
    s.ensure(a, a && (d => a(d, ...f)))
  }, c)
}
export {
  b as s
};