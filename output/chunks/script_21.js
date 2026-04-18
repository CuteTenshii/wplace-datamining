import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./BYTf-X4W.js";
import {
  B as b
} from "./BT5xMYfw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b0a66d-1d7f-45e7-ac21-556f4792e2b4", e._sentryDebugIdIdentifier = "sentry-dbid-48b0a66d-1d7f-45e7-ac21-556f4792e2b4")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, r) {
  o && i();
  var f = new b(e),
    d = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), d && a !== null && typeof a == "object" && (a = {}), f.ensure(a, r)
  })
}
export {
  u as k
};