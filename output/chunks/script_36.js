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
} from "./CaCjFaGC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7590baa4-ff3c-46ff-bba0-15d80aa5e61b", e._sentryDebugIdIdentifier = "sentry-dbid-7590baa4-ff3c-46ff-bba0-15d80aa5e61b")
  } catch {}
})();

function m(e, n, r = !1, s = !1, N = !1) {
  var i = e,
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
        for (var a = c(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw T(), A;
        y(u, _), i = D(a);
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