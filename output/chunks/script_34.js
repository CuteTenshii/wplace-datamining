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
} from "./CYmALYaf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d29f5a4f-5ab9-45bb-9092-001f0721e830", e._sentryDebugIdIdentifier = "sentry-dbid-d29f5a4f-5ab9-45bb-9092-001f0721e830")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  c(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      b && h();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
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