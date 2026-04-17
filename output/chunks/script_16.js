import {
  C as f,
  E as t
} from "./CRmpufpB.js";
import {
  B as o
} from "./DJpJYZ2C.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...s) {
  var a = new o(e);
  f(() => {
    const d = n() ?? null;
    a.ensure(d, d && (r => d(r, ...s)))
  }, t)
}
export {
  c as s
};