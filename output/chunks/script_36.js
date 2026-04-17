import {
  t as E,
  A as b,
  B as u,
  aC as g,
  aD as p,
  J as c,
  aa as v,
  ar as w,
  aE as A,
  aF as T,
  aG as y,
  G as D,
  aH as I,
  aI as M,
  aJ as N,
  a9 as l
} from "./CdM0B1iz.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b", a._sentryDebugIdIdentifier = "sentry-dbid-f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b")
  } catch {}
})();

function C(a, s, r = !1, f = !1, R = !1) {
  var i = a,
    d = "";
  E(() => {
    var t = g;
    if (d === (d = s() ?? "")) {
      b && u();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), d !== "") {
      if (b) {
        c.data;
        for (var e = u(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw A(), T;
        y(c, _), i = D(e);
        return
      }
      var h = r ? M : f ? N : void 0,
        o = I(r ? "svg" : f ? "math" : "template", h);
      o.innerHTML = d;
      var n = r || f ? o : o.content;
      if (y(l(n), n.lastChild), r || f)
        for (; l(n);) i.before(l(n));
      else i.before(n)
    }
  })
}
export {
  C as h
};