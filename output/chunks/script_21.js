import {
  a7 as t,
  C as f,
  A as o,
  B as b
} from "./BldsY2Le.js";
import {
  B as i
} from "./1iKIVv_b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b0a66d-1d7f-45e7-ac21-556f4792e2b4", e._sentryDebugIdIdentifier = "sentry-dbid-48b0a66d-1d7f-45e7-ac21-556f4792e2b4")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, d) {
  o && b();
  var r = new i(e),
    s = !t();
  f(() => {
    var a = n();
    a !== a && (a = y), s && a !== null && typeof a == "object" && (a = {}), r.ensure(a, d)
  })
}
export {
  u as k
};