import {
  k as t,
  l as b,
  m as i,
  E as s,
  B as l
} from "./Ds8uQKUX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
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

function c(e, n, o) {
  t && b();
  var a = new l(e);
  i(() => {
    var d = n() ?? null;
    a.ensure(d, d && (f => o(f, d)))
  }, s)
}
export {
  c
};