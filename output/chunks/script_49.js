import {
  aw as s,
  m as t,
  k as o,
  l as d
} from "./G_TaGb8Z.js";
import {
  B as c
} from "./Cbs1BdHv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const i = Symbol("NaN");

function u(e, n, r) {
  o && d();
  var b = new c(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = i), f && a !== null && typeof a == "object" && (a = {}), b.ensure(a, r)
  })
}
export {
  u as k
};