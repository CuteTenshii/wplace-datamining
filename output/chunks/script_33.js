import {
  t as y,
  k as b,
  l as c,
  H as g,
  I as p,
  J as u,
  K as w,
  L as v,
  M as m,
  N as E,
  O as h,
  P as T,
  Q as I,
  R as i
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "99d8b89a-c302-4d10-bb7e-b8a18091cdc6", e._sentryDebugIdIdentifier = "sentry-dbid-99d8b89a-c302-4d10-bb7e-b8a18091cdc6")
  })()
} catch {}

function N(e, n, r = !1, o = !1, R = !1) {
  var l = e,
    t = "";
  y(() => {
    var f = g;
    if (t === (t = n() ?? "")) {
      b && c();
      return
    }
    if (f.nodes_start !== null && (p(f.nodes_start, f.nodes_end), f.nodes_start = f.nodes_end = null), t !== "") {
      if (b) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        h(u, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = I(s);
      if ((r || o) && (d = i(d)), h(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};