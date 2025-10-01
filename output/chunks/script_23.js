import {
  t as y,
  h,
  e as b,
  ab as g,
  ae as p,
  o as u,
  U as w,
  a7 as v,
  af as m,
  ag as E,
  ah as c,
  N as T,
  ai as D,
  O as i
} from "./Cp2nYQu0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
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
    d = "";
  y(() => {
    var s = g;
    if (d === (d = n() ?? "")) {
      h && b();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), d !== "") {
      if (h) {
        u.data;
        for (var a = b(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        c(u, _), l = T(a);
        return
      }
      var t = d + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var f = D(t);
      if ((r || o) && (f = i(f)), c(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};