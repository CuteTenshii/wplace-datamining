import {
  D as t,
  E as b
} from "./aONqeBJ4.js";
import {
  B as o
} from "./DZy5tdVJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function f(e, d, ...a) {
  var s = new o(e);
  t(() => {
    const n = d() ?? null;
    s.ensure(n, n && (r => n(r, ...a)))
  }, b)
}
export {
  f as s
};