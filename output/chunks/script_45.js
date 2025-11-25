import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as l
} from "./BAiyaAMH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
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

function y(e, n, d) {
  s && r();
  var f = new l(e),
    o = !i();
  t(() => {
    var a = n();
    o && a !== null && typeof a == "object" && (a = {}), f.ensure(a, d)
  })
}
export {
  y as k
};