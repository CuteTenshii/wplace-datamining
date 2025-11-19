import {
  h as t,
  i as c,
  j as i,
  E as s,
  B as r
} from "./CJTyhPUr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02c42801-24c5-4fe6-bba3-6fc96fc9820b", e._sentryDebugIdIdentifier = "sentry-dbid-02c42801-24c5-4fe6-bba3-6fc96fc9820b")
  })()
} catch {}

function b(e, n, a) {
  t && c();
  var o = new r(e);
  i(() => {
    var f = n() ?? null;
    o.ensure(f, f && (d => a(d, f)))
  }, s)
}
export {
  b as c
};