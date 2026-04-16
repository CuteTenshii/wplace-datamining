import {
  D as t,
  E as c
} from "./CaCjFaGC.js";
import {
  B as o
} from "./6uFwxVbh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function f(e, n, ...a) {
  var s = new o(e);
  t(() => {
    const d = n() ?? null;
    s.ensure(d, d && (r => d(r, ...a)))
  }, c)
}
export {
  f as s
};