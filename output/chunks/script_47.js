import {
  G as t,
  m as i,
  k as s,
  l as b,
  B as r
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9647df8-bd9c-4145-bf02-da66d8c3eb53", e._sentryDebugIdIdentifier = "sentry-dbid-c9647df8-bd9c-4145-bf02-da66d8c3eb53")
  })()
} catch {}

function y(e, n, f) {
  s && b();
  var a = new r(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  y as k
};