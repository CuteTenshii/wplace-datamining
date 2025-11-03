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
} from "./WvGh61NJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd4f8190f88bd342b0302e9b73d1fd999bcdb862"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0c7e9ade-f690-4cd8-8cf0-454eb2cef092", e._sentryDebugIdIdentifier = "sentry-dbid-0c7e9ade-f690-4cd8-8cf0-454eb2cef092")
  })()
} catch {}

function E(e, d, u) {
  l && b();
  var t = e,
    a, n, f = null,
    o = null;

  function i() {
    n && (v(n), n = null), f && (f.lastChild.remove(), t.before(f), f = null), n = o, o = null
  }
  p(() => {
    if (a !== (a = d())) {
      var r = h();
      if (a) {
        var c = t;
        r && (f = document.createDocumentFragment(), f.append(c = _()), n && s.skipped_effects.add(n)), o = g(() => u(c, a))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), l && (t = m)
}
export {
  E as c
};