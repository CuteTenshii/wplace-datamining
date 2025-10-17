import {
  t as y,
  h as c,
  e as b,
  ai as g,
  am as p,
  o as h,
  a0 as w,
  ae as v,
  an as m,
  ao as E,
  ap as u,
  U as T,
  aq as D,
  V as i
} from "./DUWZzbWe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "96ba9a6a-b5e1-4262-ab46-9c0d4693610c", e._sentryDebugIdIdentifier = "sentry-dbid-96ba9a6a-b5e1-4262-ab46-9c0d4693610c")
  })()
} catch {}

function N(e, n, o = !1, r = !1, I = !1) {
  var l = e,
    f = "";
  y(() => {
    var s = g;
    if (f === (f = n() ?? "")) {
      c && b();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (c) {
        h.data;
        for (var a = b(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        u(h, _), l = T(a);
        return
      }
      var t = f + "";
      o ? t = `<svg>${t}</svg>` : r && (t = `<math>${t}</math>`);
      var d = D(t);
      if ((o || r) && (d = i(d)), u(i(d), d.lastChild), o || r)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};