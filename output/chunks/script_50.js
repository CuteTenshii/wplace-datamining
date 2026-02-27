import {
  av as t,
  m as o,
  k as f,
  l as i
} from "./BGZizgo7.js";
import {
  B as b
} from "./mM-ynKa3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8a58b531-6cef-4071-b12a-e3c204ac7381", e._sentryDebugIdIdentifier = "sentry-dbid-8a58b531-6cef-4071-b12a-e3c204ac7381")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  f && i();
  var d = new b(e),
    s = !t();
  o(() => {
    var a = n();
    a !== a && (a = c), s && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};