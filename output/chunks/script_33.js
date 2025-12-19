import {
  t as g,
  k as u,
  l as h,
  ak as b,
  al as p,
  Z as c,
  _ as w,
  ag as v,
  am as m,
  an as T,
  ao as y,
  R as E,
  ap as R,
  T as i
} from "./D6bzUFXP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "98a8d4f7-0054-443a-9725-1d4cdd0d962e", e._sentryDebugIdIdentifier = "sentry-dbid-98a8d4f7-0054-443a-9725-1d4cdd0d962e")
  })()
} catch {}

function k(e, f, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  g(() => {
    var n = b;
    if (t === (t = f() ?? "")) {
      u && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (u) {
        c.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), T;
        y(c, _), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = R(s);
      if ((r || o) && (d = i(d)), y(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  k as h
};