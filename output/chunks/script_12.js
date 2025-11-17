import {
  h as t,
  i,
  j as s,
  E as r,
  B as l
} from "./Cj4a6Kf2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05e3477bd6a9a14e4165d1dc469ad2945d0197f4"
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
  var o = new l(e);
  s(() => {
    var d = n() ?? null;
    o.ensure(d, d && (f => a(f, d)))
  }, r)
}
export {
  b as c
};