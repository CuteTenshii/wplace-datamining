import {
  aw as t,
  m as d,
  k as o,
  l as b
} from "./CDr0agER.js";
import {
  B as i
} from "./_kS0BFop.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && b();
  var f = new i(e),
    s = !t();
  d(() => {
    var a = n();
    a !== a && (a = c), s && a !== null && typeof a == "object" && (a = {}), f.ensure(a, r)
  })
}
export {
  u as k
};