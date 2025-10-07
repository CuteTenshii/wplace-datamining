import {
  t as y,
  h as _,
  e as h,
  N as g,
  O as p,
  o as u,
  P as w,
  Q as v,
  R as m,
  T,
  U as c,
  V as E,
  W as R,
  X as i
} from "./W5rmRnnG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a2e6210-ecf7-401d-92b8-6b34bb1b7b54", e._sentryDebugIdIdentifier = "sentry-dbid-2a2e6210-ecf7-401d-92b8-6b34bb1b7b54")
  })()
} catch {}

function N(e, n, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  y(() => {
    var d = g;
    if (t === (t = n() ?? "")) {
      _ && h();
      return
    }
    if (d.nodes_start !== null && (p(d.nodes_start, d.nodes_end), d.nodes_start = d.nodes_end = null), t !== "") {
      if (_) {
        u.data;
        for (var a = h(), b = a; a !== null && (a.nodeType !== w || a.data !== "");) b = a, a = v(a);
        if (a === null) throw m(), T;
        c(u, b), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = R(s);
      if ((r || o) && (f = i(f)), c(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};