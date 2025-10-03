import {
  t as c,
  h as _,
  e as h,
  N as g,
  O as p,
  o as u,
  P as w,
  Q as v,
  R as m,
  T,
  U as y,
  V as E,
  W as R,
  X as i
} from "./BONTOiKC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2a2e6210-ecf7-401d-92b8-6b34bb1b7b54", e._sentryDebugIdIdentifier = "sentry-dbid-2a2e6210-ecf7-401d-92b8-6b34bb1b7b54")
  })()
} catch {}

function N(e, d, r = !1, o = !1, D = !1) {
  var l = e,
    t = "";
  c(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      _ && h();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (_) {
        u.data;
        for (var a = h(), b = a; a !== null && (a.nodeType !== w || a.data !== "");) b = a, a = v(a);
        if (a === null) throw m(), T;
        y(u, b), l = E(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = R(s);
      if ((r || o) && (f = i(f)), y(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};