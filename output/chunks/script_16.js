import {
  C as d,
  E as f
} from "./BYTf-X4W.js";
import {
  B as o
} from "./BT5xMYfw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...r) {
  var a = new o(e);
  d(() => {
    const s = n() ?? null;
    a.ensure(s, s && (t => s(t, ...r)))
  }, f)
}
export {
  c as s
};