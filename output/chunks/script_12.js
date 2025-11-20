import {
  h as t,
  i,
  j as c,
  E as s,
  B as r
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02c42801-24c5-4fe6-bba3-6fc96fc9820b", e._sentryDebugIdIdentifier = "sentry-dbid-02c42801-24c5-4fe6-bba3-6fc96fc9820b")
  })()
} catch {}

function l(e, n, d) {
  t && i();
  var a = new r(e);
  c(() => {
    var f = n() ?? null;
    a.ensure(f, f && (o => d(o, f)))
  }, s)
}
export {
  l as c
};