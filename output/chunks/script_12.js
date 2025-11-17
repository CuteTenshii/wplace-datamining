import {
  h as t,
  i,
  j as s,
  E as r,
  B as l
} from "./ZncCC91P.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19f2e5962f03ca04a34d7ee46166821cb4d0ab06"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8cfd6346-bfec-4da1-8785-77776a974884", e._sentryDebugIdIdentifier = "sentry-dbid-8cfd6346-bfec-4da1-8785-77776a974884")
  })()
} catch {}

function b(e, n, a) {
  t && i();
  var f = new l(e);
  s(() => {
    var d = n() ?? null;
    f.ensure(d, d && (o => a(o, d)))
  }, r)
}
export {
  b as c
};