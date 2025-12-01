import {
  k as t,
  l as i,
  m as s,
  E as b,
  B as l
} from "./Deky9TbN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "81e0d27a89a6ed71e59e16e2f2fe2aa899a3b379"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "288854be-a08e-4d4f-b348-abdc2b2fe3c7", e._sentryDebugIdIdentifier = "sentry-dbid-288854be-a08e-4d4f-b348-abdc2b2fe3c7")
  })()
} catch {}

function c(e, n, d) {
  t && i();
  var f = new l(e);
  s(() => {
    var a = n() ?? null;
    f.ensure(a, a && (o => d(o, a)))
  }, b)
}
export {
  c
};