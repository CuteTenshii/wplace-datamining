import {
  A as f,
  B as y,
  C as l,
  E as _,
  D as h,
  F as g,
  G as p,
  H as i,
  I as v,
  J as E
} from "./DK4l5t5k.js";
import {
  B as T
} from "./Bd4Wcq2n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f830a3cf-ef83-439b-ae42-8476a3b9fa37", e._sentryDebugIdIdentifier = "sentry-dbid-f830a3cf-ef83-439b-ae42-8476a3b9fa37")
  } catch {}
})();

function w(e, n, r) {
  var d;
  f && (d = E, y());
  var t = new T(e);
  l(() => {
    var a = n() ?? null;
    if (f) {
      var b = h(d),
        c = b === v,
        u = a !== null;
      if (c !== u) {
        var o = g();
        p(o), t.anchor = o, i(!1), t.ensure(a, a && (s => r(s, a))), i(!0);
        return
      }
    }
    t.ensure(a, a && (s => r(s, a)))
  }, _)
}
export {
  w as c
};