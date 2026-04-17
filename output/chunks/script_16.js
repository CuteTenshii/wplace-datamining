import {
  C as t,
  E as o
} from "./CdM0B1iz.js";
import {
  B as f
} from "./BURqiXQi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21d3502b-a0e8-43e0-9f64-b40388770ce0", e._sentryDebugIdIdentifier = "sentry-dbid-21d3502b-a0e8-43e0-9f64-b40388770ce0")
  } catch {}
})();

function c(e, n, ...a) {
  var d = new f(e);
  t(() => {
    const s = n() ?? null;
    d.ensure(s, s && (r => s(r, ...a)))
  }, o)
}
export {
  c as s
};