import {
  t as g,
  h,
  e as u,
  ad as c,
  ae as p,
  o as b,
  W as w,
  a9 as v,
  af as m,
  ag as E,
  ah as y,
  O as T,
  ai as D,
  P as i
} from "./BhjnkBaE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a151f46d-b473-4fac-83a8-342018515a45", e._sentryDebugIdIdentifier = "sentry-dbid-a151f46d-b473-4fac-83a8-342018515a45")
  })()
} catch {}

function O(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  g(() => {
    var d = c;
    if (t === (t = n() ?? "")) {
      h && u();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (h) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(b, _), l = T(a);
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
  O as h
};