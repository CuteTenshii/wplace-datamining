import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as l,
  Y as f,
  R as s,
  Z as p
} from "./KxHJurs6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d750dbde4bb0382aeca7acd55c05ffdf7a87fc2c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d55e75e-97ba-49c7-909d-0d34e96960bd", e._sentryDebugIdIdentifier = "sentry-dbid-6d55e75e-97ba-49c7-909d-0d34e96960bd")
  })()
} catch {}

function w(e, t) {
  let i = null,
    o = n;
  var a;
  if (n) {
    i = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = l(d);
    if (d === null) f(!1);
    else {
      var r = l(d);
      d.remove(), s(r)
    }
  }
  n || (a = document.head.appendChild(y()));
  try {
    b(() => t(a), u)
  } finally {
    o && (f(!0), s(i))
  }
}
export {
  w as h
};