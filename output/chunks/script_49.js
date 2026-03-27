import {
  aw as s,
  m as t,
  k as o,
  l as b
} from "./CA9fhze-.js";
import {
  B as i
} from "./B032FXMg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && b();
  var d = new i(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = c), f && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};