import {
  h as t,
  i,
  j as s,
  E as c,
  B as r
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02c42801-24c5-4fe6-bba3-6fc96fc9820b", e._sentryDebugIdIdentifier = "sentry-dbid-02c42801-24c5-4fe6-bba3-6fc96fc9820b")
  })()
} catch {}

function b(e, n, a) {
  t && i();
  var o = new r(e);
  s(() => {
    var f = n() ?? null;
    o.ensure(f, f && (d => a(d, f)))
  }, c)
}
export {
  b as c
};