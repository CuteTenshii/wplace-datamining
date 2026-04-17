import {
  t as E,
  A as b,
  B as c,
  aC as g,
  aD as p,
  J as u,
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
} from "./BBqfZ3Cy.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b", a._sentryDebugIdIdentifier = "sentry-dbid-f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b")
  } catch {}
})();

function C(a, s, r = !1, d = !1, R = !1) {
  var i = a,
    f = "";
  E(() => {
    var t = g;
    if (f === (f = s() ?? "")) {
      b && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), f !== "") {
      if (b) {
        u.data;
        for (var e = c(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw A(), T;
        y(u, _), i = D(e);
        return
      }
      var h = r ? M : d ? N : void 0,
        o = I(r ? "svg" : d ? "math" : "template", h);
      o.innerHTML = f;
      var n = r || d ? o : o.content;
      if (y(l(n), n.lastChild), r || d)
        for (; l(n);) i.before(l(n));
      else i.before(n)
    }
  })
}
export {
  C as h
};