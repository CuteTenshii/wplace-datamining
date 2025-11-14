import {
  y as i,
  j as t,
  h as s,
  i as b,
  B as r
} from "./CgLM89MT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2f23e3a8f8ea879ac9c94b9f80bbe3f77b879d5a"
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

function y(e, n, a) {
  s && b();
  var d = new r(e),
    o = !i();
  t(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), d.ensure(f, a)
  })
}
export {
  y as k
};