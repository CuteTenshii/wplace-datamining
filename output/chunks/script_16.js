import {
  C as t,
  E as o
} from "./BldsY2Le.js";
import {
  B as b
} from "./1iKIVv_b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...s) {
  var a = new b(e);
  t(() => {
    const d = n() ?? null;
    a.ensure(d, d && (r => d(r, ...s)))
  }, o)
}
export {
  c as s
};