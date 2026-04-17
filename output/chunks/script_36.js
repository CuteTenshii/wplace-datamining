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
} from "./CRmpufpB.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b", a._sentryDebugIdIdentifier = "sentry-dbid-f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b")
  } catch {}
})();

function C(a, n, r = !1, s = !1, R = !1) {
  var i = a,
    d = "";
  E(() => {
    var t = g;
    if (d === (d = n() ?? "")) {
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
      var h = r ? M : s ? N : void 0,
        o = I(r ? "svg" : s ? "math" : "template", h);
      o.innerHTML = d;
      var f = r || s ? o : o.content;
      if (y(l(f), f.lastChild), r || s)
        for (; l(f);) i.before(l(f));
      else i.before(f)
    }
  })
}
export {
  C as h
};