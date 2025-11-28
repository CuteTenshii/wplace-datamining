import {
  G as o,
  m as t,
  k as i,
  l as s,
  B as r
} from "./CfzALrzp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
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
  i && s();
  var a = new r(e),
    b = !o();
  t(() => {
    var d = n();
    b && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  l as k
};