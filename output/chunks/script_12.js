import {
  h as t,
  i,
  j as s,
  E as c,
  B as r
} from "./Dff7lKDG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
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

function b(e, n, o) {
  t && i();
  var d = new r(e);
  s(() => {
    var f = n() ?? null;
    d.ensure(f, f && (a => o(a, f)))
  }, c)
}
export {
  b as c
};