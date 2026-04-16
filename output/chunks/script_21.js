import {
  a8 as s,
  D as t,
  B as o,
  C as i
} from "./B8NcJmf7.js";
import {
  B as y
} from "./DtfkCBwv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19316600-5f5e-4303-98e9-2dd9ce5f550a", e._sentryDebugIdIdentifier = "sentry-dbid-19316600-5f5e-4303-98e9-2dd9ce5f550a")
  } catch {}
})();
const l = Symbol("NaN");

function u(e, a, f) {
  o && i();
  var r = new y(e),
    d = !s();
  t(() => {
    var n = a();
    n !== n && (n = l), d && n !== null && typeof n == "object" && (n = {}), r.ensure(n, f)
  })
}
export {
  u as k
};