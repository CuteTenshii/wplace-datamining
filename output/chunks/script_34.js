import {
  t as c,
  k as u,
  l as h,
  aj as g,
  aq as p,
  X as y,
  Y as w,
  af as v,
  ar as m,
  as as E,
  at as b,
  O as T,
  au as D,
  V as i
} from "./CYj7RoHR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "655c5082-d812-4a34-b774-13062345d780", e._sentryDebugIdIdentifier = "sentry-dbid-655c5082-d812-4a34-b774-13062345d780")
  })()
} catch {}

function O(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  c(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      u && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (u) {
        y.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        b(y, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), b(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  O as h
};