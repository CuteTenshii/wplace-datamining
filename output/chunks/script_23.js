import {
  t as y,
  h as b,
  e as h,
  ab as g,
  ae as p,
  o as c,
  U as w,
  a7 as v,
  af as m,
  ag as E,
  ah as u,
  N as T,
  ai as D,
  O as i
} from "./Cj6syOWc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4a8af4cdbd1ae06ce10a324d70e489e27b1b6720"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "94d4e00b-a912-44a4-9c84-3fbf1f4139c4", e._sentryDebugIdIdentifier = "sentry-dbid-94d4e00b-a912-44a4-9c84-3fbf1f4139c4")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      b && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (b) {
        c.data;
        for (var a = h(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        u(c, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), u(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};