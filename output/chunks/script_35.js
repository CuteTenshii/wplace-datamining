import {
  t as y,
  k as u,
  l as h,
  ac as g,
  aq as p,
  J as b,
  X as w,
  a8 as v,
  ar as m,
  as as E,
  at as c,
  P as T,
  au as D,
  V as i
} from "./0lw74TdK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
    f = "";
  y(() => {
    var t = g;
    if (f === (f = s() ?? "")) {
      u && h();
      return
    }
    if (t.nodes_start !== null && (p(t.nodes_start, t.nodes_end), t.nodes_start = t.nodes_end = null), f !== "") {
      if (u) {
        b.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(b, _), l = T(a);
        return
      }
      var d = f + "";
      r ? d = `<svg>${d}</svg>` : o && (d = `<math>${d}</math>`);
      var n = D(d);
      if ((r || o) && (n = i(n)), c(i(n), n.lastChild), r || o)
        for (; i(n);) l.before(i(n));
      else l.before(n)
    }
  })
}
export {
  N as h
};