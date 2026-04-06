import {
  a4 as o,
  m as b,
  ax as u,
  ay as E,
  k as s,
  ab as g,
  ar as i,
  v as n,
  q as l,
  w as _,
  aa as p
} from "./BwyorQE6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, a) {
  let t = null,
    r = s;
  var f;
  if (s) {
    t = _;
    for (var d = p(document.head); d !== null && (d.nodeType !== g || d.data !== e);) d = i(d);
    if (d === null) n(!1);
    else {
      var y = i(d);
      d.remove(), l(y)
    }
  }
  s || (f = document.head.appendChild(o()));
  try {
    b(() => a(f), u | E)
  } finally {
    r && (n(!0), l(t))
  }
}
export {
  v as h
};