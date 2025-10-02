import {
  t as y,
  h as b,
  e as c,
  ab as g,
  ae as p,
  o as h,
  U as w,
  a7 as v,
  af as m,
  ag as E,
  ah as u,
  N as T,
  ai as D,
  O as i
} from "./DXwQ_faQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dafbc8967eb1989b1fe82a14eecd9a7bc2c33606"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "94d4e00b-a912-44a4-9c84-3fbf1f4139c4", e._sentryDebugIdIdentifier = "sentry-dbid-94d4e00b-a912-44a4-9c84-3fbf1f4139c4")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      b && c();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (b) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        u(h, _), l = T(a);
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