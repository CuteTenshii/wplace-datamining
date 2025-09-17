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
} from "./7GDDwXAz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7717d06f815fd9b38aee4f2cbbcd5d44b5e4fc77"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "2e35d111-83d8-4740-9318-b504f17ce66d", e._sentryDebugIdIdentifier = "sentry-dbid-2e35d111-83d8-4740-9318-b504f17ce66d")
  })()
} catch {}

function E(e, f, u) {
  s && b();
  var t = e,
    a, n, d = null,
    o = null;

  function i() {
    n && (v(n), n = null), d && (d.lastChild.remove(), t.before(d), d = null), n = o, o = null
  }
  p(() => {
    if (a !== (a = f())) {
      var r = h();
      if (a) {
        var l = t;
        r && (d = document.createDocumentFragment(), d.append(l = _()), n && c.skipped_effects.add(n)), o = g(() => u(l, a))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};