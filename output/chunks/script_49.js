import {
  aw as b,
  m as s,
  k as t,
  l as o
} from "./Cu0FD5l7.js";
import {
  B as i
} from "./BfT---R5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, d) {
  t && o();
  var f = new i(e),
    r = !b();
  s(() => {
    var a = n();
    a !== a && (a = y), r && a !== null && typeof a == "object" && (a = {}), f.ensure(a, d)
  })
}
export {
  u as k
};