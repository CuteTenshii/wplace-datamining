import {
  h as s,
  e as u,
  i as p,
  E as y,
  j as _,
  k as g,
  l as c,
  m as h,
  o as m,
  q as v
} from "./BONTOiKC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
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

function E(e, a, b) {
  s && u();
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
        r && (f = document.createDocumentFragment(), f.append(l = _()), n && c.skipped_effects.add(n)), o = g(() => b(l, d))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};