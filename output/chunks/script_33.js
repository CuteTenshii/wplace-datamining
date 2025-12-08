import {
  t as y,
  k as b,
  l as u,
  ak as g,
  al as p,
  Z as c,
  _ as w,
  ag as v,
  am as m,
  an as T,
  ao as h,
  R as E,
  ap as R,
  T as i
} from "./D9fqFAK1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "169eae4653f57d833d0e072bc2f6b253b1f72531"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "422ccdf7-65b7-436e-89b9-31dd5db27ae7", e._sentryDebugIdIdentifier = "sentry-dbid-422ccdf7-65b7-436e-89b9-31dd5db27ae7")
  })()
} catch {}

function k(e, f, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = f() ?? "")) {
      b && u();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (b) {
        c.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), T;
        h(c, _), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = R(s);
      if ((r || o) && (d = i(d)), h(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  k as h
};