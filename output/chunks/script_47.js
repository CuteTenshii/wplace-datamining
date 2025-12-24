import {
  G as t,
  m as b,
  k as i,
  l as s,
  B as r
} from "./DjohHawT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
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

function y(e, n, a) {
  i && s();
  var f = new r(e),
    o = !t();
  b(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  y as k
};