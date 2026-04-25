import {
  t as E,
  A as _,
  B as l,
  aC as A,
  aD as M,
  J as h,
  aa as y,
  ar as m,
  aE as w,
  aF as C,
  aG as c,
  G as N,
  aH as T,
  aI as g,
  aJ as H,
  a9 as d
} from "./C21-Odj5.js";

function b(u, v, r = !1, s = !1, O = !1) {
  var i = u,
    n = "";
  E(() => {
    var t = A;
    if (n === (n = v() ?? "")) {
      _ && l();
      return
    }
    if (t.nodes !== null && (M(t.nodes.start, t.nodes.end), t.nodes = null), n !== "") {
      if (_) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== y || a.data !== "");) o = a, a = m(a);
        if (a === null) throw w(), C;
        c(h, o), i = N(a);
        return
      }
      var p = r ? g : s ? H : void 0,
        f = T(r ? "svg" : s ? "math" : "template", p);
      f.innerHTML = n;
      var e = r || s ? f : f.content;
      if (c(d(e), e.lastChild), r || s)
        for (; d(e);) i.before(d(e));
      else i.before(e)
    }
  })
}
export {
  b as h
};