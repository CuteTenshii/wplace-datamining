import {
  D as c,
  E as t
} from "./CsHGdBfZ.js";
import {
  B as o
} from "./BxovDFHw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function f(e, d, ...s) {
  var a = new o(e);
  c(() => {
    const n = d() ?? null;
    a.ensure(n, n && (r => n(r, ...s)))
  }, t)
}
export {
  f as s
};