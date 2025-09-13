import {
  t as y,
  h as c,
  e as b,
  ad as g,
  ae as p,
  o as h,
  W as w,
  a9 as v,
  af as m,
  ag as E,
  ah as u,
  O as T,
  ai as D,
  P as i
} from "./JMoIuhVR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4097d37663b9a72f9231b790868cce52a6a81192"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e6dc6a2c-8e92-4fcf-be14-8400fa10b3bd", e._sentryDebugIdIdentifier = "sentry-dbid-e6dc6a2c-8e92-4fcf-be14-8400fa10b3bd")
  })()
} catch {}

function O(e, d, r = !1, o = !1, I = !1) {
  var l = e,
    t = "";
  y(() => {
    var n = g;
    if (t === (t = d() ?? "")) {
      c && b();
      return
    }
    if (n.nodes_start !== null && (p(n.nodes_start, n.nodes_end), n.nodes_start = n.nodes_end = null), t !== "") {
      if (c) {
        h.data;
        for (var a = b(), _ = a; a !== null && (a.nodeType !== w || a.data !== "");) _ = a, a = v(a);
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
  O as h
};