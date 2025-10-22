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
} from "./DlUXbix6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
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
    f, d, n = null,
    o = null;

  function i() {
    d && (v(d), d = null), n && (n.lastChild.remove(), t.before(n), n = null), d = o, o = null
  }
  p(() => {
    if (f !== (f = a())) {
      var r = h();
      if (f) {
        var l = t;
        r && (n = document.createDocumentFragment(), n.append(l = _()), d && c.skipped_effects.add(d)), o = g(() => u(l, f))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};