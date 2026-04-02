import {
  aw as f,
  m as s,
  k as t,
  l as o
} from "./C6Ld_Ouf.js";
import {
  B as i
} from "./jUKoqFZG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "524c6de5688559bfa8d287b7b1a6e5caba19cb91"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1430ef2b-7bfa-4093-bdca-029b20ece08e", e._sentryDebugIdIdentifier = "sentry-dbid-1430ef2b-7bfa-4093-bdca-029b20ece08e")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, r) {
  t && o();
  var b = new i(e),
    d = !f();
  s(() => {
    var a = n();
    a !== a && (a = c), d && a !== null && typeof a == "object" && (a = {}), b.ensure(a, r)
  })
}
export {
  u as k
};