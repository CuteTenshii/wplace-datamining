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
} from "./nXP0Sia0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "22dd6d20080aececfaae9b3120dfb71899337f43"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "2a2e6210-ecf7-401d-92b8-6b34bb1b7b54", e._sentryDebugIdIdentifier = "sentry-dbid-2a2e6210-ecf7-401d-92b8-6b34bb1b7b54")
  })()
} catch {}

function N(e, f, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = f() ?? "")) {
      _ && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (_) {
        u.data;
        for (var a = h(), b = a; a !== null && (a.nodeType !== w || a.data !== "");) b = a, a = v(a);
        if (a === null) throw m(), T;
        c(u, b), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var d = R(s);
      if ((r || o) && (d = i(d)), c(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};