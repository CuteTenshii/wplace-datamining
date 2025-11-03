import {
  t as y,
  i as _,
  j as b,
  ao as g,
  aq as p,
  v as u,
  a6 as v,
  ak as w,
  ar as m,
  as as E,
  at as h,
  _ as T,
  au as D,
  a0 as i
} from "./KRt5sQSh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b216c4bb-c2c9-48ae-9eca-d3e513f6c14d", e._sentryDebugIdIdentifier = "sentry-dbid-b216c4bb-c2c9-48ae-9eca-d3e513f6c14d")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      _ && b();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (_) {
        u.data;
        for (var a = b(), c = a; a !== null && (a.nodeType !== v || a.data !== "");) c = a, a = w(a);
        if (a === null) throw m(), E;
        h(u, c), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), h(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};