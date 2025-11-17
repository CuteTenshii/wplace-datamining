import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as b
} from "./DCl-iuFc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "17a00565e2756c20c4608d1274a59935337b90b7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "883330f6-cac8-4bb0-b244-6e36ad27ffd3", e._sentryDebugIdIdentifier = "sentry-dbid-883330f6-cac8-4bb0-b244-6e36ad27ffd3")
  })()
} catch {}

function y(e, n, d) {
  s && r();
  var f = new b(e),
    o = !i();
  t(() => {
    var a = n();
    o && a !== null && typeof a == "object" && (a = {}), f.ensure(a, d)
  })
}
export {
  y as k
};