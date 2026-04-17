import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./CRmpufpB.js";
import {
  B as b
} from "./DJpJYZ2C.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b0a66d-1d7f-45e7-ac21-556f4792e2b4", e._sentryDebugIdIdentifier = "sentry-dbid-48b0a66d-1d7f-45e7-ac21-556f4792e2b4")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, d) {
  o && i();
  var f = new b(e),
    r = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), r && a !== null && typeof a == "object" && (a = {}), f.ensure(a, d)
  })
}
export {
  u as k
};