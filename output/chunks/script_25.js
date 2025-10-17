import {
  t as c,
  h,
  e as u,
  ak as g,
  am as p,
  o as y,
  a2 as w,
  ag as v,
  an as m,
  ao as E,
  ap as b,
  W as T,
  aq as D,
  X as i
} from "./Bry4mTdq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ec089746-afdd-4e54-8060-876aa3d7d595", e._sentryDebugIdIdentifier = "sentry-dbid-ec089746-afdd-4e54-8060-876aa3d7d595")
  })()
} catch {}

function N(e, n, o = !1, r = !1, I = !1) {
  var l = e,
    t = "";
  c(() => {
    var f = g;
    if (t === (t = n() ?? "")) {
      h && u();
      return
    }
    if (f.nodes_start !== null && (p(f.nodes_start, f.nodes_end), f.nodes_start = f.nodes_end = null), t !== "") {
      if (h) {
        y.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        b(y, _), l = T(a);
        return
      }
      var s = t + "";
      o ? s = `<svg>${s}</svg>` : r && (s = `<math>${s}</math>`);
      var d = D(s);
      if ((o || r) && (d = i(d)), b(i(d), d.lastChild), o || r)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};