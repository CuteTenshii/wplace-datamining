import {
  aw as b,
  m as f,
  k as o,
  l as d
} from "./DAkfeAd4.js";
import {
  B as i
} from "./BGJhEoIA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && d();
  var s = new i(e),
    t = !b();
  f(() => {
    var a = n();
    a !== a && (a = c), t && a !== null && typeof a == "object" && (a = {}), s.ensure(a, r)
  })
}
export {
  u as k
};