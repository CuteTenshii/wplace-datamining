import {
  t as y,
  h as b,
  i as h,
  ao as g,
  ap as p,
  a2 as u,
  a3 as w,
  ak as v,
  aq as m,
  ar as E,
  as as c,
  W as T,
  at as D,
  X as i
} from "./CJTyhPUr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
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
    d = "";
  y(() => {
    var s = g;
    if (d === (d = n() ?? "")) {
      b && h();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), d !== "") {
      if (b) {
        u.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(u, _), l = T(a);
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