import {
  m as t,
  E as o
} from "./BGZizgo7.js";
import {
  B as i
} from "./mM-ynKa3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "363b173e-aae9-4dd0-ac26-79a9cba3308d", e._sentryDebugIdIdentifier = "sentry-dbid-363b173e-aae9-4dd0-ac26-79a9cba3308d")
  } catch {}
})();

function c(e, d, ...a) {
  var s = new i(e);
  t(() => {
    const n = d() ?? null;
    s.ensure(n, n && (r => n(r, ...a)))
  }, o)
}
export {
  c as s
};