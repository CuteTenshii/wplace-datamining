import {
  t as b,
  k as u,
  l as c,
  ad as g,
  aq as p,
  J as h,
  Y as w,
  a9 as v,
  ar as m,
  as as E,
  at as y,
  P as T,
  au as D,
  W as i
} from "./C_uavZQJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "36242938-4a8e-4678-933b-6525c00a16fa", e._sentryDebugIdIdentifier = "sentry-dbid-36242938-4a8e-4678-933b-6525c00a16fa")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  b(() => {
    var f = g;
    if (t === (t = n() ?? "")) {
      u && c();
      return
    }
    if (f.nodes_start !== null && (p(f.nodes_start, f.nodes_end), f.nodes_start = f.nodes_end = null), t !== "") {
      if (u) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(h, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((r || o) && (d = i(d)), y(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};