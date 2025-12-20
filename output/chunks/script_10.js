import {
  k as b,
  l as t,
  m as i,
  E as s,
  B as l
} from "./lghyzkeh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
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

function c(e, n, f) {
  b && t();
  var o = new l(e);
  i(() => {
    var d = n() ?? null;
    o.ensure(d, d && (a => f(a, d)))
  }, s)
}
export {
  c
};