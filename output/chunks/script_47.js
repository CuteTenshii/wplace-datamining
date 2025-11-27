import {
  G as t,
  m as c,
  k as i,
  l as b,
  B as s
} from "./KxHJurs6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d750dbde4bb0382aeca7acd55c05ffdf7a87fc2c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bc956d75-f05c-4b81-9beb-3f898c1c507c", e._sentryDebugIdIdentifier = "sentry-dbid-bc956d75-f05c-4b81-9beb-3f898c1c507c")
  })()
} catch {}

function l(e, n, f) {
  i && b();
  var a = new s(e),
    o = !t();
  c(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  l as k
};