import {
  k as f,
  l as i,
  m as s,
  E as l,
  B as r
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ad8b457e-a888-4994-b754-467056352cd1", e._sentryDebugIdIdentifier = "sentry-dbid-ad8b457e-a888-4994-b754-467056352cd1")
  })()
} catch {}

function c(e, n, a) {
  f && i();
  var o = new r(e);
  s(() => {
    var d = n() ?? null;
    o.ensure(d, d && (t => a(t, d)))
  }, l)
}
export {
  c
};