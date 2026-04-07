import {
  aw as s,
  m as t,
  k as b,
  l as o
} from "./DEEyd5H-.js";
import {
  B as i
} from "./BHc60j2E.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, r) {
  b && o();
  var f = new i(e),
    d = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), d && a !== null && typeof a == "object" && (a = {}), f.ensure(a, r)
  })
}
export {
  u as k
};