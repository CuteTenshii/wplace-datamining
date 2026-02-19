import {
  t as g,
  k as u,
  l as h,
  ac as b,
  aq as p,
  J as c,
  X as w,
  a8 as v,
  ar as m,
  as as E,
  at as y,
  P as T,
  au as D,
  V as i
} from "./Bl5qixfQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
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
    f = "";
  g(() => {
    var s = b;
    if (f === (f = d() ?? "")) {
      u && h();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (u) {
        c.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(c, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var n = D(t);
      if ((r || o) && (n = i(n)), y(i(n), n.lastChild), r || o)
        for (; i(n);) l.before(i(n));
      else l.before(n)
    }
  })
}
export {
  N as h
};