import {
  k as t,
  l as b,
  m as i,
  E as s,
  B as l
} from "./BdthSYuV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "03bf059d-b0bd-41ed-93f5-56c412b0f6cf", e._sentryDebugIdIdentifier = "sentry-dbid-03bf059d-b0bd-41ed-93f5-56c412b0f6cf")
  })()
} catch {}

function c(e, n, d) {
  t && b();
  var o = new l(e);
  i(() => {
    var f = n() ?? null;
    o.ensure(f, f && (a => d(a, f)))
  }, s)
}
export {
  c
};