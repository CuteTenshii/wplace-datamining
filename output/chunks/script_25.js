import {
  t as y,
  h as c,
  e as u,
  ao as g,
  aq as p,
  o as h,
  a6 as w,
  ak as v,
  ar as m,
  as as E,
  at as b,
  _ as T,
  au as D,
  a0 as i
} from "./CYjwBiB9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "216ad21ec8568455da3c6d18d6f039f12382ac60"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f884be00-bc74-43cf-ad6f-dfbef35a42a5", e._sentryDebugIdIdentifier = "sentry-dbid-f884be00-bc74-43cf-ad6f-dfbef35a42a5")
  })()
} catch {}

function N(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      c && u();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (c) {
        h.data;
        for (var a = u(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
        if (a === null) throw m(), E;
        b(h, _), l = T(a);
        return
      }
      var s = t + "";
      r ? s = `<svg>${s}</svg>` : o && (s = `<math>${s}</math>`);
      var f = D(s);
      if ((r || o) && (f = i(f)), b(i(f), f.lastChild), r || o)
        for (; i(f);) l.before(i(f));
      else l.before(f)
    }
  })
}
export {
  N as h
};