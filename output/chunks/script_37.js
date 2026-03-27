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
} from "./CGB_NLTm.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "ed2835ed53e86562ae86aab3834736b02129c64f"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "a9a4f49c-5753-4b84-844f-721621b67db7", a._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(a, s, r = !1, d = !1, R = !1) {
  var i = a,
    t = "";
  E(() => {
    var f = g;
    if (t === (t = s() ?? "")) {
      b && u();
      return
    }
    if (f.nodes !== null && (p(f.nodes.start, f.nodes.end), f.nodes = null), t !== "") {
      if (b) {
        c.data;
        for (var e = u(), _ = e; e !== null && (e.nodeType !== v || e.data !== "");) _ = e, e = w(e);
        if (e === null) throw T(), A;
        y(c, _), i = D(e);
        return
      }
      var h = r ? M : d ? N : void 0,
        o = I(r ? "svg" : d ? "math" : "template", h);
      o.innerHTML = t;
      var n = r || d ? o : o.content;
      if (y(l(n), n.lastChild), r || d)
        for (; l(n);) i.before(l(n));
      else i.before(n)
    }
  })
}
export {
  S as h
};