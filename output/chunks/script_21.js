import {
  a8 as s,
  D as t,
  B as o,
  C as i
} from "./jMNCXwTX.js";
import {
  B as c
} from "./bJ_86NIk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "19316600-5f5e-4303-98e9-2dd9ce5f550a", e._sentryDebugIdIdentifier = "sentry-dbid-19316600-5f5e-4303-98e9-2dd9ce5f550a")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, d) {
  o && i();
  var r = new c(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), f && a !== null && typeof a == "object" && (a = {}), r.ensure(a, d)
  })
}
export {
  u as k
};