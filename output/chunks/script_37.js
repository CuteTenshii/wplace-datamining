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
} from "./BX08WKHH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "36242938-4a8e-4678-933b-6525c00a16fa", e._sentryDebugIdIdentifier = "sentry-dbid-36242938-4a8e-4678-933b-6525c00a16fa")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  b(() => {
    var n = g;
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