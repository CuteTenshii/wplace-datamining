import {
  D as t,
  E as f
} from "./CP18E9YK.js";
import {
  B as o
} from "./CWcicdud.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function i(e, n, ...s) {
  var a = new o(e);
  t(() => {
    const d = n() ?? null;
    a.ensure(d, d && (r => d(r, ...s)))
  }, f)
}
export {
  i as s
};