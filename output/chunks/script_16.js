import {
  D as t,
  E as o
} from "./B8NcJmf7.js";
import {
  B as f
} from "./DtfkCBwv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function b(e, n, ...s) {
  var a = new f(e);
  t(() => {
    const d = n() ?? null;
    a.ensure(d, d && (r => d(r, ...s)))
  }, o)
}
export {
  b as s
};