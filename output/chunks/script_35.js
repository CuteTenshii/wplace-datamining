import {
  t as y,
  k as u,
  l as c,
  ac as g,
  aq as p,
  J as h,
  X as w,
  a8 as v,
  ar as m,
  as as E,
  at as b,
  P as T,
  au as D,
  V as i
} from "./CJKTONAG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "310d9926-9020-46e7-92ca-44346e0127a5", e._sentryDebugIdIdentifier = "sentry-dbid-310d9926-9020-46e7-92ca-44346e0127a5")
  })()
} catch {}

function N(e, s, r = !1, o = !1, I = !1) {
  var l = e,
    d = "";
  y(() => {
    var t = g;
    if (d === (d = s() ?? "")) {
      u && c();
      return
    }
    if (t.nodes_start !== null && (p(t.nodes_start, t.nodes_end), t.nodes_start = t.nodes_end = null), d !== "") {
      if (u) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        b(h, _), l = T(a);
        return
      }
      var f = d + "";
      r ? f = `<svg>${f}</svg>` : o && (f = `<math>${f}</math>`);
      var n = D(f);
      if ((r || o) && (n = i(n)), b(i(n), n.lastChild), r || o)
        for (; i(n);) l.before(i(n));
      else l.before(n)
    }
  })
}
export {
  N as h
};