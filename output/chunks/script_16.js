import {
  C as a,
  E as o
} from "./Bpkf4F49.js";
import {
  B as b
} from "./Bdfur2sK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...d) {
  var r = new b(e);
  a(() => {
    const s = n() ?? null;
    r.ensure(s, s && (t => s(t, ...d)))
  }, o)
}
export {
  c as s
};