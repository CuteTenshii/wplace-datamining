import {
  t as y,
  h as b,
  e as c,
  V as g,
  W as p,
  o as h,
  X as w,
  Y as v,
  Z as m,
  _ as E,
  a0 as u,
  a1 as T,
  a2 as D,
  a3 as i
} from "./j_iXX3SE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "108345bc-b656-4acd-859d-d02122b07aad", e._sentryDebugIdIdentifier = "sentry-dbid-108345bc-b656-4acd-859d-d02122b07aad")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    f = "";
  y(() => {
    var s = g;
    if (f === (f = n() ?? "")) {
      b && c();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (b) {
        h.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        u(h, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var d = D(t);
      if ((r || o) && (d = i(d)), u(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};