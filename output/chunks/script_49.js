import {
  aw as s,
  m as t,
  k as o,
  l as b
} from "./CCHDI9er.js";
import {
  B as i
} from "./B5Cl-lHt.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && b();
  var f = new i(e),
    d = !s();
  t(() => {
    var a = n();
    a !== a && (a = c), d && a !== null && typeof a == "object" && (a = {}), f.ensure(a, r)
  })
}
export {
  u as k
};