import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as c
} from "./FaeLmLA_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
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
  var f = new c(e),
    o = !i();
  t(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  y as k
};