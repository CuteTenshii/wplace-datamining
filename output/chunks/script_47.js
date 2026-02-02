import {
  aj as t,
  m as i,
  k as r,
  l as s
} from "./BrDbkhPu.js";
import {
  B as l
} from "./DSll-rKl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "58791f92-8da6-480b-a9e3-bd9f0e2188fb", e._sentryDebugIdIdentifier = "sentry-dbid-58791f92-8da6-480b-a9e3-bd9f0e2188fb")
  })()
} catch {}

function u(e, n, d) {
  r && s();
  var a = new l(e),
    o = !t();
  i(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), a.ensure(f, d)
  })
}
export {
  u as k
};