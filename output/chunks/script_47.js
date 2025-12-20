import {
  G as t,
  m as b,
  k as i,
  l as s,
  B as r
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9647df8-bd9c-4145-bf02-da66d8c3eb53", e._sentryDebugIdIdentifier = "sentry-dbid-c9647df8-bd9c-4145-bf02-da66d8c3eb53")
  })()
} catch {}

function c(e, n, a) {
  i && s();
  var f = new r(e),
    o = !t();
  b(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  c as k
};