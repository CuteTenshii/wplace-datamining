import {
  D as t,
  E as o
} from "./jMNCXwTX.js";
import {
  B as c
} from "./bJ_86NIk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1c8a904-0302-4edb-b6cd-d071092c26de", e._sentryDebugIdIdentifier = "sentry-dbid-a1c8a904-0302-4edb-b6cd-d071092c26de")
  } catch {}
})();

function b(e, d, ...a) {
  var s = new c(e);
  t(() => {
    const n = d() ?? null;
    s.ensure(n, n && (r => n(r, ...a)))
  }, o)
}
export {
  b as s
};