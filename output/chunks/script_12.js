import {
  h as t,
  i as b,
  j as i,
  E as s,
  B as c
} from "./CYmALYaf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
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

function l(e, n, a) {
  t && b();
  var d = new c(e);
  i(() => {
    var f = n() ?? null;
    d.ensure(f, f && (o => a(o, f)))
  }, s)
}
export {
  l as c
};