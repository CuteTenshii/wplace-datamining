import {
  av as t,
  m as f,
  k as o,
  l as i
} from "./C3nPqK5x.js";
import {
  B as b
} from "./C6C0bLUE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8a58b531-6cef-4071-b12a-e3c204ac7381", e._sentryDebugIdIdentifier = "sentry-dbid-8a58b531-6cef-4071-b12a-e3c204ac7381")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && i();
  var d = new b(e),
    s = !t();
  f(() => {
    var a = n();
    a !== a && (a = c), s && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};