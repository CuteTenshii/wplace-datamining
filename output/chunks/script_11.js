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
} from "./Ho0vwyOn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a99f5b701b35c58895f1634e6901454a76d81d81"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad042923-d12d-4595-9018-836bd5bc9d8d", e._sentryDebugIdIdentifier = "sentry-dbid-ad042923-d12d-4595-9018-836bd5bc9d8d")
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