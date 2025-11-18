import {
  h as t,
  i,
  j as s,
  E as r,
  B as b
} from "./DnEjpmVm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
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

function l(e, n, a) {
  t && i();
  var f = new b(e);
  s(() => {
    var d = n() ?? null;
    f.ensure(d, d && (o => a(o, d)))
  }, r)
}
export {
  l as c
};