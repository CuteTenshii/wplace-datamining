import {
  k as t,
  l as i,
  m as s,
  E as b,
  B as l
} from "./CRdf5mx2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65f7af1ca1d715ef20a4159507e8f6b55052c932"
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
  t && i();
  var o = new l(e);
  s(() => {
    var f = n() ?? null;
    o.ensure(f, f && (a => d(a, f)))
  }, b)
}
export {
  c
};