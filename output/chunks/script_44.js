import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as b
} from "./_uPdD6ej.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
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

function c(e, n, a) {
  s && r();
  var f = new b(e),
    o = !i();
  t(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  c as k
};