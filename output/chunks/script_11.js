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
} from "./KRt5sQSh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
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
    d, f, n = null,
    c = null;

  function o() {
    f && (v(f), f = null), n && (n.lastChild.remove(), t.before(n), n = null), f = c, c = null
  }
  p(() => {
    if (d !== (d = a())) {
      var i = h();
      if (d) {
        var r = t;
        i && (n = document.createDocumentFragment(), n.append(r = _()), f && s.skipped_effects.add(f)), c = g(() => u(r, d))
      }
      i ? s.add_callback(o) : o()
    }
  }, y), l && (t = m)
}
export {
  E as c
};