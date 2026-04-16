import {
  a8 as s,
  D as t,
  B as o,
  C as i
} from "./CP18E9YK.js";
import {
  B as y
} from "./CWcicdud.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19316600-5f5e-4303-98e9-2dd9ce5f550a", e._sentryDebugIdIdentifier = "sentry-dbid-19316600-5f5e-4303-98e9-2dd9ce5f550a")
  } catch {}
})();
const b = Symbol("NaN");

function u(e, a, f) {
  o && i();
  var r = new y(e),
    d = !s();
  t(() => {
    var n = a();
    n !== n && (n = b), d && n !== null && typeof n == "object" && (n = {}), r.ensure(n, f)
  })
}
export {
  u as k
};