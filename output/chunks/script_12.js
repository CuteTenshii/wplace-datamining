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
} from "./QY1-WrVz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93d2d5a1c9ea65de4db2c69715b442df23632ed6"
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

function E(e, f, u) {
  c && b();
  var t = e,
    d, n, a = null,
    o = null;

  function i() {
    n && (v(n), n = null), a && (a.lastChild.remove(), t.before(a), a = null), n = o, o = null
  }
  p(() => {
    if (d !== (d = f())) {
      var r = h();
      if (d) {
        var l = t;
        r && (a = document.createDocumentFragment(), a.append(l = _()), n && s.skipped_effects.add(n)), o = g(() => u(l, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), c && (t = m)
}
export {
  E as c
};