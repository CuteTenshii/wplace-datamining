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
} from "./BDq-HR17.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b216c4bb-c2c9-48ae-9eca-d3e513f6c14d", e._sentryDebugIdIdentifier = "sentry-dbid-b216c4bb-c2c9-48ae-9eca-d3e513f6c14d")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      c && u();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (c) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw m(), E;
        h(b, _), l = T(a);
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