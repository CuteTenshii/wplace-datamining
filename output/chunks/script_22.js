import {
  P as b,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as f,
  Y as s,
  R as a,
  Z as p
} from "./Bo8srw-U.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "df9c0bc1fb3c4ec52327763de3771537961b5859"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7401be3d-9105-44bc-961f-2327c1b61700", e._sentryDebugIdIdentifier = "sentry-dbid-7401be3d-9105-44bc-961f-2327c1b61700")
  })()
} catch {}

function w(e, d) {
  let i = null,
    o = n;
  var l;
  if (n) {
    i = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = f(t);
    if (t === null) s(!1);
    else {
      var r = f(t);
      t.remove(), a(r)
    }
  }
  n || (l = document.head.appendChild(b()));
  try {
    y(() => d(l), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};