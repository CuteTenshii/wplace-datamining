import {
  t as y,
  h,
  i as u,
  an as g,
  ap as p,
  a1 as b,
  a2 as w,
  aj as v,
  aq as m,
  ar as E,
  as as c,
  V as T,
  at as D,
  W as i
} from "./CgLM89MT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2f23e3a8f8ea879ac9c94b9f80bbe3f77b879d5a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "83270889-9897-4efe-9ff1-b8c6d6829284", e._sentryDebugIdIdentifier = "sentry-dbid-83270889-9897-4efe-9ff1-b8c6d6829284")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    d = "";
  y(() => {
    var s = g;
    if (d === (d = n() ?? "")) {
      h && u();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), d !== "") {
      if (h) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(b, _), l = T(a);
        return
      }
      var t = d + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var f = D(t);
      if ((r || o) && (f = i(f)), c(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};