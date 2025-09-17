import {
  h as s,
  e as b,
  i as p,
  E as y,
  j as _,
  k as g,
  l as c,
  m as h,
  o as m,
  q as v
} from "./CGRAleE5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4e903134a8e52eb1a8da35c90648b14dbd2e6388"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2e35d111-83d8-4740-9318-b504f17ce66d", e._sentryDebugIdIdentifier = "sentry-dbid-2e35d111-83d8-4740-9318-b504f17ce66d")
  })()
} catch {}

function E(e, a, u) {
  s && b();
  var t = e,
    f, n, d = null,
    o = null;

  function i() {
    n && (v(n), n = null), d && (d.lastChild.remove(), t.before(d), d = null), n = o, o = null
  }
  p(() => {
    if (f !== (f = a())) {
      var r = h();
      if (f) {
        var l = t;
        r && (d = document.createDocumentFragment(), d.append(l = _()), n && c.skipped_effects.add(n)), o = g(() => u(l, f))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};