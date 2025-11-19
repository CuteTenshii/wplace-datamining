import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as l
} from "./C-9Y3fPa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
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

function c(e, n, a) {
  s && r();
  var f = new l(e),
    o = !i();
  t(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  c as k
};