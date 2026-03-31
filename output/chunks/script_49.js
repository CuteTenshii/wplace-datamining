import {
  aw as b,
  m as s,
  k as t,
  l as o
} from "./DjL4expl.js";
import {
  B as i
} from "./CL_UDg1n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  t && o();
  var f = new i(e),
    d = !b();
  s(() => {
    var a = n();
    a !== a && (a = c), d && a !== null && typeof a == "object" && (a = {}), f.ensure(a, r)
  })
}
export {
  u as k
};