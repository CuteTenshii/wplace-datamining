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
} from "./bciEXFM-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2fc0c566909334a37ac26a23e56a02c78685632f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "9dc3bcaa-438f-488e-b391-6b55ffb9a6c0", e._sentryDebugIdIdentifier = "sentry-dbid-9dc3bcaa-438f-488e-b391-6b55ffb9a6c0")
  })()
} catch {}

function E(e, f, u) {
  l && b();
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
        var c = t;
        r && (a = document.createDocumentFragment(), a.append(c = _()), n && s.skipped_effects.add(n)), o = g(() => u(c, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), l && (t = m)
}
export {
  E as c
};