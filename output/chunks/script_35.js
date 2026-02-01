import {
  t as g,
  k as c,
  l as u,
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
} from "./DDHVoadr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "310d9926-9020-46e7-92ca-44346e0127a5", e._sentryDebugIdIdentifier = "sentry-dbid-310d9926-9020-46e7-92ca-44346e0127a5")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    f = "";
  g(() => {
    var s = b;
    if (f === (f = n() ?? "")) {
      c && u();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (c) {
        h.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(h, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var d = D(t);
      if ((r || o) && (d = i(d)), y(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};