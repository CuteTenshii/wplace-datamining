import {
  D as t,
  E as o
} from "./DjeFwfzX.js";
import {
  B as b
} from "./DG8YcVmp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function c(e, d, ...s) {
  var a = new b(e);
  t(() => {
    const n = d() ?? null;
    a.ensure(n, n && (r => n(r, ...s)))
  }, o)
}
export {
  c as s
};