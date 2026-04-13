import {
  aw as s,
  m as t,
  k as d,
  l as o
} from "./Bg2fLyAp.js";
import {
  B as i
} from "./D0I7CApi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, f) {
  d && o();
  var r = new i(e),
    b = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), b && a !== null && typeof a == "object" && (a = {}), r.ensure(a, f)
  })
}
export {
  u as k
};