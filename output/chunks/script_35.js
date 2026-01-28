import {
  t as b,
  k as u,
  l as h,
  ac as g,
  aq as p,
  J as y,
  X as w,
  a8 as v,
  ar as m,
  as as E,
  at as c,
  P as T,
  au as D,
  V as i
} from "./DguyhcA0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
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
  b(() => {
    var s = g;
    if (f === (f = d() ?? "")) {
      u && h();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (u) {
        y.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(y, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var n = D(t);
      if ((r || o) && (n = i(n)), c(i(n), n.lastChild), r || o)
        for (; i(n);) l.before(i(n));
      else l.before(n)
    }
  })
}
export {
  N as h
};