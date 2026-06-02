import {
  t as E,
  x as _,
  y as l,
  aB as y,
  aC as M,
  F as h,
  a8 as A,
  ap as C,
  aD as m,
  aE as w,
  aF as c,
  C as N,
  aG as T,
  aH as g,
  aI as H,
  a7 as d
} from "./Dbe4PVAU.js";

function b(u, p, r = !1, s = !1, O = !1) {
  var i = u,
    n = "";
  E(() => {
    var t = y;
    if (n === (n = p() ?? "")) {
      _ && l();
      return
    }
    if (t.nodes !== null && (M(t.nodes.start, t.nodes.end), t.nodes = null), n !== "") {
      if (_) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== A || a.data !== "");) o = a, a = C(a);
        if (a === null) throw m(), w;
        c(h, o), i = N(a);
        return
      }
      var v = r ? g : s ? H : void 0,
        f = T(r ? "svg" : s ? "math" : "template", v);
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