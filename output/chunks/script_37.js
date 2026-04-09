import {
  t as E,
  k as b,
  l as u,
  aD as g,
  aE as p,
  w as c,
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
} from "./Cu0FD5l7.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "a9a4f49c-5753-4b84-844f-721621b67db7", a._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(a, n, d = !1, s = !1, R = !1) {
  var i = a,
    f = "";
  E(() => {
    var t = g;
    if (f === (f = n() ?? "")) {
      b && u();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), f !== "") {
      if (b) {
        c.data;
        for (var e = u(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw T(), A;
        y(c, _), i = D(e);
        return
      }
      var h = d ? M : s ? N : void 0,
        o = I(d ? "svg" : s ? "math" : "template", h);
      o.innerHTML = f;
      var r = d || s ? o : o.content;
      if (y(l(r), r.lastChild), d || s)
        for (; l(r);) i.before(l(r));
      else i.before(r)
    }
  })
}
export {
  S as h
};