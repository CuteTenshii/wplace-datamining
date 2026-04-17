import {
  C as t,
  E as o
} from "./C0_5AQd4.js";
import {
  B as i
} from "./Cw986E_3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function l(e, n, ...s) {
  var d = new i(e);
  t(() => {
    const a = n() ?? null;
    d.ensure(a, a && (r => a(r, ...s)))
  }, o)
}
export {
  l as s
};