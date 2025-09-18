import {
  t as b,
  h,
  e as u,
  ad as g,
  ae as p,
  o as c,
  W as w,
  a9 as v,
  af as m,
  ag as E,
  ah as y,
  O as T,
  ai as D,
  P as i
} from "./DUey02Nl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3c9334ae758047b148030b2b1b11409cfc37ff31"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3767afef-4a04-42aa-9935-4f37d489e00c", e._sentryDebugIdIdentifier = "sentry-dbid-3767afef-4a04-42aa-9935-4f37d489e00c")
  })()
} catch {}

function O(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  b(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      h && u();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (h) {
        c.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(c, _), l = T(a);
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