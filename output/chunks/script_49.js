import {
  aw as d,
  m as s,
  k as t,
  l as o
} from "./D5ICCrBp.js";
import {
  B as i
} from "./Bnp8fa3o.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  t && o();
  var b = new i(e),
    f = !d();
  s(() => {
    var a = n();
    a !== a && (a = c), f && a !== null && typeof a == "object" && (a = {}), b.ensure(a, r)
  })
}
export {
  u as k
};