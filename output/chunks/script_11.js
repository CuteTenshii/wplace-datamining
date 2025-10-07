import {
  h as l,
  e as b,
  i as p,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./DPblvP8E.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cc0c831cfe290b2f9f3fef653d3fc44d780a59c1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "95d59600-b7bc-412a-bf25-4f2854c96986", e._sentryDebugIdIdentifier = "sentry-dbid-95d59600-b7bc-412a-bf25-4f2854c96986")
  })()
} catch {}

function E(e, a, u) {
  l && b();
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
        var c = t;
        r && (f = document.createDocumentFragment(), f.append(c = _()), n && s.skipped_effects.add(n)), o = g(() => u(c, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), l && (t = m)
}
export {
  E as c
};