import {
  m as t,
  E as o
} from "./C3nPqK5x.js";
import {
  B as i
} from "./C6C0bLUE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "363b173e-aae9-4dd0-ac26-79a9cba3308d", e._sentryDebugIdIdentifier = "sentry-dbid-363b173e-aae9-4dd0-ac26-79a9cba3308d")
  } catch {}
})();

function c(e, a, ...d) {
  var s = new i(e);
  t(() => {
    const n = a() ?? null;
    s.ensure(n, n && (r => n(r, ...d)))
  }, o)
}
export {
  c as s
};