import {
  t as E,
  k as c,
  l as u,
  aC as g,
  aD as p,
  w as b,
  a9 as v,
  aq as w,
  aE as T,
  aF as A,
  aG as y,
  q as D,
  aH as I,
  aI as M,
  aJ as N,
  a8 as l
} from "./C3nPqK5x.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "3518bcaa-dcd5-4073-a9f3-25290f89d595", a._sentryDebugIdIdentifier = "sentry-dbid-3518bcaa-dcd5-4073-a9f3-25290f89d595")
  } catch {}
})();

function C(a, r, d = !1, s = !1, R = !1) {
  var i = a,
    f = "";
  E(() => {
    var t = g;
    if (f === (f = r() ?? "")) {
      c && u();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), f !== "") {
      if (c) {
        b.data;
        for (var e = u(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw T(), A;
        y(b, _), i = D(e);
        return
      }
      var h = d ? M : s ? N : void 0,
        o = I(d ? "svg" : s ? "math" : "template", h);
      o.innerHTML = f;
      var n = d || s ? o : o.content;
      if (y(l(n), n.lastChild), d || s)
        for (; l(n);) i.before(l(n));
      else i.before(n)
    }
  })
}
export {
  C as h
};