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
} from "./DBVFc_3b.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "a9a4f49c-5753-4b84-844f-721621b67db7", a._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(a, n, d = !1, s = !1, R = !1) {
  var i = a,
    t = "";
  E(() => {
    var f = g;
    if (t === (t = n() ?? "")) {
      b && c();
      return
    }
    if (f.nodes !== null && (p(f.nodes.start, f.nodes.end), f.nodes = null), t !== "") {
      if (b) {
        u.data;
        for (var e = c(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw T(), A;
        y(u, _), i = D(e);
        return
      }
      var h = d ? M : s ? N : void 0,
        o = I(d ? "svg" : s ? "math" : "template", h);
      o.innerHTML = t;
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