import {
  t as y,
  k as b,
  l as c,
  ak as g,
  al as p,
  Z as u,
  _ as w,
  ag as v,
  am as m,
  an as T,
  ao as h,
  R as E,
  ap as R,
  T as i
} from "./CfzALrzp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "422ccdf7-65b7-436e-89b9-31dd5db27ae7", e._sentryDebugIdIdentifier = "sentry-dbid-422ccdf7-65b7-436e-89b9-31dd5db27ae7")
  })()
} catch {}

function k(e, n, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  y(() => {
    var f = g;
    if (t === (t = n() ?? "")) {
      b && c();
      return
    }
    if (f.nodes_start !== null && (p(f.nodes_start, f.nodes_end), f.nodes_start = f.nodes_end = null), t !== "") {
      if (b) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), T;
        h(u, _), l = E(a);
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