import {
  t as y,
  k as c,
  l as u,
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
} from "./BTIK2p8F.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
  y(() => {
    var s = g;
    if (f === (f = d() ?? "")) {
      c && u();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (c) {
        h.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        b(h, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var n = D(t);
      if ((r || o) && (n = i(n)), b(i(n), n.lastChild), r || o)
        for (; i(n);) l.before(i(n));
      else l.before(n)
    }
  })
}
export {
  N as h
};