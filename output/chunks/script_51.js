import {
  aw as t,
  m as b,
  k as d,
  l as o
} from "./DOAgMrHD.js";
import {
  B as i
} from "./BGZlwEO3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, f) {
  d && o();
  var r = new i(e),
    s = !t();
  b(() => {
    var a = n();
    a !== a && (a = c), s && a !== null && typeof a == "object" && (a = {}), r.ensure(a, f)
  })
}
export {
  u as k
};