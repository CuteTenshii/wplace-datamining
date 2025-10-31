import {
  t as y,
  i as c,
  j as u,
  ao as g,
  aq as p,
  v as b,
  a6 as v,
  ak as w,
  ar as m,
  as as E,
  at as h,
  _ as T,
  au as D,
  a0 as i
} from "./DRybHg5Z.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52c32908d40da7633c03ed8a85ce90814a387626"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b216c4bb-c2c9-48ae-9eca-d3e513f6c14d", e._sentryDebugIdIdentifier = "sentry-dbid-b216c4bb-c2c9-48ae-9eca-d3e513f6c14d")
  })()
} catch {}

function N(e, n, r = !1, o = !1, I = !1) {
  var l = e,
    f = "";
  y(() => {
    var s = g;
    if (f === (f = n() ?? "")) {
      c && u();
      return
    }
    if (s.nodes_start !== null && (p(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), f !== "") {
      if (c) {
        b.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw m(), E;
        h(b, _), l = T(a);
        return
      }
      var t = f + "";
      r ? t = `<svg>${t}</svg>` : o && (t = `<math>${t}</math>`);
      var d = D(t);
      if ((r || o) && (d = i(d)), h(i(d), d.lastChild), r || o)
        for (; i(d);) l.before(i(d));
      else l.before(d)
    }
  })
}
export {
  N as h
};