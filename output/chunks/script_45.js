import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as l
} from "./DFT4Ffb_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3a2956c-0775-4a57-bfd6-5d216facd8c4", e._sentryDebugIdIdentifier = "sentry-dbid-c3a2956c-0775-4a57-bfd6-5d216facd8c4")
  })()
} catch {}

function y(e, n, a) {
  s && r();
  var f = new l(e),
    o = !i();
  t(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  y as k
};