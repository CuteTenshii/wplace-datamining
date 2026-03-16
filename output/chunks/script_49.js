import {
  aw as f,
  m as s,
  k as t,
  l as o
} from "./Df0Hz134.js";
import {
  B as i
} from "./Bg4KwvfM.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, b) {
  t && o();
  var r = new i(e),
    d = !f();
  s(() => {
    var a = n();
    a !== a && (a = c), d && a !== null && typeof a == "object" && (a = {}), r.ensure(a, b)
  })
}
export {
  u as k
};