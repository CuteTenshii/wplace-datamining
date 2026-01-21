import {
  k as t,
  l as i,
  m as s,
  E as l,
  B as r
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "11b4e3b2-516a-4add-9446-b219e40baaec", e._sentryDebugIdIdentifier = "sentry-dbid-11b4e3b2-516a-4add-9446-b219e40baaec")
  })()
} catch {}

function c(e, n, d) {
  t && i();
  var o = new r(e);
  s(() => {
    var a = n() ?? null;
    o.ensure(a, a && (f => d(f, a)))
  }, l)
}
export {
  c
};