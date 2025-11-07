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
} from "./CoAY_RIV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "b17aa758-f24f-469a-b814-f63646c2c0b1", e._sentryDebugIdIdentifier = "sentry-dbid-b17aa758-f24f-469a-b814-f63646c2c0b1")
  })()
} catch {}

function E(e, f, b) {
  s && u();
  var t = e,
    d, a, n = null,
    o = null;

  function i() {
    a && (v(a), a = null), n && (n.lastChild.remove(), t.before(n), n = null), a = o, o = null
  }
  p(() => {
    if (d !== (d = f())) {
      var r = h();
      if (d) {
        var l = t;
        r && (n = document.createDocumentFragment(), n.append(l = _()), a && c.skipped_effects.add(a)), o = g(() => b(l, d))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};