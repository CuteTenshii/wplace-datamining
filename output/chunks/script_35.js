import {
  t as g,
  k as u,
  l as h,
  ac as b,
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
} from "./Pvk3sEWX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "310d9926-9020-46e7-92ca-44346e0127a5", e._sentryDebugIdIdentifier = "sentry-dbid-310d9926-9020-46e7-92ca-44346e0127a5")
  })()
} catch {}

function N(e, f, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  g(() => {
    var n = b;
    if (t === (t = f() ?? "")) {
      u && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (u) {
        y.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(y, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((r || o) && (d = i(d)), c(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};