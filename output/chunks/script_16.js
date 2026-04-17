import {
  C as a,
  E as o
} from "./DK4l5t5k.js";
import {
  B as f
} from "./Bd4Wcq2n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...d) {
  var r = new f(e);
  a(() => {
    const s = n() ?? null;
    r.ensure(s, s && (t => s(t, ...d)))
  }, o)
}
export {
  c as s
};