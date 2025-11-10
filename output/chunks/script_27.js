import {
  t as y,
  h as b,
  e as u,
  ao as g,
  aq as p,
  o as h,
  a6 as w,
  ak as v,
  ar as m,
  as as E,
  at as c,
  _ as T,
  au as D,
  a0 as i
} from "./DEdiZ67Z.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "06acc62f-716e-4451-b7b1-793b33fb6a3d", e._sentryDebugIdIdentifier = "sentry-dbid-06acc62f-716e-4451-b7b1-793b33fb6a3d")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      b && u();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (b) {
        h.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(h, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), c(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};