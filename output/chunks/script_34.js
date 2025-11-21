import {
  t as c,
  h as b,
  i as h,
  ao as g,
  ap as p,
  a2 as u,
  a3 as w,
  ak as v,
  aq as m,
  ar as E,
  as as y,
  W as T,
  at as D,
  X as i
} from "./DFT4Ffb_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d29f5a4f-5ab9-45bb-9092-001f0721e830", e._sentryDebugIdIdentifier = "sentry-dbid-d29f5a4f-5ab9-45bb-9092-001f0721e830")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  c(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      b && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (b) {
        u.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(u, _), l = T(a);
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