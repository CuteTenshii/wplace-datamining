import {
  h as c,
  e as b,
  i as p,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./CBHD1ITq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c59cd04c2fee1edb5d1a51fc2b49888cf98f5500"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2a57e45-0423-4eef-8d5c-342488943663", e._sentryDebugIdIdentifier = "sentry-dbid-a2a57e45-0423-4eef-8d5c-342488943663")
  })()
} catch {}

function E(e, a, u) {
  c && b();
  var t = e,
    d, n, f = null,
    o = null;

  function i() {
    n && (v(n), n = null), f && (f.lastChild.remove(), t.before(f), f = null), n = o, o = null
  }
  p(() => {
    if (d !== (d = a())) {
      var r = h();
      if (d) {
        var l = t;
        r && (f = document.createDocumentFragment(), f.append(l = _()), n && s.skipped_effects.add(n)), o = g(() => u(l, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), c && (t = m)
}
export {
  E as c
};