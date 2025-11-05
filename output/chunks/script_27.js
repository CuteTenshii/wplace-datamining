import {
  t as y,
  h as b,
  e as c,
  ao as g,
  aq as p,
  o as u,
  a6 as w,
  ak as v,
  ar as m,
  as as E,
  at as h,
  _ as T,
  au as D,
  a0 as i
} from "./LdQOE0HW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
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
    d = "";
  y(() => {
    var s = g;
    if (d === (d = n() ?? "")) {
      b && c();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), d !== "") {
      if (b) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        h(u, _), l = T(a);
        return
      }
      var t = d + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var f = D(t);
      if ((r || o) && (f = i(f)), h(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};