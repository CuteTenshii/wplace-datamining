import {
  t as g,
  k as u,
  l as h,
  aj as b,
  aq as p,
  X as y,
  Y as w,
  af as v,
  ar as m,
  as as E,
  at as c,
  O as T,
  au as D,
  V as i
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "655c5082-d812-4a34-b774-13062345d780", e._sentryDebugIdIdentifier = "sentry-dbid-655c5082-d812-4a34-b774-13062345d780")
  })()
} catch {}

function O(e, f, r = !1, o = !1, I = !1) {
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
        y.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(y, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((r || o) && (d = i(d)), c(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  O as h
};