import {
  aw as d,
  m as s,
  k as t,
  l as o
} from "./DySbC8v5.js";
import {
  B as i
} from "./YsyuyGUJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, f) {
  t && o();
  var r = new i(e),
    b = !d();
  s(() => {
    var a = n();
    a !== a && (a = y), b && a !== null && typeof a == "object" && (a = {}), r.ensure(a, f)
  })
}
export {
  u as k
};