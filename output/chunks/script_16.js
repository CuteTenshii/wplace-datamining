import {
  D as t,
  E as o
} from "./CJNfechn.js";
import {
  B as b
} from "./4d85vL6s.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
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