import {
  t as E,
  k as b,
  l as c,
  aD as g,
  aE as p,
  w as u,
  ab as v,
  ar as w,
  aF as T,
  aG as A,
  aH as y,
  q as D,
  aI as I,
  aJ as M,
  aK as N,
  aa as l
} from "./D28CkLTn.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "a9a4f49c-5753-4b84-844f-721621b67db7", a._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(a, n, f = !1, s = !1, R = !1) {
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
      var h = f ? M : s ? N : void 0,
        o = I(f ? "svg" : s ? "math" : "template", h);
      o.innerHTML = d;
      var r = f || s ? o : o.content;
      if (y(l(r), r.lastChild), f || s)
        for (; l(r);) i.before(l(r));
      else i.before(r)
    }
  })
}
export {
  S as h
};