import {
  h as c,
  e as u,
  i as p,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./Cp2nYQu0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9dc3bcaa-438f-488e-b391-6b55ffb9a6c0", e._sentryDebugIdIdentifier = "sentry-dbid-9dc3bcaa-438f-488e-b391-6b55ffb9a6c0")
  })()
} catch {}

function E(e, a, b) {
  c && u();
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
        r && (f = document.createDocumentFragment(), f.append(l = _()), n && s.skipped_effects.add(n)), o = g(() => b(l, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), c && (t = m)
}
export {
  E as c
};