import {
  t as E,
  B as b,
  C as c,
  aC as g,
  aD as p,
  K as u,
  ab as v,
  ar as w,
  aE as T,
  aF as A,
  aG as y,
  H as D,
  aH as I,
  aI as M,
  aJ as C,
  aa as l
} from "./CsHGdBfZ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "7590baa4-ff3c-46ff-bba0-15d80aa5e61b", a._sentryDebugIdIdentifier = "sentry-dbid-7590baa4-ff3c-46ff-bba0-15d80aa5e61b")
  } catch {}
})();

function m(a, n, r = !1, s = !1, N = !1) {
  var i = a,
    d = "";
  E(() => {
    var t = g;
    if (d === (d = n() ?? "")) {
      b && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), d !== "") {
      if (b) {
        u.data;
        for (var e = c(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw T(), A;
        y(u, _), i = D(e);
        return
      }
      var h = r ? M : s ? C : void 0,
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
  m as h
};