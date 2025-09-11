import {
  h as s,
  e as p,
  i as b,
  E as y,
  j as _,
  k as g,
  l as c,
  m as h,
  o as m,
  q as v
} from "./DeRLOp5b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9e594f39530defa0eea34168198e146d1118d931"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "a2a57e45-0423-4eef-8d5c-342488943663", e._sentryDebugIdIdentifier = "sentry-dbid-a2a57e45-0423-4eef-8d5c-342488943663")
  })()
} catch {}

function E(e, f, u) {
  s && p();
  var t = e,
    d, n, a = null,
    o = null;

  function i() {
    n && (v(n), n = null), a && (a.lastChild.remove(), t.before(a), a = null), n = o, o = null
  }
  b(() => {
    if (d !== (d = f())) {
      var r = h();
      if (d) {
        var l = t;
        r && (a = document.createDocumentFragment(), a.append(l = _()), n && c.skipped_effects.add(n)), o = g(() => u(l, d))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};