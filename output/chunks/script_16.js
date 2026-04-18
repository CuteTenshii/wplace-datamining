import {
  C as t,
  E as f
} from "./Cp19uF2I.js";
import {
  B as o
} from "./DdpicFUL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...d) {
  var r = new o(e);
  t(() => {
    const s = n() ?? null;
    r.ensure(s, s && (a => s(a, ...d)))
  }, f)
}
export {
  c as s
};