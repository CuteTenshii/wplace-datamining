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
} from "./DQc9Bjlo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "96e7de35a79bbd0971b03a9483bfe62a1a391d64"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "c5676a6a-afed-4227-8555-1ad1a2540ba4", e._sentryDebugIdIdentifier = "sentry-dbid-c5676a6a-afed-4227-8555-1ad1a2540ba4")
  })()
} catch {}

function O(e, f, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  g(() => {
    var n = c;
    if (t === (t = f() ?? "")) {
      h && u();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (h) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(b, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((r || o) && (d = i(d)), y(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  O as h
};