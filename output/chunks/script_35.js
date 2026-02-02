import {
  t as g,
  k as u,
  l as c,
  ac as b,
  aq as p,
  J as h,
  X as w,
  a8 as v,
  ar as m,
  as as E,
  at as y,
  P as T,
  au as D,
  V as i
} from "./BrDbkhPu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "310d9926-9020-46e7-92ca-44346e0127a5", e._sentryDebugIdIdentifier = "sentry-dbid-310d9926-9020-46e7-92ca-44346e0127a5")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  g(() => {
    var n = b;
    if (t === (t = d() ?? "")) {
      u && c();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (u) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(h, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), y(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};