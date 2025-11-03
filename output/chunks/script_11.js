import {
  i as l,
  j as b,
  k as p,
  E as y,
  l as _,
  m as g,
  o as s,
  q as h,
  v as m,
  w as v
} from "./C6P_s34q.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5eef7edadf0463417f66f3780a2aa73c26362de2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0c7e9ade-f690-4cd8-8cf0-454eb2cef092", e._sentryDebugIdIdentifier = "sentry-dbid-0c7e9ade-f690-4cd8-8cf0-454eb2cef092")
  })()
} catch {}

function E(e, a, u) {
  l && b();
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
        var c = t;
        r && (f = document.createDocumentFragment(), f.append(c = _()), n && s.skipped_effects.add(n)), o = g(() => u(c, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), l && (t = m)
}
export {
  E as c
};