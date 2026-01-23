import {
  k as t,
  l as i,
  m as b,
  E as s,
  B as l
} from "./CYj7RoHR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
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

function u(e, n, d) {
  t && i();
  var o = new l(e);
  b(() => {
    var a = n() ?? null;
    o.ensure(a, a && (f => d(f, a)))
  }, s)
}
export {
  u as c
};