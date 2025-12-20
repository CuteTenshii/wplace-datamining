import {
  t as g,
  k as u,
  l as c,
  ak as b,
  al as p,
  Z as h,
  _ as w,
  ag as v,
  am as m,
  an as T,
  ao as y,
  R as E,
  ap as R,
  T as i
} from "./CniRY7QL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
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
      u && c();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (u) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), T;
        y(h, _), l = E(a);
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