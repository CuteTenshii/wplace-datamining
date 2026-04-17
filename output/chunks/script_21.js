import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./CdM0B1iz.js";
import {
  B as b
} from "./BURqiXQi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b0a66d-1d7f-45e7-ac21-556f4792e2b4", e._sentryDebugIdIdentifier = "sentry-dbid-48b0a66d-1d7f-45e7-ac21-556f4792e2b4")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, r) {
  o && i();
  var d = new b(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), f && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};