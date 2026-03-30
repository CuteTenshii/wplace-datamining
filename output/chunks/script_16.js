import {
  m as r,
  E as t
} from "./DySbC8v5.js";
import {
  B as o
} from "./YsyuyGUJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...a) {
  var d = new o(e);
  r(() => {
    const f = n() ?? null;
    d.ensure(f, f && (s => f(s, ...a)))
  }, t)
}
export {
  b as s
};