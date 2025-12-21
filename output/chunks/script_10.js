import {
  k as a,
  l as b,
  m as i,
  E as s,
  B as l
} from "./Bo8srw-U.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "df9c0bc1fb3c4ec52327763de3771537961b5859"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "03bf059d-b0bd-41ed-93f5-56c412b0f6cf", e._sentryDebugIdIdentifier = "sentry-dbid-03bf059d-b0bd-41ed-93f5-56c412b0f6cf")
  })()
} catch {}

function c(e, n, f) {
  a && b();
  var o = new l(e);
  i(() => {
    var d = n() ?? null;
    o.ensure(d, d && (t => f(t, d)))
  }, s)
}
export {
  c
};