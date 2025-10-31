import {
  t as y,
  i as c,
  j as u,
  ao as g,
  aq as p,
  v as b,
  a6 as v,
  ak as w,
  ar as m,
  as as E,
  at as h,
  _ as T,
  au as D,
  a0 as i
} from "./Ceyo7U-X.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1eec49a8880aaf0322f1c231fa7de26d6c5b6e23"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "b216c4bb-c2c9-48ae-9eca-d3e513f6c14d", e._sentryDebugIdIdentifier = "sentry-dbid-b216c4bb-c2c9-48ae-9eca-d3e513f6c14d")
  })()
} catch {}

function N(e, f, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = f() ?? "")) {
      c && u();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (c) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw m(), E;
        h(b, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((r || o) && (d = i(d)), h(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};