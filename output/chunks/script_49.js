import {
  aw as t,
  m as d,
  k as o,
  l as b
} from "./mNi6L4zY.js";
import {
  B as i
} from "./BMEspvSI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, f) {
  o && b();
  var r = new i(e),
    s = !t();
  d(() => {
    var a = n();
    a !== a && (a = c), s && a !== null && typeof a == "object" && (a = {}), r.ensure(a, f)
  })
}
export {
  u as k
};