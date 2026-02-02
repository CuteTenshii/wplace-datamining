import {
  k as t,
  l as i,
  m as r,
  E as b
} from "./BrDbkhPu.js";
import {
  B as s
} from "./DSll-rKl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b38a800-f32b-41b7-b269-efdd60da6eb0", e._sentryDebugIdIdentifier = "sentry-dbid-6b38a800-f32b-41b7-b269-efdd60da6eb0")
  })()
} catch {}

function u(e, n, f) {
  t && i();
  var o = new s(e);
  r(() => {
    var d = n() ?? null;
    o.ensure(d, d && (a => f(a, d)))
  }, b)
}
export {
  u as c
};