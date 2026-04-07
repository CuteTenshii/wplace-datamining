import {
  a4 as y,
  m as o,
  ax as u,
  ay as E,
  k as s,
  ab as g,
  ar as i,
  v as n,
  q as l,
  w as _,
  aa as p
} from "./DEEyd5H-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, a) {
  let d = null,
    r = s;
  var f;
  if (s) {
    d = _;
    for (var t = p(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = i(t);
    if (t === null) n(!1);
    else {
      var b = i(t);
      t.remove(), l(b)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    o(() => a(f), u | E)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  v as h
};