import {
  t as g,
  h,
  e as c,
  ad as b,
  ae as p,
  o as u,
  W as w,
  a9 as v,
  af as m,
  ag as E,
  ah as y,
  O as T,
  ai as D,
  P as i
} from "./UY5Q__X9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c15cd1ace8f581becdea18dd6b1672f67db80587"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3767afef-4a04-42aa-9935-4f37d489e00c", e._sentryDebugIdIdentifier = "sentry-dbid-3767afef-4a04-42aa-9935-4f37d489e00c")
  })()
} catch {}

function O(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  g(() => {
    var n = b;
    if (t === (t = d() ?? "")) {
      h && c();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (h) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        y(u, _), l = T(a);
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