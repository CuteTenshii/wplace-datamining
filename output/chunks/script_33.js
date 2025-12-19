import {
  t as b,
  k as u,
  l as h,
  ak as c,
  al as p,
  Z as y,
  _ as w,
  ag as v,
  am as m,
  an as T,
  ao as g,
  R as E,
  ap as R,
  T as i
} from "./DAiWoJQM.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "98a8d4f7-0054-443a-9725-1d4cdd0d962e", e._sentryDebugIdIdentifier = "sentry-dbid-98a8d4f7-0054-443a-9725-1d4cdd0d962e")
  })()
} catch {}

function k(e, n, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  b(() => {
    var f = c;
    if (t === (t = n() ?? "")) {
      u && h();
      return
    }
    if (f.nodes_start !== null && (p(f.nodes_start, f.nodes_end), f.nodes_start = f.nodes_end = null), t !== "") {
      if (u) {
        y.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), T;
        g(y, _), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = R(s);
      if ((r || o) && (d = i(d)), g(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  k as h
};