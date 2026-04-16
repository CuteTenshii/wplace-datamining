import {
  D as t,
  E as o
} from "./BZHD_3xD.js";
import {
  B as f
} from "./L871gQAB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function c(e, d, ...a) {
  var s = new f(e);
  t(() => {
    const n = d() ?? null;
    s.ensure(n, n && (r => n(r, ...a)))
  }, o)
}
export {
  c as s
};