import {
  G as t,
  m as i,
  k as s,
  l as r,
  B as b
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9647df8-bd9c-4145-bf02-da66d8c3eb53", e._sentryDebugIdIdentifier = "sentry-dbid-c9647df8-bd9c-4145-bf02-da66d8c3eb53")
  })()
} catch {}

function c(e, n, f) {
  s && r();
  var a = new b(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  c as k
};