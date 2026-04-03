import {
  aw as s,
  m as t,
  k as d,
  l as o
} from "./D28CkLTn.js";
import {
  B as i
} from "./oqRqHqL7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, f, n) {
  d && o();
  var r = new i(e),
    b = !s();
  t(() => {
    var a = f();
    a !== a && (a = c), b && a !== null && typeof a == "object" && (a = {}), r.ensure(a, n)
  })
}
export {
  u as k
};