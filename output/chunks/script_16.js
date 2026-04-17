import {
  C as t,
  E as o
} from "./BBqfZ3Cy.js";
import {
  B as i
} from "./Dd0VJ3Wc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function l(e, n, ...s) {
  var d = new i(e);
  t(() => {
    const a = n() ?? null;
    d.ensure(a, a && (r => a(r, ...s)))
  }, o)
}
export {
  l as s
};