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
} from "./D6XPBeZs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed542c83f3200bdd2dcdd4a1cf4ac45a32651d00"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "e5c0c5a9-7ce2-4ce7-b201-7f97f79a6447", e._sentryDebugIdIdentifier = "sentry-dbid-e5c0c5a9-7ce2-4ce7-b201-7f97f79a6447")
  })()
} catch {}

function E(e, f, u) {
  l && b();
  var t = e,
    d, n, a = null,
    o = null;

  function c() {
    n && (v(n), n = null), a && (a.lastChild.remove(), t.before(a), a = null), n = o, o = null
  }
  p(() => {
    if (d !== (d = f())) {
      var i = h();
      if (d) {
        var r = t;
        i && (a = document.createDocumentFragment(), a.append(r = _()), n && s.skipped_effects.add(n)), o = g(() => u(r, d))
      }
      i ? s.add_callback(c) : c()
    }
  }, y), l && (t = m)
}
export {
  E as c
};