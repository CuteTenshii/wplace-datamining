import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./Cp19uF2I.js";
import {
  B as b
} from "./DdpicFUL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b0a66d-1d7f-45e7-ac21-556f4792e2b4", e._sentryDebugIdIdentifier = "sentry-dbid-48b0a66d-1d7f-45e7-ac21-556f4792e2b4")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  o && i();
  var d = new b(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = c), f && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};