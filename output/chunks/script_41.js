import {
  y as i,
  j as t,
  h as s,
  i as r,
  B as l
} from "./BYknGsrl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "883330f6-cac8-4bb0-b244-6e36ad27ffd3", e._sentryDebugIdIdentifier = "sentry-dbid-883330f6-cac8-4bb0-b244-6e36ad27ffd3")
  })()
} catch {}

function y(e, n, f) {
  s && r();
  var a = new l(e),
    o = !i();
  t(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  y as k
};